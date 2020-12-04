module.exports = ({
  webpack: function(config, {isServer}) {
    if (isServer) {
      require('./scripts/generate-podcast-xml');
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
   exportPathMap: async function() {
    const routes = {
      '/': { page : '/'},
      "/about": { page: "/about"},
      "/quiz": { page: "/quiz"},
      "/magazine": { page: "/magazine"},
      "/success": {page: "/success"},
      "/sold-out": {page: "/sold-out"}
    }
  
    return routes
  },
  exportTrailingSlash: true
});