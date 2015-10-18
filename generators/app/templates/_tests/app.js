define([
  'intern!object',
  'intern/chai!assert',
  'packages',
  'utils'
], function (registerSuite, assert, Packages, Utils) {
  registerSuite({
    'name': 'App',
    'Packages': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Packages, 'object');
        }
      },
      'Packages.generate()': {
        name: 'Packages.generate()',
        'is defined': function () {
          assert.isDefined(Packages.generate);
        }
      }
    },
    'Utils': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Utils, 'object');
        }
      },
      'Utils.random': {
        'Utils.random.itemFrom()': {
          name: 'Utils.random.itemFrom()',
          'is defined': function () {
            assert.isDefined(Utils.random.itemFrom);
          },
          'returns a random element of an array': function () {
            assert.isDefined(Utils.random.itemFrom([0, 1, 2, 3]));
            assert.isDefined(Utils.random.itemFrom([0]));
          },
          'returns nothing if the array is empty, if it is some other type or if nothing gets passed in as a param': function () {
            assert.isUndefined(Utils.random.itemFrom(undefined));
            assert.isUndefined(Utils.random.itemFrom(10));
            assert.isUndefined(Utils.random.itemFrom('test'));
            assert.isUndefined(Utils.random.itemFrom({}));
            assert.isUndefined(Utils.random.itemFrom([]));
            assert.isUndefined(Utils.random.itemFrom(function () {}));
            assert.isUndefined(Utils.random.itemFrom());
          }
        },
        'Utils.random.numberBetween()': {
          name: 'Utils.random.numberBetween()',
          'is defined': function () {
            assert.isDefined(Utils.random.numberBetween);
          },
          'returns a random number of a 2-value range': function () {
            assert.isNumber(Utils.random.numberBetween(0, 10));
          },
          'returns one of the params if the other is NaN': function () {
            assert.equal(Utils.random.numberBetween(undefined, 10), 10);
            assert.equal(Utils.random.numberBetween(10, '11'), 10);
            assert.equal(Utils.random.numberBetween(10, {}), 10);
            assert.equal(Utils.random.numberBetween([], 10), 10);
            assert.equal(Utils.random.numberBetween(10, function () {}), 10);
          },
          'returns the first param if it is the only one passed in': function () {
            assert.equal(Utils.random.numberBetween(10), 10);
          },
          'returns nothing if another type or nothing is passed in as a param': function () {
            assert.isUndefined(Utils.random.numberBetween(undefined));
            assert.isUndefined(Utils.random.numberBetween('test'));
            assert.isUndefined(Utils.random.numberBetween({}));
            assert.isUndefined(Utils.random.numberBetween([]));
            assert.isUndefined(Utils.random.numberBetween(function () {}));
            assert.isUndefined(Utils.random.numberBetween());
          }
        }
      }
    }
  });
});
