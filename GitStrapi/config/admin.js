module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df15728c6198c528ea48a9b3593b7ca0'),
  },
});
