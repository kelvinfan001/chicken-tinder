module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['import', 'prettier', 'promise', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.settings.json'
  },
  extends: ['react-app', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:react/recommended', 'prettier/react'],
  rules: {
    'array-callback-return': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    eqeqeq: 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'prettier/prettier': 'warn',
    radix: 'off',
    'no-use-before-define': 'off',
    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'promise/prefer-await-to-callbacks': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useMetrics|useGeneratedMetrics|useStops|useSpots|useCurbGeographyMap|useSummaryMetrics)'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/prop-types': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
