(function() {

  var message = 'Session id'
  var paCommand = ''
  if (navigator.appVersion.match('Mac')) {
    message = 'Terminal command'
    paCommand = '~/Library/Application\\ Support/Uber\\ Entertainment/Planetary\\ Annihilation/data/streams/stable/PA.app/Contents/MacOS/PA --ticket '
  /* ????
  } else if (navigator.appVersion.match('Linux')) {
    message = 'Terminal command'
    paCommand = '~/.local/Uber\\ Entertainment/Planetary\\ Annihilation/stable/PA --ticket '
  } else if (navigator.appVersion.match('Win')) {
    message = 'Terminal command'
    paCommand = '%LOCALAPPDATA%/Uber\\ Entertainment/Planetary\\ Annihilation/data/streams/stable/PA --ticket '
  */
  }

  var $message = $('<div id="copy_session">' + message + ' copied to clipboard.</div>')
    .hide().appendTo('body')

  $('body').on('copy', function(e) {
    if (model.jabberToken() == null || model.jabberToken() === '') return true

    e.originalEvent.clipboardData.setData('Text', paCommand + model.jabberToken())
    $message.show().fadeOut(2000)

    return false
  })
})()
