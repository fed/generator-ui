define(['jquery', 'api', 'template'], function ($, api, template) {
  var packages = [];
  var generate = function (cb) {
        if (typeof cb !== 'function') {
          return;
        }

        api.getJSON('/model/viewmodel.json', function (json) {
          $.each(json.packages, function (index, package) {
            packages.push(package);
          });

          cb(template.packages({ packages: packages }));
        });
      };

  return {
    generate: generate
  };
});
