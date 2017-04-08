export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/angular-lib.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.lib',
  globals: {
    '@angular/core': 'ng.core'
  }
}
