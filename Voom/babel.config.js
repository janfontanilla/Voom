// babel.config.js
module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        'expo-router/babel',            // <-- ensures expo-router’s entry.js is transformed properly
        'react-native-reanimated/plugin' // if you’re using Reanimated
      ],
    };
  };
  