// config/plugins.js
module.exports = ({ env }) => ({
    upload: {
      config: {
        providerOptions: {
          sizeLimit: 250000 // example size in bytes
        }
      }
    }
  });