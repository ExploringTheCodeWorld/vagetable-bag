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
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LAUNCH = "onLaunch";
  const ON_LOAD = "onLoad";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const defineMixin = (options) => {
    return options;
  };
  const version = "3";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config$1 = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc",
      "up-primary": "#2979ff",
      "up-warning": "#ff9900",
      "up-success": "#19be6b",
      "up-error": "#fa3534",
      "up-info": "#909399",
      "up-main-color": "#303133",
      "up-content-color": "#606266",
      "up-tips-color": "#909399",
      "up-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0,
      wrapMaxHeight: "600px"
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true,
      autoWrap: false,
      unit: "px"
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: {
        color: "#909399",
        fontSize: "19px"
      }
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300,
      showRight: true
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: {},
      rules: {},
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: {}
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      rules: [],
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config$1;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: [],
      sticky: true,
      customNavHeight: 0,
      safeBottomFix: false
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: 140,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config$1;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config$1;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8",
      zIndex: 10
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: "",
      contentTextAlign: "left"
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABLKADAAQAAAABAAABLAAAAADYYILnAABAAElEQVR4Ae29CZhkV3kefNeq6m2W7tn3nl0aCbHIAgmQPGB+sLCNzSID9g9PYrAf57d/+4+DiW0cy8QBJ06c2In/PLFDHJ78+MGCGNsYgyxwIwktwEijAc1ohtmnZ+2Z7p5eq6vu9r/vuXWrq25VdVV1V3dXVX9Hmj73nv285963vvOd75yraeIEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaD8E9PbrkvRopSMwMBBYRs+5O/yJS68cPnzYXel4tFP/jXbqjPRFEAiCQNe6Bw/6gdFn9Oy9Q90LLG2DgBBW2wyldIQIPPPCte2a5q3jtR+4ff/4wuBuXotrDwSEsNpjHKUXQODppy+udYJMEUEZgbd94DvnNwlA7YGAEFZ7jOOK78Xp06eTTkq7sxwQhmXuf/754VXl4iSstRAQwmqt8ZLWlkHg0UcD49qYfUjXfLtMtOZ7npExJu4iqZWLl7DWQUAIq3XGSlpaAYHD77q8xwuCOSUoXw8Sl0eMux977DGzQjES3AIICGG1wCBJEysj8PXnz230XXdr5RQFMYbRvWnv6w8UhMhliyGwYghr4Pjg3oEXL34ey9zyC9tiD2ml5h47dr1LN7S6CMjz/A3PvHh1Z6UyJby5EVgRhKUe7Kz/JU0LfvrJo5f+Y3MPibSuFgQGBgasYSd9l6GDsup0WS/T/9RTp9fXmU2SNwECdQ92E7S57iaMeJnPQLK6ixkDLfjlb7546RfrLkQyNBcC3dsP6oHWMd9G+V3JgwPHh7rnm1/yLQ8CbU9Y33zp0j+nZFUMb/DHmB7+SHGY3LUKAk8cObtD00xlHDrfNge+Z2ozU3c9dvx4Yr5lSL6lR6CtCWvg6OAPw9z538ZhhZRl6XrwhW8du1KX/iNejtwvPQIDR8+vSRqJ/obU7GupjdNdh2gW0ZDypJBFR6BtB2rg2OVtuub9JcmpHIpBoK1xfffLzx4f7C0XL2HNiYDp6bs9z23Ypn1fC1Y/9PCFDc3ZW2lVHIG2JKzTp4Ok7nv/G6Q054MIvda+bNb74pEgKGtwGAdL7pcfAa8vOKEZ2kyjWuLr7uDh+/qvN6o8KWdxEWhLwroyeek/g4zuqwU6kNrhyZcu/UktaSXN8iNwuL9/RuvVXtJ9PbPQ1vhmcP6t9+47u9ByJP/SIdB2hDVw9MJHQFYfrQdCph84evFX68kjaZcPAZJWwjMXRFpJ2zr91tfuvrh8vZCa54NA2xGWrunvmg8QWCJ/N4ir7fCYDxatkOeBB7an501agXbygVdvv9IK/ZQ2FiPQdi9osGbH+zRNf7y4m9Xu9Me7N9nv0HXdr5ZS4psHgXpJC9P/wDRTx0Vn1TxjWG9LGrbaUm/Fi5meSvcrkxf/Cg/ow9XqAUk91v3qHT97r6471dJKfHMi8Oyzgx1Z03t1YAQVT2MwgsC3u+yXHzi0faQ5eyGtqgWBtpOw2Ol9+/TM+sTOn8L08MtzgQCy+tOHXr3jA0JWc6HU/HF5Scssr4jXcYqfP6V/T8iq+ceyWgvbUsKKOn38eJAYyl56TAuCEr2WYei//9Crd/5GlFb81kdASVopSFrerKRlaoZj9HR+700H10+0fg+lB21NWBxe2lhNHsUpDZr27mi4dV379R9+za4/iO7Fbx8ECknLCPTsTDJ17O33bJpqnx6u7J60PWFxeAcCbMV56dJfQKf1bkMLfuGh1+76zMoe9vbuPUnLsb2DtmOe5HSxvXsrvWtLBEhaTx29+Ma27Jx0ShAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaEsEVoQdVluO3BJ06ptHL34b1XRjp4Ch6Rq24+kmjG4Nwwg+9uA9u/73EjRBqhAEihAoe3xwUQq5WTYEzp0b3ZnV/Ncf6O/9AvY9wlh/6dy3X7ncN512Zw9BVLXjuAP4np44vnQtkZoEgVkEhLBmsWiKqwsXpjbPBOn3gRfenwnc+7GBe+zsjclvonFDS9nA9Iy/u3x9+vAP3735VPk4CRUEFhcBIazFxbfm0k9fHD7k+v4nQFaPQIrx8Gmyx/GJ0J/t7ez7mw0b9MmaC2pQQgh0/ZSm4g5TwueWWtqLt0HuVy4CQljLPPYnB0depTn+b3t+8B4t0AdBUv93h2H9xc6da0aXs2m+r1WQsLRnl7NdUvfKRkAIa5nG//r1oGtsZvjTgev/kqYHF/TA+AXoqv4npJemOEiQU1Eo2l+G0movBK1UBBPU7s9E1+ILAkuNgKwSLjXiqO/khVtvARH8dxDBRkMzPrF/V+9/BlG5y9CUqlXinHv9mRPXtvuus88L9H3JPv2zD2yXExCqAicJBIFWRwAvv3Xqwq0/Pnn+lv/K+ZvfPH3p9p5W75O0fxaBp793ce3AwIDMWmYhafiVgNtwSMsXeHp4eNXJC8Nf0PAdRCiuf/XgrnWUqsqotcvnl9DmRkCdweX4b9N7+m/ih+mbMraLM14yJVwcXItKpT1VRve+ArC3Qqn+3gM7132jKEGZm6tXg86J7OhDfuA/iHwPUpfUZSfu2L59tXxEoQxeyxkEgjKeOnLxHb4RqC+NY5H3+2953d4XlrNN7Vq3ENYij+yZwbG9jpt9GkBPQ5H9zgP9607OVeWp87cOQtn9zwJf+xDMNFfj+jryPqXpxj8c2Nn7P+SXey70lidu4IXzb0DNB4tr9751+HV7zxSHyd1CERDCWiiCc+QPjUCnsaqmZ62O5IN7N/VUNP48ee7mAZDTf4Tt049iUG4Guv4ZfNLos9UIbo7qJWoJEHjy+bP7fNsoOcnW0A0/aacef8PdG28sQTNWTBVCWIs01OfPj66BpfqTmq732UnjgT1bei+Vq4pTv7HM8Ceg2/o1qLQug7T+FaaM3IqTLZdewpoHgYEjV9fphvOj+OShWa5V+CxvZtpzv/LwG/aNl4uXsPoRwI+4uEYjAJ2GmdG8L0FK2mYa+tsrkdXZy+P7x2ZuHdW14P+BLdank9q6Qwd3rf+ckFWjR6Tx5Q2cP58K9Jm3VCIr1ogt48lO237r3//96YofeG18y9q7RFklXITxPXV+5DchKb3ZDMy37Nu5tuxG4R9cHH6b42QfAzlds+3EPXu2rfrBIjRFilwkBIIR7SHoJDurFU89ZOd680Gke6JaWomvjoBIWNUxqivFD87fej0e0n8Fwvr0/t1rnyqX+QfnRz7g+8FX8Rv8vL3auF/IqhxKzR2WCPxXqKeq3krDTdj2ierpJEUtCIgOqxaUakwzNBR0D09yiqePHOjveyOkpxLr9VMXb73V97S/h3nDXx7Y2fdPkAYbncW1IgIDxy5vM7LZt/hgrnLtxyaBrJNxv/72N+6tuNhSLp+EVUZACKsyNnXHvHL+1qcgNf2KbSXu2bt9dcmS9qlzo/fARgcmCtpzB3b1/Vg5QiuslLowENyDWDn8cSjl98PgdBviu03N+rl9/WufLEwr18uDwLdevLTF1YK3xnVZ2HI1bUxrT7z5zTuXdRP78qCyeLUKYTUI25OXbm4JPO00TBj+6I7+db8ZL3ZwMOiYdG4dA1lN9HWte2iuI2NAVPapC8O/CGPR34Ip/AZIbIMo7yX8G9QMbcS09P+2b1vf5XgdrXaPfiYns9oeLLEd8D1/B7Dp0E1jGP042pXQj7RKf546cmGzp+tv1TRf6YQD35/QO3seP3xow5IfC9QqmM23naJ0ny9ysXwgq98BWc0kVhv/Nhalbqe8kd/Fr8MOSEr3zEVWrwyO3I29hl+E9LUHGf+nAXI6sGPdd8uV2YphIKnE5IyL6bLxk7cn3bdkHHefrpvJAExMZ1uBZmqeNzXtfzUzk/m/ens7LjV7Px+8d9e1579/44l0duZtge+Np5zEEw8c2pBu9na3YvtEwmrAqNE8IZvNHsep5//yjl3r/0O8yFOXbv0QCO05gP0JGIL+fjw+uj91YeRh/Dp/PtCDM7Zpfmjvjt6Xo7hW9ycmJjaYduf7Hdf/8HTGfa3rG9rYxLSWnsloPg7fijZV8oFM2Ja2a9t6EJd7bCztvHP7us4rrdD/r3/7ct9I99jEI4cOiQ3dIg2YEFYDgOUJDFj1e8TqX7cT4kImXuQr5279A4DeBEX8ayvprU4N3rovcALot/TH13T0fXDTJn0qXk4r3k9OTm4y7a6PzjjORzOOvn1kbEqbnEprPhRzwAKzwFLHk05hv6Yd6N+o3R6beG50aPSdr3qV6IJKkVp5ITIlXOCYn4Yexr0w/DO6YXymHFlR0e5r7tsM3fxgJbI6fW1ivTeT+SsYmr54cFff+5Cu5X+hb94Merp6/J/PusGvTE6724eGJ7RpSFOkKPCUZvBPBccoHBet3Rwe13rX9tw/PjXzZ5hKvr8SfhWKkeA2REAIa4GD6p0feRdWBnvxjv2PckVhVfBf4A29uG/X2i+Ui2eYn8n8NryuDr3jPfWSFV5k44UT137eshIP2K7/64cObbheqZ6lCp+Ydt8TBO7vTM5od1+/NR4SFVhoLpKKt410lnE8LTMzo3V2dLznxLkhYgQ9obiVjEDln7mVjEodfYcpw+MAsftg/7qSDbAnb97sCSb0Yei2fqOcbovVqKNnNO8HmAE9Cv3Wp+uoWjt27HpXNqH9WTKR+kBHKqEFbvo5y3N/avfu4g23R45f3WGa1k9ZicTd0zPTf/f6O7f8dT311Jp2fHzmgJlI/N70jPPe4bEZ6Kg4qw0lqlrLiNKBiLWerpTW25PUbkPXZViW62ecHz+4d8PXojTirzwEyhq8rTwYFtRjvpX/rlwJ+iSXugPbMuyKBOHo3geRJtuT7PujcmVUCuPJlhnL/9NUqvMD2eyM5sxMaIlE4n7XML907tyNjcxHQjty4sZv66Z1xEok/xNW5n4uZSf+8sT5m++vVO58wkEu5sR09pd9w/rWyET2vReujiqygrSopn/zKZN5qMeirotKeTyolm7p/+X06Wvr51ue5Gt9BISwFjiGsLl6N6SrvylXDNTK70D4mX071pwtF88w6Jd/DG/1E1u26NOV0pQL71y3/8PJVOcHMzPTWkcCH2YGOaTTaS2RTN6f1fQvvvDK1bdnbO2JZCr1SeRfn05Pa1PTU0gXJBKW+ecnzlxvCGndhFQ1NRP8bcY1/vjS9bF1V26MwHwsVKiXa3etYVw1TNhYJ3TDjQCO42jJVMcez7J+t9YyJF37ISCEtahjGjxkGDr2DJZ31D8h5vUQJL5RPkXlUMM07u3qSGidICvkzzuSlmlZb0olrK9hD9v9JCrPC196JoPMAolFg6CV+PPj54YeyWecx8Vk2v1Q0rSfhFT18LnBmzBRyNalp5qrSuq7kiAsh4SFa7oZ9M0wzI+cPHOjZPo9V1kS1z4ICGEt4lhiCvZrSa2jol7qzPXJPk6nIGbVbWfUvcr7hO9MP97ZVXpggOu6ajplYStj7l1XvbRMXbPAbp6HzSSBlkraNknrvfVCcPt2sHYi7f3pTDb47KUbYxuvKqkKpYBXKBnV869c3WgbDEixAck0FGFFfEzJzbIsO9C1TyrcymWWsLZGIHoW2rqTzdo5dXyykz0NC8l779i5vu4zwM+eHVntGP5jqVTq/6AkVc5NZ3wNH2lVxNWZNIukMSjiNd9z0+CHp5DXAdX4SAg203w8GB5IATtODHzdK8C15kEjhXvNS9rWA11dnfcMDY9prscss48RySakrOLWqODCoIKAgkuVgsS0urtD60haeV1YYVbbtjUn6/74HXvW/11huFy3PwKzT1r797Upe3jq4sib9u9Y+wxe+vh7W1N7jx49v6ZzbffnQD4/Cj1Pfjx54XiBls6GVuTUc9mQsOIO9mPQFdkIRlz4fy5JLm2ZMOqTcJaXIqpcqnixVe+rdbZ3dbc2OT0D0wZIibHSksmklslknvx+//q3PiKnXcTQae/b+LPQ3r1t0969cOL6G7o6E09qgZegdMJBpVQ1DbKCpyUt6oPKz/4NEJalCAuZFIuEVBJd+jgLh4rvAiFqUVGkhJZMWFp3Z0obGSu/d5gSnWmavuO6h+/cvYHSobgVgoAYjrb4QPMUiGtj1/79jBMkLBwiTlMASlYzTkhWCJyTrGAyMOFkst/BoYMmuIIyGJYcMXMMdNwHPhYN1qWS1t6ZLGaKZL8yzFXTr15BooLLMugHMBRNKgW+It8y9TEcJGt4rvcRFCCEVQbFdg0Swmrxkb0+cf2XOzq73kgdFieEXF2jdEUJKQH6SVWQrNjtZDKlpTPp38U58iUbthk/Ph7sN6zg/xudSGvD4xkq6otcnnjyF0XRRTflkyC0IIJE1JG0QbqGNpMNp5xFhRTcZDNoj66988SFm5vv3LX+WkGUXLYxAuXnCW3c4XbqGs9hwjv+a9lsuN+ahOJSCoLjNDAFvVUll0p1aNPp6adTweSflEszPO48oFn+4yOTmR+6enOshKyYhzWpf/jDuuf6x2aV/qNRaPG/1d0gUXWCA0uu7GhMmkqmerEc8KOVU0lMuyFQ+Ylut562YX9Sncmf7Ojo3BDZWbGLtMkiUVXSWTFNuMqWuYG530f7+/tnGFboxsfdd9mm8XdDo9O7rg6NFq0CFqZr5DWlK9qV0fZqGvZchSuPlevB2VmG/hOV4yWm3RAQwmrhEcW64qu4ykfJho52Vp3J8quBYQooqWDKADftBd6HD+5efyoKj/zR8ew/hWXY56/cnFh7a3RCTTGjuMX0SVB9qzu1qfQM+jO3dBW1g6uVSHv/qVNX10Vh4rc3AkJYLTy+WA/8ou9kJjo7bOh+DLVFZ64TEbCyBktxI5PJZj56R//Gx+NdH5vM4vuI+p8NXh9LjU1iw3EZhXc8TyPuuV9wDaaCfBjTM06N0hVWQmHBDzvSDZ5tvqYR7ZAymh8BIazmH6OKLbzv0KZvJEz3ZzEFnEolaEtV2XEaCLKadrIz//TQnk1/EU85NuH8th8Yf4j9gMZUOrNkZEVZCnsbtTU9KW18GqcKFyjh420sd2+j33pg3F8uTsLaDwEhrBYf04O7N/2t7/o/C2FoGnsIy/YGlvAwSfCvZzLOe+8oR1ZT3u/5uvHJC9dGtJlMrfqjslXVHwjpat2aLi2rjFFLjUSrFUjlO0juddXSSXx7ICCE1QbjiHO0/hofbPgwpnDTOR2V6hWNQqGUx34890noet5yaO+Gko3Y45PO7/uB/lvnrwxrWdha1absbgxo1FWtwplXqYSJY5Nn5lU3bLHQmGA/yko0plVSSjMjIITVzKNTR9sO7dv8RSeb/T9BWmMkKv4D+YzBXuljV7yxd+zfte6VeHGKrHTz4+cv38JWmyUmKzSGG5z7VndoE7kz3uPtq+Welvhwm39weVjOyaoFsBZPI4TV4gNY2Pw79mz8KyebeRIH+VEZTaX0sf27+v794TKmCxNTzr/2NOPj5wZBVjjdYSklq6jN69dyKuhqmWztivYob+RTSkPbe/xMdlMUJn77IiCE1W5jq+s4dYEO6mzsYAmvi/+CrH7LDYxPcBq4HGTFVcG1ULLT5orS1ULIkoSFI2cMHKG8obiXcteOCAhhtdmo6gaOh4EWWlkyYU9gvHswXfgV19d/7+LVkSWfBrItJJhObL/p7elQR8fUZnEV70XxPc01sM+xrzhU7toRgZIHuh07uZL6xA3LBaYB+Ar8rBsfz34YX1j+D5eu317QNGy2xPquSE4mDuXb2IujY2AgytNE67RiKFshzuwCR5s9ZSMlsK0QEMJqq+GkBKOF5yFzRoidK5BoFCeMjM/8mG+a//Xy0Li55KYLBRiTrGjwOQ1br4VMBQuKVJeQKVPxMLlvPwSEsNpsTEECmBLSgbHUpwD1YGwse59l2p+9fmuig4fiNZIowrqq/6Xeqm9Vh9JbjcOKvqFtACX7gV8kTVZvkaRoRQSEsFpx1OZoM2iKxxuHLtDcsZlgLzYZfv7m7XSv+r7fIm234XSP/8o5ktWqzqSyZr89PoXPYDTYkZvziw0NLluKayoEyq4iNVULpTF1IaDjHHZmoAW4aep9geN8fiLt998cGYdtVp7K6iqzXGJFUCAi7jdkuapsBJKcPBwgyP8YRyV7B04Q3dDbpY3jg6gupoMNla5U41BbUN9n0sr1ScKaHwEhrOYfo7paCAW0WiWknihhW/0Tabf/6tDtxpIVSIhGnz1dSXUkDL8fSHKi4/lWPId9Kp3Vxqegp8J/m9f14D6DQ/nmb281FwgkZ1Dj7bnSSFx7ICCE1R7jmO8FJJr8jCvjeNrIxFjDJBpKVaSlXhwDw384MyucBoLAGEfHI5ptO6n1YAq4FjorH9IWjUOnFlF3pj62aui3whbI33ZGQAir/UY3XCVEvzgdw/8NcSyGUhSlpVWQrFg2p39xp0JYLyIohaXxdZ2FGofG6yi85/QS32F0Asu8URgu1+2JgCjd22xcsVElPC85169Gaa1YTkRWJKpSqooBiQQzONvq9sRULKKxtzzAEJw1api2EFZjoW3K0oSwmnJY5tcoSD09HanEDztubnfO/IopyUWC6sUmZUpW5aSqkgwgK04DxxaZrFivacCaIdAuH9zaM1rSDgloOwSEsNpoSMenvU93dXb+EE5taFivKElRqd67qrNmsqIF+yjMF/i56MV2JqadYKxXMDXM6+4Wu04pf/kQEMJaPuwbWvPticwj4Il/NnTrdl7JrqaDC5wTUle1GmdWWVCw1+JotjA6PgnThsIdQrXknF8arkJi/+R355dbcrUaArU9ha3WqxXW3tHR9C5dN//T9eEJ3aGdUwP7T0V7F86Mr0VW4mF6o2NTS/ilaB2HDmb8wA2+08AuS1FNjIAQVhMPTi1NgwRkGKbxRxMz3uaJSRzVUkumOtLwo6Zc7aOkVdEhynN9NQ1cyuNqeEqD67mX9TXGyxXbJhFthYAQVosP58S0909czfqJqzdGODVqaG/IUbCWr2p0yukfp4FUtDfeir1yl8IPUGjPHFy/fqJyKolpJwSEsFp4NEfT6Z3YBvOp8MvMc0hAi9hHNQ1cBrJil5TUZxhfXsTuSdFNhoAQVpMNSD3NMTzzU1PZYAM/ProYkg3UV5rHT8lXmA7SwnwEq4FLLVkRI04HM+n0LdvzvlEPZpK2tREQwmrR8ZucCd7hePr7rw2N5PfxLUZXON1zHKz4kb0KnIttP6Njk8tyaimbwXPrsW/yq3v3bhoqaJZctjkCQlgtOMCYCnU4GedTI+NpQ32XbxH7QOmKG5nzdIWZJz8HNkKygqI9TmSL2JSiovGVn0A39c8WBcpN2yMghNWCQ4zPc0HRbr6GEs6chJFnmfl3knZO4/hmII1B6fiFG9br0s6qAeXPp2WUrhzHeXH/jr6n5pNf8rQuAkJYLTZ2kK7Wul7w6zeGx9DyUsZovOodOizosTg1TM9k1Wogpa7lIisOF+w48E/7E5B1Y/cgtdizsBKbK6c1tNioT6X9n3MDcyePOo7OoJqrC6S0+ZIYV+GSOHxvc18PJCxXG4ed13I727axqTp9yk9rX1jutkj9S4+ASFhLj/m8axwdDdbgELxfGsLpoZyqVXPVU1QugVJUV0dC27p+FaaBWWxknq6ceAljTNMiAf/BoUMbJpewWqmqSRAQCatJBqKWZpgJ731Zx9pJM4aK0hXe5vlKVFEbKFlxs3PvqpSSqpbzKztRm+gnEkktnU6/2GFMfa4wXK5XDgJCWC0y1iAR6/Z49iOjY7C5qkG6mk+3SFQGlEP8FFdnygrNFqBsn1OxP5+K5pGHbcBhqhT8fqu/v39mHkVIljZAQAirRQYx7Wj3Zj3tddQjVVJ4l50CMjHe8mqOTJCCvmoTyIrENXx7Uinbm4Gs2PZUqkObnp76i0N7N36tWl8kvn0RaGnCGhgILKPn3B3+xKVXDh8+nPseX3sOlpt13+P4uonv71WeDqLr1ampFB8S1JrulNaHc9rTMxltcpofOeWns0rTLkeIZUHRnpm5YibMf7kc9UudzYNAyyrd8ZLpWvfgQT8w+oyevXeo++bBtaEtQd9s1/ffRsV3I6eDJCp+nourgH04UZQnhIYfWm1o8xdUGCU8/E/bil89sH3dlQUVJplbHoGWJaxnXri2HTvd1nEEcCBS3z++MLi75UejQgcmJjL92ax/gNJPo6QekhVXAbdvXI3D+XQ1Bcxiu02zTAEjKFIdHTQS/S8Hd2/4YhQm/spFoCUJ6+mnL651gkwRQRmBt33gO+c3teNQYin/oG6aKX5rcKEukqqoWN+Ij5vy81v8UATDG0WGC21jlJ96K6wKPpWd8H8jChN/ZSPQcoR1+vTppJPS7iw3bIZl7n/++eFV5eJaOczX9Z2YvM1LPxWpocBHKv8qHHdMqSphGUqqahaThfj40ITBcbLnsDj6oXvu2bS4n96JVy73TYtASxHWo48GxrUx+5Cu+XY5RH3PMzLGxF0ktXLxrRoGNVPPfNtOolIrgElLGYH2wbZqcipdIFVFlDbfGhqfj9bskCaHHS/7gTt3r73Y+BqkxFZFoKUI6/C7Lu/Bl1jmlKB8PUhcHjHufuyxx/g5lbZw+BL7bX4EoiZqyS0T0uM0j1+82QSl+ua+bhxj7GjD2LicwWkLzaarigbKsmDJ7gcTmezMBw/t3ixntUfAiK8QaBmzhq8/f26j77pbaxo3w+jetPf1B5D2RE3pmzyR4/nH+Mti4Wx1dUrCHO0lSVGqskFUnakkpn6mhu086jgYHkWTW3Wbo4Tli6L5gqYHE47vfeDufVv+YflaIjU3KwItIWEdO3a9Szc0ElDNDqcLbHjmxas7a87QxAnX9ljfxcr+Mzs29ykpi1O8iJjoR/cm5o7dnUl89LRLW93dyWmVIip+Kp7pmlWqIvQ8Mga9Gslm3Efu3LX+K008HNK0ZUSgplnGMrZPGxgYsIKeXa/TA61jPu0w0+7xBx/cd3M+eZspD0wbDgWm+RXP13cODY/jWGKuGAb48jG+agNpilbqlKZoWDqDY2AyjtNUlupzYZlKpXgaxIVMNv0zd+/d+uxcaSVuZSPQ/IT13TN34QRvZW81n6HSDdMLUqmjh9tgd//Fi8OHEl3JL3Z2dh3MzGA7XU664llVWRz/QhLjNYmsmaWp/DjCjqIDdlaZTOZZ1/A+fGj7hjP5OLkQBMog0NSE9cSRszuswNhdpt31BRnazM3U9IuPHDrUuG+419eChqU+cvzqjp7u5P9KJpMPpqc51Zv9QntLkFQBEqZluVCw/7nhaP9i376+8YIouRQEyiLQtIQ1cPT8GjOw7vE8tyFtxBrb2MBXdh579FF99g0vC0nzB548ebNHT2l/aFmJj1BPBYyav9EFLaQ+jdPAVNL8/pZ13a8qiJLLOhAAjvrTRy/d0enbF+69d0tzHFhWR/vnk7Rple6mp+9uFFkRGF8LVj/08IUN8wGp2fIcPLh+4sCu9R+F3ucj0MLf4vaVVnChqYWmdaQS2jpY2vd0djh86Vqh7c3Yxm8dudTPxaW0lrn7yJEjZW0Tm7HdC2lT0xKW1xecgHE3FDWNcb7uDh6+r/96Y0prjlIO7ur7TOD5b3ayzt9ylY0Gl83qKFXZsCXrXdOlrV3djf2LBr556JOshLDmMWhPPXV6vav5O5jVxYLUhNl3iIbV8yiqpbI0bQcP85C2Xu0l3dczC0XUN4Pzb71339mFltOM+Q/0rzu5f2fvu1zH+QDOt3uZ0pbVRMRFouJK5qqeTkhVqyBdtdUmhGV5JI4cudrpd5kHiyp3tTU/8s6r+4rC2vCmaQmLWJO0Ep65INJK2tbpt75298U2HLuiLh3oX/95L+0/kHUyvwTieiUJHVEimVzy1UKeWMqv2pCoKEVFRNXT1aHawnBx80eAZj7TwcxdAc5Gi5fiaNnNT37nCk4xaV/X1IRF2B94YHt63qQVaCcfePX2K+07fMU9U7qtHev+xE/7r3cc70O+6w1gxuV0dHZiusgvJS/O7IskRXLs6KCxqj+B26t9a3uUREWi4plbQlTFYzXvu+7tB3EIUGel/L6e3TNw5NS8zYAqldss4YvzBC9C7559drAja3qvDoyg6pwCP+KBZaVOPPjazS1vMLpQKE9fuPnawDB+EqehPwzWuAuSl8LPg90WVxhJJPWQCUmPBAWTBEz1TFUGpqO3wYYvIPgr2az35a2b1/50V6f1e1NTlVcvEzB0xRekj67usu5FmS2/crvQcaol/zeeObfTSOj91dIq28PxiaOHDx9quy8LtQxhcZBqIS0Dhkl2l/3yA4e2j1Qb2JUUD1Iyz1waOQib0vsxKXsAFvH3wMB0JySwtZC+DBPTN5BOCEnhrI1BuKe9l6tIzsVCiD6E0DOabrwI2elZ09aP7N3aNxjheXvK+a1OENa0EFYEyYL9rz072Ju03ZpNQKj7Xd899cKhNrA9LASvZTY/s9GcHoK0XsrakLS8UklLxyl+/rj+/Qfu2367sJNyTS7SuZfneO7ffweBGScu3NwAqWgrTvTc5jjBZmw87tMCfRXYKQWOgula4OiBOQUZ7DZuhrAGdQXxV0zPuCaGnkv3VPGHOpPw7+QPR62OM5HhdNddGOeX2kmCbSnC4mDlSStVTFr4eLljdHV+702vWz9R66Cu5HS5h5hmHvz3QiOxwJTRo2BGgY06dm7OVhewYGAY6s75oD+ZDs4JPY9JyqSCQ7ABqftd5VFM3/j2Ja4mtsWpJQSq6ZXu5UZTKeJnsHpohiYPRqBn04nkS2+CQWW59BK2dAjwS0Y4IHDz2ERWG8Gnwm7iK9W3sFmbvrqGPzw6gW8eTmvTM07XmTPX28KYd7EQ3rjnvv1QFHbPt3zT9DcMPHd+13zzN1s+/hC2rKOo7NjeQdsxT5LEWrYjbdLw05eHtwWe9jl0542u62HZHZIVpalY/yIlP5X3MHYddLLZfy4fmYiBhNuB509vw+rG3tKY+kOwGHLi7W/cS91jS7v4s9TSnZHGLx8CICH9lXNDX+zpWfXuycnaBV2e3e567nAm4973qv0bzy1fD5qr5oEB7KXt0u7B3Loh7yhWVfypbOalh9+wr6U3mbfklLC5Hi1pDRE4ef7Wj+EEiZ+amqpvJT2bzWjJRLIPR3n9riA5i4DZg720DSIrlsrvHXSZ9p7ZGlrzSgirNcetqVp9/vz5FJTqj6JRejTdq6eBMzNpHP9s//QrF4bvrydfO6f1JrCX1mvcXlo98Kembjotr3wXwmrnp36J+pYNeh5JdqRem83O77gxkpxtW3bgOZ/g1HKJmt3U1Rw+3D+zrc89aunagnWzpq6PdxujLz388L4F78tdbtCEsJZ7BFq8/sHBoMPX/I9hyrGgnuDUUZzrnnz7yQu3HlxQQW2Ued++fZmJ1e5LoPB5k5ZpWCPXz+08du+99zrtAI0QVjuM4jL2YcIZeh+2+9wF49MFtYJSlgmHE0g/JlLWLJQPg7RmhtyXsJ18eja0tivsXhj6xy9ve/mRR5TRcG2ZmjyViN9NPkDN3Dz1FW5z9XM4i+s1ME1YcFNpUIrVLHzJzHnwjl0bn1twgW1UwPHjxxPXpztejR0HFTc+F3YXRwxdfdM9W08D0zrs4wtLaM5rkbCac1xaolWOvurhZIPIih0OdVm2haNTfqUlAFjCRnJP4HBn+iUqz6tVa2nGpTe/etsP2o2s2G8hrGqjL/FlEQC5GHghfplSUSMdvwaEA/9+4vjpa3c2stx2KIsfUek2dr+EuXNF2xEjSJx98w/tbFt7NiGsdniSl6EPp84O3W/Z1oPzXRms1GRKWdCJdeCIlJ+vlGYlh997r+70+EPH8NHJEtLCauCph+7bmj81ox1xEsJqx1Fdij4Zxi9AT2KSYBrtslgxhOD2gWOyz7AstFzx6zFHj1mGobYUYAgC9cHge3ddK5uhjQKFsNpoMJeqK6+8cm0X6noXiWUxHA8WxAdWNyQM45HFKL8dyiRpueM7jllmMGpnjO+1w9fNaxmXxiogaqlR0jQdAkeOBPjczrnOiQ6jw88ESSOA6KT7iQzOHEvavu1pZsLQg4QPP/DdZG9Xx/vWrOr+mfR03SvtNffdxleAQIgvTzjBT0w409Mpu2faufZy+vDhw5WPMa25dEnYqggIYbXqyNXY7i/jCyvdfmaVb5hdVsLp9LJGp43j1/1A7/RdvdMwPRzEboRnLVHe9vEvL3eXBOB4ZMta22H+TiqV2LJQ26u5u6Bju44Z3J7O/Lvp6cwPmBanOwQ4uNHRTWMK21bSvh1Mm642nTWCtKkH07rnTE72aOO0XZq7bIltVQSEsFp15HLthg5J/+aJE12m3tVjOPYq1/dW4cTjHnwMYhXOce8xDd3y/PJW6OpMdsTRVy4iK/rKMR/jwvz825VIHFzT3fkx13UW/dnhRy3GJyeeHEs7n1XNibUPFvY6vtGDw5vV9w0Vofn81qGhZfDhi3HX8SfQ/3HPMse9CWcCX0gel2OIFJIt+2fRH7qWRaYJG85NxldGzV4tGayFSLQ24+q9ULyu9gJfMU5ELTn6wUISTl03NHz1KzyiJLqmX657OLLdSJgoXTO7cBxyN172blier4YCvBsFdSNXV2dC35tKJrbzfPfFdjwvC/qs9MSMxxNRsSqmT6LhUDQHE+jUBE7UnATXTuLsrRn01K2l/x6+qItiR3TNG8V59KNB0DGSfNXGUXwJY2Gm+osNhpSvEBDCasIHgVLTt75/aQ0MnXpBNb2QgNYEntfr4wu/nBYpKQLtxtdwAh0SBX3VDe7nM/Ha5vf1Fb/CURS2bCTAWWuxR229qRsbQQQbUed61LfW14JVKKsTJ5sk8WUcHbtlNANyTOhgcmAGKH7p3m1FWpqtuZCu+LByVdKHVMjpKEQrBwIW9tnpXOIH+QTDSH/D9f0bmCLewDn1I4HmwtAypPDZ/oe9oXKf/aMPsWxSs/RR13FHrURiZE1gDR86tKHEdCDMKX+XCwEhrOVCvqBeHNaW6ui11/mWDtLQ1kEiWodXE4rwYgepAPssTPCMOjIdAk94TZ8pMZjch8HjDorGFUTUAwlkh64be0A9/ZCatiDZWtOyE7ClQmIdJICJFYhA+TRV4Fo5/QIHiUvrTEbkVRCxiJfsSBbfYk87OTExXxdazY5yUgiRKfpHQ1YSkONmAZY+gV4NIeVFfCXoLNA5h/Plb5LzWAyzF+IVXdNnvO/6GcsyhjC1vmWZ7s2pO3fdOqzriy9asnJxZREoerDLppDAhiIAEtCfO3F5rW0a6z1PX4/nf53nG5RqqrpieSnULEVh8cx4E7ugH78H8tG9eP/24oVezY+pkpA8b/abhPF8le75BqdsXUtaFeaTlTI2IByEoU1l8oq1mkokcZHElIRoWmpejMMCMyCvQXyy7JjjuUcgOl4tLCzCMpTHgFpcgkViX/dH/ax2Szf8m2Yqc/MN+1r7BM/C/rfCtRDWEozSkbMjq7NTY5t13dqE6dhG3wsSqlp+C9DDi0ifLrqmT1f6BgUaPjiHN0lJAGAfvpWcI4XjiHIMF6ocO/EjmMa9HeelQ1LT1PRpoce/sJwOTCQtc+kfGQp6Uxl+9JWtmL+jNEaJ0gKBgbsygR58B4sHfwV5aliVWg3vCHv6ymHcdG868IzrVsK6pnd71+/dsmXxbD3m3/W2ybn0T1/bQFe5I8euX+9ybuqbXMPbDA7ZCKV4uMOecyz+9OfmWvj9x9zEw6JW+JuOX298WhE6qtwLEV3TL1tb/AWj7sqwfqaro/sdmcyM+vBp2XzzDEzaBiQsNH+e+eeTjQ+ohwqnG0BYhfVzNYKrkOmpyauYYH8KvD8G6RPBszrC6Jq+ystl0ghzXEZjR5+O4+iZwTh+eG7Yqa5rq/3hGzzTSkXKn4YgIITVABjBP+ZzP7i8ydasrZCetuCHvIvFRs92SEdlpnCYE2LOQi12OA7RNf1yjrphHIyE9yOXPnfNMDg70DpdTf8DWDKs5rRvMVwChAWrUgh21HzllD0NrigqlxKVC7bKQuOOWeGiuI7OTkhb6T8C/Xw3xkel9cXxj6eIxiY3Hhx3X9dHsWJwDaa3l1+zd9Mt/F4tUk/ijWnP+/DBb8++LWqvnh0c7NDGta0pO7kl6zpb8AJzEUr91kYEFdeBRCt69Nm4+AsSl6jwjVGckY6VwPwUpLhLURx9xliWvxFHi/w+zB0SWCnLsVpxnoXesSI2ngp4zmRJXPgf/0IleGH51R6uwjeX5MR76qtITh7+8N9Cp4GF7Sm8Zl1s35pVXVomm/5c1vG+Wm284njHJeJq44/FjixUAld8w7uijW6+xo3MhW2S6+oIVHumqpewglJ87+LFtcFUcqur+1vxwPcZJqYPMOyhXw6GKI4+4/GwQpjCBhe+6XDIpFb06PM+np5hhS5eXzw9bLJ2pBLGv4Fe36BU4kA6IQGw8MUY6MJywVeqDs54Z69zrWdY7jI3G1ZtUiSV6zzDI3IqLLew/wu9jspl+yywrA1pEed5QceXPT3jBb/DLrA5ua5UHZ/4eMTbFx+fwvE3DJO8fANrjlctL7giJhRx9MrfR89R+VgJ1Y6currONuwd0FNsxwtV02mPlWGLy1TxlPHf6Hh8PH9xesvw9yRM+5PIRT2ZIgVKKZxWUY/PT8aTFPji0i3m4Ed1hDWV/7uY9bNGtiGqAyorJRWSqCgdkrQiR5KddrwPlsq8xfhG6efvx8dvtiQczDdmmPaldDBxSVYeZ3GJXxUMWzxq5d4fPz7Ym7X1HTAL2A7NqtJHEQ3qtCPjw3LoxB/v+OMZ5VVzR5aHWRuErYA+y4uu6fM+Xl9J/lh7bFvbY+vmv0bWos9tsXAWSLIiaSnyApHxJz6SbFSFuXTw8i86r5vVRW1m+6IHmUREAuI0lcREP5q2ztWPrO9/YK54xsXHI56+cePvj3qBfimZNS+J5FWMcrjptThsRd4dPX9+DcwEd5iQphwozfkCwJKaLv9ewHYKeicfSudwShcnJDBBOD3MTwGRO0cqLIj73jQTaejDBYaPHTBgJ/i5+HyYijd95sFhRzkzB7yL2IrCtGwezj9nOQVTUlfPwiicifnu5J0qHHd8mXHIG6ZD7JQqIk9kJK6QwAokMWRUhMaSeJ0vcfaiXNhs7PyuwpYV51Vh+EM/Pu2M9GckpyiOuZm2Wvtom+Y4me8xPbvIIujzPu6Wbvyt1ejL3U7Sv/v754ZHsORwaX3KGdwiJhO5pzY+Mivk/urVq52jTnIXlEc78LKu8qAMx/G8kHhyOicosz0ovM3IrIDKb15HSvDoOoqv+hMLYCOWI8ash0vmufryZVcqLz4u8fym3ov1xT/EVp4UDUTn4/iS0xW+sZTMojASmLqGp64iH4FRXJQ2TKj+lv7JVRTVxwQkm9APyaboGnGMzSVR6VR87ipsVT645ovOzi5tamb6zzB1/nqzjz+s9YetwLioZW5C8jq08K9+1IxS8yQsfF6ap1WL2BK8VOaJc6NbPcPrx7wJ++hmHQUPvOaQgMJ3ETtVlERDP0wVsQ19uPgcLQyt/Dc+p4jlL6k/1xa2qVyh5ApEzEoErm/DsPOTXV3de6anq36roFyRdYWVbVSshHJEMt98saIXfIu9koplYZL6m/hUz7kS/Jt0/PE8+Jj6X/Y6k+fv2tA1BKIvB/OC8WnGAmp5dpqx3XW36fjgYK/upXbhFd+BrRlqn16MfkrspkoC4hnirYjbUVWzs4rHx8uL3cerjwt0TA4RcBcsuX8Rn97q54okVsCKJJ9YkSvy1gJR4aOtnAr6OJP+L13d+BKBKMEzHhAfgDh6yzD+vqHjTDDvYpAxLqwEfVdbE9bpIEi6V27tdLP+LnzPrWS/XrRTnz5d4e79+LNY7r4kP+Z7Jv7z1LyPL0B4Tb+ci9cXLy+eJ54e8Rw//rqqcUR+HOrgYVprJbBl5E2w63oI64J7k8mUDZLGhmAXs19ucVkxP8gKQu4ptCxbMy2TW3KAGI4u1P207ztH3CDx/7bL+Cdse8h1Zy5ev7Dp8uHD7blJuy0J69TV8XW6l92Dl3cbLG6g98idbhDgdANcY1ZY9o2N4mpNr96GRf1Da3Wui0RW69F1bWslvp81LD2xDTOGu9DhQzBc7AcYfYlkAqo6A6ozqHNBYJTESGitTGShsp0qQSxT4AcoPJQw0LBlEPhBFakHDjoLvY+XgVIyg7WK77tG8n9pvpHXBbXL+OMBd7FN6KLu+uf27esbX9RHdIkLbxvCGhgYsDb3v2a7obt7YHakpKmYiqgE2ioqJbzIOszXcSov/DAzRRNehyJKvPx4+igv/ZLKEaCkoZxUFMYXE1I8f7Xyq/UHp9CkAlfbCF3NdlhS7IQguA0N2wiJYy1ktC5IISb1Okr5jSYruy2SGlYkIkKLSC3yy/WrUWGzSnjaTUX/QEhYQuNewLCdwBFKRkpOuAfr4sBnwwfDg6B0MHagORhBHNqHw5WxTwYav6lAt/42MBLfrYZXHO9w3Ftr/B0Hp0pY+tkD29ddAz5ln8NGjddSlNPyhHV8aKjbzAS7Dd3egRcvgRHJWyrHASw9Pyp+vlSxEluH0jWAGQF9VVZMpxHVRZ/xSKQU4PR5Xy0+/sLQZCFS9DN/XKtSeh5WrL2x+sMyZv+W67+vwz5eC7oDx12rm9pakNg639B68XL3Qh+2Bm94DySxHhg0daBHSQhiCbyyyMS9SDi8RhEHyYP1qD9qak0S4VGn5VYrSTRKEkKHWYYiHuQmCYb/YKYLqS+3H5LYckxJmz6qhSYJ5yNgzgtuclESpncBfN8Fj3lgJdCSGpHcGECoxrouMoHjzO+4evLLMB1VKxJV8Wyj8Q80Ix043jnTu32hlTdkh08Yn7UWcnio9Qs3pzZm0lN7LCOxIdIZxbuQ1+lAVFFxJB7aMeUIiPkiPRPjo2v6dPF4FVjHnxi/oQK0Az/bymf5uI7ayGLj6eM63nrbF5VNXzV7nv3HViQL3JAEaSV1z0iBNJIgJBCYkSKJYbdjEiSHw7a0BI5s6QBBbINUswMUsQ6E11UojZGccA9dcZDBdQY+TgyFTgkiEKYyIBvstAQzIRk8cBJ+A2j4gZFDFWAqjAp3V5IhQYYwwUJ57ByS0QINzMYK8FyrRxt3KNbXb2qG/UVNT5wDyCt6/A0boGbdqzPA4tD21SPquWihPy1FWHjQzYs3xnZkM95ePIZd8RccBx1xez/UPowp46I4+uVcLD9/8Plq0Gfy6Jp+uez5uqPyY+UtNN5DuVQc06drpv4bIDXsjtsMpdkOSC79QK4Xog3PzwF4IBNCBiIhpBSpoE8jioqWaM2KCRuOqwLXgIQItKIe0lCYD/lZjoqgGIo0+J++SsmMKA8eqQ21qHuUh2PfzQHN6vgG6vVK8GfmQhcbr3Yff+AEi3rtdCtNF8u/eIWD2ATXx4Mg0XH1Vr/hm7sDQw8PvyvTrriKWocEE0C6oM/kJRJHrAykgj6WGlq+JUifu6YfS6pu4/UVa6AgQcXKi78ApekhcWFBwMstEkTX9MvVHw+Lt2ex+4+Pg62CxgsHEwZbAdgWIJfA+ICkfDRYtyAwWWB7Ay8F8VT/KB0bOJ4Gx/CQfUKSwZGrJJs8iZHYgB0zMB+zk8hopQ8hEcEog2ERASIBAOL5fIrVIKLxXKtzKPZLgZUckvGf+/nH5HsK0+Uz3316zeAjj3D23Lwu90w0ZwNpiZ72UnvwfO/AXIFnXfLBxLOsHn6yiLqmr3oQ04LHX9hq6TFHI6txrlYWkHj98UT1lh8vryR/rIKq6aO204drdP8hRWF3itmLUw42QnW1CSTSA2IAIXkWOBYKLWw8wjVqNkEaFqjFwLQNJhWI4ZiFoiq6QX0SbsEo6HMoWVFCYprwjw6FP65BXCSoXJwiOwpnFK9A6yiWkQhRDwA9XAfpwLS/AqnqSKP7jwapquiznXFXMn6x8Yg/X/HySvLHKqiaPlZfvf0H6BloAM/v3tpzHkJwUx59Uxb4GE5Lfnt2ZGS16SX3+F5mq4llfegtwnaSR6J5EC8hPUV6IDaS6aDnoZ5DpYe6AtdgOr4pyhXLNPH0KKCo/DDP7N+S+mI6qHzbQr7AbdgW+iylWn0l5cf6E29ftfSN6L9lGl04x30tOtMHklmLhxpClW9BL4S1T+i2uNPRp+0FflD0AN9A9LHnmHGBBfJCE3QL9ALiguoJqiu+64gDzWGIIAlhzhaSDsMV/yjJi3BxyY9khP9BXBSzEMY/AFORGMmM1yyKZfmm+ZKuJf4uMHV1THEj+o+S864E7zYd/8Dliqp2MamvPbt9uw4dY/M4DnXTuMuXx/scK9iHLcbryzfKwvOJBSGNPl10Tb8WV0xYyMFymDdXXv46Kq+ueChJQI4WlSUqf8StOf5CNdXqr9afxe8/Gm6AoLAqGKyCGLSG350ACFzKM2FvaeOseEhFOsjItdQ2S6wYYmkOdl2+CfLBvmpIV55vYY2Qn6uAxAWC40zbhxSmWArcQj0TSIiSU37mx0kgVesgLereOSz8E5EWJa6Qzyh1hZEcO7xY4Ct9WLfNvwa+5xA2h6uGP6vMPxMsZ8WNf0Gf+cOCw9usq51a5+kNG9Sn1IjJsjoO0LI7EpVra/vxhPdFs7JyjYriohlbTAKGxO1C6oJEljseOLqmTxfPX66OucJK66OUNzuDjK7p05UIbGwX25I/vrj4BYrnD0uZ/Rtvfzz9fPsPIkgkbL0DZNMFRVEHFEY2ZCBTcwMLdfCsCCVN4SwpE9YG+ARNgD24IDHYSYB1yNCYDkLRFoC8oOUG40AKQx5IYyAmlQ6SF7dDoSof0hbJiApzqLs43aPc5UG+AvVQ/4T7nGQFQiJ5kdbAkmgH2Sz0FaWB4gLrad22v4nmuvPt/yzCc1+V4t0e4z93r8PYwDCvNANxLSthkai0jmCf5+jq6y6Y4SkjTfoKprgWufj9Dg3AozBmiK7pl3H8WDH3u0YfLY6u6c/HVS2vSvsxoygyTF2q/qNenEyjJ5NJPYGPRidME1M1/JYqwyoNq32Ihu4J0z5M+WA2DoqwEI9wfmEaEhQJzPNsKNOh0jJwrfRVJqbnNOrC6IGwQFzgHiKrpCuq2kE+FizrMXWE7IWCEKemg7hSiimOQchNIC3EchqpHlBO95TshQThkwF5TL9k+Mm/MZLGzVo3AlQdLzagDle1vCYd/wU9/5Z5ZcyZPnNow/J8ZHZZCGtsbKw3rdn7nIzTx42o0WfP1cPKuYJ6XPFs5q7p8zmKx5v8cdcxDeMPOR1fj+gh4X10TV/dukiC+nJPeLy8eH1hrtm/UVvpKxcrP2oL/dlcs1eQ9PCeo73wGcp+R2Xyvlp74vH19B9EkoA2CYKUlcQqJCQj6vkoyBjh/IurcJiy4Zxy2FMptRBO7sK3kClR0UYUZAX+wMqfC1ICiYHMYBsKSQsSFKaAUEqZLoiK00ASFsgpN0UEUWE6yOkiiArE6NmUb91OWwAAEuNJREFUszCNxA0c/uBoF04W86YOarWQAYjGmHBBEIkUiXEqib025hNmInWknv6zKo77Sh3/RvcfSx5Xl4O4yr5Y7NxiuEEQFT4uvs8yrF5VvosX28LLS185vsiRHkc9YPiJtrCbJIzHyx3gJdfpl80flZWPR6qIxJghus7xjSqj4E9UNn2VvN76Csqq6XIR+48OYEeGlcAaXhLfQwxNQcgQEI9IErOOxBUuCuDLz9Arm5iyOTaYy7Jty8hAb2VCm43ZmwnwQTbgFpAWyA4SGEKhaMdgYNpngKAcpeMCAfFjYGE4yAqco3RZ0LorUqOkxVkf6AgzvFBPFbISSsOUD+WRrWijpcwbmI4Gomj4yxAIv4bPVU+q9sfxk/EP36UlfP49N3vNWr/m9CZdX/zzjDDofAoW3XHVr9NPHdB8p2+uORl/mjFLUktMbBTtkSJbpLCRxYyD5OpJps/4+DJuvq5IIgoLqfi3pLzcRuloM7QSzKImsBSWG80LVKkxkSvOkFHaCjL5QvrPN9rwvaSVtEg2ICmQCNRQkGjwnlOpNktMxdds+GxcRFrIyCmhTQMEUJjl4qwtzPbAOVC8o0DUZroGiMmBpEUfRBZ4DvRUJC4/1GOpij1ML9XU0PJdFxIZGsOpJkkOQ0YdFh5CPodKl0WfRqQkVUhTIEf1iN4GkdJU4Rx/xsJfHkpfMv4cd+IAUJb1+YdkfSU7NXp6+/bti7qquKiEdfVq0Gl2TO2DonYzAcUTCv0slCB8FuGia/q8j7iAPl30aNIPHVKq55w+00MvjFLo05WmV8H5P9XLzydVF/H0xbGl9UGfjm226B98po2u6fO+0f3H9M7SbT1h+FoS00ybSmm+5/RZHxzbwWvVHtSvNuLRR4BKl0vPtHRhWh1SESUsNBkH0qjvNiAx4MA1JDBc4yBmTPmwJArJCFM+dA1SE5XsmFIqRTzKUrZYkMio78IUkauFoW6Mcbin1GWrOR8nqOEUEUQFmuK3ZdEw6NFg92s9j3XLp0CIsAuS8VdPkcKhCZ9/KAc81x/c3NdzFjy6KHZc0YPNh7VhDg9jYnh4co9n2dvx1nLalys7Rimx2xLGigfEJBQ0Xr149FkBVb04BQiTlPAFbTiDxRGKM1pJf5AgarPKG0sQu413N07hkCANO5m0fSebtCwziW5DqMISHTRMJCDF23inYbmsauNCHq+Vn1ta5dErzKN8psP/RiIXVpAegKJQ30Y06AQSEXdAIpdL0wbTNsLpoSIeCwRJHZYBpTusIFAIlPC0iqL5AxoCcmLPQkkLdITRCc0dSFqQD1A51g4pLOXmhZCwDMO2BpH9q6ZtDoU4oKQIy5yEynFnv+mzw+0+/q3Sf5yT4aYs89zq1alLIK7wYeQANcCpgW5AOaqIARzxcudrXrMTz+cuFAxBI1Rw06eLKz3xsnDikt+Mmr9mWBlXrbySeJAlTt8MXJImXHRNv0zx2GpWZ3r0KKqzXHlRHH26+fQf+mkbg56ADjppUuihMJl7BEhGtmnj+4Phj1lEUAzjaQcgJkzcqPPmlI/yjdJV8Trf/+hbeYyP0uMS0zSVF8SEaSELxkhR6a7IC1IVHkNMBWEkCljxYQ7YXgWKrDCHw2ohJDDKSkr5Tst3TANBp7DdgkTFKSOpxYMtV2i3hXQoJjwbBo3L4oibAajdXmSbCl01PEvi6x3PetMvwfi3cv+xHpPRk8GZvo6Oq5y5FvZlvtfqQZ5v5igfH7iRdHqrn/H24McyEb6ejCUxkCwqEATi8JDNKtWRIxI6wrLj+aOyQgIqLT/KTZ+OLYnCFGHE60PdSgzIgVmcfrbt5evjYkB97VeNyv8plx/UYoChElhYgB7KtD3PAUWRpejIVNzNAjNzyDuYRqnrMF5dIx4CkTrlAJQRps2FhZIX5lqYwfFLOygTBeSmkUhDEgNvIC7MR5ML6JhozoCpn+858G1utbH4j7BRT0Z9VlZzbTyOKJCKeCjkqYbkFBJh+DXCPVcKuXKIFURlm8WBoZSFOBCYmk6i33ioT+Kw1CegEMspcFfe+M8+rRySNum/YUwm9I7TPT04NWOBDg/nwtz16xMbEp3mPswIOuI6G7wBSlynz1pQWZEIP0smIcEEWN3QsfJDn+nj9FFSPh73wilgdE2f+eOumo4pPqWI2kI/LKu4RVXLq7H/kJopRUFhnkj4joNT9KC/BlZgAIVD1I+cwASVUBgCIsF1KEQxJLpGPKHGP5LYrAs5ikREnmJ61KF4K5cG1+REVS6HC1JauGroYYcOrLWUEp6MSF0UpoZgK5hV2dgEzeNLYbMBnRQZEUPnOwGMT6GOp57Kg/0WTCMYjnsQHpDmlJFTR5IcNt/alvV1PdF5NsKcLSpGG03L6QcjnWDpeIXqgFYb//A9wGi1+fMPDeqY7nae6uvT530KKp+JebkhHJyX6Fqz33X83tCgRr1d6gXBH+XnFtEwDmEVMBfAtbK7UvHxVTb1gGLQokbFVBZMDtUJHmT+dsPxmqSRU2nkrxkWxhfbOfEVwLov4sIaonSRr1qZy6vy8xliPbn+qPjYHxSm6mJwdB357DfaVtJ/BMLeW0/ayVQSR6TA5AB7h8kwmFeRrFBUSFYkJk7GsM+F5SuiCQmFBEriCskHYcxfEM9ozBjBS/yaKD//rBzndjD3BHswAcmqwFdhOWGugCw5owwpEt9sxMlVGWQEK4GlcAOi1XAcL6eLICfdcMFmNDnH7xdO/YTCHTkxM2B6EiSPbuXmHrZO5eJy4Iu6lfo2Gu8orFfA+PM9UMjnHpBIx9v+/Q9Wm8nMfcMTE1d7u7vP4Ec6fzy1wqOGP3xI63JHjgT2/rsy/boTbMP0pe78dVUWS5wjK0VUjIqNN3kA62ZYeIcfxofXDFNFUZBTT4W6m71mWBlXrb4yWSoEYWh0jVIUdJEmzA6o18mRDN7dCplCEkK8IiP4WRAU9OO8j5wimZB3SAhKYlJEphLkJCaSEP7PEdxsfVG5UWFxP6qPPngTlvBED6IWLN8dTPmg8ocFPPRXWBdlFWqqCEmLlhAgLRtKdLaAkpQNfRUM6DUQGOUiTimNEaT7FvRVw/F6K91XG4/mHf9KPaovvJ36jzfSS1mpc6mUdhnvhZL4a0GjZsKBKK+n0+kt0AHvztCAsIzjeeAeUKVPF1l101cBWCICxcGmcPalUeHRnyguIsJYej79fFnpKxdjrKhu+spVK69Ke+OW6SXlh7Xk/8b7D5umJKY6nUiQAEmp5ZKoD5Ay8kTFzcAsJIrL+ZREYCWAaU4ubXRNP8wfpuSuGubHMwCJhSuGPCiYJIMw5GV6xkfY0Wd+WoPiBAlEhvnzNluw3SKZYTkQHIQ5J1RQDg7Lw/QQGUIdFp4wcC9KgQ/7KkxjucEHROVmc3ZaCFfEjMxUvlPvBZ0WhT1Q1zG06hQKyGPA9qEh4bPRJuO/0p//WvoPyXpa77BPr9L1mn64QiJRT0vlP3jg1oyn0/th1dnN6VOkQyh8wVRuPpLUH9GHi+sckD4vLaj43NSHLwfv8cKjbGxdgc97JUpFpIRbpovKYHTUltkpHYkyEqNYf1gWfZU+Vn+JiMZERS4qKyTAMv1hmwoItLT/aL6OL9cn8A4mknhDkR5CUuh43ExhAXjnIQVxRQ9UwnU1JM73meHISINzlY/1Ir3jwNQBtui5IpU3K2mFZbEUEhgJiHlZhkqI8rws7hPFxBHlZ5romu1CGRSv2HyQEQiLPkwefJcSk2o0mU+F8Z46KswbKd8qvRUWiq7BsuoYlF/q+Jd839p4/KNnFHhw+Fbc819r/y3dHO7qsk9D2lLPBvEq59SLXC6CYSCq1OTk5F48g+FxLyQSvvyzhFK8taaYL1ACiYdkkSOg/HVO4irmAySLlR8+yHy5wnaWysTF7YmnRxdyecMXFDcxx3KjNCUEGUtb2r4Iixwh5qebxEG58v2Hkh0ERqlLp5kClNLkngLSyF8XExrZi089SYbFm9DRg1FCbEKyoxQE8sqFkTOgTwrDVIPCP/k8qpRcGrxMEXmxnpwjUeXbhjpgA2bBNsp0HPQWOiwNOnddw5YcNIdSFyzTlUKehEbrLDxDNn7osjCXPw5FO22qgPfKHn/pf8XxxxetvSvYlX8BxBVKCdGDmPPDhz0W+Oijjxof//jHt+Hh2oko/qKqFx4l0BJQmQIwS3RNn/fxZXqGFbq4nQzimI9tKFs+S1S1KJ9XoQkEfUQwtKg98fSzefMMwmx5F28/IqK2RLjM2b54/gX0H0v6+IiDZSVgHJogfYWNzDMUpCtsUkKg4pKIUJAsnNTlkjNWzfBCPMOhi8JAiCSqPBmyMFVQ1OdctQwLywNZ5cPCpDl80D6IhjzBASQF0sUeREpSJCyE4ceSpJXbEO2612AHepaTSRn/YrtEAD3n8xV/ntv4+S96nyGRO9gccQZmEPiBK3bRi5kPHcG+v2T32n2+53bxNY8oQyWIB0SR9OmqxMeTh5lm/8azx8srEbCQNSqTpUTX+eagwCiPqiWeQAXO/olHV2tPaYUFjWCxsQJjt7MV564K6iOB2Xj1adNGa3PqDMFl4XwSSnAQCUIibqFPlwtTwbiOkoSR+JvLx3KYv9BXaSrlLyifSegQBNMFTAWhiIeFArRZnoX+8Y2EzKhbnuNlYO9wFpZXkwoH5Kmj/6qOFTz+0n8+Y4Y/2pVIcJqY35+YJ6wjEN33ZzL9kPY3hWjx6Sv+RcByLIQAZZYQJSn2C944FRF/QkvjQ31XZDcV04GVPOGl+WdJEhVGbaNPV3d7Va7ZP83U/1ACgzTjkg4gjUFvHhGWkrPAPnnBLNeFSEKKfAbzOu9yBAUdVj6cZURpZuU3XOUILioD93x2IEnxxFGc9c6M+M93cHSNZVzHquBQDeMn4x898wQ2us7pgGvAbyU8/z5e5EupVEqtJirCgp4KHxVI7sbrQIYKHyKF3+yvIvEEX8FsQNk9qXwgBpgQwNo7p9OKrukzfdzF08+WTmYrV35YF+tU8bEpYImInGtLVH+8PkzZ8iQcVpjrawXCLOHH5uo/9JmWjbXHJMQcNhVW8bOklbsumnJw7Q+cgtVK2mJxAUNNKKncp54KHuzAwnjCE01B1UIHA1A80ik/IkdIfTj6mE8MXh2sSKZhdHUd+IcDykwFLj4eMv7Fv+il75c8/xEmeHaojD+jZ4LgbsPVVvO5iutg4oSAFCCiAqVp/jrUKRU8mzVexsube05ff3tiD0Q1wkP/ojrYgeiaftiheHsjLKL4GrudTxYvb0H9h94bpzeAwCD4cAqJf5SmlBjFH5D8ChVC1Q8KyIkrjtgbE64y4lqtINJHel5Hq4q4ZdsYzsWBWaU+rkFWtFzQbiNNnWciNbT/qD4+Hitq/FdE/3mWzmvQU+W4hZZPenQuRHRNfylcvfVjpUqz0Tj6dNE1/fm4euufTx1z5am3/hr6z6lj9A9ElneKwPJ3IYEVEpqKys0YFeUhoDBP4TV/+bjVIkfqKuu8/ixC/+tqR73111V4DYnrrb+G8a+h1tkk9dY/m7MxV7XUzwdP3ApBgCYG6Co+L6/+kcB4X0g0ERFFzwXjojBc5q8ZhqOKtWEoROmLEwSWBIHowVySyqSS5kIABEYhisRFEov8SgRWGD6K9OMgq8IwBIkTBBYXASGsxcW3pUoHgfF5iIiLPv9x+03kuLxMqaqsUj1KJL4gsFgICGEtFrJtUG6OwDhtJHHhqLOl+dBAG0AnXRAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBIGVhMD/D0fV/fpMMM+gAAAAAElFTkSuQmCC"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      title: "",
      columns: [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: [],
      immediateChange: true
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: {},
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: {},
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: {},
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: {},
      useNative: false,
      height: "2px"
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: [],
      lineColor: "#3c9cff",
      activeStyle: {
        color: "#303133"
      },
      inactiveStyle: {
        color: "#606266"
      },
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: {
        height: "44px"
      },
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: "",
      iconColor: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: {
        fontSize: "15px"
      },
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: {},
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      extension: [],
      capture: ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const defProps = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload
  };
  const props$r = defineMixin({
    props: {
      bgColor: {
        type: String,
        default: () => defProps.statusBar.bgColor
      }
    }
  });
  const mpMixin = defineMixin({});
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string$1(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i2 in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e2) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o2) {
    return o2 && Object.prototype.toString.call(o2) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string: string$1
  };
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep$1(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i2 = 0; i2 < styleArray.length; i2++) {
        if (styleArray[i2]) {
          const item = styleArray[i2].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    if (typeof customStyle === "object") {
      customStyle.forEach((val, i2) => {
        const key = i2.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += `${key}:${val};`;
      });
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = "") {
    if (!unit) {
      unit = config$1.unit;
    }
    if (unit == "rpx" && number(String(value))) {
      value = value * 2;
    }
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o2 = array(obj) ? [] : {};
    for (const i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        o2[i2] = typeof obj[i2] === "object" ? deepClone(obj[i2]) : obj[i2];
      }
    }
    return o2;
  }
  function deepMerge$1(targetOrigin = {}, source = {}) {
    let target = deepClone(targetOrigin);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge$1(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uview-plus/libs/function/index.js:278", `uView提示：${err}`);
    }
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times = Math.ceil(fillLength / fillString.length);
      while (times >>= 1) {
        fillString += fillString;
        if (times === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value.length; i2++) {
              _result.push(`${key}[${i2}]=${value[i2]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast$2(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "u-form-item");
    const form = $parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (typeof obj !== "object" || null == obj) {
      return "";
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i2 = 1; i2 < keys.length; i2++) {
        if (firstObj) {
          firstObj = firstObj[keys[i2]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (typeof obj !== "object" || null == obj) {
      return;
    }
    const inFn = function(_obj, keys, v2) {
      if (keys.length === 1) {
        _obj[keys[0]] = v2;
        return;
      }
      while (keys.length > 1) {
        const k2 = keys[0];
        if (!_obj[k2] || typeof _obj[k2] !== "object") {
          _obj[k2] = {};
        }
        keys.shift();
        inFn(_obj[k2], keys, v2);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge$1(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge$1(this.config, mergeConfig);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return deepMerge$1(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          route({ type: this.linkType, url: url2 });
        }
      },
      navTo(url2 = "", linkType = "navigateTo") {
        route({ type: this.linkType, url: url2 });
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = $parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e2) {
        e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
      },
      // 空操作
      noop(e2) {
        this.preventEvent(e2);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index) => {
          if (child === this) {
            childrenList.splice(index, 1);
          }
        });
      }
    }
  });
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$13 = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$r],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = addUnit(sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "u-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1$a = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$J], ["__scopeId", "data-v-eb8e0cdd"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const props$q = defineMixin({
    props: {
      // 图标类名
      name: {
        type: String,
        default: () => defProps.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: () => defProps.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: () => defProps.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: () => defProps.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: () => defProps.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: () => defProps.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: () => defProps.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: () => defProps.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: () => defProps.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: () => defProps.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: () => defProps.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: () => defProps.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: () => defProps.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: () => defProps.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: () => defProps.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: () => defProps.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => defProps.icon.stop
      }
    }
  });
  const _sfc_main$12 = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$q],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && config$1.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: addUnit(this.size),
          lineHeight: addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: addUnit(this.top)
        };
        if (this.color && !config$1.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? addUnit(this.width) : addUnit(this.size);
        style.height = this.height ? addUnit(this.height) : addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        if (this.customPrefix !== "uicon")
          return "";
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      addStyle,
      addUnit,
      clickHandler(e2) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e2);
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, $options.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, $options.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: $options.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? $options.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? $options.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? $options.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? $options.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$I], ["__scopeId", "data-v-ac70166d"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$p = defineMixin({
    props: {
      // 是否开启顶部安全区适配
      safeAreaInsetTop: {
        type: Boolean,
        default: () => defProps.navbar.safeAreaInsetTop
      },
      // 固定在顶部时，是否生成一个等高元素，以防止塌陷
      placeholder: {
        type: Boolean,
        default: () => defProps.navbar.placeholder
      },
      // 是否固定在顶部
      fixed: {
        type: Boolean,
        default: () => defProps.navbar.fixed
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => defProps.navbar.border
      },
      // 左边的图标
      leftIcon: {
        type: String,
        default: () => defProps.navbar.leftIcon
      },
      // 左边的提示文字
      leftText: {
        type: String,
        default: () => defProps.navbar.leftText
      },
      // 左右的提示文字
      rightText: {
        type: String,
        default: () => defProps.navbar.rightText
      },
      // 右边的图标
      rightIcon: {
        type: String,
        default: () => defProps.navbar.rightIcon
      },
      // 标题
      title: {
        type: [String, Number],
        default: () => defProps.navbar.title
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: () => defProps.navbar.bgColor
      },
      // 标题的宽度
      titleWidth: {
        type: [String, Number],
        default: () => defProps.navbar.titleWidth
      },
      // 导航栏高度
      height: {
        type: [String, Number],
        default: () => defProps.navbar.height
      },
      // 左侧返回图标的大小
      leftIconSize: {
        type: [String, Number],
        default: () => defProps.navbar.leftIconSize
      },
      // 左侧返回图标的颜色
      leftIconColor: {
        type: String,
        default: () => defProps.navbar.leftIconColor
      },
      // 点击左侧区域(返回图标)，是否自动返回上一页
      autoBack: {
        type: Boolean,
        default: () => defProps.navbar.autoBack
      },
      // 标题的样式，对象或字符串
      titleStyle: {
        type: [String, Object],
        default: () => defProps.navbar.titleStyle
      }
    }
  });
  const _sfc_main$11 = {
    name: "u-navbar",
    mixins: [mpMixin, mixin, props$p],
    data() {
      return {};
    },
    emits: ["leftClick", "rightClick"],
    methods: {
      addStyle,
      addUnit,
      sys,
      getPx,
      // 点击左侧区域
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      // 点击右侧区域
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$a);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-navbar", [_ctx.customClass]])
      },
      [
        _ctx.fixed && _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "u-navbar__placeholder",
            style: vue.normalizeStyle({
              height: $options.addUnit($options.getPx(_ctx.height) + $options.sys().statusBarHeight, "px")
            })
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([_ctx.fixed && "u-navbar--fixed"])
          },
          [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, {
              key: 0,
              bgColor: _ctx.bgColor
            }, null, 8, ["bgColor"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["u-navbar__content", [_ctx.border && "u-border-bottom"]]),
                style: vue.normalizeStyle({
                  height: $options.addUnit(_ctx.height),
                  backgroundColor: _ctx.bgColor
                })
              },
              [
                vue.createElementVNode("view", {
                  class: "u-navbar__content__left",
                  "hover-class": "u-navbar__content__left--hover",
                  "hover-start-time": "150",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "left", {}, () => [
                    _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.leftIcon,
                      size: _ctx.leftIconSize,
                      color: _ctx.leftIconColor
                    }, null, 8, ["name", "size", "color"])) : vue.createCommentVNode("v-if", true),
                    _ctx.leftText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: vue.normalizeStyle({
                          color: _ctx.leftIconColor
                        }),
                        class: "u-navbar__content__left__text"
                      },
                      vue.toDisplayString(_ctx.leftText),
                      5
                      /* TEXT, STYLE */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.renderSlot(_ctx.$slots, "center", {}, () => [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-line-1 u-navbar__content__title",
                      style: vue.normalizeStyle([{
                        width: $options.addUnit(_ctx.titleWidth)
                      }, $options.addStyle(_ctx.titleStyle)])
                    },
                    vue.toDisplayString(_ctx.title),
                    5
                    /* TEXT, STYLE */
                  )
                ], true),
                _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "u-navbar__content__right",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "right", {}, () => [
                    _ctx.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.rightIcon,
                      size: "20"
                    }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                    _ctx.rightText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        class: "u-navbar__content__right__text"
                      },
                      vue.toDisplayString(_ctx.rightText),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ])) : vue.createCommentVNode("v-if", true)
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$H], ["__scopeId", "data-v-f631659b"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
  const props$o = defineMixin({
    props: {
      // 是否显示圆点
      isDot: {
        type: Boolean,
        default: () => defProps.badge.isDot
      },
      // 显示的内容
      value: {
        type: [Number, String],
        default: () => defProps.badge.value
      },
      // 显示的内容
      modelValue: {
        type: [Number, String],
        default: () => defProps.badge.modelValue
      },
      // 是否显示
      show: {
        type: Boolean,
        default: () => defProps.badge.show
      },
      // 最大值，超过最大值会显示 '{max}+'
      max: {
        type: [Number, String],
        default: () => defProps.badge.max
      },
      // 主题类型，error|warning|success|primary
      type: {
        type: String,
        default: () => defProps.badge.type
      },
      // 当数值为 0 时，是否展示 Badge
      showZero: {
        type: Boolean,
        default: () => defProps.badge.showZero
      },
      // 背景颜色，优先级比type高，如设置，type参数会失效
      bgColor: {
        type: [String, null],
        default: () => defProps.badge.bgColor
      },
      // 字体颜色
      color: {
        type: [String, null],
        default: () => defProps.badge.color
      },
      // 徽标形状，circle-四角均为圆角，horn-左下角为直角
      shape: {
        type: String,
        default: () => defProps.badge.shape
      },
      // 设置数字的显示方式，overflow|ellipsis|limit
      // overflow会根据max字段判断，超出显示`${max}+`
      // ellipsis会根据max判断，超出显示`${max}...`
      // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
      numberType: {
        type: String,
        default: () => defProps.badge.numberType
      },
      // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
      offset: {
        type: Array,
        default: () => defProps.badge.offset
      },
      // 是否反转背景和字体颜色
      inverted: {
        type: Boolean,
        default: () => defProps.badge.inverted
      },
      // 是否绝对定位
      absolute: {
        type: Boolean,
        default: () => defProps.badge.absolute
      }
    }
  });
  const _sfc_main$10 = {
    name: "u-badge",
    mixins: [mpMixin, props$o, mixin],
    computed: {
      // 是否将badge中心与父组件右上角重合
      boxStyle() {
        let style = {};
        return style;
      },
      // 整个组件的样式
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = addUnit(top);
            style.right = addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      }
    },
    methods: {
      addStyle
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 0,
        class: vue.normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle), $options.badgeStyle])
      },
      vue.toDisplayString(_ctx.isDot ? "" : $options.showValue),
      7
      /* TEXT, CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$G], ["__scopeId", "data-v-06cca9b7"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-badge/u-badge.vue"]]);
  const props$n = defineMixin({
    props: {
      // item标签的名称，作为与u-tabbar的value参数匹配的标识符
      name: {
        type: [String, Number, null],
        default: () => defProps.tabbarItem.name
      },
      // uView内置图标或者绝对路径的图片
      icon: {
        icon: String,
        default: () => defProps.tabbarItem.icon
      },
      // 右上角的角标提示信息
      badge: {
        type: [String, Number, null],
        default: () => defProps.tabbarItem.badge
      },
      // 是否显示圆点，将会覆盖badge参数
      dot: {
        type: Boolean,
        default: () => defProps.tabbarItem.dot
      },
      // 描述文本
      text: {
        type: String,
        default: () => defProps.tabbarItem.text
      },
      // 控制徽标的位置，对象或者字符串形式，可以设置top和right属性
      badgeStyle: {
        type: [Object, String],
        default: () => defProps.tabbarItem.badgeStyle
      }
    }
  });
  const _sfc_main$$ = {
    name: "u-tabbar-item",
    mixins: [mpMixin, mixin, props$n],
    data() {
      return {
        isActive: false,
        // 是否处于激活状态
        parentData: {
          value: null,
          activeColor: "",
          inactiveColor: ""
        }
      };
    },
    //  微信小程序中 options 选项
    options: {
      virtualHost: true
      //将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
    },
    created() {
      this.init();
    },
    emits: ["click", "change"],
    methods: {
      addStyle,
      init() {
        this.updateParentData();
        if (!this.parent) {
          error("u-tabbar-item必须搭配u-tabbar组件使用");
        }
        const index = this.parent.children.indexOf(this);
        this.isActive = (this.name || index) === this.parentData.value;
      },
      updateParentData() {
        this.getParentData("u-tabbar");
      },
      // 此方法将会被父组件u-tabbar调用
      updateFromParent() {
        this.init();
      },
      clickHandler() {
        this.$nextTick(() => {
          const index = this.parent.children.indexOf(this);
          const name = this.name || index;
          if (name !== this.parent.value) {
            this.parent.$emit("change", name);
          }
          this.$emit("click", name);
        });
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-tabbar-item",
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.createElementVNode("view", { class: "u-tabbar-item__icon" }, [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor,
            size: 20
          }, null, 8, ["name", "color"])) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              $data.isActive ? vue.renderSlot(_ctx.$slots, "active-icon", { key: 0 }, void 0, true) : vue.renderSlot(_ctx.$slots, "inactive-icon", { key: 1 }, void 0, true)
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          vue.createVNode(_component_u_badge, {
            absolute: "",
            offset: [0, _ctx.dot ? "34rpx" : _ctx.badge > 9 ? "14rpx" : "20rpx"],
            customStyle: _ctx.badgeStyle,
            isDot: _ctx.dot,
            value: _ctx.badge || (_ctx.dot ? 1 : null),
            show: _ctx.dot || _ctx.badge > 0
          }, null, 8, ["offset", "customStyle", "isDot", "value", "show"])
        ]),
        vue.renderSlot(_ctx.$slots, "text", {}, () => [
          vue.createElementVNode(
            "text",
            {
              class: "u-tabbar-item__text",
              style: vue.normalizeStyle({
                color: $data.isActive ? $data.parentData.activeColor : $data.parentData.inactiveColor
              })
            },
            vue.toDisplayString(_ctx.text),
            5
            /* TEXT, STYLE */
          )
        ], true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$F], ["__scopeId", "data-v-e01cdc2c"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.vue"]]);
  const props$m = defineMixin({
    props: {}
  });
  const _sfc_main$_ = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$m],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
        style: vue.normalizeStyle([$options.style])
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$E], ["__scopeId", "data-v-f3d22cfe"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  const props$l = defineMixin({
    props: {
      // 当前匹配项的name
      value: {
        type: [String, Number, null],
        default: () => defProps.tabbar.value
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: () => defProps.tabbar.safeAreaInsetBottom
      },
      // 是否显示上方边框
      border: {
        type: Boolean,
        default: () => defProps.tabbar.border
      },
      // 元素层级z-index
      zIndex: {
        type: [String, Number],
        default: () => defProps.tabbar.zIndex
      },
      // 选中标签的颜色
      activeColor: {
        type: String,
        default: () => defProps.tabbar.activeColor
      },
      // 未选中标签的颜色
      inactiveColor: {
        type: String,
        default: () => defProps.tabbar.inactiveColor
      },
      // 是否固定在底部
      fixed: {
        type: Boolean,
        default: () => defProps.tabbar.fixed
      },
      // fixed定位固定在底部时，是否生成一个等高元素防止塌陷
      placeholder: {
        type: Boolean,
        default: () => defProps.tabbar.placeholder
      }
    }
  });
  const _sfc_main$Z = {
    name: "u-tabbar",
    mixins: [mpMixin, mixin, props$l],
    data() {
      return {
        placeholderHeight: 0
      };
    },
    computed: {
      tabbarStyle() {
        const style = {
          zIndex: this.zIndex
        };
        return deepMerge$1(style, addStyle(this.customStyle));
      },
      // 监听多个参数的变化，通过在computed执行对应的操作
      updateChild() {
        return [this.value, this.activeColor, this.inactiveColor];
      },
      updatePlaceholder() {
        return [this.fixed, this.placeholder];
      }
    },
    watch: {
      updateChild() {
        this.updateChildren();
      },
      updatePlaceholder() {
        this.setPlaceholderHeight();
      }
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.setPlaceholderHeight();
    },
    methods: {
      updateChildren() {
        this.children.length && this.children.map((child) => child.updateFromParent());
      },
      // 设置用于防止塌陷元素的高度
      async setPlaceholderHeight() {
        if (!this.fixed || !this.placeholder)
          return;
        await sleep$1(20);
        this.$uGetRect(".u-tabbar__content").then(({ height = 50 }) => {
          this.placeholderHeight = height;
        });
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabbar" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-tabbar__content", [_ctx.border && "u-border-top", _ctx.fixed && "u-tabbar--fixed"]]),
          ref: "u-tabbar__content",
          onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"])),
          style: vue.normalizeStyle([$options.tabbarStyle])
        },
        [
          vue.createElementVNode("view", { class: "u-tabbar__content__item-wrapper" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 0 })) : vue.createCommentVNode("v-if", true)
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "u-tabbar__placeholder",
          style: vue.normalizeStyle({
            height: $data.placeholderHeight + "px"
          })
        },
        null,
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$D], ["__scopeId", "data-v-b9276d10"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-tabbar/u-tabbar.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type2) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type2);
    } else if (type2 === "error") {
      console.error(piniaMessage);
    } else if (type2 === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store2) {
    return isPinia(store2) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store2.$id,
      label: store2.$id
    };
  }
  function formatStoreForInspectorState(store2) {
    if (isPinia(store2)) {
      const storeNames = Array.from(store2._s.keys());
      const storeMap = store2._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store2.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store22 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store22._getters.reduce((getters, key) => {
              getters[key] = store22[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store2.$state).map((key) => ({
        editable: true,
        key,
        value: store2.$state[key]
      }))
    };
    if (store2._getters && store2._getters.length) {
      state.getters = store2._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store2[getterName]
      }));
    }
    if (store2._customProperties.size) {
      state.customProperties = Array.from(store2._customProperties).map((key) => ({
        editable: true,
        key,
        value: store2[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type2) {
    switch (type2) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store2 = pinia._s.get(nodeId);
              if (!store2) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store2.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store2.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store2) => {
            payload.instanceData.state.push({
              type: getStoreType(store2.$id),
              key: "state",
              editable: true,
              value: store2._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store2.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store2.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store2.$state).reduce((state, key) => {
                  state[key] = store2.$state[key];
                  return state;
                }, {})
              )
            });
            if (store2._getters && store2._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store2.$id),
                key: "getters",
                editable: false,
                value: store2._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store2[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store2) => "$id" in store2 ? store2.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store2 = pinia._s.get(storeId);
          if (!store2) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store2, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store2) {
    if (!componentStateTypes.includes(getStoreType(store2.$id))) {
      componentStateTypes.push(getStoreType(store2.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store2.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store2.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store2.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store2.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store2._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store2[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store2.$subscribe(({ events, type: type2 }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type2),
          data: assign$1({ store: formatDisplay(store2.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type2 === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type2 === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store2._hotUpdate;
      store2._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store2.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store2.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store2;
      store2.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store2.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store2.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store2, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store2)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store2[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store2, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store2;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store: store2, options }) {
    if (store2.$id.startsWith("__hot:")) {
      return;
    }
    store2._isOptionsAPI = !!options.state;
    patchActionForGrouping(store2, Object.keys(options.actions), store2._isOptionsAPI);
    const originalHotUpdate = store2._hotUpdate;
    vue.toRaw(store2)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store2, Object.keys(newStore._hmrPayload.actions), !!store2._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store2
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store2;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store22 = pinia._s.get(id);
          return getters[name].call(store22, store22);
        }));
        return computedGetters;
      }, {}));
    }
    store2 = createSetupStore(id, setup, options, pinia, hot, true);
    return store2;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store2._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store: store2,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store2, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store2 = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store2);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store2, setupStore);
      assign(vue.toRaw(store2), setupStore);
    }
    Object.defineProperty(store2, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store2._hotUpdate = vue.markRaw((newStore) => {
        store2._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store2.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store2.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store2, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store2.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store2, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store2, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store2, store2);
            })
          ) : getter;
          set(store2, getterName, getterValue);
        }
        Object.keys(store2._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store2, key);
          }
        });
        Object.keys(store2._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store2, key);
          }
        });
        store2._hmrPayload = newStore._hmrPayload;
        store2._getters = newStore._getters;
        store2._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store2, p2, assign({ value: store2[p2] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store: store2,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store2._customProperties.add(key));
        assign(store2, extensions);
      } else {
        assign(store2, scope.run(() => extender({
          store: store2,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store2.$state && typeof store2.$state === "object" && typeof store2.$state.constructor === "function" && !store2.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store2.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store2.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store2;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store2 = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store2;
        }
      }
      return store2;
    }
    useStore.$id = id;
    return useStore;
  }
  function storeToRefs(store2) {
    {
      store2 = vue.toRaw(store2);
      const refs = {};
      for (const key in store2) {
        const value = store2[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store2, key);
        }
      }
      return refs;
    }
  }
  const useTabbarStore = defineStore("tabbar", {
    state: () => ({
      current: 0,
      tabbarList: [
        {
          pagePath: "/pages/index/index",
          iconPath: "/static/images/index/chat-n.png",
          selectedIconPath: "/static/images/index/chat-y.png",
          text: "对话"
        },
        {
          pagePath: "/pages/find/find",
          iconPath: "/static/images/index/search-n.png",
          selectedIconPath: "/static/images/index/search-y.png",
          text: "发现"
        },
        {
          pagePath: "/pages/establish/establish",
          iconPath: "/static/images/index/chuangjian.png",
          selectedIconPath: "/static/images/index/chuangjian.png",
          text: "创建"
        },
        {
          pagePath: "/pages/notice/notice",
          iconPath: "/static/images/index/heart-n.png",
          selectedIconPath: "/static/images/index/heart-y.png",
          text: "通知"
        },
        {
          pagePath: "/pages/mine/mine",
          iconPath: "/static/images/index/mine-n.png",
          selectedIconPath: "/static/images/index/mine-y.png",
          text: "我的"
        }
      ]
    }),
    getters: {},
    actions: {
      setCurrent(index) {
        this.current = index;
      },
      findPage(path) {
        return new Promise((resolve, reject) => {
          for (let [index, item] of this.tabbarList.entries()) {
            if (item.pagePath === path) {
              this.current = index;
              resolve(true);
              return;
            }
          }
          this.current = 0;
          resolve(false);
        });
      }
    }
  });
  const TAB_CREATE_INDEX = 2;
  const _sfc_main$Y = {
    __name: "tabbar",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const current = vue.computed(() => tabbarStore.current);
      const tabbarList = vue.computed(() => tabbarStore.tabbarList);
      const tabbarChange = (index) => {
        tabbarStore.setCurrent(index);
        const { pagePath } = tabbarList.value[index];
        const navData = { url: pagePath };
        if (index === TAB_CREATE_INDEX) {
          navData.animationType = "slide-in-bottom";
          navData.animationDuration = 300;
        } else {
          navData.animationType = "fade-in";
          navData.animationDuration = 100;
        }
        uni.navigateTo({
          ...navData
        });
      };
      return (_ctx, _cache) => {
        const _component_u_tabbar_item = resolveEasycom(vue.resolveDynamicComponent("u-tabbar-item"), __easycom_0$4);
        const _component_u_tabbar = resolveEasycom(vue.resolveDynamicComponent("u-tabbar"), __easycom_1$9);
        return vue.openBlock(), vue.createBlock(_component_u_tabbar, {
          value: current.value,
          onChange: tabbarChange,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true,
          activeColor: "#000000",
          inactiveColor: "#000000"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(tabbarList.value, (item, index) => {
                return vue.openBlock(), vue.createBlock(_component_u_tabbar_item, {
                  text: item.text,
                  key: index
                }, {
                  "active-icon": vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      class: "tabbar-icon",
                      src: item.selectedIconPath
                    }, null, 8, ["src"])
                  ]),
                  "inactive-icon": vue.withCtx(() => [
                    vue.createElementVNode("image", {
                      class: "tabbar-icon",
                      src: item.iconPath
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["text"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"]);
      };
    }
  };
  const tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-e9b92a61"], ["__file", "F:/uniapp/vegetable-bag/components/tabbar/tabbar.vue"]]);
  const config = {
    base_url: "http://10.70.2.6:8888",
    image_url: "http://10.70.2.6:9001/",
    request_time_out: 1e3 * 60,
    logo: "/static/icon.png"
  };
  const TokenKey = "caibao-Token";
  function getToken() {
    return uni.getStorageSync(TokenKey);
  }
  function setToken(token) {
    return uni.setStorageSync(TokenKey, token);
  }
  function removeSyncToken() {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key: TokenKey,
        success: () => {
          resolve();
        },
        fail: (error2) => {
          reject(error2);
        }
      });
    });
  }
  function toast$1(content) {
    uni.showToast({
      icon: "none",
      title: content
    });
  }
  function showConfirm(content, title = "提示", options = {
    cancelText: "取消",
    confirmText: "确定"
  }) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title,
        content,
        ...options,
        success: function(res) {
          resolve(res);
        }
      });
    });
  }
  function tansParams(params) {
    let result = "";
    for (const propName of Object.keys(params)) {
      const value = params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && value !== "" && typeof value !== "undefined") {
        if (typeof value === "object") {
          for (const key of Object.keys(value)) {
            if (value[key] !== null && value[key] !== "" && typeof value[key] !== "undefined") {
              let params2 = propName + "[" + key + "]";
              var subPart = encodeURIComponent(params2) + "=";
              result += subPart + encodeURIComponent(value[key]) + "&";
            }
          }
        } else {
          result += part + encodeURIComponent(value) + "&";
        }
      }
    }
    return result;
  }
  function sleep(ms = 1e3) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const errorCode = {
    "401": "认证失败，无法访问系统资源",
    "403": "当前操作没有权限",
    "404": "访问资源不存在",
    "405": "方法不被允许",
    "default": "系统未知错误，请反馈给管理员"
  };
  const baseUrl = config.base_url;
  const request = (options) => {
    options.header = options.header || {};
    if (getToken()) {
      options.header["Authorization"] = "Bearer " + getToken();
    }
    if (options.params) {
      let url2 = options.url + "?" + tansParams(options.params);
      url2 = url2.slice(0, -1);
      options.url = url2;
    }
    return new Promise((resolve, reject) => {
      uni.request({
        method: options.method || "get",
        timeout: options.timeout || config.request_time_out,
        url: options.baseUrl || baseUrl + options.url,
        data: options.data,
        header: options.header,
        dataType: "json"
      }).then((res) => {
        const code2 = res.data.code || 200;
        const msg = errorCode[code2] || res.data.msg || errorCode["default"];
        if (code2 === 401) {
          uni.reLaunch({
            url: "/pages/login"
          });
          reject("无效的会话，或者会话已过期，请重新登录。");
        } else if (code2 === 500) {
          toast$1(msg);
          reject("500");
        } else if (code2 !== 200) {
          toast$1(msg);
          reject(code2);
        } else {
          resolve(res.data);
        }
      });
    });
  };
  function addedList() {
    return request({
      url: "/model/addedList",
      method: "get"
    });
  }
  function chatHistory(query) {
    return request({
      url: "/model/records",
      method: "get",
      params: query
    });
  }
  function clearHistory(modelId) {
    return request({
      url: `/ai/clear/${modelId}`,
      method: "delete"
    });
  }
  function updatePinned(data) {
    return request({
      url: `/model/pinned`,
      method: "put",
      data
    });
  }
  function deleteModel(modelId) {
    return request({
      url: `/model/${modelId}`,
      method: "delete"
    });
  }
  function detailModel(modelId) {
    return request({
      url: `/model/detail/${modelId}`,
      method: "get"
    });
  }
  const ThemeStatus = "THEMESTATUS";
  const aiProfilePageFromChooseImagePage = "aiProfilePageFromChooseImagePage";
  const cropPageFromCropImagePage = "cropPageFromCropImagePage";
  const chooseImagePageFromCropImagePage = "chooseImagePageFromCropImagePage";
  const cropImagePageFromCropPage = "cropImagePageFromCropPage";
  const cropImagePageFromEstablishPage = "cropImagePageFromEstablishPage";
  const establishPageFromCropPage = "establishPageFromCropPage";
  const props$k = defineMixin({
    props: {
      color: {
        type: String,
        default: () => defProps.line.color
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
      length: {
        type: [String, Number],
        default: () => defProps.line.length
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: () => defProps.line.direction
      },
      // 是否显示细边框
      hairline: {
        type: Boolean,
        default: () => defProps.line.hairline
      },
      // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
      margin: {
        type: [String, Number],
        default: () => defProps.line.margin
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: () => defProps.line.dashed
      }
    }
  });
  const _sfc_main$X = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$k],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-line",
        style: vue.normalizeStyle([$options.lineStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$C], ["__scopeId", "data-v-72791e59"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-line/u-line.vue"]]);
  const props$j = defineMixin({
    props: {
      // 是否虚线
      dashed: {
        type: Boolean,
        default: () => defProps.divider.dashed
      },
      // 是否细线
      hairline: {
        type: Boolean,
        default: () => defProps.divider.hairline
      },
      // 是否以点替代文字，优先于text字段起作用
      dot: {
        type: Boolean,
        default: () => defProps.divider.dot
      },
      // 内容文本的位置，left-左边，center-中间，right-右边
      textPosition: {
        type: String,
        default: () => defProps.divider.textPosition
      },
      // 文本内容
      text: {
        type: [String, Number],
        default: () => defProps.divider.text
      },
      // 文本大小
      textSize: {
        type: [String, Number],
        default: () => defProps.divider.textSize
      },
      // 文本颜色
      textColor: {
        type: String,
        default: () => defProps.divider.textColor
      },
      // 线条颜色
      lineColor: {
        type: String,
        default: () => defProps.divider.lineColor
      }
    }
  });
  const _sfc_main$W = {
    name: "u-divider",
    mixins: [mpMixin, mixin, props$j],
    computed: {
      textStyle() {
        const style = {};
        style.fontSize = addUnit(this.textSize);
        style.color = this.textColor;
        return style;
      },
      // 左边线条的的样式
      leftLineStyle() {
        const style = {};
        if (this.textPosition === "left") {
          style.width = "80rpx";
        } else {
          style.flex = 1;
        }
        return style;
      },
      // 右边线条的的样式
      rightLineStyle() {
        const style = {};
        if (this.textPosition === "right") {
          style.width = "80rpx";
        } else {
          style.flex = 1;
        }
        return style;
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      // divider组件被点击时触发
      click() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-divider",
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
      },
      [
        vue.createVNode(_component_u_line, {
          color: _ctx.lineColor,
          customStyle: $options.leftLineStyle,
          hairline: _ctx.hairline,
          dashed: _ctx.dashed
        }, null, 8, ["color", "customStyle", "hairline", "dashed"]),
        _ctx.dot ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "u-divider__dot"
        }, "●")) : _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "u-divider__text",
            style: vue.normalizeStyle([$options.textStyle])
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_u_line, {
          color: _ctx.lineColor,
          customStyle: $options.rightLineStyle,
          hairline: _ctx.hairline,
          dashed: _ctx.dashed
        }, null, 8, ["color", "customStyle", "hairline", "dashed"])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$B], ["__scopeId", "data-v-ea022cee"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-divider/u-divider.vue"]]);
  const props$i = defineMixin({
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: () => defProps.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: () => defProps.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: () => defProps.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: () => defProps.transition.timingFunction
      }
    }
  });
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transitionMixin = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        await vue.nextTick();
        {
          await sleep$1(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        }
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        await vue.nextTick();
        {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        }
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$V = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, transitionMixin, props$i],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$A], ["__scopeId", "data-v-5cec8177"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props$h = defineMixin({
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: () => defProps.overlay.show
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: () => defProps.overlay.zIndex
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: () => defProps.overlay.duration
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: () => defProps.overlay.opacity
      }
    }
  });
  const _sfc_main$U = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$h],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    },
    emits: ["click"],
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$1);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$z], ["__scopeId", "data-v-9112bed9"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  const _imports_0$4 = "/static/images/home/del.png";
  function modelList(query) {
    return request({
      url: "/model/list",
      method: "get",
      params: query
    });
  }
  function modelAdd(data) {
    return request({
      url: "/model/add",
      method: "post",
      data
    });
  }
  function modelDel(modelId) {
    return request({
      url: `/model/remove/${modelId}`,
      method: "delete"
    });
  }
  const _sfc_main$T = {
    __name: "longpressOpen",
    emits: ["update", "close"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const isShow = vue.ref(false);
      const topValue = vue.ref(0);
      const modelData = vue.ref({});
      const emit = __emit;
      const openDialog = (dom, row) => {
        isShow.value = true;
        topValue.value = dom.bottom + 10 + "px";
        modelData.value = row;
      };
      const cancelHandler = () => {
        isShow.value = false;
      };
      const closeHandler = () => {
        cancelHandler();
        emit("close");
      };
      const deleteHandler = () => {
        modelDel(modelData.value.modelId).then(() => {
          cancelHandler();
          emit("update");
        });
      };
      const stickyHandler = () => {
        const data = {
          modelId: modelData.value.modelId,
          isPinned: !modelData.value.isPinned
        };
        updatePinned(data).then(() => {
          cancelHandler();
          emit("update");
        });
      };
      __expose({
        openDialog
      });
      return (_ctx, _cache) => {
        const _component_u_divider = resolveEasycom(vue.resolveDynamicComponent("u-divider"), __easycom_0$3);
        const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_1$7);
        return vue.openBlock(), vue.createBlock(_component_u_overlay, {
          show: isShow.value,
          opacity: 0.3,
          onClick: closeHandler
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "longpress",
                style: vue.normalizeStyle({ top: topValue.value })
              },
              [
                vue.createElementVNode("view", {
                  class: "longpress__item",
                  onClick: stickyHandler
                }, [
                  vue.createElementVNode(
                    "view",
                    { class: "longpress__item__text" },
                    vue.toDisplayString(modelData.value.isPinned ? "取消置顶" : "置顶"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "longpress__item__icon" }, [
                    vue.createElementVNode("image", {
                      src: modelData.value.isPinned ? "/static/images/home/sticky-none.png" : "/static/images/home/sticky.png",
                      class: "image",
                      mode: ""
                    }, null, 8, ["src"])
                  ])
                ]),
                vue.createVNode(_component_u_divider),
                vue.createElementVNode("view", {
                  class: "longpress__item",
                  onClick: deleteHandler
                }, [
                  vue.createElementVNode("view", { class: "longpress__item__text delete" }, "从对话列表删除"),
                  vue.createElementVNode("view", { class: "longpress__item__icon" }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: _imports_0$4,
                      mode: ""
                    })
                  ])
                ])
              ],
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"]);
      };
    }
  };
  const longpressOpen = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-7e0ec6b1"], ["__file", "F:/uniapp/vegetable-bag/pages/index/components/longpressOpen.vue"]]);
  const _sfc_main$S = {
    __name: "index",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const dataList = vue.ref([]);
      const isLongPress = vue.ref(false);
      const longpressOpenRef = vue.ref();
      const longpressActive = vue.ref();
      const getList = () => {
        addedList().then((res) => {
          formatAppLog("log", "at pages/index/index.vue:47", "res", res);
          if (res.data.length > 0) {
            res.data.forEach((item) => {
              item.modelImage = config.image_url + item.modelImage;
            });
          }
          dataList.value = res.data;
        });
      };
      const longpressHandler = (e2, item) => {
        longpressActive.value = item.modelId;
        vue.nextTick(() => {
          const query = uni.createSelectorQuery().in();
          query.select(".longActive").boundingClientRect();
          query.exec((res) => {
            formatAppLog("log", "at pages/index/index.vue:63", "res->", res);
            longpressOpenRef.value.openDialog(res[0], item);
          });
        });
        isLongPress.value = true;
        setTimeout(() => {
          isLongPress.value = false;
        }, 300);
      };
      const dialogueClick = (item) => {
        if (isLongPress.value) {
          isLongPress.value = false;
          return;
        }
        uni.navigateTo({
          url: "/pages/index/components/chat?modelId=" + item.modelId
        });
      };
      const longpressUpdateHandler = () => {
        getList();
      };
      const longpressCloseHandler = () => {
        uni.showTabBar();
        longpressActive.value = +/* @__PURE__ */ new Date();
      };
      onShow(() => {
        tabbarStore.setCurrent(0);
        getList();
      });
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_tabbar = resolveEasycom(vue.resolveDynamicComponent("tabbar"), tabbar);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_u_navbar, {
              title: "对话",
              placeholder: true,
              safeAreaInsetTop: true,
              bgColor: "#fff",
              "auto-back": false
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "" })
              ]),
              right: vue.withCtx(() => []),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "index-page" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(dataList.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["dialogue", item.isPinned ? "active" : "", longpressActive.value == item.modelId ? "longActive" : ""]),
                    key: item.modelId,
                    onClick: vue.withModifiers(($event) => dialogueClick(item), ["stop"])
                  }, [
                    vue.createElementVNode("view", {
                      class: "dialogue__wrap",
                      onLongpress: vue.withModifiers((e2) => longpressHandler(e2, item), ["stop"])
                    }, [
                      vue.createElementVNode("view", { class: "dialogue__wrap__left" }, [
                        vue.createElementVNode("image", {
                          class: "image",
                          src: item.modelImage,
                          mode: ""
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode("view", { class: "dialogue__wrap__right" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "dialogue__wrap__right__title" },
                          vue.toDisplayString(item.modelName),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "dialogue__wrap__right__content q_text_overflow_1" },
                          vue.toDisplayString(item.introduce),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 40, ["onLongpress"])
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createVNode(
              longpressOpen,
              {
                ref_key: "longpressOpenRef",
                ref: longpressOpenRef,
                onUpdate: longpressUpdateHandler,
                onClose: longpressCloseHandler
              },
              null,
              512
              /* NEED_PATCH */
            ),
            vue.createVNode(_component_tabbar)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/uniapp/vegetable-bag/pages/index/index.vue"]]);
  const props$g = defineMixin({
    props: {
      // 滑块的移动过渡时间，单位ms
      duration: {
        type: Number,
        default: () => defProps.tabs.duration
      },
      // tabs标签数组
      list: {
        type: Array,
        default: () => defProps.tabs.list
      },
      // 滑块颜色
      lineColor: {
        type: String,
        default: () => defProps.tabs.lineColor
      },
      // 菜单选择中时的样式
      activeStyle: {
        type: [String, Object],
        default: () => defProps.tabs.activeStyle
      },
      // 菜单非选中时的样式
      inactiveStyle: {
        type: [String, Object],
        default: () => defProps.tabs.inactiveStyle
      },
      // 滑块长度
      lineWidth: {
        type: [String, Number],
        default: () => defProps.tabs.lineWidth
      },
      // 滑块高度
      lineHeight: {
        type: [String, Number],
        default: () => defProps.tabs.lineHeight
      },
      // 滑块背景显示大小，当滑块背景设置为图片时使用
      lineBgSize: {
        type: String,
        default: () => defProps.tabs.lineBgSize
      },
      // 菜单item的样式
      itemStyle: {
        type: [String, Object],
        default: () => defProps.tabs.itemStyle
      },
      // 菜单是否可滚动
      scrollable: {
        type: Boolean,
        default: () => defProps.tabs.scrollable
      },
      // 当前选中标签的索引
      current: {
        type: [Number, String],
        default: () => defProps.tabs.current
      },
      // 默认读取的键名
      keyName: {
        type: String,
        default: () => defProps.tabs.keyName
      }
    }
  });
  const _sfc_main$R = {
    name: "u-tabs",
    mixins: [mpMixin, mixin, props$g],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            if (typeof newValue == "string") {
              this.innerCurrent = parseInt(newValue);
            } else {
              this.innerCurrent = newValue;
            }
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      // list变化时，重新渲染list各项信息
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index) => {
          const style = {};
          const customeStyle = index == this.innerCurrent ? addStyle(this.activeStyle) : addStyle(this.inactiveStyle);
          if (this.list[index].disabled) {
            style.color = "#c8c9cc";
          }
          return deepMerge$1(customeStyle, style);
        };
      },
      propsBadge() {
        return defProps.badge;
      }
    },
    async mounted() {
      this.init();
    },
    emits: ["click", "longPress", "change", "update:current"],
    methods: {
      addStyle,
      addUnit,
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        const lineWidth = getPx(this.lineWidth);
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 10);
        }
      },
      // nvue下设置滑块的位置
      animation(x2, duration = 0) {
      },
      // 点击某一个标签
      clickHandler(item, index) {
        this.$emit("click", {
          ...item,
          index
        }, index);
        if (item.disabled)
          return;
        this.innerCurrent = index;
        this.resize();
        this.$emit("update:current", index);
        this.$emit("change", {
          ...item,
          index
        }, index);
      },
      // 长按事件
      longPressHandler(item, index) {
        this.$emit("longPress", {
          ...item,
          index
        });
      },
      init() {
        sleep$1().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        if (this.innerCurrent < 0) {
          this.innerCurrent = 0;
        }
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      // 获取所有标签的尺寸
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          if (tabsRect.left > tabsRect.width) {
            tabsRect.right = tabsRect.right - Math.floor(tabsRect.left / tabsRect.width) * tabsRect.width;
            tabsRect.left = tabsRect.left % tabsRect.width;
          }
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item, index) => {
            this.scrollViewWidth += item.width;
            this.list[index].rect = item;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      // 获取导航菜单的尺寸
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("u-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      // 获取所有标签的尺寸
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item, index) => this.queryRect(
            `u-tabs__wrapper__nav__item-${index}`,
            true
          ));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      // 获取各个标签的尺寸
      queryRect(el, item) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-tabs", [_ctx.customClass]])
      },
      [
        vue.createElementVNode("view", { class: "u-tabs__wrapper" }, [
          vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
          vue.createElementVNode("view", { class: "u-tabs__wrapper__scroll-view-wrapper" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-x": _ctx.scrollable,
              "scroll-left": $data.scrollLeft,
              "scroll-with-animation": "",
              class: "u-tabs__wrapper__scroll-view",
              "show-scrollbar": false,
              ref: "u-tabs__wrapper__scroll-view"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "u-tabs__wrapper__nav",
                  ref: "u-tabs__wrapper__nav"
                },
                [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(_ctx.list, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["u-tabs__wrapper__nav__item", [`u-tabs__wrapper__nav__item-${index}`, item.disabled && "u-tabs__wrapper__nav__item--disabled"]]),
                        key: index,
                        onClick: ($event) => $options.clickHandler(item, index),
                        onLongpress: ($event) => $options.longPressHandler(item, index),
                        ref_for: true,
                        ref: `u-tabs__wrapper__nav__item-${index}`,
                        style: vue.normalizeStyle([$options.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "" : 1 }])
                      }, [
                        _ctx.$slots.content ? vue.renderSlot(_ctx.$slots, "content", {
                          key: 0,
                          item,
                          keyName: _ctx.keyName,
                          index
                        }, void 0, true) : !_ctx.$slots.content && (_ctx.$slots.default || _ctx.$slots.$default) ? vue.renderSlot(_ctx.$slots, "default", {
                          key: 1,
                          item,
                          keyName: _ctx.keyName,
                          index
                        }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                          "text",
                          {
                            key: 2,
                            class: vue.normalizeClass([[item.disabled && "u-tabs__wrapper__nav__item__text--disabled"], "u-tabs__wrapper__nav__item__text"]),
                            style: vue.normalizeStyle([$options.textStyle(index)])
                          },
                          vue.toDisplayString(item[_ctx.keyName]),
                          7
                          /* TEXT, CLASS, STYLE */
                        )),
                        vue.createVNode(_component_u_badge, {
                          show: !!(item.badge && (item.badge.show || item.badge.isDot || item.badge.value)),
                          isDot: item.badge && item.badge.isDot || $options.propsBadge.isDot,
                          value: item.badge && item.badge.value || $options.propsBadge.value,
                          max: item.badge && item.badge.max || $options.propsBadge.max,
                          type: item.badge && item.badge.type || $options.propsBadge.type,
                          showZero: item.badge && item.badge.showZero || $options.propsBadge.showZero,
                          bgColor: item.badge && item.badge.bgColor || $options.propsBadge.bgColor,
                          color: item.badge && item.badge.color || $options.propsBadge.color,
                          shape: item.badge && item.badge.shape || $options.propsBadge.shape,
                          numberType: item.badge && item.badge.numberType || $options.propsBadge.numberType,
                          inverted: item.badge && item.badge.inverted || $options.propsBadge.inverted,
                          customStyle: "margin-left: 4px;"
                        }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                      ], 46, ["onClick", "onLongpress"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "u-tabs__wrapper__nav__line",
                      ref: "u-tabs__wrapper__nav__line",
                      style: vue.normalizeStyle([{
                        width: $options.addUnit(_ctx.lineWidth),
                        transform: `translate(${$data.lineOffsetLeft}px)`,
                        transitionDuration: `${$data.firstTime ? 0 : _ctx.duration}ms`,
                        height: $options.addUnit(_ctx.lineHeight),
                        background: _ctx.lineColor,
                        backgroundSize: _ctx.lineBgSize
                      }])
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ],
                512
                /* NEED_PATCH */
              )
            ], 8, ["scroll-x", "scroll-left"])
          ]),
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$y], ["__scopeId", "data-v-02b0c54f"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-tabs/u-tabs.vue"]]);
  const _imports_0$3 = "/static/images/mine/setting.png";
  const _imports_1$5 = "/static/images/chat.png";
  function mineModelList() {
    return request({
      url: "/model/modelList",
      method: "get"
    });
  }
  function login(data) {
    return request({
      url: "/login",
      method: "post",
      data
    });
  }
  function logout(data) {
    return request({
      url: "/logout",
      method: "post",
      data
    });
  }
  function userInfo(data) {
    return request({
      url: "/userInfo",
      method: "post",
      data
    });
  }
  const useUserStore = defineStore("user", {
    state: () => ({
      token: getToken(),
      userInfo: {}
    }),
    actions: {
      logOn(data) {
        return new Promise((resolve, reject) => {
          login(data).then((res) => {
            this.loginReset(res);
            formatAppLog("log", "at store/modules/user.js:26", "res", res);
            resolve(res);
          }).catch((error2) => {
            formatAppLog("log", "at store/modules/user.js:29", "error?", error2);
            reject(error2);
          });
        });
      },
      getInfo() {
        return new Promise((resolve, reject) => {
          userInfo().then((res) => {
            formatAppLog("log", "at store/modules/user.js:37", "res", res);
            res.data.userAvatar = config.base_url + res.data.userAvatar;
            this.userInfo = res.data;
            resolve();
          }).catch((err) => {
            reject(err);
          });
        });
      },
      logOut() {
        return new Promise(async (resolve, reject) => {
          try {
            const res = await logout();
            formatAppLog("log", "at store/modules/user.js:50", "res", res);
            await removeSyncToken();
            this.token = "";
            this.userInfo = {};
            resolve();
          } catch (error2) {
            throw error2;
          }
        });
      },
      loginReset(res) {
        formatAppLog("log", "at store/modules/user.js:61", "res", res);
        setToken(res.data);
        this.token = res.data;
      }
    }
  });
  const _sfc_main$Q = {
    __name: "mine",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const userStore = useUserStore();
      const userInfo2 = vue.computed(() => userStore.userInfo);
      const current = vue.ref(0);
      const modelList2 = vue.ref([]);
      const collectList = vue.ref([]);
      const tabsList = vue.ref([
        { name: "智能体", id: 1 },
        { name: "收藏", id: 2 }
      ]);
      onShow(() => {
        getModelList();
        tabbarStore.setCurrent(4);
      });
      const isEmpty = vue.computed(() => {
        return current.value === 0 && modelList2.value.length === 0 || current.value === 1 && collectList.value.length === 0;
      });
      const emptyIcon = vue.computed(() => {
        return current.value === 0 ? "/static/images/mine/emo.png" : "/static/images/mine/star.png";
      });
      const emptyText = vue.computed(() => {
        return current.value === 0 ? "点击创建第一个AI智能体" : "去收藏第一条消息";
      });
      const getModelList = () => {
        mineModelList().then((res) => {
          formatAppLog("log", "at pages/mine/mine.vue:95", "res", res);
          if (res.data.length > 0) {
            res.data.forEach((i2) => {
              i2.modelImage = config.image_url + i2.modelImage;
            });
          }
          modelList2.value = res.data;
        });
      };
      const handleClick = () => {
        if (current.value === 0) {
          goCreateModelHandler();
        }
      };
      const settingsHandler = () => {
        uni.navigateTo({
          url: "/pages/mine/settings/settings"
        });
      };
      const tabsClick = (index) => {
        current.value = index;
        if (index == 0) {
          getModelList();
        }
      };
      const goCreateModelHandler = () => {
        uni.switchTab({
          url: "/pages/establish/establish"
        });
      };
      return (_ctx, _cache) => {
        const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_0$2);
        const _component_u_divider = resolveEasycom(vue.resolveDynamicComponent("u-divider"), __easycom_0$3);
        const _component_tabbar = resolveEasycom(vue.resolveDynamicComponent("tabbar"), tabbar);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "mine" }, [
              vue.createElementVNode("view", { class: "status_bar" }),
              vue.createElementVNode("view", {
                class: "mine__setting",
                onClick: settingsHandler
              }, [
                vue.createElementVNode("view", { class: "mine__setting__icon" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_0$3,
                    mode: ""
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "mine__pic" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: userInfo2.value.userAvatar,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "mine__title" }, "Amazing"),
              vue.createElementVNode("view", { class: "mine__edit" }, "编辑个人资料"),
              vue.createElementVNode("view", { class: "mine__tabs" }, [
                vue.createVNode(_component_u_tabs, {
                  list: tabsList.value,
                  scrollable: false,
                  lineColor: "#000",
                  lineWidth: "150"
                }, {
                  content: vue.withCtx(({ item, index }) => [
                    vue.createElementVNode("view", {
                      class: "mine__tabs__item",
                      onClick: ($event) => tabsClick(index)
                    }, [
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(["mine__tabs__item__title", current.value == index ? "active" : ""])
                        },
                        vue.toDisplayString(item.name),
                        3
                        /* TEXT, CLASS */
                      ),
                      item.id == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "mine__tabs__item__img"
                      }, [
                        vue.createElementVNode("image", {
                          class: "image",
                          src: current.value == 1 ? "/static/images/mine/suo-y.png" : "/static/images/mine/suo-n.png",
                          mode: ""
                        }, null, 8, ["src"])
                      ])) : vue.createCommentVNode("v-if", true)
                    ], 8, ["onClick"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["list"])
              ]),
              vue.createVNode(_component_u_divider, { style: { "padding": "0 !important", "margin": "0 !important", "position": "relative", "top": "-5rpx" } }),
              vue.createElementVNode("view", { class: "mine__content" }, [
                isEmpty.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "mine__content__empty",
                  onClick: handleClick
                }, [
                  vue.createElementVNode("view", { class: "mine__content__empty__icon" }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: emptyIcon.value,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "mine__content__empty__text" },
                    vue.toDisplayString(emptyText.value),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                current.value == 0 && modelList2.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "mine__content__model"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(modelList2.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "mine__content__model--wrap",
                        key: item.modelId
                      }, [
                        vue.createElementVNode("view", { class: "mine__content__model--wrap__left" }, [
                          vue.createElementVNode("image", {
                            class: "image",
                            src: item.modelImage,
                            mode: ""
                          }, null, 8, ["src"])
                        ]),
                        vue.createElementVNode("view", { class: "mine__content__model--wrap__right" }, [
                          vue.createElementVNode(
                            "view",
                            { class: "mine__content__model--wrap__right__title" },
                            vue.toDisplayString(item.modelName),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "mine__content__model--wrap__right__content q_text_overflow_2" },
                            vue.toDisplayString(item.introduce),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "mine__content__model--wrap__right__qa" }, [
                            vue.createElementVNode("view", { class: "mine__content__model--wrap__right__qa__img" }, [
                              vue.createElementVNode("image", {
                                class: "image",
                                src: _imports_1$5,
                                mode: ""
                              })
                            ]),
                            vue.createElementVNode(
                              "view",
                              { class: "mine__content__model--wrap__right__qa__num" },
                              vue.toDisplayString(item.modelQaCount),
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : vue.createCommentVNode("v-if", true),
                current.value == 1 && collectList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "mine__content__collect"
                })) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createVNode(_component_tabbar)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "F:/uniapp/vegetable-bag/pages/mine/mine.vue"]]);
  const props$f = defineMixin({
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: () => defProps.cell.title
      },
      // 标题下方的描述信息
      label: {
        type: [String, Number],
        default: () => defProps.cell.label
      },
      // 右侧的内容
      value: {
        type: [String, Number],
        default: () => defProps.cell.value
      },
      // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
      icon: {
        type: String,
        default: () => defProps.cell.icon
      },
      // 是否禁用cell
      disabled: {
        type: Boolean,
        default: () => defProps.cell.disabled
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => defProps.cell.border
      },
      // 内容是否垂直居中(主要是针对右侧的value部分)
      center: {
        type: Boolean,
        default: () => defProps.cell.center
      },
      // 点击后跳转的URL地址
      url: {
        type: String,
        default: () => defProps.cell.url
      },
      // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
      linkType: {
        type: String,
        default: () => defProps.cell.linkType
      },
      // 是否开启点击反馈(表现为点击时加上灰色背景)
      clickable: {
        type: Boolean,
        default: () => defProps.cell.clickable
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: () => defProps.cell.isLink
      },
      // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
      required: {
        type: Boolean,
        default: () => defProps.cell.required
      },
      // 右侧的图标箭头
      rightIcon: {
        type: String,
        default: () => defProps.cell.rightIcon
      },
      // 右侧箭头的方向，可选值为：left，up，down
      arrowDirection: {
        type: String,
        default: () => defProps.cell.arrowDirection
      },
      // 左侧图标样式
      iconStyle: {
        type: [Object, String],
        default: () => {
          return defProps.cell.iconStyle;
        }
      },
      // 右侧箭头图标的样式
      rightIconStyle: {
        type: [Object, String],
        default: () => {
          return defProps.cell.rightIconStyle;
        }
      },
      // 标题的样式
      titleStyle: {
        type: [Object, String],
        default: () => {
          return defProps.cell.titleStyle;
        }
      },
      // 单位元的大小，可选值为large
      size: {
        type: String,
        default: () => defProps.cell.size
      },
      // 点击cell是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => defProps.cell.stop
      },
      // 标识符，cell被点击时返回
      name: {
        type: [Number, String],
        default: () => defProps.cell.name
      }
    }
  });
  const _sfc_main$P = {
    name: "u-cell",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$f],
    computed: {
      titleTextStyle() {
        return addStyle(this.titleStyle);
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      testEmpty: test.empty,
      // 点击cell
      clickHandler(e2) {
        if (this.disabled)
          return;
        this.$emit("click", {
          name: this.name
        });
        this.openPage();
        this.stop && this.preventEvent(e2);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-cell", [_ctx.customClass]]),
      style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
      "hover-class": !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
      "hover-stay-time": 250,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-cell__body", [_ctx.center && "u-cell--center", _ctx.size === "large" && "u-cell__body--large"]])
        },
        [
          vue.createElementVNode("view", { class: "u-cell__body__content" }, [
            _ctx.$slots.icon || _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-cell__left-icon-wrap"
            }, [
              _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 1,
                name: _ctx.icon,
                "custom-style": _ctx.iconStyle,
                size: _ctx.size === "large" ? 22 : 18
              }, null, 8, ["name", "custom-style", "size"]))
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "u-cell__title" }, [
              vue.createCommentVNode(" 将slot与默认内容用if/else分开主要是因为微信小程序不支持slot嵌套传递，这样才能解决collapse组件的slot不失效问题，label暂时未用到。 "),
              _ctx.$slots.title || !_ctx.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 1,
                  class: vue.normalizeClass(["u-cell__title-text", [_ctx.required && "u-cell--required", _ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__title-text--large"]]),
                  style: vue.normalizeStyle([$options.titleTextStyle])
                },
                vue.toDisplayString(_ctx.title),
                7
                /* TEXT, CLASS, STYLE */
              )),
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["u-cell__label", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__label--large"]])
                  },
                  vue.toDisplayString(_ctx.label),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ], true)
            ])
          ]),
          vue.renderSlot(_ctx.$slots, "value", {}, () => [
            !$options.testEmpty(_ctx.value) ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["u-cell__value", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__value--large"]])
              },
              vue.toDisplayString(_ctx.value),
              3
              /* TEXT, CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          _ctx.$slots["right-icon"] || _ctx.isLink ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              _ctx.rightIcon && !_ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.rightIcon,
                "custom-style": _ctx.rightIconStyle,
                color: _ctx.disabled ? "#c8c9cc" : "info",
                size: _ctx.size === "large" ? 18 : 16
              }, null, 8, ["name", "custom-style", "color", "size"])) : vue.renderSlot(_ctx.$slots, "right-icon", { key: 1 }, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true),
          _ctx.$slots["righticon"] ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              vue.renderSlot(_ctx.$slots, "righticon", {}, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$x], ["__scopeId", "data-v-3fd6feca"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-cell/u-cell.vue"]]);
  const props$e = defineMixin({
    props: {
      // 分组标题
      title: {
        type: String,
        default: () => defProps.cellGroup.title
      },
      // 是否显示外边框
      border: {
        type: Boolean,
        default: () => defProps.cellGroup.border
      }
    }
  });
  const _sfc_main$O = {
    name: "u-cell-group",
    mixins: [mpMixin, mixin, props$e],
    methods: {
      addStyle
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
        class: vue.normalizeClass([[_ctx.customClass], "u-cell-group"])
      },
      [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-cell-group__title"
        }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode(
              "text",
              { class: "u-cell-group__title__text" },
              vue.toDisplayString(_ctx.title),
              1
              /* TEXT */
            )
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-cell-group__wrapper" }, [
          _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$w], ["__scopeId", "data-v-014d39dc"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-cell-group/u-cell-group.vue"]]);
  const _sfc_main$N = {
    __name: "settings",
    setup(__props) {
      const userStore = useUserStore();
      const customStyle = {
        background: "#fff",
        borderRadius: "20rpx"
      };
      const logoutHandler = () => {
        showConfirm("确定退出登录").then((confirm) => {
          if (confirm) {
            userStore.logOut().then(() => {
              uni.reLaunch({
                url: "/pages/login"
              });
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
        const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_1$6);
        const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_2$4);
        return vue.openBlock(), vue.createBlock(_component_u_cell_group, {
          border: false,
          customStyle
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_cell, {
              icon: "setting-fill",
              title: "退出登录",
              border: false,
              onClick: logoutHandler
            }, {
              icon: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "icon" }, [
                  vue.createVNode(_component_u_icon, {
                    name: "arrow-rightward",
                    color: "#fff",
                    size: "12"
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesMineSettingsSettings = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-8f402690"], ["__file", "F:/uniapp/vegetable-bag/pages/mine/settings/settings.vue"]]);
  const themeColor = {
    dark: {
      background: "#ffffff",
      color: "#000000"
    },
    light: {
      background: "#000000",
      color: "#ffffff"
    }
  };
  const useThemeStore = defineStore("theme", {
    state: () => ({
      themeStatus: uni.getStorageSync(ThemeStatus) || "light"
    }),
    actions: {
      storageTheme(value) {
        this.themeStatus = value;
        uni.setStorageSync(ThemeStatus, value);
        this.changeNavgationBarColor();
      },
      changeNavgationBarColor() {
        const {
          themeStatus
        } = this;
        uni.setNavigationBarColor({
          frontColor: themeColor[themeStatus].color,
          backgroundColor: themeColor[themeStatus].background,
          animation: {
            duration: 0,
            timingFunc: "easeIn"
          }
        });
        const tabBarPages = [
          "pages/index/index",
          "pages/find/find",
          "pages/notice/notice",
          "pages/mine/mine"
        ];
        const currentPages = getCurrentPages();
        const currentPage = currentPages[currentPages.length - 1];
        if (tabBarPages.includes(currentPage.route)) {
          uni.setTabBarStyle({
            color: themeColor[themeStatus].color,
            selectedColor: themeColor[themeStatus].color,
            backgroundColor: themeColor[themeStatus].background,
            borderStyle: themeColor[themeStatus].color
          });
        }
      }
    }
  });
  const _sfc_main$M = {
    __name: "theme",
    props: {
      isWrap: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const props2 = __props;
      const themeStore = useThemeStore();
      const background = vue.computed(() => themeColor[themeStore.themeStatus].background);
      const textColor = vue.computed(() => themeColor[themeStore.themeStatus].color);
      const wrap = vue.computed(() => {
        return props2.isWrap ? { height: "100vh", overflow: "auto" } : {};
      });
      onShow(() => {
        themeStore.changeNavgationBarColor();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass([vue.unref(themeStore).themeStatus, "theme-container"]),
            style: vue.normalizeStyle({ background: background.value, color: textColor.value, wrap: wrap.value })
          },
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  };
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__file", "F:/uniapp/vegetable-bag/components/theme/theme.vue"]]);
  const _sfc_main$L = {
    __name: "background-setting",
    setup(__props) {
      const themeStore = useThemeStore();
      const onClick = (e2) => {
        themeStore.storageTheme(e2);
      };
      return (_ctx, _cache) => {
        const _component_theme = resolveEasycom(vue.resolveDynamicComponent("theme"), __easycom_0$1);
        return vue.openBlock(), vue.createBlock(_component_theme, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => onClick("dark"))
            }, "白"),
            vue.createElementVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => onClick("light"))
            }, "黑")
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesMineSettingsBackgroundSettingBackgroundSetting = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__file", "F:/uniapp/vegetable-bag/pages/mine/settings/background-setting/background-setting.vue"]]);
  const props$d = defineMixin({
    props: {
      // 是否显示组件
      show: {
        type: Boolean,
        default: () => defProps.loadingIcon.show
      },
      // 颜色
      color: {
        type: String,
        default: () => defProps.loadingIcon.color
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: () => defProps.loadingIcon.textColor
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: () => defProps.loadingIcon.vertical
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: () => defProps.loadingIcon.mode
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: () => defProps.loadingIcon.size
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: () => defProps.loadingIcon.textSize
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: () => defProps.loadingIcon.text
      },
      // 动画模式
      timingFunction: {
        type: String,
        default: () => defProps.loadingIcon.timingFunction
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: () => defProps.loadingIcon.duration
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: () => defProps.loadingIcon.inactiveColor
      }
    }
  });
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i2 + startR)},${Math.round(sG * i2 + startG)},${Math.round(sB * i2 + startB)})`);
      if (i2 === 0)
        hex = rgbToHex(startColor);
      if (i2 === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i2 = 0; i2 < aColor.length; i2++) {
        let hex = Number(aColor[i2]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i2 = 0; i2 < aNum.length; i2 += 1) {
          numHex += aNum[i2] + aNum[i2];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  const _sfc_main$K = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$d],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n2) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      addUnit,
      addStyle,
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages = getCurrentPages();
        const page2 = pages[pages.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)])
      },
      [
        !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: vue.normalizeStyle({
              color: _ctx.color,
              width: $options.addUnit(_ctx.size),
              height: $options.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList($data.array12, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "u-loading-icon__dot"
                });
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "u-loading-icon__text",
            style: vue.normalizeStyle({
              fontSize: $options.addUnit(_ctx.textSize),
              color: _ctx.textColor
            })
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$v], ["__scopeId", "data-v-2af81691"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  const props$c = defineMixin({
    props: {
      // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
      status: {
        type: String,
        default: () => defProps.loadmore.status
      },
      // 组件背景色
      bgColor: {
        type: String,
        default: () => defProps.loadmore.bgColor
      },
      // 是否显示加载中的图标
      icon: {
        type: Boolean,
        default: () => defProps.loadmore.icon
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: () => defProps.loadmore.fontSize
      },
      // 图标大小
      iconSize: {
        type: [String, Number],
        default: () => defProps.loadmore.iconSize
      },
      // 字体颜色
      color: {
        type: String,
        default: () => defProps.loadmore.color
      },
      // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
      loadingIcon: {
        type: String,
        default: () => defProps.loadmore.loadingIcon
      },
      // 加载前的提示语
      loadmoreText: {
        type: String,
        default: () => defProps.loadmore.loadmoreText
      },
      // 加载中提示语
      loadingText: {
        type: String,
        default: () => defProps.loadmore.loadingText
      },
      // 没有更多的提示语
      nomoreText: {
        type: String,
        default: () => defProps.loadmore.nomoreText
      },
      // 在“没有更多”状态下，是否显示粗点
      isDot: {
        type: Boolean,
        default: () => defProps.loadmore.isDot
      },
      // 加载中图标的颜色
      iconColor: {
        type: String,
        default: () => defProps.loadmore.iconColor
      },
      // 上边距
      marginTop: {
        type: [String, Number],
        default: () => defProps.loadmore.marginTop
      },
      // 下边距
      marginBottom: {
        type: [String, Number],
        default: () => defProps.loadmore.marginBottom
      },
      // 高度，单位px
      height: {
        type: [String, Number],
        default: () => defProps.loadmore.height
      },
      // 是否显示左边分割线
      line: {
        type: Boolean,
        default: () => defProps.loadmore.line
      },
      // 线条颜色
      lineColor: {
        type: String,
        default: () => defProps.loadmore.lineColor
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: () => defProps.loadmore.dashed
      }
    }
  });
  const _sfc_main$J = {
    name: "u-loadmore",
    mixins: [mpMixin, mixin, props$c],
    data() {
      return {
        // 粗点
        dotText: "●"
      };
    },
    computed: {
      // 加载的文字显示的样式
      loadTextStyle() {
        return {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          lineHeight: addUnit(this.fontSize),
          backgroundColor: this.bgColor
        };
      },
      // 显示的提示文字
      showText() {
        let text = "";
        if (this.status == "loadmore")
          text = this.loadmoreText;
        else if (this.status == "loading")
          text = this.loadingText;
        else if (this.status == "nomore" && this.isDot)
          text = this.dotText;
        else
          text = this.nomoreText;
        return text;
      }
    },
    emits: ["loadmore"],
    methods: {
      addStyle,
      addUnit,
      loadMore() {
        if (this.status == "loadmore")
          this.$emit("loadmore");
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-loadmore",
        style: vue.normalizeStyle([
          $options.addStyle(_ctx.customStyle),
          {
            backgroundColor: _ctx.bgColor,
            marginBottom: $options.addUnit(_ctx.marginBottom),
            marginTop: $options.addUnit(_ctx.marginTop),
            height: $options.addUnit(_ctx.height)
          }
        ])
      },
      [
        _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 0,
          length: "140rpx",
          color: _ctx.lineColor,
          hairline: false,
          dashed: _ctx.dashed
        }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 加载中和没有更多的状态才显示两边的横线 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([_ctx.status == "loadmore" || _ctx.status == "nomore" ? "u-more" : "", "u-loadmore__content"])
          },
          [
            _ctx.status === "loading" && _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-loadmore__content__icon-wrap"
            }, [
              vue.createVNode(_component_u_loading_icon, {
                color: _ctx.iconColor,
                size: _ctx.iconSize,
                mode: _ctx.loadingIcon
              }, null, 8, ["color", "size", "mode"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 "),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["u-line-1", [_ctx.status == "nomore" && _ctx.isDot == true ? "u-loadmore__content__dot-text" : "u-loadmore__content__text"]]),
                style: vue.normalizeStyle([$options.loadTextStyle]),
                onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
              },
              vue.toDisplayString($options.showText),
              7
              /* TEXT, CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        ),
        _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 1,
          length: "140rpx",
          color: _ctx.lineColor,
          hairline: false,
          dashed: _ctx.dashed
        }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$u], ["__scopeId", "data-v-4ccc1478"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-loadmore/u-loadmore.vue"]]);
  const _imports_0$2 = "/static/icon.png";
  const _imports_2$2 = "/static/images/add.png";
  const _imports_2$1 = "/static/images/yes.png";
  const _sfc_main$I = {
    __name: "find",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const userStore = useUserStore();
      const { userInfo: userInfo2 } = storeToRefs(userStore);
      const queryParams2 = vue.ref({
        pageSize: 10,
        pageNum: 1,
        modelName: ""
      });
      const dataList = vue.ref([]);
      const total = vue.ref(0);
      const status = vue.ref("loadmore");
      const getList = (isLoading = true) => {
        modelList(queryParams2.value).then((res) => {
          formatAppLog("log", "at pages/find/find.vue:61", "res", res);
          if (res.data.list.length > 0) {
            res.data.list.forEach((item) => {
              item.modelImage = config.image_url + item.modelImage;
            });
          }
          if (isLoading) {
            dataList.value = res.data.list;
          } else {
            dataList.value = [...dataList.value, ...res.data.list];
          }
          total.value = res.data.total;
          if (total.value <= 10)
            status.value = "nomore";
          else
            status.value = "loadmore";
          uni.stopPullDownRefresh();
        });
      };
      const searchHandler = () => {
        queryParams2.value.pageNum = 1;
        getList();
      };
      const rightClickHandler = async (item, index) => {
        dataList.value[index].isAddedByUser = !dataList.value[index].isAddedByUser;
        const data = {
          modelId: item.modelId,
          userId: userInfo2.value.userId
        };
        formatAppLog("log", "at pages/find/find.vue:90", "item", item.isAddedByUser);
        try {
          if (item.isAddedByUser)
            await modelAdd(data);
          else
            await modelDel(item.modelId);
        } catch (e2) {
        }
      };
      onShow(() => {
        getList();
        tabbarStore.setCurrent(1);
      });
      onReachBottom(() => {
        queryParams2.value.pageNum++;
        status.value = "loading";
        formatAppLog("log", "at pages/find/find.vue:103", "--->", dataList.value.length);
        formatAppLog("log", "at pages/find/find.vue:104", "--->", total.value);
        if (total.value <= dataList.value.length) {
          status.value = "nomore";
          return;
        } else {
          getList(false);
        }
      });
      onPullDownRefresh(() => {
        searchHandler();
      });
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_1$5);
        const _component_tabbar = resolveEasycom(vue.resolveDynamicComponent("tabbar"), tabbar);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_u_navbar, {
              title: "发现",
              placeholder: true,
              safeAreaInsetTop: true,
              bgColor: "#fff",
              "auto-back": false
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "" })
              ]),
              right: vue.withCtx(() => []),
              _: 1
              /* STABLE */
            }),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(dataList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "find-wrap",
                  key: item.modelId
                }, [
                  vue.createElementVNode("view", { class: "find-wrap__left" }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: item.modelImage,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "find-wrap__center" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "find-wrap__center__title" },
                      vue.toDisplayString(item.modelName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "find-wrap__center__content q_text_overflow_2" },
                      vue.toDisplayString(item.introduce),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "find-wrap__center__bottom" }, [
                      vue.createElementVNode("view", { class: "find-wrap__center__bottom__icon" }, [
                        vue.createElementVNode("image", {
                          class: "image",
                          src: _imports_0$2,
                          mode: ""
                        })
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "find-wrap__center__bottom__num" },
                        vue.toDisplayString(item.modelQaCount),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "find-wrap__center__bottom__dot" }, " · "),
                      vue.createElementVNode(
                        "view",
                        { class: "find-wrap__center__bottom__auth" },
                        "@" + vue.toDisplayString(item.creatorName ?? "user"),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "find-wrap__right",
                    onClick: ($event) => rightClickHandler(item, index)
                  }, [
                    !item.isAddedByUser ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      class: "image",
                      src: _imports_2$2,
                      mode: ""
                    })) : (vue.openBlock(), vue.createElementBlock("image", {
                      key: 1,
                      class: "image",
                      src: _imports_2$1,
                      mode: ""
                    }))
                  ], 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createVNode(_component_u_loadmore, {
              status: status.value,
              "loading-text": "加载中...",
              "loadmore-text": "上拉加载更多",
              "nomore-text": "已经到底了~"
            }, null, 8, ["status"]),
            vue.createVNode(_component_tabbar)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-1c765c2e"], ["__file", "F:/uniapp/vegetable-bag/pages/find/find.vue"]]);
  const props$b = defineMixin({
    props: {
      // 绑定的值
      modelValue: {
        type: [String, Number],
        default: () => defProps.input.value
      },
      // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
      // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
      // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
      // text-文本输入键盘
      type: {
        type: String,
        default: () => defProps.input.type
      },
      // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
      // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
      fixed: {
        type: Boolean,
        default: () => defProps.input.fixed
      },
      // 是否禁用输入框
      disabled: {
        type: Boolean,
        default: () => defProps.input.disabled
      },
      // 禁用状态时的背景色
      disabledColor: {
        type: String,
        default: () => defProps.input.disabledColor
      },
      // 是否显示清除控件
      clearable: {
        type: Boolean,
        default: () => defProps.input.clearable
      },
      // 是否密码类型
      password: {
        type: Boolean,
        default: () => defProps.input.password
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: () => defProps.input.maxlength
      },
      // 	输入框为空时的占位符
      placeholder: {
        type: String,
        default: () => defProps.input.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: () => defProps.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: () => defProps.input.placeholderStyle
      },
      // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
      showWordLimit: {
        type: Boolean,
        default: () => defProps.input.showWordLimit
      },
      // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
      // https://uniapp.dcloud.io/component/input
      // https://uniapp.dcloud.io/component/textarea
      confirmType: {
        type: String,
        default: () => defProps.input.confirmType
      },
      // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
      confirmHold: {
        type: Boolean,
        default: () => defProps.input.confirmHold
      },
      // focus时，点击页面的时候不收起键盘，微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: () => defProps.input.holdKeyboard
      },
      // 自动获取焦点
      // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
      focus: {
        type: Boolean,
        default: () => defProps.input.focus
      },
      // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
      autoBlur: {
        type: Boolean,
        default: () => defProps.input.autoBlur
      },
      // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
      disableDefaultPadding: {
        type: Boolean,
        default: () => defProps.input.disableDefaultPadding
      },
      // 指定focus时光标的位置
      cursor: {
        type: [String, Number],
        default: () => defProps.input.cursor
      },
      // 输入框聚焦时底部与键盘的距离
      cursorSpacing: {
        type: [String, Number],
        default: () => defProps.input.cursorSpacing
      },
      // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
      selectionStart: {
        type: [String, Number],
        default: () => defProps.input.selectionStart
      },
      // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
      selectionEnd: {
        type: [String, Number],
        default: () => defProps.input.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: () => defProps.input.adjustPosition
      },
      // 输入框内容对齐方式，可选值为：left|center|right
      inputAlign: {
        type: String,
        default: () => defProps.input.inputAlign
      },
      // 输入框字体的大小
      fontSize: {
        type: [String, Number],
        default: () => defProps.input.fontSize
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: () => defProps.input.color
      },
      // 输入框前置图标
      prefixIcon: {
        type: String,
        default: () => defProps.input.prefixIcon
      },
      // 前置图标样式，对象或字符串
      prefixIconStyle: {
        type: [String, Object],
        default: () => defProps.input.prefixIconStyle
      },
      // 输入框后置图标
      suffixIcon: {
        type: String,
        default: () => defProps.input.suffixIcon
      },
      // 后置图标样式，对象或字符串
      suffixIconStyle: {
        type: [String, Object],
        default: () => defProps.input.suffixIconStyle
      },
      // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
      border: {
        type: String,
        default: () => defProps.input.border
      },
      // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
      readonly: {
        type: Boolean,
        default: () => defProps.input.readonly
      },
      // 输入框形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => defProps.input.shape
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: () => defProps.input.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  });
  const _sfc_main$H = {
    name: "u-input",
    mixins: [mpMixin, mixin, props$b],
    data() {
      return {
        // 清除操作
        clearInput: false,
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value) => value
      };
    },
    created() {
      if (this.formatter) {
        this.innerFormatter = this.formatter;
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          if (this.changeFromInner || this.innerValue === newVal) {
            this.changeFromInner = false;
            return;
          }
          this.innerValue = newVal;
          if (this.firstChange === false && this.changeFromInner === false) {
            this.valueChange(this.innerValue, true);
          } else {
            if (!this.firstChange)
              formValidate(this, "change");
          }
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 是否显示清除控件
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      // 组件的类名
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      // 组件的样式
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return deepMerge$1(style, addStyle(this.customStyle));
      },
      // 输入框的样式
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e2) {
        this.innerFormatter = e2;
      },
      // 当键盘输入时，触发input事件
      onInput(e2) {
        let { value = "" } = e2.detail || {};
        this.innerValue = value;
        this.$nextTick(() => {
          let formatValue = this.innerFormatter(value);
          this.innerValue = formatValue;
          this.valueChange(formatValue);
        });
      },
      // 输入框失去焦点时触发
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        sleep$1(150).then(() => {
          this.focused = false;
        });
        formValidate(this, "blur");
      },
      // 输入框聚焦时触发
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      doFocus() {
        this.$refs["input-native"].focus();
      },
      doBlur() {
        this.$refs["input-native"].blur();
      },
      // 点击完成按钮时触发
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      // 键盘高度发生变化的时候触发此事件
      // 兼容性：微信小程序2.7.0+、App 3.1.0+
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      // 内容发生变化，进行处理
      valueChange(value, isOut = false) {
        if (this.clearInput) {
          this.innerValue = "";
          this.clearInput = false;
        }
        this.$nextTick(() => {
          if (!isOut || this.clearInput) {
            this.changeFromInner = true;
            this.$emit("change", value);
            this.$emit("update:modelValue", value);
          }
          formValidate(this, "change");
        });
      },
      // 点击清除控件
      onClear() {
        this.clearInput = true;
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange("");
          this.$emit("clear");
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡
       * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
       * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
       */
      clickHandler() {
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-input", $options.inputClass]),
        style: vue.normalizeStyle([$options.wrapperStyle])
      },
      [
        vue.createElementVNode("view", { class: "u-input__content" }, [
          _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-input__content__prefix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.prefixIcon,
                size: "18",
                customStyle: _ctx.prefixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-input__content__field-wrapper",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
          }, [
            vue.createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\n				 "),
            vue.createElementVNode("input", {
              ref: "input-native",
              class: "u-input__content__field-wrapper__field",
              style: vue.normalizeStyle([$options.inputStyle]),
              type: _ctx.type,
              focus: _ctx.focus,
              cursor: _ctx.cursor,
              value: $data.innerValue,
              "auto-blur": _ctx.autoBlur,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              placeholder: _ctx.placeholder,
              "placeholder-style": _ctx.placeholderStyle,
              "placeholder-class": _ctx.placeholderClass,
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              "hold-keyboard": _ctx.holdKeyboard,
              "cursor-spacing": _ctx.cursorSpacing,
              "adjust-position": _ctx.adjustPosition,
              "selection-end": _ctx.selectionEnd,
              "selection-start": _ctx.selectionStart,
              password: _ctx.password || _ctx.type === "password" || false,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
          ]),
          $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-input__content__clear",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
          }, [
            vue.createVNode(_component_u_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-input__content__subfix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.suffixIcon,
                size: "18",
                customStyle: _ctx.suffixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$t], ["__scopeId", "data-v-df79975b"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-input/u-input.vue"]]);
  const props$a = defineMixin({
    props: {
      // 输入框的内容
      value: {
        type: [String, Number],
        default: () => defProps.textarea.value
      },
      // 输入框的内容
      modelValue: {
        type: [String, Number],
        default: () => defProps.textarea.value
      },
      // 输入框为空时占位符
      placeholder: {
        type: [String, Number],
        default: () => defProps.textarea.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: () => defProps.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: () => defProps.input.placeholderStyle
      },
      // 输入框高度
      height: {
        type: [String, Number],
        default: () => defProps.textarea.height
      },
      // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
      confirmType: {
        type: String,
        default: () => defProps.textarea.confirmType
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: () => defProps.textarea.disabled
      },
      // 是否显示统计字数
      count: {
        type: Boolean,
        default: () => defProps.textarea.count
      },
      // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
      focus: {
        type: Boolean,
        default: () => defProps.textarea.focus
      },
      // 是否自动增加高度
      autoHeight: {
        type: Boolean,
        default: () => defProps.textarea.autoHeight
      },
      // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
      fixed: {
        type: Boolean,
        default: () => defProps.textarea.fixed
      },
      // 指定光标与键盘的距离
      cursorSpacing: {
        type: Number,
        default: () => defProps.textarea.cursorSpacing
      },
      // 指定focus时的光标位置
      cursor: {
        type: [String, Number],
        default: () => defProps.textarea.cursor
      },
      // 是否显示键盘上方带有”完成“按钮那一栏，
      showConfirmBar: {
        type: Boolean,
        default: () => defProps.textarea.showConfirmBar
      },
      // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
      selectionStart: {
        type: Number,
        default: () => defProps.textarea.selectionStart
      },
      // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
      selectionEnd: {
        type: Number,
        default: () => defProps.textarea.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: () => defProps.textarea.adjustPosition
      },
      // 是否去掉 iOS 下的默认内边距，只微信小程序有效
      disableDefaultPadding: {
        type: Boolean,
        default: () => defProps.textarea.disableDefaultPadding
      },
      // focus时，点击页面的时候不收起键盘，只微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: () => defProps.textarea.holdKeyboard
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: () => defProps.textarea.maxlength
      },
      // 边框类型，surround-四周边框，bottom-底部边框
      border: {
        type: String,
        default: () => defProps.textarea.border
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: () => defProps.textarea.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  });
  const _sfc_main$G = {
    name: "u-textarea",
    mixins: [mpMixin, mixin, props$a],
    data() {
      return {
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value) => value
      };
    },
    created() {
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 组件的类名
      textareaClass() {
        let classes = [], { border, disabled } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-textarea--no-radius"
        ]));
        disabled && classes.push("u-textarea--disabled");
        return classes.join(" ");
      },
      // 组件的样式
      textareaStyle() {
        const style = {};
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    },
    emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
    methods: {
      addStyle,
      addUnit,
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e2) {
        this.innerFormatter = e2;
      },
      onFocus(e2) {
        this.$emit("focus", e2);
      },
      onBlur(e2) {
        this.$emit("blur", e2);
        formValidate(this, "blur");
      },
      onLinechange(e2) {
        this.$emit("linechange", e2);
      },
      onInput(e2) {
        let { value = "" } = e2.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      // 内容发生变化，进行处理
      valueChange() {
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.changeFromInner = true;
          this.$emit("change", value);
          formValidate(this, "change");
        });
      },
      onConfirm(e2) {
        this.$emit("confirm", e2);
      },
      onKeyboardheightchange(e2) {
        this.$emit("keyboardheightchange", e2);
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-textarea", $options.textareaClass]),
        style: vue.normalizeStyle([$options.textareaStyle])
      },
      [
        vue.createElementVNode("textarea", {
          class: "u-textarea__field",
          value: $data.innerValue,
          style: vue.normalizeStyle({ height: $options.addUnit(_ctx.height) }),
          placeholder: _ctx.placeholder,
          "placeholder-style": $options.addStyle(_ctx.placeholderStyle, "string"),
          "placeholder-class": _ctx.placeholderClass,
          disabled: _ctx.disabled,
          focus: _ctx.focus,
          autoHeight: _ctx.autoHeight,
          fixed: _ctx.fixed,
          cursorSpacing: _ctx.cursorSpacing,
          cursor: _ctx.cursor,
          showConfirmBar: _ctx.showConfirmBar,
          selectionStart: _ctx.selectionStart,
          selectionEnd: _ctx.selectionEnd,
          adjustPosition: _ctx.adjustPosition,
          disableDefaultPadding: _ctx.disableDefaultPadding,
          holdKeyboard: _ctx.holdKeyboard,
          maxlength: _ctx.maxlength,
          "confirm-type": _ctx.confirmType,
          ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
          onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
        _ctx.count ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-textarea__count",
            style: vue.normalizeStyle({
              "background-color": _ctx.disabled ? "transparent" : "#fff"
            })
          },
          vue.toDisplayString($data.innerValue.length) + "/" + vue.toDisplayString(_ctx.maxlength),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$s], ["__scopeId", "data-v-b6c174a6"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-textarea/u-textarea.vue"]]);
  const props$9 = defineMixin({
    props: {
      // 背景颜色（默认transparent）
      bgColor: {
        type: String,
        default: () => defProps.gap.bgColor
      },
      // 分割槽高度，单位px（默认30）
      height: {
        type: [String, Number],
        default: () => defProps.gap.height
      },
      // 与上一个组件的距离
      marginTop: {
        type: [String, Number],
        default: () => defProps.gap.marginTop
      },
      // 与下一个组件的距离
      marginBottom: {
        type: [String, Number],
        default: () => defProps.gap.marginBottom
      }
    }
  });
  const _sfc_main$F = {
    name: "u-gap",
    mixins: [mpMixin, mixin, props$9],
    computed: {
      gapStyle() {
        const style = {
          backgroundColor: this.bgColor,
          height: addUnit(this.height),
          marginTop: addUnit(this.marginTop),
          marginBottom: addUnit(this.marginBottom)
        };
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-gap",
        style: vue.normalizeStyle([$options.gapStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$r], ["__scopeId", "data-v-6fe44ee6"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-gap/u-gap.vue"]]);
  const props$8 = defineMixin({
    props: {
      // 是否展示弹窗
      show: {
        type: Boolean,
        default: () => defProps.popup.show
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: () => defProps.popup.overlay
      },
      // 弹出的方向，可选值为 top bottom right left center
      mode: {
        type: String,
        default: () => defProps.popup.mode
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: () => defProps.popup.duration
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: () => defProps.popup.closeable
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: () => defProps.popup.overlayStyle
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: () => defProps.popup.closeOnClickOverlay
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: () => defProps.popup.zIndex
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: () => defProps.popup.safeAreaInsetBottom
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: () => defProps.popup.safeAreaInsetTop
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: () => defProps.popup.closeIconPos
      },
      // 是否显示圆角
      round: {
        type: [Boolean, String, Number],
        default: () => defProps.popup.round
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: () => defProps.popup.zoom
      },
      // 弹窗背景色，设置为transparent可去除白色背景
      bgColor: {
        type: String,
        default: () => defProps.popup.bgColor
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: () => defProps.popup.overlayOpacity
      }
    }
  });
  const _sfc_main$E = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$8],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return deepMerge$1(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return deepMerge$1(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return deepMerge$1(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return deepMerge$1(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return deepMerge$1(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value = addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value;
            style.borderBottomRightRadius = value;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value;
            style.borderTopRightRadius = value;
          } else if (this.mode === "center") {
            style.borderRadius = value;
          }
        }
        return deepMerge$1(style, addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    emits: ["open", "close", "click", "update:show"],
    methods: {
      // 点击遮罩
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("update:show", false);
          this.$emit("close");
        }
      },
      close(e2) {
        this.$emit("update:show", false);
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_1$7);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$a);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$3);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-popup", [_ctx.customClass]])
      },
      [
        _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
          key: 0,
          show: _ctx.show,
          onClick: $options.overlayClick,
          zIndex: _ctx.zIndex,
          duration: $data.overlayDuration,
          customStyle: _ctx.overlayStyle,
          opacity: _ctx.overlayOpacity
        }, null, 8, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_u_transition, {
          show: _ctx.show,
          customStyle: $options.transitionStyle,
          mode: $options.position,
          duration: _ctx.duration,
          onAfterEnter: $options.afterEnter,
          onClick: $options.clickHandler
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "u-popup__content",
                style: vue.normalizeStyle([$options.contentStyle]),
                onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
              },
              [
                _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                _ctx.closeable ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                    class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
                    "hover-class": "u-popup__content__close--hover",
                    "hover-stay-time": "150"
                  },
                  [
                    vue.createVNode(_component_u_icon, {
                      name: "close",
                      color: "#909399",
                      size: "18",
                      bold: ""
                    })
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
              ],
              4
              /* STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$q], ["__scopeId", "data-v-05c24e9b"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  const openType = defineMixin({
    props: {
      openType: String
    },
    methods: {
      onGetUserInfo(event) {
        this.$emit("getuserinfo", event.detail);
      },
      onContact(event) {
        this.$emit("contact", event.detail);
      },
      onGetPhoneNumber(event) {
        this.$emit("getphonenumber", event.detail);
      },
      onError(event) {
        this.$emit("error", event.detail);
      },
      onLaunchApp(event) {
        this.$emit("launchapp", event.detail);
      },
      onOpenSetting(event) {
        this.$emit("opensetting", event.detail);
      }
    }
  });
  const buttonMixin = defineMixin({
    props: {
      lang: String,
      sessionFrom: String,
      sendMessageTitle: String,
      sendMessagePath: String,
      sendMessageImg: String,
      showMessageCard: Boolean,
      appParameter: String,
      formType: String,
      openType: String
    }
  });
  const props$7 = defineMixin({
    props: {
      // 操作菜单是否展示 （默认false）
      show: {
        type: Boolean,
        default: () => defProps.actionSheet.show
      },
      // 标题
      title: {
        type: String,
        default: () => defProps.actionSheet.title
      },
      // 选项上方的描述信息
      description: {
        type: String,
        default: () => defProps.actionSheet.description
      },
      // 数据
      actions: {
        type: Array,
        default: () => defProps.actionSheet.actions
      },
      // 取消按钮的文字，不为空时显示按钮
      cancelText: {
        type: String,
        default: () => defProps.actionSheet.cancelText
      },
      // 点击某个菜单项时是否关闭弹窗
      closeOnClickAction: {
        type: Boolean,
        default: () => defProps.actionSheet.closeOnClickAction
      },
      // 处理底部安全区（默认true）
      safeAreaInsetBottom: {
        type: Boolean,
        default: () => defProps.actionSheet.safeAreaInsetBottom
      },
      // 小程序的打开方式
      openType: {
        type: String,
        default: () => defProps.actionSheet.openType
      },
      // 点击遮罩是否允许关闭 (默认true)
      closeOnClickOverlay: {
        type: Boolean,
        default: () => defProps.actionSheet.closeOnClickOverlay
      },
      // 圆角值
      round: {
        type: [Boolean, String, Number],
        default: () => defProps.actionSheet.round
      },
      // 选项区域最大高度
      wrapMaxHeight: {
        type: [String],
        default: () => defProps.actionSheet.wrapMaxHeight
      }
    }
  });
  const _sfc_main$D = {
    name: "u-action-sheet",
    // 一些props参数和methods方法，通过mixin混入，因为其他文件也会用到
    mixins: [openType, buttonMixin, mixin, props$7],
    data() {
      return {};
    },
    computed: {
      // 操作项目的样式
      itemStyle() {
        return (index) => {
          let style = {};
          if (this.actions[index].color)
            style.color = this.actions[index].color;
          if (this.actions[index].fontSize)
            style.fontSize = addUnit(this.actions[index].fontSize);
          if (this.actions[index].disabled)
            style.color = "#c0c4cc";
          return style;
        };
      }
    },
    emits: ["close", "select", "update:show"],
    methods: {
      closeHandler() {
        if (this.closeOnClickOverlay) {
          this.$emit("update:show");
          this.$emit("close");
        }
      },
      // 点击取消按钮
      cancel() {
        this.$emit("update:show");
        this.$emit("close");
      },
      selectHandler(index) {
        const item = this.actions[index];
        if (item && !item.disabled && !item.loading) {
          this.$emit("select", item);
          if (this.closeOnClickAction) {
            this.$emit("update:show");
            this.$emit("close");
          }
        }
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0);
    const _component_u_gap = resolveEasycom(vue.resolveDynamicComponent("u-gap"), __easycom_3$2);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_3$1);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      show: _ctx.show,
      mode: "bottom",
      onClose: $options.closeHandler,
      safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
      round: _ctx.round
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-action-sheet" }, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-action-sheet__header"
          }, [
            vue.createElementVNode(
              "text",
              { class: "u-action-sheet__header__title u-line-1" },
              vue.toDisplayString(_ctx.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", {
              class: "u-action-sheet__header__icon-wrap",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.cancel && $options.cancel(...args), ["stop"]))
            }, [
              vue.createVNode(_component_u_icon, {
                name: "close",
                size: "17",
                color: "#c8c9cc",
                bold: ""
              })
            ])
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.description ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: "u-action-sheet__description",
              style: vue.normalizeStyle([{
                marginTop: `${_ctx.title && _ctx.description ? 0 : "18px"}`
              }])
            },
            vue.toDisplayString(_ctx.description),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.description ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "scroll-view",
              {
                "scroll-y": "",
                class: "u-action-sheet__item-wrap",
                style: vue.normalizeStyle({ maxHeight: _ctx.wrapMaxHeight })
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(_ctx.actions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                      vue.createElementVNode("view", {
                        class: "u-action-sheet__item-wrap__item",
                        onClick: vue.withModifiers(($event) => $options.selectHandler(index), ["stop"]),
                        "hover-class": !item.disabled && !item.loading ? "u-action-sheet--hover" : "",
                        "hover-stay-time": 150
                      }, [
                        !item.loading ? (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 0 },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "u-action-sheet__item-wrap__item__name",
                                style: vue.normalizeStyle([$options.itemStyle(index)])
                              },
                              vue.toDisplayString(item.name),
                              5
                              /* TEXT, STYLE */
                            ),
                            item.subname ? (vue.openBlock(), vue.createElementBlock(
                              "text",
                              {
                                key: 0,
                                class: "u-action-sheet__item-wrap__item__subname"
                              },
                              vue.toDisplayString(item.subname),
                              1
                              /* TEXT */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                          key: 1,
                          "custom-class": "van-action-sheet__loading",
                          size: "18",
                          mode: "circle"
                        }))
                      ], 8, ["onClick", "hover-class"]),
                      index !== _ctx.actions.length - 1 ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            )
          ], true),
          _ctx.cancelText ? (vue.openBlock(), vue.createBlock(_component_u_gap, {
            key: 2,
            bgColor: "#eaeaec",
            height: "6"
          })) : vue.createCommentVNode("v-if", true),
          _ctx.cancelText ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 3,
            class: "u-action-sheet__item-wrap__item u-action-sheet__cancel",
            "hover-class": "u-action-sheet--hover",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.cancel && $options.cancel(...args))
          }, [
            vue.createElementVNode(
              "text",
              {
                onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                "hover-stay-time": 150,
                class: "u-action-sheet__cancel-text"
              },
              vue.toDisplayString(_ctx.cancelText),
              33
              /* TEXT, NEED_HYDRATION */
            )
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "onClose", "safeAreaInsetBottom", "round"]);
  }
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$p], ["__scopeId", "data-v-69669810"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.vue"]]);
  const _imports_0$1 = "/static/images/establish/drak-close.png";
  const _imports_1$4 = "/static/images/establish/improvement.png";
  const _imports_3 = "/static/images/ai.png";
  function createModel(data) {
    return request({
      url: "/model",
      method: "post",
      data
    });
  }
  function aiRoleplay(data) {
    return request({
      url: "/ai/analyzeImage",
      method: "post",
      data
    });
  }
  function generateImage(data) {
    return request({
      url: "/ai/generateImage",
      method: "post",
      data
    });
  }
  function generateText(data) {
    return request({
      url: "/ai/generateText",
      method: "post",
      data
    });
  }
  function oneTouchImprovement(data) {
    return request({
      url: "/model/improvement",
      method: "post",
      data
    });
  }
  const uploadFile = (filPath, apiPath = "/upload/image") => {
    return new Promise((resolve, reject) => {
      const token = getToken();
      uni.uploadFile({
        url: config.base_url + apiPath,
        header: {
          authorization: "Bearer " + token
        },
        name: "file",
        filePath: filPath,
        success: (res) => {
          formatAppLog("log", "at utils/upload.js:17", "upload->", res);
          const result = JSON.parse(res.data).data;
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  class EnumClass {
    constructor(values) {
      this.values_ = values.map((label, index) => ({ value: index + 1, label }));
      this.default = this.values_[0];
    }
    values() {
      return this.values_;
    }
    getByKey(key) {
      return this.values_.find((v2) => v2.label === key);
    }
    getByValue(value) {
      return this.values_.find((v2) => v2.value === value);
    }
    contains(valueOrKey) {
      return Boolean(this.getByKey(valueOrKey)) || Boolean(this.getByValue(valueOrKey));
    }
    getDefault() {
      return this.default;
    }
    static from(values) {
      return new this(values);
    }
  }
  const Language = EnumClass.from(["中文", "英文"]);
  const Public = EnumClass.from(["公开·所有人可对话", "私密·仅自己可以对话"]);
  const useSettingsStore = defineStore("settings", {
    state: () => ({
      selectedLanguage: Language.getDefault().value,
      selectedPublicMode: Public.getDefault().value
    }),
    getters: {
      getLanguageLabel: (state) => {
        var _a;
        return ((_a = Language.getByValue(state.selectedLanguage)) == null ? void 0 : _a.label) ?? "";
      },
      getPublicModeLabel: (state) => {
        var _a;
        return ((_a = Public.getByValue(state.selectedPublicMode)) == null ? void 0 : _a.label) ?? "";
      }
    },
    actions: {
      setLanguage(value) {
        if (Language.contains(value)) {
          this.selectedLanguage = value;
        } else {
          formatAppLog("warn", "at store/modules/settings.js:27", `尝试设置的语言值${value}不在枚举中`);
        }
      },
      setPublicMode(value) {
        if (Public.contains(value)) {
          this.selectedPublicMode = value;
        } else {
          formatAppLog("warn", "at store/modules/settings.js:34", `尝试设置的音效模式值${value}不在枚举中`);
        }
      },
      resetToDefaults() {
        this.setLanguage(Language.getDefault().value);
        this.setPublicMode(Public.getDefault().value);
      }
    }
  });
  const _sfc_main$C = {
    __name: "privacy",
    emits: ["update"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const emit = __emit;
      const settingsStore = useSettingsStore();
      const show = vue.ref(false);
      const dataList = vue.ref(Public.values());
      const close = () => {
        show.value = false;
        emit("update");
      };
      const openDialog = () => {
        formatAppLog("log", "at pages/establish/components/privacy.vue:28", "Public", Public.values());
        dataList.value.forEach((item, index, array3) => {
          item.checkout = settingsStore.selectedPublicMode == item.value;
          item.border = index !== array3.length - 1;
        });
        show.value = true;
      };
      const onClickHandler = (index) => {
        dataList.value.forEach((item, indexItem) => {
          item.checkout = indexItem === index;
          if (indexItem == index) {
            settingsStore.setPublicMode(item.value);
          }
        });
        close();
      };
      __expose({
        openDialog
      });
      return (_ctx, _cache) => {
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
        const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_1$6);
        const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_2$4);
        const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_3$1);
        return vue.openBlock(), vue.createBlock(_component_u_popup, {
          show: show.value,
          onClose: close,
          round: "20"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "popup" }, [
              vue.createVNode(_component_u_cell_group, { border: false }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(dataList.value, (item, index) => {
                      return vue.openBlock(), vue.createBlock(_component_u_cell, {
                        onClick: ($event) => onClickHandler(index),
                        key: item.value,
                        title: item.label,
                        border: item.border
                      }, {
                        value: vue.withCtx(() => [
                          item.checkout ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                            key: 0,
                            name: "checkmark",
                            color: "#2979ff",
                            size: "20"
                          })) : vue.createCommentVNode("v-if", true)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "title", "border"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"]);
      };
    }
  };
  const privacy = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-1815113e"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/components/privacy.vue"]]);
  const useModelStore = defineStore("model", {
    state: () => ({
      createModel: {}
    }),
    actions: {
      setCreateModel(data) {
        this.createModel = data;
      },
      getCreateModel() {
        return this.createModel;
      }
    }
  });
  const _sfc_main$B = {
    __name: "establish",
    setup(__props) {
      const modelStore = useModelStore();
      const tabbarStore = useTabbarStore();
      const settingsStore = useSettingsStore();
      const { proxy } = vue.getCurrentInstance();
      proxy.getOpenerEventChannel();
      const userStore = useUserStore();
      const { userInfo: userInfo2 } = storeToRefs(userStore);
      const isActionShow = vue.ref(false);
      const isSettings = vue.ref(false);
      const privacyRef = vue.ref();
      const actionSheetList = vue.ref([
        {
          name: "AI生成",
          id: 1
        },
        {
          name: "相册上传",
          id: 2
        }
      ]);
      const form = vue.ref({
        modelName: "",
        modelImage: "",
        modelDescription: "",
        introduce: "",
        icon: "/static/icon.png",
        iconBg: "",
        sound: "",
        isAiImage: false,
        language: settingsStore.selectedLanguage,
        isPublic: settingsStore.selectedPublicMode,
        creatorId: userInfo2.value.userId,
        enableBackground: false,
        prologue: ""
      });
      const enableBackgroundFlag = vue.computed(() => form.value.enableBackground);
      const submitFlag = vue.computed(() => form.value.modelName == "");
      const isHttp = vue.computed(() => isHttpOrHttps(form.value.icon));
      const placeholder = vue.ref(`示例：你是一位经验丰富的英语老师，拥有激发学生学习热情的教学方法。你善于运用幽默和实际应用案例，使对话充满趣味。`);
      const cellOptions = vue.ref([
        {
          id: 1,
          title: "声音",
          icon: "/static/images/establish/sound.png",
          isLink: true,
          border: true,
          value: "去编辑"
        },
        {
          id: 2,
          title: "语言",
          icon: "/static/images/establish/language.png",
          isLink: true,
          border: true,
          value: settingsStore.getLanguageLabel
        },
        {
          id: 3,
          title: settingsStore.getPublicModeLabel,
          icon: "/static/images/establish/open.png",
          isLink: true,
          border: false,
          value: ""
        }
      ]);
      const handleCropImagePageEvent = (data) => {
        form.value = {
          ...modelStore.getCreateModel(),
          ...data
        };
        formatAppLog("log", "at pages/establish/establish.vue:194", "合并之后--->", form.value);
        form.value.icon = config.image_url + data.modelImage;
        form.value.iconBg = config.image_url + data.backgroundImage;
      };
      const handleCropPage = (data) => {
        uploadFile(data.path).then((result) => {
          formatAppLog("log", "at pages/establish/establish.vue:200", "上传成功", result);
          form.value.icon = config.image_url + result.fileName;
          form.value.modelImage = result.fileName;
        });
      };
      onLoad(() => {
        uni.$once(cropImagePageFromEstablishPage, handleCropImagePageEvent);
        uni.$once(cropPageFromCropImagePage, handleCropPage);
      });
      onShow(() => {
        cellOptions.value[1].value = settingsStore.getLanguageLabel;
        tabbarStore.setCurrent(2);
      });
      onHide(() => {
        uni.$off(cropImagePageFromEstablishPage, handleCropImagePageEvent);
        uni.$off(cropPageFromCropImagePage, handleCropPage);
      });
      const advancedSettingsHandler = () => {
        isSettings.value = true;
      };
      const onClickCellHandler = (item) => {
        switch (item.id) {
          case 1:
            toast$1("暂未开放");
            break;
          case 2:
            uni.navigateTo({
              url: "/pages/establish/language/language"
            });
            break;
          case 3:
            privacyRef.value.openDialog();
            break;
        }
      };
      const updateHandler = () => {
        cellOptions.value[2].title = settingsStore.getPublicModeLabel;
      };
      const submit = () => {
        if (submitFlag.value)
          return;
        const data = {
          ...form.value,
          sound: settingsStore.selectedLanguage,
          language: settingsStore.selectedPublicMode
        };
        formatAppLog("log", "at pages/establish/establish.vue:247", "data", data);
        uni.showLoading({
          title: "正在创建，请稍候..."
        });
        createModel(data).then((res) => {
          formatAppLog("log", "at pages/establish/establish.vue:253", "Current server time (UTC):", (/* @__PURE__ */ new Date()).toISOString());
          formatAppLog("log", "at pages/establish/establish.vue:254", "res", res);
          uni.redirectTo({
            url: "/pages/index/components/chat?modelId=" + res.data.modelId,
            success: () => {
              settingsStore.resetToDefaults();
            }
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/establish/establish.vue:263", "哪里错误了", err);
        }).finally(() => {
          uni.hideLoading();
        });
      };
      const editAvatarHandler = () => {
        isActionShow.value = true;
      };
      const closeAction = () => {
        isActionShow.value = false;
      };
      const closeActionSheetHandler = () => {
        closeAction();
      };
      const oneClickImprovement = () => {
        if (submitFlag.value && form.modelImage == "")
          return;
        uni.showLoading({
          title: "正在完善，请稍候..."
        });
        oneTouchImprovement(form.value).then(({ data }) => {
          form.value = {
            ...form.value,
            ...data
          };
          if (data.modelImage != "") {
            uni.getImageInfo({
              src: data.modelImage.data[0].url,
              success: (res) => {
                uploadFile(res.path).then((result) => {
                  formatAppLog("log", "at pages/establish/establish.vue:293", "上传成功", result);
                  form.value.icon = config.image_url + result.fileName;
                  form.value.modelImage = result.fileName;
                });
              }
            });
          }
          formatAppLog("log", "at pages/establish/establish.vue:300", "res", data);
        }).finally(() => {
          uni.hideLoading();
        });
      };
      const closeClickHandler = () => {
        showConfirm("确定放弃编辑吗？").then(async ({ confirm }) => {
          if (confirm) {
            const pages = getCurrentPages();
            const page2 = pages[pages.length - 2];
            const route2 = "/" + (page2 == null ? void 0 : page2.route);
            formatAppLog("log", "at pages/establish/establish.vue:312", "route", route2);
            const isTabbarPageFlag = await tabbarStore.findPage(route2);
            const handleSuccess = () => {
              settingsStore.resetToDefaults();
            };
            formatAppLog("log", "at pages/establish/establish.vue:318", "isTabbarPageFlag", isTabbarPageFlag);
            if (isTabbarPageFlag) {
              uni.navigateBack({ success: handleSuccess });
            } else {
              uni.reLaunch({
                url: "/pages/index/index",
                success: handleSuccess
              });
            }
          }
        });
      };
      const aiActionSelectHandler = () => {
        uni.navigateTo({
          url: "/pages/establish/aiProfile/aiProfile",
          animationType: "slide-in-bottom",
          animationDuration: 300,
          success: () => {
            modelStore.setCreateModel(form.value);
            closeAction();
          }
        });
      };
      const albumActionSelectHandler = () => {
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          sourceType: ["album"],
          success: (res) => {
            formatAppLog("log", "at pages/establish/establish.vue:347", "res", res.tempFilePaths);
            const file = res.tempFilePaths[0];
            uni.navigateTo({
              url: "/pages/establish/components/crop",
              success: (res2) => {
                res2.eventChannel.emit(establishPageFromCropPage, file);
              }
            });
            closeAction();
          }
        });
      };
      function isHttpOrHttps(url2) {
        const pattern2 = /^https?:\/\//i;
        return pattern2.test(url2);
      }
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$4);
        const _component_u_textarea = resolveEasycom(vue.resolveDynamicComponent("u-textarea"), __easycom_2$3);
        const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_1$6);
        const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_2$4);
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
        const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
        const _component_u_action_sheet = resolveEasycom(vue.resolveDynamicComponent("u-action-sheet"), __easycom_7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_u_navbar, {
              title: "创建AI智能体",
              placeholder: true,
              safeAreaInsetTop: true,
              bgColor: "#f5f5f5"
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "close-icon",
                  onClick: closeClickHandler
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_0$1,
                    mode: ""
                  })
                ])
              ]),
              right: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["improvement", submitFlag.value && form.value.modelImage == "" ? "improvement-active" : ""]),
                    onClick: oneClickImprovement
                  },
                  [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: _imports_1$4,
                      mode: ""
                    })
                  ],
                  2
                  /* CLASS */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "establish-wrap" }, [
              !enableBackgroundFlag.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "establish-wrap__avatar",
                onClick: editAvatarHandler
              }, [
                vue.createElementVNode("view", { class: "establish-wrap__avatar__img" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: form.value.icon,
                    mode: ""
                  }, null, 8, ["src"])
                ]),
                !isHttp.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "establish-wrap__avatar__edit"
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_2$2,
                    class: "image",
                    mode: ""
                  })
                ])) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true),
              enableBackgroundFlag.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "establish-wrap__bg"
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: form.value.iconBg,
                  mode: ""
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "view",
                {
                  onClick: aiActionSelectHandler,
                  class: vue.normalizeClass(["establish-wrap__tag", enableBackgroundFlag.value || isHttp.value ? "tag-active" : ""])
                },
                vue.toDisplayString(enableBackgroundFlag.value || isHttp.value ? "更换形象" : "AI生成形象"),
                3
                /* TEXT, CLASS */
              ),
              vue.createElementVNode("view", { class: "establish-wrap__name container" }, [
                vue.createElementVNode("view", { class: "establish-wrap__name__title title" }, "名称"),
                vue.createElementVNode("view", { class: "establish-wrap__name__input" }, [
                  vue.createVNode(_component_u_input, {
                    type: "text",
                    border: "none",
                    placeholder: "输入名称",
                    modelValue: form.value.modelName,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.modelName = $event)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              vue.createElementVNode("view", { class: "establish-wrap__content container" }, [
                vue.createElementVNode("view", { class: "establish-wrap__content__title title" }, "设定描述"),
                vue.createElementVNode("view", { class: "establish-wrap__content__textarea" }, [
                  vue.createVNode(_component_u_textarea, {
                    modelValue: form.value.modelDescription,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.modelDescription = $event),
                    placeholder: placeholder.value,
                    border: "none"
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ]),
              vue.createElementVNode("view", { class: "establish-wrap__cell container" }, [
                vue.createVNode(_component_u_cell_group, { border: false }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(cellOptions.value, (item, index) => {
                        return vue.openBlock(), vue.createBlock(_component_u_cell, {
                          onClick: ($event) => onClickCellHandler(item),
                          key: item.id,
                          "is-link": item.isLink,
                          value: item.value,
                          title: item.title,
                          border: item.border
                        }, {
                          icon: vue.withCtx(() => [
                            vue.createElementVNode("image", {
                              class: "establish-wrap__cell__icon",
                              src: item.icon,
                              mode: ""
                            }, null, 8, ["src"])
                          ]),
                          title: vue.withCtx(() => [
                            vue.createElementVNode(
                              "view",
                              { class: "title" },
                              vue.toDisplayString(item.title),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["onClick", "is-link", "value", "title", "border"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              !isSettings.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "establish-wrap__settings",
                onClick: advancedSettingsHandler
              }, [
                vue.createVNode(_component_u_icon, {
                  name: "plus",
                  color: "#0562ed"
                }),
                vue.createElementVNode("text", { class: "establish-wrap__settings__text" }, "更多高级设定")
              ])) : vue.createCommentVNode("v-if", true),
              isSettings.value ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 3 },
                [
                  vue.createElementVNode("view", { class: "establish-wrap__content container" }, [
                    vue.createElementVNode("view", { class: "establish-wrap__content__title title" }, "介绍"),
                    vue.createElementVNode("view", { class: "establish-wrap__content__textarea" }, [
                      vue.createVNode(_component_u_textarea, {
                        modelValue: form.value.introduce,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.introduce = $event),
                        placeholder: "示例:你的英语学习路上最好的伙伴",
                        border: "none"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "establish-wrap__content container" }, [
                    vue.createElementVNode("view", { class: "establish-wrap__content__title title" }, "开场白"),
                    vue.createElementVNode("view", { class: "establish-wrap__content__textarea" }, [
                      vue.createVNode(_component_u_textarea, {
                        modelValue: form.value.prologue,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.prologue = $event),
                        placeholder: "将作为开启聊天的第一句话",
                        border: "none"
                      }, null, 8, ["modelValue"])
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { style: { "height": "110rpx" } }),
            vue.createElementVNode(
              "button",
              {
                onClick: submit,
                class: vue.normalizeClass(["fixed-btn", submitFlag.value ? "btn-active" : ""])
              },
              "创建智能体",
              2
              /* CLASS */
            ),
            vue.createVNode(_component_u_action_sheet, {
              safeAreaInsetBottom: true,
              onClose: closeActionSheetHandler,
              actions: actionSheetList.value,
              round: "20",
              description: "该形象将用于智能体头像和聊天背景",
              cancelText: "取消",
              show: isActionShow.value
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_line),
                vue.createElementVNode("view", { class: "action-wrap" }, [
                  vue.createElementVNode("view", {
                    class: "action-wrap__ai",
                    onClick: aiActionSelectHandler
                  }, [
                    vue.createElementVNode("view", { class: "action-wrap__ai__img" }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: _imports_3,
                        mode: ""
                      })
                    ])
                  ]),
                  vue.createVNode(_component_u_line),
                  vue.createElementVNode("view", {
                    class: "action-wrap__album",
                    onClick: albumActionSelectHandler
                  }, "相册上传")
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["actions", "show"]),
            vue.createVNode(
              privacy,
              {
                ref_key: "privacyRef",
                ref: privacyRef,
                onUpdate: updateHandler
              },
              null,
              512
              /* NEED_PATCH */
            ),
            vue.createCommentVNode(" <tabbar></tabbar> ")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesEstablishEstablish = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-277fbd81"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/establish.vue"]]);
  const _sfc_main$A = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tabbar = resolveEasycom(vue.resolveDynamicComponent("tabbar"), tabbar);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, " 测试 "),
        vue.createVNode(_component_tabbar)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesNoticeNotice = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$o], ["__file", "F:/uniapp/vegetable-bag/pages/notice/notice.vue"]]);
  const props$6 = defineMixin({
    props: {
      // input的label提示语
      label: {
        type: String,
        default: () => defProps.formItem.label
      },
      // 绑定的值
      prop: {
        type: String,
        default: () => defProps.formItem.prop
      },
      // 绑定的规则
      rules: {
        type: Array,
        default: () => defProps.formItem.rules
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: [String, Boolean],
        default: () => defProps.formItem.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => defProps.formItem.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => defProps.formItem.labelWidth
      },
      // 右侧图标
      rightIcon: {
        type: String,
        default: () => defProps.formItem.rightIcon
      },
      // 左侧图标
      leftIcon: {
        type: String,
        default: () => defProps.formItem.leftIcon
      },
      // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
      required: {
        type: Boolean,
        default: () => defProps.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: () => defProps.formItem.leftIconStyle
      }
    }
  });
  const _sfc_main$z = {
    name: "u-form-item",
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        // 错误提示语
        message: "",
        parentData: {
          // 提示文本的位置
          labelPosition: "left",
          // 提示文本对齐方式
          labelAlign: "left",
          // 提示文本的样式
          labelStyle: {},
          // 提示文本的宽度
          labelWidth: 45,
          // 错误提示方式
          errorType: "message"
        },
        color,
        itemRules: []
      };
    },
    // 组件创建完成时，将当前实例保存到u-form中
    computed: {
      propsLine() {
        return defProps.line;
      }
    },
    mounted() {
      this.init();
    },
    emits: ["click"],
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n2) {
          this.setRules(n2);
        }
      }
    },
    methods: {
      addStyle,
      addUnit,
      init() {
        this.updateParentData();
        if (!this.parent) {
          error("u-form-item需要结合u-form组件使用");
        }
      },
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (rules2.length === 0) {
          this.itemRules = [];
          return;
        }
        this.itemRules = rules2;
      },
      // 获取父组件的参数
      updateParentData() {
        this.getParentData("u-form");
      },
      // 移除u-form-item的校验结果
      clearValidate() {
        this.message = null;
      },
      // 清空当前的组件的校验结果，并重置为初始值
      resetField() {
        const value = getProperty(this.parent.originalModel, this.prop);
        setProperty(this.parent.model, this.prop, value);
        this.message = null;
      },
      // 点击组件
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-form-item", { "u-form-item--error": !!$data.message && $data.parentData.errorType === "message" }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "u-form-item__body",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
            style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle), {
              flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
            }])
          },
          [
            vue.createCommentVNode(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              vue.createCommentVNode(" {{required}} "),
              _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-form-item__body__left",
                  style: vue.normalizeStyle({
                    width: $options.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
                    marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
                  })
                },
                [
                  vue.createCommentVNode(" 为了块对齐 "),
                  vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
                    vue.createCommentVNode(" nvue不支持伪元素before "),
                    _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-form-item__body__left__content__required"
                    }, "*")) : vue.createCommentVNode("v-if", true),
                    _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "u-form-item__body__left__content__icon"
                    }, [
                      vue.createVNode(_component_u_icon, {
                        name: _ctx.leftIcon,
                        "custom-style": _ctx.leftIconStyle
                      }, null, 8, ["name", "custom-style"])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "u-form-item__body__left__content__label",
                        style: vue.normalizeStyle([$data.parentData.labelStyle, {
                          justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                        }])
                      },
                      vue.toDisplayString(_ctx.label),
                      5
                      /* TEXT, STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ], true),
            vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
              vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
                vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "item__body__right__content__icon"
                }, [
                  vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ],
          4
          /* STYLE */
        ),
        vue.renderSlot(_ctx.$slots, "error", {}, () => [
          !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              class: "u-form-item__body__right__message",
              style: vue.normalizeStyle({
                marginLeft: $options.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
              })
            },
            vue.toDisplayString($data.message),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ], true),
        _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 0,
          color: $data.message && $data.parentData.errorType === "border-bottom" ? $data.color.error : $options.propsLine.color,
          customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
        }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$n], ["__scopeId", "data-v-42bac3de"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-form-item/u-form-item.vue"]]);
  const props$5 = defineMixin({
    props: {
      // 是否细边框
      hairline: {
        type: Boolean,
        default: () => defProps.button.hairline
      },
      // 按钮的预置样式，info，primary，error，warning，success
      type: {
        type: String,
        default: () => defProps.button.type
      },
      // 按钮尺寸，large，normal，small，mini
      size: {
        type: String,
        default: () => defProps.button.size
      },
      // 按钮形状，circle（两边为半圆），square（带圆角）
      shape: {
        type: String,
        default: () => defProps.button.shape
      },
      // 按钮是否镂空
      plain: {
        type: Boolean,
        default: () => defProps.button.plain
      },
      // 是否禁止状态
      disabled: {
        type: Boolean,
        default: () => defProps.button.disabled
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => defProps.button.loading
      },
      // 加载中提示文字
      loadingText: {
        type: [String, Number],
        default: () => defProps.button.loadingText
      },
      // 加载状态图标类型
      loadingMode: {
        type: String,
        default: () => defProps.button.loadingMode
      },
      // 加载图标大小
      loadingSize: {
        type: [String, Number],
        default: () => defProps.button.loadingSize
      },
      // 开放能力，具体请看uniapp稳定关于button组件部分说明
      // https://uniapp.dcloud.io/component/button
      openType: {
        type: String,
        default: () => defProps.button.openType
      },
      // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
      // 取值为submit（提交表单），reset（重置表单）
      formType: {
        type: String,
        default: () => defProps.button.formType
      },
      // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      // 只微信小程序、QQ小程序有效
      appParameter: {
        type: String,
        default: () => defProps.button.appParameter
      },
      // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
      hoverStopPropagation: {
        type: Boolean,
        default: () => defProps.button.hoverStopPropagation
      },
      // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
      lang: {
        type: String,
        default: () => defProps.button.lang
      },
      // 会话来源，open-type="contact"时有效。只微信小程序有效
      sessionFrom: {
        type: String,
        default: () => defProps.button.sessionFrom
      },
      // 会话内消息卡片标题，open-type="contact"时有效
      // 默认当前标题，只微信小程序有效
      sendMessageTitle: {
        type: String,
        default: () => defProps.button.sendMessageTitle
      },
      // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
      // 默认当前分享路径，只微信小程序有效
      sendMessagePath: {
        type: String,
        default: () => defProps.button.sendMessagePath
      },
      // 会话内消息卡片图片，open-type="contact"时有效
      // 默认当前页面截图，只微信小程序有效
      sendMessageImg: {
        type: String,
        default: () => defProps.button.sendMessageImg
      },
      // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
      // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
      showMessageCard: {
        type: Boolean,
        default: () => defProps.button.showMessageCard
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: () => defProps.button.dataName
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: () => defProps.button.throttleTime
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: () => defProps.button.hoverStartTime
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: () => defProps.button.hoverStayTime
      },
      // 按钮文字，之所以通过props传入，是因为slot传入的话
      // nvue中无法控制文字的样式
      text: {
        type: [String, Number],
        default: () => defProps.button.text
      },
      // 按钮图标
      icon: {
        type: String,
        default: () => defProps.button.icon
      },
      // 按钮图标
      iconColor: {
        type: String,
        default: () => defProps.button.icon
      },
      // 按钮颜色，支持传入linear-gradient渐变色
      color: {
        type: String,
        default: () => defProps.button.color
      }
    }
  });
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const _sfc_main$y = {
    name: "u-button",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {};
    },
    computed: {
      // 生成bem风格的类名
      bemClass() {
        if (!this.color) {
          return this.bem(
            "button",
            ["type", "shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        } else {
          return this.bem(
            "button",
            ["shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      // 字体大小
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    emits: [
      "click",
      "getphonenumber",
      "getuserinfo",
      "error",
      "opensetting",
      "launchapp",
      "agreeprivacyauthorization"
    ],
    methods: {
      addStyle,
      clickHandler() {
        if (!this.disabled && !this.loading) {
          throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      // 下面为对接uniapp官方按钮开放能力事件回调的对接
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      },
      agreeprivacyauthorization(res) {
        this.$emit("agreeprivacyauthorization", res);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      onAgreeprivacyauthorization: _cache[5] || (_cache[5] = (...args) => $options.agreeprivacyauthorization && $options.agreeprivacyauthorization(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, $options.addStyle(_ctx.customStyle)]),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createVNode(_component_u_loading_icon, {
            mode: _ctx.loadingMode,
            size: _ctx.loadingSize * 1.15,
            color: $options.loadingColor
          }, null, 8, ["mode", "size", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "u-button__loading-text",
              style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
            },
            vue.toDisplayString(_ctx.loadingText || _ctx.text),
            5
            /* TEXT, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $options.iconColorCom,
            size: $options.textSize * 1.35,
            customStyle: { marginRight: "2px" }
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode(
              "text",
              {
                class: "u-button__text",
                style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
              },
              vue.toDisplayString(_ctx.text),
              5
              /* TEXT, STYLE */
            )
          ], true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$m], ["__scopeId", "data-v-5ce41ee6"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-button/u-button.vue"]]);
  const props$4 = defineMixin({
    props: {
      // 当前form的需要验证字段的集合
      model: {
        type: Object,
        default: () => defProps.form.model
      },
      // 验证规则
      rules: {
        type: [Object, Function, Array],
        default: () => defProps.form.rules
      },
      // 有错误时的提示方式，message-提示信息，toast-进行toast提示
      // border-bottom-下边框呈现红色，none-无提示
      errorType: {
        type: String,
        default: () => defProps.form.errorType
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: Boolean,
        default: () => defProps.form.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => defProps.form.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => defProps.form.labelWidth
      },
      // lable字体的对齐方式
      labelAlign: {
        type: String,
        default: () => defProps.form.labelAlign
      },
      // lable的样式，对象形式
      labelStyle: {
        type: Object,
        default: () => defProps.form.labelStyle
      }
    }
  });
  var define_process_env_default = {};
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && define_process_env_default && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning3(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e2) => typeof e2 === "string")) {
          formatAppLog("warn", "at uni_modules/uview-plus/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i2 = 1;
    const f2 = args[0];
    const len = args.length;
    if (typeof f2 === "function") {
      return f2.apply(null, args.slice(1));
    }
    if (typeof f2 === "string") {
      let str = String(f2).replace(formatRegExp, (x2) => {
        if (x2 === "%%") {
          return "%";
        }
        if (i2 >= len) {
          return x2;
        }
        switch (x2) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_2) {
              return "[Circular]";
            }
            break;
          default:
            return x2;
        }
      });
      for (let arg = args[i2]; i2 < len; arg = args[++i2]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f2;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value, type2) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a2) => {
      func2(a2, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index;
      index += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k2) => {
      ret.push.apply(ret, objArr[k2]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e2) => e2);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e2) => e2);
    return pending;
  }
  function complementError(rule) {
    return function(oe2) {
      if (oe2 && oe2.message) {
        oe2.field = oe2.field || rule.fullField;
        return oe2;
      }
      return {
        message: typeof oe2 === "function" ? oe2() : oe2,
        field: oe2.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (const s2 in source) {
        if (source.hasOwnProperty(s2)) {
          const value = source[s2];
          if (typeof value === "object" && typeof target[s2] === "object") {
            target[s2] = { ...target[s2], ...value };
          } else {
            target[s2] = value;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value) {
      return /^(-)?\d+$/.test(value);
    },
    float: function float(value) {
      return /^(-)?\d+(\.\d+)?$/.test(value);
    },
    array: function array3(value) {
      return Array.isArray(value);
    },
    regexp: function regexp(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e2) {
        return false;
      }
    },
    date: function date3(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
    },
    number: function number3(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof +value === "number";
    },
    object: function object3(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method(value) {
      return typeof value === "function";
    },
    email: function email2(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url2(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern.hex);
    }
  };
  function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required(rule, value, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range(rule, value, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value;
    let key = null;
    const num = typeof value === "number";
    const str = typeof value === "string";
    const arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range,
    enum: enumerable,
    pattern: pattern$1
  };
  function string(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function number2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function array2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (!isEmptyValue(value, "array")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function object2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM$1](rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function date2(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        let dateObject;
        if (typeof value === "number") {
          dateObject = new Date(value);
        } else {
          dateObject = value;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string,
    method: method2,
    number: number2,
    boolean: _boolean,
    regexp: regexp2,
    integer: integer2,
    float: floatFn,
    array: array2,
    object: object2,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date2,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z2;
      let item;
      for (z2 in rules2) {
        if (rules2.hasOwnProperty(z2)) {
          item = rules2[z2];
          this.rules[z2] = Array.isArray(item) ? item : [item];
        }
      }
    },
    validate: function validate(source_, o2, oc) {
      const _this = this;
      if (o2 === void 0) {
        o2 = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o2;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i2;
        let errors = [];
        let fields = {};
        function add(e2) {
          if (Array.isArray(e2)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e2);
          } else {
            errors.push(e2);
          }
        }
        for (i2 = 0; i2 < results.length; i2++) {
          add(results[i2]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z2) => {
        arr = _this.rules[z2];
        value = source[z2];
        arr.forEach((r2) => {
          let rule = r2;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = { ...source };
            }
            value = source[z2] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = { ...rule };
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z2;
          rule.fullField = rule.fullField || z2;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z2] = series[z2] || [];
          series[z2].push({
            rule,
            value,
            source,
            field: z2
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return { ...schema, fullField: `${rule.fullField}.${key}` };
        }
        function cb(e2) {
          if (e2 === void 0) {
            e2 = [];
          }
          let errors = e2;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k2 in data.value) {
                if (data.value.hasOwnProperty(k2)) {
                  fieldsSchema[k2] = rule.defaultField;
                }
              }
            }
            fieldsSchema = { ...fieldsSchema, ...data.rule.fields };
            for (const f2 in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f2)) {
                const fieldSchema = Array.isArray(fieldsSchema[f2]) ? fieldsSchema[f2] : [fieldsSchema[f2]];
                fieldsSchema[f2] = fieldSchema.map(addFullfield.bind(null, f2));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e2) => cb(e2));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$x = {
    name: "u-form",
    mixins: [mpMixin, mixin, props$4],
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        formRules: {},
        // 规则校验器
        validator: {},
        // 原始的model快照，用于resetFields方法重置表单时使用
        originalModel: null
      };
    },
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n2) {
          this.setRules(n2);
        }
      },
      // 监听属性的变化，通知子组件u-form-item重新获取信息
      propsChange(n2) {
        var _a;
        if ((_a = this.children) == null ? void 0 : _a.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      },
      // 监听model的初始值作为重置表单的快照
      model: {
        immediate: true,
        handler(n2) {
          if (!this.originalModel) {
            this.originalModel = deepClone(n2);
          }
        }
      }
    },
    computed: {
      propsChange() {
        return [
          this.errorType,
          this.borderBottom,
          this.labelPosition,
          this.labelWidth,
          this.labelAlign,
          this.labelStyle
        ];
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          error("设置rules，model必须设置！如果已经设置，请刷新页面。");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
      resetFields() {
        this.resetModel();
      },
      // 重置model为初始值的快照
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value = getProperty(this.originalModel, prop);
          setProperty(this.model, prop, value);
        });
      },
      // 清空校验结果
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
            child.message = null;
          }
        });
      },
      // 对部分表单字段进行校验
      async validateField(value, callback, event = null) {
        this.$nextTick(() => {
          const errorsRes = [];
          value = [].concat(value);
          let promises = this.children.map((child) => {
            return new Promise((resolve, reject) => {
              const childErrors = [];
              if (value.includes(child.prop)) {
                const propertyVal = getProperty(
                  this.model,
                  child.prop
                );
                const propertyChain = child.prop.split(".");
                const propertyName = propertyChain[propertyChain.length - 1];
                let rule = [];
                if (child.itemRules && child.itemRules.length > 0) {
                  rule = child.itemRules;
                } else {
                  rule = this.formRules[child.prop];
                }
                if (!rule) {
                  resolve();
                  return;
                }
                const rules2 = [].concat(rule);
                if (!rules2.length) {
                  resolve();
                }
                for (let i2 = 0; i2 < rules2.length; i2++) {
                  const ruleItem = rules2[i2];
                  const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                  if (event && !trigger.includes(event)) {
                    resolve();
                    continue;
                  }
                  const validator = new Schema({
                    [propertyName]: ruleItem
                  });
                  validator.validate(
                    {
                      [propertyName]: propertyVal
                    },
                    (errors, fields) => {
                      var _a;
                      if (test.array(errors)) {
                        errors.forEach((element) => {
                          element.prop = child.prop;
                        });
                        errorsRes.push(...errors);
                        childErrors.push(...errors);
                      }
                      child.message = ((_a = childErrors[0]) == null ? void 0 : _a.message) ? childErrors[0].message : null;
                      if (i2 == rules2.length - 1) {
                        resolve(errorsRes);
                      }
                    }
                  );
                }
              } else {
                resolve({});
              }
            });
          });
          Promise.all(promises).then((results) => {
            typeof callback === "function" && callback(errorsRes);
          }).catch((error2) => {
            formatAppLog("error", "at uni_modules/uview-plus/components/u-form/u-form.vue:216", "An error occurred:", error2);
          });
        });
      },
      // 校验全部数据
      validate(callback) {
        if (Object.keys(this.formRules).length === 0) {
          error("未设置rules，请看文档说明！如果已经设置，请刷新页面。");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map(
              (item) => item.prop
            );
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && toast$2(errors[0].message);
                reject(errors);
              } else {
                resolve(true);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$l], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-form/u-form.vue"]]);
  const props$3 = defineMixin({
    props: {
      // 倒计时总秒数
      seconds: {
        type: [String, Number],
        default: () => defProps.code.seconds
      },
      // 尚未开始时提示
      startText: {
        type: String,
        default: () => defProps.code.startText
      },
      // 正在倒计时中的提示
      changeText: {
        type: String,
        default: () => defProps.code.changeText
      },
      // 倒计时结束时的提示
      endText: {
        type: String,
        default: () => defProps.code.endText
      },
      // 是否在H5刷新或各端返回再进入时继续倒计时
      keepRunning: {
        type: Boolean,
        default: () => defProps.code.keepRunning
      },
      // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
      uniqueKey: {
        type: String,
        default: () => defProps.code.uniqueKey
      }
    }
  });
  const _sfc_main$w = {
    name: "u-code",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {
        secNum: this.seconds,
        timer: null,
        canGetCode: true
        // 是否可以执行验证码操作
      };
    },
    mounted() {
      this.checkKeepRunning();
    },
    watch: {
      seconds: {
        immediate: true,
        handler(n2) {
          this.secNum = n2;
        }
      }
    },
    emits: ["start", "end", "change"],
    methods: {
      checkKeepRunning() {
        let lastTimestamp = Number(uni.getStorageSync(this.uniqueKey + "_$uCountDownTimestamp"));
        if (!lastTimestamp)
          return this.changeEvent(this.startText);
        let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
        if (this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
          this.secNum = lastTimestamp - nowTimestamp;
          uni.removeStorageSync(this.uniqueKey + "_$uCountDownTimestamp");
          this.start();
        } else {
          this.changeEvent(this.startText);
        }
      },
      // 开始倒计时
      start() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.$emit("start");
        this.canGetCode = false;
        this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
        this.timer = setInterval(() => {
          if (--this.secNum) {
            this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
          } else {
            clearInterval(this.timer);
            this.timer = null;
            this.changeEvent(this.endText);
            this.secNum = this.seconds;
            this.$emit("end");
            this.canGetCode = true;
          }
        }, 1e3);
        this.setTimeToStorage();
      },
      // 重置，可以让用户再次获取验证码
      reset() {
        this.canGetCode = true;
        clearInterval(this.timer);
        this.secNum = this.seconds;
        this.changeEvent(this.endText);
      },
      changeEvent(text) {
        this.$emit("change", text);
      },
      // 保存时间戳，为了防止倒计时尚未结束，H5刷新或者各端的右上角返回上一页再进来
      setTimeToStorage() {
        if (!this.keepRunning || !this.timer)
          return;
        if (this.secNum > 0 && this.secNum < this.seconds) {
          let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
          uni.setStorage({
            key: this.uniqueKey + "_$uCountDownTimestamp",
            data: nowTimestamp + Number(this.secNum)
          });
        }
      }
    },
    // 组件销毁的时候，清除定时器，否则定时器会继续存在，系统不会自动清除
    beforeUnmount() {
      this.setTimeToStorage();
      clearTimeout(this.timer);
      this.timer = null;
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-code" }, [
      vue.createCommentVNode(" 此组件功能由js完成，无需写html逻辑 ")
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$k], ["__scopeId", "data-v-8783e3d0"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-code/u-code.vue"]]);
  const regMobile = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
  const _sfc_main$v = {
    __name: "login",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const userStore = useUserStore();
      let timer;
      const showText = vue.ref("");
      const tips = vue.ref("");
      const seconds = vue.ref(60);
      const formRef = vue.ref();
      const form = vue.ref({
        phone: "",
        password: ""
      });
      const uCodeRef = vue.ref();
      onShow(() => {
        appear("你好，我是 菜包 ");
      });
      const codeChange = (text) => {
        tips.value = text;
      };
      const rules2 = vue.ref({
        phone: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: ["blur"]
          },
          {
            validator: (rule, value, callback) => {
              if (regMobile.test(value)) {
                return callback();
              }
              callback(new Error("请输入正确的手机号码"));
            },
            message: "",
            trigger: ["change", "blur"]
          }
        ],
        password: {
          len: 6,
          required: true,
          message: "请输入6位验证码",
          trigger: ["change", "blur"]
        }
      });
      const appear = (content) => {
        showText.value = "";
        clearTimeout(timer);
        let speed = 50;
        let count = 1;
        function changeContent() {
          showText.value = content.substring(0, count);
          count++;
          if (count != content.length) {
            speed -= 1;
            if (speed < 5)
              speed = 5;
            timer = setTimeout(changeContent, speed);
          }
        }
        changeContent();
      };
      const getCodeHandler = () => {
        if (!regMobile.test(form.value.phone)) {
          return toast("请输入正确的手机号码");
        }
        if (uCodeRef.value.canGetCode) {
          uCodeRef.value.start();
        }
      };
      const submit = () => {
        formRef.value.validate().then((valid) => {
          if (valid) {
            userStore.logOn(form.value).then(() => {
              loginSuccess();
            }).catch(() => {
            });
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/login.vue:119", "err----->", err);
        });
      };
      const loginSuccess = () => {
        userStore.getInfo().then(() => {
          uni.reLaunch({
            url: "/pages/index/index",
            success: (res) => {
              tabbarStore.setCurrent(0);
            }
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$4);
        const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_1$3);
        const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_2$2);
        const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3);
        const _component_u_code = resolveEasycom(vue.resolveDynamicComponent("u-code"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" <theme> "),
            vue.createElementVNode("view", { class: "login" }, [
              vue.createElementVNode("view", { class: "login__logo" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: vue.unref(config).logo,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode(
                "view",
                { class: "show-text" },
                vue.toDisplayString(showText.value),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "login__form" }, [
                vue.createVNode(_component_u_form, {
                  labelPosition: "left",
                  model: form.value,
                  rules: rules2.value,
                  ref_key: "formRef",
                  ref: formRef,
                  labelWidth: "0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_form_item, {
                      label: "",
                      prop: "phone",
                      class: "formItem"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_u_input, {
                          modelValue: form.value.phone,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.phone = $event),
                          placeholder: "请输入手机号",
                          border: "none",
                          fontSize: "28rpx",
                          color: "#AAAAAA"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_u_form_item, {
                      label: "",
                      prop: "password",
                      class: "formItem",
                      style: { "margin-top": "30rpx" }
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_u_input, {
                          modelValue: form.value.password,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.password = $event),
                          placeholder: "请输入验证码",
                          border: "none",
                          fontSize: "28rpx",
                          color: "#AAAAAA"
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_u_button, {
                              class: "btn-text",
                              color: "#4FACFD4d",
                              onClick: getCodeHandler
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(
                                  vue.toDisplayString(tips.value),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["model", "rules"])
              ])
            ]),
            vue.createElementVNode("button", {
              class: "ymBtn",
              onClick: submit
            }, "登录"),
            vue.createVNode(_component_u_code, {
              seconds: seconds.value,
              "start-text": "获取验证码",
              "change-text": "X秒重新获取",
              "end-text": "重新获取",
              ref_key: "uCodeRef",
              ref: uCodeRef,
              onChange: codeChange
            }, null, 8, ["seconds"]),
            vue.createCommentVNode(" </theme> ")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesLogin = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-e8ce220f"], ["__file", "F:/uniapp/vegetable-bag/pages/login.vue"]]);
  function e$1(e2) {
    if (e2.__esModule)
      return e2;
    var r2 = Object.defineProperty({}, "__esModule", { value: true });
    return Object.keys(e2).forEach(function(t2) {
      var n2 = Object.getOwnPropertyDescriptor(e2, t2);
      Object.defineProperty(r2, t2, n2.get ? n2 : { enumerable: true, get: function() {
        return e2[t2];
      } });
    }), r2;
  }
  var r$1 = {}, t$1 = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, n$1 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, s$1 = {}, o$1 = {};
  function i$1(e2, r2, t2) {
    var n2, s2, a2, c2, l2, u2 = "";
    for ("string" != typeof r2 && (t2 = r2, r2 = i$1.defaultChars), void 0 === t2 && (t2 = true), l2 = function(e3) {
      var r3, t3, n3 = o$1[e3];
      if (n3)
        return n3;
      for (n3 = o$1[e3] = [], r3 = 0; r3 < 128; r3++)
        t3 = String.fromCharCode(r3), /^[0-9a-z]$/i.test(t3) ? n3.push(t3) : n3.push("%" + ("0" + r3.toString(16).toUpperCase()).slice(-2));
      for (r3 = 0; r3 < e3.length; r3++)
        n3[e3.charCodeAt(r3)] = e3[r3];
      return n3;
    }(r2), n2 = 0, s2 = e2.length; n2 < s2; n2++)
      if (a2 = e2.charCodeAt(n2), t2 && 37 === a2 && n2 + 2 < s2 && /^[0-9a-f]{2}$/i.test(e2.slice(n2 + 1, n2 + 3)))
        u2 += e2.slice(n2, n2 + 3), n2 += 2;
      else if (a2 < 128)
        u2 += l2[a2];
      else if (a2 >= 55296 && a2 <= 57343) {
        if (a2 >= 55296 && a2 <= 56319 && n2 + 1 < s2 && (c2 = e2.charCodeAt(n2 + 1)) >= 56320 && c2 <= 57343) {
          u2 += encodeURIComponent(e2[n2] + e2[n2 + 1]), n2++;
          continue;
        }
        u2 += "%EF%BF%BD";
      } else
        u2 += encodeURIComponent(e2[n2]);
    return u2;
  }
  i$1.defaultChars = ";/?:@&=+$,-_.!~*'()#", i$1.componentChars = "-_.!~*'()";
  var a$1 = i$1, c$1 = {};
  function l$1(e2, r2) {
    var t2;
    return "string" != typeof r2 && (r2 = l$1.defaultChars), t2 = function(e3) {
      var r3, t3, n2 = c$1[e3];
      if (n2)
        return n2;
      for (n2 = c$1[e3] = [], r3 = 0; r3 < 128; r3++)
        t3 = String.fromCharCode(r3), n2.push(t3);
      for (r3 = 0; r3 < e3.length; r3++)
        n2[t3 = e3.charCodeAt(r3)] = "%" + ("0" + t3.toString(16).toUpperCase()).slice(-2);
      return n2;
    }(r2), e2.replace(/(%[a-f0-9]{2})+/gi, function(e3) {
      var r3, n2, s2, o2, i2, a2, c2, l2 = "";
      for (r3 = 0, n2 = e3.length; r3 < n2; r3 += 3)
        (s2 = parseInt(e3.slice(r3 + 1, r3 + 3), 16)) < 128 ? l2 += t2[s2] : 192 == (224 & s2) && r3 + 3 < n2 && 128 == (192 & (o2 = parseInt(e3.slice(r3 + 4, r3 + 6), 16))) ? (l2 += (c2 = s2 << 6 & 1984 | 63 & o2) < 128 ? "��" : String.fromCharCode(c2), r3 += 3) : 224 == (240 & s2) && r3 + 6 < n2 && (o2 = parseInt(e3.slice(r3 + 4, r3 + 6), 16), i2 = parseInt(e3.slice(r3 + 7, r3 + 9), 16), 128 == (192 & o2) && 128 == (192 & i2)) ? (l2 += (c2 = s2 << 12 & 61440 | o2 << 6 & 4032 | 63 & i2) < 2048 || c2 >= 55296 && c2 <= 57343 ? "���" : String.fromCharCode(c2), r3 += 6) : 240 == (248 & s2) && r3 + 9 < n2 && (o2 = parseInt(e3.slice(r3 + 4, r3 + 6), 16), i2 = parseInt(e3.slice(r3 + 7, r3 + 9), 16), a2 = parseInt(e3.slice(r3 + 10, r3 + 12), 16), 128 == (192 & o2) && 128 == (192 & i2) && 128 == (192 & a2)) ? ((c2 = s2 << 18 & 1835008 | o2 << 12 & 258048 | i2 << 6 & 4032 | 63 & a2) < 65536 || c2 > 1114111 ? l2 += "����" : (c2 -= 65536, l2 += String.fromCharCode(55296 + (c2 >> 10), 56320 + (1023 & c2))), r3 += 9) : l2 += "�";
      return l2;
    });
  }
  l$1.defaultChars = ";/?:@&=+$,#", l$1.componentChars = "";
  var u$1 = l$1;
  function p$1() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var h$1 = /^([a-z0-9.+-]+:)/i, f$1 = /:[0-9]*$/, d$1 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, m$1 = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), g$1 = ["'"].concat(m$1), _$1 = ["%", "/", "?", ";", "#"].concat(g$1), k$1 = ["/", "?", "#"], b$1 = /^[+a-z0-9A-Z_-]{0,63}$/, v$1 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, C$1 = { javascript: true, "javascript:": true }, y$1 = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
  p$1.prototype.parse = function(e2, r2) {
    var t2, n2, s2, o2, i2, a2 = e2;
    if (a2 = a2.trim(), !r2 && 1 === e2.split("#").length) {
      var c2 = d$1.exec(a2);
      if (c2)
        return this.pathname = c2[1], c2[2] && (this.search = c2[2]), this;
    }
    var l2 = h$1.exec(a2);
    if (l2 && (s2 = (l2 = l2[0]).toLowerCase(), this.protocol = l2, a2 = a2.substr(l2.length)), (r2 || l2 || a2.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(i2 = "//" === a2.substr(0, 2)) || l2 && C$1[l2] || (a2 = a2.substr(2), this.slashes = true)), !C$1[l2] && (i2 || l2 && !y$1[l2])) {
      var u2, p2, f2 = -1;
      for (t2 = 0; t2 < k$1.length; t2++)
        -1 !== (o2 = a2.indexOf(k$1[t2])) && (-1 === f2 || o2 < f2) && (f2 = o2);
      for (-1 !== (p2 = -1 === f2 ? a2.lastIndexOf("@") : a2.lastIndexOf("@", f2)) && (u2 = a2.slice(0, p2), a2 = a2.slice(p2 + 1), this.auth = u2), f2 = -1, t2 = 0; t2 < _$1.length; t2++)
        -1 !== (o2 = a2.indexOf(_$1[t2])) && (-1 === f2 || o2 < f2) && (f2 = o2);
      -1 === f2 && (f2 = a2.length), ":" === a2[f2 - 1] && f2--;
      var m2 = a2.slice(0, f2);
      a2 = a2.slice(f2), this.parseHost(m2), this.hostname = this.hostname || "";
      var g2 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!g2) {
        var A2 = this.hostname.split(/\./);
        for (t2 = 0, n2 = A2.length; t2 < n2; t2++) {
          var x2 = A2[t2];
          if (x2 && !x2.match(b$1)) {
            for (var D2 = "", w2 = 0, E2 = x2.length; w2 < E2; w2++)
              x2.charCodeAt(w2) > 127 ? D2 += "x" : D2 += x2[w2];
            if (!D2.match(b$1)) {
              var q2 = A2.slice(0, t2), S2 = A2.slice(t2 + 1), F2 = x2.match(v$1);
              F2 && (q2.push(F2[1]), S2.unshift(F2[2])), S2.length && (a2 = S2.join(".") + a2), this.hostname = q2.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > 255 && (this.hostname = ""), g2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var L2 = a2.indexOf("#");
    -1 !== L2 && (this.hash = a2.substr(L2), a2 = a2.slice(0, L2));
    var z2 = a2.indexOf("?");
    return -1 !== z2 && (this.search = a2.substr(z2), a2 = a2.slice(0, z2)), a2 && (this.pathname = a2), y$1[s2] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, p$1.prototype.parseHost = function(e2) {
    var r2 = f$1.exec(e2);
    r2 && (":" !== (r2 = r2[0]) && (this.port = r2.substr(1)), e2 = e2.substr(0, e2.length - r2.length)), e2 && (this.hostname = e2);
  };
  var A$1 = function(e2, r2) {
    if (e2 && e2 instanceof p$1)
      return e2;
    var t2 = new p$1();
    return t2.parse(e2, r2), t2;
  };
  s$1.encode = a$1, s$1.decode = u$1, s$1.format = function(e2) {
    var r2 = "";
    return r2 += e2.protocol || "", r2 += e2.slashes ? "//" : "", r2 += e2.auth ? e2.auth + "@" : "", e2.hostname && -1 !== e2.hostname.indexOf(":") ? r2 += "[" + e2.hostname + "]" : r2 += e2.hostname || "", r2 += e2.port ? ":" + e2.port : "", r2 += e2.pathname || "", r2 += e2.search || "", r2 += e2.hash || "";
  }, s$1.parse = A$1;
  var x$1 = {}, D$1 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, w$1 = /[\0-\x1F\x7F-\x9F]/, E$1 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  x$1.Any = D$1, x$1.Cc = w$1, x$1.Cf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, x$1.P = n$1, x$1.Z = E$1, function(e2) {
    var r2 = Object.prototype.hasOwnProperty;
    function o2(e3, t2) {
      return r2.call(e3, t2);
    }
    function i2(e3) {
      return !(e3 >= 55296 && e3 <= 57343) && (!(e3 >= 64976 && e3 <= 65007) && (65535 != (65535 & e3) && 65534 != (65535 & e3) && (!(e3 >= 0 && e3 <= 8) && (11 !== e3 && (!(e3 >= 14 && e3 <= 31) && (!(e3 >= 127 && e3 <= 159) && !(e3 > 1114111)))))));
    }
    function a2(e3) {
      if (e3 > 65535) {
        var r3 = 55296 + ((e3 -= 65536) >> 10), t2 = 56320 + (1023 & e3);
        return String.fromCharCode(r3, t2);
      }
      return String.fromCharCode(e3);
    }
    var c2 = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l2 = new RegExp(c2.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), u2 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, p2 = t$1;
    var h2 = /[&<>"]/, f2 = /[&<>"]/g, d2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
    function m2(e3) {
      return d2[e3];
    }
    var g2 = /[.?*+^$[\]\\(){}|-]/g;
    var _2 = n$1;
    e2.lib = {}, e2.lib.mdurl = s$1, e2.lib.ucmicro = x$1, e2.assign = function(e3) {
      var r3 = Array.prototype.slice.call(arguments, 1);
      return r3.forEach(function(r4) {
        if (r4) {
          if ("object" != typeof r4)
            throw new TypeError(r4 + "must be object");
          Object.keys(r4).forEach(function(t2) {
            e3[t2] = r4[t2];
          });
        }
      }), e3;
    }, e2.isString = function(e3) {
      return "[object String]" === function(e4) {
        return Object.prototype.toString.call(e4);
      }(e3);
    }, e2.has = o2, e2.unescapeMd = function(e3) {
      return e3.indexOf("\\") < 0 ? e3 : e3.replace(c2, "$1");
    }, e2.unescapeAll = function(e3) {
      return e3.indexOf("\\") < 0 && e3.indexOf("&") < 0 ? e3 : e3.replace(l2, function(e4, r3, t2) {
        return r3 || function(e5, r4) {
          var t3 = 0;
          return o2(p2, r4) ? p2[r4] : 35 === r4.charCodeAt(0) && u2.test(r4) && i2(t3 = "x" === r4[1].toLowerCase() ? parseInt(r4.slice(2), 16) : parseInt(r4.slice(1), 10)) ? a2(t3) : e5;
        }(e4, t2);
      });
    }, e2.isValidEntityCode = i2, e2.fromCodePoint = a2, e2.escapeHtml = function(e3) {
      return h2.test(e3) ? e3.replace(f2, m2) : e3;
    }, e2.arrayReplaceAt = function(e3, r3, t2) {
      return [].concat(e3.slice(0, r3), t2, e3.slice(r3 + 1));
    }, e2.isSpace = function(e3) {
      switch (e3) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }, e2.isWhiteSpace = function(e3) {
      if (e3 >= 8192 && e3 <= 8202)
        return true;
      switch (e3) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }, e2.isMdAsciiPunct = function(e3) {
      switch (e3) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }, e2.isPunctChar = function(e3) {
      return _2.test(e3);
    }, e2.escapeRE = function(e3) {
      return e3.replace(g2, "\\$&");
    }, e2.normalizeReference = function(e3) {
      return e3 = e3.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (e3 = e3.replace(/ẞ/g, "ß")), e3.toLowerCase().toUpperCase();
    };
  }(r$1);
  var q$1 = {}, S$1 = r$1.unescapeAll, F$1 = r$1.unescapeAll;
  q$1.parseLinkLabel = function(e2, r2, t2) {
    var n2, s2, o2, i2, a2 = -1, c2 = e2.posMax, l2 = e2.pos;
    for (e2.pos = r2 + 1, n2 = 1; e2.pos < c2; ) {
      if (93 === (o2 = e2.src.charCodeAt(e2.pos)) && 0 === --n2) {
        s2 = true;
        break;
      }
      if (i2 = e2.pos, e2.md.inline.skipToken(e2), 91 === o2) {
        if (i2 === e2.pos - 1)
          n2++;
        else if (t2)
          return e2.pos = l2, -1;
      }
    }
    return s2 && (a2 = e2.pos), e2.pos = l2, a2;
  }, q$1.parseLinkDestination = function(e2, r2, t2) {
    var n2, s2, o2 = r2, i2 = { ok: false, pos: 0, lines: 0, str: "" };
    if (60 === e2.charCodeAt(r2)) {
      for (r2++; r2 < t2; ) {
        if (10 === (n2 = e2.charCodeAt(r2)))
          return i2;
        if (60 === n2)
          return i2;
        if (62 === n2)
          return i2.pos = r2 + 1, i2.str = S$1(e2.slice(o2 + 1, r2)), i2.ok = true, i2;
        92 === n2 && r2 + 1 < t2 ? r2 += 2 : r2++;
      }
      return i2;
    }
    for (s2 = 0; r2 < t2 && 32 !== (n2 = e2.charCodeAt(r2)) && !(n2 < 32 || 127 === n2); )
      if (92 === n2 && r2 + 1 < t2) {
        if (32 === e2.charCodeAt(r2 + 1))
          break;
        r2 += 2;
      } else {
        if (40 === n2 && ++s2 > 32)
          return i2;
        if (41 === n2) {
          if (0 === s2)
            break;
          s2--;
        }
        r2++;
      }
    return o2 === r2 || 0 !== s2 || (i2.str = S$1(e2.slice(o2, r2)), i2.lines = 0, i2.pos = r2, i2.ok = true), i2;
  }, q$1.parseLinkTitle = function(e2, r2, t2) {
    var n2, s2, o2 = 0, i2 = r2, a2 = { ok: false, pos: 0, lines: 0, str: "" };
    if (r2 >= t2)
      return a2;
    if (34 !== (s2 = e2.charCodeAt(r2)) && 39 !== s2 && 40 !== s2)
      return a2;
    for (r2++, 40 === s2 && (s2 = 41); r2 < t2; ) {
      if ((n2 = e2.charCodeAt(r2)) === s2)
        return a2.pos = r2 + 1, a2.lines = o2, a2.str = F$1(e2.slice(i2 + 1, r2)), a2.ok = true, a2;
      if (40 === n2 && 41 === s2)
        return a2;
      10 === n2 ? o2++ : 92 === n2 && r2 + 1 < t2 && (r2++, 10 === e2.charCodeAt(r2) && o2++), r2++;
    }
    return a2;
  };
  var L$1 = r$1.assign, z$1 = r$1.unescapeAll, T$1 = r$1.escapeHtml, I$1 = {};
  function M$1() {
    this.rules = L$1({}, I$1);
  }
  I$1.code_inline = function(e2, r2, t2, n2, s2) {
    var o2 = e2[r2];
    return "<code" + s2.renderAttrs(o2) + ">" + T$1(e2[r2].content) + "</code>";
  }, I$1.code_block = function(e2, r2, t2, n2, s2) {
    var o2 = e2[r2];
    return "<pre" + s2.renderAttrs(o2) + "><code>" + T$1(e2[r2].content) + "</code></pre>\n";
  }, I$1.fence = function(e2, r2, t2, n2, s2) {
    var o2, i2, a2, c2, l2, u2 = e2[r2], p2 = u2.info ? z$1(u2.info).trim() : "", h2 = "", f2 = "";
    return p2 && (h2 = (a2 = p2.split(/(\s+)/g))[0], f2 = a2.slice(2).join("")), 0 === (o2 = t2.highlight && t2.highlight(u2.content, h2, f2) || T$1(u2.content)).indexOf("<pre") ? o2 + "\n" : p2 ? (i2 = u2.attrIndex("class"), c2 = u2.attrs ? u2.attrs.slice() : [], i2 < 0 ? c2.push(["class", t2.langPrefix + h2]) : (c2[i2] = c2[i2].slice(), c2[i2][1] += " " + t2.langPrefix + h2), l2 = { attrs: c2 }, "<pre><code" + s2.renderAttrs(l2) + ">" + o2 + "</code></pre>\n") : "<pre><code" + s2.renderAttrs(u2) + ">" + o2 + "</code></pre>\n";
  }, I$1.image = function(e2, r2, t2, n2, s2) {
    var o2 = e2[r2];
    return o2.attrs[o2.attrIndex("alt")][1] = s2.renderInlineAsText(o2.children, t2, n2), s2.renderToken(e2, r2, t2);
  }, I$1.hardbreak = function(e2, r2, t2) {
    return t2.xhtmlOut ? "<br />\n" : "<br>\n";
  }, I$1.softbreak = function(e2, r2, t2) {
    return t2.breaks ? t2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  }, I$1.text = function(e2, r2) {
    return T$1(e2[r2].content);
  }, I$1.html_block = function(e2, r2) {
    return e2[r2].content;
  }, I$1.html_inline = function(e2, r2) {
    return e2[r2].content;
  }, M$1.prototype.renderAttrs = function(e2) {
    var r2, t2, n2;
    if (!e2.attrs)
      return "";
    for (n2 = "", r2 = 0, t2 = e2.attrs.length; r2 < t2; r2++)
      n2 += " " + T$1(e2.attrs[r2][0]) + '="' + T$1(e2.attrs[r2][1]) + '"';
    return n2;
  }, M$1.prototype.renderToken = function(e2, r2, t2) {
    var n2, s2 = "", o2 = false, i2 = e2[r2];
    return i2.hidden ? "" : (i2.block && -1 !== i2.nesting && r2 && e2[r2 - 1].hidden && (s2 += "\n"), s2 += (-1 === i2.nesting ? "</" : "<") + i2.tag, s2 += this.renderAttrs(i2), 0 === i2.nesting && t2.xhtmlOut && (s2 += " /"), i2.block && (o2 = true, 1 === i2.nesting && r2 + 1 < e2.length && ("inline" === (n2 = e2[r2 + 1]).type || n2.hidden || -1 === n2.nesting && n2.tag === i2.tag) && (o2 = false)), s2 += o2 ? ">\n" : ">");
  }, M$1.prototype.renderInline = function(e2, r2, t2) {
    for (var n2, s2 = "", o2 = this.rules, i2 = 0, a2 = e2.length; i2 < a2; i2++)
      void 0 !== o2[n2 = e2[i2].type] ? s2 += o2[n2](e2, i2, r2, t2, this) : s2 += this.renderToken(e2, i2, r2);
    return s2;
  }, M$1.prototype.renderInlineAsText = function(e2, r2, t2) {
    for (var n2 = "", s2 = 0, o2 = e2.length; s2 < o2; s2++)
      "text" === e2[s2].type ? n2 += e2[s2].content : "image" === e2[s2].type ? n2 += this.renderInlineAsText(e2[s2].children, r2, t2) : "softbreak" === e2[s2].type && (n2 += "\n");
    return n2;
  }, M$1.prototype.render = function(e2, r2, t2) {
    var n2, s2, o2, i2 = "", a2 = this.rules;
    for (n2 = 0, s2 = e2.length; n2 < s2; n2++)
      "inline" === (o2 = e2[n2].type) ? i2 += this.renderInline(e2[n2].children, r2, t2) : void 0 !== a2[o2] ? i2 += a2[e2[n2].type](e2, n2, r2, t2, this) : i2 += this.renderToken(e2, n2, r2, t2);
    return i2;
  };
  var R$1 = M$1;
  function B$1() {
    this.__rules__ = [], this.__cache__ = null;
  }
  B$1.prototype.__find__ = function(e2) {
    for (var r2 = 0; r2 < this.__rules__.length; r2++)
      if (this.__rules__[r2].name === e2)
        return r2;
    return -1;
  }, B$1.prototype.__compile__ = function() {
    var e2 = this, r2 = [""];
    e2.__rules__.forEach(function(e3) {
      e3.enabled && e3.alt.forEach(function(e4) {
        r2.indexOf(e4) < 0 && r2.push(e4);
      });
    }), e2.__cache__ = {}, r2.forEach(function(r3) {
      e2.__cache__[r3] = [], e2.__rules__.forEach(function(t2) {
        t2.enabled && (r3 && t2.alt.indexOf(r3) < 0 || e2.__cache__[r3].push(t2.fn));
      });
    });
  }, B$1.prototype.at = function(e2, r2, t2) {
    var n2 = this.__find__(e2), s2 = t2 || {};
    if (-1 === n2)
      throw new Error("Parser rule not found: " + e2);
    this.__rules__[n2].fn = r2, this.__rules__[n2].alt = s2.alt || [], this.__cache__ = null;
  }, B$1.prototype.before = function(e2, r2, t2, n2) {
    var s2 = this.__find__(e2), o2 = n2 || {};
    if (-1 === s2)
      throw new Error("Parser rule not found: " + e2);
    this.__rules__.splice(s2, 0, { name: r2, enabled: true, fn: t2, alt: o2.alt || [] }), this.__cache__ = null;
  }, B$1.prototype.after = function(e2, r2, t2, n2) {
    var s2 = this.__find__(e2), o2 = n2 || {};
    if (-1 === s2)
      throw new Error("Parser rule not found: " + e2);
    this.__rules__.splice(s2 + 1, 0, { name: r2, enabled: true, fn: t2, alt: o2.alt || [] }), this.__cache__ = null;
  }, B$1.prototype.push = function(e2, r2, t2) {
    var n2 = t2 || {};
    this.__rules__.push({ name: e2, enabled: true, fn: r2, alt: n2.alt || [] }), this.__cache__ = null;
  }, B$1.prototype.enable = function(e2, r2) {
    Array.isArray(e2) || (e2 = [e2]);
    var t2 = [];
    return e2.forEach(function(e3) {
      var n2 = this.__find__(e3);
      if (n2 < 0) {
        if (r2)
          return;
        throw new Error("Rules manager: invalid rule name " + e3);
      }
      this.__rules__[n2].enabled = true, t2.push(e3);
    }, this), this.__cache__ = null, t2;
  }, B$1.prototype.enableOnly = function(e2, r2) {
    Array.isArray(e2) || (e2 = [e2]), this.__rules__.forEach(function(e3) {
      e3.enabled = false;
    }), this.enable(e2, r2);
  }, B$1.prototype.disable = function(e2, r2) {
    Array.isArray(e2) || (e2 = [e2]);
    var t2 = [];
    return e2.forEach(function(e3) {
      var n2 = this.__find__(e3);
      if (n2 < 0) {
        if (r2)
          return;
        throw new Error("Rules manager: invalid rule name " + e3);
      }
      this.__rules__[n2].enabled = false, t2.push(e3);
    }, this), this.__cache__ = null, t2;
  }, B$1.prototype.getRules = function(e2) {
    return null === this.__cache__ && this.__compile__(), this.__cache__[e2] || [];
  };
  var N$1 = B$1, O$1 = /\r\n?|\n/g, P$1 = /\0/g, j$1 = r$1.arrayReplaceAt;
  function U$1(e2) {
    return /^<\/a\s*>/i.test(e2);
  }
  var V$1 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Z$1 = /\((c|tm|r)\)/i, $$1 = /\((c|tm|r)\)/gi, G$1 = { c: "©", r: "®", tm: "™" };
  function H$1(e2, r2) {
    return G$1[r2.toLowerCase()];
  }
  function J$1(e2) {
    var r2, t2, n2 = 0;
    for (r2 = e2.length - 1; r2 >= 0; r2--)
      "text" !== (t2 = e2[r2]).type || n2 || (t2.content = t2.content.replace($$1, H$1)), "link_open" === t2.type && "auto" === t2.info && n2--, "link_close" === t2.type && "auto" === t2.info && n2++;
  }
  function W$1(e2) {
    var r2, t2, n2 = 0;
    for (r2 = e2.length - 1; r2 >= 0; r2--)
      "text" !== (t2 = e2[r2]).type || n2 || V$1.test(t2.content) && (t2.content = t2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), "link_open" === t2.type && "auto" === t2.info && n2--, "link_close" === t2.type && "auto" === t2.info && n2++;
  }
  var Y$1 = r$1.isWhiteSpace, K$1 = r$1.isPunctChar, Q$1 = r$1.isMdAsciiPunct, X$1 = /['"]/, ee$1 = /['"]/g;
  function re$1(e2, r2, t2) {
    return e2.slice(0, r2) + t2 + e2.slice(r2 + 1);
  }
  function te$1(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2, v2, C2, y2;
    for (v2 = [], t2 = 0; t2 < e2.length; t2++) {
      for (n2 = e2[t2], c2 = e2[t2].level, k2 = v2.length - 1; k2 >= 0 && !(v2[k2].level <= c2); k2--)
        ;
      if (v2.length = k2 + 1, "text" === n2.type) {
        i2 = 0, a2 = (s2 = n2.content).length;
        e:
          for (; i2 < a2 && (ee$1.lastIndex = i2, o2 = ee$1.exec(s2)); ) {
            if (g2 = _2 = true, i2 = o2.index + 1, b2 = "'" === o2[0], u2 = 32, o2.index - 1 >= 0)
              u2 = s2.charCodeAt(o2.index - 1);
            else
              for (k2 = t2 - 1; k2 >= 0 && ("softbreak" !== e2[k2].type && "hardbreak" !== e2[k2].type); k2--)
                if (e2[k2].content) {
                  u2 = e2[k2].content.charCodeAt(e2[k2].content.length - 1);
                  break;
                }
            if (p2 = 32, i2 < a2)
              p2 = s2.charCodeAt(i2);
            else
              for (k2 = t2 + 1; k2 < e2.length && ("softbreak" !== e2[k2].type && "hardbreak" !== e2[k2].type); k2++)
                if (e2[k2].content) {
                  p2 = e2[k2].content.charCodeAt(0);
                  break;
                }
            if (h2 = Q$1(u2) || K$1(String.fromCharCode(u2)), f2 = Q$1(p2) || K$1(String.fromCharCode(p2)), d2 = Y$1(u2), (m2 = Y$1(p2)) ? g2 = false : f2 && (d2 || h2 || (g2 = false)), d2 ? _2 = false : h2 && (m2 || f2 || (_2 = false)), 34 === p2 && '"' === o2[0] && u2 >= 48 && u2 <= 57 && (_2 = g2 = false), g2 && _2 && (g2 = h2, _2 = f2), g2 || _2) {
              if (_2) {
                for (k2 = v2.length - 1; k2 >= 0 && (l2 = v2[k2], !(v2[k2].level < c2)); k2--)
                  if (l2.single === b2 && v2[k2].level === c2) {
                    l2 = v2[k2], b2 ? (C2 = r2.md.options.quotes[2], y2 = r2.md.options.quotes[3]) : (C2 = r2.md.options.quotes[0], y2 = r2.md.options.quotes[1]), n2.content = re$1(n2.content, o2.index, y2), e2[l2.token].content = re$1(e2[l2.token].content, l2.pos, C2), i2 += y2.length - 1, l2.token === t2 && (i2 += C2.length - 1), a2 = (s2 = n2.content).length, v2.length = k2;
                    continue e;
                  }
              }
              g2 ? v2.push({ token: t2, pos: o2.index, single: b2, level: c2 }) : _2 && b2 && (n2.content = re$1(n2.content, o2.index, "’"));
            } else
              b2 && (n2.content = re$1(n2.content, o2.index, "’"));
          }
      }
    }
  }
  function ne$1(e2, r2, t2) {
    this.type = e2, this.tag = r2, this.attrs = null, this.map = null, this.nesting = t2, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
  }
  ne$1.prototype.attrIndex = function(e2) {
    var r2, t2, n2;
    if (!this.attrs)
      return -1;
    for (t2 = 0, n2 = (r2 = this.attrs).length; t2 < n2; t2++)
      if (r2[t2][0] === e2)
        return t2;
    return -1;
  }, ne$1.prototype.attrPush = function(e2) {
    this.attrs ? this.attrs.push(e2) : this.attrs = [e2];
  }, ne$1.prototype.attrSet = function(e2, r2) {
    var t2 = this.attrIndex(e2), n2 = [e2, r2];
    t2 < 0 ? this.attrPush(n2) : this.attrs[t2] = n2;
  }, ne$1.prototype.attrGet = function(e2) {
    var r2 = this.attrIndex(e2), t2 = null;
    return r2 >= 0 && (t2 = this.attrs[r2][1]), t2;
  }, ne$1.prototype.attrJoin = function(e2, r2) {
    var t2 = this.attrIndex(e2);
    t2 < 0 ? this.attrPush([e2, r2]) : this.attrs[t2][1] = this.attrs[t2][1] + " " + r2;
  };
  var se$1 = ne$1, oe$1 = se$1;
  function ie$1(e2, r2, t2) {
    this.src = e2, this.env = t2, this.tokens = [], this.inlineMode = false, this.md = r2;
  }
  ie$1.prototype.Token = oe$1;
  var ae$1 = ie$1, ce$1 = N$1, le$1 = [["normalize", function(e2) {
    var r2;
    r2 = (r2 = e2.src.replace(O$1, "\n")).replace(P$1, "�"), e2.src = r2;
  }], ["block", function(e2) {
    var r2;
    e2.inlineMode ? ((r2 = new e2.Token("inline", "", 0)).content = e2.src, r2.map = [0, 1], r2.children = [], e2.tokens.push(r2)) : e2.md.block.parse(e2.src, e2.md, e2.env, e2.tokens);
  }], ["inline", function(e2) {
    var r2, t2, n2, s2 = e2.tokens;
    for (t2 = 0, n2 = s2.length; t2 < n2; t2++)
      "inline" === (r2 = s2[t2]).type && e2.md.inline.parse(r2.content, e2.md, e2.env, r2.children);
  }], ["linkify", function(e2) {
    var r2, t2, n2, s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2 = e2.tokens;
    if (e2.md.options.linkify) {
      for (t2 = 0, n2 = b2.length; t2 < n2; t2++)
        if ("inline" === b2[t2].type && e2.md.linkify.pretest(b2[t2].content))
          for (f2 = 0, r2 = (s2 = b2[t2].children).length - 1; r2 >= 0; r2--)
            if ("link_close" !== (i2 = s2[r2]).type) {
              if ("html_inline" === i2.type && (k2 = i2.content, /^<a[>\s]/i.test(k2) && f2 > 0 && f2--, U$1(i2.content) && f2++), !(f2 > 0) && "text" === i2.type && e2.md.linkify.test(i2.content)) {
                for (l2 = i2.content, _2 = e2.md.linkify.match(l2), a2 = [], h2 = i2.level, p2 = 0, _2.length > 0 && 0 === _2[0].index && r2 > 0 && "text_special" === s2[r2 - 1].type && (_2 = _2.slice(1)), c2 = 0; c2 < _2.length; c2++)
                  d2 = _2[c2].url, m2 = e2.md.normalizeLink(d2), e2.md.validateLink(m2) && (g2 = _2[c2].text, g2 = _2[c2].schema ? "mailto:" !== _2[c2].schema || /^mailto:/i.test(g2) ? e2.md.normalizeLinkText(g2) : e2.md.normalizeLinkText("mailto:" + g2).replace(/^mailto:/, "") : e2.md.normalizeLinkText("http://" + g2).replace(/^http:\/\//, ""), (u2 = _2[c2].index) > p2 && ((o2 = new e2.Token("text", "", 0)).content = l2.slice(p2, u2), o2.level = h2, a2.push(o2)), (o2 = new e2.Token("link_open", "a", 1)).attrs = [["href", m2]], o2.level = h2++, o2.markup = "linkify", o2.info = "auto", a2.push(o2), (o2 = new e2.Token("text", "", 0)).content = g2, o2.level = h2, a2.push(o2), (o2 = new e2.Token("link_close", "a", -1)).level = --h2, o2.markup = "linkify", o2.info = "auto", a2.push(o2), p2 = _2[c2].lastIndex);
                p2 < l2.length && ((o2 = new e2.Token("text", "", 0)).content = l2.slice(p2), o2.level = h2, a2.push(o2)), b2[t2].children = s2 = j$1(s2, r2, a2);
              }
            } else
              for (r2--; s2[r2].level !== i2.level && "link_open" !== s2[r2].type; )
                r2--;
    }
  }], ["replacements", function(e2) {
    var r2;
    if (e2.md.options.typographer)
      for (r2 = e2.tokens.length - 1; r2 >= 0; r2--)
        "inline" === e2.tokens[r2].type && (Z$1.test(e2.tokens[r2].content) && J$1(e2.tokens[r2].children), V$1.test(e2.tokens[r2].content) && W$1(e2.tokens[r2].children));
  }], ["smartquotes", function(e2) {
    var r2;
    if (e2.md.options.typographer)
      for (r2 = e2.tokens.length - 1; r2 >= 0; r2--)
        "inline" === e2.tokens[r2].type && X$1.test(e2.tokens[r2].content) && te$1(e2.tokens[r2].children, e2);
  }], ["text_join", function(e2) {
    var r2, t2, n2, s2, o2, i2, a2 = e2.tokens;
    for (r2 = 0, t2 = a2.length; r2 < t2; r2++)
      if ("inline" === a2[r2].type) {
        for (o2 = (n2 = a2[r2].children).length, s2 = 0; s2 < o2; s2++)
          "text_special" === n2[s2].type && (n2[s2].type = "text");
        for (s2 = i2 = 0; s2 < o2; s2++)
          "text" === n2[s2].type && s2 + 1 < o2 && "text" === n2[s2 + 1].type ? n2[s2 + 1].content = n2[s2].content + n2[s2 + 1].content : (s2 !== i2 && (n2[i2] = n2[s2]), i2++);
        s2 !== i2 && (n2.length = i2);
      }
  }]];
  function ue$1() {
    this.ruler = new ce$1();
    for (var e2 = 0; e2 < le$1.length; e2++)
      this.ruler.push(le$1[e2][0], le$1[e2][1]);
  }
  ue$1.prototype.process = function(e2) {
    var r2, t2, n2;
    for (r2 = 0, t2 = (n2 = this.ruler.getRules("")).length; r2 < t2; r2++)
      n2[r2](e2);
  }, ue$1.prototype.State = ae$1;
  var pe$1 = ue$1, he$1 = r$1.isSpace;
  function fe$1(e2, r2) {
    var t2 = e2.bMarks[r2] + e2.tShift[r2], n2 = e2.eMarks[r2];
    return e2.src.slice(t2, n2);
  }
  function de$1(e2) {
    var r2, t2 = [], n2 = 0, s2 = e2.length, o2 = false, i2 = 0, a2 = "";
    for (r2 = e2.charCodeAt(n2); n2 < s2; )
      124 === r2 && (o2 ? (a2 += e2.substring(i2, n2 - 1), i2 = n2) : (t2.push(a2 + e2.substring(i2, n2)), a2 = "", i2 = n2 + 1)), o2 = 92 === r2, n2++, r2 = e2.charCodeAt(n2);
    return t2.push(a2 + e2.substring(i2)), t2;
  }
  var me$1 = r$1.isSpace, ge$1 = r$1.isSpace, _e$1 = r$1.isSpace;
  function ke$1(e2, r2) {
    var t2, n2, s2, o2;
    return n2 = e2.bMarks[r2] + e2.tShift[r2], s2 = e2.eMarks[r2], 42 !== (t2 = e2.src.charCodeAt(n2++)) && 45 !== t2 && 43 !== t2 || n2 < s2 && (o2 = e2.src.charCodeAt(n2), !_e$1(o2)) ? -1 : n2;
  }
  function be$1(e2, r2) {
    var t2, n2 = e2.bMarks[r2] + e2.tShift[r2], s2 = n2, o2 = e2.eMarks[r2];
    if (s2 + 1 >= o2)
      return -1;
    if ((t2 = e2.src.charCodeAt(s2++)) < 48 || t2 > 57)
      return -1;
    for (; ; ) {
      if (s2 >= o2)
        return -1;
      if (!((t2 = e2.src.charCodeAt(s2++)) >= 48 && t2 <= 57)) {
        if (41 === t2 || 46 === t2)
          break;
        return -1;
      }
      if (s2 - n2 >= 10)
        return -1;
    }
    return s2 < o2 && (t2 = e2.src.charCodeAt(s2), !_e$1(t2)) ? -1 : s2;
  }
  var ve$1 = r$1.normalizeReference, Ce$1 = r$1.isSpace, ye$1 = {}, Ae$1 = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, xe$1 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", De$1 = new RegExp("^(?:" + Ae$1 + "|" + xe$1 + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), we$1 = new RegExp("^(?:" + Ae$1 + "|" + xe$1 + ")");
  ye$1.HTML_TAG_RE = De$1, ye$1.HTML_OPEN_CLOSE_TAG_RE = we$1;
  var Ee$1 = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], qe = ye$1.HTML_OPEN_CLOSE_TAG_RE, Se$1 = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + Ee$1.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(qe.source + "\\s*$"), /^$/, false]], Fe = r$1.isSpace, Le$1 = se$1, ze = r$1.isSpace;
  function Te$1(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2;
    for (this.src = e2, this.md = r2, this.env = t2, this.tokens = n2, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", p2 = false, i2 = a2 = l2 = u2 = 0, c2 = (o2 = this.src).length; a2 < c2; a2++) {
      if (s2 = o2.charCodeAt(a2), !p2) {
        if (ze(s2)) {
          l2++, 9 === s2 ? u2 += 4 - u2 % 4 : u2++;
          continue;
        }
        p2 = true;
      }
      10 !== s2 && a2 !== c2 - 1 || (10 !== s2 && a2++, this.bMarks.push(i2), this.eMarks.push(a2), this.tShift.push(l2), this.sCount.push(u2), this.bsCount.push(0), p2 = false, l2 = 0, u2 = 0, i2 = a2 + 1);
    }
    this.bMarks.push(o2.length), this.eMarks.push(o2.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  Te$1.prototype.push = function(e2, r2, t2) {
    var n2 = new Le$1(e2, r2, t2);
    return n2.block = true, t2 < 0 && this.level--, n2.level = this.level, t2 > 0 && this.level++, this.tokens.push(n2), n2;
  }, Te$1.prototype.isEmpty = function(e2) {
    return this.bMarks[e2] + this.tShift[e2] >= this.eMarks[e2];
  }, Te$1.prototype.skipEmptyLines = function(e2) {
    for (var r2 = this.lineMax; e2 < r2 && !(this.bMarks[e2] + this.tShift[e2] < this.eMarks[e2]); e2++)
      ;
    return e2;
  }, Te$1.prototype.skipSpaces = function(e2) {
    for (var r2, t2 = this.src.length; e2 < t2 && (r2 = this.src.charCodeAt(e2), ze(r2)); e2++)
      ;
    return e2;
  }, Te$1.prototype.skipSpacesBack = function(e2, r2) {
    if (e2 <= r2)
      return e2;
    for (; e2 > r2; )
      if (!ze(this.src.charCodeAt(--e2)))
        return e2 + 1;
    return e2;
  }, Te$1.prototype.skipChars = function(e2, r2) {
    for (var t2 = this.src.length; e2 < t2 && this.src.charCodeAt(e2) === r2; e2++)
      ;
    return e2;
  }, Te$1.prototype.skipCharsBack = function(e2, r2, t2) {
    if (e2 <= t2)
      return e2;
    for (; e2 > t2; )
      if (r2 !== this.src.charCodeAt(--e2))
        return e2 + 1;
    return e2;
  }, Te$1.prototype.getLines = function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2 = e2;
    if (e2 >= r2)
      return "";
    for (l2 = new Array(r2 - e2), s2 = 0; p2 < r2; p2++, s2++) {
      for (o2 = 0, u2 = a2 = this.bMarks[p2], c2 = p2 + 1 < r2 || n2 ? this.eMarks[p2] + 1 : this.eMarks[p2]; a2 < c2 && o2 < t2; ) {
        if (i2 = this.src.charCodeAt(a2), ze(i2))
          9 === i2 ? o2 += 4 - (o2 + this.bsCount[p2]) % 4 : o2++;
        else {
          if (!(a2 - u2 < this.tShift[p2]))
            break;
          o2++;
        }
        a2++;
      }
      l2[s2] = o2 > t2 ? new Array(o2 - t2 + 1).join(" ") + this.src.slice(a2, c2) : this.src.slice(a2, c2);
    }
    return l2.join("");
  }, Te$1.prototype.Token = Le$1;
  var Ie$1 = Te$1, Me$1 = N$1, Re$1 = [["table", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2, v2, C2;
    if (r2 + 2 > t2)
      return false;
    if (l2 = r2 + 1, e2.sCount[l2] < e2.blkIndent)
      return false;
    if (e2.sCount[l2] - e2.blkIndent >= 4)
      return false;
    if ((i2 = e2.bMarks[l2] + e2.tShift[l2]) >= e2.eMarks[l2])
      return false;
    if (124 !== (v2 = e2.src.charCodeAt(i2++)) && 45 !== v2 && 58 !== v2)
      return false;
    if (i2 >= e2.eMarks[l2])
      return false;
    if (124 !== (C2 = e2.src.charCodeAt(i2++)) && 45 !== C2 && 58 !== C2 && !he$1(C2))
      return false;
    if (45 === v2 && he$1(C2))
      return false;
    for (; i2 < e2.eMarks[l2]; ) {
      if (124 !== (s2 = e2.src.charCodeAt(i2)) && 45 !== s2 && 58 !== s2 && !he$1(s2))
        return false;
      i2++;
    }
    for (u2 = (o2 = fe$1(e2, r2 + 1)).split("|"), f2 = [], a2 = 0; a2 < u2.length; a2++) {
      if (!(d2 = u2[a2].trim())) {
        if (0 === a2 || a2 === u2.length - 1)
          continue;
        return false;
      }
      if (!/^:?-+:?$/.test(d2))
        return false;
      58 === d2.charCodeAt(d2.length - 1) ? f2.push(58 === d2.charCodeAt(0) ? "center" : "right") : 58 === d2.charCodeAt(0) ? f2.push("left") : f2.push("");
    }
    if (-1 === (o2 = fe$1(e2, r2).trim()).indexOf("|"))
      return false;
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if ((u2 = de$1(o2)).length && "" === u2[0] && u2.shift(), u2.length && "" === u2[u2.length - 1] && u2.pop(), 0 === (p2 = u2.length) || p2 !== f2.length)
      return false;
    if (n2)
      return true;
    for (_2 = e2.parentType, e2.parentType = "table", b2 = e2.md.block.ruler.getRules("blockquote"), (h2 = e2.push("table_open", "table", 1)).map = m2 = [r2, 0], (h2 = e2.push("thead_open", "thead", 1)).map = [r2, r2 + 1], (h2 = e2.push("tr_open", "tr", 1)).map = [r2, r2 + 1], a2 = 0; a2 < u2.length; a2++)
      h2 = e2.push("th_open", "th", 1), f2[a2] && (h2.attrs = [["style", "text-align:" + f2[a2]]]), (h2 = e2.push("inline", "", 0)).content = u2[a2].trim(), h2.children = [], h2 = e2.push("th_close", "th", -1);
    for (h2 = e2.push("tr_close", "tr", -1), h2 = e2.push("thead_close", "thead", -1), l2 = r2 + 2; l2 < t2 && !(e2.sCount[l2] < e2.blkIndent); l2++) {
      for (k2 = false, a2 = 0, c2 = b2.length; a2 < c2; a2++)
        if (b2[a2](e2, l2, t2, true)) {
          k2 = true;
          break;
        }
      if (k2)
        break;
      if (!(o2 = fe$1(e2, l2).trim()))
        break;
      if (e2.sCount[l2] - e2.blkIndent >= 4)
        break;
      for ((u2 = de$1(o2)).length && "" === u2[0] && u2.shift(), u2.length && "" === u2[u2.length - 1] && u2.pop(), l2 === r2 + 2 && ((h2 = e2.push("tbody_open", "tbody", 1)).map = g2 = [r2 + 2, 0]), (h2 = e2.push("tr_open", "tr", 1)).map = [l2, l2 + 1], a2 = 0; a2 < p2; a2++)
        h2 = e2.push("td_open", "td", 1), f2[a2] && (h2.attrs = [["style", "text-align:" + f2[a2]]]), (h2 = e2.push("inline", "", 0)).content = u2[a2] ? u2[a2].trim() : "", h2.children = [], h2 = e2.push("td_close", "td", -1);
      h2 = e2.push("tr_close", "tr", -1);
    }
    return g2 && (h2 = e2.push("tbody_close", "tbody", -1), g2[1] = l2), h2 = e2.push("table_close", "table", -1), m2[1] = l2, e2.parentType = _2, e2.line = l2, true;
  }, ["paragraph", "reference"]], ["code", function(e2, r2, t2) {
    var n2, s2, o2;
    if (e2.sCount[r2] - e2.blkIndent < 4)
      return false;
    for (s2 = n2 = r2 + 1; n2 < t2; )
      if (e2.isEmpty(n2))
        n2++;
      else {
        if (!(e2.sCount[n2] - e2.blkIndent >= 4))
          break;
        s2 = ++n2;
      }
    return e2.line = s2, (o2 = e2.push("code_block", "code", 0)).content = e2.getLines(r2, s2, 4 + e2.blkIndent, false) + "\n", o2.map = [r2, e2.line], true;
  }], ["fence", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2 = false, h2 = e2.bMarks[r2] + e2.tShift[r2], f2 = e2.eMarks[r2];
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (h2 + 3 > f2)
      return false;
    if (126 !== (s2 = e2.src.charCodeAt(h2)) && 96 !== s2)
      return false;
    if (c2 = h2, (o2 = (h2 = e2.skipChars(h2, s2)) - c2) < 3)
      return false;
    if (u2 = e2.src.slice(c2, h2), i2 = e2.src.slice(h2, f2), 96 === s2 && i2.indexOf(String.fromCharCode(s2)) >= 0)
      return false;
    if (n2)
      return true;
    for (a2 = r2; !(++a2 >= t2) && !((h2 = c2 = e2.bMarks[a2] + e2.tShift[a2]) < (f2 = e2.eMarks[a2]) && e2.sCount[a2] < e2.blkIndent); )
      if (e2.src.charCodeAt(h2) === s2 && !(e2.sCount[a2] - e2.blkIndent >= 4 || (h2 = e2.skipChars(h2, s2)) - c2 < o2 || (h2 = e2.skipSpaces(h2)) < f2)) {
        p2 = true;
        break;
      }
    return o2 = e2.sCount[r2], e2.line = a2 + (p2 ? 1 : 0), (l2 = e2.push("fence", "code", 0)).info = i2, l2.content = e2.getLines(r2 + 1, a2, o2, true), l2.markup = u2, l2.map = [r2, e2.line], true;
  }, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2, v2, C2, y2, A2, x2 = e2.lineMax, D2 = e2.bMarks[r2] + e2.tShift[r2], w2 = e2.eMarks[r2];
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (62 !== e2.src.charCodeAt(D2++))
      return false;
    if (n2)
      return true;
    for (a2 = h2 = e2.sCount[r2] + 1, 32 === e2.src.charCodeAt(D2) ? (D2++, a2++, h2++, s2 = false, b2 = true) : 9 === e2.src.charCodeAt(D2) ? (b2 = true, (e2.bsCount[r2] + h2) % 4 == 3 ? (D2++, a2++, h2++, s2 = false) : s2 = true) : b2 = false, f2 = [e2.bMarks[r2]], e2.bMarks[r2] = D2; D2 < w2 && (o2 = e2.src.charCodeAt(D2), me$1(o2)); )
      9 === o2 ? h2 += 4 - (h2 + e2.bsCount[r2] + (s2 ? 1 : 0)) % 4 : h2++, D2++;
    for (d2 = [e2.bsCount[r2]], e2.bsCount[r2] = e2.sCount[r2] + 1 + (b2 ? 1 : 0), l2 = D2 >= w2, _2 = [e2.sCount[r2]], e2.sCount[r2] = h2 - a2, k2 = [e2.tShift[r2]], e2.tShift[r2] = D2 - e2.bMarks[r2], C2 = e2.md.block.ruler.getRules("blockquote"), g2 = e2.parentType, e2.parentType = "blockquote", p2 = r2 + 1; p2 < t2 && (A2 = e2.sCount[p2] < e2.blkIndent, !((D2 = e2.bMarks[p2] + e2.tShift[p2]) >= (w2 = e2.eMarks[p2]))); p2++)
      if (62 !== e2.src.charCodeAt(D2++) || A2) {
        if (l2)
          break;
        for (v2 = false, i2 = 0, c2 = C2.length; i2 < c2; i2++)
          if (C2[i2](e2, p2, t2, true)) {
            v2 = true;
            break;
          }
        if (v2) {
          e2.lineMax = p2, 0 !== e2.blkIndent && (f2.push(e2.bMarks[p2]), d2.push(e2.bsCount[p2]), k2.push(e2.tShift[p2]), _2.push(e2.sCount[p2]), e2.sCount[p2] -= e2.blkIndent);
          break;
        }
        f2.push(e2.bMarks[p2]), d2.push(e2.bsCount[p2]), k2.push(e2.tShift[p2]), _2.push(e2.sCount[p2]), e2.sCount[p2] = -1;
      } else {
        for (a2 = h2 = e2.sCount[p2] + 1, 32 === e2.src.charCodeAt(D2) ? (D2++, a2++, h2++, s2 = false, b2 = true) : 9 === e2.src.charCodeAt(D2) ? (b2 = true, (e2.bsCount[p2] + h2) % 4 == 3 ? (D2++, a2++, h2++, s2 = false) : s2 = true) : b2 = false, f2.push(e2.bMarks[p2]), e2.bMarks[p2] = D2; D2 < w2 && (o2 = e2.src.charCodeAt(D2), me$1(o2)); )
          9 === o2 ? h2 += 4 - (h2 + e2.bsCount[p2] + (s2 ? 1 : 0)) % 4 : h2++, D2++;
        l2 = D2 >= w2, d2.push(e2.bsCount[p2]), e2.bsCount[p2] = e2.sCount[p2] + 1 + (b2 ? 1 : 0), _2.push(e2.sCount[p2]), e2.sCount[p2] = h2 - a2, k2.push(e2.tShift[p2]), e2.tShift[p2] = D2 - e2.bMarks[p2];
      }
    for (m2 = e2.blkIndent, e2.blkIndent = 0, (y2 = e2.push("blockquote_open", "blockquote", 1)).markup = ">", y2.map = u2 = [r2, 0], e2.md.block.tokenize(e2, r2, p2), (y2 = e2.push("blockquote_close", "blockquote", -1)).markup = ">", e2.lineMax = x2, e2.parentType = g2, u2[1] = e2.line, i2 = 0; i2 < k2.length; i2++)
      e2.bMarks[i2 + r2] = f2[i2], e2.tShift[i2 + r2] = k2[i2], e2.sCount[i2 + r2] = _2[i2], e2.bsCount[i2 + r2] = d2[i2];
    return e2.blkIndent = m2, true;
  }, ["paragraph", "reference", "blockquote", "list"]], ["hr", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2 = e2.bMarks[r2] + e2.tShift[r2], l2 = e2.eMarks[r2];
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (42 !== (s2 = e2.src.charCodeAt(c2++)) && 45 !== s2 && 95 !== s2)
      return false;
    for (o2 = 1; c2 < l2; ) {
      if ((i2 = e2.src.charCodeAt(c2++)) !== s2 && !ge$1(i2))
        return false;
      i2 === s2 && o2++;
    }
    return !(o2 < 3) && (n2 || (e2.line = r2 + 1, (a2 = e2.push("hr", "hr", 0)).map = [r2, e2.line], a2.markup = Array(o2 + 1).join(String.fromCharCode(s2))), true);
  }, ["paragraph", "reference", "blockquote", "list"]], ["list", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2, v2, C2, y2, A2, x2, D2, w2, E2, q2, S2, F2, L2, z2 = false, T2 = true;
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (e2.listIndent >= 0 && e2.sCount[r2] - e2.listIndent >= 4 && e2.sCount[r2] < e2.blkIndent)
      return false;
    if (n2 && "paragraph" === e2.parentType && e2.sCount[r2] >= e2.blkIndent && (z2 = true), (w2 = be$1(e2, r2)) >= 0) {
      if (u2 = true, q2 = e2.bMarks[r2] + e2.tShift[r2], g2 = Number(e2.src.slice(q2, w2 - 1)), z2 && 1 !== g2)
        return false;
    } else {
      if (!((w2 = ke$1(e2, r2)) >= 0))
        return false;
      u2 = false;
    }
    if (z2 && e2.skipSpaces(w2) >= e2.eMarks[r2])
      return false;
    if (m2 = e2.src.charCodeAt(w2 - 1), n2)
      return true;
    for (d2 = e2.tokens.length, u2 ? (L2 = e2.push("ordered_list_open", "ol", 1), 1 !== g2 && (L2.attrs = [["start", g2]])) : L2 = e2.push("bullet_list_open", "ul", 1), L2.map = f2 = [r2, 0], L2.markup = String.fromCharCode(m2), k2 = r2, E2 = false, F2 = e2.md.block.ruler.getRules("list"), C2 = e2.parentType, e2.parentType = "list"; k2 < t2; ) {
      for (D2 = w2, _2 = e2.eMarks[k2], l2 = b2 = e2.sCount[k2] + w2 - (e2.bMarks[r2] + e2.tShift[r2]); D2 < _2; ) {
        if (9 === (s2 = e2.src.charCodeAt(D2)))
          b2 += 4 - (b2 + e2.bsCount[k2]) % 4;
        else {
          if (32 !== s2)
            break;
          b2++;
        }
        D2++;
      }
      if ((c2 = (o2 = D2) >= _2 ? 1 : b2 - l2) > 4 && (c2 = 1), a2 = l2 + c2, (L2 = e2.push("list_item_open", "li", 1)).markup = String.fromCharCode(m2), L2.map = p2 = [r2, 0], u2 && (L2.info = e2.src.slice(q2, w2 - 1)), x2 = e2.tight, A2 = e2.tShift[r2], y2 = e2.sCount[r2], v2 = e2.listIndent, e2.listIndent = e2.blkIndent, e2.blkIndent = a2, e2.tight = true, e2.tShift[r2] = o2 - e2.bMarks[r2], e2.sCount[r2] = b2, o2 >= _2 && e2.isEmpty(r2 + 1) ? e2.line = Math.min(e2.line + 2, t2) : e2.md.block.tokenize(e2, r2, t2, true), e2.tight && !E2 || (T2 = false), E2 = e2.line - r2 > 1 && e2.isEmpty(e2.line - 1), e2.blkIndent = e2.listIndent, e2.listIndent = v2, e2.tShift[r2] = A2, e2.sCount[r2] = y2, e2.tight = x2, (L2 = e2.push("list_item_close", "li", -1)).markup = String.fromCharCode(m2), k2 = r2 = e2.line, p2[1] = k2, o2 = e2.bMarks[r2], k2 >= t2)
        break;
      if (e2.sCount[k2] < e2.blkIndent)
        break;
      if (e2.sCount[r2] - e2.blkIndent >= 4)
        break;
      for (S2 = false, i2 = 0, h2 = F2.length; i2 < h2; i2++)
        if (F2[i2](e2, k2, t2, true)) {
          S2 = true;
          break;
        }
      if (S2)
        break;
      if (u2) {
        if ((w2 = be$1(e2, k2)) < 0)
          break;
        q2 = e2.bMarks[k2] + e2.tShift[k2];
      } else if ((w2 = ke$1(e2, k2)) < 0)
        break;
      if (m2 !== e2.src.charCodeAt(w2 - 1))
        break;
    }
    return (L2 = u2 ? e2.push("ordered_list_close", "ol", -1) : e2.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(m2), f2[1] = k2, e2.line = k2, e2.parentType = C2, T2 && function(e3, r3) {
      var t3, n3, s3 = e3.level + 2;
      for (t3 = r3 + 2, n3 = e3.tokens.length - 2; t3 < n3; t3++)
        e3.tokens[t3].level === s3 && "paragraph_open" === e3.tokens[t3].type && (e3.tokens[t3 + 2].hidden = true, e3.tokens[t3].hidden = true, t3 += 2);
    }(e2, d2), true;
  }, ["paragraph", "reference", "blockquote"]], ["reference", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2, _2, k2, b2, v2 = 0, C2 = e2.bMarks[r2] + e2.tShift[r2], y2 = e2.eMarks[r2], A2 = r2 + 1;
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (91 !== e2.src.charCodeAt(C2))
      return false;
    for (; ++C2 < y2; )
      if (93 === e2.src.charCodeAt(C2) && 92 !== e2.src.charCodeAt(C2 - 1)) {
        if (C2 + 1 === y2)
          return false;
        if (58 !== e2.src.charCodeAt(C2 + 1))
          return false;
        break;
      }
    for (a2 = e2.lineMax, k2 = e2.md.block.ruler.getRules("reference"), f2 = e2.parentType, e2.parentType = "reference"; A2 < a2 && !e2.isEmpty(A2); A2++)
      if (!(e2.sCount[A2] - e2.blkIndent > 3 || e2.sCount[A2] < 0)) {
        for (_2 = false, l2 = 0, u2 = k2.length; l2 < u2; l2++)
          if (k2[l2](e2, A2, a2, true)) {
            _2 = true;
            break;
          }
        if (_2)
          break;
      }
    for (y2 = (g2 = e2.getLines(r2, A2, e2.blkIndent, false).trim()).length, C2 = 1; C2 < y2; C2++) {
      if (91 === (s2 = g2.charCodeAt(C2)))
        return false;
      if (93 === s2) {
        h2 = C2;
        break;
      }
      (10 === s2 || 92 === s2 && ++C2 < y2 && 10 === g2.charCodeAt(C2)) && v2++;
    }
    if (h2 < 0 || 58 !== g2.charCodeAt(h2 + 1))
      return false;
    for (C2 = h2 + 2; C2 < y2; C2++)
      if (10 === (s2 = g2.charCodeAt(C2)))
        v2++;
      else if (!Ce$1(s2))
        break;
    if (!(d2 = e2.md.helpers.parseLinkDestination(g2, C2, y2)).ok)
      return false;
    if (c2 = e2.md.normalizeLink(d2.str), !e2.md.validateLink(c2))
      return false;
    for (o2 = C2 = d2.pos, i2 = v2 += d2.lines, m2 = C2; C2 < y2; C2++)
      if (10 === (s2 = g2.charCodeAt(C2)))
        v2++;
      else if (!Ce$1(s2))
        break;
    for (d2 = e2.md.helpers.parseLinkTitle(g2, C2, y2), C2 < y2 && m2 !== C2 && d2.ok ? (b2 = d2.str, C2 = d2.pos, v2 += d2.lines) : (b2 = "", C2 = o2, v2 = i2); C2 < y2 && (s2 = g2.charCodeAt(C2), Ce$1(s2)); )
      C2++;
    if (C2 < y2 && 10 !== g2.charCodeAt(C2) && b2)
      for (b2 = "", C2 = o2, v2 = i2; C2 < y2 && (s2 = g2.charCodeAt(C2), Ce$1(s2)); )
        C2++;
    return !(C2 < y2 && 10 !== g2.charCodeAt(C2)) && (!!(p2 = ve$1(g2.slice(1, h2))) && (n2 || (void 0 === e2.env.references && (e2.env.references = {}), void 0 === e2.env.references[p2] && (e2.env.references[p2] = { title: b2, href: c2 }), e2.parentType = f2, e2.line = r2 + v2 + 1), true));
  }], ["html_block", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2 = e2.bMarks[r2] + e2.tShift[r2], l2 = e2.eMarks[r2];
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (!e2.md.options.html)
      return false;
    if (60 !== e2.src.charCodeAt(c2))
      return false;
    for (a2 = e2.src.slice(c2, l2), s2 = 0; s2 < Se$1.length && !Se$1[s2][0].test(a2); s2++)
      ;
    if (s2 === Se$1.length)
      return false;
    if (n2)
      return Se$1[s2][2];
    if (o2 = r2 + 1, !Se$1[s2][1].test(a2)) {
      for (; o2 < t2 && !(e2.sCount[o2] < e2.blkIndent); o2++)
        if (c2 = e2.bMarks[o2] + e2.tShift[o2], l2 = e2.eMarks[o2], a2 = e2.src.slice(c2, l2), Se$1[s2][1].test(a2)) {
          0 !== a2.length && o2++;
          break;
        }
    }
    return e2.line = o2, (i2 = e2.push("html_block", "", 0)).map = [r2, o2], i2.content = e2.getLines(r2, o2, e2.blkIndent, true), true;
  }, ["paragraph", "reference", "blockquote"]], ["heading", function(e2, r2, t2, n2) {
    var s2, o2, i2, a2, c2 = e2.bMarks[r2] + e2.tShift[r2], l2 = e2.eMarks[r2];
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    if (35 !== (s2 = e2.src.charCodeAt(c2)) || c2 >= l2)
      return false;
    for (o2 = 1, s2 = e2.src.charCodeAt(++c2); 35 === s2 && c2 < l2 && o2 <= 6; )
      o2++, s2 = e2.src.charCodeAt(++c2);
    return !(o2 > 6 || c2 < l2 && !Fe(s2)) && (n2 || (l2 = e2.skipSpacesBack(l2, c2), (i2 = e2.skipCharsBack(l2, 35, c2)) > c2 && Fe(e2.src.charCodeAt(i2 - 1)) && (l2 = i2), e2.line = r2 + 1, (a2 = e2.push("heading_open", "h" + String(o2), 1)).markup = "########".slice(0, o2), a2.map = [r2, e2.line], (a2 = e2.push("inline", "", 0)).content = e2.src.slice(c2, l2).trim(), a2.map = [r2, e2.line], a2.children = [], (a2 = e2.push("heading_close", "h" + String(o2), -1)).markup = "########".slice(0, o2)), true);
  }, ["paragraph", "reference", "blockquote"]], ["lheading", function(e2, r2, t2) {
    var n2, s2, o2, i2, a2, c2, l2, u2, p2, h2, f2 = r2 + 1, d2 = e2.md.block.ruler.getRules("paragraph");
    if (e2.sCount[r2] - e2.blkIndent >= 4)
      return false;
    for (h2 = e2.parentType, e2.parentType = "paragraph"; f2 < t2 && !e2.isEmpty(f2); f2++)
      if (!(e2.sCount[f2] - e2.blkIndent > 3)) {
        if (e2.sCount[f2] >= e2.blkIndent && (c2 = e2.bMarks[f2] + e2.tShift[f2]) < (l2 = e2.eMarks[f2]) && (45 === (p2 = e2.src.charCodeAt(c2)) || 61 === p2) && (c2 = e2.skipChars(c2, p2), (c2 = e2.skipSpaces(c2)) >= l2)) {
          u2 = 61 === p2 ? 1 : 2;
          break;
        }
        if (!(e2.sCount[f2] < 0)) {
          for (s2 = false, o2 = 0, i2 = d2.length; o2 < i2; o2++)
            if (d2[o2](e2, f2, t2, true)) {
              s2 = true;
              break;
            }
          if (s2)
            break;
        }
      }
    return !!u2 && (n2 = e2.getLines(r2, f2, e2.blkIndent, false).trim(), e2.line = f2 + 1, (a2 = e2.push("heading_open", "h" + String(u2), 1)).markup = String.fromCharCode(p2), a2.map = [r2, e2.line], (a2 = e2.push("inline", "", 0)).content = n2, a2.map = [r2, e2.line - 1], a2.children = [], (a2 = e2.push("heading_close", "h" + String(u2), -1)).markup = String.fromCharCode(p2), e2.parentType = h2, true);
  }], ["paragraph", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2 = r2 + 1, l2 = e2.md.block.ruler.getRules("paragraph"), u2 = e2.lineMax;
    for (a2 = e2.parentType, e2.parentType = "paragraph"; c2 < u2 && !e2.isEmpty(c2); c2++)
      if (!(e2.sCount[c2] - e2.blkIndent > 3 || e2.sCount[c2] < 0)) {
        for (n2 = false, s2 = 0, o2 = l2.length; s2 < o2; s2++)
          if (l2[s2](e2, c2, u2, true)) {
            n2 = true;
            break;
          }
        if (n2)
          break;
      }
    return t2 = e2.getLines(r2, c2, e2.blkIndent, false).trim(), e2.line = c2, (i2 = e2.push("paragraph_open", "p", 1)).map = [r2, e2.line], (i2 = e2.push("inline", "", 0)).content = t2, i2.map = [r2, e2.line], i2.children = [], i2 = e2.push("paragraph_close", "p", -1), e2.parentType = a2, true;
  }]];
  function Be$1() {
    this.ruler = new Me$1();
    for (var e2 = 0; e2 < Re$1.length; e2++)
      this.ruler.push(Re$1[e2][0], Re$1[e2][1], { alt: (Re$1[e2][2] || []).slice() });
  }
  Be$1.prototype.tokenize = function(e2, r2, t2) {
    for (var n2, s2 = this.ruler.getRules(""), o2 = s2.length, i2 = r2, a2 = false, c2 = e2.md.options.maxNesting; i2 < t2 && (e2.line = i2 = e2.skipEmptyLines(i2), !(i2 >= t2)) && !(e2.sCount[i2] < e2.blkIndent); ) {
      if (e2.level >= c2) {
        e2.line = t2;
        break;
      }
      for (n2 = 0; n2 < o2 && !s2[n2](e2, i2, t2, false); n2++)
        ;
      e2.tight = !a2, e2.isEmpty(e2.line - 1) && (a2 = true), (i2 = e2.line) < t2 && e2.isEmpty(i2) && (a2 = true, i2++, e2.line = i2);
    }
  }, Be$1.prototype.parse = function(e2, r2, t2, n2) {
    var s2;
    e2 && (s2 = new this.State(e2, r2, t2, n2), this.tokenize(s2, s2.line, s2.lineMax));
  }, Be$1.prototype.State = Ie$1;
  var Ne$1 = Be$1;
  function Oe$1(e2) {
    switch (e2) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  for (var Pe = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, je = r$1.isSpace, Ue = r$1.isSpace, Ve = [], Ze = 0; Ze < 256; Ze++)
    Ve.push(0);
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e2) {
    Ve[e2.charCodeAt(0)] = 1;
  });
  var $e$1 = {};
  function Ge(e2, r2) {
    var t2, n2, s2, o2, i2, a2 = [], c2 = r2.length;
    for (t2 = 0; t2 < c2; t2++)
      126 === (s2 = r2[t2]).marker && -1 !== s2.end && (o2 = r2[s2.end], (i2 = e2.tokens[s2.token]).type = "s_open", i2.tag = "s", i2.nesting = 1, i2.markup = "~~", i2.content = "", (i2 = e2.tokens[o2.token]).type = "s_close", i2.tag = "s", i2.nesting = -1, i2.markup = "~~", i2.content = "", "text" === e2.tokens[o2.token - 1].type && "~" === e2.tokens[o2.token - 1].content && a2.push(o2.token - 1));
    for (; a2.length; ) {
      for (n2 = (t2 = a2.pop()) + 1; n2 < e2.tokens.length && "s_close" === e2.tokens[n2].type; )
        n2++;
      t2 !== --n2 && (i2 = e2.tokens[n2], e2.tokens[n2] = e2.tokens[t2], e2.tokens[t2] = i2);
    }
  }
  $e$1.tokenize = function(e2, r2) {
    var t2, n2, s2, o2, i2 = e2.pos, a2 = e2.src.charCodeAt(i2);
    if (r2)
      return false;
    if (126 !== a2)
      return false;
    if (s2 = (n2 = e2.scanDelims(e2.pos, true)).length, o2 = String.fromCharCode(a2), s2 < 2)
      return false;
    for (s2 % 2 && (e2.push("text", "", 0).content = o2, s2--), t2 = 0; t2 < s2; t2 += 2)
      e2.push("text", "", 0).content = o2 + o2, e2.delimiters.push({ marker: a2, length: 0, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
    return e2.pos += n2.length, true;
  }, $e$1.postProcess = function(e2) {
    var r2, t2 = e2.tokens_meta, n2 = e2.tokens_meta.length;
    for (Ge(e2, e2.delimiters), r2 = 0; r2 < n2; r2++)
      t2[r2] && t2[r2].delimiters && Ge(e2, t2[r2].delimiters);
  };
  var He = {};
  function Je(e2, r2) {
    var t2, n2, s2, o2, i2, a2;
    for (t2 = r2.length - 1; t2 >= 0; t2--)
      95 !== (n2 = r2[t2]).marker && 42 !== n2.marker || -1 !== n2.end && (s2 = r2[n2.end], a2 = t2 > 0 && r2[t2 - 1].end === n2.end + 1 && r2[t2 - 1].marker === n2.marker && r2[t2 - 1].token === n2.token - 1 && r2[n2.end + 1].token === s2.token + 1, i2 = String.fromCharCode(n2.marker), (o2 = e2.tokens[n2.token]).type = a2 ? "strong_open" : "em_open", o2.tag = a2 ? "strong" : "em", o2.nesting = 1, o2.markup = a2 ? i2 + i2 : i2, o2.content = "", (o2 = e2.tokens[s2.token]).type = a2 ? "strong_close" : "em_close", o2.tag = a2 ? "strong" : "em", o2.nesting = -1, o2.markup = a2 ? i2 + i2 : i2, o2.content = "", a2 && (e2.tokens[r2[t2 - 1].token].content = "", e2.tokens[r2[n2.end + 1].token].content = "", t2--));
  }
  He.tokenize = function(e2, r2) {
    var t2, n2, s2 = e2.pos, o2 = e2.src.charCodeAt(s2);
    if (r2)
      return false;
    if (95 !== o2 && 42 !== o2)
      return false;
    for (n2 = e2.scanDelims(e2.pos, 42 === o2), t2 = 0; t2 < n2.length; t2++)
      e2.push("text", "", 0).content = String.fromCharCode(o2), e2.delimiters.push({ marker: o2, length: n2.length, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
    return e2.pos += n2.length, true;
  }, He.postProcess = function(e2) {
    var r2, t2 = e2.tokens_meta, n2 = e2.tokens_meta.length;
    for (Je(e2, e2.delimiters), r2 = 0; r2 < n2; r2++)
      t2[r2] && t2[r2].delimiters && Je(e2, t2[r2].delimiters);
  };
  var We = r$1.normalizeReference, Ye = r$1.isSpace, Ke = r$1.normalizeReference, Qe = r$1.isSpace, Xe = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, er = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, rr = ye$1.HTML_TAG_RE;
  var tr = t$1, nr = r$1.has, sr = r$1.isValidEntityCode, or = r$1.fromCodePoint, ir = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, ar = /^&([a-z][a-z0-9]{1,31});/i;
  function cr(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2 = {}, p2 = r2.length;
    if (p2) {
      var h2 = 0, f2 = -2, d2 = [];
      for (t2 = 0; t2 < p2; t2++)
        if (s2 = r2[t2], d2.push(0), r2[h2].marker === s2.marker && f2 === s2.token - 1 || (h2 = t2), f2 = s2.token, s2.length = s2.length || 0, s2.close) {
          for (u2.hasOwnProperty(s2.marker) || (u2[s2.marker] = [-1, -1, -1, -1, -1, -1]), i2 = u2[s2.marker][(s2.open ? 3 : 0) + s2.length % 3], a2 = n2 = h2 - d2[h2] - 1; n2 > i2; n2 -= d2[n2] + 1)
            if ((o2 = r2[n2]).marker === s2.marker && o2.open && o2.end < 0 && (c2 = false, (o2.close || s2.open) && (o2.length + s2.length) % 3 == 0 && (o2.length % 3 == 0 && s2.length % 3 == 0 || (c2 = true)), !c2)) {
              l2 = n2 > 0 && !r2[n2 - 1].open ? d2[n2 - 1] + 1 : 0, d2[t2] = t2 - n2 + l2, d2[n2] = l2, s2.open = false, o2.end = t2, o2.close = false, a2 = -1, f2 = -2;
              break;
            }
          -1 !== a2 && (u2[s2.marker][(s2.open ? 3 : 0) + (s2.length || 0) % 3] = a2);
        }
    }
  }
  var lr = se$1, ur = r$1.isWhiteSpace, pr = r$1.isPunctChar, hr = r$1.isMdAsciiPunct;
  function fr(e2, r2, t2, n2) {
    this.src = e2, this.env = t2, this.md = r2, this.tokens = n2, this.tokens_meta = Array(n2.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
  }
  fr.prototype.pushPending = function() {
    var e2 = new lr("text", "", 0);
    return e2.content = this.pending, e2.level = this.pendingLevel, this.tokens.push(e2), this.pending = "", e2;
  }, fr.prototype.push = function(e2, r2, t2) {
    this.pending && this.pushPending();
    var n2 = new lr(e2, r2, t2), s2 = null;
    return t2 < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n2.level = this.level, t2 > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s2 = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n2), this.tokens_meta.push(s2), n2;
  }, fr.prototype.scanDelims = function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2, p2 = e2, h2 = true, f2 = true, d2 = this.posMax, m2 = this.src.charCodeAt(e2);
    for (t2 = e2 > 0 ? this.src.charCodeAt(e2 - 1) : 32; p2 < d2 && this.src.charCodeAt(p2) === m2; )
      p2++;
    return s2 = p2 - e2, n2 = p2 < d2 ? this.src.charCodeAt(p2) : 32, c2 = hr(t2) || pr(String.fromCharCode(t2)), u2 = hr(n2) || pr(String.fromCharCode(n2)), a2 = ur(t2), (l2 = ur(n2)) ? h2 = false : u2 && (a2 || c2 || (h2 = false)), a2 ? f2 = false : c2 && (l2 || u2 || (f2 = false)), r2 ? (o2 = h2, i2 = f2) : (o2 = h2 && (!f2 || c2), i2 = f2 && (!h2 || u2)), { can_open: o2, can_close: i2, length: s2 };
  }, fr.prototype.Token = lr;
  var dr = fr, mr = N$1, gr = [["text", function(e2, r2) {
    for (var t2 = e2.pos; t2 < e2.posMax && !Oe$1(e2.src.charCodeAt(t2)); )
      t2++;
    return t2 !== e2.pos && (r2 || (e2.pending += e2.src.slice(e2.pos, t2)), e2.pos = t2, true);
  }], ["linkify", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2;
    return !!e2.md.options.linkify && (!(e2.linkLevel > 0) && (!((t2 = e2.pos) + 3 > e2.posMax) && (58 === e2.src.charCodeAt(t2) && (47 === e2.src.charCodeAt(t2 + 1) && (47 === e2.src.charCodeAt(t2 + 2) && (!!(n2 = e2.pending.match(Pe)) && (s2 = n2[1], !!(o2 = e2.md.linkify.matchAtStart(e2.src.slice(t2 - s2.length))) && (i2 = (i2 = o2.url).replace(/\*+$/, ""), a2 = e2.md.normalizeLink(i2), !!e2.md.validateLink(a2) && (r2 || (e2.pending = e2.pending.slice(0, -s2.length), (c2 = e2.push("link_open", "a", 1)).attrs = [["href", a2]], c2.markup = "linkify", c2.info = "auto", (c2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(i2), (c2 = e2.push("link_close", "a", -1)).markup = "linkify", c2.info = "auto"), e2.pos += i2.length - s2.length, true)))))))));
  }], ["newline", function(e2, r2) {
    var t2, n2, s2, o2 = e2.pos;
    if (10 !== e2.src.charCodeAt(o2))
      return false;
    if (t2 = e2.pending.length - 1, n2 = e2.posMax, !r2)
      if (t2 >= 0 && 32 === e2.pending.charCodeAt(t2))
        if (t2 >= 1 && 32 === e2.pending.charCodeAt(t2 - 1)) {
          for (s2 = t2 - 1; s2 >= 1 && 32 === e2.pending.charCodeAt(s2 - 1); )
            s2--;
          e2.pending = e2.pending.slice(0, s2), e2.push("hardbreak", "br", 0);
        } else
          e2.pending = e2.pending.slice(0, -1), e2.push("softbreak", "br", 0);
      else
        e2.push("softbreak", "br", 0);
    for (o2++; o2 < n2 && je(e2.src.charCodeAt(o2)); )
      o2++;
    return e2.pos = o2, true;
  }], ["escape", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2 = e2.pos, c2 = e2.posMax;
    if (92 !== e2.src.charCodeAt(a2))
      return false;
    if (++a2 >= c2)
      return false;
    if (10 === (t2 = e2.src.charCodeAt(a2))) {
      for (r2 || e2.push("hardbreak", "br", 0), a2++; a2 < c2 && (t2 = e2.src.charCodeAt(a2), Ue(t2)); )
        a2++;
      return e2.pos = a2, true;
    }
    return o2 = e2.src[a2], t2 >= 55296 && t2 <= 56319 && a2 + 1 < c2 && (n2 = e2.src.charCodeAt(a2 + 1)) >= 56320 && n2 <= 57343 && (o2 += e2.src[a2 + 1], a2++), s2 = "\\" + o2, r2 || (i2 = e2.push("text_special", "", 0), t2 < 256 && 0 !== Ve[t2] ? i2.content = o2 : i2.content = s2, i2.markup = s2, i2.info = "escape"), e2.pos = a2 + 1, true;
  }], ["backticks", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2 = e2.pos;
    if (96 !== e2.src.charCodeAt(u2))
      return false;
    for (t2 = u2, u2++, n2 = e2.posMax; u2 < n2 && 96 === e2.src.charCodeAt(u2); )
      u2++;
    if (c2 = (s2 = e2.src.slice(t2, u2)).length, e2.backticksScanned && (e2.backticks[c2] || 0) <= t2)
      return r2 || (e2.pending += s2), e2.pos += c2, true;
    for (i2 = a2 = u2; -1 !== (i2 = e2.src.indexOf("`", a2)); ) {
      for (a2 = i2 + 1; a2 < n2 && 96 === e2.src.charCodeAt(a2); )
        a2++;
      if ((l2 = a2 - i2) === c2)
        return r2 || ((o2 = e2.push("code_inline", "code", 0)).markup = s2, o2.content = e2.src.slice(u2, i2).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e2.pos = a2, true;
      e2.backticks[l2] = i2;
    }
    return e2.backticksScanned = true, r2 || (e2.pending += s2), e2.pos += c2, true;
  }], ["strikethrough", $e$1.tokenize], ["emphasis", He.tokenize], ["link", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2 = "", p2 = "", h2 = e2.pos, f2 = e2.posMax, d2 = e2.pos, m2 = true;
    if (91 !== e2.src.charCodeAt(e2.pos))
      return false;
    if (i2 = e2.pos + 1, (o2 = e2.md.helpers.parseLinkLabel(e2, e2.pos, true)) < 0)
      return false;
    if ((a2 = o2 + 1) < f2 && 40 === e2.src.charCodeAt(a2)) {
      for (m2 = false, a2++; a2 < f2 && (n2 = e2.src.charCodeAt(a2), Ye(n2) || 10 === n2); a2++)
        ;
      if (a2 >= f2)
        return false;
      if (d2 = a2, (c2 = e2.md.helpers.parseLinkDestination(e2.src, a2, e2.posMax)).ok) {
        for (u2 = e2.md.normalizeLink(c2.str), e2.md.validateLink(u2) ? a2 = c2.pos : u2 = "", d2 = a2; a2 < f2 && (n2 = e2.src.charCodeAt(a2), Ye(n2) || 10 === n2); a2++)
          ;
        if (c2 = e2.md.helpers.parseLinkTitle(e2.src, a2, e2.posMax), a2 < f2 && d2 !== a2 && c2.ok)
          for (p2 = c2.str, a2 = c2.pos; a2 < f2 && (n2 = e2.src.charCodeAt(a2), Ye(n2) || 10 === n2); a2++)
            ;
      }
      (a2 >= f2 || 41 !== e2.src.charCodeAt(a2)) && (m2 = true), a2++;
    }
    if (m2) {
      if (void 0 === e2.env.references)
        return false;
      if (a2 < f2 && 91 === e2.src.charCodeAt(a2) ? (d2 = a2 + 1, (a2 = e2.md.helpers.parseLinkLabel(e2, a2)) >= 0 ? s2 = e2.src.slice(d2, a2++) : a2 = o2 + 1) : a2 = o2 + 1, s2 || (s2 = e2.src.slice(i2, o2)), !(l2 = e2.env.references[We(s2)]))
        return e2.pos = h2, false;
      u2 = l2.href, p2 = l2.title;
    }
    return r2 || (e2.pos = i2, e2.posMax = o2, e2.push("link_open", "a", 1).attrs = t2 = [["href", u2]], p2 && t2.push(["title", p2]), e2.linkLevel++, e2.md.inline.tokenize(e2), e2.linkLevel--, e2.push("link_close", "a", -1)), e2.pos = a2, e2.posMax = f2, true;
  }], ["image", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2 = "", g2 = e2.pos, _2 = e2.posMax;
    if (33 !== e2.src.charCodeAt(e2.pos))
      return false;
    if (91 !== e2.src.charCodeAt(e2.pos + 1))
      return false;
    if (a2 = e2.pos + 2, (i2 = e2.md.helpers.parseLinkLabel(e2, e2.pos + 1, false)) < 0)
      return false;
    if ((c2 = i2 + 1) < _2 && 40 === e2.src.charCodeAt(c2)) {
      for (c2++; c2 < _2 && (n2 = e2.src.charCodeAt(c2), Qe(n2) || 10 === n2); c2++)
        ;
      if (c2 >= _2)
        return false;
      for (d2 = c2, (u2 = e2.md.helpers.parseLinkDestination(e2.src, c2, e2.posMax)).ok && (m2 = e2.md.normalizeLink(u2.str), e2.md.validateLink(m2) ? c2 = u2.pos : m2 = ""), d2 = c2; c2 < _2 && (n2 = e2.src.charCodeAt(c2), Qe(n2) || 10 === n2); c2++)
        ;
      if (u2 = e2.md.helpers.parseLinkTitle(e2.src, c2, e2.posMax), c2 < _2 && d2 !== c2 && u2.ok)
        for (p2 = u2.str, c2 = u2.pos; c2 < _2 && (n2 = e2.src.charCodeAt(c2), Qe(n2) || 10 === n2); c2++)
          ;
      else
        p2 = "";
      if (c2 >= _2 || 41 !== e2.src.charCodeAt(c2))
        return e2.pos = g2, false;
      c2++;
    } else {
      if (void 0 === e2.env.references)
        return false;
      if (c2 < _2 && 91 === e2.src.charCodeAt(c2) ? (d2 = c2 + 1, (c2 = e2.md.helpers.parseLinkLabel(e2, c2)) >= 0 ? o2 = e2.src.slice(d2, c2++) : c2 = i2 + 1) : c2 = i2 + 1, o2 || (o2 = e2.src.slice(a2, i2)), !(l2 = e2.env.references[Ke(o2)]))
        return e2.pos = g2, false;
      m2 = l2.href, p2 = l2.title;
    }
    return r2 || (s2 = e2.src.slice(a2, i2), e2.md.inline.parse(s2, e2.md, e2.env, f2 = []), (h2 = e2.push("image", "img", 0)).attrs = t2 = [["src", m2], ["alt", ""]], h2.children = f2, h2.content = s2, p2 && t2.push(["title", p2])), e2.pos = c2, e2.posMax = _2, true;
  }], ["autolink", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2, c2 = e2.pos;
    if (60 !== e2.src.charCodeAt(c2))
      return false;
    for (i2 = e2.pos, a2 = e2.posMax; ; ) {
      if (++c2 >= a2)
        return false;
      if (60 === (o2 = e2.src.charCodeAt(c2)))
        return false;
      if (62 === o2)
        break;
    }
    return t2 = e2.src.slice(i2 + 1, c2), er.test(t2) ? (n2 = e2.md.normalizeLink(t2), !!e2.md.validateLink(n2) && (r2 || ((s2 = e2.push("link_open", "a", 1)).attrs = [["href", n2]], s2.markup = "autolink", s2.info = "auto", (s2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(t2), (s2 = e2.push("link_close", "a", -1)).markup = "autolink", s2.info = "auto"), e2.pos += t2.length + 2, true)) : !!Xe.test(t2) && (n2 = e2.md.normalizeLink("mailto:" + t2), !!e2.md.validateLink(n2) && (r2 || ((s2 = e2.push("link_open", "a", 1)).attrs = [["href", n2]], s2.markup = "autolink", s2.info = "auto", (s2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(t2), (s2 = e2.push("link_close", "a", -1)).markup = "autolink", s2.info = "auto"), e2.pos += t2.length + 2, true));
  }], ["html_inline", function(e2, r2) {
    var t2, n2, s2, o2, i2, a2 = e2.pos;
    return !!e2.md.options.html && (s2 = e2.posMax, !(60 !== e2.src.charCodeAt(a2) || a2 + 2 >= s2) && (!(33 !== (t2 = e2.src.charCodeAt(a2 + 1)) && 63 !== t2 && 47 !== t2 && !function(e3) {
      var r3 = 32 | e3;
      return r3 >= 97 && r3 <= 122;
    }(t2)) && (!!(n2 = e2.src.slice(a2).match(rr)) && (r2 || ((o2 = e2.push("html_inline", "", 0)).content = e2.src.slice(a2, a2 + n2[0].length), i2 = o2.content, /^<a[>\s]/i.test(i2) && e2.linkLevel++, function(e3) {
      return /^<\/a\s*>/i.test(e3);
    }(o2.content) && e2.linkLevel--), e2.pos += n2[0].length, true))));
  }], ["entity", function(e2, r2) {
    var t2, n2, s2, o2 = e2.pos, i2 = e2.posMax;
    if (38 !== e2.src.charCodeAt(o2))
      return false;
    if (o2 + 1 >= i2)
      return false;
    if (35 === e2.src.charCodeAt(o2 + 1)) {
      if (n2 = e2.src.slice(o2).match(ir))
        return r2 || (t2 = "x" === n2[1][0].toLowerCase() ? parseInt(n2[1].slice(1), 16) : parseInt(n2[1], 10), (s2 = e2.push("text_special", "", 0)).content = sr(t2) ? or(t2) : or(65533), s2.markup = n2[0], s2.info = "entity"), e2.pos += n2[0].length, true;
    } else if ((n2 = e2.src.slice(o2).match(ar)) && nr(tr, n2[1]))
      return r2 || ((s2 = e2.push("text_special", "", 0)).content = tr[n2[1]], s2.markup = n2[0], s2.info = "entity"), e2.pos += n2[0].length, true;
    return false;
  }]], _r = [["balance_pairs", function(e2) {
    var r2, t2 = e2.tokens_meta, n2 = e2.tokens_meta.length;
    for (cr(0, e2.delimiters), r2 = 0; r2 < n2; r2++)
      t2[r2] && t2[r2].delimiters && cr(0, t2[r2].delimiters);
  }], ["strikethrough", $e$1.postProcess], ["emphasis", He.postProcess], ["fragments_join", function(e2) {
    var r2, t2, n2 = 0, s2 = e2.tokens, o2 = e2.tokens.length;
    for (r2 = t2 = 0; r2 < o2; r2++)
      s2[r2].nesting < 0 && n2--, s2[r2].level = n2, s2[r2].nesting > 0 && n2++, "text" === s2[r2].type && r2 + 1 < o2 && "text" === s2[r2 + 1].type ? s2[r2 + 1].content = s2[r2].content + s2[r2 + 1].content : (r2 !== t2 && (s2[t2] = s2[r2]), t2++);
    r2 !== t2 && (s2.length = t2);
  }]];
  function kr() {
    var e2;
    for (this.ruler = new mr(), e2 = 0; e2 < gr.length; e2++)
      this.ruler.push(gr[e2][0], gr[e2][1]);
    for (this.ruler2 = new mr(), e2 = 0; e2 < _r.length; e2++)
      this.ruler2.push(_r[e2][0], _r[e2][1]);
  }
  kr.prototype.skipToken = function(e2) {
    var r2, t2, n2 = e2.pos, s2 = this.ruler.getRules(""), o2 = s2.length, i2 = e2.md.options.maxNesting, a2 = e2.cache;
    if (void 0 === a2[n2]) {
      if (e2.level < i2)
        for (t2 = 0; t2 < o2 && (e2.level++, r2 = s2[t2](e2, true), e2.level--, !r2); t2++)
          ;
      else
        e2.pos = e2.posMax;
      r2 || e2.pos++, a2[n2] = e2.pos;
    } else
      e2.pos = a2[n2];
  }, kr.prototype.tokenize = function(e2) {
    for (var r2, t2, n2 = this.ruler.getRules(""), s2 = n2.length, o2 = e2.posMax, i2 = e2.md.options.maxNesting; e2.pos < o2; ) {
      if (e2.level < i2)
        for (t2 = 0; t2 < s2 && !(r2 = n2[t2](e2, false)); t2++)
          ;
      if (r2) {
        if (e2.pos >= o2)
          break;
      } else
        e2.pending += e2.src[e2.pos++];
    }
    e2.pending && e2.pushPending();
  }, kr.prototype.parse = function(e2, r2, t2, n2) {
    var s2, o2, i2, a2 = new this.State(e2, r2, t2, n2);
    for (this.tokenize(a2), i2 = (o2 = this.ruler2.getRules("")).length, s2 = 0; s2 < i2; s2++)
      o2[s2](a2);
  }, kr.prototype.State = dr;
  var br = kr;
  function vr(e2) {
    var r2 = Array.prototype.slice.call(arguments, 1);
    return r2.forEach(function(r3) {
      r3 && Object.keys(r3).forEach(function(t2) {
        e2[t2] = r3[t2];
      });
    }), e2;
  }
  function Cr(e2) {
    return Object.prototype.toString.call(e2);
  }
  function yr(e2) {
    return "[object Function]" === Cr(e2);
  }
  function Ar(e2) {
    return e2.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var xr = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
  var Dr = { "http:": { validate: function(e2, r2, t2) {
    var n2 = e2.slice(r2);
    return t2.re.http || (t2.re.http = new RegExp("^\\/\\/" + t2.re.src_auth + t2.re.src_host_port_strict + t2.re.src_path, "i")), t2.re.http.test(n2) ? n2.match(t2.re.http)[0].length : 0;
  } }, "https:": "http:", "ftp:": "http:", "//": { validate: function(e2, r2, t2) {
    var n2 = e2.slice(r2);
    return t2.re.no_http || (t2.re.no_http = new RegExp("^" + t2.re.src_auth + "(?:localhost|(?:(?:" + t2.re.src_domain + ")\\.)+" + t2.re.src_domain_root + ")" + t2.re.src_port + t2.re.src_host_terminator + t2.re.src_path, "i")), t2.re.no_http.test(n2) ? r2 >= 3 && ":" === e2[r2 - 3] || r2 >= 3 && "/" === e2[r2 - 3] ? 0 : n2.match(t2.re.no_http)[0].length : 0;
  } }, "mailto:": { validate: function(e2, r2, t2) {
    var n2 = e2.slice(r2);
    return t2.re.mailto || (t2.re.mailto = new RegExp("^" + t2.re.src_email_name + "@" + t2.re.src_host_strict, "i")), t2.re.mailto.test(n2) ? n2.match(t2.re.mailto)[0].length : 0;
  } } }, wr = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function Er(e2) {
    var r2 = e2.re = function(e3) {
      var r3 = {};
      return e3 = e3 || {}, r3.src_Any = D$1.source, r3.src_Cc = w$1.source, r3.src_Z = E$1.source, r3.src_P = n$1.source, r3.src_ZPCc = [r3.src_Z, r3.src_P, r3.src_Cc].join("|"), r3.src_ZCc = [r3.src_Z, r3.src_Cc].join("|"), r3.src_pseudo_letter = "(?:(?![><｜]|" + r3.src_ZPCc + ")" + r3.src_Any + ")", r3.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", r3.src_auth = "(?:(?:(?!" + r3.src_ZCc + "|[@/\\[\\]()]).)+@)?", r3.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", r3.src_host_terminator = "(?=$|[><｜]|" + r3.src_ZPCc + ")(?!" + (e3["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + r3.src_ZPCc + "))", r3.src_path = "(?:[/?#](?:(?!" + r3.src_ZCc + `|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + r3.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + r3.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + r3.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + r3.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + r3.src_ZCc + "|[']).)+\\'|\\'(?=" + r3.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + r3.src_ZCc + "|[.]|$)|" + (e3["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + r3.src_ZCc + "|$)|;(?!" + r3.src_ZCc + "|$)|\\!+(?!" + r3.src_ZCc + "|[!]|$)|\\?(?!" + r3.src_ZCc + "|[?]|$))+|\\/)?", r3.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', r3.src_xn = "xn--[a-z0-9\\-]{1,59}", r3.src_domain_root = "(?:" + r3.src_xn + "|" + r3.src_pseudo_letter + "{1,63})", r3.src_domain = "(?:" + r3.src_xn + "|(?:" + r3.src_pseudo_letter + ")|(?:" + r3.src_pseudo_letter + "(?:-|" + r3.src_pseudo_letter + "){0,61}" + r3.src_pseudo_letter + "))", r3.src_host = "(?:(?:(?:(?:" + r3.src_domain + ")\\.)*" + r3.src_domain + "))", r3.tpl_host_fuzzy = "(?:" + r3.src_ip4 + "|(?:(?:(?:" + r3.src_domain + ")\\.)+(?:%TLDS%)))", r3.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + r3.src_domain + ")\\.)+(?:%TLDS%))", r3.src_host_strict = r3.src_host + r3.src_host_terminator, r3.tpl_host_fuzzy_strict = r3.tpl_host_fuzzy + r3.src_host_terminator, r3.src_host_port_strict = r3.src_host + r3.src_port + r3.src_host_terminator, r3.tpl_host_port_fuzzy_strict = r3.tpl_host_fuzzy + r3.src_port + r3.src_host_terminator, r3.tpl_host_port_no_ip_fuzzy_strict = r3.tpl_host_no_ip_fuzzy + r3.src_port + r3.src_host_terminator, r3.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + r3.src_ZPCc + "|>|$))", r3.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + r3.src_ZCc + ")(" + r3.src_email_name + "@" + r3.tpl_host_fuzzy_strict + ")", r3.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + r3.src_ZPCc + "))((?![$+<=>^`|｜])" + r3.tpl_host_port_fuzzy_strict + r3.src_path + ")", r3.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + r3.src_ZPCc + "))((?![$+<=>^`|｜])" + r3.tpl_host_port_no_ip_fuzzy_strict + r3.src_path + ")", r3;
    }(e2.__opts__), t2 = e2.__tlds__.slice();
    function s2(e3) {
      return e3.replace("%TLDS%", r2.src_tlds);
    }
    e2.onCompile(), e2.__tlds_replaced__ || t2.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), t2.push(r2.src_xn), r2.src_tlds = t2.join("|"), r2.email_fuzzy = RegExp(s2(r2.tpl_email_fuzzy), "i"), r2.link_fuzzy = RegExp(s2(r2.tpl_link_fuzzy), "i"), r2.link_no_ip_fuzzy = RegExp(s2(r2.tpl_link_no_ip_fuzzy), "i"), r2.host_fuzzy_test = RegExp(s2(r2.tpl_host_fuzzy_test), "i");
    var o2 = [];
    function i2(e3, r3) {
      throw new Error('(LinkifyIt) Invalid schema "' + e3 + '": ' + r3);
    }
    e2.__compiled__ = {}, Object.keys(e2.__schemas__).forEach(function(r3) {
      var t3 = e2.__schemas__[r3];
      if (null !== t3) {
        var n2 = { validate: null, link: null };
        if (e2.__compiled__[r3] = n2, "[object Object]" === Cr(t3))
          return !function(e3) {
            return "[object RegExp]" === Cr(e3);
          }(t3.validate) ? yr(t3.validate) ? n2.validate = t3.validate : i2(r3, t3) : n2.validate = /* @__PURE__ */ function(e3) {
            return function(r4, t4) {
              var n3 = r4.slice(t4);
              return e3.test(n3) ? n3.match(e3)[0].length : 0;
            };
          }(t3.validate), void (yr(t3.normalize) ? n2.normalize = t3.normalize : t3.normalize ? i2(r3, t3) : n2.normalize = function(e3, r4) {
            r4.normalize(e3);
          });
        !function(e3) {
          return "[object String]" === Cr(e3);
        }(t3) ? i2(r3, t3) : o2.push(r3);
      }
    }), o2.forEach(function(r3) {
      e2.__compiled__[e2.__schemas__[r3]] && (e2.__compiled__[r3].validate = e2.__compiled__[e2.__schemas__[r3]].validate, e2.__compiled__[r3].normalize = e2.__compiled__[e2.__schemas__[r3]].normalize);
    }), e2.__compiled__[""] = { validate: null, normalize: function(e3, r3) {
      r3.normalize(e3);
    } };
    var a2 = Object.keys(e2.__compiled__).filter(function(r3) {
      return r3.length > 0 && e2.__compiled__[r3];
    }).map(Ar).join("|");
    e2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + r2.src_ZPCc + "))(" + a2 + ")", "i"), e2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + r2.src_ZPCc + "))(" + a2 + ")", "ig"), e2.re.schema_at_start = RegExp("^" + e2.re.schema_search.source, "i"), e2.re.pretest = RegExp("(" + e2.re.schema_test.source + ")|(" + e2.re.host_fuzzy_test.source + ")|@", "i"), function(e3) {
      e3.__index__ = -1, e3.__text_cache__ = "";
    }(e2);
  }
  function qr(e2, r2) {
    var t2 = e2.__index__, n2 = e2.__last_index__, s2 = e2.__text_cache__.slice(t2, n2);
    this.schema = e2.__schema__.toLowerCase(), this.index = t2 + r2, this.lastIndex = n2 + r2, this.raw = s2, this.text = s2, this.url = s2;
  }
  function Sr(e2, r2) {
    var t2 = new qr(e2, r2);
    return e2.__compiled__[t2.schema].normalize(t2, e2), t2;
  }
  function Fr(e2, r2) {
    if (!(this instanceof Fr))
      return new Fr(e2, r2);
    var t2;
    r2 || (t2 = e2, Object.keys(t2 || {}).reduce(function(e3, r3) {
      return e3 || xr.hasOwnProperty(r3);
    }, false) && (r2 = e2, e2 = {})), this.__opts__ = vr({}, xr, r2), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = vr({}, Dr, e2), this.__compiled__ = {}, this.__tlds__ = wr, this.__tlds_replaced__ = false, this.re = {}, Er(this);
  }
  Fr.prototype.add = function(e2, r2) {
    return this.__schemas__[e2] = r2, Er(this), this;
  }, Fr.prototype.set = function(e2) {
    return this.__opts__ = vr(this.__opts__, e2), this;
  }, Fr.prototype.test = function(e2) {
    if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
      return false;
    var r2, t2, n2, s2, o2, i2, a2, c2;
    if (this.re.schema_test.test(e2)) {
      for ((a2 = this.re.schema_search).lastIndex = 0; null !== (r2 = a2.exec(e2)); )
        if (s2 = this.testSchemaAt(e2, r2[2], a2.lastIndex)) {
          this.__schema__ = r2[2], this.__index__ = r2.index + r2[1].length, this.__last_index__ = r2.index + r2[0].length + s2;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c2 = e2.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c2 < this.__index__) && null !== (t2 = e2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o2 = t2.index + t2[1].length, (this.__index__ < 0 || o2 < this.__index__) && (this.__schema__ = "", this.__index__ = o2, this.__last_index__ = t2.index + t2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e2.indexOf("@") >= 0 && null !== (n2 = e2.match(this.re.email_fuzzy)) && (o2 = n2.index + n2[1].length, i2 = n2.index + n2[0].length, (this.__index__ < 0 || o2 < this.__index__ || o2 === this.__index__ && i2 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o2, this.__last_index__ = i2)), this.__index__ >= 0;
  }, Fr.prototype.pretest = function(e2) {
    return this.re.pretest.test(e2);
  }, Fr.prototype.testSchemaAt = function(e2, r2, t2) {
    return this.__compiled__[r2.toLowerCase()] ? this.__compiled__[r2.toLowerCase()].validate(e2, t2, this) : 0;
  }, Fr.prototype.match = function(e2) {
    var r2 = 0, t2 = [];
    this.__index__ >= 0 && this.__text_cache__ === e2 && (t2.push(Sr(this, r2)), r2 = this.__last_index__);
    for (var n2 = r2 ? e2.slice(r2) : e2; this.test(n2); )
      t2.push(Sr(this, r2)), n2 = n2.slice(this.__last_index__), r2 += this.__last_index__;
    return t2.length ? t2 : null;
  }, Fr.prototype.matchAtStart = function(e2) {
    if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
      return null;
    var r2 = this.re.schema_at_start.exec(e2);
    if (!r2)
      return null;
    var t2 = this.testSchemaAt(e2, r2[2], r2[0].length);
    return t2 ? (this.__schema__ = r2[2], this.__index__ = r2.index + r2[1].length, this.__last_index__ = r2.index + r2[0].length + t2, Sr(this, 0)) : null;
  }, Fr.prototype.tlds = function(e2, r2) {
    return e2 = Array.isArray(e2) ? e2 : [e2], r2 ? (this.__tlds__ = this.__tlds__.concat(e2).sort().filter(function(e3, r3, t2) {
      return e3 !== t2[r3 - 1];
    }).reverse(), Er(this), this) : (this.__tlds__ = e2.slice(), this.__tlds_replaced__ = true, Er(this), this);
  }, Fr.prototype.normalize = function(e2) {
    e2.schema || (e2.url = "http://" + e2.url), "mailto:" !== e2.schema || /^mailto:/i.test(e2.url) || (e2.url = "mailto:" + e2.url);
  }, Fr.prototype.onCompile = function() {
  };
  var Lr = Fr, zr = 2147483647, Tr = /^xn--/, Ir = /[^\x20-\x7E]/, Mr = /[\x2E\u3002\uFF0E\uFF61]/g, Rr = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, Br = Math.floor, Nr = String.fromCharCode;
  /*! https://mths.be/punycode v1.4.1 by @mathias */
  function Or(e2) {
    throw new RangeError(Rr[e2]);
  }
  function Pr(e2, r2) {
    for (var t2 = e2.length, n2 = []; t2--; )
      n2[t2] = r2(e2[t2]);
    return n2;
  }
  function jr(e2, r2) {
    var t2 = e2.split("@"), n2 = "";
    return t2.length > 1 && (n2 = t2[0] + "@", e2 = t2[1]), n2 + Pr((e2 = e2.replace(Mr, ".")).split("."), r2).join(".");
  }
  function Ur(e2) {
    for (var r2, t2, n2 = [], s2 = 0, o2 = e2.length; s2 < o2; )
      (r2 = e2.charCodeAt(s2++)) >= 55296 && r2 <= 56319 && s2 < o2 ? 56320 == (64512 & (t2 = e2.charCodeAt(s2++))) ? n2.push(((1023 & r2) << 10) + (1023 & t2) + 65536) : (n2.push(r2), s2--) : n2.push(r2);
    return n2;
  }
  function Vr(e2) {
    return Pr(e2, function(e3) {
      var r2 = "";
      return e3 > 65535 && (r2 += Nr((e3 -= 65536) >>> 10 & 1023 | 55296), e3 = 56320 | 1023 & e3), r2 += Nr(e3);
    }).join("");
  }
  function Zr(e2, r2) {
    return e2 + 22 + 75 * (e2 < 26) - ((0 != r2) << 5);
  }
  function $r(e2, r2, t2) {
    var n2 = 0;
    for (e2 = t2 ? Br(e2 / 700) : e2 >> 1, e2 += Br(e2 / r2); e2 > 455; n2 += 36)
      e2 = Br(e2 / 35);
    return Br(n2 + 36 * e2 / (e2 + 38));
  }
  function Gr(e2) {
    var r2, t2, n2, s2, o2, i2, a2, c2, l2, u2, p2, h2 = [], f2 = e2.length, d2 = 0, m2 = 128, g2 = 72;
    for ((t2 = e2.lastIndexOf("-")) < 0 && (t2 = 0), n2 = 0; n2 < t2; ++n2)
      e2.charCodeAt(n2) >= 128 && Or("not-basic"), h2.push(e2.charCodeAt(n2));
    for (s2 = t2 > 0 ? t2 + 1 : 0; s2 < f2; ) {
      for (o2 = d2, i2 = 1, a2 = 36; s2 >= f2 && Or("invalid-input"), ((c2 = (p2 = e2.charCodeAt(s2++)) - 48 < 10 ? p2 - 22 : p2 - 65 < 26 ? p2 - 65 : p2 - 97 < 26 ? p2 - 97 : 36) >= 36 || c2 > Br((zr - d2) / i2)) && Or("overflow"), d2 += c2 * i2, !(c2 < (l2 = a2 <= g2 ? 1 : a2 >= g2 + 26 ? 26 : a2 - g2)); a2 += 36)
        i2 > Br(zr / (u2 = 36 - l2)) && Or("overflow"), i2 *= u2;
      g2 = $r(d2 - o2, r2 = h2.length + 1, 0 == o2), Br(d2 / r2) > zr - m2 && Or("overflow"), m2 += Br(d2 / r2), d2 %= r2, h2.splice(d2++, 0, m2);
    }
    return Vr(h2);
  }
  function Hr(e2) {
    var r2, t2, n2, s2, o2, i2, a2, c2, l2, u2, p2, h2, f2, d2, m2, g2 = [];
    for (h2 = (e2 = Ur(e2)).length, r2 = 128, t2 = 0, o2 = 72, i2 = 0; i2 < h2; ++i2)
      (p2 = e2[i2]) < 128 && g2.push(Nr(p2));
    for (n2 = s2 = g2.length, s2 && g2.push("-"); n2 < h2; ) {
      for (a2 = zr, i2 = 0; i2 < h2; ++i2)
        (p2 = e2[i2]) >= r2 && p2 < a2 && (a2 = p2);
      for (a2 - r2 > Br((zr - t2) / (f2 = n2 + 1)) && Or("overflow"), t2 += (a2 - r2) * f2, r2 = a2, i2 = 0; i2 < h2; ++i2)
        if ((p2 = e2[i2]) < r2 && ++t2 > zr && Or("overflow"), p2 == r2) {
          for (c2 = t2, l2 = 36; !(c2 < (u2 = l2 <= o2 ? 1 : l2 >= o2 + 26 ? 26 : l2 - o2)); l2 += 36)
            m2 = c2 - u2, d2 = 36 - u2, g2.push(Nr(Zr(u2 + m2 % d2, 0))), c2 = Br(m2 / d2);
          g2.push(Nr(Zr(c2, 0))), o2 = $r(t2, f2, n2 == s2), t2 = 0, ++n2;
        }
      ++t2, ++r2;
    }
    return g2.join("");
  }
  function Jr(e2) {
    return jr(e2, function(e3) {
      return Tr.test(e3) ? Gr(e3.slice(4).toLowerCase()) : e3;
    });
  }
  function Wr(e2) {
    return jr(e2, function(e3) {
      return Ir.test(e3) ? "xn--" + Hr(e3) : e3;
    });
  }
  var Yr = { decode: Ur, encode: Vr }, Kr = { version: "1.4.1", ucs2: Yr, toASCII: Wr, toUnicode: Jr, encode: Hr, decode: Gr }, Qr = r$1, Xr = q$1, et = R$1, rt = pe$1, tt = Ne$1, nt = br, st = Lr, ot = s$1, it = e$1(Object.freeze({ __proto__: null, decode: Gr, encode: Hr, toUnicode: Jr, toASCII: Wr, version: "1.4.1", ucs2: Yr, default: Kr })), at = { default: { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } }, zero: { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] } } }, commonmark: { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "fragments_join"] } } } }, ct = /^(vbscript|javascript|file|data):/, lt = /^data:image\/(gif|png|jpeg|webp);/;
  function ut(e2) {
    var r2 = e2.trim().toLowerCase();
    return !ct.test(r2) || !!lt.test(r2);
  }
  var pt = ["http:", "https:", "mailto:"];
  function ht(e2) {
    var r2 = ot.parse(e2, true);
    if (r2.hostname && (!r2.protocol || pt.indexOf(r2.protocol) >= 0))
      try {
        r2.hostname = it.toASCII(r2.hostname);
      } catch (e3) {
      }
    return ot.encode(ot.format(r2));
  }
  function ft(e2) {
    var r2 = ot.parse(e2, true);
    if (r2.hostname && (!r2.protocol || pt.indexOf(r2.protocol) >= 0))
      try {
        r2.hostname = it.toUnicode(r2.hostname);
      } catch (e3) {
      }
    return ot.decode(ot.format(r2), ot.decode.defaultChars + "%");
  }
  function dt(e2, r2) {
    if (!(this instanceof dt))
      return new dt(e2, r2);
    r2 || Qr.isString(e2) || (r2 = e2 || {}, e2 = "default"), this.inline = new nt(), this.block = new tt(), this.core = new rt(), this.renderer = new et(), this.linkify = new st(), this.validateLink = ut, this.normalizeLink = ht, this.normalizeLinkText = ft, this.utils = Qr, this.helpers = Qr.assign({}, Xr), this.options = {}, this.configure(e2), r2 && this.set(r2);
  }
  dt.prototype.set = function(e2) {
    return Qr.assign(this.options, e2), this;
  }, dt.prototype.configure = function(e2) {
    var r2, t2 = this;
    if (Qr.isString(e2) && !(e2 = at[r2 = e2]))
      throw new Error('Wrong `markdown-it` preset "' + r2 + '", check name');
    if (!e2)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return e2.options && t2.set(e2.options), e2.components && Object.keys(e2.components).forEach(function(r3) {
      e2.components[r3].rules && t2[r3].ruler.enableOnly(e2.components[r3].rules), e2.components[r3].rules2 && t2[r3].ruler2.enableOnly(e2.components[r3].rules2);
    }), this;
  }, dt.prototype.enable = function(e2, r2) {
    var t2 = [];
    Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(r3) {
      t2 = t2.concat(this[r3].ruler.enable(e2, true));
    }, this), t2 = t2.concat(this.inline.ruler2.enable(e2, true));
    var n2 = e2.filter(function(e3) {
      return t2.indexOf(e3) < 0;
    });
    if (n2.length && !r2)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n2);
    return this;
  }, dt.prototype.disable = function(e2, r2) {
    var t2 = [];
    Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(r3) {
      t2 = t2.concat(this[r3].ruler.disable(e2, true));
    }, this), t2 = t2.concat(this.inline.ruler2.disable(e2, true));
    var n2 = e2.filter(function(e3) {
      return t2.indexOf(e3) < 0;
    });
    if (n2.length && !r2)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n2);
    return this;
  }, dt.prototype.use = function(e2) {
    var r2 = [this].concat(Array.prototype.slice.call(arguments, 1));
    return e2.apply(e2, r2), this;
  }, dt.prototype.parse = function(e2, r2) {
    if ("string" != typeof e2)
      throw new Error("Input data should be a String");
    var t2 = new this.core.State(e2, this, r2);
    return this.core.process(t2), t2.tokens;
  }, dt.prototype.render = function(e2, r2) {
    return r2 = r2 || {}, this.renderer.render(this.parse(e2, r2), this.options, r2);
  }, dt.prototype.parseInline = function(e2, r2) {
    var t2 = new this.core.State(e2, this, r2);
    return t2.inlineMode = true, this.core.process(t2), t2.tokens;
  }, dt.prototype.renderInline = function(e2, r2) {
    return r2 = r2 || {}, this.renderer.render(this.parseInline(e2, r2), this.options, r2);
  };
  var mt = dt;
  var e = {
    exports: {}
  };
  function n(e2) {
    return e2 instanceof Map ? e2.clear = e2.delete = e2.set = () => {
      throw Error("map is read-only");
    } : e2 instanceof Set && (e2.add = e2.clear = e2.delete = () => {
      throw Error("set is read-only");
    }), Object.freeze(e2), Object.getOwnPropertyNames(e2).forEach((t2) => {
      var a2 = e2[t2];
      "object" != typeof a2 || Object.isFrozen(a2) || n(a2);
    }), e2;
  }
  e.exports = n, e.exports.default = n;
  class t {
    constructor(e2) {
      void 0 === e2.data && (e2.data = {}), this.data = e2.data, this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function a(e2) {
    return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(
      /'/g,
      "&#x27;"
    );
  }
  function i(e2, ...n2) {
    const t2 = /* @__PURE__ */ Object.create(null);
    for (const n3 in e2)
      t2[n3] = e2[n3];
    return n2.forEach((e3) => {
      for (const n3 in e3)
        t2[n3] = e3[n3];
    }), t2;
  }
  const r = (e2) => !!e2.scope || e2.sublanguage && e2.language;
  class s {
    constructor(e2, n2) {
      this.buffer = "", this.classPrefix = n2.classPrefix, e2.walk(this);
    }
    addText(e2) {
      this.buffer += a(e2);
    }
    openNode(e2) {
      if (!r(e2))
        return;
      let n2 = "";
      n2 = e2.sublanguage ? "language-" + e2.language : ((e3, {
        prefix: n3
      }) => {
        if (e3.includes(".")) {
          const t2 = e3.split(".");
          return [`${n3}${t2.shift()}`, ...t2.map((e4, n4) => `${e4}${"_".repeat(n4 + 1)}`)].join(" ");
        }
        return `${n3}${e3}`;
      })(e2.scope, {
        prefix: this.classPrefix
      }), this.span(n2);
    }
    closeNode(e2) {
      r(e2) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e2) {
      this.buffer += `<span class="${e2}">`;
    }
  }
  const o = (e2 = {}) => {
    const n2 = {
      children: []
    };
    return Object.assign(n2, e2), n2;
  };
  class l {
    constructor() {
      this.rootNode = o(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e2) {
      this.top.children.push(e2);
    }
    openNode(e2) {
      const n2 = o({
        scope: e2
      });
      this.add(n2), this.stack.push(n2);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); )
        ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e2) {
      return this.constructor._walk(e2, this.rootNode);
    }
    static _walk(e2, n2) {
      return "string" == typeof n2 ? e2.addText(n2) : n2.children && (e2.openNode(n2), n2.children.forEach((n3) => this._walk(e2, n3)), e2.closeNode(n2)), e2;
    }
    static _collapse(e2) {
      "string" != typeof e2 && e2.children && (e2.children.every((e3) => "string" == typeof e3) ? e2.children = [
        e2.children.join("")
      ] : e2.children.forEach((e3) => {
        l._collapse(e3);
      }));
    }
  }
  class c extends l {
    constructor(e2) {
      super(), this.options = e2;
    }
    addKeyword(e2, n2) {
      "" !== e2 && (this.openNode(n2), this.addText(e2), this.closeNode());
    }
    addText(e2) {
      "" !== e2 && this.add(e2);
    }
    addSublanguage(e2, n2) {
      const t2 = e2.root;
      t2.sublanguage = true, t2.language = n2, this.add(t2);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return true;
    }
  }
  function d(e2) {
    return e2 ? "string" == typeof e2 ? e2 : e2.source : null;
  }
  function g(e2) {
    return m("(?=", e2, ")");
  }
  function u(e2) {
    return m("(?:", e2, ")*");
  }
  function b(e2) {
    return m("(?:", e2, ")?");
  }
  function m(...e2) {
    return e2.map((e3) => d(e3)).join("");
  }
  function p(...e2) {
    const n2 = ((e3) => {
      const n3 = e3[e3.length - 1];
      return "object" == typeof n3 && n3.constructor === Object ? (e3.splice(e3.length - 1, 1), n3) : {};
    })(e2);
    return "(" + (n2.capture ? "" : "?:") + e2.map((e3) => d(e3)).join("|") + ")";
  }
  function _(e2) {
    return RegExp(e2.toString() + "|").exec("").length - 1;
  }
  const h = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function f(e2, {
    joinWith: n2
  }) {
    let t2 = 0;
    return e2.map((e3) => {
      t2 += 1;
      const n3 = t2;
      let a2 = d(e3), i2 = "";
      for (; a2.length > 0; ) {
        const e4 = h.exec(a2);
        if (!e4) {
          i2 += a2;
          break;
        }
        i2 += a2.substring(0, e4.index), a2 = a2.substring(e4.index + e4[0].length), "\\" === e4[0][0] && e4[1] ? i2 += "\\" + (Number(e4[1]) + n3) : (i2 += e4[0], "(" === e4[0] && t2++);
      }
      return i2;
    }).map((e3) => `(${e3})`).join(n2);
  }
  const E = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", y = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, w = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [y]
  }, N = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [y]
  }, v = (e2, n2, t2 = {}) => {
    const a2 = i({
      scope: "comment",
      begin: e2,
      end: n2,
      contains: []
    }, t2);
    a2.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const r2 = p(
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/
    );
    return a2.contains.push({
      begin: m(/[ ]+/, "(", r2, /[.]?[:]?([.][ ]|[ ])/, "){3}")
    }), a2;
  }, O = v("//", "$"), k = v("/\\*", "\\*/"), x = v("#", "$");
  var M = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: "[a-zA-Z]\\w*",
    UNDERSCORE_IDENT_RE: "[a-zA-Z_]\\w*",
    NUMBER_RE: "\\b\\d+(\\.\\d+)?",
    C_NUMBER_RE: E,
    BINARY_NUMBER_RE: "\\b(0b[01]+)",
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e2 = {}) => {
      const n2 = /^#![ ]*\//;
      return e2.binary && (e2.begin = m(n2, /.*\b/, e2.binary, /\b.*/)), i({
        scope: "meta",
        begin: n2,
        end: /$/,
        relevance: 0,
        "on:begin": (e3, n3) => {
          0 !== e3.index && n3.ignoreMatch();
        }
      }, e2);
    },
    BACKSLASH_ESCAPE: y,
    APOS_STRING_MODE: w,
    QUOTE_STRING_MODE: N,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    COMMENT: v,
    C_LINE_COMMENT_MODE: O,
    C_BLOCK_COMMENT_MODE: k,
    HASH_COMMENT_MODE: x,
    NUMBER_MODE: {
      scope: "number",
      begin: "\\b\\d+(\\.\\d+)?",
      relevance: 0
    },
    C_NUMBER_MODE: {
      scope: "number",
      begin: E,
      relevance: 0
    },
    BINARY_NUMBER_MODE: {
      scope: "number",
      begin: "\\b(0b[01]+)",
      relevance: 0
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [y, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [y]
        }]
      }]
    },
    TITLE_MODE: {
      scope: "title",
      begin: "[a-zA-Z]\\w*",
      relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
      scope: "title",
      begin: "[a-zA-Z_]\\w*",
      relevance: 0
    },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0
    },
    END_SAME_AS_BEGIN: (e2) => Object.assign(e2, {
      "on:begin": (e3, n2) => {
        n2.data._beginMatch = e3[1];
      },
      "on:end": (e3, n2) => {
        n2.data._beginMatch !== e3[1] && n2.ignoreMatch();
      }
    })
  });
  function S(e2, n2) {
    "." === e2.input[e2.index - 1] && n2.ignoreMatch();
  }
  function A(e2, n2) {
    void 0 !== e2.className && (e2.scope = e2.className, delete e2.className);
  }
  function C(e2, n2) {
    n2 && e2.beginKeywords && (e2.begin = "\\b(" + e2.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e2.__beforeBegin = S, e2.keywords = e2.keywords || e2.beginKeywords, delete e2.beginKeywords, void 0 === e2.relevance && (e2.relevance = 0));
  }
  function T(e2, n2) {
    Array.isArray(e2.illegal) && (e2.illegal = p(...e2.illegal));
  }
  function R(e2, n2) {
    if (e2.match) {
      if (e2.begin || e2.end)
        throw Error("begin & end are not supported with match");
      e2.begin = e2.match, delete e2.match;
    }
  }
  function D(e2, n2) {
    void 0 === e2.relevance && (e2.relevance = 1);
  }
  const I = (e2, n2) => {
    if (!e2.beforeMatch)
      return;
    if (e2.starts)
      throw Error("beforeMatch cannot be used with starts");
    const t2 = Object.assign({}, e2);
    Object.keys(e2).forEach((n3) => {
      delete e2[n3];
    }), e2.keywords = t2.keywords, e2.begin = m(t2.beforeMatch, g(t2.begin)), e2.starts = {
      relevance: 0,
      contains: [Object.assign(t2, {
        endsParent: true
      })]
    }, e2.relevance = 0, delete t2.beforeMatch;
  }, L = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
  function B(e2, n2, t2 = "keyword") {
    const a2 = /* @__PURE__ */ Object.create(null);
    return "string" == typeof e2 ? i2(t2, e2.split(" ")) : Array.isArray(e2) ? i2(t2, e2) : Object.keys(e2).forEach((t3) => {
      Object.assign(a2, B(e2[t3], n2, t3));
    }), a2;
    function i2(e3, t3) {
      n2 && (t3 = t3.map((e4) => e4.toLowerCase())), t3.forEach((n3) => {
        const t4 = n3.split("|");
        a2[t4[0]] = [e3, $(t4[0], t4[1])];
      });
    }
  }
  function $(e2, n2) {
    return n2 ? Number(n2) : ((e3) => L.includes(e3.toLowerCase()))(e2) ? 0 : 1;
  }
  const z = {}, F = (e2) => {
    formatAppLog("error", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:390", e2);
  }, U = (e2, ...n2) => {
    formatAppLog("log", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:393", "WARN: " + e2, ...n2);
  }, j = (e2, n2) => {
    z[`${e2}/${n2}`] || (formatAppLog("log", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:396", `Deprecated as of ${e2}. ${n2}`), z[`${e2}/${n2}`] = true);
  }, P = Error();
  function K(e2, n2, {
    key: t2
  }) {
    let a2 = 0;
    const i2 = e2[t2], r2 = {}, s2 = {};
    for (let e3 = 1; e3 <= n2.length; e3++)
      s2[e3 + a2] = i2[e3], r2[e3 + a2] = true, a2 += _(n2[e3 - 1]);
    e2[t2] = s2, e2[t2]._emit = r2, e2[t2]._multi = true;
  }
  function H(e2) {
    ((e3) => {
      e3.scope && "object" == typeof e3.scope && null !== e3.scope && (e3.beginScope = e3.scope, delete e3.scope);
    })(e2), "string" == typeof e2.beginScope && (e2.beginScope = {
      _wrap: e2.beginScope
    }), "string" == typeof e2.endScope && (e2.endScope = {
      _wrap: e2.endScope
    }), ((e3) => {
      if (Array.isArray(e3.begin)) {
        if (e3.skip || e3.excludeBegin || e3.returnBegin)
          throw F(
            "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
          ), P;
        if ("object" != typeof e3.beginScope || null === e3.beginScope)
          throw F("beginScope must be object"), P;
        K(e3, e3.begin, {
          key: "beginScope"
        }), e3.begin = f(e3.begin, {
          joinWith: ""
        });
      }
    })(e2), ((e3) => {
      if (Array.isArray(e3.end)) {
        if (e3.skip || e3.excludeEnd || e3.returnEnd)
          throw F(
            "skip, excludeEnd, returnEnd not compatible with endScope: {}"
          ), P;
        if ("object" != typeof e3.endScope || null === e3.endScope)
          throw F("endScope must be object"), P;
        K(e3, e3.end, {
          key: "endScope"
        }), e3.end = f(e3.end, {
          joinWith: ""
        });
      }
    })(e2);
  }
  function q(e2) {
    function n2(n3, t3) {
      return RegExp(d(n3), "m" + (e2.case_insensitive ? "i" : "") + (e2.unicodeRegex ? "u" : "") + (t3 ? "g" : ""));
    }
    class t2 {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(e3, n3) {
        n3.position = this.position++, this.matchIndexes[this.matchAt] = n3, this.regexes.push([n3, e3]), this.matchAt += _(e3) + 1;
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e3 = this.regexes.map((e4) => e4[1]);
        this.matcherRe = n2(f(e3, {
          joinWith: "|"
        }), true), this.lastIndex = 0;
      }
      exec(e3) {
        this.matcherRe.lastIndex = this.lastIndex;
        const n3 = this.matcherRe.exec(e3);
        if (!n3)
          return null;
        const t3 = n3.findIndex((e4, n4) => n4 > 0 && void 0 !== e4), a3 = this.matchIndexes[t3];
        return n3.splice(0, t3), Object.assign(n3, a3);
      }
    }
    class a2 {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(e3) {
        if (this.multiRegexes[e3])
          return this.multiRegexes[e3];
        const n3 = new t2();
        return this.rules.slice(e3).forEach(([e4, t3]) => n3.addRule(e4, t3)), n3.compile(), this.multiRegexes[e3] = n3, n3;
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e3, n3) {
        this.rules.push([e3, n3]), "begin" === n3.type && this.count++;
      }
      exec(e3) {
        const n3 = this.getMatcher(this.regexIndex);
        n3.lastIndex = this.lastIndex;
        let t3 = n3.exec(e3);
        if (this.resumingScanAtSamePosition())
          if (t3 && t3.index === this.lastIndex)
            ;
          else {
            const n4 = this.getMatcher(0);
            n4.lastIndex = this.lastIndex + 1, t3 = n4.exec(e3);
          }
        return t3 && (this.regexIndex += t3.position + 1, this.regexIndex === this.count && this.considerAll()), t3;
      }
    }
    if (e2.compilerExtensions || (e2.compilerExtensions = []), e2.contains && e2.contains.includes("self"))
      throw Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
      );
    return e2.classNameAliases = i(e2.classNameAliases || {}), function t3(r2, s2) {
      const o2 = r2;
      if (r2.isCompiled)
        return o2;
      [A, R, H, I].forEach((e3) => e3(r2, s2)), e2.compilerExtensions.forEach((e3) => e3(r2, s2)), r2.__beforeBegin = null, [C, T, D].forEach((e3) => e3(r2, s2)), r2.isCompiled = true;
      let l2 = null;
      return "object" == typeof r2.keywords && r2.keywords.$pattern && (r2.keywords = Object.assign({}, r2.keywords), l2 = r2.keywords.$pattern, delete r2.keywords.$pattern), l2 = l2 || /\w+/, r2.keywords && (r2.keywords = B(r2.keywords, e2.case_insensitive)), o2.keywordPatternRe = n2(l2, true), s2 && (r2.begin || (r2.begin = /\B|\b/), o2.beginRe = n2(o2.begin), r2.end || r2.endsWithParent || (r2.end = /\B|\b/), r2.end && (o2.endRe = n2(o2.end)), o2.terminatorEnd = d(o2.end) || "", r2.endsWithParent && s2.terminatorEnd && (o2.terminatorEnd += (r2.end ? "|" : "") + s2.terminatorEnd)), r2.illegal && (o2.illegalRe = n2(r2.illegal)), r2.contains || (r2.contains = []), r2.contains = [].concat(...r2.contains.map((e3) => ((e4) => (e4.variants && !e4.cachedVariants && (e4.cachedVariants = e4.variants.map((n3) => i(e4, {
        variants: null
      }, n3))), e4.cachedVariants ? e4.cachedVariants : Z(e4) ? i(e4, {
        starts: e4.starts ? i(e4.starts) : null
      }) : Object.isFrozen(e4) ? i(e4) : e4))("self" === e3 ? r2 : e3))), r2.contains.forEach((e3) => {
        t3(e3, o2);
      }), r2.starts && t3(r2.starts, s2), o2.matcher = ((e3) => {
        const n3 = new a2();
        return e3.contains.forEach((e4) => n3.addRule(e4.begin, {
          rule: e4,
          type: "begin"
        })), e3.terminatorEnd && n3.addRule(e3.terminatorEnd, {
          type: "end"
        }), e3.illegal && n3.addRule(e3.illegal, {
          type: "illegal"
        }), n3;
      })(o2), o2;
    }(e2);
  }
  function Z(e2) {
    return !!e2 && (e2.endsWithParent || Z(e2.starts));
  }
  class G extends Error {
    constructor(e2, n2) {
      super(e2), this.name = "HTMLInjectionError", this.html = n2;
    }
  }
  const W = a, Q = i, X = Symbol("nomatch");
  var V = ((n2) => {
    const a2 = /* @__PURE__ */ Object.create(null), i2 = /* @__PURE__ */ Object.create(null), r2 = [];
    let s2 = true;
    const o2 = "Could not find the language '{}', did you forget to load/include a language module?", l2 = {
      disableAutodetect: true,
      name: "Plain text",
      contains: []
    };
    let d2 = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: c
    };
    function _2(e2) {
      return d2.noHighlightRe.test(e2);
    }
    function h2(e2, n3, t2) {
      let a3 = "", i3 = "";
      "object" == typeof n3 ? (a3 = e2, t2 = n3.ignoreIllegals, i3 = n3.language) : (j("10.7.0", "highlight(lang, code, ...args) has been deprecated."), j(
        "10.7.0",
        "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
      ), i3 = e2, a3 = n3), void 0 === t2 && (t2 = true);
      const r3 = {
        code: a3,
        language: i3
      };
      x2("before:highlight", r3);
      const s3 = r3.result ? r3.result : f2(r3.language, r3.code, t2);
      return s3.code = r3.code, x2("after:highlight", s3), s3;
    }
    function f2(e2, n3, i3, r3) {
      const l3 = /* @__PURE__ */ Object.create(null);
      function c2() {
        if (!k3.keywords)
          return void M2.addText(S2);
        let e3 = 0;
        k3.keywordPatternRe.lastIndex = 0;
        let n4 = k3.keywordPatternRe.exec(S2), t2 = "";
        for (; n4; ) {
          t2 += S2.substring(e3, n4.index);
          const i4 = w3.case_insensitive ? n4[0].toLowerCase() : n4[0], r4 = (a3 = i4, k3.keywords[a3]);
          if (r4) {
            const [e4, a4] = r4;
            if (M2.addText(t2), t2 = "", l3[i4] = (l3[i4] || 0) + 1, l3[i4] <= 7 && (A2 += a4), e4.startsWith("_"))
              t2 += n4[0];
            else {
              const t3 = w3.classNameAliases[e4] || e4;
              M2.addKeyword(n4[0], t3);
            }
          } else
            t2 += n4[0];
          e3 = k3.keywordPatternRe.lastIndex, n4 = k3.keywordPatternRe.exec(S2);
        }
        var a3;
        t2 += S2.substring(e3), M2.addText(t2);
      }
      function g2() {
        null != k3.subLanguage ? (() => {
          if ("" === S2)
            return;
          let e3 = null;
          if ("string" == typeof k3.subLanguage) {
            if (!a2[k3.subLanguage])
              return void M2.addText(S2);
            e3 = f2(k3.subLanguage, S2, true, x3[k3.subLanguage]), x3[k3.subLanguage] = e3._top;
          } else
            e3 = E2(S2, k3.subLanguage.length ? k3.subLanguage : null);
          k3.relevance > 0 && (A2 += e3.relevance), M2.addSublanguage(e3._emitter, e3.language);
        })() : c2(), S2 = "";
      }
      function u2(e3, n4) {
        let t2 = 1;
        const a3 = n4.length - 1;
        for (; t2 <= a3; ) {
          if (!e3._emit[t2]) {
            t2++;
            continue;
          }
          const a4 = w3.classNameAliases[e3[t2]] || e3[t2], i4 = n4[t2];
          a4 ? M2.addKeyword(i4, a4) : (S2 = i4, c2(), S2 = ""), t2++;
        }
      }
      function b2(e3, n4) {
        return e3.scope && "string" == typeof e3.scope && M2.openNode(w3.classNameAliases[e3.scope] || e3.scope), e3.beginScope && (e3.beginScope._wrap ? (M2.addKeyword(S2, w3.classNameAliases[e3.beginScope._wrap] || e3.beginScope._wrap), S2 = "") : e3.beginScope._multi && (u2(e3.beginScope, n4), S2 = "")), k3 = Object.create(e3, {
          parent: {
            value: k3
          }
        }), k3;
      }
      function m2(e3, n4, a3) {
        let i4 = ((e4, n5) => {
          const t2 = e4 && e4.exec(n5);
          return t2 && 0 === t2.index;
        })(e3.endRe, a3);
        if (i4) {
          if (e3["on:end"]) {
            const a4 = new t(e3);
            e3["on:end"](n4, a4), a4.isMatchIgnored && (i4 = false);
          }
          if (i4) {
            for (; e3.endsParent && e3.parent; )
              e3 = e3.parent;
            return e3;
          }
        }
        if (e3.endsWithParent)
          return m2(e3.parent, n4, a3);
      }
      function p2(e3) {
        return 0 === k3.matcher.regexIndex ? (S2 += e3[0], 1) : (R2 = true, 0);
      }
      function _3(e3) {
        const t2 = e3[0], a3 = n3.substring(e3.index), i4 = m2(k3, e3, a3);
        if (!i4)
          return X;
        const r4 = k3;
        k3.endScope && k3.endScope._wrap ? (g2(), M2.addKeyword(t2, k3.endScope._wrap)) : k3.endScope && k3.endScope._multi ? (g2(), u2(k3.endScope, e3)) : r4.skip ? S2 += t2 : (r4.returnEnd || r4.excludeEnd || (S2 += t2), g2(), r4.excludeEnd && (S2 = t2));
        do {
          k3.scope && M2.closeNode(), k3.skip || k3.subLanguage || (A2 += k3.relevance), k3 = k3.parent;
        } while (k3 !== i4.parent);
        return i4.starts && b2(i4.starts, e3), r4.returnEnd ? 0 : t2.length;
      }
      let h3 = {};
      function y3(a3, r4) {
        const o3 = r4 && r4[0];
        if (S2 += a3, null == o3)
          return g2(), 0;
        if ("begin" === h3.type && "end" === r4.type && h3.index === r4.index && "" === o3) {
          if (S2 += n3.slice(r4.index, r4.index + 1), !s2) {
            const n4 = Error(`0 width match regex (${e2})`);
            throw n4.languageName = e2, n4.badRule = h3.rule, n4;
          }
          return 1;
        }
        if (h3 = r4, "begin" === r4.type)
          return ((e3) => {
            const n4 = e3[0], a4 = e3.rule, i4 = new t(a4), r5 = [a4.__beforeBegin, a4["on:begin"]];
            for (const t2 of r5)
              if (t2 && (t2(e3, i4), i4.isMatchIgnored))
                return p2(n4);
            return a4.skip ? S2 += n4 : (a4.excludeBegin && (S2 += n4), g2(), a4.returnBegin || a4.excludeBegin || (S2 = n4)), b2(a4, e3), a4.returnBegin ? 0 : n4.length;
          })(r4);
        if ("illegal" === r4.type && !i3) {
          const e3 = Error('Illegal lexeme "' + o3 + '" for mode "' + (k3.scope || "<unnamed>") + '"');
          throw e3.mode = k3, e3;
        }
        if ("end" === r4.type) {
          const e3 = _3(r4);
          if (e3 !== X)
            return e3;
        }
        if ("illegal" === r4.type && "" === o3)
          return 1;
        if (T2 > 1e5 && T2 > 3 * r4.index)
          throw Error("potential infinite loop, way more iterations than matches");
        return S2 += o3, o3.length;
      }
      const w3 = v2(e2);
      if (!w3)
        throw F(o2.replace("{}", e2)), Error('Unknown language: "' + e2 + '"');
      const N3 = q(w3);
      let O3 = "", k3 = r3 || N3;
      const x3 = {}, M2 = new d2.__emitter(d2);
      (() => {
        const e3 = [];
        for (let n4 = k3; n4 !== w3; n4 = n4.parent)
          n4.scope && e3.unshift(n4.scope);
        e3.forEach((e4) => M2.openNode(e4));
      })();
      let S2 = "", A2 = 0, C2 = 0, T2 = 0, R2 = false;
      try {
        for (k3.matcher.considerAll(); ; ) {
          T2++, R2 ? R2 = false : k3.matcher.considerAll(), k3.matcher.lastIndex = C2;
          const e3 = k3.matcher.exec(n3);
          if (!e3)
            break;
          const t2 = y3(n3.substring(C2, e3.index), e3);
          C2 = e3.index + t2;
        }
        return y3(n3.substring(C2)), M2.closeAllNodes(), M2.finalize(), O3 = M2.toHTML(), {
          language: e2,
          value: O3,
          relevance: A2,
          illegal: false,
          _emitter: M2,
          _top: k3
        };
      } catch (t2) {
        if (t2.message && t2.message.includes("Illegal"))
          return {
            language: e2,
            value: W(n3),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: t2.message,
              index: C2,
              context: n3.slice(C2 - 100, C2 + 100),
              mode: t2.mode,
              resultSoFar: O3
            },
            _emitter: M2
          };
        if (s2)
          return {
            language: e2,
            value: W(n3),
            illegal: false,
            relevance: 0,
            errorRaised: t2,
            _emitter: M2,
            _top: k3
          };
        throw t2;
      }
    }
    function E2(e2, n3) {
      n3 = n3 || d2.languages || Object.keys(a2);
      const t2 = ((e3) => {
        const n4 = {
          value: W(e3),
          illegal: false,
          relevance: 0,
          _top: l2,
          _emitter: new d2.__emitter(d2)
        };
        return n4._emitter.addText(e3), n4;
      })(e2), i3 = n3.filter(v2).filter(k2).map((n4) => f2(n4, e2, false));
      i3.unshift(t2);
      const r3 = i3.sort((e3, n4) => {
        if (e3.relevance !== n4.relevance)
          return n4.relevance - e3.relevance;
        if (e3.language && n4.language) {
          if (v2(e3.language).supersetOf === n4.language)
            return 1;
          if (v2(n4.language).supersetOf === e3.language)
            return -1;
        }
        return 0;
      }), [s3, o3] = r3, c2 = s3;
      return c2.secondBest = o3, c2;
    }
    function y2(e2) {
      let n3 = null;
      const t2 = ((e3) => {
        let n4 = e3.className + " ";
        n4 += e3.parentNode ? e3.parentNode.className : "";
        const t3 = d2.languageDetectRe.exec(n4);
        if (t3) {
          const n5 = v2(t3[1]);
          return n5 || (U(o2.replace("{}", t3[1])), U("Falling back to no-highlight mode for this block.", e3)), n5 ? t3[1] : "no-highlight";
        }
        return n4.split(/\s+/).find((e4) => _2(e4) || v2(e4));
      })(e2);
      if (_2(t2))
        return;
      if (x2("before:highlightElement", {
        el: e2,
        language: t2
      }), e2.children.length > 0 && (d2.ignoreUnescapedHTML || (formatAppLog(
        "warn",
        "at components/ua-markdown/lib/highlight/uni-highlight.min.js:845",
        "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
      ), formatAppLog("warn", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:847", "https://github.com/highlightjs/highlight.js/wiki/security"), formatAppLog("warn", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:848", "The element with unescaped HTML:"), formatAppLog("warn", "at components/ua-markdown/lib/highlight/uni-highlight.min.js:849", e2)), d2.throwUnescapedHTML))
        throw new G("One of your code blocks includes unescaped HTML.", e2.innerHTML);
      n3 = e2;
      const a3 = n3.textContent, r3 = t2 ? h2(a3, {
        language: t2,
        ignoreIllegals: true
      }) : E2(a3);
      e2.innerHTML = r3.value, ((e3, n4, t3) => {
        const a4 = n4 && i2[n4] || t3;
        e3.classList.add("hljs"), e3.classList.add("language-" + a4);
      })(e2, t2, r3.language), e2.result = {
        language: r3.language,
        re: r3.relevance,
        relevance: r3.relevance
      }, r3.secondBest && (e2.secondBest = {
        language: r3.secondBest.language,
        relevance: r3.secondBest.relevance
      }), x2("after:highlightElement", {
        el: e2,
        result: r3,
        text: a3
      });
    }
    let w2 = false;
    function N2() {
      "loading" !== document.readyState ? document.querySelectorAll(d2.cssSelector).forEach(y2) : w2 = true;
    }
    function v2(e2) {
      return e2 = (e2 || "").toLowerCase(), a2[e2] || a2[i2[e2]];
    }
    function O2(e2, {
      languageName: n3
    }) {
      "string" == typeof e2 && (e2 = [e2]), e2.forEach((e3) => {
        i2[e3.toLowerCase()] = n3;
      });
    }
    function k2(e2) {
      const n3 = v2(e2);
      return n3 && !n3.disableAutodetect;
    }
    function x2(e2, n3) {
      const t2 = e2;
      r2.forEach((e3) => {
        e3[t2] && e3[t2](n3);
      });
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", () => {
      w2 && N2();
    }, false), Object.assign(n2, {
      highlight: h2,
      highlightAuto: E2,
      highlightAll: N2,
      highlightElement: y2,
      highlightBlock: (e2) => (j("10.7.0", "highlightBlock will be removed entirely in v12.0"), j("10.7.0", "Please use highlightElement now."), y2(e2)),
      configure: (e2) => {
        d2 = Q(d2, e2);
      },
      initHighlighting: () => {
        N2(), j("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      },
      initHighlightingOnLoad: () => {
        N2(), j("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      },
      registerLanguage: (e2, t2) => {
        let i3 = null;
        try {
          i3 = t2(n2);
        } catch (n3) {
          if (F("Language definition for '{}' could not be registered.".replace("{}", e2)), !s2)
            throw n3;
          F(n3), i3 = l2;
        }
        i3.name || (i3.name = e2), a2[e2] = i3, i3.rawDefinition = t2.bind(null, n2), i3.aliases && O2(i3.aliases, {
          languageName: e2
        });
      },
      unregisterLanguage: (e2) => {
        delete a2[e2];
        for (const n3 of Object.keys(i2))
          i2[n3] === e2 && delete i2[n3];
      },
      listLanguages: () => Object.keys(a2),
      getLanguage: v2,
      registerAliases: O2,
      autoDetection: k2,
      inherit: Q,
      addPlugin: (e2) => {
        ((e3) => {
          e3["before:highlightBlock"] && !e3["before:highlightElement"] && (e3["before:highlightElement"] = (n3) => {
            e3["before:highlightBlock"](Object.assign({
              block: n3.el
            }, n3));
          }), e3["after:highlightBlock"] && !e3["after:highlightElement"] && (e3["after:highlightElement"] = (n3) => {
            e3["after:highlightBlock"](Object.assign({
              block: n3.el
            }, n3));
          });
        })(e2), r2.push(e2);
      }
    }), n2.debugMode = () => {
      s2 = false;
    }, n2.safeMode = () => {
      s2 = true;
    }, n2.versionString = "11.7.0", n2.regex = {
      concat: m,
      lookahead: g,
      either: p,
      optional: b,
      anyNumberOfTimes: u
    };
    for (const n3 in M)
      "object" == typeof M[n3] && e.exports(M[n3]);
    return Object.assign(n2, M), n2;
  })({});
  const J = (e2) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: e2.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: e2.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z][A-Za-z0-9_-]*/
    }
  }), Y = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], ee = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ], ne = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
  ], te = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ], ae = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
  ].reverse(), ie = ne.concat(te);
  var re = "\\.([0-9](_*[0-9])*)", se = "[0-9a-fA-F](_*[0-9a-fA-F])*", oe = {
    className: "number",
    variants: [{
      begin: `(\\b([0-9](_*[0-9])*)((${re})|\\.)?|(${re}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    }, {
      begin: `\\b([0-9](_*[0-9])*)((${re})[fFdD]?\\b|\\.([fFdD]\\b)?)`
    }, {
      begin: `(${re})[fFdD]?\\b`
    }, {
      begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b"
    }, {
      begin: `\\b0[xX]((${se})\\.?|(${se})?\\.(${se}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
    }, {
      begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
    }, {
      begin: `\\b0[xX](${se})[lL]?\\b`
    }, {
      begin: "\\b0(_*[0-7])*[lL]?\\b"
    }, {
      begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
    }],
    relevance: 0
  };
  function le(e2, n2, t2) {
    return -1 === t2 ? "" : e2.replace(n2, (a2) => le(e2, n2, t2 - 1));
  }
  const ce = "[A-Za-z$_][0-9A-Za-z$_]*", de = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], ge = ["true", "false", "null", "undefined", "NaN", "Infinity"], ue = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly"
  ], be = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], me = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], pe = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], _e = [].concat(me, ue, be);
  function he(e2) {
    const n2 = e2.regex, t2 = ce, a2 = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (e3, n3) => {
        const t3 = e3[0].length + e3.index, a3 = e3.input[t3];
        if ("<" === a3 || "," === a3)
          return void n3.ignoreMatch();
        let i3;
        ">" === a3 && (((e4, {
          after: n4
        }) => {
          const t4 = "</" + e4[0].slice(1);
          return -1 !== e4.input.indexOf(t4, n4);
        })(e3, {
          after: t3
        }) || n3.ignoreMatch());
        const r3 = e3.input.substring(t3);
        ((i3 = r3.match(/^\s*=/)) || (i3 = r3.match(/^\s+extends\s+/)) && 0 === i3.index) && n3.ignoreMatch();
      }
    }, i2 = {
      $pattern: ce,
      keyword: de,
      literal: ge,
      built_in: _e,
      "variable.language": pe
    }, r2 = "\\.([0-9](_?[0-9])*)", s2 = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", o2 = {
      className: "number",
      variants: [{
        begin: `(\\b(${s2})((${r2})|\\.)?|(${r2}))[eE][+-]?([0-9](_?[0-9])*)\\b`
      }, {
        begin: `\\b(${s2})\\b((${r2})\\b|\\.)?|(${r2})\\b`
      }, {
        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
      }, {
        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
      }, {
        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
      }, {
        begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
      }, {
        begin: "\\b0[0-7]+n?\\b"
      }],
      relevance: 0
    }, l2 = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: i2,
      contains: []
    }, c2 = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [e2.BACKSLASH_ESCAPE, l2],
        subLanguage: "xml"
      }
    }, d2 = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: false,
        contains: [e2.BACKSLASH_ESCAPE, l2],
        subLanguage: "css"
      }
    }, g2 = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e2.BACKSLASH_ESCAPE, l2]
    }, u2 = {
      className: "comment",
      variants: [e2.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [{
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+"
          }, {
            className: "type",
            begin: "\\{",
            end: "\\}",
            excludeEnd: true,
            excludeBegin: true,
            relevance: 0
          }, {
            className: "variable",
            begin: t2 + "(?=\\s*(-)|$)",
            endsParent: true,
            relevance: 0
          }, {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }]
        }]
      }), e2.C_BLOCK_COMMENT_MODE, e2.C_LINE_COMMENT_MODE]
    }, b2 = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, c2, d2, g2, {
      match: /\$\d+/
    }, o2];
    l2.contains = b2.concat({
      begin: /\{/,
      end: /\}/,
      keywords: i2,
      contains: ["self"].concat(b2)
    });
    const m2 = [].concat(u2, l2.contains), p2 = m2.concat([{
      begin: /\(/,
      end: /\)/,
      keywords: i2,
      contains: ["self"].concat(m2)
    }]), _2 = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      keywords: i2,
      contains: p2
    }, h2 = {
      variants: [{
        match: [/class/, /\s+/, t2, /\s+/, /extends/, /\s+/, n2.concat(t2, "(", n2.concat(/\./, t2), ")*")],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      }, {
        match: [/class/, /\s+/, t2],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }]
    }, f2 = {
      relevance: 0,
      match: n2.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      ),
      className: "title.class",
      keywords: {
        _: [...ue, ...be]
      }
    }, E2 = {
      variants: [{
        match: [/function/, /\s+/, t2, /(?=\s*\()/]
      }, {
        match: [/function/, /\s*(?=\()/]
      }],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [_2],
      illegal: /%/
    }, y2 = {
      match: n2.concat(/\b/, (w2 = [...me, "super", "import"], n2.concat("(?!", w2.join("|"), ")")), t2, n2.lookahead(/\(/)),
      className: "title.function",
      relevance: 0
    };
    var w2;
    const N2 = {
      begin: n2.concat(/\./, n2.lookahead(n2.concat(t2, /(?![0-9A-Za-z$_(])/))),
      end: t2,
      excludeBegin: true,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, v2 = {
      match: [/get|set/, /\s+/, t2, /(?=\()/],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [{
        begin: /\(\)/
      }, _2]
    }, O2 = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e2.UNDERSCORE_IDENT_RE + ")\\s*=>", k2 = {
      match: [/const|var|let/, /\s+/, t2, /\s*/, /=\s*/, /(async\s*)?/, n2.lookahead(O2)],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [_2]
    };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: i2,
      exports: {
        PARAMS_CONTAINS: p2,
        CLASS_REFERENCE: f2
      },
      illegal: /#(?![$_A-z])/,
      contains: [e2.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }), {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, c2, d2, g2, u2, {
        match: /\$\d+/
      }, o2, f2, {
        className: "attr",
        begin: t2 + n2.lookahead(":"),
        relevance: 0
      }, k2, {
        begin: "(" + e2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [u2, e2.REGEXP_MODE, {
          className: "function",
          begin: O2,
          returnBegin: true,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: e2.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: true
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              keywords: i2,
              contains: p2
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          match: /\s+/,
          relevance: 0
        }, {
          variants: [{
            begin: "<>",
            end: "</>"
          }, {
            match: /<[A-Za-z0-9\\._:-]+\s*\/>/
          }, {
            begin: a2.begin,
            "on:begin": a2.isTrulyOpeningTag,
            end: a2.end
          }],
          subLanguage: "xml",
          contains: [{
            begin: a2.begin,
            end: a2.end,
            skip: true,
            contains: ["self"]
          }]
        }]
      }, E2, {
        beginKeywords: "while if switch catch for"
      }, {
        begin: "\\b(?!function)" + e2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: true,
        label: "func.def",
        contains: [_2, e2.inherit(e2.TITLE_MODE, {
          begin: t2,
          className: "title.function"
        })]
      }, {
        match: /\.\.\./,
        relevance: 0
      }, N2, {
        match: "\\$" + t2,
        relevance: 0
      }, {
        match: [/\bconstructor(?=\s*\()/],
        className: {
          1: "title.function"
        },
        contains: [_2]
      }, y2, {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      }, h2, v2, {
        match: /\$[(.]/
      }]
    };
  }
  const fe = (e2) => m(/\b/, e2, /\w$/.test(e2) ? /\b/ : /\B/), Ee = ["Protocol", "Type"].map(fe), ye = ["init", "self"].map(fe), we = ["Any", "Self"], Ne = [
    "actor",
    "any",
    "associatedtype",
    "async",
    "await",
    /as\?/,
    /as!/,
    "as",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "convenience",
    "default",
    "defer",
    "deinit",
    "didSet",
    "distributed",
    "do",
    "dynamic",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    "for",
    "func",
    "get",
    "guard",
    "if",
    "import",
    "indirect",
    "infix",
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    "isolated",
    "nonisolated",
    "lazy",
    "let",
    "mutating",
    "nonmutating",
    /open\(set\)/,
    "open",
    "operator",
    "optional",
    "override",
    "postfix",
    "precedencegroup",
    "prefix",
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    "rethrows",
    "return",
    "set",
    "some",
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    /try!/,
    "try",
    "typealias",
    /unowned\(safe\)/,
    /unowned\(unsafe\)/,
    "unowned",
    "var",
    "weak",
    "where",
    "while",
    "willSet"
  ], ve = ["false", "nil", "true"], Oe = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"], ke = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warn_unqualified_access",
    "#warning"
  ], xe = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], Me = p(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), Se = p(Me, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), Ae = m(Me, Se, "*"), Ce = p(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  ), Te = p(Ce, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), Re = m(Ce, Te, "*"), De = m(/[A-Z]/, Te, "*"), Ie = [
    "autoclosure",
    m(/convention\(/, p("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    m(
      /objc\(/,
      Re,
      /\)/
    ),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "testable",
    "UIApplicationMain",
    "unknown",
    "usableFromInline"
  ], Le = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  var Be = Object.freeze({
    __proto__: null,
    grmr_bash: (e2) => {
      const n2 = e2.regex, t2 = {}, a2 = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", {
          begin: /:-/,
          contains: [t2]
        }]
      };
      Object.assign(t2, {
        className: "variable",
        variants: [{
          begin: n2.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
        }, a2]
      });
      const i2 = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e2.BACKSLASH_ESCAPE]
      }, r2 = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [e2.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string"
          })]
        }
      }, s2 = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e2.BACKSLASH_ESCAPE, t2, i2]
      };
      i2.contains.push(s2);
      const o2 = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [{
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        }, e2.NUMBER_MODE, t2]
      }, l2 = e2.SHEBANG({
        binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
        relevance: 10
      }), c2 = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [e2.inherit(e2.TITLE_MODE, {
          begin: /\w[\w\d_]*/
        })],
        relevance: 0
      };
      return {
        name: "Bash",
        aliases: ["sh"],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: [
            "if",
            "then",
            "else",
            "elif",
            "fi",
            "for",
            "while",
            "in",
            "do",
            "done",
            "case",
            "esac",
            "function"
          ],
          literal: ["true", "false"],
          built_in: [
            "break",
            "cd",
            "continue",
            "eval",
            "exec",
            "exit",
            "export",
            "getopts",
            "hash",
            "pwd",
            "readonly",
            "return",
            "shift",
            "test",
            "times",
            "trap",
            "umask",
            "unset",
            "alias",
            "bind",
            "builtin",
            "caller",
            "command",
            "declare",
            "echo",
            "enable",
            "help",
            "let",
            "local",
            "logout",
            "mapfile",
            "printf",
            "read",
            "readarray",
            "source",
            "type",
            "typeset",
            "ulimit",
            "unalias",
            "set",
            "shopt",
            "autoload",
            "bg",
            "bindkey",
            "bye",
            "cap",
            "chdir",
            "clone",
            "comparguments",
            "compcall",
            "compctl",
            "compdescribe",
            "compfiles",
            "compgroups",
            "compquote",
            "comptags",
            "comptry",
            "compvalues",
            "dirs",
            "disable",
            "disown",
            "echotc",
            "echoti",
            "emulate",
            "fc",
            "fg",
            "float",
            "functions",
            "getcap",
            "getln",
            "history",
            "integer",
            "jobs",
            "kill",
            "limit",
            "log",
            "noglob",
            "popd",
            "print",
            "pushd",
            "pushln",
            "rehash",
            "sched",
            "setcap",
            "setopt",
            "stat",
            "suspend",
            "ttyctl",
            "unfunction",
            "unhash",
            "unlimit",
            "unsetopt",
            "vared",
            "wait",
            "whence",
            "where",
            "which",
            "zcompile",
            "zformat",
            "zftp",
            "zle",
            "zmodload",
            "zparseopts",
            "zprof",
            "zpty",
            "zregexparse",
            "zsocket",
            "zstyle",
            "ztcp",
            "chcon",
            "chgrp",
            "chown",
            "chmod",
            "cp",
            "dd",
            "df",
            "dir",
            "dircolors",
            "ln",
            "ls",
            "mkdir",
            "mkfifo",
            "mknod",
            "mktemp",
            "mv",
            "realpath",
            "rm",
            "rmdir",
            "shred",
            "sync",
            "touch",
            "truncate",
            "vdir",
            "b2sum",
            "base32",
            "base64",
            "cat",
            "cksum",
            "comm",
            "csplit",
            "cut",
            "expand",
            "fmt",
            "fold",
            "head",
            "join",
            "md5sum",
            "nl",
            "numfmt",
            "od",
            "paste",
            "ptx",
            "pr",
            "sha1sum",
            "sha224sum",
            "sha256sum",
            "sha384sum",
            "sha512sum",
            "shuf",
            "sort",
            "split",
            "sum",
            "tac",
            "tail",
            "tr",
            "tsort",
            "unexpand",
            "uniq",
            "wc",
            "arch",
            "basename",
            "chroot",
            "date",
            "dirname",
            "du",
            "echo",
            "env",
            "expr",
            "factor",
            "groups",
            "hostid",
            "id",
            "link",
            "logname",
            "nice",
            "nohup",
            "nproc",
            "pathchk",
            "pinky",
            "printenv",
            "printf",
            "pwd",
            "readlink",
            "runcon",
            "seq",
            "sleep",
            "stat",
            "stdbuf",
            "stty",
            "tee",
            "test",
            "timeout",
            "tty",
            "uname",
            "unlink",
            "uptime",
            "users",
            "who",
            "whoami",
            "yes"
          ]
        },
        contains: [l2, e2.SHEBANG(), c2, o2, e2.HASH_COMMENT_MODE, r2, {
          match: /(\/[a-z._-]+)+/
        }, s2, {
          className: "",
          begin: /\\"/
        }, {
          className: "string",
          begin: /'/,
          end: /'/
        }, t2]
      };
    },
    grmr_c: (e2) => {
      const n2 = e2.regex, t2 = e2.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }), a2 = "[a-zA-Z_]\\w*::", i2 = "(decltype\\(auto\\)|" + n2.optional(a2) + "[a-zA-Z_]\\w*" + n2.optional("<[^<>]+>") + ")", r2 = {
        className: "type",
        variants: [{
          begin: "\\b[a-z\\d_]*_t\\b"
        }, {
          match: /\batomic_[a-z]{3,6}\b/
        }]
      }, s2 = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, e2.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      }, o2 = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      }, l2 = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, e2.inherit(s2, {
          className: "string"
        }), {
          className: "string",
          begin: /<.*?>/
        }, t2, e2.C_BLOCK_COMMENT_MODE]
      }, c2 = {
        className: "title",
        begin: n2.optional(a2) + e2.IDENT_RE,
        relevance: 0
      }, d2 = n2.optional(a2) + e2.IDENT_RE + "\\s*\\(", g2 = {
        keyword: [
          "asm",
          "auto",
          "break",
          "case",
          "continue",
          "default",
          "do",
          "else",
          "enum",
          "extern",
          "for",
          "fortran",
          "goto",
          "if",
          "inline",
          "register",
          "restrict",
          "return",
          "sizeof",
          "struct",
          "switch",
          "typedef",
          "union",
          "volatile",
          "while",
          "_Alignas",
          "_Alignof",
          "_Atomic",
          "_Generic",
          "_Noreturn",
          "_Static_assert",
          "_Thread_local",
          "alignas",
          "alignof",
          "noreturn",
          "static_assert",
          "thread_local",
          "_Pragma"
        ],
        type: [
          "float",
          "double",
          "signed",
          "unsigned",
          "int",
          "short",
          "long",
          "char",
          "void",
          "_Bool",
          "_Complex",
          "_Imaginary",
          "_Decimal32",
          "_Decimal64",
          "_Decimal128",
          "const",
          "static",
          "complex",
          "bool",
          "imaginary"
        ],
        literal: "true false NULL",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
      }, u2 = [l2, r2, t2, e2.C_BLOCK_COMMENT_MODE, o2, s2], b2 = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: g2,
        contains: u2.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: g2,
          contains: u2.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      }, m2 = {
        begin: "(" + i2 + "[\\*&\\s]+)+" + d2,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: g2,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: g2,
          relevance: 0
        }, {
          begin: d2,
          returnBegin: true,
          contains: [e2.inherit(c2, {
            className: "title.function"
          })],
          relevance: 0
        }, {
          relevance: 0,
          match: /,/
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: g2,
          relevance: 0,
          contains: [t2, e2.C_BLOCK_COMMENT_MODE, s2, o2, r2, {
            begin: /\(/,
            end: /\)/,
            keywords: g2,
            relevance: 0,
            contains: ["self", t2, e2.C_BLOCK_COMMENT_MODE, s2, o2, r2]
          }]
        }, r2, t2, e2.C_BLOCK_COMMENT_MODE, l2]
      };
      return {
        name: "C",
        aliases: ["h"],
        keywords: g2,
        disableAutodetect: true,
        illegal: "</",
        contains: [].concat(b2, m2, u2, [l2, {
          begin: e2.IDENT_RE + "::",
          keywords: g2
        }, {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [{
            beginKeywords: "final class struct"
          }, e2.TITLE_MODE]
        }]),
        exports: {
          preprocessor: l2,
          strings: s2,
          keywords: g2
        }
      };
    },
    grmr_cpp: (e2) => {
      const n2 = e2.regex, t2 = e2.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }), a2 = "[a-zA-Z_]\\w*::", i2 = "(?!struct)(decltype\\(auto\\)|" + n2.optional(a2) + "[a-zA-Z_]\\w*" + n2.optional("<[^<>]+>") + ")", r2 = {
        className: "type",
        begin: "\\b[a-z\\d_]*_t\\b"
      }, s2 = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, e2.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      }, o2 = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      }, l2 = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, e2.inherit(s2, {
          className: "string"
        }), {
          className: "string",
          begin: /<.*?>/
        }, t2, e2.C_BLOCK_COMMENT_MODE]
      }, c2 = {
        className: "title",
        begin: n2.optional(a2) + e2.IDENT_RE,
        relevance: 0
      }, d2 = n2.optional(a2) + e2.IDENT_RE + "\\s*\\(", g2 = {
        type: [
          "bool",
          "char",
          "char16_t",
          "char32_t",
          "char8_t",
          "double",
          "float",
          "int",
          "long",
          "short",
          "void",
          "wchar_t",
          "unsigned",
          "signed",
          "const",
          "static"
        ],
        keyword: [
          "alignas",
          "alignof",
          "and",
          "and_eq",
          "asm",
          "atomic_cancel",
          "atomic_commit",
          "atomic_noexcept",
          "auto",
          "bitand",
          "bitor",
          "break",
          "case",
          "catch",
          "class",
          "co_await",
          "co_return",
          "co_yield",
          "compl",
          "concept",
          "const_cast|10",
          "consteval",
          "constexpr",
          "constinit",
          "continue",
          "decltype",
          "default",
          "delete",
          "do",
          "dynamic_cast|10",
          "else",
          "enum",
          "explicit",
          "export",
          "extern",
          "false",
          "final",
          "for",
          "friend",
          "goto",
          "if",
          "import",
          "inline",
          "module",
          "mutable",
          "namespace",
          "new",
          "noexcept",
          "not",
          "not_eq",
          "nullptr",
          "operator",
          "or",
          "or_eq",
          "override",
          "private",
          "protected",
          "public",
          "reflexpr",
          "register",
          "reinterpret_cast|10",
          "requires",
          "return",
          "sizeof",
          "static_assert",
          "static_cast|10",
          "struct",
          "switch",
          "synchronized",
          "template",
          "this",
          "thread_local",
          "throw",
          "transaction_safe",
          "transaction_safe_dynamic",
          "true",
          "try",
          "typedef",
          "typeid",
          "typename",
          "union",
          "using",
          "virtual",
          "volatile",
          "while",
          "xor",
          "xor_eq"
        ],
        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
        built_in: ["_Pragma"],
        _type_hints: [
          "any",
          "auto_ptr",
          "barrier",
          "binary_semaphore",
          "bitset",
          "complex",
          "condition_variable",
          "condition_variable_any",
          "counting_semaphore",
          "deque",
          "false_type",
          "future",
          "imaginary",
          "initializer_list",
          "istringstream",
          "jthread",
          "latch",
          "lock_guard",
          "multimap",
          "multiset",
          "mutex",
          "optional",
          "ostringstream",
          "packaged_task",
          "pair",
          "promise",
          "priority_queue",
          "queue",
          "recursive_mutex",
          "recursive_timed_mutex",
          "scoped_lock",
          "set",
          "shared_future",
          "shared_lock",
          "shared_mutex",
          "shared_timed_mutex",
          "shared_ptr",
          "stack",
          "string_view",
          "stringstream",
          "timed_mutex",
          "thread",
          "true_type",
          "tuple",
          "unique_lock",
          "unique_ptr",
          "unordered_map",
          "unordered_multimap",
          "unordered_multiset",
          "unordered_set",
          "variant",
          "vector",
          "weak_ptr",
          "wstring",
          "wstring_view"
        ]
      }, u2 = {
        className: "function.dispatch",
        relevance: 0,
        keywords: {
          _hint: [
            "abort",
            "abs",
            "acos",
            "apply",
            "as_const",
            "asin",
            "atan",
            "atan2",
            "calloc",
            "ceil",
            "cerr",
            "cin",
            "clog",
            "cos",
            "cosh",
            "cout",
            "declval",
            "endl",
            "exchange",
            "exit",
            "exp",
            "fabs",
            "floor",
            "fmod",
            "forward",
            "fprintf",
            "fputs",
            "free",
            "frexp",
            "fscanf",
            "future",
            "invoke",
            "isalnum",
            "isalpha",
            "iscntrl",
            "isdigit",
            "isgraph",
            "islower",
            "isprint",
            "ispunct",
            "isspace",
            "isupper",
            "isxdigit",
            "labs",
            "launder",
            "ldexp",
            "log",
            "log10",
            "make_pair",
            "make_shared",
            "make_shared_for_overwrite",
            "make_tuple",
            "make_unique",
            "malloc",
            "memchr",
            "memcmp",
            "memcpy",
            "memset",
            "modf",
            "move",
            "pow",
            "printf",
            "putchar",
            "puts",
            "realloc",
            "scanf",
            "sin",
            "sinh",
            "snprintf",
            "sprintf",
            "sqrt",
            "sscanf",
            "std",
            "stderr",
            "stdin",
            "stdout",
            "strcat",
            "strchr",
            "strcmp",
            "strcpy",
            "strcspn",
            "strlen",
            "strncat",
            "strncmp",
            "strncpy",
            "strpbrk",
            "strrchr",
            "strspn",
            "strstr",
            "swap",
            "tan",
            "tanh",
            "terminate",
            "to_underlying",
            "tolower",
            "toupper",
            "vfprintf",
            "visit",
            "vprintf",
            "vsprintf"
          ]
        },
        begin: n2.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e2.IDENT_RE, n2.lookahead(/(<[^<>]+>|)\s*\(/))
      }, b2 = [u2, l2, r2, t2, e2.C_BLOCK_COMMENT_MODE, o2, s2], m2 = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: g2,
        contains: b2.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: g2,
          contains: b2.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      }, p2 = {
        className: "function",
        begin: "(" + i2 + "[\\*&\\s]+)+" + d2,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: g2,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: g2,
          relevance: 0
        }, {
          begin: d2,
          returnBegin: true,
          contains: [c2],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: true,
          contains: [s2, o2]
        }, {
          relevance: 0,
          match: /,/
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: g2,
          relevance: 0,
          contains: [t2, e2.C_BLOCK_COMMENT_MODE, s2, o2, r2, {
            begin: /\(/,
            end: /\)/,
            keywords: g2,
            relevance: 0,
            contains: ["self", t2, e2.C_BLOCK_COMMENT_MODE, s2, o2, r2]
          }]
        }, r2, t2, e2.C_BLOCK_COMMENT_MODE, l2]
      };
      return {
        name: "C++",
        aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
        keywords: g2,
        illegal: "</",
        classNameAliases: {
          "function.dispatch": "built_in"
        },
        contains: [].concat(m2, p2, u2, b2, [l2, {
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: g2,
          contains: ["self", r2]
        }, {
          begin: e2.IDENT_RE + "::",
          keywords: g2
        }, {
          match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }])
      };
    },
    grmr_csharp: (e2) => {
      const n2 = {
        keyword: [
          "abstract",
          "as",
          "base",
          "break",
          "case",
          "catch",
          "class",
          "const",
          "continue",
          "do",
          "else",
          "event",
          "explicit",
          "extern",
          "finally",
          "fixed",
          "for",
          "foreach",
          "goto",
          "if",
          "implicit",
          "in",
          "interface",
          "internal",
          "is",
          "lock",
          "namespace",
          "new",
          "operator",
          "out",
          "override",
          "params",
          "private",
          "protected",
          "public",
          "readonly",
          "record",
          "ref",
          "return",
          "scoped",
          "sealed",
          "sizeof",
          "stackalloc",
          "static",
          "struct",
          "switch",
          "this",
          "throw",
          "try",
          "typeof",
          "unchecked",
          "unsafe",
          "using",
          "virtual",
          "void",
          "volatile",
          "while"
        ].concat([
          "add",
          "alias",
          "and",
          "ascending",
          "async",
          "await",
          "by",
          "descending",
          "equals",
          "from",
          "get",
          "global",
          "group",
          "init",
          "into",
          "join",
          "let",
          "nameof",
          "not",
          "notnull",
          "on",
          "or",
          "orderby",
          "partial",
          "remove",
          "select",
          "set",
          "unmanaged",
          "value|0",
          "var",
          "when",
          "where",
          "with",
          "yield"
        ]),
        built_in: [
          "bool",
          "byte",
          "char",
          "decimal",
          "delegate",
          "double",
          "dynamic",
          "enum",
          "float",
          "int",
          "long",
          "nint",
          "nuint",
          "object",
          "sbyte",
          "short",
          "string",
          "ulong",
          "uint",
          "ushort"
        ],
        literal: ["default", "false", "null", "true"]
      }, t2 = e2.inherit(e2.TITLE_MODE, {
        begin: "[a-zA-Z](\\.?\\w)*"
      }), a2 = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      }, i2 = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      }, r2 = e2.inherit(i2, {
        illegal: /\n/
      }), s2 = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: n2
      }, o2 = e2.inherit(s2, {
        illegal: /\n/
      }), l2 = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, e2.BACKSLASH_ESCAPE, o2]
      }, c2 = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, s2]
      }, d2 = e2.inherit(c2, {
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, o2]
      });
      s2.contains = [c2, l2, i2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, a2, e2.C_BLOCK_COMMENT_MODE], o2.contains = [d2, l2, r2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, a2, e2.inherit(e2.C_BLOCK_COMMENT_MODE, {
        illegal: /\n/
      })];
      const g2 = {
        variants: [c2, l2, i2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE]
      }, u2 = {
        begin: "<",
        end: ">",
        contains: [{
          beginKeywords: "in out"
        }, t2]
      }, b2 = e2.IDENT_RE + "(<" + e2.IDENT_RE + "(\\s*,\\s*" + e2.IDENT_RE + ")*>)?(\\[\\])?", m2 = {
        begin: "@" + e2.IDENT_RE,
        relevance: 0
      };
      return {
        name: "C#",
        aliases: ["cs", "c#"],
        keywords: n2,
        illegal: /::/,
        contains: [e2.COMMENT("///", "$", {
          returnBegin: true,
          contains: [{
            className: "doctag",
            variants: [{
              begin: "///",
              relevance: 0
            }, {
              begin: "<!--|-->"
            }, {
              begin: "</?",
              end: ">"
            }]
          }]
        }), e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: {
            keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
          }
        }, g2, a2, {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [{
            beginKeywords: "where class"
          }, t2, u2, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [t2, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [t2, u2, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, {
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: true,
          end: "\\]",
          excludeEnd: true,
          contains: [{
            className: "string",
            begin: /"/,
            end: /"/
          }]
        }, {
          beginKeywords: "new return throw await else",
          relevance: 0
        }, {
          className: "function",
          begin: "(" + b2 + "\\s+)+" + e2.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: true,
          end: /\s*[{;=]/,
          excludeEnd: true,
          keywords: n2,
          contains: [{
            beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
            relevance: 0
          }, {
            begin: e2.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: true,
            contains: [e2.TITLE_MODE, u2],
            relevance: 0
          }, {
            match: /\(\)/
          }, {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: n2,
            relevance: 0,
            contains: [g2, a2, e2.C_BLOCK_COMMENT_MODE]
          }, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, m2]
      };
    },
    grmr_css: (e2) => {
      const n2 = e2.regex, t2 = J(e2), a2 = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE];
      return {
        name: "CSS",
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: {
          keyframePosition: "from to"
        },
        classNameAliases: {
          keyframePosition: "selector-tag"
        },
        contains: [t2.BLOCK_COMMENT, {
          begin: /-(webkit|moz|ms|o)-(?=[a-z])/
        }, t2.CSS_NUMBER_MODE, {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        }, {
          className: "selector-class",
          begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
          relevance: 0
        }, t2.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          variants: [{
            begin: ":(" + ne.join("|") + ")"
          }, {
            begin: ":(:)?(" + te.join("|") + ")"
          }]
        }, t2.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + ae.join("|") + ")\\b"
        }, {
          begin: /:/,
          end: /[;}{]/,
          contains: [t2.BLOCK_COMMENT, t2.HEXCOLOR, t2.IMPORTANT, t2.CSS_NUMBER_MODE, ...a2, {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: {
              built_in: "url data-uri"
            },
            contains: [...a2, {
              className: "string",
              begin: /[^)]/,
              endsWithParent: true,
              excludeEnd: true
            }]
          }, t2.FUNCTION_DISPATCH]
        }, {
          begin: n2.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          contains: [{
            className: "keyword",
            begin: /@-?\w[\w]*(-\w+)*/
          }, {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: "and or not only",
              attribute: ee.join(" ")
            },
            contains: [{
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            }, ...a2, t2.CSS_NUMBER_MODE]
          }]
        }, {
          className: "selector-tag",
          begin: "\\b(" + Y.join("|") + ")\\b"
        }]
      };
    },
    grmr_diff: (e2) => {
      const n2 = e2.regex;
      return {
        name: "Diff",
        aliases: ["patch"],
        contains: [{
          className: "meta",
          relevance: 10,
          match: n2.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
        }, {
          className: "comment",
          variants: [{
            begin: n2.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
            end: /$/
          }, {
            match: /^\*{15}$/
          }]
        }, {
          className: "addition",
          begin: /^\+/,
          end: /$/
        }, {
          className: "deletion",
          begin: /^-/,
          end: /$/
        }, {
          className: "addition",
          begin: /^!/,
          end: /$/
        }]
      };
    },
    grmr_go: (e2) => {
      const n2 = {
        keyword: [
          "break",
          "case",
          "chan",
          "const",
          "continue",
          "default",
          "defer",
          "else",
          "fallthrough",
          "for",
          "func",
          "go",
          "goto",
          "if",
          "import",
          "interface",
          "map",
          "package",
          "range",
          "return",
          "select",
          "struct",
          "switch",
          "type",
          "var"
        ],
        type: [
          "bool",
          "byte",
          "complex64",
          "complex128",
          "error",
          "float32",
          "float64",
          "int8",
          "int16",
          "int32",
          "int64",
          "string",
          "uint8",
          "uint16",
          "uint32",
          "uint64",
          "int",
          "uint",
          "uintptr",
          "rune"
        ],
        literal: ["true", "false", "iota", "nil"],
        built_in: [
          "append",
          "cap",
          "close",
          "complex",
          "copy",
          "imag",
          "len",
          "make",
          "new",
          "panic",
          "print",
          "println",
          "real",
          "recover",
          "delete"
        ]
      };
      return {
        name: "Go",
        aliases: ["golang"],
        keywords: n2,
        illegal: "</",
        contains: [e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, {
          className: "string",
          variants: [e2.QUOTE_STRING_MODE, e2.APOS_STRING_MODE, {
            begin: "`",
            end: "`"
          }]
        }, {
          className: "number",
          variants: [{
            begin: e2.C_NUMBER_RE + "[i]",
            relevance: 1
          }, e2.C_NUMBER_MODE]
        }, {
          begin: /:=/
        }, {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: true,
          contains: [e2.TITLE_MODE, {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: true,
            keywords: n2,
            illegal: /["']/
          }]
        }]
      };
    },
    grmr_graphql: (e2) => {
      const n2 = e2.regex;
      return {
        name: "GraphQL",
        aliases: ["gql"],
        case_insensitive: true,
        disableAutodetect: false,
        keywords: {
          keyword: [
            "query",
            "mutation",
            "subscription",
            "type",
            "input",
            "schema",
            "directive",
            "interface",
            "union",
            "scalar",
            "fragment",
            "enum",
            "on"
          ],
          literal: ["true", "false", "null"]
        },
        contains: [e2.HASH_COMMENT_MODE, e2.QUOTE_STRING_MODE, e2.NUMBER_MODE, {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        }, {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        }, {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: true,
          relevance: 0
        }, {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: true
        }, {
          scope: "symbol",
          begin: n2.concat(/[_A-Za-z][_0-9A-Za-z]*/, n2.lookahead(/\s*:/)),
          relevance: 0
        }],
        illegal: [/[;<']/, /BEGIN/]
      };
    },
    grmr_ini: (e2) => {
      const n2 = e2.regex, t2 = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /([+-]+)?[\d]+_[\d_]+/
        }, {
          begin: e2.NUMBER_RE
        }]
      }, a2 = e2.COMMENT();
      a2.variants = [{
        begin: /;/,
        end: /$/
      }, {
        begin: /#/,
        end: /$/
      }];
      const i2 = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d"][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      }, r2 = {
        className: "literal",
        begin: /\bon|off|true|false|yes|no\b/
      }, s2 = {
        className: "string",
        contains: [e2.BACKSLASH_ESCAPE],
        variants: [{
          begin: "'''",
          end: "'''",
          relevance: 10
        }, {
          begin: '"""',
          end: '"""',
          relevance: 10
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "'",
          end: "'"
        }]
      }, o2 = {
        begin: /\[/,
        end: /\]/,
        contains: [a2, r2, i2, s2, t2, "self"],
        relevance: 0
      }, l2 = n2.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
      return {
        name: "TOML, also INI",
        aliases: ["toml"],
        case_insensitive: true,
        illegal: /\S/,
        contains: [a2, {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        }, {
          begin: n2.concat(l2, "(\\s*\\.\\s*", l2, ")*", n2.lookahead(/\s*=\s*[^#\s]/)),
          className: "attr",
          starts: {
            end: /$/,
            contains: [a2, o2, r2, i2, s2, t2]
          }
        }]
      };
    },
    grmr_java: (e2) => {
      const n2 = e2.regex, t2 = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", a2 = t2 + le("(?:<" + t2 + "~~~(?:\\s*,\\s*" + t2 + "~~~)*>)?", /~~~/g, 2), i2 = {
        keyword: [
          "synchronized",
          "abstract",
          "private",
          "var",
          "static",
          "if",
          "const ",
          "for",
          "while",
          "strictfp",
          "finally",
          "protected",
          "import",
          "native",
          "final",
          "void",
          "enum",
          "else",
          "break",
          "transient",
          "catch",
          "instanceof",
          "volatile",
          "case",
          "assert",
          "package",
          "default",
          "public",
          "try",
          "switch",
          "continue",
          "throws",
          "protected",
          "public",
          "private",
          "module",
          "requires",
          "exports",
          "do",
          "sealed",
          "yield",
          "permits"
        ],
        literal: ["false", "true", "null"],
        type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
        built_in: ["super", "this"]
      }, r2 = {
        className: "meta",
        begin: "@" + t2,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
        }]
      }, s2 = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: i2,
        relevance: 0,
        contains: [e2.C_BLOCK_COMMENT_MODE],
        endsParent: true
      };
      return {
        name: "Java",
        aliases: ["jsp"],
        keywords: i2,
        illegal: /<\/|#/,
        contains: [e2.COMMENT("/\\*\\*", "\\*/", {
          relevance: 0,
          contains: [{
            begin: /\w+@/,
            relevance: 0
          }, {
            className: "doctag",
            begin: "@[A-Za-z]+"
          }]
        }), {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        }, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [e2.BACKSLASH_ESCAPE]
        }, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, {
          match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, t2],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }, {
          match: /non-sealed/,
          scope: "keyword"
        }, {
          begin: [n2.concat(/(?!else)/, t2), /\s+/, t2, /\s+/, /=(?!=)/],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        }, {
          begin: [/record/, /\s+/, t2],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [s2, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, {
          beginKeywords: "new throw return else",
          relevance: 0
        }, {
          begin: ["(?:" + a2 + "\\s+)", e2.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
          className: {
            2: "title.function"
          },
          keywords: i2,
          contains: [{
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: i2,
            relevance: 0,
            contains: [r2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, oe, e2.C_BLOCK_COMMENT_MODE]
          }, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
        }, oe, r2]
      };
    },
    grmr_javascript: he,
    grmr_json: (e2) => {
      const n2 = ["true", "false", "null"], t2 = {
        scope: "literal",
        beginKeywords: n2.join(" ")
      };
      return {
        name: "JSON",
        keywords: {
          literal: n2
        },
        contains: [{
          className: "attr",
          begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
          relevance: 1.01
        }, {
          match: /[{}[\],:]/,
          className: "punctuation",
          relevance: 0
        }, e2.QUOTE_STRING_MODE, t2, e2.C_NUMBER_MODE, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE],
        illegal: "\\S"
      };
    },
    grmr_kotlin: (e2) => {
      const n2 = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
      }, t2 = {
        className: "symbol",
        begin: e2.UNDERSCORE_IDENT_RE + "@"
      }, a2 = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [e2.C_NUMBER_MODE]
      }, i2 = {
        className: "variable",
        begin: "\\$" + e2.UNDERSCORE_IDENT_RE
      }, r2 = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [i2, a2]
        }, {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [e2.BACKSLASH_ESCAPE, i2, a2]
        }]
      };
      a2.contains.push(r2);
      const s2 = {
        className: "meta",
        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e2.UNDERSCORE_IDENT_RE + ")?"
      }, o2 = {
        className: "meta",
        begin: "@" + e2.UNDERSCORE_IDENT_RE,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: [e2.inherit(r2, {
            className: "string"
          }), "self"]
        }]
      }, l2 = oe, c2 = e2.COMMENT("/\\*", "\\*/", {
        contains: [e2.C_BLOCK_COMMENT_MODE]
      }), d2 = {
        variants: [{
          className: "type",
          begin: e2.UNDERSCORE_IDENT_RE
        }, {
          begin: /\(/,
          end: /\)/,
          contains: []
        }]
      }, g2 = d2;
      return g2.variants[1].contains = [d2], d2.variants[1].contains = [g2], {
        name: "Kotlin",
        aliases: ["kt", "kts"],
        keywords: n2,
        contains: [e2.COMMENT("/\\*\\*", "\\*/", {
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+"
          }]
        }), e2.C_LINE_COMMENT_MODE, c2, {
          className: "keyword",
          begin: /\b(break|continue|return|this)\b/,
          starts: {
            contains: [{
              className: "symbol",
              begin: /@\w+/
            }]
          }
        }, t2, s2, o2, {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: true,
          excludeEnd: true,
          keywords: n2,
          relevance: 5,
          contains: [{
            begin: e2.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: true,
            relevance: 0,
            contains: [e2.UNDERSCORE_TITLE_MODE]
          }, {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          }, {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: true,
            keywords: n2,
            relevance: 0,
            contains: [{
              begin: /:/,
              end: /[=,\/]/,
              endsWithParent: true,
              contains: [d2, e2.C_LINE_COMMENT_MODE, c2],
              relevance: 0
            }, e2.C_LINE_COMMENT_MODE, c2, s2, o2, r2, e2.C_NUMBER_MODE]
          }, c2]
        }, {
          begin: [/class|interface|trait/, /\s+/, e2.UNDERSCORE_IDENT_RE],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: true,
          illegal: "extends implements",
          contains: [{
            beginKeywords: "public protected internal private constructor"
          }, e2.UNDERSCORE_TITLE_MODE, {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }, {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: true,
            returnEnd: true
          }, s2, o2]
        }, r2, {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: "\n"
        }, l2]
      };
    },
    grmr_less: (e2) => {
      const n2 = J(e2), t2 = ie, a2 = "([\\w-]+|@\\{[\\w-]+\\})", i2 = [], r2 = [], s2 = (e3) => ({
        className: "string",
        begin: "~?" + e3 + ".*?" + e3
      }), o2 = (e3, n3, t3) => ({
        className: e3,
        begin: n3,
        relevance: t3
      }), l2 = {
        $pattern: /[a-z-]+/,
        keyword: "and or not only",
        attribute: ee.join(" ")
      }, c2 = {
        begin: "\\(",
        end: "\\)",
        contains: r2,
        keywords: l2,
        relevance: 0
      };
      r2.push(e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, s2("'"), s2('"'), n2.CSS_NUMBER_MODE, {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: true
        }
      }, n2.HEXCOLOR, c2, o2("variable", "@@?[\\w-]+", 10), o2("variable", "@\\{[\\w-]+\\}"), o2(
        "built_in",
        "~?`[^`]*?`"
      ), {
        className: "attribute",
        begin: "[\\w-]+\\s*:",
        end: ":",
        returnBegin: true,
        excludeEnd: true
      }, n2.IMPORTANT, {
        beginKeywords: "and not"
      }, n2.FUNCTION_DISPATCH);
      const d2 = r2.concat({
        begin: /\{/,
        end: /\}/,
        contains: i2
      }), g2 = {
        beginKeywords: "when",
        endsWithParent: true,
        contains: [{
          beginKeywords: "and not"
        }].concat(r2)
      }, u2 = {
        begin: a2 + "\\s*:",
        returnBegin: true,
        end: /[;}]/,
        relevance: 0,
        contains: [{
          begin: /-(webkit|moz|ms|o)-/
        }, n2.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + ae.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: true,
            illegal: "[<=$]",
            relevance: 0,
            contains: r2
          }
        }]
      }, b2 = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: l2,
          returnEnd: true,
          contains: r2,
          relevance: 0
        }
      }, m2 = {
        className: "variable",
        variants: [{
          begin: "@[\\w-]+\\s*:",
          relevance: 15
        }, {
          begin: "@[\\w-]+"
        }],
        starts: {
          end: "[;}]",
          returnEnd: true,
          contains: d2
        }
      }, p2 = {
        variants: [{
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
        }, {
          begin: a2,
          end: /\{/
        }],
        returnBegin: true,
        returnEnd: true,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, g2, o2("keyword", "all\\b"), o2(
          "variable",
          "@\\{[\\w-]+\\}"
        ), {
          begin: "\\b(" + Y.join("|") + ")\\b",
          className: "selector-tag"
        }, n2.CSS_NUMBER_MODE, o2("selector-tag", a2, 0), o2("selector-id", "#" + a2), o2("selector-class", "\\." + a2, 0), o2("selector-tag", "&", 0), n2.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          begin: ":(" + ne.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: ":(:)?(" + te.join("|") + ")"
        }, {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: d2
        }, {
          begin: "!important"
        }, n2.FUNCTION_DISPATCH]
      }, _2 = {
        begin: `[\\w-]+:(:)?(${t2.join("|")})`,
        returnBegin: true,
        contains: [p2]
      };
      return i2.push(e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, b2, m2, _2, u2, p2, g2, n2.FUNCTION_DISPATCH), {
        name: "Less",
        case_insensitive: true,
        illegal: `[=>'/<($"]`,
        contains: i2
      };
    },
    grmr_lua: (e2) => {
      const n2 = "\\[=*\\[", t2 = "\\]=*\\]", a2 = {
        begin: n2,
        end: t2,
        contains: ["self"]
      }, i2 = [e2.COMMENT("--(?!\\[=*\\[)", "$"), e2.COMMENT("--\\[=*\\[", t2, {
        contains: [a2],
        relevance: 10
      })];
      return {
        name: "Lua",
        keywords: {
          $pattern: e2.UNDERSCORE_IDENT_RE,
          literal: "true false nil",
          keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
          built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        },
        contains: i2.concat([{
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [e2.inherit(e2.TITLE_MODE, {
            begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
          }), {
            className: "params",
            begin: "\\(",
            endsWithParent: true,
            contains: i2
          }].concat(i2)
        }, e2.C_NUMBER_MODE, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, {
          className: "string",
          begin: n2,
          end: t2,
          contains: [a2],
          relevance: 5
        }])
      };
    },
    grmr_makefile: (e2) => {
      const n2 = {
        className: "variable",
        variants: [{
          begin: "\\$\\(" + e2.UNDERSCORE_IDENT_RE + "\\)",
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: /\$[@%<?\^\+\*]/
        }]
      }, t2 = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e2.BACKSLASH_ESCAPE, n2]
      }, a2 = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
        },
        contains: [n2]
      }, i2 = {
        begin: "^" + e2.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"
      }, r2 = {
        className: "section",
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [n2]
      };
      return {
        name: "Makefile",
        aliases: ["mk", "mak", "make"],
        keywords: {
          $pattern: /[\w-]+/,
          keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
        },
        contains: [e2.HASH_COMMENT_MODE, n2, t2, a2, i2, {
          className: "meta",
          begin: /^\.PHONY:/,
          end: /$/,
          keywords: {
            $pattern: /[\.\w]+/,
            keyword: ".PHONY"
          }
        }, r2]
      };
    },
    grmr_xml: (e2) => {
      const n2 = e2.regex, t2 = n2.concat(
        /(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/,
        n2.optional(
          /(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*:/
        ),
        /(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*/
      ), a2 = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      }, i2 = {
        begin: /\s/,
        contains: [{
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      }, r2 = e2.inherit(i2, {
        begin: /\(/,
        end: /\)/
      }), s2 = e2.inherit(e2.APOS_STRING_MODE, {
        className: "string"
      }), o2 = e2.inherit(e2.QUOTE_STRING_MODE, {
        className: "string"
      }), l2 = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: /(?:[\x2D\.0-:A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+/,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: true,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [a2]
            }, {
              begin: /'/,
              end: /'/,
              contains: [a2]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
      return {
        name: "HTML, XML",
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
        case_insensitive: true,
        unicodeRegex: true,
        contains: [{
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [i2, o2, s2, r2, {
            begin: /\[/,
            end: /\]/,
            contains: [{
              className: "meta",
              begin: /<![a-z]/,
              end: />/,
              contains: [i2, r2, o2, s2]
            }]
          }]
        }, e2.COMMENT(/<!--/, /-->/, {
          relevance: 10
        }), {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        }, a2, {
          className: "meta",
          end: /\?>/,
          variants: [{
            begin: /<\?xml/,
            relevance: 10,
            contains: [o2]
          }, {
            begin: /<\?[a-z][a-z0-9]+/
          }]
        }, {
          className: "tag",
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: {
            name: "style"
          },
          contains: [l2],
          starts: {
            end: /<\/style>/,
            returnEnd: true,
            subLanguage: ["css", "xml"]
          }
        }, {
          className: "tag",
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: {
            name: "script"
          },
          contains: [l2],
          starts: {
            end: /<\/script>/,
            returnEnd: true,
            subLanguage: ["javascript", "handlebars", "xml"]
          }
        }, {
          className: "tag",
          begin: /<>|<\/>/
        }, {
          className: "tag",
          begin: n2.concat(/</, n2.lookahead(n2.concat(t2, n2.either(/\/>/, />/, /\s/)))),
          end: /\/?>/,
          contains: [{
            className: "name",
            begin: t2,
            relevance: 0,
            starts: l2
          }]
        }, {
          className: "tag",
          begin: n2.concat(/<\//, n2.lookahead(n2.concat(t2, />/))),
          contains: [{
            className: "name",
            begin: t2,
            relevance: 0
          }, {
            begin: />/,
            relevance: 0,
            endsParent: true
          }]
        }]
      };
    },
    grmr_markdown: (e2) => {
      const n2 = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      }, t2 = {
        variants: [{
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        }, {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        }, {
          begin: e2.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        }, {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        }, {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }],
        returnBegin: true,
        contains: [{
          match: /\[(?=\])/
        }, {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: true,
          returnEnd: true
        }, {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: true,
          excludeEnd: true
        }, {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: true,
          excludeEnd: true
        }]
      }, a2 = {
        className: "strong",
        contains: [],
        variants: [{
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        }, {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }]
      }, i2 = {
        className: "emphasis",
        contains: [],
        variants: [{
          begin: /\*(?![*\s])/,
          end: /\*/
        }, {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }]
      }, r2 = e2.inherit(a2, {
        contains: []
      }), s2 = e2.inherit(i2, {
        contains: []
      });
      a2.contains.push(s2), i2.contains.push(r2);
      let o2 = [n2, t2];
      return [a2, i2, r2, s2].forEach((e3) => {
        e3.contains = e3.contains.concat(o2);
      }), o2 = o2.concat(a2, i2), {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [{
          className: "section",
          variants: [{
            begin: "^#{1,6}",
            end: "$",
            contains: o2
          }, {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [{
              begin: "^[=-]*$"
            }, {
              begin: "^",
              end: "\\n",
              contains: o2
            }]
          }]
        }, n2, {
          className: "bullet",
          begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
          end: "\\s+",
          excludeEnd: true
        }, a2, i2, {
          className: "quote",
          begin: "^>\\s+",
          contains: o2,
          end: "$"
        }, {
          className: "code",
          variants: [{
            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
          }, {
            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
          }, {
            begin: "```",
            end: "```+[ ]*$"
          }, {
            begin: "~~~",
            end: "~~~+[ ]*$"
          }, {
            begin: "`.+?`"
          }, {
            begin: "(?=^( {4}|\\t))",
            contains: [{
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }],
            relevance: 0
          }]
        }, {
          begin: "^[-\\*]{3,}",
          end: "$"
        }, t2, {
          begin: /^\[[^\n]+\]:/,
          returnBegin: true,
          contains: [{
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: true,
            excludeEnd: true
          }, {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: true
          }]
        }]
      };
    },
    grmr_objectivec: (e2) => {
      const n2 = /[a-zA-Z@][a-zA-Z0-9_]*/, t2 = {
        $pattern: n2,
        keyword: ["@interface", "@class", "@protocol", "@implementation"]
      };
      return {
        name: "Objective-C",
        aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
        keywords: {
          "variable.language": ["this", "super"],
          $pattern: n2,
          keyword: [
            "while",
            "export",
            "sizeof",
            "typedef",
            "const",
            "struct",
            "for",
            "union",
            "volatile",
            "static",
            "mutable",
            "if",
            "do",
            "return",
            "goto",
            "enum",
            "else",
            "break",
            "extern",
            "asm",
            "case",
            "default",
            "register",
            "explicit",
            "typename",
            "switch",
            "continue",
            "inline",
            "readonly",
            "assign",
            "readwrite",
            "self",
            "@synchronized",
            "id",
            "typeof",
            "nonatomic",
            "IBOutlet",
            "IBAction",
            "strong",
            "weak",
            "copy",
            "in",
            "out",
            "inout",
            "bycopy",
            "byref",
            "oneway",
            "__strong",
            "__weak",
            "__block",
            "__autoreleasing",
            "@private",
            "@protected",
            "@public",
            "@try",
            "@property",
            "@end",
            "@throw",
            "@catch",
            "@finally",
            "@autoreleasepool",
            "@synthesize",
            "@dynamic",
            "@selector",
            "@optional",
            "@required",
            "@encode",
            "@package",
            "@import",
            "@defs",
            "@compatibility_alias",
            "__bridge",
            "__bridge_transfer",
            "__bridge_retained",
            "__bridge_retain",
            "__covariant",
            "__contravariant",
            "__kindof",
            "_Nonnull",
            "_Nullable",
            "_Null_unspecified",
            "__FUNCTION__",
            "__PRETTY_FUNCTION__",
            "__attribute__",
            "getter",
            "setter",
            "retain",
            "unsafe_unretained",
            "nonnull",
            "nullable",
            "null_unspecified",
            "null_resettable",
            "class",
            "instancetype",
            "NS_DESIGNATED_INITIALIZER",
            "NS_UNAVAILABLE",
            "NS_REQUIRES_SUPER",
            "NS_RETURNS_INNER_POINTER",
            "NS_INLINE",
            "NS_AVAILABLE",
            "NS_DEPRECATED",
            "NS_ENUM",
            "NS_OPTIONS",
            "NS_SWIFT_UNAVAILABLE",
            "NS_ASSUME_NONNULL_BEGIN",
            "NS_ASSUME_NONNULL_END",
            "NS_REFINED_FOR_SWIFT",
            "NS_SWIFT_NAME",
            "NS_SWIFT_NOTHROW",
            "NS_DURING",
            "NS_HANDLER",
            "NS_ENDHANDLER",
            "NS_VALUERETURN",
            "NS_VOIDRETURN"
          ],
          literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
          built_in: ["dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"],
          type: [
            "int",
            "float",
            "char",
            "unsigned",
            "signed",
            "short",
            "long",
            "double",
            "wchar_t",
            "unichar",
            "void",
            "bool",
            "BOOL",
            "id|0",
            "_Bool"
          ]
        },
        illegal: "</",
        contains: [
          {
            className: "built_in",
            begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
          },
          e2.C_LINE_COMMENT_MODE,
          e2.C_BLOCK_COMMENT_MODE,
          e2.C_NUMBER_MODE,
          e2.QUOTE_STRING_MODE,
          e2.APOS_STRING_MODE,
          {
            className: "string",
            variants: [{
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e2.BACKSLASH_ESCAPE]
            }]
          },
          {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: {
              keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include"
            },
            contains: [{
              begin: /\\\n/,
              relevance: 0
            }, e2.inherit(e2.QUOTE_STRING_MODE, {
              className: "string"
            }), {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            }, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE]
          },
          {
            className: "class",
            begin: "(" + t2.keyword.join("|") + ")\\b",
            end: /(\{|$)/,
            excludeEnd: true,
            keywords: t2,
            contains: [e2.UNDERSCORE_TITLE_MODE]
          },
          {
            begin: "\\." + e2.UNDERSCORE_IDENT_RE,
            relevance: 0
          }
        ]
      };
    },
    grmr_perl: (e2) => {
      const n2 = e2.regex, t2 = /[dualxmsipngr]{0,12}/, a2 = {
        $pattern: /[\w.]+/,
        keyword: "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
      }, i2 = {
        className: "subst",
        begin: "[$@]\\{",
        end: "\\}",
        keywords: a2
      }, r2 = {
        begin: /->\{/,
        end: /\}/
      }, s2 = {
        variants: [{
          begin: /\$\d/
        }, {
          begin: n2.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
        }, {
          begin: /[$%@][^\s\w{]/,
          relevance: 0
        }]
      }, o2 = [e2.BACKSLASH_ESCAPE, i2, s2], l2 = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/], c2 = (e3, a3, i3 = "\\1") => {
        const r3 = "\\1" === i3 ? i3 : n2.concat(i3, a3);
        return n2.concat(n2.concat("(?:", e3, ")"), a3, /(?:\\.|[^\\\/])*?/, r3, /(?:\\.|[^\\\/])*?/, i3, t2);
      }, d2 = (e3, a3, i3) => n2.concat(n2.concat("(?:", e3, ")"), a3, /(?:\\.|[^\\\/])*?/, i3, t2), g2 = [s2, e2.HASH_COMMENT_MODE, e2.COMMENT(/^=\w/, /=cut/, {
        endsWithParent: true
      }), r2, {
        className: "string",
        contains: o2,
        variants: [{
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        }, {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        }, {
          begin: "'",
          end: "'",
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "`",
          end: "`",
          contains: [e2.BACKSLASH_ESCAPE]
        }, {
          begin: /\{\w+\}/,
          relevance: 0
        }, {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }]
      }, {
        className: "number",
        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0
      }, {
        begin: "(\\/\\/|" + e2.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [e2.HASH_COMMENT_MODE, {
          className: "regexp",
          variants: [{
            begin: c2("s|tr|y", n2.either(...l2, {
              capture: true
            }))
          }, {
            begin: c2("s|tr|y", "\\(", "\\)")
          }, {
            begin: c2("s|tr|y", "\\[", "\\]")
          }, {
            begin: c2("s|tr|y", "\\{", "\\}")
          }],
          relevance: 2
        }, {
          className: "regexp",
          variants: [{
            begin: /(m|qr)\/\//,
            relevance: 0
          }, {
            begin: d2("(?:m|qr)?", /\//, /\//)
          }, {
            begin: d2("m|qr", n2.either(...l2, {
              capture: true
            }), /\1/)
          }, {
            begin: d2("m|qr", /\(/, /\)/)
          }, {
            begin: d2("m|qr", /\[/, /\]/)
          }, {
            begin: d2("m|qr", /\{/, /\}/)
          }]
        }]
      }, {
        className: "function",
        beginKeywords: "sub",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: true,
        relevance: 5,
        contains: [e2.TITLE_MODE]
      }, {
        begin: "-\\w\\b",
        relevance: 0
      }, {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [{
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }]
      }];
      return i2.contains = g2, r2.contains = g2, {
        name: "Perl",
        aliases: ["pl", "pm"],
        keywords: a2,
        contains: g2
      };
    },
    grmr_php: (e2) => {
      const n2 = e2.regex, t2 = /(?![A-Za-z0-9])(?![$])/, a2 = n2.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, t2), i2 = n2.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, t2), r2 = {
        scope: "variable",
        match: "\\$+" + a2
      }, s2 = {
        scope: "subst",
        variants: [{
          begin: /\$\w+/
        }, {
          begin: /\{\$/,
          end: /\}/
        }]
      }, o2 = e2.inherit(e2.APOS_STRING_MODE, {
        illegal: null
      }), l2 = "[ 	\n]", c2 = {
        scope: "string",
        variants: [e2.inherit(e2.QUOTE_STRING_MODE, {
          illegal: null,
          contains: e2.QUOTE_STRING_MODE.contains.concat(s2)
        }), o2, e2.END_SAME_AS_BEGIN({
          begin: /<<<[ \t]*(\w+)\n/,
          end: /[ \t]*(\w+)\b/,
          contains: e2.QUOTE_STRING_MODE.contains.concat(s2)
        })]
      }, d2 = {
        scope: "number",
        variants: [{
          begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
        }, {
          begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
        }, {
          begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
        }, {
          begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
        }],
        relevance: 0
      }, g2 = ["false", "null", "true"], u2 = [
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield"
      ], b2 = [
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass"
      ], m2 = {
        keyword: u2,
        literal: ((e3) => {
          const n3 = [];
          return e3.forEach((e4) => {
            n3.push(e4), e4.toLowerCase() === e4 ? n3.push(e4.toUpperCase()) : n3.push(e4.toLowerCase());
          }), n3;
        })(g2),
        built_in: b2
      }, p2 = (e3) => e3.map((e4) => e4.replace(/\|\d+$/, "")), _2 = {
        variants: [{
          match: [/new/, n2.concat(l2, "+"), n2.concat("(?!", p2(b2).join("\\b|"), "\\b)"), i2],
          scope: {
            1: "keyword",
            4: "title.class"
          }
        }]
      }, h2 = n2.concat(a2, "\\b(?!\\()"), f2 = {
        variants: [{
          match: [n2.concat(/::/, n2.lookahead(/(?!class\b)/)), h2],
          scope: {
            2: "variable.constant"
          }
        }, {
          match: [/::/, /class/],
          scope: {
            2: "variable.language"
          }
        }, {
          match: [i2, n2.concat(/::/, n2.lookahead(/(?!class\b)/)), h2],
          scope: {
            1: "title.class",
            3: "variable.constant"
          }
        }, {
          match: [i2, n2.concat("::", n2.lookahead(/(?!class\b)/))],
          scope: {
            1: "title.class"
          }
        }, {
          match: [i2, /::/, /class/],
          scope: {
            1: "title.class",
            3: "variable.language"
          }
        }]
      }, E2 = {
        scope: "attr",
        match: n2.concat(a2, n2.lookahead(":"), n2.lookahead(/(?!::)/))
      }, y2 = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: m2,
        contains: [E2, r2, f2, e2.C_BLOCK_COMMENT_MODE, c2, d2, _2]
      }, w2 = {
        relevance: 0,
        match: [
          /\b/,
          n2.concat("(?!fn\\b|function\\b|", p2(u2).join("\\b|"), "|", p2(b2).join("\\b|"), "\\b)"),
          a2,
          n2.concat(l2, "*"),
          n2.lookahead(/(?=\()/)
        ],
        scope: {
          3: "title.function.invoke"
        },
        contains: [y2]
      };
      y2.contains.push(w2);
      const N2 = [E2, f2, e2.C_BLOCK_COMMENT_MODE, c2, d2, _2];
      return {
        case_insensitive: false,
        keywords: m2,
        contains: [{
          begin: n2.concat(/#\[\s*/, i2),
          beginScope: "meta",
          end: /]/,
          endScope: "meta",
          keywords: {
            literal: g2,
            keyword: ["new", "array"]
          },
          contains: [{
            begin: /\[/,
            end: /]/,
            keywords: {
              literal: g2,
              keyword: ["new", "array"]
            },
            contains: ["self", ...N2]
          }, ...N2, {
            scope: "meta",
            match: i2
          }]
        }, e2.HASH_COMMENT_MODE, e2.COMMENT("//", "$"), e2.COMMENT("/\\*", "\\*/", {
          contains: [{
            scope: "doctag",
            match: "@[A-Za-z]+"
          }]
        }), {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e2.MATCH_NOTHING_RE,
            contains: [{
              match: /\?>/,
              scope: "meta",
              endsParent: true
            }]
          }
        }, {
          scope: "meta",
          variants: [{
            begin: /<\?php/,
            relevance: 10
          }, {
            begin: /<\?=/
          }, {
            begin: /<\?/,
            relevance: 0.1
          }, {
            begin: /\?>/
          }]
        }, {
          scope: "variable.language",
          match: /\$this\b/
        }, r2, w2, f2, {
          match: [/const/, /\s/, a2],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        }, _2, {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: true,
          illegal: "[$%\\[]",
          contains: [{
            beginKeywords: "use"
          }, e2.UNDERSCORE_TITLE_MODE, {
            begin: "=>",
            endsParent: true
          }, {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: true,
            excludeEnd: true,
            keywords: m2,
            contains: ["self", r2, f2, e2.C_BLOCK_COMMENT_MODE, c2, d2]
          }]
        }, {
          scope: "class",
          variants: [{
            beginKeywords: "enum",
            illegal: /[($"]/
          }, {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }],
          relevance: 0,
          end: /\{/,
          excludeEnd: true,
          contains: [{
            beginKeywords: "extends implements"
          }, e2.UNDERSCORE_TITLE_MODE]
        }, {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [e2.inherit(e2.UNDERSCORE_TITLE_MODE, {
            scope: "title.class"
          })]
        }, {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [{
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          }, e2.UNDERSCORE_TITLE_MODE]
        }, c2, d2]
      };
    },
    grmr_php_template: (e2) => ({
      name: "PHP template",
      subLanguage: "xml",
      contains: [{
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [{
          begin: "/\\*",
          end: "\\*/",
          skip: true
        }, {
          begin: 'b"',
          end: '"',
          skip: true
        }, {
          begin: "b'",
          end: "'",
          skip: true
        }, e2.inherit(e2.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: true
        }), e2.inherit(e2.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: true
        })]
      }]
    }),
    grmr_plaintext: (e2) => ({
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: true
    }),
    grmr_python: (e2) => {
      const n2 = e2.regex, t2 = /(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*/, a2 = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield"
      ], i2 = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: a2,
        built_in: [
          "__import__",
          "abs",
          "all",
          "any",
          "ascii",
          "bin",
          "bool",
          "breakpoint",
          "bytearray",
          "bytes",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "exec",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "vars",
          "zip"
        ],
        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        type: [
          "Any",
          "Callable",
          "Coroutine",
          "Dict",
          "List",
          "Literal",
          "Generic",
          "Optional",
          "Sequence",
          "Set",
          "Tuple",
          "Type",
          "Union"
        ]
      }, r2 = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      }, s2 = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: i2,
        illegal: /#/
      }, o2 = {
        begin: /\{\{/,
        relevance: 0
      }, l2 = {
        className: "string",
        contains: [e2.BACKSLASH_ESCAPE],
        variants: [{
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [e2.BACKSLASH_ESCAPE, r2],
          relevance: 10
        }, {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [e2.BACKSLASH_ESCAPE, r2],
          relevance: 10
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [e2.BACKSLASH_ESCAPE, r2, o2, s2]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [e2.BACKSLASH_ESCAPE, r2, o2, s2]
        }, {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [e2.BACKSLASH_ESCAPE, o2, s2]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [e2.BACKSLASH_ESCAPE, o2, s2]
        }, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE]
      }, c2 = "[0-9](_?[0-9])*", d2 = `(\\b(${c2}))?\\.(${c2})|\\b(${c2})\\.`, g2 = "\\b|" + a2.join("|"), u2 = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: `(\\b(${c2})|(${d2}))[eE][+-]?(${c2})[jJ]?(?=${g2})`
        }, {
          begin: `(${d2})[jJ]?`
        }, {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g2})`
        }, {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${g2})`
        }, {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g2})`
        }, {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g2})`
        }, {
          begin: `\\b(${c2})[jJ](?=${g2})`
        }]
      }, b2 = {
        className: "comment",
        begin: n2.lookahead(/# type:/),
        end: /$/,
        keywords: i2,
        contains: [{
          begin: /# type:/
        }, {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: true
        }]
      }, m2 = {
        className: "params",
        variants: [{
          className: "",
          begin: /\(\s*\)/,
          skip: true
        }, {
          begin: /\(/,
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          keywords: i2,
          contains: ["self", r2, u2, l2, e2.HASH_COMMENT_MODE]
        }]
      };
      return s2.contains = [l2, u2, r2], {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        unicodeRegex: true,
        keywords: i2,
        illegal: /(<\/|->|\?)|=>/,
        contains: [r2, u2, {
          begin: /\bself\b/
        }, {
          beginKeywords: "if",
          relevance: 0
        }, l2, b2, e2.HASH_COMMENT_MODE, {
          match: [/\bdef/, /\s+/, t2],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [m2]
        }, {
          variants: [{
            match: [/\bclass/, /\s+/, t2, /\s*/, /\(\s*/, t2, /\s*\)/]
          }, {
            match: [/\bclass/, /\s+/, t2]
          }],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        }, {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [u2, m2, l2]
        }]
      };
    },
    grmr_python_repl: (e2) => ({
      aliases: ["pycon"],
      contains: [{
        className: "meta.prompt",
        starts: {
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [{
          begin: /^>>>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    }),
    grmr_r: (e2) => {
      const n2 = e2.regex, t2 = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, a2 = n2.either(
        /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
        /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
        /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
      ), i2 = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, r2 = n2.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
      return {
        name: "R",
        keywords: {
          $pattern: t2,
          keyword: "function if in break next repeat else for while",
          literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
          built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        },
        contains: [e2.COMMENT(/#'/, /$/, {
          contains: [{
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: n2.lookahead(n2.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
              endsParent: true
            }
          }, {
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [{
              scope: "variable",
              variants: [{
                match: t2
              }, {
                match: /`(?:\\.|[^`\\])+`/
              }],
              endsParent: true
            }]
          }, {
            scope: "doctag",
            match: /@[a-zA-Z]+/
          }, {
            scope: "keyword",
            match: /\\[a-zA-Z]+/
          }]
        }), e2.HASH_COMMENT_MODE, {
          scope: "string",
          contains: [e2.BACKSLASH_ESCAPE],
          variants: [e2.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }), e2.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }), e2.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }), e2.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }), e2.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }), e2.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }), {
            begin: '"',
            end: '"',
            relevance: 0
          }, {
            begin: "'",
            end: "'",
            relevance: 0
          }]
        }, {
          relevance: 0,
          variants: [{
            scope: {
              1: "operator",
              2: "number"
            },
            match: [i2, a2]
          }, {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [/%[^%]*%/, a2]
          }, {
            scope: {
              1: "punctuation",
              2: "number"
            },
            match: [r2, a2]
          }, {
            scope: {
              2: "number"
            },
            match: [/[^a-zA-Z0-9._]|^/, a2]
          }]
        }, {
          scope: {
            3: "operator"
          },
          match: [t2, /\s+/, /<-/, /\s+/]
        }, {
          scope: "operator",
          relevance: 0,
          variants: [{
            match: i2
          }, {
            match: /%[^%]*%/
          }]
        }, {
          scope: "punctuation",
          relevance: 0,
          match: r2
        }, {
          begin: "`",
          end: "`",
          contains: [{
            begin: /\\./
          }]
        }]
      };
    },
    grmr_ruby: (e2) => {
      const n2 = e2.regex, t2 = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", a2 = n2.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/), i2 = n2.concat(a2, /(::\w+)*/), r2 = {
        "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
        "variable.language": ["self", "super"],
        keyword: [
          "alias",
          "and",
          "begin",
          "BEGIN",
          "break",
          "case",
          "class",
          "defined",
          "do",
          "else",
          "elsif",
          "end",
          "END",
          "ensure",
          "for",
          "if",
          "in",
          "module",
          "next",
          "not",
          "or",
          "redo",
          "require",
          "rescue",
          "retry",
          "return",
          "then",
          "undef",
          "unless",
          "until",
          "when",
          "while",
          "yield",
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ],
        built_in: [
          "proc",
          "lambda",
          "attr_accessor",
          "attr_reader",
          "attr_writer",
          "define_method",
          "private_constant",
          "module_function"
        ],
        literal: ["true", "false", "nil"]
      }, s2 = {
        className: "doctag",
        begin: "@[A-Za-z]+"
      }, o2 = {
        begin: "#<",
        end: ">"
      }, l2 = [e2.COMMENT("#", "$", {
        contains: [s2]
      }), e2.COMMENT("^=begin", "^=end", {
        contains: [s2],
        relevance: 10
      }), e2.COMMENT("^__END__", e2.MATCH_NOTHING_RE)], c2 = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: r2
      }, d2 = {
        className: "string",
        contains: [e2.BACKSLASH_ESCAPE, c2],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /`/,
          end: /`/
        }, {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        }, {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        }, {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        }, {
          begin: /%[qQwWx]?</,
          end: />/
        }, {
          begin: /%[qQwWx]?\//,
          end: /\//
        }, {
          begin: /%[qQwWx]?%/,
          end: /%/
        }, {
          begin: /%[qQwWx]?-/,
          end: /-/
        }, {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        }, {
          begin: /\B\?(\\\d{1,3})/
        }, {
          begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
        }, {
          begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
        }, {
          begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\(c|C-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\?\S/
        }, {
          begin: n2.concat(/<<[-~]?'?/, n2.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
          contains: [e2.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [e2.BACKSLASH_ESCAPE, c2]
          })]
        }]
      }, g2 = "[0-9](_?[0-9])*", u2 = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: `\\b([1-9](_?[0-9])*|0)(\\.(${g2}))?([eE][+-]?(${g2})|r)?i?\\b`
        }, {
          begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
        }, {
          begin: "\\b0(_?[0-7])+r?i?\\b"
        }]
      }, b2 = {
        variants: [{
          match: /\(\)/
        }, {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: true,
          endsParent: true,
          keywords: r2
        }]
      }, m2 = [d2, {
        variants: [{
          match: [/class\s+/, i2, /\s+<\s+/, i2]
        }, {
          match: [/\b(class|module)\s+/, i2]
        }],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: r2
      }, {
        match: [/(include|extend)\s+/, i2],
        scope: {
          2: "title.class"
        },
        keywords: r2
      }, {
        relevance: 0,
        match: [i2, /\.new[. (]/],
        scope: {
          1: "title.class"
        }
      }, {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      }, {
        relevance: 0,
        match: a2,
        scope: "title.class"
      }, {
        match: [/def/, /\s+/, t2],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [b2]
      }, {
        begin: e2.IDENT_RE + "::"
      }, {
        className: "symbol",
        begin: e2.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [d2, {
          begin: t2
        }],
        relevance: 0
      }, u2, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      }, {
        className: "params",
        begin: /\|/,
        end: /\|/,
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0,
        keywords: r2
      }, {
        begin: "(" + e2.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [{
          className: "regexp",
          contains: [e2.BACKSLASH_ESCAPE, c2],
          illegal: /\n/,
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: /%r\{/,
            end: /\}[a-z]*/
          }, {
            begin: "%r\\(",
            end: "\\)[a-z]*"
          }, {
            begin: "%r!",
            end: "![a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }].concat(o2, l2),
        relevance: 0
      }].concat(o2, l2);
      c2.contains = m2, b2.contains = m2;
      const p2 = [{
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: m2
        }
      }, {
        className: "meta.prompt",
        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts: {
          end: "$",
          keywords: r2,
          contains: m2
        }
      }];
      return l2.unshift(o2), {
        name: "Ruby",
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: r2,
        illegal: /\/\*/,
        contains: [e2.SHEBANG({
          binary: "ruby"
        })].concat(p2).concat(l2).concat(m2)
      };
    },
    grmr_rust: (e2) => {
      const n2 = e2.regex, t2 = {
        className: "title.function.invoke",
        relevance: 0,
        begin: n2.concat(/\b/, /(?!let\b)/, e2.IDENT_RE, n2.lookahead(/\s*\(/))
      }, a2 = "([ui](8|16|32|64|128|size)|f(32|64))?", i2 = [
        "drop ",
        "Copy",
        "Send",
        "Sized",
        "Sync",
        "Drop",
        "Fn",
        "FnMut",
        "FnOnce",
        "ToOwned",
        "Clone",
        "Debug",
        "PartialEq",
        "PartialOrd",
        "Eq",
        "Ord",
        "AsRef",
        "AsMut",
        "Into",
        "From",
        "Default",
        "Iterator",
        "Extend",
        "IntoIterator",
        "DoubleEndedIterator",
        "ExactSizeIterator",
        "SliceConcatExt",
        "ToString",
        "assert!",
        "assert_eq!",
        "bitflags!",
        "bytes!",
        "cfg!",
        "col!",
        "concat!",
        "concat_idents!",
        "debug_assert!",
        "debug_assert_eq!",
        "env!",
        "panic!",
        "file!",
        "format!",
        "format_args!",
        "include_bytes!",
        "include_str!",
        "line!",
        "local_data_key!",
        "module_path!",
        "option_env!",
        "print!",
        "println!",
        "select!",
        "stringify!",
        "try!",
        "unimplemented!",
        "unreachable!",
        "vec!",
        "write!",
        "writeln!",
        "macro_rules!",
        "assert_ne!",
        "debug_assert_ne!"
      ], r2 = [
        "i8",
        "i16",
        "i32",
        "i64",
        "i128",
        "isize",
        "u8",
        "u16",
        "u32",
        "u64",
        "u128",
        "usize",
        "f32",
        "f64",
        "str",
        "char",
        "bool",
        "Box",
        "Option",
        "Result",
        "String",
        "Vec"
      ];
      return {
        name: "Rust",
        aliases: ["rs"],
        keywords: {
          $pattern: e2.IDENT_RE + "!?",
          type: r2,
          keyword: [
            "abstract",
            "as",
            "async",
            "await",
            "become",
            "box",
            "break",
            "const",
            "continue",
            "crate",
            "do",
            "dyn",
            "else",
            "enum",
            "extern",
            "false",
            "final",
            "fn",
            "for",
            "if",
            "impl",
            "in",
            "let",
            "loop",
            "macro",
            "match",
            "mod",
            "move",
            "mut",
            "override",
            "priv",
            "pub",
            "ref",
            "return",
            "self",
            "Self",
            "static",
            "struct",
            "super",
            "trait",
            "true",
            "try",
            "type",
            "typeof",
            "unsafe",
            "unsized",
            "use",
            "virtual",
            "where",
            "while",
            "yield"
          ],
          literal: ["true", "false", "Some", "None", "Ok", "Err"],
          built_in: i2
        },
        illegal: "</",
        contains: [e2.C_LINE_COMMENT_MODE, e2.COMMENT("/\\*", "\\*/", {
          contains: ["self"]
        }), e2.inherit(e2.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }), {
          className: "string",
          variants: [{
            begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
          }, {
            begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
          }]
        }, {
          className: "symbol",
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
        }, {
          className: "number",
          variants: [{
            begin: "\\b0b([01_]+)" + a2
          }, {
            begin: "\\b0o([0-7_]+)" + a2
          }, {
            begin: "\\b0x([A-Fa-f0-9_]+)" + a2
          }, {
            begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a2
          }],
          relevance: 0
        }, {
          begin: [/fn/, /\s+/, e2.UNDERSCORE_IDENT_RE],
          className: {
            1: "keyword",
            3: "title.function"
          }
        }, {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [{
            className: "string",
            begin: /"/,
            end: /"/
          }]
        }, {
          begin: [/let/, /\s+/, /(?:mut\s+)?/, e2.UNDERSCORE_IDENT_RE],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        }, {
          begin: [/for/, /\s+/, e2.UNDERSCORE_IDENT_RE, /\s+/, /in/],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        }, {
          begin: [/type/, /\s+/, e2.UNDERSCORE_IDENT_RE],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }, {
          begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e2.UNDERSCORE_IDENT_RE],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }, {
          begin: e2.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: i2,
            type: r2
          }
        }, {
          className: "punctuation",
          begin: "->"
        }, t2]
      };
    },
    grmr_scss: (e2) => {
      const n2 = J(e2), t2 = te, a2 = ne, i2 = "@[a-z-]+", r2 = {
        className: "variable",
        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
        relevance: 0
      };
      return {
        name: "SCSS",
        case_insensitive: true,
        illegal: "[=/|']",
        contains: [e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, n2.CSS_NUMBER_MODE, {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        }, {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        }, n2.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-tag",
          begin: "\\b(" + Y.join("|") + ")\\b",
          relevance: 0
        }, {
          className: "selector-pseudo",
          begin: ":(" + a2.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: ":(:)?(" + t2.join("|") + ")"
        }, r2, {
          begin: /\(/,
          end: /\)/,
          contains: [n2.CSS_NUMBER_MODE]
        }, n2.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + ae.join("|") + ")\\b"
        }, {
          begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            n2.BLOCK_COMMENT,
            r2,
            n2.HEXCOLOR,
            n2.CSS_NUMBER_MODE,
            e2.QUOTE_STRING_MODE,
            e2.APOS_STRING_MODE,
            n2.IMPORTANT,
            n2.FUNCTION_DISPATCH
          ]
        }, {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: i2,
            keyword: "@page @font-face"
          }
        }, {
          begin: "@",
          end: "[{;]",
          returnBegin: true,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: ee.join(" ")
          },
          contains: [{
            begin: i2,
            className: "keyword"
          }, {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          }, r2, e2.QUOTE_STRING_MODE, e2.APOS_STRING_MODE, n2.HEXCOLOR, n2.CSS_NUMBER_MODE]
        }, n2.FUNCTION_DISPATCH]
      };
    },
    grmr_shell: (e2) => ({
      name: "Shell Session",
      aliases: ["console", "shellsession"],
      contains: [{
        className: "meta.prompt",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }]
    }),
    grmr_sql: (e2) => {
      const n2 = e2.regex, t2 = e2.COMMENT("--", "$"), a2 = ["true", "false", "unknown"], i2 = [
        "bigint",
        "binary",
        "blob",
        "boolean",
        "char",
        "character",
        "clob",
        "date",
        "dec",
        "decfloat",
        "decimal",
        "float",
        "int",
        "integer",
        "interval",
        "nchar",
        "nclob",
        "national",
        "numeric",
        "real",
        "row",
        "smallint",
        "time",
        "timestamp",
        "varchar",
        "varying",
        "varbinary"
      ], r2 = [
        "abs",
        "acos",
        "array_agg",
        "asin",
        "atan",
        "avg",
        "cast",
        "ceil",
        "ceiling",
        "coalesce",
        "corr",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "cume_dist",
        "dense_rank",
        "deref",
        "element",
        "exp",
        "extract",
        "first_value",
        "floor",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "last_value",
        "lead",
        "listagg",
        "ln",
        "log",
        "log10",
        "lower",
        "max",
        "min",
        "mod",
        "nth_value",
        "ntile",
        "nullif",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "position",
        "position_regex",
        "power",
        "rank",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "row_number",
        "sin",
        "sinh",
        "sqrt",
        "stddev_pop",
        "stddev_samp",
        "substring",
        "substring_regex",
        "sum",
        "tan",
        "tanh",
        "translate",
        "translate_regex",
        "treat",
        "trim",
        "trim_array",
        "unnest",
        "upper",
        "value_of",
        "var_pop",
        "var_samp",
        "width_bucket"
      ], s2 = [
        "create table",
        "insert into",
        "primary key",
        "foreign key",
        "not null",
        "alter table",
        "add constraint",
        "grouping sets",
        "on overflow",
        "character set",
        "respect nulls",
        "ignore nulls",
        "nulls first",
        "nulls last",
        "depth first",
        "breadth first"
      ], o2 = r2, l2 = [
        "abs",
        "acos",
        "all",
        "allocate",
        "alter",
        "and",
        "any",
        "are",
        "array",
        "array_agg",
        "array_max_cardinality",
        "as",
        "asensitive",
        "asin",
        "asymmetric",
        "at",
        "atan",
        "atomic",
        "authorization",
        "avg",
        "begin",
        "begin_frame",
        "begin_partition",
        "between",
        "bigint",
        "binary",
        "blob",
        "boolean",
        "both",
        "by",
        "call",
        "called",
        "cardinality",
        "cascaded",
        "case",
        "cast",
        "ceil",
        "ceiling",
        "char",
        "char_length",
        "character",
        "character_length",
        "check",
        "classifier",
        "clob",
        "close",
        "coalesce",
        "collate",
        "collect",
        "column",
        "commit",
        "condition",
        "connect",
        "constraint",
        "contains",
        "convert",
        "copy",
        "corr",
        "corresponding",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "create",
        "cross",
        "cube",
        "cume_dist",
        "current",
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_row",
        "current_schema",
        "current_time",
        "current_timestamp",
        "current_path",
        "current_role",
        "current_transform_group_for_type",
        "current_user",
        "cursor",
        "cycle",
        "date",
        "day",
        "deallocate",
        "dec",
        "decimal",
        "decfloat",
        "declare",
        "default",
        "define",
        "delete",
        "dense_rank",
        "deref",
        "describe",
        "deterministic",
        "disconnect",
        "distinct",
        "double",
        "drop",
        "dynamic",
        "each",
        "element",
        "else",
        "empty",
        "end",
        "end_frame",
        "end_partition",
        "end-exec",
        "equals",
        "escape",
        "every",
        "except",
        "exec",
        "execute",
        "exists",
        "exp",
        "external",
        "extract",
        "false",
        "fetch",
        "filter",
        "first_value",
        "float",
        "floor",
        "for",
        "foreign",
        "frame_row",
        "free",
        "from",
        "full",
        "function",
        "fusion",
        "get",
        "global",
        "grant",
        "group",
        "grouping",
        "groups",
        "having",
        "hold",
        "hour",
        "identity",
        "in",
        "indicator",
        "initial",
        "inner",
        "inout",
        "insensitive",
        "insert",
        "int",
        "integer",
        "intersect",
        "intersection",
        "interval",
        "into",
        "is",
        "join",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "language",
        "large",
        "last_value",
        "lateral",
        "lead",
        "leading",
        "left",
        "like",
        "like_regex",
        "listagg",
        "ln",
        "local",
        "localtime",
        "localtimestamp",
        "log",
        "log10",
        "lower",
        "match",
        "match_number",
        "match_recognize",
        "matches",
        "max",
        "member",
        "merge",
        "method",
        "min",
        "minute",
        "mod",
        "modifies",
        "module",
        "month",
        "multiset",
        "national",
        "natural",
        "nchar",
        "nclob",
        "new",
        "no",
        "none",
        "normalize",
        "not",
        "nth_value",
        "ntile",
        "null",
        "nullif",
        "numeric",
        "octet_length",
        "occurrences_regex",
        "of",
        "offset",
        "old",
        "omit",
        "on",
        "one",
        "only",
        "open",
        "or",
        "order",
        "out",
        "outer",
        "over",
        "overlaps",
        "overlay",
        "parameter",
        "partition",
        "pattern",
        "per",
        "percent",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "period",
        "portion",
        "position",
        "position_regex",
        "power",
        "precedes",
        "precision",
        "prepare",
        "primary",
        "procedure",
        "ptf",
        "range",
        "rank",
        "reads",
        "real",
        "recursive",
        "ref",
        "references",
        "referencing",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "release",
        "result",
        "return",
        "returns",
        "revoke",
        "right",
        "rollback",
        "rollup",
        "row",
        "row_number",
        "rows",
        "running",
        "savepoint",
        "scope",
        "scroll",
        "search",
        "second",
        "seek",
        "select",
        "sensitive",
        "session_user",
        "set",
        "show",
        "similar",
        "sin",
        "sinh",
        "skip",
        "smallint",
        "some",
        "specific",
        "specifictype",
        "sql",
        "sqlexception",
        "sqlstate",
        "sqlwarning",
        "sqrt",
        "start",
        "static",
        "stddev_pop",
        "stddev_samp",
        "submultiset",
        "subset",
        "substring",
        "substring_regex",
        "succeeds",
        "sum",
        "symmetric",
        "system",
        "system_time",
        "system_user",
        "table",
        "tablesample",
        "tan",
        "tanh",
        "then",
        "time",
        "timestamp",
        "timezone_hour",
        "timezone_minute",
        "to",
        "trailing",
        "translate",
        "translate_regex",
        "translation",
        "treat",
        "trigger",
        "trim",
        "trim_array",
        "true",
        "truncate",
        "uescape",
        "union",
        "unique",
        "unknown",
        "unnest",
        "update",
        "upper",
        "user",
        "using",
        "value",
        "values",
        "value_of",
        "var_pop",
        "var_samp",
        "varbinary",
        "varchar",
        "varying",
        "versioning",
        "when",
        "whenever",
        "where",
        "width_bucket",
        "window",
        "with",
        "within",
        "without",
        "year",
        "add",
        "asc",
        "collation",
        "desc",
        "final",
        "first",
        "last",
        "view"
      ].filter((e3) => !r2.includes(e3)), c2 = {
        begin: n2.concat(/\b/, n2.either(...o2), /\s*\(/),
        relevance: 0,
        keywords: {
          built_in: o2
        }
      };
      return {
        name: "SQL",
        case_insensitive: true,
        illegal: /[{}]|<\//,
        keywords: {
          $pattern: /\b[\w\.]+/,
          keyword: ((e3, {
            exceptions: n3,
            when: t3
          } = {}) => {
            const a3 = t3;
            return n3 = n3 || [], e3.map((e4) => e4.match(/\|\d+$/) || n3.includes(e4) ? e4 : a3(e4) ? e4 + "|0" : e4);
          })(l2, {
            when: (e3) => e3.length < 3
          }),
          literal: a2,
          type: i2,
          built_in: [
            "current_catalog",
            "current_date",
            "current_default_transform_group",
            "current_path",
            "current_role",
            "current_schema",
            "current_transform_group_for_type",
            "current_user",
            "session_user",
            "system_time",
            "system_user",
            "current_time",
            "localtime",
            "current_timestamp",
            "localtimestamp"
          ]
        },
        contains: [{
          begin: n2.either(...s2),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: l2.concat(s2),
            literal: a2,
            type: i2
          }
        }, {
          className: "type",
          begin: n2.either("double precision", "large object", "with timezone", "without timezone")
        }, c2, {
          className: "variable",
          begin: /@[a-z0-9]+/
        }, {
          className: "string",
          variants: [{
            begin: /'/,
            end: /'/,
            contains: [{
              begin: /''/
            }]
          }]
        }, {
          begin: /"/,
          end: /"/,
          contains: [{
            begin: /""/
          }]
        }, e2.C_NUMBER_MODE, e2.C_BLOCK_COMMENT_MODE, t2, {
          className: "operator",
          begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
          relevance: 0
        }]
      };
    },
    grmr_swift: (e2) => {
      const n2 = {
        match: /\s+/,
        relevance: 0
      }, t2 = e2.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), a2 = [e2.C_LINE_COMMENT_MODE, t2], i2 = {
        match: [/\./, p(...Ee, ...ye)],
        className: {
          2: "keyword"
        }
      }, r2 = {
        match: m(/\./, p(...Ne)),
        relevance: 0
      }, s2 = Ne.filter((e3) => "string" == typeof e3).concat(["_|0"]), o2 = {
        variants: [{
          className: "keyword",
          match: p(...Ne.filter((e3) => "string" != typeof e3).concat(we).map(fe), ...ye)
        }]
      }, l2 = {
        $pattern: p(/\b\w+/, /#\w+/),
        keyword: s2.concat(ke),
        literal: ve
      }, c2 = [i2, r2, o2], d2 = [{
        match: m(/\./, p(...xe)),
        relevance: 0
      }, {
        className: "built_in",
        match: m(/\b/, p(...xe), /(?=\()/)
      }], u2 = {
        match: /->/,
        relevance: 0
      }, b2 = [u2, {
        className: "operator",
        relevance: 0,
        variants: [{
          match: Ae
        }, {
          match: `\\.(\\.|${Se})+`
        }]
      }], _2 = "([0-9a-fA-F]_*)+", h2 = {
        className: "number",
        relevance: 0,
        variants: [{
          match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: `\\b0x(${_2})(\\.(${_2}))?([pP][+-]?(([0-9]_*)+))?\\b`
        }, {
          match: /\b0o([0-7]_*)+\b/
        }, {
          match: /\b0b([01]_*)+\b/
        }]
      }, f2 = (e3 = "") => ({
        className: "subst",
        variants: [{
          match: m(/\\/, e3, /[0\\tnr"']/)
        }, {
          match: m(/\\/, e3, /u\{[0-9a-fA-F]{1,8}\}/)
        }]
      }), E2 = (e3 = "") => ({
        className: "subst",
        match: m(/\\/, e3, /[\t ]*(?:[\r\n]|\r\n)/)
      }), y2 = (e3 = "") => ({
        className: "subst",
        label: "interpol",
        begin: m(/\\/, e3, /\(/),
        end: /\)/
      }), w2 = (e3 = "") => ({
        begin: m(e3, /"""/),
        end: m(/"""/, e3),
        contains: [f2(e3), E2(e3), y2(e3)]
      }), N2 = (e3 = "") => ({
        begin: m(e3, /"/),
        end: m(/"/, e3),
        contains: [f2(e3), y2(e3)]
      }), v2 = {
        className: "string",
        variants: [w2(), w2("#"), w2("##"), w2("###"), N2(), N2("#"), N2("##"), N2("###")]
      }, O2 = {
        match: m(/`/, Re, /`/)
      }, k2 = [O2, {
        className: "variable",
        match: /\$\d+/
      }, {
        className: "variable",
        match: `\\$${Te}+`
      }], x2 = [{
        match: /(@|#(un)?)available/,
        className: "keyword",
        starts: {
          contains: [{
            begin: /\(/,
            end: /\)/,
            keywords: Le,
            contains: [...b2, h2, v2]
          }]
        }
      }, {
        className: "keyword",
        match: m(/@/, p(...Ie))
      }, {
        className: "meta",
        match: m(/@/, Re)
      }], M2 = {
        match: g(/\b[A-Z]/),
        relevance: 0,
        contains: [{
          className: "type",
          match: m(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Te, "+")
        }, {
          className: "type",
          match: De,
          relevance: 0
        }, {
          match: /[?!]+/,
          relevance: 0
        }, {
          match: /\.\.\./,
          relevance: 0
        }, {
          match: m(/\s+&\s+/, g(De)),
          relevance: 0
        }]
      }, S2 = {
        begin: /</,
        end: />/,
        keywords: l2,
        contains: [...a2, ...c2, ...x2, u2, M2]
      };
      M2.contains.push(S2);
      const A2 = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: l2,
        contains: ["self", {
          match: m(Re, /\s*:/),
          keywords: "_|0",
          relevance: 0
        }, ...a2, ...c2, ...d2, ...b2, h2, v2, ...k2, ...x2, M2]
      }, C2 = {
        begin: /</,
        end: />/,
        contains: [...a2, M2]
      }, T2 = {
        begin: /\(/,
        end: /\)/,
        keywords: l2,
        contains: [{
          begin: p(g(m(Re, /\s*:/)), g(m(Re, /\s+/, Re, /\s*:/))),
          end: /:/,
          relevance: 0,
          contains: [{
            className: "keyword",
            match: /\b_\b/
          }, {
            className: "params",
            match: Re
          }]
        }, ...a2, ...c2, ...b2, h2, v2, ...x2, M2, A2],
        endsParent: true,
        illegal: /["']/
      }, R2 = {
        match: [/func/, /\s+/, p(O2.match, Re, Ae)],
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [C2, T2, n2],
        illegal: [/\[/, /%/]
      }, D2 = {
        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
        className: {
          1: "keyword"
        },
        contains: [C2, T2, n2],
        illegal: /\[|%/
      }, I2 = {
        match: [/operator/, /\s+/, Ae],
        className: {
          1: "keyword",
          3: "title"
        }
      }, L2 = {
        begin: [/precedencegroup/, /\s+/, De],
        className: {
          1: "keyword",
          3: "title"
        },
        contains: [M2],
        keywords: [...Oe, ...ve],
        end: /}/
      };
      for (const e3 of v2.variants) {
        const n3 = e3.contains.find((e4) => "interpol" === e4.label);
        n3.keywords = l2;
        const t3 = [...c2, ...d2, ...b2, h2, v2, ...k2];
        n3.contains = [...t3, {
          begin: /\(/,
          end: /\)/,
          contains: ["self", ...t3]
        }];
      }
      return {
        name: "Swift",
        keywords: l2,
        contains: [...a2, R2, D2, {
          beginKeywords: "struct protocol class extension enum actor",
          end: "\\{",
          excludeEnd: true,
          keywords: l2,
          contains: [e2.inherit(e2.TITLE_MODE, {
            className: "title.class",
            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
          }), ...c2]
        }, I2, L2, {
          beginKeywords: "import",
          end: /$/,
          contains: [...a2],
          relevance: 0
        }, ...c2, ...d2, ...b2, h2, v2, ...k2, ...x2, M2, A2]
      };
    },
    grmr_typescript: (e2) => {
      const n2 = he(e2), t2 = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"], a2 = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: true,
        contains: [n2.exports.CLASS_REFERENCE]
      }, i2 = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: true,
        keywords: {
          keyword: "interface extends",
          built_in: t2
        },
        contains: [n2.exports.CLASS_REFERENCE]
      }, r2 = {
        $pattern: ce,
        keyword: de.concat([
          "type",
          "namespace",
          "interface",
          "public",
          "private",
          "protected",
          "implements",
          "declare",
          "abstract",
          "readonly",
          "enum",
          "override"
        ]),
        literal: ge,
        built_in: _e.concat(t2),
        "variable.language": pe
      }, s2 = {
        className: "meta",
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      }, o2 = (e3, n3, t3) => {
        const a3 = e3.contains.findIndex((e4) => e4.label === n3);
        if (-1 === a3)
          throw Error("can not find mode to replace");
        e3.contains.splice(a3, 1, t3);
      };
      return Object.assign(n2.keywords, r2), n2.exports.PARAMS_CONTAINS.push(s2), n2.contains = n2.contains.concat([s2, a2, i2]), o2(n2, "shebang", e2.SHEBANG()), o2(n2, "use_strict", {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      }), n2.contains.find((e3) => "func.def" === e3.label).relevance = 0, Object.assign(n2, {
        name: "TypeScript",
        aliases: ["ts", "tsx"]
      }), n2;
    },
    grmr_vbnet: (e2) => {
      const n2 = e2.regex, t2 = /\d{1,2}\/\d{1,2}\/\d{4}/, a2 = /\d{4}-\d{1,2}-\d{1,2}/, i2 = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, r2 = /\d{1,2}(:\d{1,2}){1,2}/, s2 = {
        className: "literal",
        variants: [{
          begin: n2.concat(/# */, n2.either(a2, t2), / *#/)
        }, {
          begin: n2.concat(/# */, r2, / *#/)
        }, {
          begin: n2.concat(/# */, i2, / *#/)
        }, {
          begin: n2.concat(/# */, n2.either(a2, t2), / +/, n2.either(i2, r2), / *#/)
        }]
      }, o2 = e2.COMMENT(/'''/, /$/, {
        contains: [{
          className: "doctag",
          begin: /<\/?/,
          end: />/
        }]
      }), l2 = e2.COMMENT(null, /$/, {
        variants: [{
          begin: /'/
        }, {
          begin: /([\t ]|^)REM(?=\s)/
        }]
      });
      return {
        name: "Visual Basic .NET",
        aliases: ["vb"],
        case_insensitive: true,
        classNameAliases: {
          label: "symbol"
        },
        keywords: {
          keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
          built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
          type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
          literal: "true false nothing"
        },
        illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
        contains: [{
          className: "string",
          begin: /"(""|[^/n])"C\b/
        }, {
          className: "string",
          begin: /"/,
          end: /"/,
          illegal: /\n/,
          contains: [{
            begin: /""/
          }]
        }, s2, {
          className: "number",
          relevance: 0,
          variants: [{
            begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
          }, {
            begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
          }, {
            begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
          }, {
            begin: /&O[0-7_]+((U?[SIL])|[%&])?/
          }, {
            begin: /&B[01_]+((U?[SIL])|[%&])?/
          }]
        }, {
          className: "label",
          begin: /^\w+:/
        }, o2, l2, {
          className: "meta",
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: {
            keyword: "const disable else elseif enable end externalsource if region then"
          },
          contains: [l2]
        }]
      };
    },
    grmr_wasm: (e2) => {
      e2.regex;
      const n2 = e2.COMMENT(/\(;/, /;\)/);
      return n2.contains.push("self"), {
        name: "WebAssembly",
        keywords: {
          $pattern: /[\w.]+/,
          keyword: [
            "anyfunc",
            "block",
            "br",
            "br_if",
            "br_table",
            "call",
            "call_indirect",
            "data",
            "drop",
            "elem",
            "else",
            "end",
            "export",
            "func",
            "global.get",
            "global.set",
            "local.get",
            "local.set",
            "local.tee",
            "get_global",
            "get_local",
            "global",
            "if",
            "import",
            "local",
            "loop",
            "memory",
            "memory.grow",
            "memory.size",
            "module",
            "mut",
            "nop",
            "offset",
            "param",
            "result",
            "return",
            "select",
            "set_global",
            "set_local",
            "start",
            "table",
            "tee_local",
            "then",
            "type",
            "unreachable"
          ]
        },
        contains: [e2.COMMENT(/;;/, /$/), n2, {
          match: [/(?:offset|align)/, /\s*/, /=/],
          className: {
            1: "keyword",
            3: "operator"
          }
        }, {
          className: "variable",
          begin: /\$[\w_]+/
        }, {
          match: /(\((?!;)|\))+/,
          className: "punctuation",
          relevance: 0
        }, {
          begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
          className: {
            1: "keyword",
            3: "title.function"
          }
        }, e2.QUOTE_STRING_MODE, {
          match: /(i32|i64|f32|f64)(?!\.)/,
          className: "type"
        }, {
          className: "keyword",
          match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
        }, {
          className: "number",
          relevance: 0,
          match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
        }]
      };
    },
    grmr_yaml: (e2) => {
      const n2 = "true false yes no null", t2 = "[\\w#;/?:@&=+$,.~*'()[\\]]+", a2 = {
        className: "string",
        relevance: 0,
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /\S+/
        }],
        contains: [e2.BACKSLASH_ESCAPE, {
          className: "template-variable",
          variants: [{
            begin: /\{\{/,
            end: /\}\}/
          }, {
            begin: /%\{/,
            end: /\}/
          }]
        }]
      }, i2 = e2.inherit(a2, {
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /[^\s,{}[\]]+/
        }]
      }), r2 = {
        end: ",",
        endsWithParent: true,
        excludeEnd: true,
        keywords: n2,
        relevance: 0
      }, s2 = {
        begin: /\{/,
        end: /\}/,
        contains: [r2],
        illegal: "\\n",
        relevance: 0
      }, o2 = {
        begin: "\\[",
        end: "\\]",
        contains: [r2],
        illegal: "\\n",
        relevance: 0
      }, l2 = [{
        className: "attr",
        variants: [{
          begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)"
        }, {
          begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
        }, {
          begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
        }]
      }, {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      }, {
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      }, {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0
      }, {
        className: "type",
        begin: "!\\w+!" + t2
      }, {
        className: "type",
        begin: "!<" + t2 + ">"
      }, {
        className: "type",
        begin: "!" + t2
      }, {
        className: "type",
        begin: "!!" + t2
      }, {
        className: "meta",
        begin: "&" + e2.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "meta",
        begin: "\\*" + e2.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "bullet",
        begin: "-(?=[ ]|$)",
        relevance: 0
      }, e2.HASH_COMMENT_MODE, {
        beginKeywords: n2,
        keywords: {
          literal: n2
        }
      }, {
        className: "number",
        begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
      }, {
        className: "number",
        begin: e2.C_NUMBER_RE + "\\b",
        relevance: 0
      }, s2, o2, a2], c2 = [...l2];
      return c2.pop(), c2.push(i2), r2.contains = c2, {
        name: "YAML",
        case_insensitive: true,
        aliases: ["yml"],
        contains: l2
      };
    }
  });
  const $e = V;
  for (const e2 of Object.keys(Be)) {
    const n2 = e2.replace("grmr_", "").replace("_", "-");
    $e.registerLanguage(n2, Be[e2]);
  }
  makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
  makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");
  makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
  makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
  makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
  makeMap("script,style");
  function makeMap(str) {
    var obj = {};
    var items = str.split(",");
    for (var i2 = 0; i2 < items.length; i2++) {
      obj[items[i2]] = true;
    }
    return obj;
  }
  const _sfc_main$u = {
    __name: "ua-markdown",
    props: {
      // 解析内容
      source: String,
      showLine: { type: [Boolean, String], default: true }
    },
    setup(__props) {
      const props2 = __props;
      let copyCodeData = [];
      const markdown = mt({
        html: true,
        highlight: function(str, lang) {
          let preCode = "";
          try {
            preCode = $e.highlightAuto(str).value;
          } catch (err) {
            preCode = markdown.utils.escapeHtml(str);
          }
          const lines = preCode.split(/\n/).slice(0, -1);
          let html = lines.map((item, index) => {
            if (item == "") {
              return "";
            }
            return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + "</li>";
          }).join("");
          if (props2.showLine) {
            html = '<ol style="padding: 0px 30px;">' + html + "</ol>";
          } else {
            html = '<ol style="padding: 0px 7px;list-style:none;">' + html + "</ol>";
          }
          copyCodeData.push(str);
          let htmlCode = `<div class="markdown-wrap">`;
          htmlCode += `<div style="color: #aaa;text-align: right;font-size: 12px;padding:8px;">`;
          htmlCode += `${lang}<a class="copy-btn" code-data-index="${copyCodeData.length - 1}" style="margin-left: 8px;">复制代码</a>`;
          htmlCode += `</div>`;
          htmlCode += `<pre class="hljs" style="padding:10px 8px 0;margin-bottom:5px;overflow: auto;display: block;border-radius: 5px;"><code>${html}</code></pre>`;
          htmlCode += "</div>";
          return htmlCode;
        }
      });
      const parseNodes = (value) => {
        if (!value)
          return;
        value = value.replace(/<br>|<br\/>|<br \/>/g, "\n");
        value = value.replace(/&nbsp;/g, " ");
        let htmlString = "";
        if (value.split("```").length % 2) {
          let mdtext = value;
          if (mdtext[mdtext.length - 1] != "\n") {
            mdtext += "\n";
          }
          htmlString = markdown.render(mdtext);
        } else {
          htmlString = markdown.render(value);
        }
        htmlString = htmlString.replace(/<table/g, `<table class="table"`);
        htmlString = htmlString.replace(/<tr/g, `<tr class="tr"`);
        htmlString = htmlString.replace(/<th>/g, `<th class="th">`);
        htmlString = htmlString.replace(/<td/g, `<td class="td"`);
        htmlString = htmlString.replace(/<hr>|<hr\/>|<hr \/>/g, `<hr class="hr">`);
        return htmlString;
      };
      const handleItemClick = (e2) => {
        let { attrs } = e2.detail.node;
        let { "code-data-index": codeDataIndex, "class": className } = attrs;
        if (className == "copy-btn") {
          uni.setClipboardData({
            data: copyCodeData[codeDataIndex],
            showToast: false,
            success() {
              uni.showToast({
                title: "复制成功",
                icon: "none"
              });
            }
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "ua__markdown" }, [
          vue.createElementVNode("rich-text", {
            space: "nbsp",
            nodes: parseNodes(__props.source),
            onItemclick: handleItemClick
          }, null, 40, ["nodes"])
        ]);
      };
    }
  };
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-64f4d077"], ["__file", "F:/uniapp/vegetable-bag/components/ua-markdown/ua-markdown.vue"]]);
  const _imports_0 = "/static/images/dot.png";
  const _imports_1$3 = "/static/images/send.png";
  const block0$1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("fetchEvent");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["fetchEvent"] = "67dea2d6";
  };
  const _sfc_main$t = {
    data() {
      return {
        isSend: false
      };
    },
    props: {
      url: {
        type: String,
        default: ""
      },
      options: {
        type: Object,
        default: () => ({})
      },
      isSSEClose: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      mergeProps({ url: url2, options, isSend }) {
        return {
          url: url2,
          options,
          isSend
        };
      }
    },
    methods: {
      send() {
        this.isSend = true;
        this.$nextTick(() => {
          this.isSend = false;
        });
      },
      dataSource(data) {
        this.$emit("callback", data);
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      id: "fetchEvent",
      class: "fetchEvent",
      props: vue.wp($options.mergeProps),
      "change:props": _ctx.fetchEvent.propsChange
    }, null, 8, ["props", "change:props"])), [
      [vue.vShow, false]
    ]);
  }
  if (typeof block0$1 === "function")
    block0$1(_sfc_main$t);
  const fetchChat = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$j], ["__file", "F:/uniapp/vegetable-bag/pages/index/components/fetchChat.vue"]]);
  const _sfc_main$s = {
    __name: "deleteDialog",
    emits: ["update"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const tabbarStore = useTabbarStore();
      const userStore = useUserStore();
      const userInfo2 = vue.computed(() => userStore.userInfo);
      const isShow = vue.ref(false);
      const modelInfo = vue.ref({});
      const emit = __emit;
      const deleteHandler = () => {
        showConfirm("删除后，聊天记录将不可恢复", "确定删除聊天记录？").then(({ confirm }) => {
          if (confirm) {
            clearHistory(modelInfo.value.modelId).then((res) => {
              toast$1("聊天记录删除成功");
              emit("update");
            });
          }
        }).finally(() => {
          isShow.value = false;
        });
      };
      const deleteAiHandler = () => {
        showConfirm("确定删除AI智能体？").then(({ confirm }) => {
          if (confirm) {
            deleteModel(modelInfo.value.modelId).then((res) => {
              uni.redirectTo({
                url: "/pages/index/index",
                success: () => {
                  tabbarStore.setCurrent(0);
                }
              });
            });
          }
        }).finally(() => {
          isShow.value = false;
        });
      };
      const openDialog = (row) => {
        isShow.value = true;
        modelInfo.value = row;
        formatAppLog("log", "at pages/index/components/deleteDialog.vue:68", "modelInfo.value ");
      };
      __expose({
        openDialog
      });
      return (_ctx, _cache) => {
        const _component_u_divider = resolveEasycom(vue.resolveDynamicComponent("u-divider"), __easycom_0$3);
        const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_1$7);
        return vue.openBlock(), vue.createBlock(_component_u_overlay, {
          show: isShow.value,
          opacity: 0,
          onClick: _cache[0] || (_cache[0] = ($event) => isShow.value = false)
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "dialog" }, [
              vue.createElementVNode("view", {
                class: "dialog__item",
                onClick: deleteHandler
              }, [
                vue.createElementVNode("view", { class: "dialog__item__img" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_0$4,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "dialog__item__text dialog-red" }, "删除聊天记录")
              ]),
              vue.createVNode(_component_u_divider),
              userInfo2.value.userId == modelInfo.value.creatorId ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "dialog__item",
                onClick: deleteAiHandler
              }, [
                vue.createElementVNode("view", { class: "dialog__item__img" }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_0$4,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "dialog__item__text dialog-red" }, "删除AI智能体")
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show"]);
      };
    }
  };
  const deleteDialog = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-78c01fab"], ["__file", "F:/uniapp/vegetable-bag/pages/index/components/deleteDialog.vue"]]);
  const _sfc_main$r = {
    __name: "chat",
    setup(__props) {
      const tabbarStore = useTabbarStore();
      const userStore = useUserStore();
      vue.computed(() => userStore.userInfo);
      const fetchChatRef = vue.ref();
      const { proxy } = vue.getCurrentInstance();
      proxy.getOpenerEventChannel();
      const form = vue.ref({});
      const modelData = vue.ref({});
      const queryParams2 = vue.ref({
        modelId: void 0
      });
      const deleteDialogRef = vue.ref();
      const styleHeight = vue.ref("");
      const scrollIntoViewId = vue.ref("");
      const fetchOptions = vue.computed(() => {
        return {
          url: config.base_url + "/ai/chat/" + modelData.value.modelId,
          options: {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify({
              message: form.value.send
              // detail: false,
              // stream: true
            })
          }
        };
      });
      const historyList = vue.ref([]);
      vue.ref(0);
      const msg = vue.ref("");
      const scrollTop = vue.ref(0);
      onLoad((options) => {
        formatAppLog("log", "at pages/index/components/chat.vue:114", "$devices", proxy.$devices);
        styleHeight.value = proxy.$devices.windowHeight - 50 + "px";
        if (options.modelId) {
          detailModel(options.modelId).then((res) => {
            formatAppLog("log", "at pages/index/components/chat.vue:119", "res", res);
            res.data.modelImage = config.image_url + res.data.modelImage;
            if (res.data.enableBackground) {
              res.data.backgroundImage = config.image_url + res.data.backgroundImage;
            }
            modelData.value = res.data;
            fetchOptions.value.url = config.base_url + "/ai/chat/" + res.data.modelId;
            queryParams2.value.modelId = res.data.modelId;
            getHistoryList();
          });
        }
      });
      const backgroundStyle = () => {
        if (modelData.value) {
          return {
            backgroundImage: `url(${modelData.value.backgroundImage})`
          };
        } else {
          return {
            backgroundColor: "#fff"
          };
        }
      };
      const dotClickHandler = () => {
        deleteDialogRef.value.openDialog(modelData.value);
      };
      const customStyle = {
        boxShadow: "4rpx 4rpx 8px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff"
      };
      const getHistoryList = () => {
        chatHistory(queryParams2.value).then((res) => {
          formatAppLog("log", "at pages/index/components/chat.vue:154", "res", res);
          historyList.value = res.data;
          scrollBottom();
        });
      };
      const fetchChatCallbackHandler = (data) => {
        const { type: type2 } = data;
        switch (type2) {
          case "open":
            msg.value = "";
            historyList.value.push({
              id: +/* @__PURE__ */ new Date(),
              role: "assistant",
              message: ""
            });
            break;
          case "message":
            msg.value += data.data;
            historyList.value = historyList.value.map((item, index) => {
              if (index === historyList.value.length - 1) {
                return {
                  ...item,
                  message: msg.value
                };
              }
              return item;
            });
            scrollBottom();
            break;
          case "end":
            scrollBottom();
            formatAppLog("log", "at pages/index/components/chat.vue:186", "结束！");
            break;
          case "error":
            formatAppLog("log", "at pages/index/components/chat.vue:189", "出错！");
            break;
        }
      };
      const backHandler = async () => {
        const pages = getCurrentPages();
        const page2 = pages[pages.length - 2];
        const route2 = "/" + page2.route;
        formatAppLog("log", "at pages/index/components/chat.vue:201", "route", route2);
        const isTabbarPageFlag = await tabbarStore.findPage(route2);
        formatAppLog("log", "at pages/index/components/chat.vue:204", "isTabbarPageFlag", isTabbarPageFlag);
        const url2 = isTabbarPageFlag ? route2 : "/pages/index/index";
        uni.reLaunch({
          url: url2
        });
      };
      const updateHistoryHandler = () => {
        getHistoryList();
      };
      const btnClickMessage = async () => {
        formatAppLog("log", "at pages/index/components/chat.vue:214", "form。value", form.value);
        historyList.value.push({
          id: +/* @__PURE__ */ new Date(),
          role: "user",
          message: form.value.send
        });
        fetchChatRef.value.send();
        await sleep(500);
        form.value.send = "";
        scrollBottom();
      };
      const updateScrollTop = () => {
        const query = uni.createSelectorQuery().in();
        query.selectAll(".scrollItem").boundingClientRect();
        query.select(".scrollView").boundingClientRect();
        query.exec((res) => {
          let totalHeight = 0;
          if (res.length > 1) {
            res[0].forEach((item) => {
              totalHeight += item.height;
            });
            if (totalHeight > res[1].height) {
              scrollTop.value = totalHeight - res[1].height;
            }
            scrollTop.value = parseInt(scrollTop.value) + 1e4;
          }
        });
      };
      const scrollBottom = () => {
        vue.nextTick(() => {
          updateScrollTop();
        });
      };
      return (_ctx, _cache) => {
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_ua_markdown = resolveEasycom(vue.resolveDynamicComponent("ua-markdown"), __easycom_2$1);
        const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { style: { "box-sizing": "border", "overflow": "hidden" } }, [
              vue.createVNode(_component_u_navbar, {
                placeholder: true,
                safeAreaInsetTop: true,
                "auto-back": false
              }, {
                left: vue.withCtx(() => [
                  vue.createVNode(_component_u_icon, {
                    name: "arrow-left",
                    size: "20",
                    onClick: backHandler
                  }),
                  vue.createElementVNode("view", { class: "navbar-wrap" }, [
                    vue.createElementVNode("view", { class: "navbar-wrap__img" }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: modelData.value.modelImage,
                        mode: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "navbar-wrap__content" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "navbar-wrap__content__name" },
                        vue.toDisplayString(modelData.value.modelName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "navbar-wrap__content__auth" },
                        "@" + vue.toDisplayString(modelData.value.creatorName),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("view", {
                    class: "navbar-wrap__dot",
                    onClick: dotClickHandler
                  }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: _imports_0,
                      mode: ""
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("scroll-view", {
                class: "chat-wrap scrollView",
                style: vue.normalizeStyle({ height: styleHeight.value, ...backgroundStyle() }),
                "scroll-y": true,
                "scroll-top": scrollTop.value,
                "scroll-into-view": scrollIntoViewId.value,
                ref: "scrollView"
              }, [
                vue.createElementVNode("view", { class: "chat-wrap__default scrollItem" }, [
                  vue.createElementVNode("view", { class: "chat-wrap__default__img" }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: modelData.value.modelImage,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "chat-wrap__default__description" },
                    vue.toDisplayString(modelData.value.prologue),
                    1
                    /* TEXT */
                  )
                ]),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(historyList.value, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      {
                        key: item.id
                      },
                      [
                        item.role == "assistant" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "chat-wrap__ai scrollItem"
                        }, [
                          vue.createElementVNode("view", { class: "chat-wrap__ai__content chat--content" }, [
                            vue.createCommentVNode(" {{ item.message }} "),
                            vue.createVNode(_component_ua_markdown, {
                              source: item.message
                            }, null, 8, ["source"])
                          ])
                        ])) : vue.createCommentVNode("v-if", true),
                        item.role == "user" ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "chat-wrap__user scrollItem"
                        }, [
                          vue.createElementVNode("view", { class: "chat-wrap__user__content chat--content" }, [
                            vue.createCommentVNode(" {{ item.message }} "),
                            vue.createVNode(_component_ua_markdown, {
                              source: item.message
                            }, null, 8, ["source"])
                          ])
                        ])) : vue.createCommentVNode("v-if", true)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                vue.createCommentVNode(" 占位！ "),
                vue.createElementVNode("view", {
                  style: { "height": "200rpx" },
                  class: "scrollItem"
                })
              ], 12, ["scroll-top", "scroll-into-view"]),
              vue.createVNode(fetchChat, {
                url: fetchOptions.value.url,
                options: fetchOptions.value.options,
                ref_key: "fetchChatRef",
                ref: fetchChatRef,
                onCallback: fetchChatCallbackHandler
              }, null, 8, ["url", "options"])
            ]),
            vue.createElementVNode("view", { class: "chat-input" }, [
              vue.createVNode(_component_u_input, {
                placeholder: "",
                border: "surround",
                modelValue: form.value.send,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.send = $event),
                customStyle
              }, {
                suffix: vue.withCtx(() => [
                  vue.createElementVNode("view", {
                    onClick: btnClickMessage,
                    class: "chat-input__send"
                  }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: _imports_1$3,
                      mode: ""
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            vue.createVNode(
              deleteDialog,
              {
                ref_key: "deleteDialogRef",
                ref: deleteDialogRef,
                onUpdate: updateHistoryHandler
              },
              null,
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexComponentsChat = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-ed5a9a72"], ["__file", "F:/uniapp/vegetable-bag/pages/index/components/chat.vue"]]);
  const _imports_1$2 = "/static/images/establish/checkout.png";
  const _imports_2 = "/static/images/establish/ai.png";
  const _sfc_main$q = {
    __name: "image-cropper",
    props: {
      canvasWidth: {
        type: Number,
        default: 310
      },
      canvasHighet: {
        type: Number,
        default: 310
      },
      icon: {
        type: String,
        default: "/static/logo.png"
      },
      iconWidth: {
        type: [String, Number],
        default: 40
      },
      iconHeight: {
        type: [String, Number],
        default: 40
      },
      text: {
        type: String,
        default: "添加图片"
      },
      textStyle: {
        type: Object,
        default: () => {
        }
      },
      delIcon: {
        type: String,
        require: true
      },
      delIconWidth: {
        type: [String, Number],
        default: 40
      },
      delIconHeight: {
        type: [String, Number],
        default: 40
      }
    },
    emits: ["filePath", "delete"],
    setup(__props, { expose: __expose, emit: __emit }) {
      vue.getCurrentInstance();
      const devices2 = vue.ref(uni.getSystemInfoSync());
      const isWeb = vue.computed(() => devices2.value.uniPlatform == "web");
      const emit = __emit;
      const props2 = __props;
      const formatSize = (size) => isNaN(size) ? size : `${size}px`;
      const iconWidth = vue.computed(() => formatSize(props2.iconWidth));
      const iconHeight = vue.computed(() => formatSize(props2.iconHeight));
      const delIconWidth = vue.computed(() => formatSize(props2.delIconWidth));
      const delIconHeight = vue.computed(() => formatSize(props2.delIconHeight));
      const canvasWidth = vue.computed(() => props2.canvasWidth);
      const canvasHeight = vue.computed(() => props2.canvasHighet);
      vue.ref("");
      const imgObj = vue.ref({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      const lastCoordinate = vue.ref({
        x: 0,
        y: 0
      });
      const startCoordinate = vue.ref({
        x: 0,
        y: 0
      });
      const isShow = vue.ref(true);
      const touchStartTime = vue.ref(0);
      const imageScale = vue.ref(1);
      const canvasId = vue.ref("myCanvas");
      const isDragging = vue.ref(false);
      const isPinching = vue.ref(false);
      const initialDistance = vue.ref(0);
      const images = vue.ref("");
      const ctx = vue.ref(null);
      vue.onMounted(() => {
        ctx.value = uni.createCanvasContext(canvasId.value);
        formatAppLog("log", "at components/image-cropper/image-cropper.vue:114", "ctx.value", ctx.value);
      });
      const drawImage = () => {
        ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
        ctx.value.drawImage(images.value, imgObj.value.x, imgObj.value.y, imgObj.value.width * imageScale.value, imgObj.value.height * imageScale.value);
        ctx.value.draw();
      };
      const onTouchStart = (e2) => {
        const length = Object.keys(e2.touches).length;
        touchStartTime.value = Date.now();
        if (length === 1) {
          isDragging.value = true;
          startCoordinate.value.x = e2.touches[0].x;
          startCoordinate.value.y = e2.touches[0].y;
          lastCoordinate.value.x = imgObj.value.x;
          lastCoordinate.value.y = imgObj.value.y;
        } else if (length === 2) {
          isPinching.value = true;
          initialDistance.value = getDistance(e2.touches);
        }
      };
      const onTouchMove = (e2) => {
        const length = Object.keys(e2.touches).length;
        if (length === 1 && isDragging.value) {
          const dx = e2.touches[0].x - startCoordinate.value.x;
          const dy = e2.touches[0].y - startCoordinate.value.y;
          imgObj.value.x = lastCoordinate.value.x + dx;
          imgObj.value.y = lastCoordinate.value.y + dy;
          drawImage();
        } else if (length === 2 && isPinching.value) {
          const currentDistance = getDistance(e2.touches);
          const scaleChange = currentDistance / initialDistance.value;
          const newScale = imageScale.value * scaleChange;
          const minScaleX = canvasWidth.value / imgObj.value.width;
          const minScaleY = canvasHeight.value / imgObj.value.height;
          const minScale = Math.max(minScaleX, minScaleY);
          imageScale.value = Math.max(newScale, minScale);
          initialDistance.value = currentDistance;
          drawImage();
        }
      };
      const onTouchEnd = (e2) => {
        isDragging.value = false;
        isPinching.value = false;
        if (Date.now() - touchStartTime.value < 100) {
          chooseImageOnCanvasClick();
        } else {
          adjustPosition();
        }
      };
      const getDistance = (touches) => {
        const dx = touches[0].x - touches[1].x;
        const dy = touches[0].y - touches[1].y;
        return Math.sqrt(dx * dx + dy * dy);
      };
      const adjustPosition = () => {
        const imgWidth = imgObj.value.width * imageScale.value;
        const imgHeight = imgObj.value.height * imageScale.value;
        let targetX = imgObj.value.x;
        let targetY = imgObj.value.y;
        if (imgObj.value.x > 0) {
          targetX = 0;
        } else if (imgObj.value.x + imgWidth < canvasWidth.value) {
          targetX = canvasWidth.value - imgWidth;
        }
        if (imgObj.value.y > 0) {
          targetY = 0;
        } else if (imgObj.value.y + imgHeight < canvasHeight.value) {
          targetY = canvasHeight.value - imgHeight;
        }
        animate(imgObj.value.x, targetX, 300, (value) => {
          imgObj.value.x = value;
          drawImage();
        });
        animate(imgObj.value.y, targetY, 300, (value) => {
          imgObj.value.y = value;
          drawImage();
        });
      };
      const animate = (startValue, endValue, duration, onUpdate, onComplete) => {
        const startTime = Date.now();
        const step = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = startValue + (endValue - startValue) * progress;
          onUpdate(value);
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            onComplete && onComplete();
          }
        };
        requestAnimationFrame(step);
      };
      const requestAnimationFrame = (callback) => {
        return setTimeout(callback, 16);
      };
      const chooseImageOnCanvasClick = () => {
        uni.chooseImage({
          success: function(res) {
            images.value = res.tempFilePaths[0];
            uni.getImageInfo({
              src: res.tempFilePaths[0],
              success: (result) => {
                const imgWidth = result.width;
                const imgHeight = result.height;
                const canvasWidth2 = props2.canvasWidth;
                const canvasHeight2 = props2.canvasHighet;
                let newWidth, newHeight;
                if (imgWidth < canvasWidth2 && imgHeight < canvasHeight2) {
                  const widthRatio = canvasWidth2 / imgWidth;
                  const heightRatio = canvasHeight2 / imgHeight;
                  const ratio = Math.max(widthRatio, heightRatio);
                  newWidth = imgWidth * ratio;
                  newHeight = imgHeight * ratio;
                } else {
                  newWidth = imgWidth;
                  newHeight = imgHeight;
                }
                imgObj.value.width = newWidth;
                imgObj.value.height = newHeight;
                imgObj.value.x = (canvasWidth2 - newWidth) / 2;
                imgObj.value.y = (canvasHeight2 - newHeight) / 2;
                formatAppLog("log", "at components/image-cropper/image-cropper.vue:251", "result", result);
                isShow.value = false;
                drawImage();
              }
            });
          }
        });
      };
      const cropImage = (cb = () => {
      }) => {
        if (isShow.value) {
          cb(null);
          emit("filePath", null);
          return;
        }
        uni.canvasToTempFilePath({
          canvasId: canvasId.value,
          x: 0,
          y: 0,
          width: canvasWidth.value,
          height: canvasHeight.value,
          destWidth: canvasWidth.value,
          destHeight: canvasHeight.value,
          success: function({ tempFilePath }) {
            plus.io.resolveLocalFileSystemURL(
              tempFilePath,
              function(entry) {
                entry.file(function(file) {
                  const fileReader = new plus.io.FileReader();
                  fileReader.onloadend = function(e2) {
                    const base64Img = e2.target.result;
                    cb(base64Img);
                    emit("filePath", base64Img);
                  };
                  fileReader.readAsDataURL(file);
                });
              },
              function(e2) {
                formatAppLog("error", "at components/image-cropper/image-cropper.vue:291", "Failed to resolve local file system URL:", e2.message);
              }
            );
          },
          fail: function(error2) {
            formatAppLog("error", "at components/image-cropper/image-cropper.vue:301", "Failed to crop image:", error2);
          }
        });
      };
      const deleteHandler = () => {
        isShow.value = true;
        emit("delete");
      };
      __expose({
        cropImage
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "cropper-content" }, [
          vue.createElementVNode("canvas", {
            "canvas-id": canvasId.value,
            id: canvasId.value,
            style: vue.normalizeStyle({ width: `${canvasWidth.value}px`, height: `${canvasHeight.value}px` }),
            class: "canvas",
            onTouchstart: onTouchStart,
            onTouchmove: onTouchMove,
            onTouchend: onTouchEnd
          }, [
            vue.createCommentVNode(" 由于cover-view机制，需要每个上面都添加点击事件,而web不需要 "),
            isShow.value ? (vue.openBlock(), vue.createElementBlock(
              "cover-view",
              {
                key: 0,
                class: "cover-view",
                style: vue.normalizeStyle({ width: `${canvasWidth.value}px`, height: `${canvasHeight.value}px` }),
                onClick: _cache[3] || (_cache[3] = ($event) => !isWeb.value && chooseImageOnCanvasClick())
              },
              [
                vue.createElementVNode("cover-view", {
                  class: "cover-view_center",
                  onClick: _cache[2] || (_cache[2] = ($event) => !isWeb.value && chooseImageOnCanvasClick())
                }, [
                  vue.createElementVNode("cover-image", {
                    onClick: _cache[0] || (_cache[0] = ($event) => !isWeb.value && chooseImageOnCanvasClick()),
                    class: "cover-view_center__img",
                    src: props2.icon,
                    style: vue.normalizeStyle({ width: iconWidth.value, height: iconHeight.value })
                  }, null, 12, ["src"]),
                  vue.createElementVNode(
                    "cover-view",
                    {
                      onClick: _cache[1] || (_cache[1] = ($event) => !isWeb.value && chooseImageOnCanvasClick()),
                      class: "cover-view_center__text",
                      style: vue.normalizeStyle(__props.textStyle)
                    },
                    vue.toDisplayString(props2.text),
                    5
                    /* TEXT, STYLE */
                  )
                ])
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            !isShow.value ? (vue.openBlock(), vue.createElementBlock("cover-image", {
              key: 1,
              class: "cover-delete",
              style: vue.normalizeStyle({ width: delIconWidth.value, height: delIconHeight.value }),
              onClick: deleteHandler,
              src: props2.delIcon
            }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true)
          ], 44, ["canvas-id", "id"])
        ]);
      };
    }
  };
  const imageCropper = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-d0be24ff"], ["__file", "F:/uniapp/vegetable-bag/components/image-cropper/image-cropper.vue"]]);
  const _sfc_main$p = {
    __name: "aiProfile",
    setup(__props) {
      const imageCropperRef = vue.ref();
      const closeClickHandler = () => {
        uni.navigateBack();
      };
      const form = vue.ref({
        content: ""
      });
      const pictureList = vue.ref([
        {
          id: 1,
          url: "/static/images/pic/1.png",
          title: "动漫",
          checkout: false
        },
        {
          id: 2,
          url: "/static/images/pic/2.png",
          title: "水彩",
          checkout: false
        },
        {
          id: 3,
          url: "/static/images/pic/3.png",
          title: "平涂",
          checkout: false
        },
        {
          id: 4,
          url: "/static/images/pic/4.png",
          title: "手绘",
          checkout: false
        },
        {
          id: 5,
          url: "/static/images/pic/5.png",
          title: "厚涂",
          checkout: false
        },
        {
          id: 6,
          url: "/static/images/pic/6.png",
          title: "国风",
          checkout: false
        },
        {
          id: 7,
          url: "/static/images/pic/7.png",
          title: "动漫II",
          checkout: false
        },
        {
          id: 8,
          url: "/static/images/pic/8.png",
          title: "印象",
          checkout: false
        },
        {
          id: 9,
          url: "/static/images/pic/9.png",
          title: "水墨",
          checkout: false
        },
        {
          id: 10,
          url: "/static/images/pic/10.png",
          title: "塔罗",
          checkout: false
        }
      ]);
      const checkoutClick = (index) => {
        pictureList.value[index].checkout = !pictureList.value[index].checkout;
      };
      const generateHandler = () => {
        imageCropperRef.value.cropImage((data) => {
          formatAppLog("log", "at pages/establish/aiProfile/aiProfile.vue:140", "data", data);
          const checkedTitles = pictureList.value.filter((item) => item.checkout).map((item) => item.title);
          const baseData = {
            message: "",
            input: form.value.content,
            list: checkedTitles
          };
          const handleResponse = (res = null) => {
            var _a;
            formatAppLog("log", "at pages/establish/aiProfile/aiProfile.vue:148", "res", res);
            const msg = ((_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message.content) || "";
            uni.navigateTo({
              url: "/pages/establish/chooseImage/chooseImage",
              animationType: "fade-in",
              animationDuration: 300,
              success: (res2) => {
                res2.eventChannel.emit(aiProfilePageFromChooseImagePage, { ...baseData, message: msg });
              }
            });
          };
          if (data) {
            aiRoleplay({ base64: data }).then(handleResponse);
          } else {
            handleResponse();
          }
        });
      };
      const generateTextHandler = () => {
        generateText({ message: form.value.content }).then((res) => {
          formatAppLog("log", "at pages/establish/aiProfile/aiProfile.vue:173", "res", res);
          form.value.content = res.data;
        });
      };
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_u_navbar, {
            title: "智能体形象",
            bgColor: "#f5f5f5",
            placeholder: true,
            safeAreaInsetTop: true
          }, {
            left: vue.withCtx(() => [
              vue.createElementVNode("view", {
                class: "close-icon",
                onClick: closeClickHandler
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_0$1,
                  mode: ""
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "cropper" }, [
            vue.createVNode(
              imageCropper,
              {
                icon: "/static/images/establish/add.png",
                iconWidth: "60rpx",
                iconHeight: "60rpx",
                text: "添加参考图（可选）",
                delIcon: "/static/images/establish/del.png",
                ref_key: "imageCropperRef",
                ref: imageCropperRef
              },
              null,
              512
              /* NEED_PATCH */
            ),
            vue.createElementVNode("view", { class: "cropper__text" }, "上传有清晰面部的照片，有助于形象生成效果")
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-x": true,
            class: "scroll-container"
          }, [
            vue.createElementVNode("view", { class: "picture-list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(pictureList.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "picture-list__item",
                    key: item.id,
                    onClick: ($event) => checkoutClick(index)
                  }, [
                    vue.createElementVNode("view", { class: "picture-list__item__img" }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: item.url,
                        mode: ""
                      }, null, 8, ["src"])
                    ]),
                    item.checkout ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "picture-list__item__checkout"
                    }, [
                      vue.createElementVNode("image", {
                        class: "image",
                        src: _imports_1$2,
                        mode: ""
                      })
                    ])) : vue.createCommentVNode("v-if", true)
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "ipt" }, [
            vue.createVNode(_component_u_input, {
              placeholder: "请输入内容",
              border: "none",
              customStyle: {
                background: "#fff",
                padding: "20rpx",
                borderRadius: "30rpx"
              },
              modelValue: form.value.content,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.content = $event)
            }, {
              suffix: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "ipt--suffix",
                  onClick: generateTextHandler
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_2,
                    mode: ""
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          vue.createElementVNode("view", {
            class: "btn",
            onClick: generateHandler
          }, [
            vue.createElementVNode("text", { class: "btn__text" }, "生成形象")
          ])
        ]);
      };
    }
  };
  const PagesEstablishAiProfileAiProfile = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-a7598b03"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/aiProfile/aiProfile.vue"]]);
  const _sfc_main$o = {
    name: "loading-circle",
    props: {
      color: {
        type: String,
        default: "#0396FF"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "loader",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        null,
        4
        /* STYLE */
      )
    ]);
  }
  const loading0 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$i], ["__scopeId", "data-v-624e7c79"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-circle.vue"]]);
  const _sfc_main$n = {
    name: "loading-pulse",
    props: {
      color: {
        type: String,
        default: "#0396FF"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "box",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        [
          vue.createElementVNode("view", { class: "pulse-bubble pulse-bubble-1" }),
          vue.createElementVNode("view", { class: "pulse-bubble pulse-bubble-2" }),
          vue.createElementVNode("view", { class: "pulse-bubble pulse-bubble-3" })
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const loading1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$h], ["__scopeId", "data-v-593b06d7"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-pulse.vue"]]);
  const _sfc_main$m = {
    name: "loading-bounce",
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "dot dot1" }),
        vue.createElementVNode("view", { class: "dot dot2" }),
        vue.createElementVNode("view", { class: "dot dot3" })
      ])
    ]);
  }
  const loading2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$g], ["__scopeId", "data-v-527a0293"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-bounce.vue"]]);
  const _sfc_main$l = {
    name: "loading-eyes",
    data() {
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "eye" }),
        vue.createElementVNode("view", { class: "eye" })
      ])
    ]);
  }
  const loading3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$f], ["__scopeId", "data-v-9384f6f7"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-eyes.vue"]]);
  const _sfc_main$k = {
    name: "loading-triangle",
    data() {
      return {};
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "loader" }, [
          vue.createElementVNode("view", { class: "loader__ball" }),
          vue.createElementVNode("view", { class: "loader__ball" }),
          vue.createElementVNode("view", { class: "loader__ball" })
        ])
      ])
    ]);
  }
  const loading4 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$e], ["__scopeId", "data-v-f9a6d9d7"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-surround.vue"]]);
  const _sfc_main$j = {
    name: "loading-sun",
    data() {
      return {};
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "sun" }),
        vue.createElementVNode("view", { class: "orbit orbit1" }, [
          vue.createElementVNode("view", { class: "planetX planet1" })
        ]),
        vue.createElementVNode("view", { class: "orbit orbit2" }, [
          vue.createElementVNode("view", { class: "planetX planet2" })
        ]),
        vue.createElementVNode("view", { class: "orbit orbit3" }, [
          vue.createElementVNode("view", { class: "planetX planet3" })
        ])
      ])
    ]);
  }
  const loading5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$d], ["__scopeId", "data-v-1e01358d"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-sun.vue"]]);
  const _sfc_main$i = {
    name: "loading-love",
    data() {
      return {};
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" }),
        vue.createElementVNode("view", { class: "item" })
      ])
    ]);
  }
  const loading6 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$c], ["__scopeId", "data-v-38a88826"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-love.vue"]]);
  const _sfc_main$h = {
    name: "loading-sword",
    props: {
      color: {
        type: String,
        default: "#ED213A"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "box",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        [
          vue.createElementVNode("view", { class: "sword" }),
          vue.createElementVNode("view", { class: "sword" }),
          vue.createElementVNode("view", { class: "sword" })
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const loading7 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$b], ["__scopeId", "data-v-937cfc7f"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-sword.vue"]]);
  const _sfc_main$g = {
    name: "loading-atom",
    props: {
      color: {
        type: String,
        default: "#0396FF"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "box",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        [
          vue.createElementVNode("view", { class: "atom" }),
          vue.createElementVNode("view", { class: "atom" }),
          vue.createElementVNode("view", { class: "atom" }),
          vue.createElementVNode("view", { class: "dot" })
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const loading8 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$a], ["__scopeId", "data-v-4efd9407"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-atom.vue"]]);
  const _sfc_main$f = {
    name: "loading-gear",
    data() {
      return {};
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "gear1" }, [
          vue.createElementVNode("view", { class: "inner inner1" }),
          vue.createElementVNode("view", { class: "inner inner2" }),
          vue.createElementVNode("view", { class: "inner inner3" })
        ]),
        vue.createElementVNode("view", { class: "gear2" }, [
          vue.createElementVNode("view", { class: "inner inner1" }),
          vue.createElementVNode("view", { class: "inner inner2" }),
          vue.createElementVNode("view", { class: "inner inner3" })
        ]),
        vue.createElementVNode("view", { class: "gear3" }, [
          vue.createElementVNode("view", { class: "inner inner1" }),
          vue.createElementVNode("view", { class: "inner inner2" }),
          vue.createElementVNode("view", { class: "inner inner3" })
        ])
      ])
    ]);
  }
  const loading9 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$9], ["__scopeId", "data-v-2ecc962c"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-gear.vue"]]);
  const _sfc_main$e = {
    name: "loading-radar",
    data() {
      return {};
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode("view", { class: "radar" }, [
        vue.createElementVNode("view", { class: "dot dot-1" }),
        vue.createElementVNode("view", { class: "dot dot-2" }),
        vue.createElementVNode("view", { class: "dot dot-3" }),
        vue.createElementVNode("view", { class: "cover" })
      ])
    ]);
  }
  const loading10 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$8], ["__scopeId", "data-v-d2beed29"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-radar.vue"]]);
  const _sfc_main$d = {
    name: "loading-annulus",
    props: {
      color: {
        type: String,
        default: "#0396FF"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "loader",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        null,
        4
        /* STYLE */
      )
    ]);
  }
  const loading11 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$7], ["__scopeId", "data-v-004c3431"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-annulus.vue"]]);
  const _sfc_main$c = {
    name: "loading-wobble",
    props: {
      color: {
        type: String,
        default: "#0396FF"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "three-body",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        [
          vue.createElementVNode("view", { class: "three-body__dot" }),
          vue.createElementVNode("view", { class: "three-body__dot" }),
          vue.createElementVNode("view", { class: "three-body__dot" })
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const loading12 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$6], ["__scopeId", "data-v-86c3a64f"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-wobble.vue"]]);
  const _sfc_main$b = {
    name: "loading-equal",
    props: {
      color: {
        type: String,
        default: "#ff1919"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "animations" }, [
      vue.createElementVNode(
        "view",
        {
          class: "loader",
          style: vue.normalizeStyle({ "--color": $props.color })
        },
        null,
        4
        /* STYLE */
      )
    ]);
  }
  const loading13 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$5], ["__scopeId", "data-v-3462309c"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/static/loading-equal.vue"]]);
  const _sfc_main$a = {
    name: "zero-loading",
    components: {
      loading0,
      loading1,
      loading2,
      loading3,
      loading4,
      loading5,
      loading6,
      loading7,
      loading8,
      loading9,
      loading10,
      loading11,
      loading12,
      loading13
    },
    props: {
      type: {
        type: String,
        default: "atom"
      },
      position: {
        type: String,
        default: "fixed"
      },
      zIndex: {
        type: Number,
        default: 9
      },
      mask: {
        type: Boolean,
        default: false
      },
      maskOpacity: {
        type: Number,
        default: 0.1
      },
      maskMini: {
        type: Boolean,
        default: false
      },
      maskDark: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: "#0396FF"
      },
      showText: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: "加载中..."
      },
      textSize: {
        type: String,
        default: "28rpx"
      },
      textColor: {
        type: String,
        default: "#333333"
      },
      textGap: {
        type: String,
        default: "40rpx"
      }
    },
    data() {
      return {};
    },
    methods: {
      handleClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_loading0 = vue.resolveComponent("loading0");
    const _component_loading1 = vue.resolveComponent("loading1");
    const _component_loading2 = vue.resolveComponent("loading2");
    const _component_loading3 = vue.resolveComponent("loading3");
    const _component_loading4 = vue.resolveComponent("loading4");
    const _component_loading5 = vue.resolveComponent("loading5");
    const _component_loading6 = vue.resolveComponent("loading6");
    const _component_loading7 = vue.resolveComponent("loading7");
    const _component_loading8 = vue.resolveComponent("loading8");
    const _component_loading9 = vue.resolveComponent("loading9");
    const _component_loading10 = vue.resolveComponent("loading10");
    const _component_loading11 = vue.resolveComponent("loading11");
    const _component_loading12 = vue.resolveComponent("loading12");
    const _component_loading13 = vue.resolveComponent("loading13");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode("  "),
        vue.createElementVNode(
          "view",
          {
            style: vue.normalizeStyle({ position: $props.position, "z-index": $props.zIndex, "--opacity": $props.maskOpacity }),
            class: vue.normalizeClass(["container-wrap", [
              $props.mask ? "mask" : "",
              $props.maskMini ? "mask-mini" : "",
              ($props.mask || $props.maskMini) && $props.maskDark ? "mask-dark" : ""
            ]]),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.handleClick && $options.handleClick(...args), ["prevent"]))
          },
          [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", { class: "main" }, [
                $props.type == "circle" ? (vue.openBlock(), vue.createBlock(_component_loading0, {
                  key: 0,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "pulse" ? (vue.openBlock(), vue.createBlock(_component_loading1, {
                  key: 1,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "bounce" ? (vue.openBlock(), vue.createBlock(_component_loading2, { key: 2 })) : vue.createCommentVNode("v-if", true),
                $props.type == "eyes" ? (vue.openBlock(), vue.createBlock(_component_loading3, { key: 3 })) : vue.createCommentVNode("v-if", true),
                $props.type == "surround" ? (vue.openBlock(), vue.createBlock(_component_loading4, { key: 4 })) : vue.createCommentVNode("v-if", true),
                $props.type == "sun" ? (vue.openBlock(), vue.createBlock(_component_loading5, { key: 5 })) : vue.createCommentVNode("v-if", true),
                $props.type == "love" ? (vue.openBlock(), vue.createBlock(_component_loading6, { key: 6 })) : vue.createCommentVNode("v-if", true),
                $props.type == "sword" ? (vue.openBlock(), vue.createBlock(_component_loading7, {
                  key: 7,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "atom" ? (vue.openBlock(), vue.createBlock(_component_loading8, {
                  key: 8,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "gear" ? (vue.openBlock(), vue.createBlock(_component_loading9, { key: 9 })) : vue.createCommentVNode("v-if", true),
                $props.type == "radar" ? (vue.openBlock(), vue.createBlock(_component_loading10, { key: 10 })) : vue.createCommentVNode("v-if", true),
                $props.type == "annulus" ? (vue.openBlock(), vue.createBlock(_component_loading11, {
                  key: 11,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "wobble" ? (vue.openBlock(), vue.createBlock(_component_loading12, {
                  key: 12,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
                $props.type == "equal" ? (vue.openBlock(), vue.createBlock(_component_loading13, {
                  key: 13,
                  color: $props.color
                }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
              ]),
              $props.showText ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "tips",
                  style: vue.normalizeStyle({ color: $props.textColor, fontSize: $props.textSize, marginTop: $props.textGap })
                },
                vue.toDisplayString($props.text),
                5
                /* TEXT, STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__scopeId", "data-v-18b39832"], ["__file", "F:/uniapp/vegetable-bag/components/zero-loading/zero-loading.vue"]]);
  const props$2 = defineMixin({
    props: {
      // 轮播的长度
      length: {
        type: [String, Number],
        default: () => defProps.swiperIndicator.length
      },
      // 当前处于活动状态的轮播的索引
      current: {
        type: [String, Number],
        default: () => defProps.swiperIndicator.current
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: () => defProps.swiperIndicator.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: () => defProps.swiperIndicator.indicatorInactiveColor
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: () => defProps.swiperIndicator.indicatorMode
      }
    }
  });
  const _sfc_main$9 = {
    name: "u-swiper-indicator",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      // 指示器为线型的样式
      lineStyle() {
        let style = {};
        style.width = addUnit(this.lineWidth);
        style.transform = `translateX(${addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      // 指示器为点型的样式
      dotStyle() {
        return (index) => {
          let style = {};
          style.backgroundColor = index === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    },
    methods: {
      addUnit
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
          style: vue.normalizeStyle({
            width: $options.addUnit($data.lineWidth * _ctx.length),
            backgroundColor: _ctx.indicatorInactiveColor
          })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "u-swiper-indicator__wrapper--line__bar",
              style: vue.normalizeStyle([$options.lineStyle])
            },
            null,
            4
            /* STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.length, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
                key: index,
                style: vue.normalizeStyle([$options.dotStyle(index)])
              },
              null,
              6
              /* CLASS, STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__scopeId", "data-v-7b7c7ea6"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  const props$1 = defineMixin({
    props: {
      // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
      list: {
        type: Array,
        default: () => defProps.swiper.list
      },
      // 是否显示面板指示器
      indicator: {
        type: Boolean,
        default: () => defProps.swiper.indicator
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: () => defProps.swiper.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: () => defProps.swiper.indicatorInactiveColor
      },
      // 指示器样式，可通过bottom，left，right进行定位
      indicatorStyle: {
        type: [String, Object],
        default: () => defProps.swiper.indicatorStyle
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: () => defProps.swiper.indicatorMode
      },
      // 是否自动切换
      autoplay: {
        type: Boolean,
        default: () => defProps.swiper.autoplay
      },
      // 当前所在滑块的 index
      current: {
        type: [String, Number],
        default: () => defProps.swiper.current
      },
      // 当前所在滑块的 item-id ，不能与 current 被同时指定
      currentItemId: {
        type: String,
        default: () => defProps.swiper.currentItemId
      },
      // 滑块自动切换时间间隔
      interval: {
        type: [String, Number],
        default: () => defProps.swiper.interval
      },
      // 滑块切换过程所需时间
      duration: {
        type: [String, Number],
        default: () => defProps.swiper.duration
      },
      // 播放到末尾后是否重新回到开头
      circular: {
        type: Boolean,
        default: () => defProps.swiper.circular
      },
      // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
      previousMargin: {
        type: [String, Number],
        default: () => defProps.swiper.previousMargin
      },
      // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
      nextMargin: {
        type: [String, Number],
        default: () => defProps.swiper.nextMargin
      },
      // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
      acceleration: {
        type: Boolean,
        default: () => defProps.swiper.acceleration
      },
      // 同时显示的滑块数量，nvue、支付宝小程序不支持
      displayMultipleItems: {
        type: Number,
        default: () => defProps.swiper.displayMultipleItems
      },
      // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
      // 只对微信小程序有效
      easingFunction: {
        type: String,
        default: () => defProps.swiper.easingFunction
      },
      // list数组中指定对象的目标属性名
      keyName: {
        type: String,
        default: () => defProps.swiper.keyName
      },
      // 图片的裁剪模式
      imgMode: {
        type: String,
        default: () => defProps.swiper.imgMode
      },
      // 组件高度
      height: {
        type: [String, Number],
        default: () => defProps.swiper.height
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: () => defProps.swiper.bgColor
      },
      // 组件圆角，数值或带单位的字符串
      radius: {
        type: [String, Number],
        default: () => defProps.swiper.radius
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => defProps.swiper.loading
      },
      // 是否显示标题，要求数组对象中有title属性
      showTitle: {
        type: Boolean,
        default: () => defProps.swiper.showTitle
      }
    }
  });
  const _sfc_main$8 = {
    name: "u-swiper",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    emits: ["click", "change"],
    computed: {
      itemStyle() {
        return (index) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = addUnit(this.radius);
            if (index !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      addStyle,
      addUnit,
      testObject: test.object,
      testImage: test.image,
      getItemType(item) {
        if (typeof item === "string")
          return test.video(this.getSource(item)) ? "video" : "image";
        if (typeof item === "object" && this.keyName) {
          if (!item.type)
            return test.video(this.getSource(item)) ? "video" : "image";
          if (item.type === "image")
            return "image";
          if (item.type === "video")
            return "video";
          return "image";
        }
      },
      // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
      getSource(item) {
        if (typeof item === "string")
          return item;
        if (typeof item === "object" && this.keyName)
          return item[this.keyName];
        else
          error("请按格式传递列表参数");
        return "";
      },
      // 轮播切换事件
      change(e2) {
        const {
          current
        } = e2.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e2.detail);
      },
      // 切换轮播时，暂停视频播放
      pauseVideo(index) {
        const lastItem = this.getSource(this.list[index]);
        if (test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index}`, this);
          video2.pause();
        }
      },
      // 当一个轮播item为视频时，获取它的视频海报
      getPoster(item) {
        return typeof item === "object" && item.poster ? item.poster : "";
      },
      // 点击某个item
      clickHandler(index) {
        this.$emit("click", index);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0);
    const _component_u_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("u-swiper-indicator"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-swiper",
        style: vue.normalizeStyle({
          backgroundColor: _ctx.bgColor,
          height: $options.addUnit(_ctx.height),
          borderRadius: $options.addUnit(_ctx.radius)
        })
      },
      [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-swiper__loading"
        }, [
          vue.createVNode(_component_u_loading_icon, { mode: "circle" })
        ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
          key: 1,
          class: "u-swiper__wrapper",
          style: vue.normalizeStyle({
            flex: "1",
            height: $options.addUnit(_ctx.height)
          }),
          onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
          circular: _ctx.circular,
          interval: _ctx.interval,
          duration: _ctx.duration,
          autoplay: _ctx.autoplay,
          current: _ctx.current,
          currentItemId: _ctx.currentItemId,
          previousMargin: $options.addUnit(_ctx.previousMargin),
          nextMargin: $options.addUnit(_ctx.nextMargin),
          acceleration: _ctx.acceleration,
          displayMultipleItems: _ctx.displayMultipleItems,
          easingFunction: _ctx.easingFunction
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                class: "u-swiper__wrapper__item",
                key: index
              }, [
                vue.renderSlot(_ctx.$slots, "default", {
                  item,
                  index
                }, () => [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "u-swiper__wrapper__item__wrapper",
                      style: vue.normalizeStyle([$options.itemStyle(index)])
                    },
                    [
                      vue.createCommentVNode(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),
                      $options.getItemType(item) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        class: "u-swiper__wrapper__item__wrapper__image",
                        src: $options.getSource(item),
                        mode: _ctx.imgMode,
                        onClick: ($event) => $options.clickHandler(index),
                        style: vue.normalizeStyle({
                          height: $options.addUnit(_ctx.height),
                          borderRadius: $options.addUnit(_ctx.radius)
                        })
                      }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
                      $options.getItemType(item) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                        key: 1,
                        class: "u-swiper__wrapper__item__wrapper__video",
                        id: `video-${index}`,
                        "enable-progress-gesture": false,
                        src: $options.getSource(item),
                        poster: $options.getPoster(item),
                        title: _ctx.showTitle && $options.testObject(item) && item.title ? item.title : "",
                        style: vue.normalizeStyle({
                          height: $options.addUnit(_ctx.height)
                        }),
                        controls: "",
                        onClick: ($event) => $options.clickHandler(index)
                      }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
                      _ctx.showTitle && $options.testObject(item) && item.title && $options.testImage($options.getSource(item)) ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 2,
                        class: "u-swiper__wrapper__item__wrapper__title"
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "u-line-1" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ],
                    4
                    /* STYLE */
                  )
                ], true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
        vue.createElementVNode(
          "view",
          {
            class: "u-swiper__indicator",
            style: vue.normalizeStyle([$options.addStyle(_ctx.indicatorStyle)])
          },
          [
            vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
              !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_u_swiper_indicator, {
                key: 0,
                indicatorActiveColor: _ctx.indicatorActiveColor,
                indicatorInactiveColor: _ctx.indicatorInactiveColor,
                length: _ctx.list.length,
                current: $data.currentIndex,
                indicatorMode: _ctx.indicatorMode
              }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
            ], true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-4e7d0c90"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  const _imports_1$1 = "/static/images/establish/bg.png";
  const _sfc_main$7 = {
    __name: "swiper-dot",
    props: {
      list: {
        type: Array,
        default: () => []
      },
      current: {
        type: [String, Number],
        default: 0
      },
      indicatorActiveColor: {
        type: String,
        default: "#000"
      },
      indicatorInactiveColor: {
        type: String,
        default: "#cdcdcd"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "dot-main" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["dot-item"]),
                  style: vue.normalizeStyle(__props.current == index ? { background: __props.indicatorActiveColor } : { background: __props.indicatorInactiveColor }),
                  key: index
                },
                null,
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const swiperDot = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-58fd646a"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/chooseImage/components/swiper-dot.vue"]]);
  const _sfc_main$6 = {
    __name: "chooseImage",
    setup(__props) {
      const { proxy } = vue.getCurrentInstance();
      const eventChannel = proxy.getOpenerEventChannel();
      const dataList = vue.ref([]);
      const isSubmit = vue.computed(() => dataList.value.length);
      const current = vue.ref(0);
      let intervalId;
      const counter = vue.ref(0);
      onLoad(() => {
        eventChannel.on(aiProfilePageFromChooseImagePage, function(data) {
          formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:56", "data", data);
          getImageList(data);
        });
      });
      const getImageList = (data) => {
        incrementCounter();
        generateImage(data).then((res) => {
          formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:63", "res---->", res);
          counter.value = 100;
          dataList.value = res.data.data;
          formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:67", "dataList", dataList.value);
        }).finally(() => {
          clearInterval(intervalId);
        });
      };
      const closeClickHandler = () => {
        showConfirm("放弃编辑吗？").then(({ confirm }) => {
          if (confirm) {
            uni.navigateBack();
          }
        });
      };
      const swiperChange = (e2) => {
        formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:83", "change", e2);
        current.value = e2.current;
      };
      const swiperClick = (e2) => {
        formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:87", "click", e2);
      };
      const nextHandler = () => {
        if (!isSubmit)
          return;
        uni.navigateTo({
          url: "/pages/establish/cropImage/cropImage",
          success: (res) => {
            res.eventChannel.emit(chooseImagePageFromCropImagePage, dataList.value[current.value]);
          }
        });
      };
      const prevHandler = () => {
        uni.navigateBack();
      };
      const incrementCounter = () => {
        intervalId = setInterval(() => {
          if (counter.value < 99) {
            counter.value++;
            formatAppLog("log", "at pages/establish/chooseImage/chooseImage.vue:106", counter.value);
          } else {
            clearInterval(intervalId);
          }
        }, 100);
      };
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_zero_loading = resolveEasycom(vue.resolveDynamicComponent("zero-loading"), __easycom_1$2);
        const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_u_navbar, {
            title: "智能体形象",
            bgColor: "#f5f5f5",
            placeholder: true,
            safeAreaInsetTop: true
          }, {
            left: vue.withCtx(() => [
              vue.createElementVNode("view", {
                class: "close-icon",
                onClick: closeClickHandler
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_0$1,
                  mode: ""
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "content-wrap" }, [
            dataList.value.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "image-bg"
            }, [
              vue.createElementVNode("image", {
                class: "image",
                src: _imports_1$1,
                mode: ""
              }),
              vue.createElementVNode("view", { class: "image-bg__loading" }, [
                vue.createVNode(_component_zero_loading, {
                  type: "pulse",
                  position: "absolute"
                })
              ]),
              vue.createElementVNode(
                "view",
                { class: "image-bg__text" },
                "生成中 " + vue.toDisplayString(counter.value) + "%",
                1
                /* TEXT */
              )
            ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              vue.createVNode(_component_u_swiper, {
                height: "75vh",
                autoplay: false,
                list: dataList.value,
                keyName: "url",
                onChange: swiperChange,
                onClick: swiperClick,
                current: current.value,
                imgMode: "scaleToFill"
              }, null, 8, ["list", "current"]),
              vue.createVNode(swiperDot, {
                list: dataList.value,
                current: current.value
              }, null, 8, ["list", "current"])
            ]))
          ]),
          vue.createElementVNode("view", { class: "bottom-btn" }, [
            vue.createElementVNode("view", {
              class: "bottom-btn__left",
              onClick: prevHandler
            }, "上一步"),
            vue.createElementVNode(
              "view",
              {
                class: "bottom-btn__right",
                onClick: nextHandler,
                style: vue.normalizeStyle(isSubmit.value ? { background: "#0265fe" } : { background: "#abcaf8" })
              },
              "就这张",
              4
              /* STYLE */
            )
          ])
        ]);
      };
    }
  };
  const PagesEstablishChooseImageChooseImage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-975c24ad"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/chooseImage/chooseImage.vue"]]);
  const props = defineMixin({
    props: {
      // checkbox的名称
      name: {
        type: [String, Number, Boolean],
        default: () => defProps.checkbox.name
      },
      // 形状，square为方形，circle为圆型
      shape: {
        type: String,
        default: () => defProps.checkbox.shape
      },
      // 整体的大小
      size: {
        type: [String, Number],
        default: () => defProps.checkbox.size
      },
      // 是否默认选中
      checked: {
        type: Boolean,
        default: () => defProps.checkbox.checked
      },
      // 是否禁用
      disabled: {
        type: [String, Boolean],
        default: () => defProps.checkbox.disabled
      },
      // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
      activeColor: {
        type: String,
        default: () => defProps.checkbox.activeColor
      },
      // 未选中的颜色
      inactiveColor: {
        type: String,
        default: () => defProps.checkbox.inactiveColor
      },
      // 图标的大小，单位px
      iconSize: {
        type: [String, Number],
        default: () => defProps.checkbox.iconSize
      },
      // 图标颜色
      iconColor: {
        type: String,
        default: () => defProps.checkbox.iconColor
      },
      // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
      label: {
        type: [String, Number],
        default: () => defProps.checkbox.label
      },
      // label的字体大小，px单位
      labelSize: {
        type: [String, Number],
        default: () => defProps.checkbox.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: () => defProps.checkbox.labelColor
      },
      // 是否禁止点击提示语选中复选框
      labelDisabled: {
        type: [String, Boolean],
        default: () => defProps.checkbox.labelDisabled
      },
      // 是否独立使用
      usedAlone: {
        type: [Boolean],
        default: () => false
      }
    }
  });
  const _sfc_main$5 = {
    name: "u-checkbox",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        isChecked: false,
        // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
        // 故只能使用如此方法
        parentData: {
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        }
      };
    },
    computed: {
      // 是否禁用，如果父组件u-radios-group禁用的话，将会忽略子组件的配置
      elDisabled() {
        return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
      },
      // 是否禁用label点击
      elLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
      },
      // 组件尺寸，对应size的值，默认值为21px
      elSize() {
        return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
      },
      // 组件的勾选图标的尺寸，默认12px
      elIconSize() {
        return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
      },
      // 组件选中激活时的颜色
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
      },
      // 组件选未中激活时的颜色
      elInactiveColor() {
        return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
      },
      // label的颜色
      elLabelColor() {
        return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
      },
      // 组件的形状
      elShape() {
        return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
      },
      // label大小
      elLabelSize() {
        return addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
      },
      elIconColor() {
        const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
        if (this.elDisabled) {
          return this.isChecked ? this.elInactiveColor : "transparent";
        } else {
          return this.isChecked ? iconColor : "transparent";
        }
      },
      iconClasses() {
        let classes = [];
        classes.push("u-checkbox__icon-wrap--" + this.elShape);
        if (this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled");
        }
        if (this.isChecked && this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled--checked");
        }
        return classes;
      },
      iconWrapStyle() {
        const style = {};
        style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
        style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
        style.width = addUnit(this.elSize);
        style.height = addUnit(this.elSize);
        if (!this.usedAlone) {
          if (this.parentData.iconPlacement === "right") {
            style.marginRight = 0;
          }
        }
        return style;
      },
      checkboxStyle() {
        const style = {};
        if (!this.usedAlone) {
          if (this.parentData.borderBottom && this.parentData.placement === "row") {
            error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效");
          }
          if (this.parentData.borderBottom && this.parentData.placement === "column") {
            style.paddingBottom = "8px";
          }
        }
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    emits: ["change", "update:checked"],
    methods: {
      init() {
        if (!this.usedAlone) {
          this.updateParentData();
          if (!this.parent) {
            error("u-checkbox必须搭配u-checkbox-group组件使用");
          }
          const value = this.parentData.modelValue;
          if (this.checked) {
            this.isChecked = true;
          } else if (!this.usedAlone && test.array(value)) {
            this.isChecked = value.some((item) => {
              return item === this.name;
            });
          }
        } else {
          if (this.checked) {
            this.isChecked = true;
          }
        }
      },
      updateParentData() {
        this.getParentData("u-checkbox-group");
      },
      // 横向两端排列时，点击组件即可触发选中事件
      wrapperClickHandler(e2) {
        if (!this.usedAlone) {
          this.parentData.iconPlacement === "right" && this.iconClickHandler(e2);
        } else {
          this.iconClickHandler(e2);
        }
      },
      // 点击图标
      iconClickHandler(e2) {
        this.preventEvent(e2);
        if (!this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      // 点击label
      labelClickHandler(e2) {
        this.preventEvent(e2);
        if (!this.elLabelDisabled && !this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      emitEvent() {
        this.$emit("change", this.isChecked);
        if (this.usedAlone) {
          this.$emit("update:checked", this.isChecked);
        }
        this.$nextTick(() => {
          formValidate(this, "change");
        });
      },
      // 改变组件选中状态
      // 这里的改变的依据是，更改本组件的checked值为true，同时通过父组件遍历所有u-checkbox实例
      // 将本组件外的其他u-checkbox的checked都设置为false(都被取消选中状态)，因而只剩下一个为选中状态
      setRadioCheckedStatus() {
        this.isChecked = !this.isChecked;
        this.emitEvent();
        if (!this.usedAlone) {
          typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
        }
      }
    },
    watch: {
      checked(newValue, oldValue) {
        if (newValue !== this.isChecked) {
          this.isChecked = newValue;
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-checkbox cursor-pointer", [`u-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom"]]),
        style: vue.normalizeStyle([$options.checkboxStyle]),
        onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"]))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-checkbox__icon-wrap cursor-pointer", $options.iconClasses]),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
            style: vue.normalizeStyle([$options.iconWrapStyle])
          },
          [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              vue.createVNode(_component_u_icon, {
                class: "u-checkbox__icon-wrap__icon",
                name: "checkbox-mark",
                size: $options.elIconSize,
                color: $options.elIconColor
              }, null, 8, ["size", "color"])
            ], true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.renderSlot(_ctx.$slots, "label", {
          label: _ctx.label,
          elDisabled: $options.elDisabled
        }, () => [
          vue.createElementVNode(
            "text",
            {
              onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
              style: vue.normalizeStyle({
                color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
                fontSize: $options.elLabelSize,
                lineHeight: $options.elLabelSize
              })
            },
            vue.toDisplayString(_ctx.label),
            5
            /* TEXT, STYLE */
          )
        ], true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-41713600"], ["__file", "F:/uniapp/vegetable-bag/uni_modules/uview-plus/components/u-checkbox/u-checkbox.vue"]]);
  const _imports_1 = "/static/images/establish/crop.png";
  const _sfc_main$4 = {
    __name: "cropImage",
    setup(__props) {
      const { proxy } = vue.getCurrentInstance();
      const eventChannel = proxy.getOpenerEventChannel();
      const imageData = vue.ref({
        avatar: "",
        bg: ""
      });
      onLoad(() => {
        uni.$on(cropPageFromCropImagePage, (data) => {
          formatAppLog("log", "at pages/establish/cropImage/cropImage.vue:54", "data--->", data);
          if (data.type == 1) {
            imageData.value.avatar = data.path;
          } else {
            imageData.value.bg = data.path;
          }
        });
        eventChannel.on(chooseImagePageFromCropImagePage, (data) => {
          formatAppLog("log", "at pages/establish/cropImage/cropImage.vue:62", "data", data);
          imageData.value.avatar = data.url;
          imageData.value.bg = data.url;
        });
      });
      const enableBackground = vue.ref(false);
      const closeClickHandler = () => {
        uni.navigateBack();
      };
      const cropBgHandler = (type2) => {
        const img = type2 === 1 ? imageData.value.avatar : imageData.value.bg;
        const data = { type: type2, img };
        uni.navigateTo({
          url: "/pages/establish/components/crop",
          success: (res) => res.eventChannel.emit(cropImagePageFromCropPage, data)
        });
      };
      const cancelHandler = () => {
      };
      const confirmHandler = async () => {
        const bgInfo = await uni.getImageInfo({
          src: imageData.value.bg
        });
        const avatarInfo = await uni.getImageInfo({
          src: imageData.value.avatar
        });
        const bg = await uploadFile(bgInfo.path);
        const avatar = await uploadFile(avatarInfo.path);
        const data = {
          enableBackground: enableBackground.value,
          backgroundImage: bg.fileName,
          modelImage: avatar.fileName,
          isAiImage: true
        };
        formatAppLog("log", "at pages/establish/cropImage/cropImage.vue:97", "Navigating to establish page with data:", data);
        uni.navigateTo({
          url: "/pages/establish/establish",
          success: (res) => {
            formatAppLog("log", "at pages/establish/cropImage/cropImage.vue:101", "Emitting cropImagePageFromEstablishPage event");
            uni.$emit(cropImagePageFromEstablishPage, data);
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        const _component_u_checkbox = resolveEasycom(vue.resolveDynamicComponent("u-checkbox"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_u_navbar, {
            title: "智能体形象",
            bgColor: "#fff",
            placeholder: true,
            safeAreaInsetTop: true
          }, {
            left: vue.withCtx(() => [
              vue.createElementVNode("view", {
                class: "close-icon",
                onClick: closeClickHandler
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: _imports_0$1,
                  mode: ""
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "profile-prcture" }, [
            vue.createElementVNode("view", {
              class: "profile-prcture__avatar",
              onClick: _cache[0] || (_cache[0] = ($event) => cropBgHandler(1))
            }, [
              vue.createElementVNode("view", { class: "profile-prcture__avatar__img" }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: imageData.value.avatar,
                  mode: "scaleToFill"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "profile-prcture__avatar__crop" }, [
                vue.createElementVNode("image", {
                  src: _imports_1,
                  class: "image",
                  mode: ""
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "chat-bg",
            onClick: _cache[1] || (_cache[1] = ($event) => cropBgHandler(2))
          }, [
            vue.createElementVNode("view", { class: "chat-bg__item" }, [
              vue.createElementVNode("image", {
                class: "image",
                src: imageData.value.bg,
                mode: "scaleToFill"
              }, null, 8, ["src"])
            ]),
            vue.createCommentVNode(' <view class="chat-bg__linear">\n				<view class="chat-bg__linear__left"></view>\n				<view class="chat-bg__linear__right"></view>\n				<view class="chat-bg__linear__left"></view>\n			</view> ')
          ]),
          vue.createElementVNode("view", { class: "checkout" }, [
            vue.createVNode(_component_u_checkbox, {
              shape: "circle",
              customStyle: { marginBottom: "8px" },
              label: "启用聊天背景",
              name: "agree",
              usedAlone: "",
              checked: enableBackground.value,
              "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => enableBackground.value = $event)
            }, null, 8, ["checked"])
          ]),
          vue.createElementVNode("view", { class: "bottom-btn" }, [
            vue.createElementVNode("view", {
              class: "bottom-btn__left",
              onClick: cancelHandler
            }, "更换形象"),
            vue.createElementVNode("view", {
              class: "bottom-btn__right",
              onClick: confirmHandler
            }, "确定")
          ])
        ]);
      };
    }
  };
  const PagesEstablishCropImageCropImage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7007e005"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/cropImage/cropImage.vue"]]);
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("cropper");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["cropper"] = "6464bc94";
  };
  const AREA_SIZE = 150;
  const IMG_SIZE = 300;
  const _sfc_main$3 = {
    name: "qf-image-cropper",
    props: {
      /** 图片资源地址 */
      src: {
        type: String,
        default: ""
      },
      /** 裁剪宽度，有些平台或设备对于canvas的尺寸有限制，过大可能会导致无法正常绘制 */
      width: {
        type: Number,
        default: IMG_SIZE
      },
      /** 裁剪高度，有些平台或设备对于canvas的尺寸有限制，过大可能会导致无法正常绘制 */
      height: {
        type: Number,
        default: IMG_SIZE
      },
      /** 是否绘制裁剪区域边框 */
      showBorder: {
        type: Boolean,
        default: true
      },
      /** 是否绘制裁剪区域网格参考线 */
      showGrid: {
        type: Boolean,
        default: true
      },
      /** 是否展示四个支持伸缩的角 */
      showAngle: {
        type: Boolean,
        default: true
      },
      /** 裁剪区域最小缩放倍数 */
      areaScale: {
        type: Number,
        default: 0.3
      },
      /** 图片最小缩放倍数 */
      minScale: {
        type: Number,
        default: 1
      },
      /** 图片最大缩放倍数 */
      maxScale: {
        type: Number,
        default: 5
      },
      /** 检查图片位置是否超出裁剪边界，如果超出则会矫正位置 */
      checkRange: {
        type: Boolean,
        default: true
      },
      /** 生成图片背景色：如果裁剪区域没有完全包含在图片中时，不设置该属性生成图片存在一定的透明块 */
      backgroundColor: {
        type: String
      },
      /** 是否有回弹效果：当 checkRange 为 true 时有效，拖动时可以拖出边界，释放时会弹回边界 */
      bounce: {
        type: Boolean,
        default: true
      },
      /** 是否支持翻转 */
      rotatable: {
        type: Boolean,
        default: true
      },
      /** 是否支持逆向翻转 */
      reverseRotatable: {
        type: Boolean,
        default: false
      },
      /** 是否支持从本地选择素材 */
      choosable: {
        type: Boolean,
        default: true
      },
      /** 是否开启硬件加速，图片缩放过程中如果出现元素的“留影”或“重影”效果，可通过该方式解决或减轻这一问题 */
      gpu: {
        type: Boolean,
        default: false
      },
      /** 四个角尺寸，单位px */
      angleSize: {
        type: Number,
        default: 20
      },
      /** 四个角边框宽度，单位px */
      angleBorderWidth: {
        type: Number,
        default: 2
      },
      zIndex: {
        type: [Number, String]
      },
      /** 裁剪图片圆角半径，单位px */
      radius: {
        type: Number,
        default: 0
      },
      /** 生成文件的类型，只支持 'jpg' 或 'png'。默认为 'png' */
      fileType: {
        type: String,
        default: "png"
      },
      /**
       * 图片从绘制到生成所需时间，单位ms
       * 微信小程序平台使用 `Canvas 2D` 绘制时有效
       * 如绘制大图或出现裁剪图片空白等情况应适当调大该值，因 `Canvas 2d` 采用同步绘制，需自己把控绘制完成时间
       */
      delay: {
        type: Number,
        default: 1e3
      },
      AREA_SIZE: {
        type: Number,
        default: 75
      }
    },
    emits: ["crop"],
    data() {
      return {
        // 用不同 id 使 v-for key 不重复
        maskList: [
          { id: "crop-mask-block-1" },
          { id: "crop-mask-block-2" },
          { id: "crop-mask-block-3" },
          { id: "crop-mask-block-4" }
        ],
        gridList: [
          { id: "crop-grid-1" },
          { id: "crop-grid-2" },
          { id: "crop-grid-3" },
          { id: "crop-grid-4" }
        ],
        angleList: [
          { id: "crop-angle-1" },
          { id: "crop-angle-2" },
          { id: "crop-angle-3" },
          { id: "crop-angle-4" }
        ],
        /** 本地缓存的图片路径 */
        imgSrc: "",
        /** 图片的裁剪宽度 */
        imgWidth: IMG_SIZE,
        /** 图片的裁剪高度 */
        imgHeight: IMG_SIZE,
        /** 裁剪区域最大宽度所占屏幕宽度百分比 */
        widthPercent: this.AREA_SIZE ?? AREA_SIZE,
        /** 裁剪区域最大高度所占屏幕宽度百分比 */
        heightPercent: this.AREA_SIZE ?? AREA_SIZE,
        /** 裁剪区域布局信息 */
        area: {},
        /** 未被缩放过的图片宽 */
        oldWidth: 0,
        /** 未被缩放过的图片高 */
        oldHeight: 0,
        /** 系统信息 */
        sys: uni.getSystemInfoSync(),
        scaleWidth: 0,
        scaleHeight: 0,
        rotate: 0,
        offsetX: 0,
        offsetY: 0,
        use2d: false,
        canvansWidth: 0,
        canvansHeight: 0
        // imageStyles: {},
        // maskStylesList: [{}, {}, {}, {}],
        // borderStyles: {},
        // gridStylesList: [{}, {}, {}, {}],
        // angleStylesList: [{}, {}, {}, {}],
        // circleBoxStyles: {},
        // circleStyles: {},
      };
    },
    computed: {
      initData() {
        return {
          timestamp: (/* @__PURE__ */ new Date()).getTime(),
          area: {
            ...this.area,
            bounce: this.bounce,
            showBorder: this.showBorder,
            showGrid: this.showGrid,
            showAngle: this.showAngle,
            angleSize: this.angleSize,
            angleBorderWidth: this.angleBorderWidth,
            minScale: this.areaScale,
            widthPercent: this.widthPercent,
            heightPercent: this.heightPercent,
            radius: this.radius,
            checkRange: this.checkRange,
            zIndex: +this.zIndex || 0
          },
          sys: this.sys,
          img: {
            minScale: this.minScale,
            maxScale: this.maxScale,
            src: this.imgSrc,
            width: this.oldWidth,
            height: this.oldHeight,
            oldWidth: this.oldWidth,
            oldHeight: this.oldHeight,
            gpu: this.gpu
          }
        };
      },
      imgProps() {
        return {
          width: this.width,
          height: this.height,
          src: this.src
        };
      }
    },
    watch: {
      imgProps: {
        handler(val, oldVal) {
          this.imgWidth = Number(val.width) || IMG_SIZE;
          this.imgHeight = Number(val.height) || IMG_SIZE;
          let use2d = true;
          use2d = false;
          let canvansWidth = this.imgWidth;
          let canvansHeight = this.imgHeight;
          let size = Math.max(canvansWidth, canvansHeight);
          formatAppLog("log", "at components/qf-image-cropper/qf-image-cropper.vue:326", "size", size);
          let scalc = 1;
          if (size > 1365) {
            scalc = 1365 / size;
          }
          this.canvansWidth = canvansWidth * scalc;
          this.canvansHeight = canvansHeight * scalc;
          this.use2d = use2d;
          this.initArea();
          const src = val.src || this.imgSrc;
          src && this.initImage(src, oldVal === void 0);
        },
        immediate: true
      }
    },
    methods: {
      /** 提供给wxs调用，用来接收图片变更数据 */
      dataChange(e2) {
        this.scaleWidth = e2.width;
        this.scaleHeight = e2.height;
        this.rotate = e2.rotate;
        this.offsetX = e2.x;
        this.offsetY = e2.y;
      },
      /** 初始化裁剪区域布局信息 */
      initArea() {
        this.sys.offsetBottom = uni.upx2px(100) + this.sys.safeAreaInsets.bottom;
        this.sys.windowTop = 0;
        this.sys.navigation = true;
        let wp = this.widthPercent;
        let hp = this.heightPercent;
        if (this.imgWidth > this.imgHeight) {
          hp = hp * this.imgHeight / this.imgWidth;
        } else if (this.imgWidth < this.imgHeight) {
          wp = wp * this.imgWidth / this.imgHeight;
        }
        const size = this.sys.windowWidth > this.sys.windowHeight ? this.sys.windowHeight : this.sys.windowWidth;
        const width = size * wp / 100;
        const height = size * hp / 100;
        const left = (this.sys.windowWidth - width) / 2;
        const right = left + width;
        const top = (this.sys.windowHeight + this.sys.windowTop - this.sys.offsetBottom - height) / 2;
        const bottom = this.sys.windowHeight + this.sys.windowTop - this.sys.offsetBottom - top;
        this.area = { width, height, left, right, top, bottom };
        this.scaleWidth = width;
        this.scaleHeight = height;
      },
      /** 从本地选取图片 */
      chooseImage(options) {
        uni.chooseImage({
          ...options,
          count: 1,
          success: (res) => {
            this.resetData();
            this.initImage(res.tempFiles[0].path);
          }
        });
      },
      /** 重置数据 */
      resetData() {
        this.imgSrc = "";
        this.rotate = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.initArea();
      },
      /**
       * 初始化图片信息
       * @param {String} url 图片链接
       */
      initImage(url2, isFirst) {
        uni.getImageInfo({
          src: url2,
          success: async (res) => {
            if (isFirst && this.src === url2)
              await new Promise((resolve) => setTimeout(resolve, 50));
            this.imgSrc = res.path;
            let scale = res.width / res.height;
            let areaScale = this.area.width / this.area.height;
            if (scale > 1) {
              if (scale >= areaScale) {
                this.scaleWidth = this.scaleHeight / res.height * this.scaleWidth * (res.width / this.scaleWidth);
              } else {
                this.scaleHeight = res.height * this.scaleWidth / res.width;
              }
            } else {
              if (scale <= areaScale) {
                this.scaleHeight = this.scaleWidth / res.width * this.scaleHeight / (this.scaleHeight / res.height);
              } else {
                this.scaleWidth = res.width * this.scaleHeight / res.height;
              }
            }
            this.oldWidth = +this.scaleWidth.toFixed(2);
            this.oldHeight = +this.scaleHeight.toFixed(2);
          },
          fail: (err) => {
            formatAppLog("error", "at components/qf-image-cropper/qf-image-cropper.vue:445", err);
          }
        });
      },
      /**
       * 剪切图片圆角
       * @param {Object} ctx canvas 的绘图上下文对象
       * @param {Number} radius 圆角半径
       * @param {Number} scale 生成图片的实际尺寸与截取区域比
       * @param {Function} drawImage 执行剪切时所调用的绘图方法，入参为是否执行了剪切
       */
      drawClipImage(ctx, radius, scale, drawImage) {
        if (radius > 0) {
          ctx.save();
          ctx.beginPath();
          const w2 = this.canvansWidth;
          const h2 = this.canvansHeight;
          if (w2 === h2 && radius >= w2 / 2) {
            ctx.arc(w2 / 2, h2 / 2, w2 / 2, 0, 2 * Math.PI);
          } else {
            if (w2 !== h2) {
              radius = Math.min(w2 / 2, h2 / 2, radius);
            }
            ctx.moveTo(radius, 0);
            ctx.arcTo(w2, 0, w2, h2, radius);
            ctx.arcTo(w2, h2, 0, h2, radius);
            ctx.arcTo(0, h2, 0, 0, radius);
            ctx.arcTo(0, 0, w2, 0, radius);
            ctx.closePath();
          }
          ctx.clip();
          drawImage && drawImage(true);
          ctx.restore();
        } else {
          drawImage && drawImage(false);
        }
      },
      /**
       * 旋转图片
       * @param {Object} ctx canvas 的绘图上下文对象
       * @param {Number} rotate 旋转角度
       * @param {Number} scale 生成图片的实际尺寸与截取区域比
       */
      drawRotateImage(ctx, rotate, scale) {
        if (rotate !== 0) {
          const x2 = this.scaleWidth * scale / 2;
          const y2 = this.scaleHeight * scale / 2;
          ctx.translate(x2, y2);
          ctx.rotate(rotate * Math.PI / 180);
          ctx.translate(-x2, -y2);
        }
      },
      drawImage(ctx, image2, callback) {
        const scale = this.canvansWidth / this.area.width;
        if (this.backgroundColor) {
          if (ctx.setFillStyle)
            ctx.setFillStyle(this.backgroundColor);
          else
            ctx.fillStyle = this.backgroundColor;
          ctx.fillRect(0, 0, this.canvansWidth, this.canvansHeight);
        }
        this.drawClipImage(ctx, this.radius, scale, () => {
          this.drawRotateImage(ctx, this.rotate, scale);
          const r2 = this.rotate / 90;
          ctx.drawImage(
            image2,
            [
              this.offsetX - this.area.left,
              this.offsetY - this.area.top,
              -(this.offsetX - this.area.left),
              -(this.offsetY - this.area.top)
            ][r2] * scale,
            [
              this.offsetY - this.area.top,
              -(this.offsetX - this.area.left),
              -(this.offsetY - this.area.top),
              this.offsetX - this.area.left
            ][r2] * scale,
            this.scaleWidth * scale,
            this.scaleHeight * scale
          );
        });
      },
      /**
       * 绘图
       * @param {Object} canvas 
       * @param {Object} ctx canvas 的绘图上下文对象
       * @param {String} src 图片路径
       * @param {Function} callback 开始绘制时回调
       */
      draw2DImage(canvas, ctx, src, callback) {
        if (canvas) {
          const image2 = canvas.createImage();
          image2.onload = () => {
            this.drawImage(ctx, image2);
            callback && setTimeout(callback, this.delay);
          };
          image2.onerror = (err) => {
            formatAppLog("error", "at components/qf-image-cropper/qf-image-cropper.vue:548", err);
            uni.hideLoading();
          };
          image2.src = src;
        } else {
          this.drawImage(ctx, src);
          setTimeout(() => {
            ctx.draw(false, callback);
          }, 200);
        }
      },
      /**
       * 画布转图片到本地缓存
       * @param {Object} canvas 
       * @param {String} canvasId 
       */
      canvasToTempFilePath(canvas, canvasId) {
        uni.canvasToTempFilePath({
          canvas,
          canvasId,
          x: 0,
          y: 0,
          width: this.canvansWidth,
          height: this.canvansHeight,
          destWidth: this.imgWidth,
          // 必要，保证生成图片宽度不受设备分辨率影响
          destHeight: this.imgHeight,
          // 必要，保证生成图片高度不受设备分辨率影响
          fileType: this.fileType,
          // 目标文件的类型，默认png
          success: (res) => {
            this.handleImage(res.tempFilePath);
          },
          fail: (err) => {
            uni.hideLoading();
            uni.showToast({ title: "裁剪失败，生成图片异常！", icon: "none" });
          }
        }, this);
      },
      /** 确认裁剪 */
      cropClick() {
        uni.showLoading({ title: "裁剪中...", mask: true });
        if (!this.use2d) {
          const ctx = uni.createCanvasContext("imgCanvas", this);
          ctx.clearRect(0, 0, this.canvansWidth, this.canvansHeight);
          this.draw2DImage(null, ctx, this.imgSrc, () => {
            this.canvasToTempFilePath(null, "imgCanvas");
          });
          return;
        }
      },
      handleImage(tempFilePath) {
        uni.hideLoading();
        this.$emit("crop", { tempFilePath });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" https://ext.dcloud.net.cn/plugin?id=10333 "),
        vue.createElementVNode(
          "view",
          {
            class: "image-cropper",
            style: vue.normalizeStyle({ zIndex: $props.zIndex }),
            onWheel: _cache[9] || (_cache[9] = (...args) => _ctx.cropper.mousewheel && _ctx.cropper.mousewheel(...args))
          },
          [
            $data.use2d ? (vue.openBlock(), vue.createElementBlock(
              "canvas",
              {
                key: 0,
                type: "2d",
                id: "imgCanvas",
                class: "img-canvas",
                style: vue.normalizeStyle({
                  width: `${$data.canvansWidth}px`,
                  height: `${$data.canvansHeight}px`
                })
              },
              null,
              4
              /* STYLE */
            )) : (vue.openBlock(), vue.createElementBlock(
              "canvas",
              {
                key: 1,
                id: "imgCanvas",
                "canvas-id": "imgCanvas",
                class: "img-canvas",
                style: vue.normalizeStyle({
                  width: `${$data.canvansWidth}px`,
                  height: `${$data.canvansHeight}px`
                })
              },
              null,
              4
              /* STYLE */
            )),
            vue.createElementVNode("view", {
              id: "pic-preview",
              class: "pic-preview",
              "change:init": _ctx.cropper.initObserver,
              init: vue.wp($options.initData),
              onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.cropper.touchstart && _ctx.cropper.touchstart(...args)),
              onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.cropper.touchmove && _ctx.cropper.touchmove(...args)),
              onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.cropper.touchend && _ctx.cropper.touchend(...args))
            }, [
              $data.imgSrc ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                id: "crop-image",
                class: "crop-image",
                style: vue.normalizeStyle(_ctx.cropper.imageStyles),
                src: $data.imgSrc,
                webp: ""
              }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.maskList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.id,
                    id: item.id,
                    class: "crop-mask-block",
                    style: vue.normalizeStyle(_ctx.cropper.maskStylesList[index])
                  }, null, 12, ["id"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $props.showBorder ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  id: "crop-border",
                  class: "crop-border",
                  style: vue.normalizeStyle(_ctx.cropper.borderStyles)
                },
                null,
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true),
              $props.radius > 0 ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 2,
                  id: "crop-circle-box",
                  class: "crop-circle-box",
                  style: vue.normalizeStyle(_ctx.cropper.circleBoxStyles)
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "crop-circle",
                      id: "crop-circle",
                      style: vue.normalizeStyle(_ctx.cropper.circleStyles)
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true),
              $props.showGrid ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 3 },
                vue.renderList($data.gridList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.id,
                    id: item.id,
                    class: "crop-grid",
                    style: vue.normalizeStyle(_ctx.cropper.gridStylesList[index])
                  }, null, 12, ["id"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true),
              $props.showAngle ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 4 },
                vue.renderList($data.angleList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.id,
                    id: item.id,
                    class: "crop-angle",
                    style: vue.normalizeStyle(_ctx.cropper.angleStylesList[index])
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        style: vue.normalizeStyle([{
                          width: `${$props.angleSize}px`,
                          height: `${$props.angleSize}px`
                        }])
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 12, ["id"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ], 40, ["change:init", "init"]),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            vue.createElementVNode(
              "view",
              {
                class: "fixed-bottom safe-area-inset-bottom",
                style: vue.normalizeStyle({ zIndex: $options.initData.area.zIndex + 99 })
              },
              [
                ($props.rotatable || $props.reverseRotatable) && !!$data.imgSrc ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "action-bar"
                }, [
                  $props.reverseRotatable ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "rotate-icon",
                    onClick: _cache[3] || (_cache[3] = (...args) => _ctx.cropper.rotateImage270 && _ctx.cropper.rotateImage270(...args))
                  })) : vue.createCommentVNode("v-if", true),
                  $props.rotatable ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "rotate-icon is-reverse",
                    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.cropper.rotateImage90 && _ctx.cropper.rotateImage90(...args))
                  })) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(' <view  class="choose-btn" @click="cropClick">确定</view> '),
                !$props.choosable ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "choose-btn",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.cropClick && $options.cropClick(...args))
                }, "确定")) : !!$data.imgSrc ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 2 },
                  [
                    vue.createElementVNode("view", {
                      class: "rechoose",
                      onClick: _cache[6] || (_cache[6] = (...args) => $options.chooseImage && $options.chooseImage(...args))
                    }, "重选"),
                    vue.createElementVNode("button", {
                      class: "button",
                      size: "mini",
                      onClick: _cache[7] || (_cache[7] = (...args) => $options.cropClick && $options.cropClick(...args))
                    }, "确定")
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "choose-btn",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.chooseImage && $options.chooseImage(...args))
                }, "选择图片"))
              ],
              4
              /* STYLE */
            )
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$3);
  const qfImageCropper = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-10e88587"], ["__file", "F:/uniapp/vegetable-bag/components/qf-image-cropper/qf-image-cropper.vue"]]);
  const _sfc_main$2 = {
    __name: "crop",
    setup(__props) {
      const { proxy } = vue.getCurrentInstance();
      const eventChannel = proxy.getOpenerEventChannel();
      const avatarSrc = vue.ref("");
      const cbData = vue.ref({
        type: 1
      });
      onLoad(() => {
        eventChannel.on(cropImagePageFromCropPage, function(data) {
          cbData.value.type = data.type;
          avatarSrc.value = data.img;
        });
        eventChannel.on(establishPageFromCropPage, function(data) {
          avatarSrc.value = data;
          cbData.value.type = 1;
        });
      });
      const cropHeight = vue.computed(() => {
        if (cbData.value.type == 1) {
          return 500;
        } else {
          return proxy.$devices.screenHeight;
        }
      });
      const cropAREA_SIZE = vue.computed(() => {
        if (cbData.value.type == 1) {
          return 75;
        } else {
          return 150;
        }
      });
      const closeClickHandler = () => {
        uni.navigateBack();
      };
      const handleCrop = (e2) => {
        formatAppLog("log", "at pages/establish/components/crop.vue:63", "e", e2);
        const data = {
          ...cbData.value,
          path: e2.tempFilePath,
          bg: avatarSrc.value
        };
        uni.navigateBack({
          success: (res) => {
            uni.$emit(cropPageFromCropImagePage, data);
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_u_navbar, {
              title: "裁剪",
              bgColor: "#fff",
              placeholder: true,
              safeAreaInsetTop: true
            }, {
              left: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "close-icon",
                  onClick: closeClickHandler
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: _imports_0$1,
                    mode: ""
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(qfImageCropper, {
              navigation: false,
              AREA_SIZE: cropAREA_SIZE.value,
              choosable: false,
              width: 500,
              height: cropHeight.value,
              src: avatarSrc.value,
              radius: 30,
              onCrop: handleCrop
            }, null, 8, ["AREA_SIZE", "height", "src"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesEstablishComponentsCrop = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "F:/uniapp/vegetable-bag/pages/establish/components/crop.vue"]]);
  const _sfc_main$1 = {
    __name: "language",
    setup(__props) {
      const settingsStore = useSettingsStore();
      const dataList = vue.ref([
        {
          id: 1,
          title: "中文",
          label: "中文",
          checkout: true,
          border: true
        },
        {
          id: 2,
          title: "English",
          label: "英文",
          checkout: false,
          border: false
        }
      ]);
      onShow(() => {
        dataList.value.forEach((item) => {
          formatAppLog("log", "at pages/establish/language/language.vue:38", "item", item);
          formatAppLog("log", "at pages/establish/language/language.vue:39", "settingsStore.getLanguageLabel", settingsStore.getLanguageLabel);
          item.checkout = item.label == settingsStore.getLanguageLabel;
        });
      });
      const onClickHandler = (index) => {
        dataList.value.forEach((item, indexItem) => {
          item.checkout = indexItem === index;
          if (indexItem == index) {
            settingsStore.setLanguage(item.id);
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
        const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_1$6);
        const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_2$4);
        return vue.openBlock(), vue.createElementBlock("view", { class: "language" }, [
          vue.createVNode(_component_u_cell_group, { border: false }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(dataList.value, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_u_cell, {
                    onClick: ($event) => onClickHandler(index),
                    key: item.id,
                    title: item.title,
                    label: item.label,
                    border: item.border
                  }, {
                    value: vue.withCtx(() => [
                      item.checkout ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                        key: 0,
                        name: "checkmark",
                        color: "#2979ff",
                        size: "20"
                      })) : vue.createCommentVNode("v-if", true)
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick", "title", "label", "border"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesEstablishLanguageLanguage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5a9758fa"], ["__file", "F:/uniapp/vegetable-bag/pages/establish/language/language.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/mine/settings/settings", PagesMineSettingsSettings);
  __definePage("pages/mine/settings/background-setting/background-setting", PagesMineSettingsBackgroundSettingBackgroundSetting);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/establish/establish", PagesEstablishEstablish);
  __definePage("pages/notice/notice", PagesNoticeNotice);
  __definePage("pages/login", PagesLogin);
  __definePage("pages/index/components/chat", PagesIndexComponentsChat);
  __definePage("pages/establish/aiProfile/aiProfile", PagesEstablishAiProfileAiProfile);
  __definePage("pages/establish/chooseImage/chooseImage", PagesEstablishChooseImageChooseImage);
  __definePage("pages/establish/cropImage/cropImage", PagesEstablishCropImageCropImage);
  __definePage("pages/establish/components/crop", PagesEstablishComponentsCrop);
  __definePage("pages/establish/language/language", PagesEstablishLanguageLanguage);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const userStore = useUserStore();
      onLaunch((options) => {
        formatAppLog("log", "at App.vue:8", "App Launch");
        init();
      });
      onShow(() => {
        formatAppLog("log", "at App.vue:13", "App Show");
      });
      onHide(() => {
        formatAppLog("log", "at App.vue:16", "App Hide");
      });
      const init = (options) => {
        if (getToken()) {
          plus.navigator.closeSplashscreen();
          userStore.getInfo();
        } else {
          uni.reLaunch({
            url: "/pages/login",
            success: () => {
              plus.navigator.closeSplashscreen();
            }
          });
        }
      };
      return () => {
      };
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/uniapp/vegetable-bag/App.vue"]]);
  const store = createPinia();
  const devices = uni.getSystemInfoSync();
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$devices = devices;
    app.use(store);
    app.component(tabbar);
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
