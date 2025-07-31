import {RateLimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new RateLimit({
    redis : Redis.fromEnv(),
    limiter : RateLimit.slidingWindow(10, "20 s"),
});

export default ratelimit;