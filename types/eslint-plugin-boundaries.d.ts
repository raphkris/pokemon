declare module 'eslint-plugin-boundaries' {
  import type { ESLint } from 'eslint'

  interface BoundariesPlugin extends ESLint.Plugin {
    configs: {
      recommended: ESLint.ConfigData
      strict: ESLint.ConfigData
    }
  }

  const plugin: BoundariesPlugin
  export default plugin
}
