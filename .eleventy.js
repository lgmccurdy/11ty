module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/CSS/");
    eleventyConfig.addPassthroughCopy("./_src/images/");
    return{
        dir: {
            input: "_src",
            output: "_site"
        },
    };
};
