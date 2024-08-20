const million = require("million/compiler");
const millionLint = require("@million/lint");

module.exports = {
  webpack: {
    plugins: { add: [million.webpack(),millionLint.webpack({
        auto: {
            mute: false,
          },
    })] },
  },
};