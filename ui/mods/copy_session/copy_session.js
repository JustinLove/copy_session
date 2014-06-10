(function() {

  $message = $('<div id="copy_session">Terminal command copied to clipboard.</div>')
    .hide().appendTo('body')

  $('body').on('copy', function(e) {
    if (model.jabberToken() == null || model.jabberToken() === '') return true

    e.originalEvent.clipboardData.setData('Text', '~/Library/Application Support/Uber Entertainment/Planetary Annihilation/data/streams/stable/PA.app/Contents/MacOS/PA --ticket ' + model.jabberToken())
    $message.show().fadeOut(2000)

    return false
  })
})()
