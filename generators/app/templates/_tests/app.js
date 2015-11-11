define([
  'intern!object',
  'intern/chai!assert',
  'features',
], function (registerSuite, assert, Features) {
  registerSuite({
    'name': 'App',
    'Features': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Features, 'object');
        }
      },
      'Features.generate()': {
        name: 'Features.generate()',
        'is defined': function () {
          assert.isDefined(Features.generate);
        }
      }
    }
  });
});
