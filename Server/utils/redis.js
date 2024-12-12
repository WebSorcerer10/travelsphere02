const redis = require('redis');

const client = redis.createClient({
    password: 'Kwj85OI7Gfh33Lt78cftC4FSXfrQA84s',
    socket: {
        host: 'redis-17845.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 17845
    }
});

(async () => {
    await client.connect();
})();

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.error('Redis connection error:', err);
});

module.exports = client;