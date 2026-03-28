/**
 * cacheService.js — In-memory cache with 5-minute TTL
 * Uses a JavaScript Map to cache external API responses
 */

const cache = new Map();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

function get(key) {
  const entry = cache.get(key);  // Try to retrieve the cached entry using the provided key
  if (!entry) return null;  // If no entry is found in the cache, return null
  
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
   // If entry exists and is not expired, return the stored data
  return entry.data;
}

function set(key, data, ttl = DEFAULT_TTL) {
  cache.set(key, {
     // Actual data to be cached
    data,
        // Calculate expiration time by adding TTL (time-to-live) to current time
    expiresAt: Date.now() + ttl
  });
}

//Del key fnction
function del(key) {
  cache.delete(key); 
}

//Clear key function
function clear() {
  cache.clear();
}

// Periodic cleanup every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of cache) {
    if (now > entry.expiresAt) cache.delete(key);
  }
}, 10 * 60 * 1000);


module.exports = { get, set, del, clear };
