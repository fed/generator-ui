define(['jquery'], function ($) {
  var getJSON = function (url, cb) {
    $.getJSON(url).done(function (data) {
      cb(data);
    });
  };

  return {
    getJSON: getJSON
  };
});
