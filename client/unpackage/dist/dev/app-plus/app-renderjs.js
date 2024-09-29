var __renderjsModules={};

__renderjsModules["67dea2d6"] = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    default: () => stdin_default
  });

  // F:/uniapp/vegetable-bag/utils/common.js
  function praseJson(data) {
    for (const line of data.split("\n")) {
      if (line.trim()) {
        try {
          const json = JSON.parse(line);
          console.log("json", json);
          console.log("line", line);
          return json.content;
        } catch (error) {
          console.error("\u89E3\u6790\u9519\u8BEF:", error);
        }
      }
    }
    return null;
  }

  // F:/uniapp/vegetable-bag/utils/fetchSource.js
  var fetchSource = (url, options) => {
    const _a = options, { onOpen, onMessage, onEnd, onError } = _a, fetchOptions = __objRest(_a, ["onOpen", "onMessage", "onEnd", "onError"]);
    if (onOpen) {
      onOpen();
    }
    fetch(url, __spreadValues({}, fetchOptions)).then((response) => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          if (onEnd) {
            onEnd();
          }
          return;
        }
        const chunk = decoder.decode(value, { stream: true });
        const data = praseJson(chunk);
        console.log("data", data);
        if (onMessage) {
          onMessage(data);
        }
        return reader.read().then(processText);
      });
    }).catch((error) => {
      if (onError) {
        onError(error);
      }
    });
  };

  // <stdin>
  var stdin_default = {
    data() {
      return {
        controller: null
      };
    },
    methods: {
      propsChange(opt) {
        const { url, isSend } = opt || {};
        if (!url)
          return this.emits({ type: "tips", msg: "URL cannot be empty." });
        if (!isSend)
          return;
        this.fetchFlow(opt);
      },
      fetchFlow(fetchOptions) {
        const _this = this;
        this.controller = new AbortController();
        const { url, options = {} } = fetchOptions || {};
        fetchSource(url, __spreadProps(__spreadValues({}, options), {
          signal: this.controller.signal,
          onOpen: () => {
            this.emits({ type: "open", msg: "EventSource onOpen" });
          },
          onMessage: (data) => {
            this.emits({ type: "message", msg: "EventSource onMessage", data });
          },
          onEnd: () => {
            this.emits({ type: "end", msg: "EventSource onEnd" });
          },
          onError: (error) => {
            __f__("log", "at pages/index/components/fetchChat.vue:84", "error", error);
            this.emits({ type: "error", msg: "EventSource onError", data: JSON.stringify(error) });
          }
        }));
      },
      emits(data) {
        this.$ownerInstance.callMethod("dataSource", data);
      },
      closeSSE() {
        var _a;
        (_a = this.controller) == null ? void 0 : _a.abort();
      }
    }
  };
  return __toCommonJS(stdin_exports);
})();


