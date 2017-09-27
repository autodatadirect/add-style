$(function () {

  $.getJSON('/js/menu.json', function (data) {
    var styleguideMenu = '';
    $.each(data, function (key, value) {
      styleguideMenu += '<li>';
      styleguideMenu += '<a href="' + value.link + '">' + value.name + '</a>';
      styleguideMenu += '</li>';
    });
    $('#menu').append(styleguideMenu);
  });

  // Style Guide Text Animation Engine
  $('.guide-title').html(function (i, html) {
    var chars = $.trim(html).split("");
    return '<span>' + chars.join('</span><span>') + '</span>';
  });


});