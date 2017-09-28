$(function () {
  var styleguideMenu = ''
  $.each([
      {
        'name': 'Color Palette',
        'link': 'colors.html'
      },
      {
        'name': 'Fonts and Headers',
        'link': 'fonts.html'
      },
      {
        'name': 'Form Controls',
        'link': 'formcontrols.html'
      }
    ]
    , function (key, value) {
      styleguideMenu += '<li>'
      styleguideMenu += '<a href="' + value.link + '">' + value.name + '</a>'
      styleguideMenu += '</li>'
    })
  $('#menu').append(styleguideMenu)

  // Style Guide Text Animation Engine
  $('.guide-title').html(function (i, html) {
    var chars = $.trim(html).split('')
    return '<span>' + chars.join('</span><span>') + '</span>'
  })
})
