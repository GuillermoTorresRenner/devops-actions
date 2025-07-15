/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/el-tomillo",
  assetPrefix: "/el-tomillo/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/el-tomillo",
  },
};

export default nextConfig;
