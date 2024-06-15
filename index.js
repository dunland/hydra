const devtools = require('choo-devtools')
const choo = require('choo')
const store = require('./src/stores/store.js')
const languageStore = require('./src/stores/language-store.js') // TODO: deactivate, since it uses network connection

const mainView = require('./src/views/main.js')

console.log("hello entry point");
// navigator.serial.requestPorts()

const app = choo()
app.use(devtools())
app.use(store)
app.use(languageStore) // TODO: deactivate, since it uses network connection. It has to be changed in info.js, too
app.route('/', mainView)
app.route('/hydra-backup', mainView)
app.mount('body')
