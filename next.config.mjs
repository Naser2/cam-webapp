import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import withVideos from 'next-videos'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

  // loaders: [
  //   {
  //     test: /\.html$/,
  //     loader: 'html-loader?attrs[]=video:src',
  //   },
  //   {
  //     test: /\.mp4$/,
  //     loader: 'url?limit=10000&mimetype=video/mp4',
  //   },
  // ],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})
export const widthVideos = withVideos()
export default withMDX(nextConfig)
