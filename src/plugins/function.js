import Vue from "vue";
import store from "../store";
import _ from "lodash";
export const FunctionCustom = {
  install(Vue, options) {
    Vue.staticMethod = () => {};
    Vue.prototype.getText = (code) => {
      const message = options.store.state.locale.message;
      return message.reduce((acc, cur) => {
        if (cur.code === code) {
          acc += cur.message;
        }
        return acc;
      }, "");
    };
    Vue.prototype.getTab = (menu) => {
      const allMenu = options.store.state.menu.allMenu;
      const subMenu = allMenu.reduce((acc, cur) => {
        acc = acc.concat(cur.subMenu);
        return acc;
      }, []);
      return _.filter(subMenu, (v) => {
        return v.menu_eng === menu;
      });
    };
    Vue.prototype.rmAll = (menu) => {
      return _.filter(menu, (v) => {
        return v !== "전체";
      });
    };
  },
};
Vue.use(FunctionCustom, { store });
