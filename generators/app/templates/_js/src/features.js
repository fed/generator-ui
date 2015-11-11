define(['jquery', 'template'], function ($, template) {
  var features = [];
  var generate = function (cb) {
    if (typeof cb !== 'function') {
      return;
    }

    $.getJSON('/model/viewmodel.json').done(function (data) {
      $.each(data.features, function (index, feature) {
        features.push(feature);
      });

      cb(template.features({ features: features }));
    });
  };

  return {
    generate: generate
  };
});
