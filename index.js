const devtools = require('choo-devtools')
const choo = require('choo')
const store = require('./src/stores/store.js')
// const serialServer = require('./utils/server.js')
const languageStore = require('./src/stores/language-store.js')

const mainView = require('./src/views/main.js')

// navigator.serial.requestPorts()

const app = choo()
app.use(devtools())
app.use(store)
app.use(languageStore) // TODO: deactivate, since it depends on network connection. It has to be changed in info.js, too... done?
app.route('/', mainView)
app.route('/hydra-backup', mainView)
app.mount('body')
