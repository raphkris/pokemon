import js from '@eslint/js'
import boundaries from 'eslint-plugin-boundaries'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'check-file': checkFile,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      boundaries
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      },
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'src/app'
        },
        {
          type: 'features',
          pattern: 'src/features'
        },
        {
          type: 'services',
          pattern: 'src/services'
        },
        {
          type: 'shared',
          pattern: ['src/components', 'src/hooks', 'src/lib', 'src/types', 'src/utils']
        }
      ]
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'check-file/folder-naming-convention': [
        'error',
        // all folders within src (except __tests__)should be named in kebab-case
        { 'src/**/!(__tests__)': 'KEBAB_CASE' }
      ],
      'check-file/filename-naming-convention': [
        // https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#file-naming-conventions
        'error',
        { '**/*.{ts,tsx}': 'KEBAB_CASE' },
        // ignore the middle extensions of the filename to support filename like babel.config.js or smoke.spec.ts
        { ignoreMiddleExtensions: true }
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-restricted-imports': [
        'error',
        // https://blog.webdevsimplified.com/2022-07/react-folder-structure/
        {
          // imports >= two levels deep result in an error
          // code that needs to be exposed should only be exported through an index.{ts,tsx,js} file at the first level
          patterns: [
            '@/features/*/*',
            '@/hooks/*/*',
            '@/lib/*/*',
            '@/services/*/*',
            '@/types/*/*',
            '@/utils/*/*'
          ]
        }
      ],
      'boundaries/entry-point': [
        'error',
        {
          default: 'allow',
          rules: [
            {
              target: ['features', 'services', 'shared'],
              allow: 'index.ts'
            }
          ]
        }
      ],
      // https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md
      'import/no-restricted-paths': [ // enforce unidirectional codebase
        'error',
        {
          zones: [
            { // features can't import from app
              target: './src/features',
              from: './src/app',
              message: `features can't import from app`
            },
            { // shared parts can't import from features or app
              target: ['./src/components', './src/hooks', './src/types', './src/utils'],
              from: ['./src/features', './src/app'],
              message: `shared parts can't import from features or app`
            },
            // services should only be accessible through lib
            { // lib can only import from services
              target: './src/lib',
              from: [
                './src/app',
                './src/components',
                './src/features',
                './src/hooks',
                './src/lib',
                './src/types',
                './src/utils'
              ],
              except: ['./src/services'],
              message: 'lib can only import from services'
            },
            { // services can't import from lib
              target: './src/services',
              from: ['./src/lib'],
              message: `services can't import from lib`
            },
            // disable cross-service imports
            {
              target: './src/services/poke-api',
              from: './src/services',
              except: ['./poke-api'],
              message: 'services should not import from each other'
            }
          ]
        }
      ]
    }
  }
)
