module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/headshots");
    eleventyConfig.addPassthroughCopy("styles");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}