/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';


export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].umd.js',
        exports: 'named',
        format: 'umd',
        name: 'BRReactSdk',
        sourcemap: true,
        sourcemapExcludeSources: true,
        inlineDynamicImports: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@bloomreach/spa-sdk': 'BloomreachSpaSdk',
        },
      },
    ],
    external: ["@bloomreach/spa-sdk", "react", "prop-types"],
    plugins: [
      typescript({ clean: true }),
      babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
        sourcemap: true,
      },
    ],
    external: ["@bloomreach/spa-sdk", "react", "prop-types"],
    plugins: [typescript({ clean: true })],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].d.ts',
        format: 'es',
      },
    ],
    external: ["@bloomreach/spa-sdk", "react", "prop-types"],
    plugins: [dts()],
  },
];