
const path = require('path');

module.exports = {
    mode: 'development', // Or 'production' for optimization
    entry: './src/main.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Output bundle name
        path: path.resolve(__dirname, 'dist2Webpack'), // Output directory
    },
};
