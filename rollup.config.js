export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/angular-lib.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.lib',
    external: [
      '@angular/core',
      '@angular/common',
      'rxjs/Observable',
      'rxjs/Observer'
    ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx'
  }
}
