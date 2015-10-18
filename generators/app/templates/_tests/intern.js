define({
  useLoader: {
    'host-node': 'requirejs',
    'host-browser': 'node_modules/requirejs/require.js'
  },
  loader: {
    packages: [
      {
        name: 'hogan',
        location: 'node_modules/hogan.js/dist',
        main: 'hogan-3.0.2.min.amd'
      }
    ],
    paths: {
      'template': 'js/src/template',
      'api': 'js/src/api',
      'utils': 'js/src/utils',
      'packages': 'js/src/packages'
    }
  },
  suites: ['tests/app'],
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
