module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BACKEND_URL', 'https://abdymovix-cms.onrender.com'), // Set to your backend's URL
  admin: {
    url: 'https://abdycms.netlify.app/admin', // URL of the Netlify-deployed admin panel
    serveAdminPanel: false, // Ensure the backend does not try to serve the admin panel
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
