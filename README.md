# vitest-issue-3307

This is a repository to illustrate an issue found by https://github.com/vitest-dev/vitest/pull/3307.

Based on https://github.com/vitest-dev/vitest/tree/bc49bac7e3222c1f9be274ef8f995f9149dc61da/examples/react.

## How to reproduce

### v0.32.0 will raise an error

Run `npm i -E vitest@0.32.0 && npm test` and you will get a `ERR_MODULE_NOT_FOUND` error (the PR was merged in v0.32.0):

```console
$ npm i -E vitest@0.32.0 && npm test

up to date, audited 253 packages in 689ms

49 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> test
> vitest


 DEV  v0.32.0 /Users/kazuma/work/kazuma1989/vitest-issue-3307

 ❯ test/basic.test.tsx (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/basic.test.tsx [ test/basic.test.tsx ]
Error: Cannot find module '/Users/kazuma/work/kazuma1989/vitest-issue-3307/components/star.svg?.tsx'.

- If you rely on tsconfig.json to resolve modules, please install "vite-tsconfig-paths" plugin to handle module resolution.
 - Make sure you don't have relative aliases in your Vitest config. Use absolute paths instead. Read more: https://vitest.dev/guide/common-errors
 ❯ components/Link.tsx:2:31
      1| import React, { useState } from 'react'
      2| import Star from './star.svg?.tsx'
       |                               ^
      3|
      4| const STATUS = {
 ❯ test/basic.test.tsx:3:31

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_MODULE_NOT_FOUND",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  no tests
   Start at  06:37:32
   Duration  340ms (transform 27ms, setup 0ms, collect 0ms, tests 0ms, environment 74ms, prepare 56ms)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

### But v0.31.4 won't

But run `npm i -E vitest@0.31.4 && npm test` and you won't get the error:

```console
$ npm i -E vitest@0.31.4 && npm test

up to date, audited 256 packages in 1s

