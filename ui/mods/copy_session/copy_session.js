(function() {

  var $message = $('<div id="copy_session">Terminal command copied to clipboard.</div>')
    .hide().appendTo('body')

  var paCommand = ''
  if (navigator.appVersion.match('Mac')) {
    paCommand = '~/Library/Application\\ Support/Uber\\ Entertainment/Planetary\\ Annihilation/data/streams/stable/PA.app/Contents/MacOS/PA --ticket '
  /* ????
  } else if (navigator.appVersion.match('Linux')) {
    paCommand = '~/.local/Uber\\ Entertainment/Planetary\\ Annihilation/stable/PA --ticket '
  } else if (navigator.appVersion.match('Win')) {
    paCommand = '%LOCALAPPDATA%/Uber\\ Entertainment/Planetary\\ Annihilation/data/streams/stable/PA --ticket '
  */
  }

  $('body').on('copy', function(e) {
    if (model.jabberToken() == null || model.jabberToken() === '') return true

    e.originalEvent.clipboardData.setData('Text', paCommand + model.jabberToken())
    $message.show().fadeOut(2000)

    return false
  })
})()
