if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      let golist = () => {
      };
      uni.request({
        url: "/api/home/floorlist",
        // url:"/api/rmsp",
        method: "GET",
        header: {
          // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
          // 'Access-Control-Allow-Origin': '*'
        },
        success: (res) => {
          formatAppLog("log", "at pages/index/index.vue:25", res);
        }
        // fail:(err)=>{
        // 	__f__('log','at pages/index/index.vue:28',"错误",err);
        // }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "text-area" }, [
            vue.createElementVNode("text", { class: "title" }, "Hello")
          ]),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(golist)())
          }, "golist")
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/智游练习作业/git/bys/by/pages/index/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        x: "1"
      };
    },
    onLoad(option) {
      formatAppLog("log", "at pages/list/list.vue:15", this.$page.options.x);
      this.$data.x = this.$page.options.x;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      null,
      " 接收index的参数:" + vue.toDisplayString($data.x),
      1
      /* TEXT */
    );
  }
  const PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/智游练习作业/git/bys/by/pages/list/list.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/list/list", PagesListList);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/智游练习作业/git/bys/by/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
