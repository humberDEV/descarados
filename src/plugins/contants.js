import COLORS from "../constants/colors.js"; 

const ConstantsPlugin = {
  install(Vue) {
    Vue.prototype.$CONSTANTS = COLORS;
  },
};

export default ConstantsPlugin;