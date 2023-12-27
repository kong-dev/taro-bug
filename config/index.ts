import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export default defineConfig(async (merge) => {
  const rootPath = path.resolve(__dirname, '..')

  const baseConfig: UserConfigExport = {
    projectName: 'taro-demo',
    designWidth: 375,
    deviceRatio: {
      375: 2,
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      enable: false,
    },
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    plugins: [],
    terser: {
      enable: true,
      config: {
        sourceMap: true,
      },
    },
    csso: {
      enable: true,
      config: {
        restructure: true,
        comments: false
      }
    },
    sass: {
      projectDirectory: rootPath,
      data: '',
    },
    mini: {
      enableSourceMap: true,
      sourceMapType: 'source-map',
      debugReact: false,
      miniCssExtractPluginOption: {
        ignoreOrder: true
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        pxtransform: {
          enable: true,
          config: {},
        },
        url: {
          enable: true,
          config: {
            limit: 1024,
          },
        },
        cssModules: {
          enable: true,
          config: {
            namingPattern: 'module',
            generateScopedName: '[local]_[hash:base64:7]',
          },
        },
      },
      webpackChain (chain) {
        chain.resolve.plugin('tsconfig-paths').use(new TsconfigPathsPlugin({
          configFile: './tsconfig.json',
        }))
      },
    },
  }

  return merge({}, baseConfig)
})
