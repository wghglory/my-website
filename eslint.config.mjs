import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import testingLibrary from 'eslint-plugin-testing-library';

export default defineConfig([
  // Next.js config with Core Web Vitals
  ...nextVitals,
  {
    name: 'project/base',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/jsx-filename-extension': [0, {extensions: ['.tsx', '.ts']}],
      'import/extensions': [0, 'never'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@next/next/no-img-element': 'off',
      'react/no-unknown-property': [
        2,
        {
          ignore: ['jsx', 'global'],
        },
      ],
      // Allow setState in useEffect for hydration patterns (common in Next.js)
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      // Allow ref access during render for portals (necessary pattern)
      'react-hooks/refs': 'off',
      // Allow anonymous default exports for config files
      'import/no-anonymous-default-export': 'off',
    },
  },
  // Testing Library rules for test files
  {
    name: 'project/testing-library',
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibrary,
    },
    ...testingLibrary.configs['flat/react'],
  },
  // Config files - allow anonymous default exports
  {
    name: 'project/config-files',
    files: ['*.config.{js,mjs,ts}', '*.config.*.{js,mjs,ts}'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
  // Override default ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/', 'public/', '.vscode/', 'dist/']),
]);
