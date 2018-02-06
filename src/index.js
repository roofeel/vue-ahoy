import Ahoy from './Ahoy'

const install = function (Vue, initConf = {}) {
  const _ahoy = new Ahoy()
  _ahoy.init()

  Vue.prototype.$ahoy = Vue.ahoy = _ahoy
}

export default { install }
