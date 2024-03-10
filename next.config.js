module.exports = {
  output: "export",
  webpack: function (config, { isServer }) {
    if (isServer) {
      require("./scripts/generate-podcast-xml");
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  exportPathMap: async function () {
    const routes = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/quiz": { page: "/quiz" },
      "/magazine": { page: "/magazine" },
      "/DIYBottleRecipe": { page: "/DIYBottleRecipe" },
      "/dressupgloria": { page: "/dressupgloria" },
    };

    return routes;
  },
  trailingSlash: true,
};