__renderjsModules["6464bc94"] = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    default: () => stdin_default
  });

  // F:/uniapp/vegetable-bag/components/qf-image-cropper/qf-image-cropper.render.js
  var offset = { x: 0, y: 0 };
  var scale = 1;
  var minScale = 1;
  var rotate = 0;
  var touches = [];
  var img = {};
  var sys = {};
  var area = {};
  var touchType = "";
  var activeAngle = 0;
  var areaOffset = { left: 0, right: 0, top: 0, bottom: 0 };
  var elIds = {
    "imageStyles": "crop-image",
    "maskStylesList": "crop-mask-block",
    "borderStyles": "crop-border",
    "circleBoxStyles": "crop-circle-box",
    "circleStyles": "crop-circle",
    "gridStylesList": "crop-grid",
    "angleStylesList": "crop-angle"
  };
  var timestamp = 0;
  var platform = "H5";
  var platform = "APP";
  var fault = 1e-6;
  function minimum(a, b) {
    if (a > 0 && b < 0)
      return a;
    if (a < 0 && b > 0)
      return b;
    if (a > 0 && b > 0)
      return Math.min(a, b);
    return 0;
  }
  function num(n) {
    var m = parseFloat(n.toFixed(6));
    return m === fault || m === -fault ? 0 : m;
  }
  function equalsByFault(a, b) {
    return Math.abs(a - b) <= fault;
  }
  function lessThanByFault(a, b) {
    var c = a - b;
    return c < 0 ? c < -fault : c < fault;
  }
  function validMax(v, max, isInclude, x, y, rate) {
    if (typeof max === "number") {
      if (isInclude && equalsByFault(max, y)) {
        var n = num(max * rate);
        if (n <= x)
          return n;
        return x;
      }
      return max;
    }
    return v;
  }
  function styleToString(style) {
    if (typeof style === "string")
      return style;
    var str = "";
    for (let k in style) {
      str += k + ":" + style[k] + ";";
    }
    return str;
  }
  function setStyle(instance, key, style) {
    if (platform === "APP") {
      if (Object.prototype.toString.call(style) === "[object Array]") {
        for (var i = 0, len = style.length; i < len; i++) {
          var el = window.document.getElementById(elIds[key] + "-" + (i + 1));
          el && (el.style = styleToString(style[i]));
        }
      } else {
        var el = window.document.getElementById(elIds[key]);
        el && (el.style = styleToString(style));
      }
    }
    if (platform === "H5")
      instance[key] = style;
  }
  function callMethod(instance, name, obj) {
    if (platform === "APP")
      instance.callMethod(name, obj);
    if (platform === "H5")
      instance[name](obj);
  }
  function getDistanceByTouches(touches2) {
    var a = touches2[1].pageX - touches2[0].pageX;
    var b = touches2[1].pageY - touches2[0].pageY;
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var x = touches2[1].pageX - a / 2;
    var y = touches2[1].pageY - b / 2;
    return { c, x, y };
  }
  function correctValue(a, b, c, reverse) {
    return num(reverse ? Math.max(Math.min(a, b), c) : Math.min(Math.max(a, b), c));
  }
  function checkRotateRange(e, xReverse, yReverse) {
    var o = num((img.height - img.width) / 2);
    return {
      x: correctValue(e.x, -img.height + o + area.width + area.left, area.left + o, xReverse),
      y: correctValue(e.y, -img.width - o + area.height + area.top, area.top - o, yReverse)
    };
  }
  function checkRange(e) {
    var r = rotate / 90 % 2;
    if (r === 1) {
      if (area.width === area.height) {
        return checkRotateRange(e, img.height < area.height, img.width < area.width);
      }
      var isInclude = img.height < area.width && img.width < area.height;
      if (img.width < area.height || img.height < area.width) {
        if (area.width < area.height && img.width < img.height) {
          return isInclude ? checkRotateRange(e, area.width < area.height, area.width < area.height) : checkRotateRange(e, false, true);
        }
        if (area.height < area.width && img.height < img.width) {
          return isInclude ? checkRotateRange(e, area.height < area.width, area.height < area.width) : checkRotateRange(e, true, false);
        }
      }
      if (img.height >= area.width && img.width >= area.height) {
        return checkRotateRange(e, false, false);
      }
      if (isInclude) {
        return area.height < area.width ? checkRotateRange(e, true, true) : checkRotateRange(e, area.width < area.height, area.width < area.height);
      }
      if (img.height < area.width && !img.width < area.height) {
        return checkRotateRange(e, true, false);
      }
      if (!img.height < area.width && img.width < area.height) {
        return checkRotateRange(e, false, true);
      }
      return checkRotateRange(e, img.height < area.height, img.width < area.width);
    }
    return {
      x: correctValue(e.x, -img.width + area.width + area.left, area.left, img.width < area.width),
      y: correctValue(e.y, -img.height + area.height + area.top, area.top, img.height < area.height)
    };
  }
  function changeImageRect(e) {
    offset.x += e.x || 0;
    offset.y += e.y || 0;
    if (e.check && area.checkRange) {
      var point = checkRange(offset);
      if (offset.x !== point.x || offset.y !== point.y) {
        offset = point;
      }
    }
    var ox = (img.width - img.oldWidth) / 2;
    var oy = (img.height - img.oldHeight) / 2;
    setStyle(e.instance, "imageStyles", {
      width: img.oldWidth + "px",
      height: img.oldHeight + "px",
      transform: (img.gpu ? "translateZ(0) " : "") + "translate(" + (offset.x + ox) + "px, " + (offset.y + oy) + "px) rotate(" + rotate + "deg) scale(" + scale + ")"
    });
    callMethod(e.instance, "dataChange", {
      width: img.width,
      height: img.height,
      x: offset.x,
      y: offset.y,
      rotate
    });
  }
  function changeAreaRect(e) {
    setStyle(e.instance, "maskStylesList", [
      {
        left: 0,
        width: area.left + areaOffset.left + "px",
        top: 0,
        bottom: 0,
        "z-index": area.zIndex + 2
      },
      {
        left: area.right + areaOffset.right + "px",
        right: 0,
        top: 0,
        bottom: 0,
        "z-index": area.zIndex + 2
      },
      {
        left: area.left + areaOffset.left + "px",
        width: area.width + areaOffset.right - areaOffset.left + "px",
        top: 0,
        height: area.top + areaOffset.top + "px",
        "z-index": area.zIndex + 2
      },
      {
        left: area.left + areaOffset.left + "px",
        width: area.width + areaOffset.right - areaOffset.left + "px",
        top: area.bottom + areaOffset.bottom + "px",
        // height: (area.top - areaOffset.bottom + sys.offsetBottom) + 'px',
        bottom: 0,
        "z-index": area.zIndex + 2
      }
    ]);
    if (area.showBorder) {
      setStyle(e.instance, "borderStyles", {
        left: area.left + areaOffset.left + "px",
        top: area.top + areaOffset.top + "px",
        width: area.width + areaOffset.right - areaOffset.left + "px",
        height: area.height + areaOffset.bottom - areaOffset.top + "px",
        "z-index": area.zIndex + 3
      });
    }
    if (area.showGrid) {
      setStyle(e.instance, "gridStylesList", [
        {
          "border-width": "1px 0 0 0",
          left: area.left + areaOffset.left + "px",
          right: area.right + areaOffset.right + "px",
          top: area.top + areaOffset.top + (area.height + areaOffset.bottom - areaOffset.top) / 3 - 0.5 + "px",
          width: area.width + areaOffset.right - areaOffset.left + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": "1px 0 0 0",
          left: area.left + areaOffset.left + "px",
          right: area.right + areaOffset.right + "px",
          top: area.top + areaOffset.top + (area.height + areaOffset.bottom - areaOffset.top) * 2 / 3 - 0.5 + "px",
          width: area.width + areaOffset.right - areaOffset.left + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": "0 1px 0 0",
          top: area.top + areaOffset.top + "px",
          bottom: area.bottom + areaOffset.bottom + "px",
          left: area.left + areaOffset.left + (area.width + areaOffset.right - areaOffset.left) / 3 - 0.5 + "px",
          height: area.height + areaOffset.bottom - areaOffset.top + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": "0 1px 0 0",
          top: area.top + areaOffset.top + "px",
          bottom: area.bottom + areaOffset.bottom + "px",
          left: area.left + areaOffset.left + (area.width + areaOffset.right - areaOffset.left) * 2 / 3 - 0.5 + "px",
          height: area.height + areaOffset.bottom - areaOffset.top + "px",
          "z-index": area.zIndex + 3
        }
      ]);
    }
    if (area.showAngle) {
      setStyle(e.instance, "angleStylesList", [
        {
          "border-width": area.angleBorderWidth + "px 0 0 " + area.angleBorderWidth + "px",
          left: area.left + areaOffset.left - area.angleBorderWidth + "px",
          top: area.top + areaOffset.top - area.angleBorderWidth + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": area.angleBorderWidth + "px " + area.angleBorderWidth + "px 0 0",
          left: area.right + areaOffset.right - area.angleSize + "px",
          top: area.top + areaOffset.top - area.angleBorderWidth + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": "0 0 " + area.angleBorderWidth + "px " + area.angleBorderWidth + "px",
          left: area.left + areaOffset.left - area.angleBorderWidth + "px",
          top: area.bottom + areaOffset.bottom - area.angleSize + "px",
          "z-index": area.zIndex + 3
        },
        {
          "border-width": "0 " + area.angleBorderWidth + "px " + area.angleBorderWidth + "px 0",
          left: area.right + areaOffset.right - area.angleSize + "px",
          top: area.bottom + areaOffset.bottom - area.angleSize + "px",
          "z-index": area.zIndex + 3
        }
      ]);
    }
    if (area.radius > 0) {
      var radius = area.radius;
      if (area.width === area.height && area.radius >= area.width / 2) {
        radius = area.width / 2;
      } else {
        if (area.width !== area.height) {
          radius = Math.min(area.width / 2, area.height / 2, radius);
        }
      }
      setStyle(e.instance, "circleBoxStyles", {
        left: area.left + areaOffset.left + "px",
        top: area.top + areaOffset.top + "px",
        width: area.width + areaOffset.right - areaOffset.left + "px",
        height: area.height + areaOffset.bottom - areaOffset.top + "px",
        "z-index": area.zIndex + 2
      });
      setStyle(e.instance, "circleStyles", {
        "box-shadow": "0 0 0 " + Math.max(area.width, area.height) + "px rgba(51, 51, 51, 0.8)",
        "border-radius": radius + "px"
      });
    }
  }
  function scaleImage(e) {
    var last = scale;
    scale = Math.min(Math.max(e.scale + scale, minScale), img.maxScale);
    if (last !== scale) {
      img.width = num(img.oldWidth * scale);
      img.height = num(img.oldHeight * scale);
      e.x = num((e.x - offset.x) * (1 - scale / last));
      e.y = num((e.y - offset.y) * (1 - scale / last));
      changeImageRect(e);
      return true;
    }
    return false;
  }
  function getToucheAngle(x, y) {
    var o = area.angleBorderWidth;
    var oy = sys.navigation ? 0 : sys.windowTop;
    if (y >= area.top - o + oy && y <= area.top + area.angleSize + o + oy) {
      if (x >= area.left - o && x <= area.left + area.angleSize + o) {
        return 1;
      } else if (x >= area.right - area.angleSize - o && x <= area.right + o) {
        return 2;
      }
    } else if (y >= area.bottom - area.angleSize - o + oy && y <= area.bottom + o + oy) {
      if (x >= area.left - o && x <= area.left + area.angleSize + o) {
        return 3;
      } else if (x >= area.right - area.angleSize - o && x <= area.right + o) {
        return 4;
      }
    }
    return 0;
  }
  function resetData() {
    offset = { x: 0, y: 0 };
    scale = 1;
    minScale = img.minScale;
    rotate = 0;
  }
  function getTouchs(touches2) {
    var result = [];
    var len = touches2 ? touches2.length : 0;
    for (var i = 0; i < len; i++) {
      result[i] = {
        pageX: touches2[i].pageX,
        // h5无标题栏时，窗口顶部距离仍为标题栏高度，且触摸点y轴坐标还是有标题栏的值，即减去标题栏高度的值
        pageY: touches2[i].pageY + sys.windowTop
      };
    }
    return result;
  }
  var mouseEvent = false;
  var qf_image_cropper_render_default = {
    data() {
      return {
        imageStyles: {},
        maskStylesList: [{}, {}, {}, {}],
        borderStyles: {},
        gridStylesList: [{}, {}, {}, {}],
        angleStylesList: [{}, {}, {}, {}],
        circleBoxStyles: {},
        circleStyles: {}
      };
    },
    created() {
      platform === "H5" && window.addEventListener("mousewheel", (e) => __async(this, null, function* () {
        var touchs = getTouchs([e]);
        img.src && scaleImage({
          instance: yield this.getInstance(),
          check: true,
          // 鼠标向上滚动时，deltaY 固定 -100，鼠标向下滚动时，deltaY 固定 100
          scale: e.deltaY > 0 ? -0.05 : 0.05,
          x: touchs[0].pageX,
          y: touchs[0].pageY
        });
      }));
    },
    // #ifdef H5
    mounted() {
      platform === "H5" && this.initH5Events();
    },
    // #endif
    setPlatform(p) {
      platform = p;
    },
    methods: {
      // #ifdef H5
      getTouchEvent(e) {
        e.touches = [
          { pageX: e.pageX, pageY: e.pageY }
        ];
        return e;
      },
      initH5Events() {
        const preview = document.getElementById("pic-preview");
        preview == null ? void 0 : preview.addEventListener("mousedown", (e, ev) => {
          mouseEvent = true;
          this.touchstart(this.getTouchEvent(e));
        });
        preview == null ? void 0 : preview.addEventListener("mousemove", (e) => {
          if (!mouseEvent)
            return;
          this.touchmove(this.getTouchEvent(e));
        });
        preview == null ? void 0 : preview.addEventListener("mouseup", (e) => {
          mouseEvent = false;
          this.touchend(this.getTouchEvent(e));
        });
        preview == null ? void 0 : preview.addEventListener("mouseleave", (e) => {
          mouseEvent = false;
          this.touchend(this.getTouchEvent(e));
        });
      },
      // #endif
      getInstance() {
        return __async(this, null, function* () {
          if (platform === "APP")
            return this.$ownerInstance ? Promise.resolve(this.$ownerInstance) : new Promise((resolve) => {
              setTimeout(() => __async(this, null, function* () {
                resolve(yield this.getInstance());
              }));
            });
          if (platform === "H5")
            return Promise.resolve(this);
        });
      },
      /**
       * 初始化：观察数据变更
       * @param {Object} newVal 新数据
       * @param {Object} oldVal 旧数据
       * @param {Object} o 组件实例对象
       */
      initObserver: function(newVal, oldVal, o, i) {
        return __async(this, null, function* () {
          if (newVal && (!img.src || timestamp !== newVal.timestamp)) {
            timestamp = newVal.timestamp;
            img = newVal.img;
            sys = newVal.sys;
            area = newVal.area;
            minScale = img.minScale;
            resetData();
            const instance = yield this.getInstance();
            img.src && changeImageRect({
              instance,
              x: (sys.windowWidth - img.width) / 2,
              y: (sys.windowHeight + sys.windowTop - sys.offsetBottom - img.height) / 2
            });
            changeAreaRect({
              instance
            });
          }
        });
      },
      /**
       * 鼠标滚轮滚动
       * @param {Object} e 事件对象
       * @param {Object} o 组件实例对象
       */
      mousewheel: function(e, o) {
      },
      /**
       * 触摸开始
       * @param {Object} e 事件对象
       * @param {Object} o 组件实例对象
       */
      touchstart: function(e, o) {
        if (!img.src)
          return;
        touches = getTouchs(e.touches);
        activeAngle = area.showAngle ? getToucheAngle(touches[0].pageX, touches[0].pageY) : 0;
        if (touches.length === 1 && activeAngle !== 0) {
          touchType = "stretch";
        } else {
          touchType = "";
        }
      },
      /**
       * 触摸移动
       * @param {Object} e 事件对象
       * @param {Object} o 组件实例对象
       */
      touchmove: function(e, o) {
        return __async(this, null, function* () {
          if (!img.src)
            return;
          e.touches = getTouchs(e.touches);
          if (touchType === "stretch") {
            var point = e.touches[0];
            var start = touches[0];
            var x = point.pageX - start.pageX;
            var y = point.pageY - start.pageY;
            if (x !== 0 || y !== 0) {
              var maxX = num(area.width * (1 - area.minScale));
              var maxY = num(area.height * (1 - area.minScale));
              touches[0] = point;
              var r = rotate / 90 % 2;
              var m = r === 1 ? num((img.height - img.width) / 2) : 0;
              var xCompare = r === 1 ? lessThanByFault(img.height, area.width) : lessThanByFault(img.width, area.width);
              var yCompare = r === 1 ? lessThanByFault(img.width, area.height) : lessThanByFault(img.height, area.height);
              var isInclude = xCompare && yCompare;
              var isIntersect = area.checkRange && (xCompare || yCompare);
              var isReverse = !isInclude || num((offset.x - area.left) / area.width) <= num((offset.y - area.top) / area.height) || area.width > area.height && img.width < img.height && r === 1;
              switch (activeAngle) {
                case 1:
                  x = num(x + areaOffset.left);
                  y = num(y + areaOffset.top);
                  if (x >= 0 && y >= 0) {
                    var t = num(offset.y + m - area.top);
                    var l = num(offset.x - m - area.left);
                    var max = isIntersect && (l >= 0 || t >= 0) ? minimum(t, l) : false;
                    if (x > y && isReverse) {
                      maxX = validMax(maxX, max, isInclude, l, t, area.width / area.height);
                      if (x > maxX)
                        x = maxX;
                      y = num(x * area.height / area.width);
                    } else {
                      maxY = validMax(maxY, max, isInclude, t, l, area.height / area.width);
                      if (y > maxY)
                        y = maxY;
                      x = num(y * area.width / area.height);
                    }
                    areaOffset.left = x;
                    areaOffset.top = y;
                  }
                  break;
                case 2:
                  x = num(x + areaOffset.right);
                  y = num(y + areaOffset.top);
                  if (x <= 0 && y >= 0) {
                    var w = r === 1 ? img.height : img.width;
                    var t = num(offset.y + m - area.top);
                    var l = num(area.right + m - offset.x - w);
                    var max = isIntersect && (t >= 0 || l >= 0) ? minimum(t, l) : false;
                    if (-x > y && isReverse) {
                      maxX = validMax(maxX, max, isInclude, l, t, area.width / area.height);
                      if (-x > maxX)
                        x = -maxX;
                      y = num(-x * area.height / area.width);
                    } else {
                      maxY = validMax(maxY, max, isInclude, t, l, area.height / area.width);
                      if (y > maxY)
                        y = maxY;
                      x = num(-y * area.width / area.height);
                    }
                    areaOffset.right = x;
                    areaOffset.top = y;
                  }
                  break;
                case 3:
                  x += num(x + areaOffset.left);
                  y += num(y + areaOffset.bottom);
                  if (x >= 0 && y <= 0) {
                    var w = r === 1 ? img.width : img.height;
                    var t = num(area.bottom - m - offset.y - w);
                    var l = num(offset.x - m - area.left);
                    var max = isIntersect && (l >= 0 || t >= 0) ? minimum(t, l) : false;
                    if (x > -y && isReverse) {
                      maxX = validMax(maxX, max, isInclude, l, t, area.width / area.height);
                      if (x > maxX)
                        x = maxX;
                      y = num(-x * area.height / area.width);
                    } else {
                      maxY = validMax(maxY, max, isInclude, t, l, area.height / area.width);
                      if (-y > maxY)
                        y = -maxY;
                      x = num(-y * area.width / area.height);
                    }
                    areaOffset.left = x;
                    areaOffset.bottom = y;
                  }
                  break;
                case 4:
                  x = num(x + areaOffset.right);
                  y = num(y + areaOffset.bottom);
                  if (x <= 0 && y <= 0) {
                    var w = r === 1 ? img.height : img.width;
                    var h = r === 1 ? img.width : img.height;
                    var t = num(area.bottom - offset.y - h - m);
                    var l = num(area.right + m - offset.x - w);
                    var max = isIntersect && (l >= 0 || t >= 0) ? minimum(t, l) : false;
                    if (-x > -y && isReverse) {
                      maxX = validMax(maxX, max, isInclude, l, t, area.width / area.height);
                      if (-x > maxX)
                        x = -maxX;
                      y = num(x * area.height / area.width);
                    } else {
                      maxY = validMax(maxY, max, isInclude, t, l, area.height / area.width);
                      if (-y > maxY)
                        y = -maxY;
                      x = num(y * area.width / area.height);
                    }
                    areaOffset.right = x;
                    areaOffset.bottom = y;
                  }
                  break;
              }
              changeAreaRect({
                instance: yield this.getInstance()
              });
            }
          } else if (e.touches.length == 2) {
            var start = getDistanceByTouches(touches);
            var end = getDistanceByTouches(e.touches);
            scaleImage({
              instance: yield this.getInstance(),
              check: !area.bounce,
              scale: (end.c - start.c) / 100,
              x: end.x,
              y: end.y
            });
            touchType = "scale";
          } else if (touchType === "scale") {
            touchType = "move";
          } else {
            changeImageRect({
              instance: yield this.getInstance(),
              check: !area.bounce,
              x: e.touches[0].pageX - touches[0].pageX,
              y: e.touches[0].pageY - touches[0].pageY
            });
            touchType = "move";
          }
          touches = e.touches;
        });
      },
      /**
       * 触摸结束
       * @param {Object} e 事件对象
       * @param {Object} o 组件实例对象
       */
      touchend: function(e, o) {
        return __async(this, null, function* () {
          if (!img.src)
            return;
          if (touchType === "stretch") {
            var left = areaOffset.left;
            var right = areaOffset.right;
            var top = areaOffset.top;
            var bottom = areaOffset.bottom;
            var w = area.width + right - left;
            var h = area.height + bottom - top;
            var p = scale * (area.width / w) - scale;
            areaOffset = { left: 0, right: 0, top: 0, bottom: 0 };
            changeAreaRect({
              instance: yield this.getInstance()
            });
            scaleImage({
              instance: yield this.getInstance(),
              scale: p,
              x: area.left + left + (1 === activeAngle || 3 === activeAngle ? w : 0),
              y: area.top + top + (1 === activeAngle || 2 === activeAngle ? h : 0)
            });
          } else if (area.bounce) {
            changeImageRect({
              instance: yield this.getInstance(),
              check: true
            });
          }
        });
      },
      /**
       * 顺时针翻转图片90°
       * @param {Object} e 事件对象
       * @param {Object} o 组件实例对象
       */
      rotateImage: function(r) {
        return __async(this, null, function* () {
          rotate = (rotate + (r || 90)) % 360;
          if (img.minScale >= 1 && area.checkRange) {
            minScale = 1;
            if (img.width < area.height) {
              minScale = area.height / img.oldWidth;
            } else if (img.height < area.width) {
              minScale = area.width / img.oldHeight;
            }
            if (minScale !== 1) {
              scaleImage({
                instance: yield this.getInstance(),
                scale: minScale - scale,
                x: sys.windowWidth / 2,
                y: (sys.windowHeight - sys.offsetBottom) / 2
              });
            }
          }
          var ox = (offset.x + img.width - area.right - (area.left - offset.x)) / 2;
          var oy = (offset.y + img.height - area.bottom - (area.top - offset.y)) / 2;
          changeImageRect({
            instance: yield this.getInstance(),
            check: true,
            x: -ox - oy,
            y: -oy + ox
          });
        });
      },
      rotateImage90: function() {
        this.rotateImage(90);
      },
      rotateImage270: function() {
        this.rotateImage(270);
      }
    }
  };

  // <stdin>
  qf_image_cropper_render_default.setPlatform("APP");
  var stdin_default = {
    mixins: [qf_image_cropper_render_default]
  };
  return __toCommonJS(stdin_exports);
})();
