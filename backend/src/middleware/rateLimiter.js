const rateMap = new Map();

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;

  const now = Date.now();
  const windowTime = 60 * 1000; // 1 min
  const limit = 100;

  if (!rateMap.has(ip)) {
    rateMap.set(ip, []);
  }

  const timestamps = rateMap.get(ip).filter(t => now - t < windowTime);

  timestamps.push(now);
  rateMap.set(ip, timestamps);

  if (timestamps.length > limit) {
    return res.status(429).json({
      message: "Too many requests, try later"
    });
  }

  next();
};