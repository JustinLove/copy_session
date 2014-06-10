(function() {
  //load html dynamically
  loadTemplate = function (element, url, model) {
    element.load(url, function () {
      console.log("Loading html " + url);
      ko.applyBindings(model, element.get(0));
    });
  };

  var $container = $('<div id="insertion_point"></div>')
  $container.hide().appendTo('body')
  loadTemplate($container, 'coui://ui/mods/copy_session/copy_session.html', model);

  $('body').on('copy', function(e) {
    if (model.jabberToken() == null || model.jabberToken() === '') return true

    e.originalEvent.clipboardData.setData('Text', '~/Library/Application Support/Uber Entertainment/Planetary Annihilation/data/streams/stable/PA.app/Contents/MacOS/PA --ticket ' + model.jabberToken() + '')
    //event.returnValue = false
    $container.show().hide(2000)
    return false
  })
})()
