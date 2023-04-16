module.exports = {
    // ... other options
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"), // add fallback for zlib module
        "path": false // disable fallback for path module
      }
    }
  };
  