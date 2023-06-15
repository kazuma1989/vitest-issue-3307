import { transform } from '@svgr/core'
import jsx from '@svgr/plugin-jsx'
import svgo from '@svgr/plugin-svgo'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import {
  normalizePath,
  transformWithEsbuild,
  type ESBuildOptions,
  type Plugin,
  type UserConfig,
} from 'vite'

export function reactSvgr(): Plugin {
  const strip = (id: string): string | null => {
    if (!id.endsWith('.svg?.tsx')) {
      return null
    }

    return id.slice(
      id.startsWith(NULL_BYTE) ? NULL_BYTE.length : 0,
      -'?.tsx'.length,
    )
  }

  let esbuildOptions: false | ESBuildOptions | undefined

  return {
    name: 'reactSvgr',

    enforce: 'pre',

    config(): UserConfig {
      return {
        optimizeDeps: {
          esbuildOptions: {
            loader: {
              '.svg': 'text',
            },
          },
        },
      }
    },

    configResolved(config) {
      esbuildOptions = config.esbuild
    },

    resolveId(source, importer) {
      const isTarget = !!strip(source)
      if (!isTarget) {
        return undefined
      }

      const alreadyResolved =
        source.startsWith(NULL_BYTE) || source.startsWith(VALID_ID_PREFIX)
      if (alreadyResolved) {
        return null
      }

      const basedir = importer ? path.dirname(importer) : process.cwd()
      const fsPath = path.resolve(basedir, source)

      const normalizedFsPath = normalizePath(fsPath)

      return `${NULL_BYTE}${normalizedFsPath}`
    },

    async load(id) {
      const filePath = strip(id)
      if (!filePath) {
        return undefined
      }

      return fs.readFile(filePath, 'utf-8')
    },

    async transform(code, id) {
      const filePath = strip(id)
      if (!filePath) {
        return undefined
      }

      const jsxCode = await transform(
        code,
        {
          jsxRuntime: 'classic',
          exportType: 'default',
          expandProps: 'end',
          svgo: true,
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: { attrs: '(data.*|id|fill|style)' },
              },
              { name: 'removeStyleElement' },
              { name: 'removeTitle' },
            ],
          },
        },
        {
          filePath,
          caller: {
            name: 'reactSvgr',
            defaultPlugins: [svgo, jsx],
          },
        },
      )

      if (esbuildOptions === false) {
        return {
          ast: {
            type: 'Program',
            start: 0,
            end: 0,
            sourceType: 'module',
            body: [],
          },
          code: jsxCode,
          map: null,
        }
      }

      return transformWithEsbuild(jsxCode, filePath, {
        loader: 'jsx',

        // https://github.com/vitejs/vite/blob/2bee2f3fb4a478a82b1d987c792dae549b26f3fa/packages/vite/src/node/plugins/esbuild.ts#L222-L237
        target: 'esnext',
        charset: 'utf8',
        ...esbuildOptions,
        minify: false,
        minifyIdentifiers: false,
        minifySyntax: false,
        minifyWhitespace: false,
        treeShaking: false,
        keepNames: false,
      })
    },
  }
}

const VALID_ID_PREFIX = '/@id/'

const NULL_BYTE = '\0'
