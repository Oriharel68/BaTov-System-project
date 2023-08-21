
import rateLimit from 'express-rate-limit'

const secondInMs = 1000;

const DEFAULT_MESSAGE = "Too many requests";

export const rate5Limiter = rateLimit({
    windowMs: 5 * secondInMs,
    max:15,
    message: DEFAULT_MESSAGE,
})
export const rate10Limiter = rateLimit({
    windowMs: 10 * secondInMs,
    max:28,
    message: DEFAULT_MESSAGE,
})
export const rate20Limiter = rateLimit({
    windowMs: 20 * secondInMs,
    max:50,
    message: DEFAULT_MESSAGE,
})
export const rate30Limiter = rateLimit({
    windowMs: 30 * secondInMs,
    max:75,
    message: DEFAULT_MESSAGE,
})
export const rate60Limiter = rateLimit({
    windowMs: 60* secondInMs,
    max:100,
    message: DEFAULT_MESSAGE,
})
