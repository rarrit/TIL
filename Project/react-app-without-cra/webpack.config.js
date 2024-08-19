const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");

// `mode` 변수를 정의합니다.
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode, // Webpack 모드를 설정합니다.
  entry: "./src/app.js", // 애플리케이션의 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들 파일의 출력 위치
    filename: 'bundle.[contenthash].js' // 해시값이 포함된 번들 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일을 대상으로
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: "babel-loader", // Babel을 사용하여 JavaScript 변환
          options: {
            presets: ["@babel/preset-react"], // React를 변환하기 위한 Babel 프리셋
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // dist 폴더를 자동으로 정리
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), // HTML 템플릿 파일 경로
      filename: 'index.html', // 생성될 HTML 파일 이름
    }),
    new DotenvWebpack({
      path: `./.env.${mode}`, // 환경 변수 파일 경로
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 정적 파일을 서빙할 디렉토리
    },
    port: 9000, // 개발 서버 포트
    open: true, // 서버 시작 시 브라우저 자동 열림
    hot: true, // 핫 모듈 교체 활성화
  },
};