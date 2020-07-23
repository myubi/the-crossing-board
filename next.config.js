module.exports = ({
  webpack: function(config) {
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
      "/magazine": { page: "/magazine"}
    }
  
    return routes
  }
});