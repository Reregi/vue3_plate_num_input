import vue from 'rollup-plugin-vue';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import pug from 'rollup-plugin-pug';
import babel from 'rollup-plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
const getPath = (_path) => path.resolve(__dirname, _path);

module.exports = [
  {
    // 入口
    input: 'package/index.ts',
    // 出口
    output: [
      {
        file: 'lib/index.js',
        // 配置打包模块化的方式 es:ESM  cjs:CommonJS
        format: 'umd',
        name: 'index',
        globals: {
          vue: 'vue', // 指明 global.vue 即是外部依赖 vue
        },
        exports: 'named',
      },
    ],

    // 插件
    plugins: [
      vue({
        // 把单文件组件中的样式，插入到html中的style标签
        css: true,
        // 把组件转换成 render 函数
        compileTemplate: true,
      }),
      // 代码压缩
      terser(),
      postcss(),
      ts({
        tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
        // useTsconfigDeclarationDir: true, //输出d.ts到tsconfig配置的地址
      }),
      pug(),
      babel({
        exclude: 'node_modules/**', // 排除node_module下的所有文件
        extensions: ['.vue'],
        runtimeHelpers: true,
      }),
      // nodeResolve(),
    ],
  },
];
