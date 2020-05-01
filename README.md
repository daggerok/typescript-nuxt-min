# typescript-nuxt-min [![CI](https://github.com/daggerok/typescript-nuxt-min/workflows/CI/badge.svg)](https://github.com/daggerok/typescript-nuxt-min/actions?query=workflow%3ACI) [![Build Status](https://travis-ci.org/daggerok/typescript-nuxt-min.svg?branch=master)](https://travis-ci.org/daggerok/typescript-nuxt-min)
Minimal Nutx.js TypeScript example starter project using Options and Composition APIs.

1. generate new npm project from scratch:
   ```bash
   mkdir typescript-nuxt-min
   cd typescript-nuxt-min/
   npm init -y
   ```
1. IMPORTANT: install nux as dependency (not as devDependency!)
   ```bash
   npm i -E nuxt
   ```
1. install `@nuxt/typescript-build` as dev dependency:
   ```bash
   npm i -ED @nuxt/typescript-build
   ```
1. add npm-scripts in _package.json_ file:
   ```json
   {
     "scripts": {
       "dev": "nuxt",
       "build": "nuxt build",
       "start": "nuxt start",
       "generate": "nuxt generate"
     }
   }
   ```
1. create _tsconfig.json_ file:
   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "esnext",
       "moduleResolution": "node",
       "lib": [
         "esnext",
         "esnext.asynciterable",
         "dom"
       ],
       "esModuleInterop": true,
       "allowJs": true,
       "sourceMap": true,
       "strict": true,
       "noEmit": true,
       "baseUrl": ".",
       "paths": {
         "~/*": [
           "./*"
         ],
         "@/*": [
           "./*"
         ]
       },
       "types": [
         "@nuxt/types"
       ]
     }
   }
   ```
   whre `@nuxt/types` should not be installed - it's already packages together with `@nuxt/typescript-build`.
1. create _nuxt.config.js_ file:
   ```js
   export default {
     buildModules: [
       '@nuxt/typescript-build',
     ],
   }
   ```
1. create _pages/index.vue_ file:
   ```vue
   <template>
     <div class="app">
       <h1>Hello, {{ id }}!</h1>
     </div>
   </template>
   <script lang="ts"> // <--- THIS lang="ts" IS REALLY IMPORTANT!
     import Vue from 'vue';
     export default Vue.extend({
       data() {
         const id: string = 'TypeScript';
         
         return {
           id,
         };
       }
     });
   </script>
   ```
1. start development:
   ```bash
   npm run dev
   ```
1. open http://127.0.0.1:3000/
1. build and run:
   ```bash
   npm run build
   npx serve dist
   ```
1. open http://127.0.0.1:5000/
1. GitHub Pages deployment located [here](https://daggerok.github.io/typescript-nuxt-min/)

## resources

* https://codesandbox.io/s/github/nuxt/typescript/tree/master/examples/options-api/minimal?from-embed
