define({
  loaders: {
    'host-node': 'requirejs',
    'host-browser': 'node_modules/requirejs/require.js'
  },
  loaderOptions: {
    paths: {
      template: 'js/src/template',
      features: 'js/src/features'
    },
    packages: [
      {
        name: 'hogan',
        location: 'node_modules/hogan.js/dist',
        main: 'hogan-3.0.2.min.amd'
      }
    ]
  },
  suites: ['./tests/app'],
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
