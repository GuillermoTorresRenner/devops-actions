/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/el-tomillo" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/el-tomillo/" : "",
};

export default nextConfig;
