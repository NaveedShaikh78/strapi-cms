module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'be3d168a40456c322f63a82e76f6e8c5'),
  },
});