50 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> test
> vitest


 DEV  v0.31.4 /Users/kazuma/work/kazuma1989/vitest-issue-3307

 ✓ test/basic.test.tsx (1)

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  06:41:48
   Duration  406ms (transform 97ms, setup 1ms, collect 101ms, tests 8ms, environment 64ms, prepare 57ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

## Diffs from [vitest/examples/react](https://github.com/vitest-dev/vitest/tree/bc49bac7e3222c1f9be274ef8f995f9149dc61da/examples/react)

`git diff 4b633bd25c41221ee7d24867384120d255f23eee..HEAD -w -- ':(exclude)*.json' ':(exclude)*.md' ':(exclude).gitignore'`

```diff
diff --git a/components/Link.tsx b/components/Link.tsx
index 4ae979c..67eb6c2 100644
--- a/components/Link.tsx
+++ b/components/Link.tsx
@@ -1,4 +1,5 @@
 import React, { useState } from 'react'
+import Star from './star.svg?.tsx'

 const STATUS = {
   HOVERED: 'hovered',
@@ -23,6 +24,7 @@ function Link({ page, children }: any) {
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
     >
+      <Star />
       {children}
     </a>
   )
diff --git a/components/star.svg b/components/star.svg
new file mode 100644
index 0000000..f90606d
--- /dev/null
+++ b/components/star.svg
@@ -0,0 +1,3 @@
+<svg height="210" width="500">
+  <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/>
+</svg>
\ No newline at end of file
diff --git a/global.d.ts b/global.d.ts
new file mode 100644
index 0000000..a34dca5
--- /dev/null
+++ b/global.d.ts
@@ -0,0 +1,6 @@
+/// <reference types="vite/client" />
+
+declare module '*.svg?.tsx' {
+  const exports: React.FC<React.SVGAttributes<SVGElement>>
+  export default exports
+}
diff --git a/reactSvgr.ts b/reactSvgr.ts
new file mode 100644
index 0000000..82a316e
--- /dev/null
+++ b/reactSvgr.ts
@@ -0,0 +1,145 @@
+import { transform } from '@svgr/core'
+import jsx from '@svgr/plugin-jsx'
+import svgo from '@svgr/plugin-svgo'
+import * as fs from 'node:fs/promises'
+import * as path from 'node:path'
+import {
+  normalizePath,
+  transformWithEsbuild,
+  type ESBuildOptions,
+  type Plugin,
+  type UserConfig,
+} from 'vite'
+
+export function reactSvgr(): Plugin {
+  const strip = (id: string): string | null => {
+    if (!id.endsWith('.svg?.tsx')) {
+      return null
+    }
+
+    return id.slice(
+      id.startsWith(NULL_BYTE) ? NULL_BYTE.length : 0,
+      -'?.tsx'.length,
+    )
+  }
+
+  let esbuildOptions: false | ESBuildOptions | undefined
+
+  return {
+    name: 'reactSvgr',
+
+    enforce: 'pre',
+
+    config(): UserConfig {
+      return {
+        optimizeDeps: {
+          esbuildOptions: {
+            loader: {
+              '.svg': 'text',
+            },
+          },
+        },
+      }
+    },
+
+    configResolved(config) {
+      esbuildOptions = config.esbuild
+    },
+
+    resolveId(source, importer) {
+      const isTarget = !!strip(source)
+      if (!isTarget) {
+        return undefined
+      }
+
+      const alreadyResolved =
+        source.startsWith(NULL_BYTE) || source.startsWith(VALID_ID_PREFIX)
+      if (alreadyResolved) {
+        return null
+      }
+
+      const basedir = importer ? path.dirname(importer) : process.cwd()
+      const fsPath = path.resolve(basedir, source)
+
+      const normalizedFsPath = normalizePath(fsPath)
+
+      return `${NULL_BYTE}${normalizedFsPath}`
+    },
+
+    async load(id) {
+      const filePath = strip(id)
+      if (!filePath) {
+        return undefined
+      }
+
+      return fs.readFile(filePath, 'utf-8')
+    },
+
+    async transform(code, id) {
+      const filePath = strip(id)
+      if (!filePath) {
+        return undefined
+      }
+
+      const jsxCode = await transform(
+        code,
+        {
+          jsxRuntime: 'classic',
+          exportType: 'default',
+          expandProps: 'end',
+          svgo: true,
+          svgoConfig: {
+            plugins: [
+              {
+                name: 'removeAttrs',
+                params: { attrs: '(data.*|id|fill|style)' },
+              },
+              { name: 'removeStyleElement' },
+              { name: 'removeTitle' },
+            ],
+          },
+        },
+        {
+          filePath,
+          caller: {
+            name: 'reactSvgr',
+            defaultPlugins: [svgo, jsx],
+          },
+        },
+      )
+
+      if (esbuildOptions === false) {
+        return {
+          ast: {
+            type: 'Program',
+            start: 0,
+            end: 0,
+            sourceType: 'module',
+            body: [],
+          },
+          code: jsxCode,
+          map: null,
+        }
+      }
+
+      return transformWithEsbuild(jsxCode, filePath, {
+        loader: 'jsx',
+
+        // https://github.com/vitejs/vite/blob/2bee2f3fb4a478a82b1d987c792dae549b26f3fa/packages/vite/src/node/plugins/esbuild.ts#L222-L237
+        target: 'esnext',
+        charset: 'utf8',
+        ...esbuildOptions,
+        minify: false,
+        minifyIdentifiers: false,
+        minifySyntax: false,
+        minifyWhitespace: false,
+        treeShaking: false,
+        keepNames: false,
+      })
+    },
+  }
+}
+
+const VALID_ID_PREFIX = '/@id/'
+
+const NULL_BYTE = '\0'
diff --git a/test/__snapshots__/basic.test.tsx.snap b/test/__snapshots__/basic.test.tsx.snap
index 40bdee6..cd040f9 100644
--- a/test/__snapshots__/basic.test.tsx.snap
+++ b/test/__snapshots__/basic.test.tsx.snap
@@ -1,4 +1,4 @@
-// Vitest Snapshot v1
+// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

 exports[`Link changes the class when hovered 1`] = `
 <a
@@ -7,6 +7,14 @@ exports[`Link changes the class when hovered 1`] = `
   onMouseEnter={[Function]}
   onMouseLeave={[Function]}
 >
+  <svg
+    height={210}
+    width={500}
+  >
+    <polygon
+      points="100,10 40,198 190,78 10,78 160,198"
+    />
+  </svg>
   Anthony Fu
 </a>
 `;
@@ -18,6 +26,14 @@ exports[`Link changes the class when hovered 2`] = `
   onMouseEnter={[Function]}
   onMouseLeave={[Function]}
 >
+  <svg
+    height={210}
+    width={500}
+  >
+    <polygon
+      points="100,10 40,198 190,78 10,78 160,198"
+    />
+  </svg>
   Anthony Fu
 </a>
 `;
@@ -29,6 +45,14 @@ exports[`Link changes the class when hovered 3`] = `
   onMouseEnter={[Function]}
   onMouseLeave={[Function]}
 >
+  <svg
+    height={210}
+    width={500}
+  >
+    <polygon
+      points="100,10 40,198 190,78 10,78 160,198"
+    />
+  </svg>
   Anthony Fu
 </a>
 `;
diff --git a/vitest.config.ts b/vitest.config.ts
index 85fb2c4..fd3474e 100644
--- a/vitest.config.ts
+++ b/vitest.config.ts
@@ -1,10 +1,12 @@
 /// <reference types="vitest" />

 import { defineConfig } from 'vite'
+import { reactSvgr } from './reactSvgr'

 export default defineConfig({
   test: {
     globals: true,
     environment: 'happy-dom',
   },
+  plugins: [reactSvgr()],
 })
```
