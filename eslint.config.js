import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-restricted-imports': ['error', { patterns: ['@/features/*/*'] }],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            // enforce unidirectional codebase:
            // e.g. src/app can import from src/features but not the other way around
            // https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md
            {
              target: './src/features',
              from: './src/app'
            },
            {
              target: [
                './src/components',
                './src/hooks',
                './src/lib',
                './src/types',
                './src/utils'
              ],
              from: ['./src/features', './src/app']
            },
            // services should be configured for use as a library
            {
              target: './src/services',
              from: './src/lib'
            }
          ]
        }
      ]
    }
  }
)
