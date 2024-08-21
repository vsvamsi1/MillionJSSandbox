const million = require("million/compiler");
const millionLint = require("@million/lint");

module.exports = {
  webpack: {
    plugins: { add:
      [
        // comment out the plugin you don't want to use million js compiler
        million.webpack({
      auto: {
        mute: false,
      },
    }),
    millionLint.webpack({
        auto: {
            mute: false,
          },
    })] },
  },
};