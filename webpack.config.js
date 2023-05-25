module.exports = {
  entry: "./src/index.js",
  rules: [
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
    { test: /\.(png|svg|jpg|jped|gif)$/i, type: "asset/resource" },
    { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
  ],
};
