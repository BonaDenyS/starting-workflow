module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    // PATH_PREFIX is injected by the build job as an env variable
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
};
