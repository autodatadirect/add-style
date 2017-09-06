$(function () {

  // $.getJSON('/js/menu.json', function (data) {

  // });

  // Animation Engine
  $('.guide-title').html(function (i, html) {
    var chars = $.trim(html).split("");
    return '<span>' + chars.join('</span><span>') + '</span>';
  });


});

//http://jsfiddle.net/9uhc3/5/