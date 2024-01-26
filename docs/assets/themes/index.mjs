var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var loglevel = {exports: {}};

/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/

(function (module) {
	(function (root, definition) {
	    if (module.exports) {
	        module.exports = definition();
	    } else {
	        root.log = definition();
	    }
	}(commonjsGlobal, function () {

	    // Slightly dubious tricks to cut down minimized file size
	    var noop = function() {};
	    var undefinedType = "undefined";
	    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
	        /Trident\/|MSIE /.test(window.navigator.userAgent)
	    );

	    var logMethods = [
	        "trace",
	        "debug",
	        "info",
	        "warn",
	        "error"
	    ];

	    // Cross-browser bind equivalent that works at least back to IE6
	    function bindMethod(obj, methodName) {
	        var method = obj[methodName];
	        if (typeof method.bind === 'function') {
	            return method.bind(obj);
	        } else {
	            try {
	                return Function.prototype.bind.call(method, obj);
	            } catch (e) {
	                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
	                return function() {
	                    return Function.prototype.apply.apply(method, [obj, arguments]);
	                };
	            }
	        }
	    }

	    // Trace() doesn't print the message in IE, so for that case we need to wrap it
	    function traceForIE() {
	        if (console.log) {
	            if (console.log.apply) {
	                console.log.apply(console, arguments);
	            } else {
	                // In old IE, native console methods themselves don't have apply().
	                Function.prototype.apply.apply(console.log, [console, arguments]);
	            }
	        }
	        if (console.trace) console.trace();
	    }

	    // Build the best logging method possible for this env
	    // Wherever possible we want to bind, not wrap, to preserve stack traces
	    function realMethod(methodName) {
	        if (methodName === 'debug') {
	            methodName = 'log';
	        }

	        if (typeof console === undefinedType) {
	            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
	        } else if (methodName === 'trace' && isIE) {
	            return traceForIE;
	        } else if (console[methodName] !== undefined) {
	            return bindMethod(console, methodName);
	        } else if (console.log !== undefined) {
	            return bindMethod(console, 'log');
	        } else {
	            return noop;
	        }
	    }

	    // These private functions always need `this` to be set properly

	    function replaceLoggingMethods(level, loggerName) {
	        /*jshint validthis:true */
	        for (var i = 0; i < logMethods.length; i++) {
	            var methodName = logMethods[i];
	            this[methodName] = (i < level) ?
	                noop :
	                this.methodFactory(methodName, level, loggerName);
	        }

	        // Define log.log as an alias for log.debug
	        this.log = this.debug;
	    }

	    // In old IE versions, the console isn't present until you first open it.
	    // We build realMethod() replacements here that regenerate logging methods
	    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
	        return function () {
	            if (typeof console !== undefinedType) {
	                replaceLoggingMethods.call(this, level, loggerName);
	                this[methodName].apply(this, arguments);
	            }
	        };
	    }

	    // By default, we use closely bound real methods wherever possible, and
	    // otherwise we wait for a console to appear, and then try again.
	    function defaultMethodFactory(methodName, level, loggerName) {
	        /*jshint validthis:true */
	        return realMethod(methodName) ||
	               enableLoggingWhenConsoleArrives.apply(this, arguments);
	    }

	    function Logger(name, defaultLevel, factory) {
	      var self = this;
	      var currentLevel;
	      defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;

	      var storageKey = "loglevel";
	      if (typeof name === "string") {
	        storageKey += ":" + name;
	      } else if (typeof name === "symbol") {
	        storageKey = undefined;
	      }

	      function persistLevelIfPossible(levelNum) {
	          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

	          if (typeof window === undefinedType || !storageKey) return;

	          // Use localStorage if available
	          try {
	              window.localStorage[storageKey] = levelName;
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=" + levelName + ";";
	          } catch (ignore) {}
	      }

	      function getPersistedLevel() {
	          var storedLevel;

	          if (typeof window === undefinedType || !storageKey) return;

	          try {
	              storedLevel = window.localStorage[storageKey];
	          } catch (ignore) {}

	          // Fallback to cookies if local storage gives us nothing
	          if (typeof storedLevel === undefinedType) {
	              try {
	                  var cookie = window.document.cookie;
	                  var location = cookie.indexOf(
	                      encodeURIComponent(storageKey) + "=");
	                  if (location !== -1) {
	                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
	                  }
	              } catch (ignore) {}
	          }

	          // If the stored level is not valid, treat it as if nothing was stored.
	          if (self.levels[storedLevel] === undefined) {
	              storedLevel = undefined;
	          }

	          return storedLevel;
	      }

	      function clearPersistedLevel() {
	          if (typeof window === undefinedType || !storageKey) return;

	          // Use localStorage if available
	          try {
	              window.localStorage.removeItem(storageKey);
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	          } catch (ignore) {}
	      }

	      /*
	       *
	       * Public logger API - see https://github.com/pimterry/loglevel for details
	       *
	       */

	      self.name = name;

	      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
	          "ERROR": 4, "SILENT": 5};

	      self.methodFactory = factory || defaultMethodFactory;

	      self.getLevel = function () {
	          return currentLevel;
	      };

	      self.setLevel = function (level, persist) {
	          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
	              level = self.levels[level.toUpperCase()];
	          }
	          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
	              currentLevel = level;
	              if (persist !== false) {  // defaults to true
	                  persistLevelIfPossible(level);
	              }
	              replaceLoggingMethods.call(self, level, name);
	              if (typeof console === undefinedType && level < self.levels.SILENT) {
	                  return "No console available for logging";
	              }
	          } else {
	              throw "log.setLevel() called with invalid level: " + level;
	          }
	      };

	      self.setDefaultLevel = function (level) {
	          defaultLevel = level;
	          if (!getPersistedLevel()) {
	              self.setLevel(level, false);
	          }
	      };

	      self.resetLevel = function () {
	          self.setLevel(defaultLevel, false);
	          clearPersistedLevel();
	      };

	      self.enableAll = function(persist) {
	          self.setLevel(self.levels.TRACE, persist);
	      };

	      self.disableAll = function(persist) {
	          self.setLevel(self.levels.SILENT, persist);
	      };

	      // Initialize with the right level
	      var initialLevel = getPersistedLevel();
	      if (initialLevel == null) {
	          initialLevel = defaultLevel;
	      }
	      self.setLevel(initialLevel, false);
	    }

	    /*
	     *
	     * Top-level API
	     *
	     */

	    var defaultLogger = new Logger();

	    var _loggersByName = {};
	    defaultLogger.getLogger = function getLogger(name) {
	        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
	          throw new TypeError("You must supply a name when creating a logger.");
	        }

	        var logger = _loggersByName[name];
	        if (!logger) {
	          logger = _loggersByName[name] = new Logger(
	            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
	        }
	        return logger;
	    };

	    // Grab the current global log variable in case of overwrite
	    var _log = (typeof window !== undefinedType) ? window.log : undefined;
	    defaultLogger.noConflict = function() {
	        if (typeof window !== undefinedType &&
	               window.log === defaultLogger) {
	            window.log = _log;
	        }

	        return defaultLogger;
	    };

	    defaultLogger.getLoggers = function getLoggers() {
	        return _loggersByName;
	    };

	    // ES6 default export, for compatibility
	    defaultLogger['default'] = defaultLogger;

	    return defaultLogger;
	})); 
} (loglevel));

const N=(e,t)=>s=>s(e,t),P=(e,t)=>s=>s(e,t,{append:!1}),o=typeof window=="object"?window:typeof global=="object"?global:typeof self=="object"?self:{};const c=new Map,C=[],v=new Set,h=new Map,B=/--[^;]+/g,G=/:/;(typeof o.A11yUi!="object"||o.A11yUi===null)&&(o.A11yUi={CSS_STYLE_CACHE:h,HYDRATED_HISTORY:C,STYLING_TASK_QUEUE:c});const K=(e,t)=>{let s=t.match(B);if(Array.isArray(s)){s=s.filter(r=>G.test(r));const a=document.createElement("style");a.innerHTML=`.${e} {${s.join(";")}}`,document.querySelector("head")?.appendChild(a);}v.add(e);},d=(e,t)=>typeof o.A11yUi=="object"&&o.A11yUi!==null&&typeof o.A11yUi.Themes=="object"&&o.A11yUi.Themes!==null&&typeof o.A11yUi.Themes[e]=="object"&&o.A11yUi.Themes[e]!==null&&typeof o.A11yUi.Themes[e][t]=="string"?o.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",q=e=>{for(const t of Array.from(e.childNodes))if(t instanceof HTMLStyleElement&&t.tagName==="STYLE")e.removeChild(t);else break},F=(e,t)=>{try{const s=[];t.forEach(a=>{const r=new CSSStyleSheet;r.replaceSync(a),s.push(r);}),e.adoptedStyleSheets=s;}catch{t.reverse().forEach(s=>{const a=document.createElement("style");a.innerHTML=s,e.insertBefore(a,e.firstChild);});}},Q=(e,t,s)=>{if(s!==!1){const a=[...Array.from(e.childNodes).filter(n=>n instanceof HTMLStyleElement&&n.tagName==="STYLE")];let r;try{r=[...Array.from(e.adoptedStyleSheets)];}catch{r=[];}s?.mode==="before"?(a.reverse().forEach(n=>t.unshift(n.innerHTML)),r.reverse().forEach(n=>t.unshift(Array.from(n.cssRules).map(i=>i.cssText).join("")))):s?.mode==="after"&&(a.forEach(n=>t.push(n.innerHTML)),r.forEach(n=>t.push(Array.from(n.cssRules).map(i=>i.cssText).join(""))));}},L=(e,t,s)=>{const a=t.name||"default";let r;try{if(e.shadowRoot===null)throw new Error("ShadowRoot is null");r=e.shadowRoot;}catch{r=e;}if(h.get(a)?.has(e.tagName))M(e,r,h.get(a)?.get(e.tagName),s);else {const n=d(a,"PROPERTIES"),i=d(a,"GLOBAL"),H=d(a,e.tagName);v.has(a)===!1&&K(a,i);const m=[n,i,H];Q(r,m,t.encroachCss),t.loglevel==="debug"&&console.log(e.tagName,m),t.cache===!0&&(h.has(a)===!1&&h.set(a,new Map),h.get(a)?.set(e.tagName,m)),M(e,r,m,s);}},M=(e,t,s,a)=>{q(t),F(t,s),e.style.display=a;},$=e=>{e.loglevel==="debug"&&C.push({timestamp:Date.now(),numberOfTasks:c.size});},W=e=>{c.delete(e);},O=(e,t)=>{W(e),$(t);},X=e=>{for(const t of e)if(c.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:s,themeDetails:a}=c.get(t.target);L(t.target,a,s),O(t.target,a);}};let f;try{f=new MutationObserver(X);}catch{f=null;}class te{constructor(t,s,a){this.createTheme=(r,n)=>P(r,n),this.createTranslation=(r,n)=>N(r,n),this.Prefix=t,this.Key=Object.getOwnPropertyNames(s),this.Tag=Object.getOwnPropertyNames(a);}}

var rgbaConvert = {exports: {}};

rgbaConvert.exports     = arr;
rgbaConvert.exports.arr = arr;
rgbaConvert.exports.obj = obj;
rgbaConvert.exports.css = css$3;
rgbaConvert.exports.hex = hex;
rgbaConvert.exports.num = num;

function arr(data) {
  var a = parse(data);
  if (a.length == 3) {
    return a.concat(255)
  } else {
    a[3] = Math.round(a[3]);
    return a
  }
}

function obj(data) {
  var a = parse(data);
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length == 3
      ? 255
      : Math.round(a[3])
  }
}

function css$3(data) {
  var a = parse(data);
  if (a.length == 3) a.push(255);

  return a[3] == 255
    ? 'rgb(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')'
    : a[3] == 0
      ? 'rgba(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', 0)'
      : 'rgba(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + String(a[3] / 255).substr(1) + ')'
}

function hex(data) {
  var a = parse(data);
  if (a.length == 3) a.push(255);
  var opaque = a[3] == 255;
  var r = num2hex(a[0]);
  var g = num2hex(a[1]);
  var b = num2hex(a[2]);
  var a = num2hex(Math.round(a[3]));
  var is = isshort(r, g, b, a);
  if (opaque) {
    return is
      ? '#' + r.charAt(0) + g.charAt(0) + b.charAt(0)
      : '#' + r + g + b
  }
  return is
    ? '#' + r.charAt(0) + g.charAt(0) + b.charAt(0) + a.charAt(0)
    : '#' + r + g + b + a
}

function num(data) {
  var a = parse(data);
  if (a.length == 3) a.push(255);
  else a[3] = Math.round(a[3]);
  return ((a[3] << 24) >>> 0 | a[0] << 16 | a[1] << 8 | a[2]) >>> 0
}

function parse(data) {
  if (typeof data == 'string') {
    data = data.toLowerCase();
    return name(data)
      || hex3(data)
      || hex6(data)
      || rgb(data)
      || rgba(data)
      || [0, 0, 0, 255]
  }
  return object(data)
    || array(data)
    || number(data)
    || [0, 0, 0, 255]
}

function num2hex(num) {
  var s = num.toString(16);
  return s.length == 1
    ? '0' + s
    : s
}

function isshort(r, g, b, a) {
  var h = ['ff', '00', '11', '22', '33', '44', '55', '66',
           '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee'];
  return h.indexOf(r) != -1
    && h.indexOf(g) != -1
    && h.indexOf(b) != -1
    && h.indexOf(a) != -1
}

function name(str) {
  if (str == 'red')     return [255, 0, 0]
  if (str == 'green')   return [0, 255, 0]
  if (str == 'blue')    return [0, 0, 255]
  if (str == 'black')   return [0, 0, 0]
  if (str == 'white')   return [255, 255, 255]
  if (str == 'cyan')    return [0, 255, 255]
  if (str == 'gray')    return [128, 128, 128]
  if (str == 'grey')    return [128, 128, 128]
  if (str == 'magenta') return [255, 0, 255]
  // ok, not the real css `pink` but my personal `magenta` alias
  // `pink` is simpler than `fuchsia`, whatever...
  if (str == 'pink')    return [255, 0, 255]
  if (str == 'yellow')  return [255, 255, 0]
}

function hex2num(str) {
  return str.length == 1
    ? parseInt(str + str, 16)
    : parseInt(str, 16)
}

function hex3(str) {
  var s = str.replace(/^#/,'');
  var l = s.length;
  if (l == 3 || l == 4) {
    var r = hex2num(s[0]);
    var g = hex2num(s[1]);
    var b = hex2num(s[2]);
    var a = l == 3
      ? 255
      : hex2num(s[3]);

    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) return

    return [r, g, b, a]
  }
}

function hex6(str) {
  var s = str.replace(/^#/,'');
  var l = s.length;
  if (l == 6 || l == 8) {
    var r = hex2num(s.slice(0, 2));
    var g = hex2num(s.slice(2, 4));
    var b = hex2num(s.slice(4, 6));
    var a = l == 6
      ? 255
      : hex2num(s.slice(6, 8));

    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) return

    return [r, g, b, a]
  }
}

function getnum(val, integer) {
  if (typeof val != 'number') return -1
  if (integer === true && Math.floor(val) !== val) return -1
  return val >= 0 && val <= 255
    ? val
    : -1
}

function object(obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]'
    && Object.getPrototypeOf(obj) === Object.getPrototypeOf({})) {
    var r = getnum(obj.r != undefined ? obj.r : obj.red   != undefined ? obj.red   : 0,   true);
    var g = getnum(obj.g != undefined ? obj.g : obj.green != undefined ? obj.green : 0,   true);
    var b = getnum(obj.b != undefined ? obj.b : obj.blue  != undefined ? obj.blue  : 0,   true);
    var a = getnum(obj.a != undefined ? obj.a : obj.alpha != undefined ? obj.alpha : 255, true);
    if (r != -1 && g != -1 && b != -1 && a != -1) {
      return [r, g, b, a]
    }
  }
}

function array(arr) {
  if (Array.isArray(arr) && (arr.length == 3 || arr.length == 4)) {
    var r = getnum(arr[0],   true);
    var g = getnum(arr[1],   true);
    var b = getnum(arr[2],   true);
    var a = getnum(arr[3] != undefined ? arr[3] : 255, true);
    if (r != -1 && g != -1 && b != -1 && a != -1) {
      return [r, g, b, a]
    }
  }
}

function number(num) {
  if (typeof num == 'number' && Math.floor(num) == num && num <= 4294967295 && num >= 0) {
    var a = num >> 24 & 255;
    var r = num >> 16 & 255;
    var g = num >> 8  & 255;
    var b = num & 255;
    return [r, g, b, a]
  }
}

function rgb(str) {
  if (str.substr(0, 4) == 'rgb(') {
    str = str.match(/^rgb\(([^)]+)\)/)[1];
    var t = str.split(/ *, */).map(Number);
    var r = getnum(t[0], true);
    var g = getnum(t[1], true);
    var b = getnum(t[2], true);
    if (r != -1 && g != -1 && b != -1) {
      return [r, g, b, 255]
    }
  }
}

function rgba(str) {
  if (str.substr(0, 5) == 'rgba(') {
    str = str.match(/^rgba\(([^)]+)\)/)[1];
    var t = str.split(/ *, */).map(Number);
    var r = getnum(t[0], true);
    var g = getnum(t[1], true);
    var b = getnum(t[2], true);
    var a = getnum(t[3] * 255);
    if (r != -1 && g != -1 && b != -1 && a != -1) {
      return [r, g, b, a]
    }
  }
}

var KeyEnum = /* @__PURE__ */ ((KeyEnum2) => {
  KeyEnum2[KeyEnum2["error"] = 0] = "error";
  KeyEnum2[KeyEnum2["warning"] = 1] = "warning";
  KeyEnum2[KeyEnum2["info"] = 2] = "info";
  KeyEnum2[KeyEnum2["success"] = 3] = "success";
  KeyEnum2[KeyEnum2["message"] = 4] = "message";
  KeyEnum2[KeyEnum2["close"] = 5] = "close";
  KeyEnum2[KeyEnum2["form-description"] = 6] = "form-description";
  KeyEnum2[KeyEnum2["of"] = 7] = "of";
  KeyEnum2[KeyEnum2["characters"] = 8] = "characters";
  KeyEnum2[KeyEnum2["new"] = 9] = "new";
  KeyEnum2[KeyEnum2["no-entries"] = 10] = "no-entries";
  KeyEnum2[KeyEnum2["change-order"] = 11] = "change-order";
  KeyEnum2[KeyEnum2["action-running"] = 12] = "action-running";
  KeyEnum2[KeyEnum2["action-done"] = 13] = "action-done";
  KeyEnum2[KeyEnum2["page-first"] = 14] = "page-first";
  KeyEnum2[KeyEnum2["page-back"] = 15] = "page-back";
  KeyEnum2[KeyEnum2["page-next"] = 16] = "page-next";
  KeyEnum2[KeyEnum2["page-last"] = 17] = "page-last";
  KeyEnum2[KeyEnum2["entries-per-site"] = 18] = "entries-per-site";
  KeyEnum2[KeyEnum2["page-current"] = 19] = "page-current";
  KeyEnum2[KeyEnum2["page-selected"] = 20] = "page-selected";
  KeyEnum2[KeyEnum2["page-per-site"] = 21] = "page-per-site";
  KeyEnum2[KeyEnum2["logo-description"] = 22] = "logo-description";
  KeyEnum2[KeyEnum2["open-link-in-tab"] = 23] = "open-link-in-tab";
  KeyEnum2[KeyEnum2["kolibri-logo"] = 24] = "kolibri-logo";
  return KeyEnum2;
})(KeyEnum || {});

var TagEnum = /* @__PURE__ */ ((TagEnum2) => {
  TagEnum2[TagEnum2["abbr"] = 0] = "abbr";
  TagEnum2[TagEnum2["accordion"] = 1] = "accordion";
  TagEnum2[TagEnum2["accordion-group"] = 2] = "accordion-group";
  TagEnum2[TagEnum2["alert"] = 3] = "alert";
  TagEnum2[TagEnum2["avatar"] = 4] = "avatar";
  TagEnum2[TagEnum2["badge"] = 5] = "badge";
  TagEnum2[TagEnum2["breadcrumb"] = 6] = "breadcrumb";
  TagEnum2[TagEnum2["button"] = 7] = "button";
  TagEnum2[TagEnum2["button-group"] = 8] = "button-group";
  TagEnum2[TagEnum2["button-link"] = 9] = "button-link";
  TagEnum2[TagEnum2["card"] = 10] = "card";
  TagEnum2[TagEnum2["details"] = 11] = "details";
  TagEnum2[TagEnum2["form"] = 12] = "form";
  TagEnum2[TagEnum2["heading"] = 13] = "heading";
  TagEnum2[TagEnum2["icon"] = 14] = "icon";
  TagEnum2[TagEnum2["image"] = 15] = "image";
  TagEnum2[TagEnum2["indented-text"] = 16] = "indented-text";
  TagEnum2[TagEnum2["input-checkbox"] = 17] = "input-checkbox";
  TagEnum2[TagEnum2["input-color"] = 18] = "input-color";
  TagEnum2[TagEnum2["input-date"] = 19] = "input-date";
  TagEnum2[TagEnum2["input-email"] = 20] = "input-email";
  TagEnum2[TagEnum2["input-file"] = 21] = "input-file";
  TagEnum2[TagEnum2["input-number"] = 22] = "input-number";
  TagEnum2[TagEnum2["input-password"] = 23] = "input-password";
  TagEnum2[TagEnum2["input-radio"] = 24] = "input-radio";
  TagEnum2[TagEnum2["input-range"] = 25] = "input-range";
  TagEnum2[TagEnum2["input-text"] = 26] = "input-text";
  TagEnum2[TagEnum2["link"] = 27] = "link";
  TagEnum2[TagEnum2["link-button"] = 28] = "link-button";
  TagEnum2[TagEnum2["link-group"] = 29] = "link-group";
  TagEnum2[TagEnum2["modal"] = 30] = "modal";
  TagEnum2[TagEnum2["nav"] = 31] = "nav";
  TagEnum2[TagEnum2["pagination"] = 32] = "pagination";
  TagEnum2[TagEnum2["progress"] = 33] = "progress";
  TagEnum2[TagEnum2["select"] = 34] = "select";
  TagEnum2[TagEnum2["separator"] = 35] = "separator";
  TagEnum2[TagEnum2["skip-nav"] = 36] = "skip-nav";
  TagEnum2[TagEnum2["spin"] = 37] = "spin";
  TagEnum2[TagEnum2["split-button"] = 38] = "split-button";
  TagEnum2[TagEnum2["symbol"] = 39] = "symbol";
  TagEnum2[TagEnum2["table"] = 40] = "table";
  TagEnum2[TagEnum2["tabs"] = 41] = "tabs";
  TagEnum2[TagEnum2["textarea"] = 42] = "textarea";
  TagEnum2[TagEnum2["toast-container"] = 43] = "toast-container";
  TagEnum2[TagEnum2["toolbar"] = 44] = "toolbar";
  TagEnum2[TagEnum2["tooltip"] = 45] = "tooltip";
  return TagEnum2;
})(TagEnum || {});

const _Log = class {
  static mapToArray(msg) {
    return Array.isArray(msg) ? msg : [msg];
  }
  static handleClassifier(classifier) {
    if (typeof classifier === "string" && classifier.length > 0) {
      return `${_Log.shield.label} | ${classifier}`;
    } else {
      return _Log.shield.label;
    }
  }
  static getShield(options) {
    return [_Log.handleClassifier(options?.classifier), `${_Log.shield.style};${options?.overwriteStyle || ""}`];
  }
  static debug(msg, options) {
    if (options?.forceLog === true) {
      console.debug(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
  static info(msg, options) {
    if (options?.forceLog === true) {
      console.info(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
  static trace(msg, options) {
    if (options?.forceLog === true) {
      console.trace(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
  static warn(msg, options) {
    if (options?.forceLog === true) {
      console.warn(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
  static error(msg, options) {
    if (options?.forceLog === true) {
      console.error(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
  static throw(msg, options) {
    if (options?.forceLog === true) {
      throw new Error(..._Log.getShield(options), ..._Log.mapToArray(msg));
    }
  }
};
let Log = _Log;
Log.shield = {
  label: "%cKoliBri",
  style: "color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"
};
const devCache = /* @__PURE__ */ new Set();
const devHint = (msg, options) => {
  if (devCache.has(msg) === false || !!options?.force) {
    devCache.add(msg);
    Log.debug([msg].concat(options?.details || []), {
      classifier: `\u{1F4BB} dev`,
      overwriteStyle: "; background-color: #f09"
    });
  }
};
devHint(
  `Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!`
);
new Event("StateChange");
let processEnv = "development";
try {
  processEnv = process.env.NODE_ENV;
} catch (e) {
  processEnv = "production";
}

const KoliBri = new te("kol", KeyEnum, TagEnum);

const css$2 = (input) => input.join(``);

const BMF = KoliBri.createTheme("bmf", {
  GLOBAL: css$2`
		/* Design Tokens */
		:host {
			--border-radius: 5px;
			--color-midnight: #004b76;
			--color-ocean: #0077b6;
			--color-sky: #99c9e2;
			--color-ice: #cce4f0;
			--color-crystal: #f0f7fb;
			--color-crimson: #780f2d;
			--color-red: #c0003c;
			--color-pink: #f2ccd8;
			--color-blossom: #fbf0f3;
			--color-olive: #004d38;
			--color-green: #005c45;
			--color-jungle: #00854a;
			--color-lime: #c1ca31;
			--color-mint: #ccdeda;
			--color-haze: #f0f5f4;
			--color-fire: #7a2e1f;
			--color-orange: #c44931;
			--color-coral: #f5dcd7;
			--color-peach: #fdf6f5;
			--color-bronze: #6a4a06;
			--color-yellow: #f9e03a;
			--color-ivory: #fdf3b0;
			--color-wine: #3f1d4a;
			--color-purple: #6b4479;
			--color-lavender: #dfd6de;
			--color-black: #202020;
			--color-metal: #454d4f;
			--color-grey: #576164;
			--color-granite: #bec5c9;
			--color-silver: #e5e8e9;
			--color-smoke: #f2f3f4;
			--color-cloud: #f6f7f7;
			--color-white: #ffffff;
			--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
			--font-size: 16px;
			--spacing: 0.25em;
		}
		:host {
			font-family: var(--font-family); /* font-size: var(--font-size); */
			background-color: transparent; /* Reset global background-color defined by components */
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus,
		summary:focus {
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		kol-heading-wc {
			font-weight: 700;
		}
		kol-tooltip-wc .tooltip-floating {
			border: 1px solid var(--color-metal);
			border-radius: var(--border-radius);
		}
		kol-tooltip-wc .tooltip-arrow {
			border: 1px solid var(--color-metal);
		}
		kol-tooltip-wc .tooltip-area {
			background-color: var(--color-white);
			color: var(--color-black);
		}
		kol-tooltip-wc .tooltip-content {
			border-radius: var(--border-radius);
			line-height: 1.5em;
			padding: 0.5rem 0.75rem;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
	`,
  "KOL-BUTTON": css$2`
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.success :is(a, button) > kol-span-wc,
		.success :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-green);
			border-color: var(--color-green);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.success :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** button with inline focus */
		:is(a, button).focus-inline:focus > kol-span-wc {
			outline-offset: -2px;
		}
		/** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
		/** CUSTOM_CLASS */
		:is(a, button).icon-only > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).icon-only > kol-span-wc > span > span {
			display: block;
		}
	`,
  "KOL-INPUT-TEXT": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
	`,
  "KOL-INPUT-PASSWORD": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-INPUT-NUMBER": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-INPUT-DATE": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-INPUT-EMAIL": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-INPUT-FILE": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		input {
			border: none;
		}
		input[type='file'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-TEXTAREA": css$2`
		kol-input {
			gap: 0.25em;
			display: grid;
			grid-template-areas: 'error error' 'label counter' 'input input' 'hint hint';
			grid-template-columns: 1fr 115px;
		}
		kol-input .error {
			order: 1;
			grid-area: error;
		}
		kol-input label {
			order: 2;
			grid-area: label;
		}
		kol-input .counter {
			order: 2;
			grid-area: counter;
			justify-self: end;
		}
		kol-input .input {
			order: 3;
			grid-area: input;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
			grid-area: hint;
		}
		textarea {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		textarea:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		select[multiple],
		textarea {
			overflow: auto;
		}
		textarea {
			display: block;
		}
		.input {
			position: relative;
		}
		.input textarea ~ span {
			position: absolute;
			top: -1.5rem;
			right: 0;
			color: var(--color-grey);
		}
	`,
  "KOL-ALERT": css$2`
		.msg,
		.msg {
			border-width: 0;
		}
		kol-alert-wc {
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: white;
		}
		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--kolibri-spacing);
		}
		.msg {
			background-color: transparent;
		}
		.msg > .heading {
			place-items: flex-start;
		}
		.msg > .heading > kol-icon {
			place-self: baseline;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--spacing);
		}
		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}
		.msg {
			align-items: start;
		}
		.default {
			border-color: var(--color-grey);
		}
		.default.msg .heading-icon {
			color: var(--color-grey);
		}
		.error {
			border-color: var(--color-red);
		}
		.error.msg .heading-icon {
			color: var(--color-red);
		}
		.info {
			border-color: var(--color-midnight);
		}
		.info.msg .heading-icon {
			color: var(--color-midnight);
		}
		.success {
			border-color: var(--color-green);
		}
		.success.msg .heading-icon {
			color: var(--color-green);
		}
		.warning {
			border-color: var(--color-orange);
		}
		.warning.msg .heading-icon {
			color: var(--color-orange);
		}
		.heading-icon {
			color: white;
		}
		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}
		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}
		.msg > .heading > .heading-icon::part(icon) {
			line-height: 1.375rem;
		}
		.msg > .heading > div > kol-heading-wc {
			line-height: 20px;
			padding-top: 0.125rem;
		}
		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-grey);
		}
		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-red);
		}
		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-midnight);
		}
		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-green);
		}
		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-orange);
		} /*.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}.msg > div > .close {display: flex;}*/
		.msg.default .close .icon {
			color: var(--color-grey);
		}
		.msg.error .close .icon {
			color: var(--color-red);
		}
		.msg.info .close .icon {
			color: var(--color-midnight);
		}
		.msg.success .close .icon {
			color: var(--color-green);
		}
		.msg.warning .close .icon {
			color: var(--color-orange);
		}
		.card {
			border-width: 2px;
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
		}
		.card > .heading {
			padding: 0.5rem 1rem;
		}
		.card.hasCloser > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}
		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}
		.card > .heading kol-heading-wc {
			width: 100%;
			color: white;
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}
		.card > .heading kol-button-wc button:focus {
			outline-color: var(--color-white);
			outline-offset: -3px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline 0.1s linear;
		}
		.card > .heading kol-button-wc button:hover {
			background-color: rgba(32, 32, 32, 0.2);
		}
		.card > .heading kol-button-wc button:active {
			background-color: rgba(32, 32, 32, 0.4);
		}
		.card > .heading kol-button-wc button:hover:focus {
			background-color: rgba(32, 32, 32, 0.1);
		}
		.card > .content {
			padding: 1rem;
			max-height: 9.5rem;
			overflow-y: auto;
		}
		.card.default > .heading {
			background-color: var(--color-grey);
			border-bottom: 2px solid var(--color-grey);
		}
		.card.error > .heading {
			background-color: var(--color-red);
			border-bottom: 2px solid var(--color-red);
		}
		.card.info > .heading {
			background-color: var(--color-midnight);
			border-bottom: 2px solid var(--color-midnight);
		}
		.card.success > .heading {
			background-color: var(--color-green);
			border-bottom: 2px solid var(--color-green);
		}
		.card.warning > .heading {
			background-color: var(--color-orange);
			border-bottom: 2px solid var(--color-orange);
		}
		:is(.error, .info, .success, .warning) .heading-icon::part(icon) {
			font-family: 'Font Awesome 6 Free' !important;
			font-weight: 900;
			height: 1.25rem;
			width: 1.25rem;
		}
		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem !important;
		}
		.error .heading-icon::part(icon)::before {
			content: '\\f06a';
		}
		.info .heading-icon::part(icon)::before {
			content: '\\f05a';
		}
		.success .heading-icon::part(icon)::before {
			content: '\\f058';
		}
		.warning .heading-icon::part(icon)::before {
			content: '\\f071';
		}
		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}
		.card.default .close {
			background-color: var(--color-grey);
		}
		.card.error .close {
			background-color: var(--color-red);
		}
		.card.info .close {
			background-color: var(--color-midnight);
		}
		.card.success .close {
			background-color: var(--color-green);
		}
		.card.warning .close {
			background-color: var(--color-orange);
		}
		.close > button {
			min-width: 44px;
			color: var(--color-white);
			min-height: 44px;
			display: grid;
			gap: 0.25em;
			line-height: 1.5rem;
			font-family: var(--font-family);
			font-weight: 700;
			cursor: pointer;
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			font-size: 1rem;
			align-items: center;
			padding: 8px 14px;
			justify-content: center;
			font-style: normal;
			text-align: center;
			width: inherit;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			background-color: rgba(0, 0, 0, 0);
			border-color: rgba(0, 0, 0, 0);
		}
		.close > button {
			padding: 8px;
		}
		.close > button kol-icon {
			display: flex;
			width: 1em;
			height: 1em;
			font-size: 1rem;
		}
		.close > button kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		.close > button kol-icon::part(icon)::before {
			content: '\\f00d';
		}
		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`,
  "KOL-HEADING": css$2`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			color: inherit;
			font-style: normal;
			margin: 0;
			padding: 0;
		}
		.headline-h1,
		.headline-h2,
		.headline-h3 {
			font-weight: 700;
		}
		.headline-h1 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h3 {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	`,
  "KOL-BADGE": css$2`
		:host {
			display: inline-block;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
			font-style: normal;
		}
		:host > span.smart-button {
			align-items: center;
		}
		:host > span kol-button-wc:hover > button {
			background-color: var(--color-ocean);
			color: var(--color-white);
		}
		:host > span kol-button-wc > button {
			color: inherit;
			font-size: 1rem;
			border-top-right-radius: 0.3125rem;
			border-bottom-right-radius: 0.3125rem;
			padding: 2px;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.75rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
	`,
  "KOL-BUTTON-GROUP": css$2`
		:host > kol-button-group-wc {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5em;
		}
	`,
  "KOL-INDENTED-TEXT": css$2`
		:host > div {
			background-color: var(--color-white);
			border-left: none;
			box-shadow: -2px 0px 0px var(--color-ocean);
			padding: 0 0.5em;
			width: 100%;
		}
	`,
  "KOL-LINK": css$2`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,
  "KOL-DETAILS": css$2`
		details > summary {
			border-radius: var(--border-radius);
		}
		details kol-indented-text {
			margin: 0.25em 0px 0px 0.65em;
		}
		kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			margin-right: 0.5rem;
		}
		details kol-icon::part(icon):before {
			content: '\\f054';
		}
	`,
  "KOL-SPIN": css$2`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`,
  "KOL-PROGRESS": css$2`
		.bar > div {
			flex-direction: column;
			gap: 0.5rem !important;
			width: 100px;
		}
		.bar > div text {
			color: var(--color-black);
			align-self: flex-end;
		}
		.bar svg {
			height: 1rem;
		}
		.bar .background {
			fill: var(--color-ice);
			stroke: var(--color-ice);
			stroke-width: 1px;
		}
		.bar .progress {
			fill: var(--color-midnight);
			stroke: var(--color-midnight);
		}
		.bar .border {
			display: none;
		}
		.cycle {
			overflow: visible;
		}
		.cycle .whitespace,
		.cycle .border {
			stroke: transparent;
		}
		.cycle .background {
			stroke: var(--color-ice);
			stroke-width: 1rem;
		}
		.cycle .progress {
			stroke: var(--color-midnight);
			stroke-width: 1rem;
		}
		.cycle text:first-of-type {
			color: var(--color-grey);
			line-height: 1.25rem;
			alignment-baseline: after-edge;
		}
		.cycle text:last-of-type {
			color: var(--color-black);
			font-size: 1.75rem;
			font-weight: 700;
			line-height: 1.5rem;
			alignment-baseline: central;
		}
	`,
  "KOL-SELECT": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		select {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input.icon-left kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(select, label, option) {
			opacity: 1;
		}
		kol-input.disabled :is(select, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			border-radius: 0.25em;
			cursor: pointer;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-ocean);
			color: white;
		}
	`,
  "KOL-INPUT-COLOR": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input[type='color'] {
			border: none;
			min-height: 40px !important;
		}
		input[type='color'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:not([type='color']):read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-ACCORDION": css$2`
		kol-span-wc > span {
			display: flex;
			place-items: baseline center;
			text-align: left;
		}
		:host > div > kol-heading-wc button {
			border-radius: var(--border-radius);
			min-height: 22px;
			padding: 12px 8px;
		}
		:host > div > kol-heading-wc button kol-span-wc {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 20px;
			gap: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-span-wc > span {
			gap: 0.5em;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			color: var(--color-midnight);
		}
		:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f078';
		}
		:host > div:not(.open) > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f054';
		}
		:host > div {
			width: 100%;
			height: 100%;
			display: grid;
		}
		:host > div div[class='header'],
		:host > div[class*='open'] div[class='content'] {
			margin: 0;
		}
		:host > div div[class='content'] {
			padding-left: 2.25em;
			padding-bottom: 12px;
			padding-right: 8px;
		}
		button:focus {
			outline: none;
		}
		:host > .accordion:focus-within {
			border-radius: var(--border-radius);
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
	`,
  "KOL-TABLE": css$2`
		:host * {
			hyphens: var(--kolibri-hyphens);
			font-family: var(--kolibri-font-family);
			line-height: var(--kolibri-line-height);
			word-break: break-word;
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}

		.table:has(caption:focus) {
			outline-color: var(--color-ocean);
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		caption {
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		tbody tr:last-child th,
		tr:last-child td {
			border-bottom-width: 0;
		}
		th {
			padding: 0.75em 0;
			font-weight: 700;
			color: var(--color-black);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		th,
		td {
			border-bottom: 1px solid var(--color-granite);
			height: 1.25rem;
		}
		tbody th {
			text-align: left;
		}
		tbody th,
		td {
			padding: 1em 0;
			vertical-align: top;
		}
		th kol-button,
		td kol-button {
			margin-top: -0.75rem;
			margin-bottom: -0.75rem;
		}
		.table-sort-button .button {
			font-weight: 700;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1em;
		}
		.pagination {
			align-items: center;
			justify-content: start;
			grid-template-columns: auto 1fr;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,
  "KOL-NAV": css$2`
		* {
			margin: 0;
			padding: 0;
		}
		nav {
			font-family: var(--font-family);
			font-size: var(--font-size);
			width: 100%;
		}
		ul {
			list-style: none;
		}
		.entry-item :is(a, .button) {
			align-items: center;
			background-color: var(--color-white);
			border-left-color: transparent;
			border-left-style: solid;
			border-left-width: 0.5rem;
			color: var(--color-midnight);
			display: flex;
			font-style: normal;
			letter-spacing: 0.175px;
			line-height: 1.5rem;
			min-height: 44px;
			min-width: 44px;
			padding: 0.75rem 0.5rem 0.75rem 0.25rem;
			place-items: center;
			text-decoration: none;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			width: 100%;
		}
		.vertical .active .entry-item :is(a, .button) {
			background-color: var(--color-ice);
			border-left-color: var(--color-midnight);
			color: var(--color-midnight);
			font-weight: 700;
		}
		.entry-item :is(a, .button):hover,
		.vertical .active .entry-item :is(a, .button):hover {
			background-color: var(--color-ocean);
			border-left-color: var(--color-ocean);
			color: var(--color-white);
			font-weight: 700;
		}
		.nav:not(.is-compact) .entry-item .icon {
			display: none;
		}
		/** Compact mode */
		.entry.hide-label .entry-item :is(a, .button) {
			justify-content: center;
		}
	`,
  "KOL-CARD": css$2`
		/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 0.25rem var(--color-grey);
			border-radius: 0.25rem;
		}
		:host kol-heading-wc {
			line-height: 1.75rem;
		}
		:host div.header {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		:host div.content {
			padding: 0.5rem 1rem 1rem;
			overflow: hidden;
		}
		:host div.footer {
			padding: 0.5rem 1rem;
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-ice);
		}
	`,
  "KOL-INPUT-CHECKBOX": css$2`
		/* INPUT */
		:host kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
			min-height: 44px;
		}
		:host kol-input.default:not(.hide-label) {
			grid-template-columns: 1.5rem auto;
			gap: 0.4em;
		}
		:host kol-input.switch:not(.hide-label) {
			grid-template-columns: 3.5rem auto;
			gap: 0.4em;
		}
		:host kol-input > div.input {
			display: inherit;
			min-height: 44px;
			order: 2;
		}
		:host kol-input > div.input input {
			margin: 0px;
		}
		:host kol-input:not(.disabled) :is(.input, label) {
			cursor: pointer;
		}
		:host kol-input.disabled :is(.input, label) {
			cursor: not-allowed;
		}
		:host kol-input > label {
			order: 3;
		}
		:host kol-input > kol-alert.error {
			order: 1;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		}
		:host kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		:host kol-input.error input:focus,
		kol-input.error select:focus,
		kol-input.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		:host kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		:host input {
			order: 1;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			line-height: 24px;
			font-size: 1rem;
		}
		:host input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		:host input:focus:hover {
			box-shadow: none;
		}
		:host input:active {
			box-shadow: none;
		}
		:host kol-alert {
			display: block;
			width: 100%;
		} /* CHECKBOX */
		:host kol-input label span {
			margin-top: 0.125rem;
		}
		:host .required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		:host kol-input input[type='checkbox'] {
			appearance: none;
			background-color: white;
			transition: 0.5s;
		}
		:host kol-input input[type='checkbox']:before {
			content: '';
		}
		:host kol-input input[type='checkbox']:checked {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .checkbox-container {
			justify-content: flex-start;
		}
		:host kol-input.default input[type='checkbox']:indeterminate {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .icon {
			color: var(--color-white);
			margin: -0.125rem 0 0 0.25rem; /* visually align */
		}
		:host kol-input.default input[type='checkbox'] {
			border-radius: var(--border-radius);
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.default {
			.icon::part(icon) {
				font-family: 'Font Awesome 6 Free';
				font-weight: 900;
			}

			&.checked .icon::part(icon)::before {
				content: '\\f00c';
			}

			&.indeterminate .icon::part(icon)::before {
				content: '\\f068';
			}
		}
		:host kol-input.switch input[type='checkbox'] {
			min-width: 3.5em;
			width: 3.5em;
			background-color: var(--color-grey);
			border-width: 0;
			height: 1.5em;
			border-radius: 1.25em;
			position: relative;
		}
		:host kol-input.switch input[type='checkbox']:before {
			transition: 0.5;
			width: 1.25em;
			height: 1.25em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 1.25em;
			background-color: white;
			position: absolute;
		}
		:host kol-input.switch input[type='checkbox']:checked {
			background-color: var(--color-midnight);
		}
		:host kol-input.switch input[type='checkbox']:checked:before {
			transform: translateX(2em);
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate {
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(1em);
		}
		.switch {
			& .checkbox-input-element {
				display: block;
			}
			& .icon {
				width: 1.25em;
				height: 1.25em;
				left: 2px;
				color: #000;
				&::part(icon) {
					font-family: 'Font Awesome 6 Free';
					font-weight: 900;
				}
				&::part(icon)::before {
					content: '\\2b';
				}
			}
			&.checked .icon {
				transform: translate(2em, -50%);
				&::part(icon)::before {
					content: '\\f00c';
				}
			}
			&.indeterminate .icon {
				transform: translate(1em, -50%);
				&::part(icon)::before {
					content: '\\f068';
				}
			}
		}
		:host .disabled {
			opacity: 0.33;
		}
		:host kol-input.button {
			row-gap: 0.5rem;
		}
		:host kol-input.button.checked > .input,
		:host kol-input.button.checked > label {
			background-color: var(--color-ice);
		}
		:host kol-input.button > label {
			background-color: var(--color-silver);
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			min-height: 32px;
			align-items: center;
			display: flex;
			padding-right: 12px;
			width: 100%;
		}
		:host kol-input.button > .input {
			background-color: var(--color-silver);
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
			min-height: 32px;
			min-width: 32px;
			place-content: center;
		}
		:host kol-input.button.hide-label > .input {
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
		}
		:host kol-input.button > .input > div {
			display: flex;
		}
		:host kol-input.button .icon {
			height: auto;
		}
		.button:focus-within {
			border-radius: var(--a11y-min-size);
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}
	`,
  "KOL-INPUT-RADIO": css$2`
		/* INPUT */
		kol-input {
			display: grid;
			gap: 0.4em;
		}
		label {
			cursor: pointer;
			display: grid;
			line-height: 20px;
			gap: 8px;
			width: 100%;
		}
		input {
			cursor: pointer;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px; /* padding: 10px 14px; */
			line-height: 24px;
			font-size: 16px;
		}
		input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		input:focus:hover {
			box-shadow: none;
		}
		input:hover {
			border-color: var(--color-midnight);
		}
		kol-alert {
			display: block;
			width: 100%;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* RADIO */
		fieldset {
			border: 0px;
			margin: 0px;
			padding: 0px;
			display: grid;
			gap: 0.25em;
		}
		.radio-input-wrapper {
			cursor: pointer;
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			min-height: 44px;
			margin: 0;
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			cursor: pointer;
			display: flex;
			padding-left: 0.25em;
			width: 100%;
		}
		.radio-input-wrapper label span {
			margin-top: 0.125em;
		}
		.radio-input-wrapper input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.radio-input-wrapper input[type='radio']:before {
			content: '';
			cursor: pointer;
			border-radius: 100%;
			display: block;
		}
		.radio-input-wrapper input[type='radio']:checked:before {
			background-color: var(--color-midnight);
		}
		.radio-input-wrapper input[type='radio']:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		kol-alert.error {
			order: 1;
		}
		fieldset legend {
			order: 2;
			display: contents;
		}
		fieldset kol-input {
			order: 3;
		}
		fieldset.error {
			border-left: 3px solid var(--color-red);
			color: var(--color-red);
			font-weight: 700;
			padding-left: 1em;
		}
		fieldset.error input:focus,
		fieldset.error select:focus,
		fieldset.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		fieldset.error kol-alert.error {
			margin-left: -0.25em;
			color: var(--color-red);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		fieldset.horizontal {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: 0.25em;
		}
		fieldset .input-slot {
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			padding-left: 0;
		}
	`,
  "KOL-TOAST-CONTAINER": css$2`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			margin-top: 1rem;
		}
	`,
  "KOL-TABS": css$2`
		button:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		:host kol-button-group-wc {
			display: inline-flex;
			gap: 2rem;
			flex-wrap: wrap;
		}
		button {
			box-sizing: border-box;
			background-color: transparent;
			border: 0;
			border-radius: 0.25rem;
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			min-height: 44px;
			min-width: 44px;
			color: var(--color-grey);
			padding: 0;
		}
		button:hover {
			color: var(--color-midnight);
		}
		button.primary,
		button.selected {
			/* border-bottom: 0.025rem solid var(--color-midnight); */
			color: var(--color-midnight);
		}
		button:not(.selected) kol-span-wc > span {
			border-bottom: 0.25em solid transparent;
		}
		button.selected kol-span-wc > span {
			border-bottom: 0.25em solid;
		}
		button kol-span-wc > span {
			gap: 0.5rem;
		}
		:host > div > div {
			padding: 0.25em 0;
		}
		.close-button {
			display: none;
			font-size: 25%;
			height: fit-content;
			width: 0;
		}
		.close-button button {
			width: 1rem;
			position: relative;
			height: 1rem;
			left: -4.25em;
			top: 0.25em;
		}
		div[role='tabpanel'] {
			height: 100%;
		}
		div.grid {
			height: 100%;
		}
		:host > .tabs-align-right {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-right kol-button-group-wc {
			display: grid;
			order: 2;
		}
		:host > .tabs-align-left {
			display: grid;
			grid-template-columns: auto 1fr;
		}
		:host > .tabs-align-left kol-button-group-wc {
			display: grid;
			order: 0;
		}
		:host > .tabs-align-bottom {
			display: grid;
			grid-template-rows: 1fr auto;
		}
		:host > .tabs-align-bottom kol-button-group-wc {
			order: 2;
		}
		:host > .tabs-align-bottom kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > .tabs-align-top {
			display: grid;
			grid-template-rows: auto 1fr;
		}
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-top kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			gap: inherit;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host kol-button-group-wc button {
			border: none;
		}
	`,
  "KOL-PAGINATION": css$2`
		.icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		.first .icon::part(icon)::before {
			content: '\\f100';
		}
		.previous .icon::part(icon)::before {
			content: '\\f104';
		}
		.next .icon::part(icon)::before {
			content: '\\f105';
		}
		.last .icon::part(icon)::before {
			content: '\\f101';
		}
		.button:focus {
			outline: none;
		}
		.button-inner {
			background-color: var(--color-white);
			border-radius: var(--a11y-min-size);
			border: 2px solid var(--color-midnight);
			color: var(--color-midnight);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.button:focus .button-inner {
			outline-offset: 2px;
			outline: 3px solid var(--color-ocean);
			transition: outline-offset 0.2s linear;
		}
		.button:is(:active, :hover):not(:disabled) .button-inner {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.button:active .button-inner {
			border-color: var(--color-white);
			outline: none;
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-ice);
			border-color: var(--color-ice);
			opacity: 1 !important;
			font-weight: 700;
		}
	`,
  "KOL-INPUT-RANGE": css$2`
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		.inputs-wrapper {
			gap: 1em;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 1em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input.icon-left > kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right > kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(.input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,
  "KOL-LINK-BUTTON": css$2`
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			border-color: var(--color-white);
			background-color: var(--color-white);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,
  "KOL-BUTTON-LINK": css$2`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
			font-size: inherit;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,
  "KOL-ABBR": css$2`
		abbr {
			border-bottom: dashed var(--color-black) 1px;
			text-decoration: none !important;
		}
	`,
  "KOL-BREADCRUMB": css$2`
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {
			font-size: 0.75rem;
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
			color: var(--color-grey);
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon)::before {
			content: '\\f054';
		}
		kol-link::part(icon) {
			font-size: 1.25rem;
		}
		ul li > :is(span, kol-link) {
			line-height: 1.25rem;
			height: 20px;
		}
		ul li:last-child > span {
			color: var(--color-grey);
		}
	`,
  "KOL-MODAL": css$2`
		:host .overlay .modal {
			max-height: calc(100% - 32px);
		}
	`,
  "KOL-ICON": css$2`
		:host {
			width: 1em;
			height: 1em;
		}
		:host > i {
			width: 1em;
			height: 1em;
		}
		@font-face {
			font-family: 'Material Icons';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons.woff2') format('woff2'),
				url('./material-icons.woff') format('woff');
		}
		.material-icons {
			font-family: 'Material Icons';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Outlined';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-outlined.woff2') format('woff2'),
				url('./material-icons-outlined.woff') format('woff');
		}
		.material-icons-outlined {
			font-family: 'Material Icons Outlined';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Round';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-round.woff2') format('woff2'),
				url('./material-icons-round.woff') format('woff');
		}
		.material-icons-round {
			font-family: 'Material Icons Round';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Sharp';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-sharp.woff2') format('woff2'),
				url('./material-icons-sharp.woff') format('woff');
		}
		.material-icons-sharp {
			font-family: 'Material Icons Sharp';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Icons Two Tone';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url('./material-icons-two-tone.woff2') format('woff2'),
				url('./material-icons-two-tone.woff') format('woff');
		}
		.material-icons-two-tone {
			font-family: 'Material Icons Two Tone';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Outlined';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-outlined.woff2') format('woff2');
		}
		.material-symbols-outlined {
			font-family: 'Material Symbols Outlined';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Rounded';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-rounded.woff2') format('woff2');
		}
		.material-symbols-rounded {
			font-family: 'Material Symbols Rounded';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		@font-face {
			font-family: 'Material Symbols Sharp';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-sharp.woff2') format('woff2');
		}
		.material-symbols-sharp {
			font-family: 'Material Symbols Sharp';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
		}
		[class*='material-icons'].home:after {
			content: 'home';
		}
		[class*='material-icons'].east:after {
			content: 'east';
		}
		[class*='material-symbols'].home:after {
			content: 'home';
		}
		[class*='material-symbols'].arrow_right_alt:after {
			content: 'arrow_right_alt';
		} /*! * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) * Copyright 2022 Fonticons, Inc. */
		.fa {
			font-family: var(--fa-style-family, 'Font Awesome 6 Free');
			font-weight: var(--fa-style, 900);
		}
		.fa,
		.fa-brands,
		.fa-duotone,
		.fa-light,
		.fa-regular,
		.fa-solid,
		.fa-thin,
		.fab,
		.fad,
		.fal,
		.far,
		.fas,
		.fat {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: var(--fa-display, inline-block);
			font-style: normal;
			font-variant: normal;
			line-height: 1;
			text-rendering: auto;
		}
		.fa-1x {
			font-size: 1em;
		}
		.fa-2x {
			font-size: 2em;
		}
		.fa-3x {
			font-size: 3em;
		}
		.fa-4x {
			font-size: 4em;
		}
		.fa-5x {
			font-size: 5em;
		}
		.fa-6x {
			font-size: 6em;
		}
		.fa-7x {
			font-size: 7em;
		}
		.fa-8x {
			font-size: 8em;
		}
		.fa-9x {
			font-size: 9em;
		}
		.fa-10x {
			font-size: 10em;
		}
		.fa-2xs {
			font-size: 0.625em;
			line-height: 0.1em;
			vertical-align: 0.225em;
		}
		.fa-xs {
			font-size: 0.75em;
			line-height: 0.08333em;
			vertical-align: 0.125em;
		}
		.fa-sm {
			font-size: 0.875em;
			line-height: 0.07143em;
			vertical-align: 0.05357em;
		}
		.fa-lg {
			font-size: 1.25em;
			line-height: 0.05em;
			vertical-align: -0.075em;
		}
		.fa-xl {
			font-size: 1.5em;
			line-height: 0.04167em;
			vertical-align: -0.125em;
		}
		.fa-2xl {
			font-size: 2em;
			line-height: 0.03125em;
			vertical-align: -0.1875em;
		}
		.fa-fw {
			text-align: center;
			width: 1.25em;
		}
		.fa-ul {
			list-style-type: none;
			margin-left: var(--fa-li-margin, 2.5em);
			padding-left: 0;
		}
		.fa-ul > li {
			position: relative;
		}
		.fa-li {
			left: calc(var(--fa-li-width, 2em) * -1);
			position: absolute;
			text-align: center;
			width: var(--fa-li-width, 2em);
			line-height: inherit;
		}
		.fa-border {
			border-radius: var(--fa-border-radius, 0.1em);
			border: var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);
			padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
		}
		.fa-pull-left {
			float: left;
			margin-right: var(--fa-pull-margin, 0.3em);
		}
		.fa-pull-right {
			float: right;
			margin-left: var(--fa-pull-margin, 0.3em);
		}
		.fa-beat {
			-webkit-animation-name: fa-beat;
			animation-name: fa-beat;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-bounce {
			-webkit-animation-name: fa-bounce;
			animation-name: fa-bounce;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
		}
		.fa-fade {
			-webkit-animation-name: fa-fade;
			animation-name: fa-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-beat-fade,
		.fa-fade {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
		}
		.fa-beat-fade {
			-webkit-animation-name: fa-beat-fade;
			animation-name: fa-beat-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-flip {
			-webkit-animation-name: fa-flip;
			animation-name: fa-flip;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-shake {
			-webkit-animation-name: fa-shake;
			animation-name: fa-shake;
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-shake,
		.fa-spin {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
		}
		.fa-spin {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-duration: var(--fa-animation-duration, 2s);
			animation-duration: var(--fa-animation-duration, 2s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-spin-reverse {
			--fa-animation-direction: reverse;
		}
		.fa-pulse,
		.fa-spin-pulse {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
			animation-timing-function: var(--fa-animation-timing, steps(8));
		}
		@media (prefers-reduced-motion: reduce) {
			.fa-beat,
			.fa-beat-fade,
			.fa-bounce,
			.fa-fade,
			.fa-flip,
			.fa-pulse,
			.fa-shake,
			.fa-spin,
			.fa-spin-pulse {
				-webkit-animation-delay: -1ms;
				animation-delay: -1ms;
				-webkit-animation-duration: 1ms;
				animation-duration: 1ms;
				-webkit-animation-iteration-count: 1;
				animation-iteration-count: 1;
				transition-delay: 0s;
				transition-duration: 0s;
			}
		}
		@-webkit-keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@-webkit-keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@-webkit-keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@-webkit-keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@-webkit-keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@-webkit-keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@-webkit-keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		@keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		.fa-rotate-90 {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.fa-rotate-180 {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		.fa-rotate-270 {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
		.fa-flip-horizontal {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}
		.fa-flip-vertical {
			-webkit-transform: scaleY(-1);
			transform: scaleY(-1);
		}
		.fa-flip-both,
		.fa-flip-horizontal.fa-flip-vertical {
			-webkit-transform: scale(-1);
			transform: scale(-1);
		}
		.fa-rotate-by {
			-webkit-transform: rotate(var(--fa-rotate-angle, none));
			transform: rotate(var(--fa-rotate-angle, none));
		}
		.fa-stack {
			display: inline-block;
			height: 2em;
			line-height: 2em;
			position: relative;
			vertical-align: middle;
			width: 2.5em;
		}
		.fa-stack-1x,
		.fa-stack-2x {
			left: 0;
			position: absolute;
			text-align: center;
			width: 100%;
			z-index: var(--fa-stack-z-index, auto);
		}
		.fa-stack-1x {
			line-height: inherit;
		}
		.fa-stack-2x {
			font-size: 2em;
		}
		.fa-inverse {
			color: var(--fa-inverse, #fff);
		}
		.fa-0:before {
			content: '\\30';
		}
		.fa-1:before {
			content: '\\31';
		}
		.fa-2:before {
			content: '\\32';
		}
		.fa-3:before {
			content: '\\33';
		}
		.fa-4:before {
			content: '\\34';
		}
		.fa-5:before {
			content: '\\35';
		}
		.fa-6:before {
			content: '\\36';
		}
		.fa-7:before {
			content: '\\37';
		}
		.fa-8:before {
			content: '\\38';
		}
		.fa-9:before {
			content: '\\39';
		}
		.fa-a:before {
			content: '\\41';
		}
		.fa-address-book:before,
		.fa-contact-book:before {
			content: '\\f2b9';
		}
		.fa-address-card:before,
		.fa-contact-card:before,
		.fa-vcard:before {
			content: '\\f2bb';
		}
		.fa-align-center:before {
			content: '\\f037';
		}
		.fa-align-justify:before {
			content: '\\f039';
		}
		.fa-align-left:before {
			content: '\\f036';
		}
		.fa-align-right:before {
			content: '\\f038';
		}
		.fa-anchor:before {
			content: '\\f13d';
		}
		.fa-anchor-circle-check:before {
			content: '\\e4aa';
		}
		.fa-anchor-circle-exclamation:before {
			content: '\\e4ab';
		}
		.fa-anchor-circle-xmark:before {
			content: '\\e4ac';
		}
		.fa-anchor-lock:before {
			content: '\\e4ad';
		}
		.fa-angle-down:before {
			content: '\\f107';
		}
		.fa-angle-left:before {
			content: '\\f104';
		}
		.fa-angle-right:before {
			content: '\\f105';
		}
		.fa-angle-up:before {
			content: '\\f106';
		}
		.fa-angle-double-down:before,
		.fa-angles-down:before {
			content: '\\f103';
		}
		.fa-angle-double-left:before,
		.fa-angles-left:before {
			content: '\\f100';
		}
		.fa-angle-double-right:before,
		.fa-angles-right:before {
			content: '\\f101';
		}
		.fa-angle-double-up:before,
		.fa-angles-up:before {
			content: '\\f102';
		}
		.fa-ankh:before {
			content: '\\f644';
		}
		.fa-apple-alt:before,
		.fa-apple-whole:before {
			content: '\\f5d1';
		}
		.fa-archway:before {
			content: '\\f557';
		}
		.fa-arrow-down:before {
			content: '\\f063';
		}
		.fa-arrow-down-1-9:before,
		.fa-sort-numeric-asc:before,
		.fa-sort-numeric-down:before {
			content: '\\f162';
		}
		.fa-arrow-down-9-1:before,
		.fa-sort-numeric-desc:before,
		.fa-sort-numeric-down-alt:before {
			content: '\\f886';
		}
		.fa-arrow-down-a-z:before,
		.fa-sort-alpha-asc:before,
		.fa-sort-alpha-down:before {
			content: '\\f15d';
		}
		.fa-arrow-down-long:before,
		.fa-long-arrow-down:before {
			content: '\\f175';
		}
		.fa-arrow-down-short-wide:before,
		.fa-sort-amount-desc:before,
		.fa-sort-amount-down-alt:before {
			content: '\\f884';
		}
		.fa-arrow-down-up-across-line:before {
			content: '\\e4af';
		}
		.fa-arrow-down-up-lock:before {
			content: '\\e4b0';
		}
		.fa-arrow-down-wide-short:before,
		.fa-sort-amount-asc:before,
		.fa-sort-amount-down:before {
			content: '\\f160';
		}
		.fa-arrow-down-z-a:before,
		.fa-sort-alpha-desc:before,
		.fa-sort-alpha-down-alt:before {
			content: '\\f881';
		}
		.fa-arrow-left:before {
			content: '\\f060';
		}
		.fa-arrow-left-long:before,
		.fa-long-arrow-left:before {
			content: '\\f177';
		}
		.fa-arrow-pointer:before,
		.fa-mouse-pointer:before {
			content: '\\f245';
		}
		.fa-arrow-right:before {
			content: '\\f061';
		}
		.fa-arrow-right-arrow-left:before,
		.fa-exchange:before {
			content: '\\f0ec';
		}
		.fa-arrow-right-from-bracket:before,
		.fa-sign-out:before {
			content: '\\f08b';
		}
		.fa-arrow-right-long:before,
		.fa-long-arrow-right:before {
			content: '\\f178';
		}
		.fa-arrow-right-to-bracket:before,
		.fa-sign-in:before {
			content: '\\f090';
		}
		.fa-arrow-right-to-city:before {
			content: '\\e4b3';
		}
		.fa-arrow-left-rotate:before,
		.fa-arrow-rotate-back:before,
		.fa-arrow-rotate-backward:before,
		.fa-arrow-rotate-left:before,
		.fa-undo:before {
			content: '\\f0e2';
		}
		.fa-arrow-right-rotate:before,
		.fa-arrow-rotate-forward:before,
		.fa-arrow-rotate-right:before,
		.fa-redo:before {
			content: '\\f01e';
		}
		.fa-arrow-trend-down:before {
			content: '\\e097';
		}
		.fa-arrow-trend-up:before {
			content: '\\e098';
		}
		.fa-arrow-turn-down:before,
		.fa-level-down:before {
			content: '\\f149';
		}
		.fa-arrow-turn-up:before,
		.fa-level-up:before {
			content: '\\f148';
		}
		.fa-arrow-up:before {
			content: '\\f062';
		}
		.fa-arrow-up-1-9:before,
		.fa-sort-numeric-up:before {
			content: '\\f163';
		}
		.fa-arrow-up-9-1:before,
		.fa-sort-numeric-up-alt:before {
			content: '\\f887';
		}
		.fa-arrow-up-a-z:before,
		.fa-sort-alpha-up:before {
			content: '\\f15e';
		}
		.fa-arrow-up-from-bracket:before {
			content: '\\e09a';
		}
		.fa-arrow-up-from-ground-water:before {
			content: '\\e4b5';
		}
		.fa-arrow-up-from-water-pump:before {
			content: '\\e4b6';
		}
		.fa-arrow-up-long:before,
		.fa-long-arrow-up:before {
			content: '\\f176';
		}
		.fa-arrow-up-right-dots:before {
			content: '\\e4b7';
		}
		.fa-arrow-up-right-from-square:before,
		.fa-external-link:before {
			content: '\\f08e';
		}
		.fa-arrow-up-short-wide:before,
		.fa-sort-amount-up-alt:before {
			content: '\\f885';
		}
		.fa-arrow-up-wide-short:before,
		.fa-sort-amount-up:before {
			content: '\\f161';
		}
		.fa-arrow-up-z-a:before,
		.fa-sort-alpha-up-alt:before {
			content: '\\f882';
		}
		.fa-arrows-down-to-line:before {
			content: '\\e4b8';
		}
		.fa-arrows-down-to-people:before {
			content: '\\e4b9';
		}
		.fa-arrows-h:before,
		.fa-arrows-left-right:before {
			content: '\\f07e';
		}
		.fa-arrows-left-right-to-line:before {
			content: '\\e4ba';
		}
		.fa-arrows-rotate:before,
		.fa-refresh:before,
		.fa-sync:before {
			content: '\\f021';
		}
		.fa-arrows-spin:before {
			content: '\\e4bb';
		}
		.fa-arrows-split-up-and-left:before {
			content: '\\e4bc';
		}
		.fa-arrows-to-circle:before {
			content: '\\e4bd';
		}
		.fa-arrows-to-dot:before {
			content: '\\e4be';
		}
		.fa-arrows-to-eye:before {
			content: '\\e4bf';
		}
		.fa-arrows-turn-right:before {
			content: '\\e4c0';
		}
		.fa-arrows-turn-to-dots:before {
			content: '\\e4c1';
		}
		.fa-arrows-up-down:before,
		.fa-arrows-v:before {
			content: '\\f07d';
		}
		.fa-arrows-up-down-left-right:before,
		.fa-arrows:before {
			content: '\\f047';
		}
		.fa-arrows-up-to-line:before {
			content: '\\e4c2';
		}
		.fa-asterisk:before {
			content: '\\2a';
		}
		.fa-at:before {
			content: '\\40';
		}
		.fa-atom:before {
			content: '\\f5d2';
		}
		.fa-audio-description:before {
			content: '\\f29e';
		}
		.fa-austral-sign:before {
			content: '\\e0a9';
		}
		.fa-award:before {
			content: '\\f559';
		}
		.fa-b:before {
			content: '\\42';
		}
		.fa-baby:before {
			content: '\\f77c';
		}
		.fa-baby-carriage:before,
		.fa-carriage-baby:before {
			content: '\\f77d';
		}
		.fa-backward:before {
			content: '\\f04a';
		}
		.fa-backward-fast:before,
		.fa-fast-backward:before {
			content: '\\f049';
		}
		.fa-backward-step:before,
		.fa-step-backward:before {
			content: '\\f048';
		}
		.fa-bacon:before {
			content: '\\f7e5';
		}
		.fa-bacteria:before {
			content: '\\e059';
		}
		.fa-bacterium:before {
			content: '\\e05a';
		}
		.fa-bag-shopping:before,
		.fa-shopping-bag:before {
			content: '\\f290';
		}
		.fa-bahai:before {
			content: '\\f666';
		}
		.fa-baht-sign:before {
			content: '\\e0ac';
		}
		.fa-ban:before,
		.fa-cancel:before {
			content: '\\f05e';
		}
		.fa-ban-smoking:before,
		.fa-smoking-ban:before {
			content: '\\f54d';
		}
		.fa-band-aid:before,
		.fa-bandage:before {
			content: '\\f462';
		}
		.fa-barcode:before {
			content: '\\f02a';
		}
		.fa-bars:before,
		.fa-navicon:before {
			content: '\\f0c9';
		}
		.fa-bars-progress:before,
		.fa-tasks-alt:before {
			content: '\\f828';
		}
		.fa-bars-staggered:before,
		.fa-reorder:before,
		.fa-stream:before {
			content: '\\f550';
		}
		.fa-baseball-ball:before,
		.fa-baseball:before {
			content: '\\f433';
		}
		.fa-baseball-bat-ball:before {
			content: '\\f432';
		}
		.fa-basket-shopping:before,
		.fa-shopping-basket:before {
			content: '\\f291';
		}
		.fa-basketball-ball:before,
		.fa-basketball:before {
			content: '\\f434';
		}
		.fa-bath:before,
		.fa-bathtub:before {
			content: '\\f2cd';
		}
		.fa-battery-0:before,
		.fa-battery-empty:before {
			content: '\\f244';
		}
		.fa-battery-5:before,
		.fa-battery-full:before,
		.fa-battery:before {
			content: '\\f240';
		}
		.fa-battery-3:before,
		.fa-battery-half:before {
			content: '\\f242';
		}
		.fa-battery-2:before,
		.fa-battery-quarter:before {
			content: '\\f243';
		}
		.fa-battery-4:before,
		.fa-battery-three-quarters:before {
			content: '\\f241';
		}
		.fa-bed:before {
			content: '\\f236';
		}
		.fa-bed-pulse:before,
		.fa-procedures:before {
			content: '\\f487';
		}
		.fa-beer-mug-empty:before,
		.fa-beer:before {
			content: '\\f0fc';
		}
		.fa-bell:before {
			content: '\\f0f3';
		}
		.fa-bell-concierge:before,
		.fa-concierge-bell:before {
			content: '\\f562';
		}
		.fa-bell-slash:before {
			content: '\\f1f6';
		}
		.fa-bezier-curve:before {
			content: '\\f55b';
		}
		.fa-bicycle:before {
			content: '\\f206';
		}
		.fa-binoculars:before {
			content: '\\f1e5';
		}
		.fa-biohazard:before {
			content: '\\f780';
		}
		.fa-bitcoin-sign:before {
			content: '\\e0b4';
		}
		.fa-blender:before {
			content: '\\f517';
		}
		.fa-blender-phone:before {
			content: '\\f6b6';
		}
		.fa-blog:before {
			content: '\\f781';
		}
		.fa-bold:before {
			content: '\\f032';
		}
		.fa-bolt:before,
		.fa-zap:before {
			content: '\\f0e7';
		}
		.fa-bolt-lightning:before {
			content: '\\e0b7';
		}
		.fa-bomb:before {
			content: '\\f1e2';
		}
		.fa-bone:before {
			content: '\\f5d7';
		}
		.fa-bong:before {
			content: '\\f55c';
		}
		.fa-book:before {
			content: '\\f02d';
		}
		.fa-atlas:before,
		.fa-book-atlas:before {
			content: '\\f558';
		}
		.fa-bible:before,
		.fa-book-bible:before {
			content: '\\f647';
		}
		.fa-book-bookmark:before {
			content: '\\e0bb';
		}
		.fa-book-journal-whills:before,
		.fa-journal-whills:before {
			content: '\\f66a';
		}
		.fa-book-medical:before {
			content: '\\f7e6';
		}
		.fa-book-open:before {
			content: '\\f518';
		}
		.fa-book-open-reader:before,
		.fa-book-reader:before {
			content: '\\f5da';
		}
		.fa-book-quran:before,
		.fa-quran:before {
			content: '\\f687';
		}
		.fa-book-dead:before,
		.fa-book-skull:before {
			content: '\\f6b7';
		}
		.fa-bookmark:before {
			content: '\\f02e';
		}
		.fa-border-all:before {
			content: '\\f84c';
		}
		.fa-border-none:before {
			content: '\\f850';
		}
		.fa-border-style:before,
		.fa-border-top-left:before {
			content: '\\f853';
		}
		.fa-bore-hole:before {
			content: '\\e4c3';
		}
		.fa-bottle-droplet:before {
			content: '\\e4c4';
		}
		.fa-bottle-water:before {
			content: '\\e4c5';
		}
		.fa-bowl-food:before {
			content: '\\e4c6';
		}
		.fa-bowl-rice:before {
			content: '\\e2eb';
		}
		.fa-bowling-ball:before {
			content: '\\f436';
		}
		.fa-box:before {
			content: '\\f466';
		}
		.fa-archive:before,
		.fa-box-archive:before {
			content: '\\f187';
		}
		.fa-box-open:before {
			content: '\\f49e';
		}
		.fa-box-tissue:before {
			content: '\\e05b';
		}
		.fa-boxes-packing:before {
			content: '\\e4c7';
		}
		.fa-boxes-alt:before,
		.fa-boxes-stacked:before,
		.fa-boxes:before {
			content: '\\f468';
		}
		.fa-braille:before {
			content: '\\f2a1';
		}
		.fa-brain:before {
			content: '\\f5dc';
		}
		.fa-brazilian-real-sign:before {
			content: '\\e46c';
		}
		.fa-bread-slice:before {
			content: '\\f7ec';
		}
		.fa-bridge:before {
			content: '\\e4c8';
		}
		.fa-bridge-circle-check:before {
			content: '\\e4c9';
		}
		.fa-bridge-circle-exclamation:before {
			content: '\\e4ca';
		}
		.fa-bridge-circle-xmark:before {
			content: '\\e4cb';
		}
		.fa-bridge-lock:before {
			content: '\\e4cc';
		}
		.fa-bridge-water:before {
			content: '\\e4ce';
		}
		.fa-briefcase:before {
			content: '\\f0b1';
		}
		.fa-briefcase-medical:before {
			content: '\\f469';
		}
		.fa-broom:before {
			content: '\\f51a';
		}
		.fa-broom-ball:before,
		.fa-quidditch-broom-ball:before,
		.fa-quidditch:before {
			content: '\\f458';
		}
		.fa-brush:before {
			content: '\\f55d';
		}
		.fa-bucket:before {
			content: '\\e4cf';
		}
		.fa-bug:before {
			content: '\\f188';
		}
		.fa-bug-slash:before {
			content: '\\e490';
		}
		.fa-bugs:before {
			content: '\\e4d0';
		}
		.fa-building:before {
			content: '\\f1ad';
		}
		.fa-building-circle-arrow-right:before {
			content: '\\e4d1';
		}
		.fa-building-circle-check:before {
			content: '\\e4d2';
		}
		.fa-building-circle-exclamation:before {
			content: '\\e4d3';
		}
		.fa-building-circle-xmark:before {
			content: '\\e4d4';
		}
		.fa-bank:before,
		.fa-building-columns:before,
		.fa-institution:before,
		.fa-museum:before,
		.fa-university:before {
			content: '\\f19c';
		}
		.fa-building-flag:before {
			content: '\\e4d5';
		}
		.fa-building-lock:before {
			content: '\\e4d6';
		}
		.fa-building-ngo:before {
			content: '\\e4d7';
		}
		.fa-building-shield:before {
			content: '\\e4d8';
		}
		.fa-building-un:before {
			content: '\\e4d9';
		}
		.fa-building-user:before {
			content: '\\e4da';
		}
		.fa-building-wheat:before {
			content: '\\e4db';
		}
		.fa-bullhorn:before {
			content: '\\f0a1';
		}
		.fa-bullseye:before {
			content: '\\f140';
		}
		.fa-burger:before,
		.fa-hamburger:before {
			content: '\\f805';
		}
		.fa-burst:before {
			content: '\\e4dc';
		}
		.fa-bus:before {
			content: '\\f207';
		}
		.fa-bus-alt:before,
		.fa-bus-simple:before {
			content: '\\f55e';
		}
		.fa-briefcase-clock:before,
		.fa-business-time:before {
			content: '\\f64a';
		}
		.fa-c:before {
			content: '\\43';
		}
		.fa-birthday-cake:before,
		.fa-cake-candles:before,
		.fa-cake:before {
			content: '\\f1fd';
		}
		.fa-calculator:before {
			content: '\\f1ec';
		}
		.fa-calendar:before {
			content: '\\f133';
		}
		.fa-calendar-check:before {
			content: '\\f274';
		}
		.fa-calendar-day:before {
			content: '\\f783';
		}
		.fa-calendar-alt:before,
		.fa-calendar-days:before {
			content: '\\f073';
		}
		.fa-calendar-minus:before {
			content: '\\f272';
		}
		.fa-calendar-plus:before {
			content: '\\f271';
		}
		.fa-calendar-week:before {
			content: '\\f784';
		}
		.fa-calendar-times:before,
		.fa-calendar-xmark:before {
			content: '\\f273';
		}
		.fa-camera-alt:before,
		.fa-camera:before {
			content: '\\f030';
		}
		.fa-camera-retro:before {
			content: '\\f083';
		}
		.fa-camera-rotate:before {
			content: '\\e0d8';
		}
		.fa-campground:before {
			content: '\\f6bb';
		}
		.fa-candy-cane:before {
			content: '\\f786';
		}
		.fa-cannabis:before {
			content: '\\f55f';
		}
		.fa-capsules:before {
			content: '\\f46b';
		}
		.fa-automobile:before,
		.fa-car:before {
			content: '\\f1b9';
		}
		.fa-battery-car:before,
		.fa-car-battery:before {
			content: '\\f5df';
		}
		.fa-car-burst:before,
		.fa-car-crash:before {
			content: '\\f5e1';
		}
		.fa-car-on:before {
			content: '\\e4dd';
		}
		.fa-car-alt:before,
		.fa-car-rear:before {
			content: '\\f5de';
		}
		.fa-car-side:before {
			content: '\\f5e4';
		}
		.fa-car-tunnel:before {
			content: '\\e4de';
		}
		.fa-caravan:before {
			content: '\\f8ff';
		}
		.fa-caret-down:before {
			content: '\\f0d7';
		}
		.fa-caret-left:before {
			content: '\\f0d9';
		}
		.fa-caret-right:before {
			content: '\\f0da';
		}
		.fa-caret-up:before {
			content: '\\f0d8';
		}
		.fa-carrot:before {
			content: '\\f787';
		}
		.fa-cart-arrow-down:before {
			content: '\\f218';
		}
		.fa-cart-flatbed:before,
		.fa-dolly-flatbed:before {
			content: '\\f474';
		}
		.fa-cart-flatbed-suitcase:before,
		.fa-luggage-cart:before {
			content: '\\f59d';
		}
		.fa-cart-plus:before {
			content: '\\f217';
		}
		.fa-cart-shopping:before,
		.fa-shopping-cart:before {
			content: '\\f07a';
		}
		.fa-cash-register:before {
			content: '\\f788';
		}
		.fa-cat:before {
			content: '\\f6be';
		}
		.fa-cedi-sign:before {
			content: '\\e0df';
		}
		.fa-cent-sign:before {
			content: '\\e3f5';
		}
		.fa-certificate:before {
			content: '\\f0a3';
		}
		.fa-chair:before {
			content: '\\f6c0';
		}
		.fa-blackboard:before,
		.fa-chalkboard:before {
			content: '\\f51b';
		}
		.fa-chalkboard-teacher:before,
		.fa-chalkboard-user:before {
			content: '\\f51c';
		}
		.fa-champagne-glasses:before,
		.fa-glass-cheers:before {
			content: '\\f79f';
		}
		.fa-charging-station:before {
			content: '\\f5e7';
		}
		.fa-area-chart:before,
		.fa-chart-area:before {
			content: '\\f1fe';
		}
		.fa-bar-chart:before,
		.fa-chart-bar:before {
			content: '\\f080';
		}
		.fa-chart-column:before {
			content: '\\e0e3';
		}
		.fa-chart-gantt:before {
			content: '\\e0e4';
		}
		.fa-chart-line:before,
		.fa-line-chart:before {
			content: '\\f201';
		}
		.fa-chart-pie:before,
		.fa-pie-chart:before {
			content: '\\f200';
		}
		.fa-chart-simple:before {
			content: '\\e473';
		}
		.fa-check:before {
			content: '\\f00c';
		}
		.fa-check-double:before {
			content: '\\f560';
		}
		.fa-check-to-slot:before,
		.fa-vote-yea:before {
			content: '\\f772';
		}
		.fa-cheese:before {
			content: '\\f7ef';
		}
		.fa-chess:before {
			content: '\\f439';
		}
		.fa-chess-bishop:before {
			content: '\\f43a';
		}
		.fa-chess-board:before {
			content: '\\f43c';
		}
		.fa-chess-king:before {
			content: '\\f43f';
		}
		.fa-chess-knight:before {
			content: '\\f441';
		}
		.fa-chess-pawn:before {
			content: '\\f443';
		}
		.fa-chess-queen:before {
			content: '\\f445';
		}
		.fa-chess-rook:before {
			content: '\\f447';
		}
		.fa-chevron-down:before {
			content: '\\f078';
		}
		.fa-chevron-left:before {
			content: '\\f053';
		}
		.fa-chevron-right:before {
			content: '\\f054';
		}
		.fa-chevron-up:before {
			content: '\\f077';
		}
		.fa-child:before {
			content: '\\f1ae';
		}
		.fa-child-dress:before {
			content: '\\e59c';
		}
		.fa-child-reaching:before {
			content: '\\e59d';
		}
		.fa-child-rifle:before {
			content: '\\e4e0';
		}
		.fa-children:before {
			content: '\\e4e1';
		}
		.fa-church:before {
			content: '\\f51d';
		}
		.fa-circle:before {
			content: '\\f111';
		}
		.fa-arrow-circle-down:before,
		.fa-circle-arrow-down:before {
			content: '\\f0ab';
		}
		.fa-arrow-circle-left:before,
		.fa-circle-arrow-left:before {
			content: '\\f0a8';
		}
		.fa-arrow-circle-right:before,
		.fa-circle-arrow-right:before {
			content: '\\f0a9';
		}
		.fa-arrow-circle-up:before,
		.fa-circle-arrow-up:before {
			content: '\\f0aa';
		}
		.fa-check-circle:before,
		.fa-circle-check:before {
			content: '\\f058';
		}
		.fa-chevron-circle-down:before,
		.fa-circle-chevron-down:before {
			content: '\\f13a';
		}
		.fa-chevron-circle-left:before,
		.fa-circle-chevron-left:before {
			content: '\\f137';
		}
		.fa-chevron-circle-right:before,
		.fa-circle-chevron-right:before {
			content: '\\f138';
		}
		.fa-chevron-circle-up:before,
		.fa-circle-chevron-up:before {
			content: '\\f139';
		}
		.fa-circle-dollar-to-slot:before,
		.fa-donate:before {
			content: '\\f4b9';
		}
		.fa-circle-dot:before,
		.fa-dot-circle:before {
			content: '\\f192';
		}
		.fa-arrow-alt-circle-down:before,
		.fa-circle-down:before {
			content: '\\f358';
		}
		.fa-circle-exclamation:before,
		.fa-exclamation-circle:before {
			content: '\\f06a';
		}
		.fa-circle-h:before,
		.fa-hospital-symbol:before {
			content: '\\f47e';
		}
		.fa-adjust:before,
		.fa-circle-half-stroke:before {
			content: '\\f042';
		}
		.fa-circle-info:before,
		.fa-info-circle:before {
			content: '\\f05a';
		}
		.fa-arrow-alt-circle-left:before,
		.fa-circle-left:before {
			content: '\\f359';
		}
		.fa-circle-minus:before,
		.fa-minus-circle:before {
			content: '\\f056';
		}
		.fa-circle-nodes:before {
			content: '\\e4e2';
		}
		.fa-circle-notch:before {
			content: '\\f1ce';
		}
		.fa-circle-pause:before,
		.fa-pause-circle:before {
			content: '\\f28b';
		}
		.fa-circle-play:before,
		.fa-play-circle:before {
			content: '\\f144';
		}
		.fa-circle-plus:before,
		.fa-plus-circle:before {
			content: '\\f055';
		}
		.fa-circle-question:before,
		.fa-question-circle:before {
			content: '\\f059';
		}
		.fa-circle-radiation:before,
		.fa-radiation-alt:before {
			content: '\\f7ba';
		}
		.fa-arrow-alt-circle-right:before,
		.fa-circle-right:before {
			content: '\\f35a';
		}
		.fa-circle-stop:before,
		.fa-stop-circle:before {
			content: '\\f28d';
		}
		.fa-arrow-alt-circle-up:before,
		.fa-circle-up:before {
			content: '\\f35b';
		}
		.fa-circle-user:before,
		.fa-user-circle:before {
			content: '\\f2bd';
		}
		.fa-circle-xmark:before,
		.fa-times-circle:before,
		.fa-xmark-circle:before {
			content: '\\f057';
		}
		.fa-city:before {
			content: '\\f64f';
		}
		.fa-clapperboard:before {
			content: '\\e131';
		}
		.fa-clipboard:before {
			content: '\\f328';
		}
		.fa-clipboard-check:before {
			content: '\\f46c';
		}
		.fa-clipboard-list:before {
			content: '\\f46d';
		}
		.fa-clipboard-question:before {
			content: '\\e4e3';
		}
		.fa-clipboard-user:before {
			content: '\\f7f3';
		}
		.fa-clock-four:before,
		.fa-clock:before {
			content: '\\f017';
		}
		.fa-clock-rotate-left:before,
		.fa-history:before {
			content: '\\f1da';
		}
		.fa-clone:before {
			content: '\\f24d';
		}
		.fa-closed-captioning:before {
			content: '\\f20a';
		}
		.fa-cloud:before {
			content: '\\f0c2';
		}
		.fa-cloud-arrow-down:before,
		.fa-cloud-download-alt:before,
		.fa-cloud-download:before {
			content: '\\f0ed';
		}
		.fa-cloud-arrow-up:before,
		.fa-cloud-upload-alt:before,
		.fa-cloud-upload:before {
			content: '\\f0ee';
		}
		.fa-cloud-bolt:before,
		.fa-thunderstorm:before {
			content: '\\f76c';
		}
		.fa-cloud-meatball:before {
			content: '\\f73b';
		}
		.fa-cloud-moon:before {
			content: '\\f6c3';
		}
		.fa-cloud-moon-rain:before {
			content: '\\f73c';
		}
		.fa-cloud-rain:before {
			content: '\\f73d';
		}
		.fa-cloud-showers-heavy:before {
			content: '\\f740';
		}
		.fa-cloud-showers-water:before {
			content: '\\e4e4';
		}
		.fa-cloud-sun:before {
			content: '\\f6c4';
		}
		.fa-cloud-sun-rain:before {
			content: '\\f743';
		}
		.fa-clover:before {
			content: '\\e139';
		}
		.fa-code:before {
			content: '\\f121';
		}
		.fa-code-branch:before {
			content: '\\f126';
		}
		.fa-code-commit:before {
			content: '\\f386';
		}
		.fa-code-compare:before {
			content: '\\e13a';
		}
		.fa-code-fork:before {
			content: '\\e13b';
		}
		.fa-code-merge:before {
			content: '\\f387';
		}
		.fa-code-pull-request:before {
			content: '\\e13c';
		}
		.fa-coins:before {
			content: '\\f51e';
		}
		.fa-colon-sign:before {
			content: '\\e140';
		}
		.fa-comment:before {
			content: '\\f075';
		}
		.fa-comment-dollar:before {
			content: '\\f651';
		}
		.fa-comment-dots:before,
		.fa-commenting:before {
			content: '\\f4ad';
		}
		.fa-comment-medical:before {
			content: '\\f7f5';
		}
		.fa-comment-slash:before {
			content: '\\f4b3';
		}
		.fa-comment-sms:before,
		.fa-sms:before {
			content: '\\f7cd';
		}
		.fa-comments:before {
			content: '\\f086';
		}
		.fa-comments-dollar:before {
			content: '\\f653';
		}
		.fa-compact-disc:before {
			content: '\\f51f';
		}
		.fa-compass:before {
			content: '\\f14e';
		}
		.fa-compass-drafting:before,
		.fa-drafting-compass:before {
			content: '\\f568';
		}
		.fa-compress:before {
			content: '\\f066';
		}
		.fa-computer:before {
			content: '\\e4e5';
		}
		.fa-computer-mouse:before,
		.fa-mouse:before {
			content: '\\f8cc';
		}
		.fa-cookie:before {
			content: '\\f563';
		}
		.fa-cookie-bite:before {
			content: '\\f564';
		}
		.fa-copy:before {
			content: '\\f0c5';
		}
		.fa-copyright:before {
			content: '\\f1f9';
		}
		.fa-couch:before {
			content: '\\f4b8';
		}
		.fa-cow:before {
			content: '\\f6c8';
		}
		.fa-credit-card-alt:before,
		.fa-credit-card:before {
			content: '\\f09d';
		}
		.fa-crop:before {
			content: '\\f125';
		}
		.fa-crop-alt:before,
		.fa-crop-simple:before {
			content: '\\f565';
		}
		.fa-cross:before {
			content: '\\f654';
		}
		.fa-crosshairs:before {
			content: '\\f05b';
		}
		.fa-crow:before {
			content: '\\f520';
		}
		.fa-crown:before {
			content: '\\f521';
		}
		.fa-crutch:before {
			content: '\\f7f7';
		}
		.fa-cruzeiro-sign:before {
			content: '\\e152';
		}
		.fa-cube:before {
			content: '\\f1b2';
		}
		.fa-cubes:before {
			content: '\\f1b3';
		}
		.fa-cubes-stacked:before {
			content: '\\e4e6';
		}
		.fa-d:before {
			content: '\\44';
		}
		.fa-database:before {
			content: '\\f1c0';
		}
		.fa-backspace:before,
		.fa-delete-left:before {
			content: '\\f55a';
		}
		.fa-democrat:before {
			content: '\\f747';
		}
		.fa-desktop-alt:before,
		.fa-desktop:before {
			content: '\\f390';
		}
		.fa-dharmachakra:before {
			content: '\\f655';
		}
		.fa-diagram-next:before {
			content: '\\e476';
		}
		.fa-diagram-predecessor:before {
			content: '\\e477';
		}
		.fa-diagram-project:before,
		.fa-project-diagram:before {
			content: '\\f542';
		}
		.fa-diagram-successor:before {
			content: '\\e47a';
		}
		.fa-diamond:before {
			content: '\\f219';
		}
		.fa-diamond-turn-right:before,
		.fa-directions:before {
			content: '\\f5eb';
		}
		.fa-dice:before {
			content: '\\f522';
		}
		.fa-dice-d20:before {
			content: '\\f6cf';
		}
		.fa-dice-d6:before {
			content: '\\f6d1';
		}
		.fa-dice-five:before {
			content: '\\f523';
		}
		.fa-dice-four:before {
			content: '\\f524';
		}
		.fa-dice-one:before {
			content: '\\f525';
		}
		.fa-dice-six:before {
			content: '\\f526';
		}
		.fa-dice-three:before {
			content: '\\f527';
		}
		.fa-dice-two:before {
			content: '\\f528';
		}
		.fa-disease:before {
			content: '\\f7fa';
		}
		.fa-display:before {
			content: '\\e163';
		}
		.fa-divide:before {
			content: '\\f529';
		}
		.fa-dna:before {
			content: '\\f471';
		}
		.fa-dog:before {
			content: '\\f6d3';
		}
		.fa-dollar-sign:before,
		.fa-dollar:before,
		.fa-usd:before {
			content: '\\24';
		}
		.fa-dolly-box:before,
		.fa-dolly:before {
			content: '\\f472';
		}
		.fa-dong-sign:before {
			content: '\\e169';
		}
		.fa-door-closed:before {
			content: '\\f52a';
		}
		.fa-door-open:before {
			content: '\\f52b';
		}
		.fa-dove:before {
			content: '\\f4ba';
		}
		.fa-compress-alt:before,
		.fa-down-left-and-up-right-to-center:before {
			content: '\\f422';
		}
		.fa-down-long:before,
		.fa-long-arrow-alt-down:before {
			content: '\\f309';
		}
		.fa-download:before {
			content: '\\f019';
		}
		.fa-dragon:before {
			content: '\\f6d5';
		}
		.fa-draw-polygon:before {
			content: '\\f5ee';
		}
		.fa-droplet:before,
		.fa-tint:before {
			content: '\\f043';
		}
		.fa-droplet-slash:before,
		.fa-tint-slash:before {
			content: '\\f5c7';
		}
		.fa-drum:before {
			content: '\\f569';
		}
		.fa-drum-steelpan:before {
			content: '\\f56a';
		}
		.fa-drumstick-bite:before {
			content: '\\f6d7';
		}
		.fa-dumbbell:before {
			content: '\\f44b';
		}
		.fa-dumpster:before {
			content: '\\f793';
		}
		.fa-dumpster-fire:before {
			content: '\\f794';
		}
		.fa-dungeon:before {
			content: '\\f6d9';
		}
		.fa-e:before {
			content: '\\45';
		}
		.fa-deaf:before,
		.fa-deafness:before,
		.fa-ear-deaf:before,
		.fa-hard-of-hearing:before {
			content: '\\f2a4';
		}
		.fa-assistive-listening-systems:before,
		.fa-ear-listen:before {
			content: '\\f2a2';
		}
		.fa-earth-africa:before,
		.fa-globe-africa:before {
			content: '\\f57c';
		}
		.fa-earth-america:before,
		.fa-earth-americas:before,
		.fa-earth:before,
		.fa-globe-americas:before {
			content: '\\f57d';
		}
		.fa-earth-asia:before,
		.fa-globe-asia:before {
			content: '\\f57e';
		}
		.fa-earth-europe:before,
		.fa-globe-europe:before {
			content: '\\f7a2';
		}
		.fa-earth-oceania:before,
		.fa-globe-oceania:before {
			content: '\\e47b';
		}
		.fa-egg:before {
			content: '\\f7fb';
		}
		.fa-eject:before {
			content: '\\f052';
		}
		.fa-elevator:before {
			content: '\\e16d';
		}
		.fa-ellipsis-h:before,
		.fa-ellipsis:before {
			content: '\\f141';
		}
		.fa-ellipsis-v:before,
		.fa-ellipsis-vertical:before {
			content: '\\f142';
		}
		.fa-envelope:before {
			content: '\\f0e0';
		}
		.fa-envelope-circle-check:before {
			content: '\\e4e8';
		}
		.fa-envelope-open:before {
			content: '\\f2b6';
		}
		.fa-envelope-open-text:before {
			content: '\\f658';
		}
		.fa-envelopes-bulk:before,
		.fa-mail-bulk:before {
			content: '\\f674';
		}
		.fa-equals:before {
			content: '\\3d';
		}
		.fa-eraser:before {
			content: '\\f12d';
		}
		.fa-ethernet:before {
			content: '\\f796';
		}
		.fa-eur:before,
		.fa-euro-sign:before,
		.fa-euro:before {
			content: '\\f153';
		}
		.fa-exclamation:before {
			content: '\\21';
		}
		.fa-expand:before {
			content: '\\f065';
		}
		.fa-explosion:before {
			content: '\\e4e9';
		}
		.fa-eye:before {
			content: '\\f06e';
		}
		.fa-eye-dropper-empty:before,
		.fa-eye-dropper:before,
		.fa-eyedropper:before {
			content: '\\f1fb';
		}
		.fa-eye-low-vision:before,
		.fa-low-vision:before {
			content: '\\f2a8';
		}
		.fa-eye-slash:before {
			content: '\\f070';
		}
		.fa-f:before {
			content: '\\46';
		}
		.fa-angry:before,
		.fa-face-angry:before {
			content: '\\f556';
		}
		.fa-dizzy:before,
		.fa-face-dizzy:before {
			content: '\\f567';
		}
		.fa-face-flushed:before,
		.fa-flushed:before {
			content: '\\f579';
		}
		.fa-face-frown:before,
		.fa-frown:before {
			content: '\\f119';
		}
		.fa-face-frown-open:before,
		.fa-frown-open:before {
			content: '\\f57a';
		}
		.fa-face-grimace:before,
		.fa-grimace:before {
			content: '\\f57f';
		}
		.fa-face-grin:before,
		.fa-grin:before {
			content: '\\f580';
		}
		.fa-face-grin-beam:before,
		.fa-grin-beam:before {
			content: '\\f582';
		}
		.fa-face-grin-beam-sweat:before,
		.fa-grin-beam-sweat:before {
			content: '\\f583';
		}
		.fa-face-grin-hearts:before,
		.fa-grin-hearts:before {
			content: '\\f584';
		}
		.fa-face-grin-squint:before,
		.fa-grin-squint:before {
			content: '\\f585';
		}
		.fa-face-grin-squint-tears:before,
		.fa-grin-squint-tears:before {
			content: '\\f586';
		}
		.fa-face-grin-stars:before,
		.fa-grin-stars:before {
			content: '\\f587';
		}
		.fa-face-grin-tears:before,
		.fa-grin-tears:before {
			content: '\\f588';
		}
		.fa-face-grin-tongue:before,
		.fa-grin-tongue:before {
			content: '\\f589';
		}
		.fa-face-grin-tongue-squint:before,
		.fa-grin-tongue-squint:before {
			content: '\\f58a';
		}
		.fa-face-grin-tongue-wink:before,
		.fa-grin-tongue-wink:before {
			content: '\\f58b';
		}
		.fa-face-grin-wide:before,
		.fa-grin-alt:before {
			content: '\\f581';
		}
		.fa-face-grin-wink:before,
		.fa-grin-wink:before {
			content: '\\f58c';
		}
		.fa-face-kiss:before,
		.fa-kiss:before {
			content: '\\f596';
		}
		.fa-face-kiss-beam:before,
		.fa-kiss-beam:before {
			content: '\\f597';
		}
		.fa-face-kiss-wink-heart:before,
		.fa-kiss-wink-heart:before {
			content: '\\f598';
		}
		.fa-face-laugh:before,
		.fa-laugh:before {
			content: '\\f599';
		}
		.fa-face-laugh-beam:before,
		.fa-laugh-beam:before {
			content: '\\f59a';
		}
		.fa-face-laugh-squint:before,
		.fa-laugh-squint:before {
			content: '\\f59b';
		}
		.fa-face-laugh-wink:before,
		.fa-laugh-wink:before {
			content: '\\f59c';
		}
		.fa-face-meh:before,
		.fa-meh:before {
			content: '\\f11a';
		}
		.fa-face-meh-blank:before,
		.fa-meh-blank:before {
			content: '\\f5a4';
		}
		.fa-face-rolling-eyes:before,
		.fa-meh-rolling-eyes:before {
			content: '\\f5a5';
		}
		.fa-face-sad-cry:before,
		.fa-sad-cry:before {
			content: '\\f5b3';
		}
		.fa-face-sad-tear:before,
		.fa-sad-tear:before {
			content: '\\f5b4';
		}
		.fa-face-smile:before,
		.fa-smile:before {
			content: '\\f118';
		}
		.fa-face-smile-beam:before,
		.fa-smile-beam:before {
			content: '\\f5b8';
		}
		.fa-face-smile-wink:before,
		.fa-smile-wink:before {
			content: '\\f4da';
		}
		.fa-face-surprise:before,
		.fa-surprise:before {
			content: '\\f5c2';
		}
		.fa-face-tired:before,
		.fa-tired:before {
			content: '\\f5c8';
		}
		.fa-fan:before {
			content: '\\f863';
		}
		.fa-faucet:before {
			content: '\\e005';
		}
		.fa-faucet-drip:before {
			content: '\\e006';
		}
		.fa-fax:before {
			content: '\\f1ac';
		}
		.fa-feather:before {
			content: '\\f52d';
		}
		.fa-feather-alt:before,
		.fa-feather-pointed:before {
			content: '\\f56b';
		}
		.fa-ferry:before {
			content: '\\e4ea';
		}
		.fa-file:before {
			content: '\\f15b';
		}
		.fa-file-arrow-down:before,
		.fa-file-download:before {
			content: '\\f56d';
		}
		.fa-file-arrow-up:before,
		.fa-file-upload:before {
			content: '\\f574';
		}
		.fa-file-audio:before {
			content: '\\f1c7';
		}
		.fa-file-circle-check:before {
			content: '\\e493';
		}
		.fa-file-circle-exclamation:before {
			content: '\\e4eb';
		}
		.fa-file-circle-minus:before {
			content: '\\e4ed';
		}
		.fa-file-circle-plus:before {
			content: '\\e4ee';
		}
		.fa-file-circle-question:before {
			content: '\\e4ef';
		}
		.fa-file-circle-xmark:before {
			content: '\\e494';
		}
		.fa-file-code:before {
			content: '\\f1c9';
		}
		.fa-file-contract:before {
			content: '\\f56c';
		}
		.fa-file-csv:before {
			content: '\\f6dd';
		}
		.fa-file-excel:before {
			content: '\\f1c3';
		}
		.fa-arrow-right-from-file:before,
		.fa-file-export:before {
			content: '\\f56e';
		}
		.fa-file-image:before {
			content: '\\f1c5';
		}
		.fa-arrow-right-to-file:before,
		.fa-file-import:before {
			content: '\\f56f';
		}
		.fa-file-invoice:before {
			content: '\\f570';
		}
		.fa-file-invoice-dollar:before {
			content: '\\f571';
		}
		.fa-file-alt:before,
		.fa-file-lines:before,
		.fa-file-text:before {
			content: '\\f15c';
		}
		.fa-file-medical:before {
			content: '\\f477';
		}
		.fa-file-pdf:before {
			content: '\\f1c1';
		}
		.fa-file-edit:before,
		.fa-file-pen:before {
			content: '\\f31c';
		}
		.fa-file-powerpoint:before {
			content: '\\f1c4';
		}
		.fa-file-prescription:before {
			content: '\\f572';
		}
		.fa-file-shield:before {
			content: '\\e4f0';
		}
		.fa-file-signature:before {
			content: '\\f573';
		}
		.fa-file-video:before {
			content: '\\f1c8';
		}
		.fa-file-medical-alt:before,
		.fa-file-waveform:before {
			content: '\\f478';
		}
		.fa-file-word:before {
			content: '\\f1c2';
		}
		.fa-file-archive:before,
		.fa-file-zipper:before {
			content: '\\f1c6';
		}
		.fa-fill:before {
			content: '\\f575';
		}
		.fa-fill-drip:before {
			content: '\\f576';
		}
		.fa-film:before {
			content: '\\f008';
		}
		.fa-filter:before {
			content: '\\f0b0';
		}
		.fa-filter-circle-dollar:before,
		.fa-funnel-dollar:before {
			content: '\\f662';
		}
		.fa-filter-circle-xmark:before {
			content: '\\e17b';
		}
		.fa-fingerprint:before {
			content: '\\f577';
		}
		.fa-fire:before {
			content: '\\f06d';
		}
		.fa-fire-burner:before {
			content: '\\e4f1';
		}
		.fa-fire-extinguisher:before {
			content: '\\f134';
		}
		.fa-fire-alt:before,
		.fa-fire-flame-curved:before {
			content: '\\f7e4';
		}
		.fa-burn:before,
		.fa-fire-flame-simple:before {
			content: '\\f46a';
		}
		.fa-fish:before {
			content: '\\f578';
		}
		.fa-fish-fins:before {
			content: '\\e4f2';
		}
		.fa-flag:before {
			content: '\\f024';
		}
		.fa-flag-checkered:before {
			content: '\\f11e';
		}
		.fa-flag-usa:before {
			content: '\\f74d';
		}
		.fa-flask:before {
			content: '\\f0c3';
		}
		.fa-flask-vial:before {
			content: '\\e4f3';
		}
		.fa-floppy-disk:before,
		.fa-save:before {
			content: '\\f0c7';
		}
		.fa-florin-sign:before {
			content: '\\e184';
		}
		.fa-folder-blank:before,
		.fa-folder:before {
			content: '\\f07b';
		}
		.fa-folder-closed:before {
			content: '\\e185';
		}
		.fa-folder-minus:before {
			content: '\\f65d';
		}
		.fa-folder-open:before {
			content: '\\f07c';
		}
		.fa-folder-plus:before {
			content: '\\f65e';
		}
		.fa-folder-tree:before {
			content: '\\f802';
		}
		.fa-font:before {
			content: '\\f031';
		}
		.fa-football-ball:before,
		.fa-football:before {
			content: '\\f44e';
		}
		.fa-forward:before {
			content: '\\f04e';
		}
		.fa-fast-forward:before,
		.fa-forward-fast:before {
			content: '\\f050';
		}
		.fa-forward-step:before,
		.fa-step-forward:before {
			content: '\\f051';
		}
		.fa-franc-sign:before {
			content: '\\e18f';
		}
		.fa-frog:before {
			content: '\\f52e';
		}
		.fa-futbol-ball:before,
		.fa-futbol:before,
		.fa-soccer-ball:before {
			content: '\\f1e3';
		}
		.fa-g:before {
			content: '\\47';
		}
		.fa-gamepad:before {
			content: '\\f11b';
		}
		.fa-gas-pump:before {
			content: '\\f52f';
		}
		.fa-dashboard:before,
		.fa-gauge-med:before,
		.fa-gauge:before,
		.fa-tachometer-alt-average:before {
			content: '\\f624';
		}
		.fa-gauge-high:before,
		.fa-tachometer-alt-fast:before,
		.fa-tachometer-alt:before {
			content: '\\f625';
		}
		.fa-gauge-simple-med:before,
		.fa-gauge-simple:before,
		.fa-tachometer-average:before {
			content: '\\f629';
		}
		.fa-gauge-simple-high:before,
		.fa-tachometer-fast:before,
		.fa-tachometer:before {
			content: '\\f62a';
		}
		.fa-gavel:before,
		.fa-legal:before {
			content: '\\f0e3';
		}
		.fa-cog:before,
		.fa-gear:before {
			content: '\\f013';
		}
		.fa-cogs:before,
		.fa-gears:before {
			content: '\\f085';
		}
		.fa-gem:before {
			content: '\\f3a5';
		}
		.fa-genderless:before {
			content: '\\f22d';
		}
		.fa-ghost:before {
			content: '\\f6e2';
		}
		.fa-gift:before {
			content: '\\f06b';
		}
		.fa-gifts:before {
			content: '\\f79c';
		}
		.fa-glass-water:before {
			content: '\\e4f4';
		}
		.fa-glass-water-droplet:before {
			content: '\\e4f5';
		}
		.fa-glasses:before {
			content: '\\f530';
		}
		.fa-globe:before {
			content: '\\f0ac';
		}
		.fa-golf-ball-tee:before,
		.fa-golf-ball:before {
			content: '\\f450';
		}
		.fa-gopuram:before {
			content: '\\f664';
		}
		.fa-graduation-cap:before,
		.fa-mortar-board:before {
			content: '\\f19d';
		}
		.fa-greater-than:before {
			content: '\\3e';
		}
		.fa-greater-than-equal:before {
			content: '\\f532';
		}
		.fa-grip-horizontal:before,
		.fa-grip:before {
			content: '\\f58d';
		}
		.fa-grip-lines:before {
			content: '\\f7a4';
		}
		.fa-grip-lines-vertical:before {
			content: '\\f7a5';
		}
		.fa-grip-vertical:before {
			content: '\\f58e';
		}
		.fa-group-arrows-rotate:before {
			content: '\\e4f6';
		}
		.fa-guarani-sign:before {
			content: '\\e19a';
		}
		.fa-guitar:before {
			content: '\\f7a6';
		}
		.fa-gun:before {
			content: '\\e19b';
		}
		.fa-h:before {
			content: '\\48';
		}
		.fa-hammer:before {
			content: '\\f6e3';
		}
		.fa-hamsa:before {
			content: '\\f665';
		}
		.fa-hand-paper:before,
		.fa-hand:before {
			content: '\\f256';
		}
		.fa-hand-back-fist:before,
		.fa-hand-rock:before {
			content: '\\f255';
		}
		.fa-allergies:before,
		.fa-hand-dots:before {
			content: '\\f461';
		}
		.fa-fist-raised:before,
		.fa-hand-fist:before {
			content: '\\f6de';
		}
		.fa-hand-holding:before {
			content: '\\f4bd';
		}
		.fa-hand-holding-dollar:before,
		.fa-hand-holding-usd:before {
			content: '\\f4c0';
		}
		.fa-hand-holding-droplet:before,
		.fa-hand-holding-water:before {
			content: '\\f4c1';
		}
		.fa-hand-holding-hand:before {
			content: '\\e4f7';
		}
		.fa-hand-holding-heart:before {
			content: '\\f4be';
		}
		.fa-hand-holding-medical:before {
			content: '\\e05c';
		}
		.fa-hand-lizard:before {
			content: '\\f258';
		}
		.fa-hand-middle-finger:before {
			content: '\\f806';
		}
		.fa-hand-peace:before {
			content: '\\f25b';
		}
		.fa-hand-point-down:before {
			content: '\\f0a7';
		}
		.fa-hand-point-left:before {
			content: '\\f0a5';
		}
		.fa-hand-point-right:before {
			content: '\\f0a4';
		}
		.fa-hand-point-up:before {
			content: '\\f0a6';
		}
		.fa-hand-pointer:before {
			content: '\\f25a';
		}
		.fa-hand-scissors:before {
			content: '\\f257';
		}
		.fa-hand-sparkles:before {
			content: '\\e05d';
		}
		.fa-hand-spock:before {
			content: '\\f259';
		}
		.fa-handcuffs:before {
			content: '\\e4f8';
		}
		.fa-hands:before,
		.fa-sign-language:before,
		.fa-signing:before {
			content: '\\f2a7';
		}
		.fa-american-sign-language-interpreting:before,
		.fa-asl-interpreting:before,
		.fa-hands-american-sign-language-interpreting:before,
		.fa-hands-asl-interpreting:before {
			content: '\\f2a3';
		}
		.fa-hands-bound:before {
			content: '\\e4f9';
		}
		.fa-hands-bubbles:before,
		.fa-hands-wash:before {
			content: '\\e05e';
		}
		.fa-hands-clapping:before {
			content: '\\e1a8';
		}
		.fa-hands-holding:before {
			content: '\\f4c2';
		}
		.fa-hands-holding-child:before {
			content: '\\e4fa';
		}
		.fa-hands-holding-circle:before {
			content: '\\e4fb';
		}
		.fa-hands-praying:before,
		.fa-praying-hands:before {
			content: '\\f684';
		}
		.fa-handshake:before {
			content: '\\f2b5';
		}
		.fa-hands-helping:before,
		.fa-handshake-angle:before {
			content: '\\f4c4';
		}
		.fa-handshake-alt:before,
		.fa-handshake-simple:before {
			content: '\\f4c6';
		}
		.fa-handshake-alt-slash:before,
		.fa-handshake-simple-slash:before {
			content: '\\e05f';
		}
		.fa-handshake-slash:before {
			content: '\\e060';
		}
		.fa-hanukiah:before {
			content: '\\f6e6';
		}
		.fa-hard-drive:before,
		.fa-hdd:before {
			content: '\\f0a0';
		}
		.fa-hashtag:before {
			content: '\\23';
		}
		.fa-hat-cowboy:before {
			content: '\\f8c0';
		}
		.fa-hat-cowboy-side:before {
			content: '\\f8c1';
		}
		.fa-hat-wizard:before {
			content: '\\f6e8';
		}
		.fa-head-side-cough:before {
			content: '\\e061';
		}
		.fa-head-side-cough-slash:before {
			content: '\\e062';
		}
		.fa-head-side-mask:before {
			content: '\\e063';
		}
		.fa-head-side-virus:before {
			content: '\\e064';
		}
		.fa-header:before,
		.fa-heading:before {
			content: '\\f1dc';
		}
		.fa-headphones:before {
			content: '\\f025';
		}
		.fa-headphones-alt:before,
		.fa-headphones-simple:before {
			content: '\\f58f';
		}
		.fa-headset:before {
			content: '\\f590';
		}
		.fa-heart:before {
			content: '\\f004';
		}
		.fa-heart-circle-bolt:before {
			content: '\\e4fc';
		}
		.fa-heart-circle-check:before {
			content: '\\e4fd';
		}
		.fa-heart-circle-exclamation:before {
			content: '\\e4fe';
		}
		.fa-heart-circle-minus:before {
			content: '\\e4ff';
		}
		.fa-heart-circle-plus:before {
			content: '\\e500';
		}
		.fa-heart-circle-xmark:before {
			content: '\\e501';
		}
		.fa-heart-broken:before,
		.fa-heart-crack:before {
			content: '\\f7a9';
		}
		.fa-heart-pulse:before,
		.fa-heartbeat:before {
			content: '\\f21e';
		}
		.fa-helicopter:before {
			content: '\\f533';
		}
		.fa-helicopter-symbol:before {
			content: '\\e502';
		}
		.fa-hard-hat:before,
		.fa-hat-hard:before,
		.fa-helmet-safety:before {
			content: '\\f807';
		}
		.fa-helmet-un:before {
			content: '\\e503';
		}
		.fa-highlighter:before {
			content: '\\f591';
		}
		.fa-hill-avalanche:before {
			content: '\\e507';
		}
		.fa-hill-rockslide:before {
			content: '\\e508';
		}
		.fa-hippo:before {
			content: '\\f6ed';
		}
		.fa-hockey-puck:before {
			content: '\\f453';
		}
		.fa-holly-berry:before {
			content: '\\f7aa';
		}
		.fa-horse:before {
			content: '\\f6f0';
		}
		.fa-horse-head:before {
			content: '\\f7ab';
		}
		.fa-hospital-alt:before,
		.fa-hospital-wide:before,
		.fa-hospital:before {
			content: '\\f0f8';
		}
		.fa-hospital-user:before {
			content: '\\f80d';
		}
		.fa-hot-tub-person:before,
		.fa-hot-tub:before {
			content: '\\f593';
		}
		.fa-hotdog:before {
			content: '\\f80f';
		}
		.fa-hotel:before {
			content: '\\f594';
		}
		.fa-hourglass-2:before,
		.fa-hourglass-half:before,
		.fa-hourglass:before {
			content: '\\f254';
		}
		.fa-hourglass-empty:before {
			content: '\\f252';
		}
		.fa-hourglass-3:before,
		.fa-hourglass-end:before {
			content: '\\f253';
		}
		.fa-hourglass-1:before,
		.fa-hourglass-start:before {
			content: '\\f251';
		}
		.fa-home-alt:before,
		.fa-home-lg-alt:before,
		.fa-home:before,
		.fa-house:before {
			content: '\\f015';
		}
		.fa-home-lg:before,
		.fa-house-chimney:before {
			content: '\\e3af';
		}
		.fa-house-chimney-crack:before,
		.fa-house-damage:before {
			content: '\\f6f1';
		}
		.fa-clinic-medical:before,
		.fa-house-chimney-medical:before {
			content: '\\f7f2';
		}
		.fa-house-chimney-user:before {
			content: '\\e065';
		}
		.fa-house-chimney-window:before {
			content: '\\e00d';
		}
		.fa-house-circle-check:before {
			content: '\\e509';
		}
		.fa-house-circle-exclamation:before {
			content: '\\e50a';
		}
		.fa-house-circle-xmark:before {
			content: '\\e50b';
		}
		.fa-house-crack:before {
			content: '\\e3b1';
		}
		.fa-house-fire:before {
			content: '\\e50c';
		}
		.fa-house-flag:before {
			content: '\\e50d';
		}
		.fa-house-flood-water:before {
			content: '\\e50e';
		}
		.fa-house-flood-water-circle-arrow-right:before {
			content: '\\e50f';
		}
		.fa-house-laptop:before,
		.fa-laptop-house:before {
			content: '\\e066';
		}
		.fa-house-lock:before {
			content: '\\e510';
		}
		.fa-house-medical:before {
			content: '\\e3b2';
		}
		.fa-house-medical-circle-check:before {
			content: '\\e511';
		}
		.fa-house-medical-circle-exclamation:before {
			content: '\\e512';
		}
		.fa-house-medical-circle-xmark:before {
			content: '\\e513';
		}
		.fa-house-medical-flag:before {
			content: '\\e514';
		}
		.fa-house-signal:before {
			content: '\\e012';
		}
		.fa-house-tsunami:before {
			content: '\\e515';
		}
		.fa-home-user:before,
		.fa-house-user:before {
			content: '\\e1b0';
		}
		.fa-hryvnia-sign:before,
		.fa-hryvnia:before {
			content: '\\f6f2';
		}
		.fa-hurricane:before {
			content: '\\f751';
		}
		.fa-i:before {
			content: '\\49';
		}
		.fa-i-cursor:before {
			content: '\\f246';
		}
		.fa-ice-cream:before {
			content: '\\f810';
		}
		.fa-icicles:before {
			content: '\\f7ad';
		}
		.fa-heart-music-camera-bolt:before,
		.fa-icons:before {
			content: '\\f86d';
		}
		.fa-id-badge:before {
			content: '\\f2c1';
		}
		.fa-drivers-license:before,
		.fa-id-card:before {
			content: '\\f2c2';
		}
		.fa-id-card-alt:before,
		.fa-id-card-clip:before {
			content: '\\f47f';
		}
		.fa-igloo:before {
			content: '\\f7ae';
		}
		.fa-image:before {
			content: '\\f03e';
		}
		.fa-image-portrait:before,
		.fa-portrait:before {
			content: '\\f3e0';
		}
		.fa-images:before {
			content: '\\f302';
		}
		.fa-inbox:before {
			content: '\\f01c';
		}
		.fa-indent:before {
			content: '\\f03c';
		}
		.fa-indian-rupee-sign:before,
		.fa-indian-rupee:before,
		.fa-inr:before {
			content: '\\e1bc';
		}
		.fa-industry:before {
			content: '\\f275';
		}
		.fa-infinity:before {
			content: '\\f534';
		}
		.fa-info:before {
			content: '\\f129';
		}
		.fa-italic:before {
			content: '\\f033';
		}
		.fa-j:before {
			content: '\\4a';
		}
		.fa-jar:before {
			content: '\\e516';
		}
		.fa-jar-wheat:before {
			content: '\\e517';
		}
		.fa-jedi:before {
			content: '\\f669';
		}
		.fa-fighter-jet:before,
		.fa-jet-fighter:before {
			content: '\\f0fb';
		}
		.fa-jet-fighter-up:before {
			content: '\\e518';
		}
		.fa-joint:before {
			content: '\\f595';
		}
		.fa-jug-detergent:before {
			content: '\\e519';
		}
		.fa-k:before {
			content: '\\4b';
		}
		.fa-kaaba:before {
			content: '\\f66b';
		}
		.fa-key:before {
			content: '\\f084';
		}
		.fa-keyboard:before {
			content: '\\f11c';
		}
		.fa-khanda:before {
			content: '\\f66d';
		}
		.fa-kip-sign:before {
			content: '\\e1c4';
		}
		.fa-first-aid:before,
		.fa-kit-medical:before {
			content: '\\f479';
		}
		.fa-kitchen-set:before {
			content: '\\e51a';
		}
		.fa-kiwi-bird:before {
			content: '\\f535';
		}
		.fa-l:before {
			content: '\\4c';
		}
		.fa-land-mine-on:before {
			content: '\\e51b';
		}
		.fa-landmark:before {
			content: '\\f66f';
		}
		.fa-landmark-alt:before,
		.fa-landmark-dome:before {
			content: '\\f752';
		}
		.fa-landmark-flag:before {
			content: '\\e51c';
		}
		.fa-language:before {
			content: '\\f1ab';
		}
		.fa-laptop:before {
			content: '\\f109';
		}
		.fa-laptop-code:before {
			content: '\\f5fc';
		}
		.fa-laptop-file:before {
			content: '\\e51d';
		}
		.fa-laptop-medical:before {
			content: '\\f812';
		}
		.fa-lari-sign:before {
			content: '\\e1c8';
		}
		.fa-layer-group:before {
			content: '\\f5fd';
		}
		.fa-leaf:before {
			content: '\\f06c';
		}
		.fa-left-long:before,
		.fa-long-arrow-alt-left:before {
			content: '\\f30a';
		}
		.fa-arrows-alt-h:before,
		.fa-left-right:before {
			content: '\\f337';
		}
		.fa-lemon:before {
			content: '\\f094';
		}
		.fa-less-than:before {
			content: '\\3c';
		}
		.fa-less-than-equal:before {
			content: '\\f537';
		}
		.fa-life-ring:before {
			content: '\\f1cd';
		}
		.fa-lightbulb:before {
			content: '\\f0eb';
		}
		.fa-lines-leaning:before {
			content: '\\e51e';
		}
		.fa-chain:before,
		.fa-link:before {
			content: '\\f0c1';
		}
		.fa-chain-broken:before,
		.fa-chain-slash:before,
		.fa-link-slash:before,
		.fa-unlink:before {
			content: '\\f127';
		}
		.fa-lira-sign:before {
			content: '\\f195';
		}
		.fa-list-squares:before,
		.fa-list:before {
			content: '\\f03a';
		}
		.fa-list-check:before,
		.fa-tasks:before {
			content: '\\f0ae';
		}
		.fa-list-1-2:before,
		.fa-list-numeric:before,
		.fa-list-ol:before {
			content: '\\f0cb';
		}
		.fa-list-dots:before,
		.fa-list-ul:before {
			content: '\\f0ca';
		}
		.fa-litecoin-sign:before {
			content: '\\e1d3';
		}
		.fa-location-arrow:before {
			content: '\\f124';
		}
		.fa-location-crosshairs:before,
		.fa-location:before {
			content: '\\f601';
		}
		.fa-location-dot:before,
		.fa-map-marker-alt:before {
			content: '\\f3c5';
		}
		.fa-location-pin:before,
		.fa-map-marker:before {
			content: '\\f041';
		}
		.fa-location-pin-lock:before {
			content: '\\e51f';
		}
		.fa-lock:before {
			content: '\\f023';
		}
		.fa-lock-open:before {
			content: '\\f3c1';
		}
		.fa-locust:before {
			content: '\\e520';
		}
		.fa-lungs:before {
			content: '\\f604';
		}
		.fa-lungs-virus:before {
			content: '\\e067';
		}
		.fa-m:before {
			content: '\\4d';
		}
		.fa-magnet:before {
			content: '\\f076';
		}
		.fa-magnifying-glass:before,
		.fa-search:before {
			content: '\\f002';
		}
		.fa-magnifying-glass-arrow-right:before {
			content: '\\e521';
		}
		.fa-magnifying-glass-chart:before {
			content: '\\e522';
		}
		.fa-magnifying-glass-dollar:before,
		.fa-search-dollar:before {
			content: '\\f688';
		}
		.fa-magnifying-glass-location:before,
		.fa-search-location:before {
			content: '\\f689';
		}
		.fa-magnifying-glass-minus:before,
		.fa-search-minus:before {
			content: '\\f010';
		}
		.fa-magnifying-glass-plus:before,
		.fa-search-plus:before {
			content: '\\f00e';
		}
		.fa-manat-sign:before {
			content: '\\e1d5';
		}
		.fa-map:before {
			content: '\\f279';
		}
		.fa-map-location:before,
		.fa-map-marked:before {
			content: '\\f59f';
		}
		.fa-map-location-dot:before,
		.fa-map-marked-alt:before {
			content: '\\f5a0';
		}
		.fa-map-pin:before {
			content: '\\f276';
		}
		.fa-marker:before {
			content: '\\f5a1';
		}
		.fa-mars:before {
			content: '\\f222';
		}
		.fa-mars-and-venus:before {
			content: '\\f224';
		}
		.fa-mars-and-venus-burst:before {
			content: '\\e523';
		}
		.fa-mars-double:before {
			content: '\\f227';
		}
		.fa-mars-stroke:before {
			content: '\\f229';
		}
		.fa-mars-stroke-h:before,
		.fa-mars-stroke-right:before {
			content: '\\f22b';
		}
		.fa-mars-stroke-up:before,
		.fa-mars-stroke-v:before {
			content: '\\f22a';
		}
		.fa-glass-martini-alt:before,
		.fa-martini-glass:before {
			content: '\\f57b';
		}
		.fa-cocktail:before,
		.fa-martini-glass-citrus:before {
			content: '\\f561';
		}
		.fa-glass-martini:before,
		.fa-martini-glass-empty:before {
			content: '\\f000';
		}
		.fa-mask:before {
			content: '\\f6fa';
		}
		.fa-mask-face:before {
			content: '\\e1d7';
		}
		.fa-mask-ventilator:before {
			content: '\\e524';
		}
		.fa-masks-theater:before,
		.fa-theater-masks:before {
			content: '\\f630';
		}
		.fa-mattress-pillow:before {
			content: '\\e525';
		}
		.fa-expand-arrows-alt:before,
		.fa-maximize:before {
			content: '\\f31e';
		}
		.fa-medal:before {
			content: '\\f5a2';
		}
		.fa-memory:before {
			content: '\\f538';
		}
		.fa-menorah:before {
			content: '\\f676';
		}
		.fa-mercury:before {
			content: '\\f223';
		}
		.fa-comment-alt:before,
		.fa-message:before {
			content: '\\f27a';
		}
		.fa-meteor:before {
			content: '\\f753';
		}
		.fa-microchip:before {
			content: '\\f2db';
		}
		.fa-microphone:before {
			content: '\\f130';
		}
		.fa-microphone-alt:before,
		.fa-microphone-lines:before {
			content: '\\f3c9';
		}
		.fa-microphone-alt-slash:before,
		.fa-microphone-lines-slash:before {
			content: '\\f539';
		}
		.fa-microphone-slash:before {
			content: '\\f131';
		}
		.fa-microscope:before {
			content: '\\f610';
		}
		.fa-mill-sign:before {
			content: '\\e1ed';
		}
		.fa-compress-arrows-alt:before,
		.fa-minimize:before {
			content: '\\f78c';
		}
		.fa-minus:before,
		.fa-subtract:before {
			content: '\\f068';
		}
		.fa-mitten:before {
			content: '\\f7b5';
		}
		.fa-mobile-android:before,
		.fa-mobile-phone:before,
		.fa-mobile:before {
			content: '\\f3ce';
		}
		.fa-mobile-button:before {
			content: '\\f10b';
		}
		.fa-mobile-retro:before {
			content: '\\e527';
		}
		.fa-mobile-android-alt:before,
		.fa-mobile-screen:before {
			content: '\\f3cf';
		}
		.fa-mobile-alt:before,
		.fa-mobile-screen-button:before {
			content: '\\f3cd';
		}
		.fa-money-bill:before {
			content: '\\f0d6';
		}
		.fa-money-bill-1:before,
		.fa-money-bill-alt:before {
			content: '\\f3d1';
		}
		.fa-money-bill-1-wave:before,
		.fa-money-bill-wave-alt:before {
			content: '\\f53b';
		}
		.fa-money-bill-transfer:before {
			content: '\\e528';
		}
		.fa-money-bill-trend-up:before {
			content: '\\e529';
		}
		.fa-money-bill-wave:before {
			content: '\\f53a';
		}
		.fa-money-bill-wheat:before {
			content: '\\e52a';
		}
		.fa-money-bills:before {
			content: '\\e1f3';
		}
		.fa-money-check:before {
			content: '\\f53c';
		}
		.fa-money-check-alt:before,
		.fa-money-check-dollar:before {
			content: '\\f53d';
		}
		.fa-monument:before {
			content: '\\f5a6';
		}
		.fa-moon:before {
			content: '\\f186';
		}
		.fa-mortar-pestle:before {
			content: '\\f5a7';
		}
		.fa-mosque:before {
			content: '\\f678';
		}
		.fa-mosquito:before {
			content: '\\e52b';
		}
		.fa-mosquito-net:before {
			content: '\\e52c';
		}
		.fa-motorcycle:before {
			content: '\\f21c';
		}
		.fa-mound:before {
			content: '\\e52d';
		}
		.fa-mountain:before {
			content: '\\f6fc';
		}
		.fa-mountain-city:before {
			content: '\\e52e';
		}
		.fa-mountain-sun:before {
			content: '\\e52f';
		}
		.fa-mug-hot:before {
			content: '\\f7b6';
		}
		.fa-coffee:before,
		.fa-mug-saucer:before {
			content: '\\f0f4';
		}
		.fa-music:before {
			content: '\\f001';
		}
		.fa-n:before {
			content: '\\4e';
		}
		.fa-naira-sign:before {
			content: '\\e1f6';
		}
		.fa-network-wired:before {
			content: '\\f6ff';
		}
		.fa-neuter:before {
			content: '\\f22c';
		}
		.fa-newspaper:before {
			content: '\\f1ea';
		}
		.fa-not-equal:before {
			content: '\\f53e';
		}
		.fa-note-sticky:before,
		.fa-sticky-note:before {
			content: '\\f249';
		}
		.fa-notes-medical:before {
			content: '\\f481';
		}
		.fa-o:before {
			content: '\\4f';
		}
		.fa-object-group:before {
			content: '\\f247';
		}
		.fa-object-ungroup:before {
			content: '\\f248';
		}
		.fa-oil-can:before {
			content: '\\f613';
		}
		.fa-oil-well:before {
			content: '\\e532';
		}
		.fa-om:before {
			content: '\\f679';
		}
		.fa-otter:before {
			content: '\\f700';
		}
		.fa-dedent:before,
		.fa-outdent:before {
			content: '\\f03b';
		}
		.fa-p:before {
			content: '\\50';
		}
		.fa-pager:before {
			content: '\\f815';
		}
		.fa-paint-roller:before {
			content: '\\f5aa';
		}
		.fa-paint-brush:before,
		.fa-paintbrush:before {
			content: '\\f1fc';
		}
		.fa-palette:before {
			content: '\\f53f';
		}
		.fa-pallet:before {
			content: '\\f482';
		}
		.fa-panorama:before {
			content: '\\e209';
		}
		.fa-paper-plane:before {
			content: '\\f1d8';
		}
		.fa-paperclip:before {
			content: '\\f0c6';
		}
		.fa-parachute-box:before {
			content: '\\f4cd';
		}
		.fa-paragraph:before {
			content: '\\f1dd';
		}
		.fa-passport:before {
			content: '\\f5ab';
		}
		.fa-file-clipboard:before,
		.fa-paste:before {
			content: '\\f0ea';
		}
		.fa-pause:before {
			content: '\\f04c';
		}
		.fa-paw:before {
			content: '\\f1b0';
		}
		.fa-peace:before {
			content: '\\f67c';
		}
		.fa-pen:before {
			content: '\\f304';
		}
		.fa-pen-alt:before,
		.fa-pen-clip:before {
			content: '\\f305';
		}
		.fa-pen-fancy:before {
			content: '\\f5ac';
		}
		.fa-pen-nib:before {
			content: '\\f5ad';
		}
		.fa-pen-ruler:before,
		.fa-pencil-ruler:before {
			content: '\\f5ae';
		}
		.fa-edit:before,
		.fa-pen-to-square:before {
			content: '\\f044';
		}
		.fa-pencil-alt:before,
		.fa-pencil:before {
			content: '\\f303';
		}
		.fa-people-arrows-left-right:before,
		.fa-people-arrows:before {
			content: '\\e068';
		}
		.fa-people-carry-box:before,
		.fa-people-carry:before {
			content: '\\f4ce';
		}
		.fa-people-group:before {
			content: '\\e533';
		}
		.fa-people-line:before {
			content: '\\e534';
		}
		.fa-people-pulling:before {
			content: '\\e535';
		}
		.fa-people-robbery:before {
			content: '\\e536';
		}
		.fa-people-roof:before {
			content: '\\e537';
		}
		.fa-pepper-hot:before {
			content: '\\f816';
		}
		.fa-percent:before,
		.fa-percentage:before {
			content: '\\25';
		}
		.fa-male:before,
		.fa-person:before {
			content: '\\f183';
		}
		.fa-person-arrow-down-to-line:before {
			content: '\\e538';
		}
		.fa-person-arrow-up-from-line:before {
			content: '\\e539';
		}
		.fa-biking:before,
		.fa-person-biking:before {
			content: '\\f84a';
		}
		.fa-person-booth:before {
			content: '\\f756';
		}
		.fa-person-breastfeeding:before {
			content: '\\e53a';
		}
		.fa-person-burst:before {
			content: '\\e53b';
		}
		.fa-person-cane:before {
			content: '\\e53c';
		}
		.fa-person-chalkboard:before {
			content: '\\e53d';
		}
		.fa-person-circle-check:before {
			content: '\\e53e';
		}
		.fa-person-circle-exclamation:before {
			content: '\\e53f';
		}
		.fa-person-circle-minus:before {
			content: '\\e540';
		}
		.fa-person-circle-plus:before {
			content: '\\e541';
		}
		.fa-person-circle-question:before {
			content: '\\e542';
		}
		.fa-person-circle-xmark:before {
			content: '\\e543';
		}
		.fa-digging:before,
		.fa-person-digging:before {
			content: '\\f85e';
		}
		.fa-diagnoses:before,
		.fa-person-dots-from-line:before {
			content: '\\f470';
		}
		.fa-female:before,
		.fa-person-dress:before {
			content: '\\f182';
		}
		.fa-person-dress-burst:before {
			content: '\\e544';
		}
		.fa-person-drowning:before {
			content: '\\e545';
		}
		.fa-person-falling:before {
			content: '\\e546';
		}
		.fa-person-falling-burst:before {
			content: '\\e547';
		}
		.fa-person-half-dress:before {
			content: '\\e548';
		}
		.fa-person-harassing:before {
			content: '\\e549';
		}
		.fa-hiking:before,
		.fa-person-hiking:before {
			content: '\\f6ec';
		}
		.fa-person-military-pointing:before {
			content: '\\e54a';
		}
		.fa-person-military-rifle:before {
			content: '\\e54b';
		}
		.fa-person-military-to-person:before {
			content: '\\e54c';
		}
		.fa-person-praying:before,
		.fa-pray:before {
			content: '\\f683';
		}
		.fa-person-pregnant:before {
			content: '\\e31e';
		}
		.fa-person-rays:before {
			content: '\\e54d';
		}
		.fa-person-rifle:before {
			content: '\\e54e';
		}
		.fa-person-running:before,
		.fa-running:before {
			content: '\\f70c';
		}
		.fa-person-shelter:before {
			content: '\\e54f';
		}
		.fa-person-skating:before,
		.fa-skating:before {
			content: '\\f7c5';
		}
		.fa-person-skiing:before,
		.fa-skiing:before {
			content: '\\f7c9';
		}
		.fa-person-skiing-nordic:before,
		.fa-skiing-nordic:before {
			content: '\\f7ca';
		}
		.fa-person-snowboarding:before,
		.fa-snowboarding:before {
			content: '\\f7ce';
		}
		.fa-person-swimming:before,
		.fa-swimmer:before {
			content: '\\f5c4';
		}
		.fa-person-through-window:before {
			content: '\\e433';
		}
		.fa-person-walking:before,
		.fa-walking:before {
			content: '\\f554';
		}
		.fa-person-walking-arrow-loop-left:before {
			content: '\\e551';
		}
		.fa-person-walking-arrow-right:before {
			content: '\\e552';
		}
		.fa-person-walking-dashed-line-arrow-right:before {
			content: '\\e553';
		}
		.fa-person-walking-luggage:before {
			content: '\\e554';
		}
		.fa-blind:before,
		.fa-person-walking-with-cane:before {
			content: '\\f29d';
		}
		.fa-peseta-sign:before {
			content: '\\e221';
		}
		.fa-peso-sign:before {
			content: '\\e222';
		}
		.fa-phone:before {
			content: '\\f095';
		}
		.fa-phone-alt:before,
		.fa-phone-flip:before {
			content: '\\f879';
		}
		.fa-phone-slash:before {
			content: '\\f3dd';
		}
		.fa-phone-volume:before,
		.fa-volume-control-phone:before {
			content: '\\f2a0';
		}
		.fa-photo-film:before,
		.fa-photo-video:before {
			content: '\\f87c';
		}
		.fa-piggy-bank:before {
			content: '\\f4d3';
		}
		.fa-pills:before {
			content: '\\f484';
		}
		.fa-pizza-slice:before {
			content: '\\f818';
		}
		.fa-place-of-worship:before {
			content: '\\f67f';
		}
		.fa-plane:before {
			content: '\\f072';
		}
		.fa-plane-arrival:before {
			content: '\\f5af';
		}
		.fa-plane-circle-check:before {
			content: '\\e555';
		}
		.fa-plane-circle-exclamation:before {
			content: '\\e556';
		}
		.fa-plane-circle-xmark:before {
			content: '\\e557';
		}
		.fa-plane-departure:before {
			content: '\\f5b0';
		}
		.fa-plane-lock:before {
			content: '\\e558';
		}
		.fa-plane-slash:before {
			content: '\\e069';
		}
		.fa-plane-up:before {
			content: '\\e22d';
		}
		.fa-plant-wilt:before {
			content: '\\e43b';
		}
		.fa-plate-wheat:before {
			content: '\\e55a';
		}
		.fa-play:before {
			content: '\\f04b';
		}
		.fa-plug:before {
			content: '\\f1e6';
		}
		.fa-plug-circle-bolt:before {
			content: '\\e55b';
		}
		.fa-plug-circle-check:before {
			content: '\\e55c';
		}
		.fa-plug-circle-exclamation:before {
			content: '\\e55d';
		}
		.fa-plug-circle-minus:before {
			content: '\\e55e';
		}
		.fa-plug-circle-plus:before {
			content: '\\e55f';
		}
		.fa-plug-circle-xmark:before {
			content: '\\e560';
		}
		.fa-add:before,
		.fa-plus:before {
			content: '\\2b';
		}
		.fa-plus-minus:before {
			content: '\\e43c';
		}
		.fa-podcast:before {
			content: '\\f2ce';
		}
		.fa-poo:before {
			content: '\\f2fe';
		}
		.fa-poo-bolt:before,
		.fa-poo-storm:before {
			content: '\\f75a';
		}
		.fa-poop:before {
			content: '\\f619';
		}
		.fa-power-off:before {
			content: '\\f011';
		}
		.fa-prescription:before {
			content: '\\f5b1';
		}
		.fa-prescription-bottle:before {
			content: '\\f485';
		}
		.fa-prescription-bottle-alt:before,
		.fa-prescription-bottle-medical:before {
			content: '\\f486';
		}
		.fa-print:before {
			content: '\\f02f';
		}
		.fa-pump-medical:before {
			content: '\\e06a';
		}
		.fa-pump-soap:before {
			content: '\\e06b';
		}
		.fa-puzzle-piece:before {
			content: '\\f12e';
		}
		.fa-q:before {
			content: '\\51';
		}
		.fa-qrcode:before {
			content: '\\f029';
		}
		.fa-question:before {
			content: '\\3f';
		}
		.fa-quote-left-alt:before,
		.fa-quote-left:before {
			content: '\\f10d';
		}
		.fa-quote-right-alt:before,
		.fa-quote-right:before {
			content: '\\f10e';
		}
		.fa-r:before {
			content: '\\52';
		}
		.fa-radiation:before {
			content: '\\f7b9';
		}
		.fa-radio:before {
			content: '\\f8d7';
		}
		.fa-rainbow:before {
			content: '\\f75b';
		}
		.fa-ranking-star:before {
			content: '\\e561';
		}
		.fa-receipt:before {
			content: '\\f543';
		}
		.fa-record-vinyl:before {
			content: '\\f8d9';
		}
		.fa-ad:before,
		.fa-rectangle-ad:before {
			content: '\\f641';
		}
		.fa-list-alt:before,
		.fa-rectangle-list:before {
			content: '\\f022';
		}
		.fa-rectangle-times:before,
		.fa-rectangle-xmark:before,
		.fa-times-rectangle:before,
		.fa-window-close:before {
			content: '\\f410';
		}
		.fa-recycle:before {
			content: '\\f1b8';
		}
		.fa-registered:before {
			content: '\\f25d';
		}
		.fa-repeat:before {
			content: '\\f363';
		}
		.fa-mail-reply:before,
		.fa-reply:before {
			content: '\\f3e5';
		}
		.fa-mail-reply-all:before,
		.fa-reply-all:before {
			content: '\\f122';
		}
		.fa-republican:before {
			content: '\\f75e';
		}
		.fa-restroom:before {
			content: '\\f7bd';
		}
		.fa-retweet:before {
			content: '\\f079';
		}
		.fa-ribbon:before {
			content: '\\f4d6';
		}
		.fa-right-from-bracket:before,
		.fa-sign-out-alt:before {
			content: '\\f2f5';
		}
		.fa-exchange-alt:before,
		.fa-right-left:before {
			content: '\\f362';
		}
		.fa-long-arrow-alt-right:before,
		.fa-right-long:before {
			content: '\\f30b';
		}
		.fa-right-to-bracket:before,
		.fa-sign-in-alt:before {
			content: '\\f2f6';
		}
		.fa-ring:before {
			content: '\\f70b';
		}
		.fa-road:before {
			content: '\\f018';
		}
		.fa-road-barrier:before {
			content: '\\e562';
		}
		.fa-road-bridge:before {
			content: '\\e563';
		}
		.fa-road-circle-check:before {
			content: '\\e564';
		}
		.fa-road-circle-exclamation:before {
			content: '\\e565';
		}
		.fa-road-circle-xmark:before {
			content: '\\e566';
		}
		.fa-road-lock:before {
			content: '\\e567';
		}
		.fa-road-spikes:before {
			content: '\\e568';
		}
		.fa-robot:before {
			content: '\\f544';
		}
		.fa-rocket:before {
			content: '\\f135';
		}
		.fa-rotate:before,
		.fa-sync-alt:before {
			content: '\\f2f1';
		}
		.fa-rotate-back:before,
		.fa-rotate-backward:before,
		.fa-rotate-left:before,
		.fa-undo-alt:before {
			content: '\\f2ea';
		}
		.fa-redo-alt:before,
		.fa-rotate-forward:before,
		.fa-rotate-right:before {
			content: '\\f2f9';
		}
		.fa-route:before {
			content: '\\f4d7';
		}
		.fa-feed:before,
		.fa-rss:before {
			content: '\\f09e';
		}
		.fa-rouble:before,
		.fa-rub:before,
		.fa-ruble-sign:before,
		.fa-ruble:before {
			content: '\\f158';
		}
		.fa-rug:before {
			content: '\\e569';
		}
		.fa-ruler:before {
			content: '\\f545';
		}
		.fa-ruler-combined:before {
			content: '\\f546';
		}
		.fa-ruler-horizontal:before {
			content: '\\f547';
		}
		.fa-ruler-vertical:before {
			content: '\\f548';
		}
		.fa-rupee-sign:before,
		.fa-rupee:before {
			content: '\\f156';
		}
		.fa-rupiah-sign:before {
			content: '\\e23d';
		}
		.fa-s:before {
			content: '\\53';
		}
		.fa-sack-dollar:before {
			content: '\\f81d';
		}
		.fa-sack-xmark:before {
			content: '\\e56a';
		}
		.fa-sailboat:before {
			content: '\\e445';
		}
		.fa-satellite:before {
			content: '\\f7bf';
		}
		.fa-satellite-dish:before {
			content: '\\f7c0';
		}
		.fa-balance-scale:before,
		.fa-scale-balanced:before {
			content: '\\f24e';
		}
		.fa-balance-scale-left:before,
		.fa-scale-unbalanced:before {
			content: '\\f515';
		}
		.fa-balance-scale-right:before,
		.fa-scale-unbalanced-flip:before {
			content: '\\f516';
		}
		.fa-school:before {
			content: '\\f549';
		}
		.fa-school-circle-check:before {
			content: '\\e56b';
		}
		.fa-school-circle-exclamation:before {
			content: '\\e56c';
		}
		.fa-school-circle-xmark:before {
			content: '\\e56d';
		}
		.fa-school-flag:before {
			content: '\\e56e';
		}
		.fa-school-lock:before {
			content: '\\e56f';
		}
		.fa-cut:before,
		.fa-scissors:before {
			content: '\\f0c4';
		}
		.fa-screwdriver:before {
			content: '\\f54a';
		}
		.fa-screwdriver-wrench:before,
		.fa-tools:before {
			content: '\\f7d9';
		}
		.fa-scroll:before {
			content: '\\f70e';
		}
		.fa-scroll-torah:before,
		.fa-torah:before {
			content: '\\f6a0';
		}
		.fa-sd-card:before {
			content: '\\f7c2';
		}
		.fa-section:before {
			content: '\\e447';
		}
		.fa-seedling:before,
		.fa-sprout:before {
			content: '\\f4d8';
		}
		.fa-server:before {
			content: '\\f233';
		}
		.fa-shapes:before,
		.fa-triangle-circle-square:before {
			content: '\\f61f';
		}
		.fa-arrow-turn-right:before,
		.fa-mail-forward:before,
		.fa-share:before {
			content: '\\f064';
		}
		.fa-share-from-square:before,
		.fa-share-square:before {
			content: '\\f14d';
		}
		.fa-share-alt:before,
		.fa-share-nodes:before {
			content: '\\f1e0';
		}
		.fa-sheet-plastic:before {
			content: '\\e571';
		}
		.fa-ils:before,
		.fa-shekel-sign:before,
		.fa-shekel:before,
		.fa-sheqel-sign:before,
		.fa-sheqel:before {
			content: '\\f20b';
		}
		.fa-shield-blank:before,
		.fa-shield:before {
			content: '\\f132';
		}
		.fa-shield-cat:before {
			content: '\\e572';
		}
		.fa-shield-dog:before {
			content: '\\e573';
		}
		.fa-shield-alt:before,
		.fa-shield-halved:before {
			content: '\\f3ed';
		}
		.fa-shield-heart:before {
			content: '\\e574';
		}
		.fa-shield-virus:before {
			content: '\\e06c';
		}
		.fa-ship:before {
			content: '\\f21a';
		}
		.fa-shirt:before,
		.fa-t-shirt:before,
		.fa-tshirt:before {
			content: '\\f553';
		}
		.fa-shoe-prints:before {
			content: '\\f54b';
		}
		.fa-shop:before,
		.fa-store-alt:before {
			content: '\\f54f';
		}
		.fa-shop-lock:before {
			content: '\\e4a5';
		}
		.fa-shop-slash:before,
		.fa-store-alt-slash:before {
			content: '\\e070';
		}
		.fa-shower:before {
			content: '\\f2cc';
		}
		.fa-shrimp:before {
			content: '\\e448';
		}
		.fa-random:before,
		.fa-shuffle:before {
			content: '\\f074';
		}
		.fa-shuttle-space:before,
		.fa-space-shuttle:before {
			content: '\\f197';
		}
		.fa-sign-hanging:before,
		.fa-sign:before {
			content: '\\f4d9';
		}
		.fa-signal-5:before,
		.fa-signal-perfect:before,
		.fa-signal:before {
			content: '\\f012';
		}
		.fa-signature:before {
			content: '\\f5b7';
		}
		.fa-map-signs:before,
		.fa-signs-post:before {
			content: '\\f277';
		}
		.fa-sim-card:before {
			content: '\\f7c4';
		}
		.fa-sink:before {
			content: '\\e06d';
		}
		.fa-sitemap:before {
			content: '\\f0e8';
		}
		.fa-skull:before {
			content: '\\f54c';
		}
		.fa-skull-crossbones:before {
			content: '\\f714';
		}
		.fa-slash:before {
			content: '\\f715';
		}
		.fa-sleigh:before {
			content: '\\f7cc';
		}
		.fa-sliders-h:before,
		.fa-sliders:before {
			content: '\\f1de';
		}
		.fa-smog:before {
			content: '\\f75f';
		}
		.fa-smoking:before {
			content: '\\f48d';
		}
		.fa-snowflake:before {
			content: '\\f2dc';
		}
		.fa-snowman:before {
			content: '\\f7d0';
		}
		.fa-snowplow:before {
			content: '\\f7d2';
		}
		.fa-soap:before {
			content: '\\e06e';
		}
		.fa-socks:before {
			content: '\\f696';
		}
		.fa-solar-panel:before {
			content: '\\f5ba';
		}
		.fa-sort:before,
		.fa-unsorted:before {
			content: '\\f0dc';
		}
		.fa-sort-desc:before,
		.fa-sort-down:before {
			content: '\\f0dd';
		}
		.fa-sort-asc:before,
		.fa-sort-up:before {
			content: '\\f0de';
		}
		.fa-spa:before {
			content: '\\f5bb';
		}
		.fa-pastafarianism:before,
		.fa-spaghetti-monster-flying:before {
			content: '\\f67b';
		}
		.fa-spell-check:before {
			content: '\\f891';
		}
		.fa-spider:before {
			content: '\\f717';
		}
		.fa-spinner:before {
			content: '\\f110';
		}
		.fa-splotch:before {
			content: '\\f5bc';
		}
		.fa-spoon:before,
		.fa-utensil-spoon:before {
			content: '\\f2e5';
		}
		.fa-spray-can:before {
			content: '\\f5bd';
		}
		.fa-air-freshener:before,
		.fa-spray-can-sparkles:before {
			content: '\\f5d0';
		}
		.fa-square:before {
			content: '\\f0c8';
		}
		.fa-external-link-square:before,
		.fa-square-arrow-up-right:before {
			content: '\\f14c';
		}
		.fa-caret-square-down:before,
		.fa-square-caret-down:before {
			content: '\\f150';
		}
		.fa-caret-square-left:before,
		.fa-square-caret-left:before {
			content: '\\f191';
		}
		.fa-caret-square-right:before,
		.fa-square-caret-right:before {
			content: '\\f152';
		}
		.fa-caret-square-up:before,
		.fa-square-caret-up:before {
			content: '\\f151';
		}
		.fa-check-square:before,
		.fa-square-check:before {
			content: '\\f14a';
		}
		.fa-envelope-square:before,
		.fa-square-envelope:before {
			content: '\\f199';
		}
		.fa-square-full:before {
			content: '\\f45c';
		}
		.fa-h-square:before,
		.fa-square-h:before {
			content: '\\f0fd';
		}
		.fa-minus-square:before,
		.fa-square-minus:before {
			content: '\\f146';
		}
		.fa-square-nfi:before {
			content: '\\e576';
		}
		.fa-parking:before,
		.fa-square-parking:before {
			content: '\\f540';
		}
		.fa-pen-square:before,
		.fa-pencil-square:before,
		.fa-square-pen:before {
			content: '\\f14b';
		}
		.fa-square-person-confined:before {
			content: '\\e577';
		}
		.fa-phone-square:before,
		.fa-square-phone:before {
			content: '\\f098';
		}
		.fa-phone-square-alt:before,
		.fa-square-phone-flip:before {
			content: '\\f87b';
		}
		.fa-plus-square:before,
		.fa-square-plus:before {
			content: '\\f0fe';
		}
		.fa-poll-h:before,
		.fa-square-poll-horizontal:before {
			content: '\\f682';
		}
		.fa-poll:before,
		.fa-square-poll-vertical:before {
			content: '\\f681';
		}
		.fa-square-root-alt:before,
		.fa-square-root-variable:before {
			content: '\\f698';
		}
		.fa-rss-square:before,
		.fa-square-rss:before {
			content: '\\f143';
		}
		.fa-share-alt-square:before,
		.fa-square-share-nodes:before {
			content: '\\f1e1';
		}
		.fa-external-link-square-alt:before,
		.fa-square-up-right:before {
			content: '\\f360';
		}
		.fa-square-virus:before {
			content: '\\e578';
		}
		.fa-square-xmark:before,
		.fa-times-square:before,
		.fa-xmark-square:before {
			content: '\\f2d3';
		}
		.fa-rod-asclepius:before,
		.fa-rod-snake:before,
		.fa-staff-aesculapius:before,
		.fa-staff-snake:before {
			content: '\\e579';
		}
		.fa-stairs:before {
			content: '\\e289';
		}
		.fa-stamp:before {
			content: '\\f5bf';
		}
		.fa-star:before {
			content: '\\f005';
		}
		.fa-star-and-crescent:before {
			content: '\\f699';
		}
		.fa-star-half:before {
			content: '\\f089';
		}
		.fa-star-half-alt:before,
		.fa-star-half-stroke:before {
			content: '\\f5c0';
		}
		.fa-star-of-david:before {
			content: '\\f69a';
		}
		.fa-star-of-life:before {
			content: '\\f621';
		}
		.fa-gbp:before,
		.fa-pound-sign:before,
		.fa-sterling-sign:before {
			content: '\\f154';
		}
		.fa-stethoscope:before {
			content: '\\f0f1';
		}
		.fa-stop:before {
			content: '\\f04d';
		}
		.fa-stopwatch:before {
			content: '\\f2f2';
		}
		.fa-stopwatch-20:before {
			content: '\\e06f';
		}
		.fa-store:before {
			content: '\\f54e';
		}
		.fa-store-slash:before {
			content: '\\e071';
		}
		.fa-street-view:before {
			content: '\\f21d';
		}
		.fa-strikethrough:before {
			content: '\\f0cc';
		}
		.fa-stroopwafel:before {
			content: '\\f551';
		}
		.fa-subscript:before {
			content: '\\f12c';
		}
		.fa-suitcase:before {
			content: '\\f0f2';
		}
		.fa-medkit:before,
		.fa-suitcase-medical:before {
			content: '\\f0fa';
		}
		.fa-suitcase-rolling:before {
			content: '\\f5c1';
		}
		.fa-sun:before {
			content: '\\f185';
		}
		.fa-sun-plant-wilt:before {
			content: '\\e57a';
		}
		.fa-superscript:before {
			content: '\\f12b';
		}
		.fa-swatchbook:before {
			content: '\\f5c3';
		}
		.fa-synagogue:before {
			content: '\\f69b';
		}
		.fa-syringe:before {
			content: '\\f48e';
		}
		.fa-t:before {
			content: '\\54';
		}
		.fa-table:before {
			content: '\\f0ce';
		}
		.fa-table-cells:before,
		.fa-th:before {
			content: '\\f00a';
		}
		.fa-table-cells-large:before,
		.fa-th-large:before {
			content: '\\f009';
		}
		.fa-columns:before,
		.fa-table-columns:before {
			content: '\\f0db';
		}
		.fa-table-list:before,
		.fa-th-list:before {
			content: '\\f00b';
		}
		.fa-ping-pong-paddle-ball:before,
		.fa-table-tennis-paddle-ball:before,
		.fa-table-tennis:before {
			content: '\\f45d';
		}
		.fa-tablet-android:before,
		.fa-tablet:before {
			content: '\\f3fb';
		}
		.fa-tablet-button:before {
			content: '\\f10a';
		}
		.fa-tablet-alt:before,
		.fa-tablet-screen-button:before {
			content: '\\f3fa';
		}
		.fa-tablets:before {
			content: '\\f490';
		}
		.fa-digital-tachograph:before,
		.fa-tachograph-digital:before {
			content: '\\f566';
		}
		.fa-tag:before {
			content: '\\f02b';
		}
		.fa-tags:before {
			content: '\\f02c';
		}
		.fa-tape:before {
			content: '\\f4db';
		}
		.fa-tarp:before {
			content: '\\e57b';
		}
		.fa-tarp-droplet:before {
			content: '\\e57c';
		}
		.fa-cab:before,
		.fa-taxi:before {
			content: '\\f1ba';
		}
		.fa-teeth:before {
			content: '\\f62e';
		}
		.fa-teeth-open:before {
			content: '\\f62f';
		}
		.fa-temperature-arrow-down:before,
		.fa-temperature-down:before {
			content: '\\e03f';
		}
		.fa-temperature-arrow-up:before,
		.fa-temperature-up:before {
			content: '\\e040';
		}
		.fa-temperature-0:before,
		.fa-temperature-empty:before,
		.fa-thermometer-0:before,
		.fa-thermometer-empty:before {
			content: '\\f2cb';
		}
		.fa-temperature-4:before,
		.fa-temperature-full:before,
		.fa-thermometer-4:before,
		.fa-thermometer-full:before {
			content: '\\f2c7';
		}
		.fa-temperature-2:before,
		.fa-temperature-half:before,
		.fa-thermometer-2:before,
		.fa-thermometer-half:before {
			content: '\\f2c9';
		}
		.fa-temperature-high:before {
			content: '\\f769';
		}
		.fa-temperature-low:before {
			content: '\\f76b';
		}
		.fa-temperature-1:before,
		.fa-temperature-quarter:before,
		.fa-thermometer-1:before,
		.fa-thermometer-quarter:before {
			content: '\\f2ca';
		}
		.fa-temperature-3:before,
		.fa-temperature-three-quarters:before,
		.fa-thermometer-3:before,
		.fa-thermometer-three-quarters:before {
			content: '\\f2c8';
		}
		.fa-tenge-sign:before,
		.fa-tenge:before {
			content: '\\f7d7';
		}
		.fa-tent:before {
			content: '\\e57d';
		}
		.fa-tent-arrow-down-to-line:before {
			content: '\\e57e';
		}
		.fa-tent-arrow-left-right:before {
			content: '\\e57f';
		}
		.fa-tent-arrow-turn-left:before {
			content: '\\e580';
		}
		.fa-tent-arrows-down:before {
			content: '\\e581';
		}
		.fa-tents:before {
			content: '\\e582';
		}
		.fa-terminal:before {
			content: '\\f120';
		}
		.fa-text-height:before {
			content: '\\f034';
		}
		.fa-remove-format:before,
		.fa-text-slash:before {
			content: '\\f87d';
		}
		.fa-text-width:before {
			content: '\\f035';
		}
		.fa-thermometer:before {
			content: '\\f491';
		}
		.fa-thumbs-down:before {
			content: '\\f165';
		}
		.fa-thumbs-up:before {
			content: '\\f164';
		}
		.fa-thumb-tack:before,
		.fa-thumbtack:before {
			content: '\\f08d';
		}
		.fa-ticket:before {
			content: '\\f145';
		}
		.fa-ticket-alt:before,
		.fa-ticket-simple:before {
			content: '\\f3ff';
		}
		.fa-timeline:before {
			content: '\\e29c';
		}
		.fa-toggle-off:before {
			content: '\\f204';
		}
		.fa-toggle-on:before {
			content: '\\f205';
		}
		.fa-toilet:before {
			content: '\\f7d8';
		}
		.fa-toilet-paper:before {
			content: '\\f71e';
		}
		.fa-toilet-paper-slash:before {
			content: '\\e072';
		}
		.fa-toilet-portable:before {
			content: '\\e583';
		}
		.fa-toilets-portable:before {
			content: '\\e584';
		}
		.fa-toolbox:before {
			content: '\\f552';
		}
		.fa-tooth:before {
			content: '\\f5c9';
		}
		.fa-torii-gate:before {
			content: '\\f6a1';
		}
		.fa-tornado:before {
			content: '\\f76f';
		}
		.fa-broadcast-tower:before,
		.fa-tower-broadcast:before {
			content: '\\f519';
		}
		.fa-tower-cell:before {
			content: '\\e585';
		}
		.fa-tower-observation:before {
			content: '\\e586';
		}
		.fa-tractor:before {
			content: '\\f722';
		}
		.fa-trademark:before {
			content: '\\f25c';
		}
		.fa-traffic-light:before {
			content: '\\f637';
		}
		.fa-trailer:before {
			content: '\\e041';
		}
		.fa-train:before {
			content: '\\f238';
		}
		.fa-subway:before,
		.fa-train-subway:before {
			content: '\\f239';
		}
		.fa-train-tram:before,
		.fa-tram:before {
			content: '\\f7da';
		}
		.fa-transgender-alt:before,
		.fa-transgender:before {
			content: '\\f225';
		}
		.fa-trash:before {
			content: '\\f1f8';
		}
		.fa-trash-arrow-up:before,
		.fa-trash-restore:before {
			content: '\\f829';
		}
		.fa-trash-alt:before,
		.fa-trash-can:before {
			content: '\\f2ed';
		}
		.fa-trash-can-arrow-up:before,
		.fa-trash-restore-alt:before {
			content: '\\f82a';
		}
		.fa-tree:before {
			content: '\\f1bb';
		}
		.fa-tree-city:before {
			content: '\\e587';
		}
		.fa-exclamation-triangle:before,
		.fa-triangle-exclamation:before,
		.fa-warning:before {
			content: '\\f071';
		}
		.fa-trophy:before {
			content: '\\f091';
		}
		.fa-trowel:before {
			content: '\\e589';
		}
		.fa-trowel-bricks:before {
			content: '\\e58a';
		}
		.fa-truck:before {
			content: '\\f0d1';
		}
		.fa-truck-arrow-right:before {
			content: '\\e58b';
		}
		.fa-truck-droplet:before {
			content: '\\e58c';
		}
		.fa-shipping-fast:before,
		.fa-truck-fast:before {
			content: '\\f48b';
		}
		.fa-truck-field:before {
			content: '\\e58d';
		}
		.fa-truck-field-un:before {
			content: '\\e58e';
		}
		.fa-truck-front:before {
			content: '\\e2b7';
		}
		.fa-ambulance:before,
		.fa-truck-medical:before {
			content: '\\f0f9';
		}
		.fa-truck-monster:before {
			content: '\\f63b';
		}
		.fa-truck-moving:before {
			content: '\\f4df';
		}
		.fa-truck-pickup:before {
			content: '\\f63c';
		}
		.fa-truck-plane:before {
			content: '\\e58f';
		}
		.fa-truck-loading:before,
		.fa-truck-ramp-box:before {
			content: '\\f4de';
		}
		.fa-teletype:before,
		.fa-tty:before {
			content: '\\f1e4';
		}
		.fa-try:before,
		.fa-turkish-lira-sign:before,
		.fa-turkish-lira:before {
			content: '\\e2bb';
		}
		.fa-level-down-alt:before,
		.fa-turn-down:before {
			content: '\\f3be';
		}
		.fa-level-up-alt:before,
		.fa-turn-up:before {
			content: '\\f3bf';
		}
		.fa-television:before,
		.fa-tv-alt:before,
		.fa-tv:before {
			content: '\\f26c';
		}
		.fa-u:before {
			content: '\\55';
		}
		.fa-umbrella:before {
			content: '\\f0e9';
		}
		.fa-umbrella-beach:before {
			content: '\\f5ca';
		}
		.fa-underline:before {
			content: '\\f0cd';
		}
		.fa-universal-access:before {
			content: '\\f29a';
		}
		.fa-unlock:before {
			content: '\\f09c';
		}
		.fa-unlock-alt:before,
		.fa-unlock-keyhole:before {
			content: '\\f13e';
		}
		.fa-arrows-alt-v:before,
		.fa-up-down:before {
			content: '\\f338';
		}
		.fa-arrows-alt:before,
		.fa-up-down-left-right:before {
			content: '\\f0b2';
		}
		.fa-long-arrow-alt-up:before,
		.fa-up-long:before {
			content: '\\f30c';
		}
		.fa-expand-alt:before,
		.fa-up-right-and-down-left-from-center:before {
			content: '\\f424';
		}
		.fa-external-link-alt:before,
		.fa-up-right-from-square:before {
			content: '\\f35d';
		}
		.fa-upload:before {
			content: '\\f093';
		}
		.fa-user:before {
			content: '\\f007';
		}
		.fa-user-astronaut:before {
			content: '\\f4fb';
		}
		.fa-user-check:before {
			content: '\\f4fc';
		}
		.fa-user-clock:before {
			content: '\\f4fd';
		}
		.fa-user-doctor:before,
		.fa-user-md:before {
			content: '\\f0f0';
		}
		.fa-user-cog:before,
		.fa-user-gear:before {
			content: '\\f4fe';
		}
		.fa-user-graduate:before {
			content: '\\f501';
		}
		.fa-user-friends:before,
		.fa-user-group:before {
			content: '\\f500';
		}
		.fa-user-injured:before {
			content: '\\f728';
		}
		.fa-user-alt:before,
		.fa-user-large:before {
			content: '\\f406';
		}
		.fa-user-alt-slash:before,
		.fa-user-large-slash:before {
			content: '\\f4fa';
		}
		.fa-user-lock:before {
			content: '\\f502';
		}
		.fa-user-minus:before {
			content: '\\f503';
		}
		.fa-user-ninja:before {
			content: '\\f504';
		}
		.fa-user-nurse:before {
			content: '\\f82f';
		}
		.fa-user-edit:before,
		.fa-user-pen:before {
			content: '\\f4ff';
		}
		.fa-user-plus:before {
			content: '\\f234';
		}
		.fa-user-secret:before {
			content: '\\f21b';
		}
		.fa-user-shield:before {
			content: '\\f505';
		}
		.fa-user-slash:before {
			content: '\\f506';
		}
		.fa-user-tag:before {
			content: '\\f507';
		}
		.fa-user-tie:before {
			content: '\\f508';
		}
		.fa-user-times:before,
		.fa-user-xmark:before {
			content: '\\f235';
		}
		.fa-users:before {
			content: '\\f0c0';
		}
		.fa-users-between-lines:before {
			content: '\\e591';
		}
		.fa-users-cog:before,
		.fa-users-gear:before {
			content: '\\f509';
		}
		.fa-users-line:before {
			content: '\\e592';
		}
		.fa-users-rays:before {
			content: '\\e593';
		}
		.fa-users-rectangle:before {
			content: '\\e594';
		}
		.fa-users-slash:before {
			content: '\\e073';
		}
		.fa-users-viewfinder:before {
			content: '\\e595';
		}
		.fa-cutlery:before,
		.fa-utensils:before {
			content: '\\f2e7';
		}
		.fa-v:before {
			content: '\\56';
		}
		.fa-shuttle-van:before,
		.fa-van-shuttle:before {
			content: '\\f5b6';
		}
		.fa-vault:before {
			content: '\\e2c5';
		}
		.fa-vector-square:before {
			content: '\\f5cb';
		}
		.fa-venus:before {
			content: '\\f221';
		}
		.fa-venus-double:before {
			content: '\\f226';
		}
		.fa-venus-mars:before {
			content: '\\f228';
		}
		.fa-vest:before {
			content: '\\e085';
		}
		.fa-vest-patches:before {
			content: '\\e086';
		}
		.fa-vial:before {
			content: '\\f492';
		}
		.fa-vial-circle-check:before {
			content: '\\e596';
		}
		.fa-vial-virus:before {
			content: '\\e597';
		}
		.fa-vials:before {
			content: '\\f493';
		}
		.fa-video-camera:before,
		.fa-video:before {
			content: '\\f03d';
		}
		.fa-video-slash:before {
			content: '\\f4e2';
		}
		.fa-vihara:before {
			content: '\\f6a7';
		}
		.fa-virus:before {
			content: '\\e074';
		}
		.fa-virus-covid:before {
			content: '\\e4a8';
		}
		.fa-virus-covid-slash:before {
			content: '\\e4a9';
		}
		.fa-virus-slash:before {
			content: '\\e075';
		}
		.fa-viruses:before {
			content: '\\e076';
		}
		.fa-voicemail:before {
			content: '\\f897';
		}
		.fa-volcano:before {
			content: '\\f770';
		}
		.fa-volleyball-ball:before,
		.fa-volleyball:before {
			content: '\\f45f';
		}
		.fa-volume-high:before,
		.fa-volume-up:before {
			content: '\\f028';
		}
		.fa-volume-down:before,
		.fa-volume-low:before {
			content: '\\f027';
		}
		.fa-volume-off:before {
			content: '\\f026';
		}
		.fa-volume-mute:before,
		.fa-volume-times:before,
		.fa-volume-xmark:before {
			content: '\\f6a9';
		}
		.fa-vr-cardboard:before {
			content: '\\f729';
		}
		.fa-w:before {
			content: '\\57';
		}
		.fa-walkie-talkie:before {
			content: '\\f8ef';
		}
		.fa-wallet:before {
			content: '\\f555';
		}
		.fa-magic:before,
		.fa-wand-magic:before {
			content: '\\f0d0';
		}
		.fa-magic-wand-sparkles:before,
		.fa-wand-magic-sparkles:before {
			content: '\\e2ca';
		}
		.fa-wand-sparkles:before {
			content: '\\f72b';
		}
		.fa-warehouse:before {
			content: '\\f494';
		}
		.fa-water:before {
			content: '\\f773';
		}
		.fa-ladder-water:before,
		.fa-swimming-pool:before,
		.fa-water-ladder:before {
			content: '\\f5c5';
		}
		.fa-wave-square:before {
			content: '\\f83e';
		}
		.fa-weight-hanging:before {
			content: '\\f5cd';
		}
		.fa-weight-scale:before,
		.fa-weight:before {
			content: '\\f496';
		}
		.fa-wheat-alt:before,
		.fa-wheat-awn:before {
			content: '\\e2cd';
		}
		.fa-wheat-awn-circle-exclamation:before {
			content: '\\e598';
		}
		.fa-wheelchair:before {
			content: '\\f193';
		}
		.fa-wheelchair-alt:before,
		.fa-wheelchair-move:before {
			content: '\\e2ce';
		}
		.fa-glass-whiskey:before,
		.fa-whiskey-glass:before {
			content: '\\f7a0';
		}
		.fa-wifi-3:before,
		.fa-wifi-strong:before,
		.fa-wifi:before {
			content: '\\f1eb';
		}
		.fa-wind:before {
			content: '\\f72e';
		}
		.fa-window-maximize:before {
			content: '\\f2d0';
		}
		.fa-window-minimize:before {
			content: '\\f2d1';
		}
		.fa-window-restore:before {
			content: '\\f2d2';
		}
		.fa-wine-bottle:before {
			content: '\\f72f';
		}
		.fa-wine-glass:before {
			content: '\\f4e3';
		}
		.fa-wine-glass-alt:before,
		.fa-wine-glass-empty:before {
			content: '\\f5ce';
		}
		.fa-krw:before,
		.fa-won-sign:before,
		.fa-won:before {
			content: '\\f159';
		}
		.fa-worm:before {
			content: '\\e599';
		}
		.fa-wrench:before {
			content: '\\f0ad';
		}
		.fa-x:before {
			content: '\\58';
		}
		.fa-x-ray:before {
			content: '\\f497';
		}
		.fa-close:before,
		.fa-multiply:before,
		.fa-remove:before,
		.fa-times:before,
		.fa-xmark:before {
			content: '\\f00d';
		}
		.fa-xmarks-lines:before {
			content: '\\e59a';
		}
		.fa-y:before {
			content: '\\59';
		}
		.fa-cny:before,
		.fa-jpy:before,
		.fa-rmb:before,
		.fa-yen-sign:before,
		.fa-yen:before {
			content: '\\f157';
		}
		.fa-yin-yang:before {
			content: '\\f6ad';
		}
		.fa-z:before {
			content: '\\5a';
		}
		.fa-sr-only,
		.fa-sr-only-focusable:not(:focus),
		.sr-only,
		.sr-only-focusable:not(:focus) {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		:host,
		:root {
			--fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';
		}
		@font-face {
			font-family: 'Font Awesome 6 Brands';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		.fa-brands,
		.fab {
			font-family: 'Font Awesome 6 Brands';
			font-weight: 400;
		}
		.fa-42-group:before,
		.fa-innosoft:before {
			content: '\\e080';
		}
		.fa-500px:before {
			content: '\\f26e';
		}
		.fa-accessible-icon:before {
			content: '\\f368';
		}
		.fa-accusoft:before {
			content: '\\f369';
		}
		.fa-adn:before {
			content: '\\f170';
		}
		.fa-adversal:before {
			content: '\\f36a';
		}
		.fa-affiliatetheme:before {
			content: '\\f36b';
		}
		.fa-airbnb:before {
			content: '\\f834';
		}
		.fa-algolia:before {
			content: '\\f36c';
		}
		.fa-alipay:before {
			content: '\\f642';
		}
		.fa-amazon:before {
			content: '\\f270';
		}
		.fa-amazon-pay:before {
			content: '\\f42c';
		}
		.fa-amilia:before {
			content: '\\f36d';
		}
		.fa-android:before {
			content: '\\f17b';
		}
		.fa-angellist:before {
			content: '\\f209';
		}
		.fa-angrycreative:before {
			content: '\\f36e';
		}
		.fa-angular:before {
			content: '\\f420';
		}
		.fa-app-store:before {
			content: '\\f36f';
		}
		.fa-app-store-ios:before {
			content: '\\f370';
		}
		.fa-apper:before {
			content: '\\f371';
		}
		.fa-apple:before {
			content: '\\f179';
		}
		.fa-apple-pay:before {
			content: '\\f415';
		}
		.fa-artstation:before {
			content: '\\f77a';
		}
		.fa-asymmetrik:before {
			content: '\\f372';
		}
		.fa-atlassian:before {
			content: '\\f77b';
		}
		.fa-audible:before {
			content: '\\f373';
		}
		.fa-autoprefixer:before {
			content: '\\f41c';
		}
		.fa-avianex:before {
			content: '\\f374';
		}
		.fa-aviato:before {
			content: '\\f421';
		}
		.fa-aws:before {
			content: '\\f375';
		}
		.fa-bandcamp:before {
			content: '\\f2d5';
		}
		.fa-battle-net:before {
			content: '\\f835';
		}
		.fa-behance:before {
			content: '\\f1b4';
		}
		.fa-behance-square:before {
			content: '\\f1b5';
		}
		.fa-bilibili:before {
			content: '\\e3d9';
		}
		.fa-bimobject:before {
			content: '\\f378';
		}
		.fa-bitbucket:before {
			content: '\\f171';
		}
		.fa-bitcoin:before {
			content: '\\f379';
		}
		.fa-bity:before {
			content: '\\f37a';
		}
		.fa-black-tie:before {
			content: '\\f27e';
		}
		.fa-blackberry:before {
			content: '\\f37b';
		}
		.fa-blogger:before {
			content: '\\f37c';
		}
		.fa-blogger-b:before {
			content: '\\f37d';
		}
		.fa-bluetooth:before {
			content: '\\f293';
		}
		.fa-bluetooth-b:before {
			content: '\\f294';
		}
		.fa-bootstrap:before {
			content: '\\f836';
		}
		.fa-bots:before {
			content: '\\e340';
		}
		.fa-btc:before {
			content: '\\f15a';
		}
		.fa-buffer:before {
			content: '\\f837';
		}
		.fa-buromobelexperte:before {
			content: '\\f37f';
		}
		.fa-buy-n-large:before {
			content: '\\f8a6';
		}
		.fa-buysellads:before {
			content: '\\f20d';
		}
		.fa-canadian-maple-leaf:before {
			content: '\\f785';
		}
		.fa-cc-amazon-pay:before {
			content: '\\f42d';
		}
		.fa-cc-amex:before {
			content: '\\f1f3';
		}
		.fa-cc-apple-pay:before {
			content: '\\f416';
		}
		.fa-cc-diners-club:before {
			content: '\\f24c';
		}
		.fa-cc-discover:before {
			content: '\\f1f2';
		}
		.fa-cc-jcb:before {
			content: '\\f24b';
		}
		.fa-cc-mastercard:before {
			content: '\\f1f1';
		}
		.fa-cc-paypal:before {
			content: '\\f1f4';
		}
		.fa-cc-stripe:before {
			content: '\\f1f5';
		}
		.fa-cc-visa:before {
			content: '\\f1f0';
		}
		.fa-centercode:before {
			content: '\\f380';
		}
		.fa-centos:before {
			content: '\\f789';
		}
		.fa-chrome:before {
			content: '\\f268';
		}
		.fa-chromecast:before {
			content: '\\f838';
		}
		.fa-cloudflare:before {
			content: '\\e07d';
		}
		.fa-cloudscale:before {
			content: '\\f383';
		}
		.fa-cloudsmith:before {
			content: '\\f384';
		}
		.fa-cloudversify:before {
			content: '\\f385';
		}
		.fa-cmplid:before {
			content: '\\e360';
		}
		.fa-codepen:before {
			content: '\\f1cb';
		}
		.fa-codiepie:before {
			content: '\\f284';
		}
		.fa-confluence:before {
			content: '\\f78d';
		}
		.fa-connectdevelop:before {
			content: '\\f20e';
		}
		.fa-contao:before {
			content: '\\f26d';
		}
		.fa-cotton-bureau:before {
			content: '\\f89e';
		}
		.fa-cpanel:before {
			content: '\\f388';
		}
		.fa-creative-commons:before {
			content: '\\f25e';
		}
		.fa-creative-commons-by:before {
			content: '\\f4e7';
		}
		.fa-creative-commons-nc:before {
			content: '\\f4e8';
		}
		.fa-creative-commons-nc-eu:before {
			content: '\\f4e9';
		}
		.fa-creative-commons-nc-jp:before {
			content: '\\f4ea';
		}
		.fa-creative-commons-nd:before {
			content: '\\f4eb';
		}
		.fa-creative-commons-pd:before {
			content: '\\f4ec';
		}
		.fa-creative-commons-pd-alt:before {
			content: '\\f4ed';
		}
		.fa-creative-commons-remix:before {
			content: '\\f4ee';
		}
		.fa-creative-commons-sa:before {
			content: '\\f4ef';
		}
		.fa-creative-commons-sampling:before {
			content: '\\f4f0';
		}
		.fa-creative-commons-sampling-plus:before {
			content: '\\f4f1';
		}
		.fa-creative-commons-share:before {
			content: '\\f4f2';
		}
		.fa-creative-commons-zero:before {
			content: '\\f4f3';
		}
		.fa-critical-role:before {
			content: '\\f6c9';
		}
		.fa-css3:before {
			content: '\\f13c';
		}
		.fa-css3-alt:before {
			content: '\\f38b';
		}
		.fa-cuttlefish:before {
			content: '\\f38c';
		}
		.fa-d-and-d:before {
			content: '\\f38d';
		}
		.fa-d-and-d-beyond:before {
			content: '\\f6ca';
		}
		.fa-dailymotion:before {
			content: '\\e052';
		}
		.fa-dashcube:before {
			content: '\\f210';
		}
		.fa-deezer:before {
			content: '\\e077';
		}
		.fa-delicious:before {
			content: '\\f1a5';
		}
		.fa-deploydog:before {
			content: '\\f38e';
		}
		.fa-deskpro:before {
			content: '\\f38f';
		}
		.fa-dev:before {
			content: '\\f6cc';
		}
		.fa-deviantart:before {
			content: '\\f1bd';
		}
		.fa-dhl:before {
			content: '\\f790';
		}
		.fa-diaspora:before {
			content: '\\f791';
		}
		.fa-digg:before {
			content: '\\f1a6';
		}
		.fa-digital-ocean:before {
			content: '\\f391';
		}
		.fa-discord:before {
			content: '\\f392';
		}
		.fa-discourse:before {
			content: '\\f393';
		}
		.fa-dochub:before {
			content: '\\f394';
		}
		.fa-docker:before {
			content: '\\f395';
		}
		.fa-draft2digital:before {
			content: '\\f396';
		}
		.fa-dribbble:before {
			content: '\\f17d';
		}
		.fa-dribbble-square:before {
			content: '\\f397';
		}
		.fa-dropbox:before {
			content: '\\f16b';
		}
		.fa-drupal:before {
			content: '\\f1a9';
		}
		.fa-dyalog:before {
			content: '\\f399';
		}
		.fa-earlybirds:before {
			content: '\\f39a';
		}
		.fa-ebay:before {
			content: '\\f4f4';
		}
		.fa-edge:before {
			content: '\\f282';
		}
		.fa-edge-legacy:before {
			content: '\\e078';
		}
		.fa-elementor:before {
			content: '\\f430';
		}
		.fa-ello:before {
			content: '\\f5f1';
		}
		.fa-ember:before {
			content: '\\f423';
		}
		.fa-empire:before {
			content: '\\f1d1';
		}
		.fa-envira:before {
			content: '\\f299';
		}
		.fa-erlang:before {
			content: '\\f39d';
		}
		.fa-ethereum:before {
			content: '\\f42e';
		}
		.fa-etsy:before {
			content: '\\f2d7';
		}
		.fa-evernote:before {
			content: '\\f839';
		}
		.fa-expeditedssl:before {
			content: '\\f23e';
		}
		.fa-facebook:before {
			content: '\\f09a';
		}
		.fa-facebook-f:before {
			content: '\\f39e';
		}
		.fa-facebook-messenger:before {
			content: '\\f39f';
		}
		.fa-facebook-square:before {
			content: '\\f082';
		}
		.fa-fantasy-flight-games:before {
			content: '\\f6dc';
		}
		.fa-fedex:before {
			content: '\\f797';
		}
		.fa-fedora:before {
			content: '\\f798';
		}
		.fa-figma:before {
			content: '\\f799';
		}
		.fa-firefox:before {
			content: '\\f269';
		}
		.fa-firefox-browser:before {
			content: '\\e007';
		}
		.fa-first-order:before {
			content: '\\f2b0';
		}
		.fa-first-order-alt:before {
			content: '\\f50a';
		}
		.fa-firstdraft:before {
			content: '\\f3a1';
		}
		.fa-flickr:before {
			content: '\\f16e';
		}
		.fa-flipboard:before {
			content: '\\f44d';
		}
		.fa-fly:before {
			content: '\\f417';
		}
		.fa-font-awesome-flag:before,
		.fa-font-awesome-logo-full:before,
		.fa-font-awesome:before {
			content: '\\f2b4';
		}
		.fa-fonticons:before {
			content: '\\f280';
		}
		.fa-fonticons-fi:before {
			content: '\\f3a2';
		}
		.fa-fort-awesome:before {
			content: '\\f286';
		}
		.fa-fort-awesome-alt:before {
			content: '\\f3a3';
		}
		.fa-forumbee:before {
			content: '\\f211';
		}
		.fa-foursquare:before {
			content: '\\f180';
		}
		.fa-free-code-camp:before {
			content: '\\f2c5';
		}
		.fa-freebsd:before {
			content: '\\f3a4';
		}
		.fa-fulcrum:before {
			content: '\\f50b';
		}
		.fa-galactic-republic:before {
			content: '\\f50c';
		}
		.fa-galactic-senate:before {
			content: '\\f50d';
		}
		.fa-get-pocket:before {
			content: '\\f265';
		}
		.fa-gg:before {
			content: '\\f260';
		}
		.fa-gg-circle:before {
			content: '\\f261';
		}
		.fa-git:before {
			content: '\\f1d3';
		}
		.fa-git-alt:before {
			content: '\\f841';
		}
		.fa-git-square:before {
			content: '\\f1d2';
		}
		.fa-github:before {
			content: '\\f09b';
		}
		.fa-github-alt:before {
			content: '\\f113';
		}
		.fa-github-square:before {
			content: '\\f092';
		}
		.fa-gitkraken:before {
			content: '\\f3a6';
		}
		.fa-gitlab:before {
			content: '\\f296';
		}
		.fa-gitter:before {
			content: '\\f426';
		}
		.fa-glide:before {
			content: '\\f2a5';
		}
		.fa-glide-g:before {
			content: '\\f2a6';
		}
		.fa-gofore:before {
			content: '\\f3a7';
		}
		.fa-golang:before {
			content: '\\e40f';
		}
		.fa-goodreads:before {
			content: '\\f3a8';
		}
		.fa-goodreads-g:before {
			content: '\\f3a9';
		}
		.fa-google:before {
			content: '\\f1a0';
		}
		.fa-google-drive:before {
			content: '\\f3aa';
		}
		.fa-google-pay:before {
			content: '\\e079';
		}
		.fa-google-play:before {
			content: '\\f3ab';
		}
		.fa-google-plus:before {
			content: '\\f2b3';
		}
		.fa-google-plus-g:before {
			content: '\\f0d5';
		}
		.fa-google-plus-square:before {
			content: '\\f0d4';
		}
		.fa-google-wallet:before {
			content: '\\f1ee';
		}
		.fa-gratipay:before {
			content: '\\f184';
		}
		.fa-grav:before {
			content: '\\f2d6';
		}
		.fa-gripfire:before {
			content: '\\f3ac';
		}
		.fa-grunt:before {
			content: '\\f3ad';
		}
		.fa-guilded:before {
			content: '\\e07e';
		}
		.fa-gulp:before {
			content: '\\f3ae';
		}
		.fa-hacker-news:before {
			content: '\\f1d4';
		}
		.fa-hacker-news-square:before {
			content: '\\f3af';
		}
		.fa-hackerrank:before {
			content: '\\f5f7';
		}
		.fa-hashnode:before {
			content: '\\e499';
		}
		.fa-hips:before {
			content: '\\f452';
		}
		.fa-hire-a-helper:before {
			content: '\\f3b0';
		}
		.fa-hive:before {
			content: '\\e07f';
		}
		.fa-hooli:before {
			content: '\\f427';
		}
		.fa-hornbill:before {
			content: '\\f592';
		}
		.fa-hotjar:before {
			content: '\\f3b1';
		}
		.fa-houzz:before {
			content: '\\f27c';
		}
		.fa-html5:before {
			content: '\\f13b';
		}
		.fa-hubspot:before {
			content: '\\f3b2';
		}
		.fa-ideal:before {
			content: '\\e013';
		}
		.fa-imdb:before {
			content: '\\f2d8';
		}
		.fa-instagram:before {
			content: '\\f16d';
		}
		.fa-instagram-square:before {
			content: '\\e055';
		}
		.fa-instalod:before {
			content: '\\e081';
		}
		.fa-intercom:before {
			content: '\\f7af';
		}
		.fa-internet-explorer:before {
			content: '\\f26b';
		}
		.fa-invision:before {
			content: '\\f7b0';
		}
		.fa-ioxhost:before {
			content: '\\f208';
		}
		.fa-itch-io:before {
			content: '\\f83a';
		}
		.fa-itunes:before {
			content: '\\f3b4';
		}
		.fa-itunes-note:before {
			content: '\\f3b5';
		}
		.fa-java:before {
			content: '\\f4e4';
		}
		.fa-jedi-order:before {
			content: '\\f50e';
		}
		.fa-jenkins:before {
			content: '\\f3b6';
		}
		.fa-jira:before {
			content: '\\f7b1';
		}
		.fa-joget:before {
			content: '\\f3b7';
		}
		.fa-joomla:before {
			content: '\\f1aa';
		}
		.fa-js:before {
			content: '\\f3b8';
		}
		.fa-js-square:before {
			content: '\\f3b9';
		}
		.fa-jsfiddle:before {
			content: '\\f1cc';
		}
		.fa-kaggle:before {
			content: '\\f5fa';
		}
		.fa-keybase:before {
			content: '\\f4f5';
		}
		.fa-keycdn:before {
			content: '\\f3ba';
		}
		.fa-kickstarter:before {
			content: '\\f3bb';
		}
		.fa-kickstarter-k:before {
			content: '\\f3bc';
		}
		.fa-korvue:before {
			content: '\\f42f';
		}
		.fa-laravel:before {
			content: '\\f3bd';
		}
		.fa-lastfm:before {
			content: '\\f202';
		}
		.fa-lastfm-square:before {
			content: '\\f203';
		}
		.fa-leanpub:before {
			content: '\\f212';
		}
		.fa-less:before {
			content: '\\f41d';
		}
		.fa-line:before {
			content: '\\f3c0';
		}
		.fa-linkedin:before {
			content: '\\f08c';
		}
		.fa-linkedin-in:before {
			content: '\\f0e1';
		}
		.fa-linode:before {
			content: '\\f2b8';
		}
		.fa-linux:before {
			content: '\\f17c';
		}
		.fa-lyft:before {
			content: '\\f3c3';
		}
		.fa-magento:before {
			content: '\\f3c4';
		}
		.fa-mailchimp:before {
			content: '\\f59e';
		}
		.fa-mandalorian:before {
			content: '\\f50f';
		}
		.fa-markdown:before {
			content: '\\f60f';
		}
		.fa-mastodon:before {
			content: '\\f4f6';
		}
		.fa-maxcdn:before {
			content: '\\f136';
		}
		.fa-mdb:before {
			content: '\\f8ca';
		}
		.fa-medapps:before {
			content: '\\f3c6';
		}
		.fa-medium-m:before,
		.fa-medium:before {
			content: '\\f23a';
		}
		.fa-medrt:before {
			content: '\\f3c8';
		}
		.fa-meetup:before {
			content: '\\f2e0';
		}
		.fa-megaport:before {
			content: '\\f5a3';
		}
		.fa-mendeley:before {
			content: '\\f7b3';
		}
		.fa-microblog:before {
			content: '\\e01a';
		}
		.fa-microsoft:before {
			content: '\\f3ca';
		}
		.fa-mix:before {
			content: '\\f3cb';
		}
		.fa-mixcloud:before {
			content: '\\f289';
		}
		.fa-mixer:before {
			content: '\\e056';
		}
		.fa-mizuni:before {
			content: '\\f3cc';
		}
		.fa-modx:before {
			content: '\\f285';
		}
		.fa-monero:before {
			content: '\\f3d0';
		}
		.fa-napster:before {
			content: '\\f3d2';
		}
		.fa-neos:before {
			content: '\\f612';
		}
		.fa-nfc-directional:before {
			content: '\\e530';
		}
		.fa-nfc-symbol:before {
			content: '\\e531';
		}
		.fa-nimblr:before {
			content: '\\f5a8';
		}
		.fa-node:before {
			content: '\\f419';
		}
		.fa-node-js:before {
			content: '\\f3d3';
		}
		.fa-npm:before {
			content: '\\f3d4';
		}
		.fa-ns8:before {
			content: '\\f3d5';
		}
		.fa-nutritionix:before {
			content: '\\f3d6';
		}
		.fa-octopus-deploy:before {
			content: '\\e082';
		}
		.fa-odnoklassniki:before {
			content: '\\f263';
		}
		.fa-odnoklassniki-square:before {
			content: '\\f264';
		}
		.fa-old-republic:before {
			content: '\\f510';
		}
		.fa-opencart:before {
			content: '\\f23d';
		}
		.fa-openid:before {
			content: '\\f19b';
		}
		.fa-opera:before {
			content: '\\f26a';
		}
		.fa-optin-monster:before {
			content: '\\f23c';
		}
		.fa-orcid:before {
			content: '\\f8d2';
		}
		.fa-osi:before {
			content: '\\f41a';
		}
		.fa-padlet:before {
			content: '\\e4a0';
		}
		.fa-page4:before {
			content: '\\f3d7';
		}
		.fa-pagelines:before {
			content: '\\f18c';
		}
		.fa-palfed:before {
			content: '\\f3d8';
		}
		.fa-patreon:before {
			content: '\\f3d9';
		}
		.fa-paypal:before {
			content: '\\f1ed';
		}
		.fa-perbyte:before {
			content: '\\e083';
		}
		.fa-periscope:before {
			content: '\\f3da';
		}
		.fa-phabricator:before {
			content: '\\f3db';
		}
		.fa-phoenix-framework:before {
			content: '\\f3dc';
		}
		.fa-phoenix-squadron:before {
			content: '\\f511';
		}
		.fa-php:before {
			content: '\\f457';
		}
		.fa-pied-piper:before {
			content: '\\f2ae';
		}
		.fa-pied-piper-alt:before {
			content: '\\f1a8';
		}
		.fa-pied-piper-hat:before {
			content: '\\f4e5';
		}
		.fa-pied-piper-pp:before {
			content: '\\f1a7';
		}
		.fa-pied-piper-square:before {
			content: '\\e01e';
		}
		.fa-pinterest:before {
			content: '\\f0d2';
		}
		.fa-pinterest-p:before {
			content: '\\f231';
		}
		.fa-pinterest-square:before {
			content: '\\f0d3';
		}
		.fa-pix:before {
			content: '\\e43a';
		}
		.fa-playstation:before {
			content: '\\f3df';
		}
		.fa-product-hunt:before {
			content: '\\f288';
		}
		.fa-pushed:before {
			content: '\\f3e1';
		}
		.fa-python:before {
			content: '\\f3e2';
		}
		.fa-qq:before {
			content: '\\f1d6';
		}
		.fa-quinscape:before {
			content: '\\f459';
		}
		.fa-quora:before {
			content: '\\f2c4';
		}
		.fa-r-project:before {
			content: '\\f4f7';
		}
		.fa-raspberry-pi:before {
			content: '\\f7bb';
		}
		.fa-ravelry:before {
			content: '\\f2d9';
		}
		.fa-react:before {
			content: '\\f41b';
		}
		.fa-reacteurope:before {
			content: '\\f75d';
		}
		.fa-readme:before {
			content: '\\f4d5';
		}
		.fa-rebel:before {
			content: '\\f1d0';
		}
		.fa-red-river:before {
			content: '\\f3e3';
		}
		.fa-reddit:before {
			content: '\\f1a1';
		}
		.fa-reddit-alien:before {
			content: '\\f281';
		}
		.fa-reddit-square:before {
			content: '\\f1a2';
		}
		.fa-redhat:before {
			content: '\\f7bc';
		}
		.fa-renren:before {
			content: '\\f18b';
		}
		.fa-replyd:before {
			content: '\\f3e6';
		}
		.fa-researchgate:before {
			content: '\\f4f8';
		}
		.fa-resolving:before {
			content: '\\f3e7';
		}
		.fa-rev:before {
			content: '\\f5b2';
		}
		.fa-rocketchat:before {
			content: '\\f3e8';
		}
		.fa-rockrms:before {
			content: '\\f3e9';
		}
		.fa-rust:before {
			content: '\\e07a';
		}
		.fa-safari:before {
			content: '\\f267';
		}
		.fa-salesforce:before {
			content: '\\f83b';
		}
		.fa-sass:before {
			content: '\\f41e';
		}
		.fa-schlix:before {
			content: '\\f3ea';
		}
		.fa-screenpal:before {
			content: '\\e570';
		}
		.fa-scribd:before {
			content: '\\f28a';
		}
		.fa-searchengin:before {
			content: '\\f3eb';
		}
		.fa-sellcast:before {
			content: '\\f2da';
		}
		.fa-sellsy:before {
			content: '\\f213';
		}
		.fa-servicestack:before {
			content: '\\f3ec';
		}
		.fa-shirtsinbulk:before {
			content: '\\f214';
		}
		.fa-shopify:before {
			content: '\\e057';
		}
		.fa-shopware:before {
			content: '\\f5b5';
		}
		.fa-simplybuilt:before {
			content: '\\f215';
		}
		.fa-sistrix:before {
			content: '\\f3ee';
		}
		.fa-sith:before {
			content: '\\f512';
		}
		.fa-sitrox:before {
			content: '\\e44a';
		}
		.fa-sketch:before {
			content: '\\f7c6';
		}
		.fa-skyatlas:before {
			content: '\\f216';
		}
		.fa-skype:before {
			content: '\\f17e';
		}
		.fa-slack-hash:before,
		.fa-slack:before {
			content: '\\f198';
		}
		.fa-slideshare:before {
			content: '\\f1e7';
		}
		.fa-snapchat-ghost:before,
		.fa-snapchat:before {
			content: '\\f2ab';
		}
		.fa-snapchat-square:before {
			content: '\\f2ad';
		}
		.fa-soundcloud:before {
			content: '\\f1be';
		}
		.fa-sourcetree:before {
			content: '\\f7d3';
		}
		.fa-speakap:before {
			content: '\\f3f3';
		}
		.fa-speaker-deck:before {
			content: '\\f83c';
		}
		.fa-spotify:before {
			content: '\\f1bc';
		}
		.fa-square-font-awesome:before {
			content: '\\f425';
		}
		.fa-font-awesome-alt:before,
		.fa-square-font-awesome-stroke:before {
			content: '\\f35c';
		}
		.fa-squarespace:before {
			content: '\\f5be';
		}
		.fa-stack-exchange:before {
			content: '\\f18d';
		}
		.fa-stack-overflow:before {
			content: '\\f16c';
		}
		.fa-stackpath:before {
			content: '\\f842';
		}
		.fa-staylinked:before {
			content: '\\f3f5';
		}
		.fa-steam:before {
			content: '\\f1b6';
		}
		.fa-steam-square:before {
			content: '\\f1b7';
		}
		.fa-steam-symbol:before {
			content: '\\f3f6';
		}
		.fa-sticker-mule:before {
			content: '\\f3f7';
		}
		.fa-strava:before {
			content: '\\f428';
		}
		.fa-stripe:before {
			content: '\\f429';
		}
		.fa-stripe-s:before {
			content: '\\f42a';
		}
		.fa-studiovinari:before {
			content: '\\f3f8';
		}
		.fa-stumbleupon:before {
			content: '\\f1a4';
		}
		.fa-stumbleupon-circle:before {
			content: '\\f1a3';
		}
		.fa-superpowers:before {
			content: '\\f2dd';
		}
		.fa-supple:before {
			content: '\\f3f9';
		}
		.fa-suse:before {
			content: '\\f7d6';
		}
		.fa-swift:before {
			content: '\\f8e1';
		}
		.fa-symfony:before {
			content: '\\f83d';
		}
		.fa-teamspeak:before {
			content: '\\f4f9';
		}
		.fa-telegram-plane:before,
		.fa-telegram:before {
			content: '\\f2c6';
		}
		.fa-tencent-weibo:before {
			content: '\\f1d5';
		}
		.fa-the-red-yeti:before {
			content: '\\f69d';
		}
		.fa-themeco:before {
			content: '\\f5c6';
		}
		.fa-themeisle:before {
			content: '\\f2b2';
		}
		.fa-think-peaks:before {
			content: '\\f731';
		}
		.fa-tiktok:before {
			content: '\\e07b';
		}
		.fa-trade-federation:before {
			content: '\\f513';
		}
		.fa-trello:before {
			content: '\\f181';
		}
		.fa-tumblr:before {
			content: '\\f173';
		}
		.fa-tumblr-square:before {
			content: '\\f174';
		}
		.fa-twitch:before {
			content: '\\f1e8';
		}
		.fa-twitter:before {
			content: '\\f099';
		}
		.fa-twitter-square:before {
			content: '\\f081';
		}
		.fa-typo3:before {
			content: '\\f42b';
		}
		.fa-uber:before {
			content: '\\f402';
		}
		.fa-ubuntu:before {
			content: '\\f7df';
		}
		.fa-uikit:before {
			content: '\\f403';
		}
		.fa-umbraco:before {
			content: '\\f8e8';
		}
		.fa-uncharted:before {
			content: '\\e084';
		}
		.fa-uniregistry:before {
			content: '\\f404';
		}
		.fa-unity:before {
			content: '\\e049';
		}
		.fa-unsplash:before {
			content: '\\e07c';
		}
		.fa-untappd:before {
			content: '\\f405';
		}
		.fa-ups:before {
			content: '\\f7e0';
		}
		.fa-usb:before {
			content: '\\f287';
		}
		.fa-usps:before {
			content: '\\f7e1';
		}
		.fa-ussunnah:before {
			content: '\\f407';
		}
		.fa-vaadin:before {
			content: '\\f408';
		}
		.fa-viacoin:before {
			content: '\\f237';
		}
		.fa-viadeo:before {
			content: '\\f2a9';
		}
		.fa-viadeo-square:before {
			content: '\\f2aa';
		}
		.fa-viber:before {
			content: '\\f409';
		}
		.fa-vimeo:before {
			content: '\\f40a';
		}
		.fa-vimeo-square:before {
			content: '\\f194';
		}
		.fa-vimeo-v:before {
			content: '\\f27d';
		}
		.fa-vine:before {
			content: '\\f1ca';
		}
		.fa-vk:before {
			content: '\\f189';
		}
		.fa-vnv:before {
			content: '\\f40b';
		}
		.fa-vuejs:before {
			content: '\\f41f';
		}
		.fa-watchman-monitoring:before {
			content: '\\e087';
		}
		.fa-waze:before {
			content: '\\f83f';
		}
		.fa-weebly:before {
			content: '\\f5cc';
		}
		.fa-weibo:before {
			content: '\\f18a';
		}
		.fa-weixin:before {
			content: '\\f1d7';
		}
		.fa-whatsapp:before {
			content: '\\f232';
		}
		.fa-whatsapp-square:before {
			content: '\\f40c';
		}
		.fa-whmcs:before {
			content: '\\f40d';
		}
		.fa-wikipedia-w:before {
			content: '\\f266';
		}
		.fa-windows:before {
			content: '\\f17a';
		}
		.fa-wirsindhandwerk:before,
		.fa-wsh:before {
			content: '\\e2d0';
		}
		.fa-wix:before {
			content: '\\f5cf';
		}
		.fa-wizards-of-the-coast:before {
			content: '\\f730';
		}
		.fa-wodu:before {
			content: '\\e088';
		}
		.fa-wolf-pack-battalion:before {
			content: '\\f514';
		}
		.fa-wordpress:before {
			content: '\\f19a';
		}
		.fa-wordpress-simple:before {
			content: '\\f411';
		}
		.fa-wpbeginner:before {
			content: '\\f297';
		}
		.fa-wpexplorer:before {
			content: '\\f2de';
		}
		.fa-wpforms:before {
			content: '\\f298';
		}
		.fa-wpressr:before {
			content: '\\f3e4';
		}
		.fa-xbox:before {
			content: '\\f412';
		}
		.fa-xing:before {
			content: '\\f168';
		}
		.fa-xing-square:before {
			content: '\\f169';
		}
		.fa-y-combinator:before {
			content: '\\f23b';
		}
		.fa-yahoo:before {
			content: '\\f19e';
		}
		.fa-yammer:before {
			content: '\\f840';
		}
		.fa-yandex:before {
			content: '\\f413';
		}
		.fa-yandex-international:before {
			content: '\\f414';
		}
		.fa-yarn:before {
			content: '\\f7e3';
		}
		.fa-yelp:before {
			content: '\\f1e9';
		}
		.fa-yoast:before {
			content: '\\f2b1';
		}
		.fa-youtube:before {
			content: '\\f167';
		}
		.fa-youtube-square:before {
			content: '\\f431';
		}
		.fa-zhihu:before {
			content: '\\f63f';
		}
		:host,
		:root {
			--fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		.fa-regular,
		.far {
			font-family: 'Font Awesome 6 Free';
			font-weight: 400;
		}
		:host,
		:root {
			--fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 900;
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		.fa-solid,
		.fas {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		@font-face {
			font-family: 'Font Awesome 5 Brands';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 900;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
			unicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a,
				u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a,
				u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9,
				u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba, u+f2bc, u+f2be,
				u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-v4compatibility.woff2) format('woff2'),
				url(../webfonts/fa-v4compatibility.ttf) format('truetype');
			unicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec,
				u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f250, u+f252, u+f27a;
		}
	`,
  "KOL-SKIP-NAV": css$2`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 8px 14px;
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			color: var(--color-white);
			cursor: pointer;
		}
	`,
  "KOL-SPLIT-BUTTON": css$2`
		.popover {
			background: #fff;
		}
	`
});

var css_248z$A = "@layer kol-theme-global {\n  :host {\n    --border-radius: var(--kolibri-border-radius, 5px);\n    --font-family: var(--kolibri-font-family, BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif);\n    --font-size: var(--kolibri-font-size, 16px);\n    --spacing: var(--kolibri-spacing, 0.25rem);\n    --border-width: var(--kolibri-border-width, 1px);\n    --color-primary: var(--kolibri-color-primary, #004b76);\n    --color-primary-variant: var(--kolibri-color-primary-variant, #0077b6);\n    --color-danger: var(--kolibri-color-danger, #c0003c);\n    --color-warning: var(--kolibri-color-warning, #c44931);\n    --color-success: var(--kolibri-color-success, #005c45);\n    --color-subtle: var(--kolibri-color-subtle, #576164);\n    --color-light: var(--kolibri-color-light, #ffffff);\n    --color-text: var(--kolibri-color-text, #202020);\n    --color-mute: var(--kolibri-color-mute, #f2f3f4);\n    --color-mute-variant: var(--kolibri-color-mute-variant, #bec5c9);\n  }\n  :host {\n    background-color: transparent; /* Reset global background-color defined by components */\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n  }\n  * {\n    box-sizing: border-box;\n  }\n  *:not(i) {\n    font-family: var(--font-family);\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n  *[tabindex]:focus,\n  kol-input:not(.checkbox, .radio) .input:focus-within,\n  kol-input:is(.checkbox, .radio) input:focus,\n  summary:focus {\n    cursor: pointer;\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: 3px;\n    transition: outline-offset 0.2s linear;\n  }\n  kol-heading-wc {\n    font-weight: 700;\n  }\n  kol-tooltip-wc .tooltip-floating {\n    border: var(--border-width) solid var(--color-subtle);\n    border-radius: var(--border-radius);\n  }\n  kol-tooltip-wc .tooltip-arrow {\n    border: var(--border-width) solid var(--color-subtle);\n  }\n  kol-tooltip-wc .tooltip-area {\n    background-color: var(--color-light);\n  }\n  kol-tooltip-wc .tooltip-content {\n    border-radius: var(--border-radius);\n    line-height: 1.5;\n    padding: 0.5rem 0.75rem;\n  }\n  kol-span-wc,\n  kol-span-wc > span {\n    gap: 0.5rem;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n}";
const globalCss = css_248z$A;

var css_248z$z = "@layer kol-theme-component {\n  abbr {\n    border-bottom: dashed var(--color-text) 1px;\n    text-decoration: none !important;\n  }\n}";
const abbrCss = css_248z$z;

var css_248z$y = "@layer kol-theme-component {\n  kol-span-wc > span {\n    display: flex;\n    place-items: baseline center;\n    text-align: left;\n  }\n  :host > div > kol-heading-wc button {\n    border-radius: var(--border-radius);\n    min-height: 2.2rem;\n    padding: 12px 8px;\n  }\n  :host > div > kol-heading-wc button kol-span-wc {\n    font-weight: 700;\n    font-size: 1.125rem;\n    line-height: 20px;\n    gap: 0.5rem;\n  }\n  :host > div > kol-heading-wc button kol-span-wc > span {\n    gap: 0.5em;\n  }\n  :host > div > kol-heading-wc button kol-icon {\n    color: var(--color-primary);\n  }\n  :host > div {\n    width: 100%;\n    height: 100%;\n    display: grid;\n  }\n  :host > div div[class=header],\n  :host > div[class*=open] div[class=content] {\n    margin: 0;\n  }\n  :host > div div[class=content] {\n    padding-left: 2.25em;\n    padding-bottom: 12px;\n    padding-right: 8px;\n  }\n  button:focus {\n    outline: none;\n  }\n  :host > .accordion:focus-within {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n    cursor: pointer;\n  }\n}";
const accordionCss = css_248z$y;

var css_248z$x = "@layer kol-theme-component {\n  .msg {\n    border-width: 0;\n  }\n  kol-alert-wc {\n    border-width: var(--border-width);\n    border-style: solid;\n    border-radius: var(--border-radius);\n    display: flex;\n    width: 100%;\n    overflow: unset;\n    border-color: transparent;\n    background-color: var(--color-light);\n  }\n  kol-alert-wc > .heading {\n    display: flex;\n    gap: 0.5em;\n    place-items: center;\n  }\n  kol-alert-wc > .heading > div {\n    display: grid;\n    gap: 0.25rem;\n  }\n  .msg > .heading > kol-icon {\n    place-self: baseline;\n  }\n  kol-alert-wc > .heading > kol-button-wc.close {\n    place-self: center;\n  }\n  .msg {\n    align-items: start;\n  }\n  .default {\n    border-color: var(--color-subtle);\n  }\n  .default.msg .heading-icon {\n    color: var(--color-subtle);\n  }\n  .error {\n    border-color: var(--color-danger);\n  }\n  .error.msg .heading-icon {\n    color: var(--color-danger);\n  }\n  .info {\n    border-color: var(--color-primary);\n  }\n  .info.msg .heading-icon {\n    color: var(--color-primary);\n  }\n  .success {\n    border-color: var(--color-success);\n  }\n  .success.msg .heading-icon {\n    color: var(--color-success);\n  }\n  .warning {\n    border-color: var(--color-warning);\n  }\n  .warning.msg .heading-icon {\n    color: var(--color-warning);\n  }\n  .heading-icon {\n    color: var(--color-light);\n  }\n  kol-alert-wc .heading .heading-icon {\n    padding: 0;\n  }\n  .msg > .heading > .heading-icon {\n    padding-top: 0;\n    place-items: baseline;\n  }\n  .msg > .heading > div > kol-heading-wc {\n    padding-top: calc(--var-spacing / 2);\n  }\n  .msg.default .heading > div > kol-heading-wc {\n    color: var(--color-subtle);\n  }\n  .msg.error .heading > div > kol-heading-wc {\n    color: var(--color-danger);\n  }\n  .msg.info .heading > div > kol-heading-wc {\n    color: var(--color-primary);\n  }\n  .msg.success .heading > div > kol-heading-wc {\n    color: var(--color-success);\n  }\n  .msg.warning .heading > div > kol-heading-wc {\n    color: var(--color-warning);\n  }\n  .msg.default .close .icon {\n    color: var(--color-subtle);\n  }\n  .msg.error .close .icon {\n    color: var(--color-danger);\n  }\n  .msg.info .close .icon {\n    color: var(--color-primary);\n  }\n  .msg.success .close .icon {\n    color: var(--color-success);\n  }\n  .msg.warning .close .icon {\n    color: var(--color-warning);\n  }\n  .card {\n    border-width: var(--border-width);\n    border-style: solid;\n    filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));\n    flex-direction: column;\n  }\n  .card > .heading {\n    padding: 0.5rem 1rem;\n  }\n  .card[_has-closer] > .heading {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 0;\n  }\n  .card > .heading > div {\n    width: 100%;\n    min-height: 1.25rem;\n  }\n  .card > .heading .heading-icon {\n    justify-self: right;\n    margin-top: -4px;\n  }\n  .card > .heading kol-heading-wc {\n    width: 100%;\n    color: var(--color-light);\n    display: flex;\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n  }\n  .card > .heading kol-heading-wc > * {\n    margin: auto 0;\n  }\n  .card > .content {\n    padding: 1rem;\n  }\n  .card.default > .heading {\n    background-color: var(--color-subtle);\n  }\n  .card.error > .heading {\n    background-color: var(--color-danger);\n  }\n  .card.info > .heading {\n    background-color: var(--color-primary);\n  }\n  .card.success > .heading {\n    background-color: var(--color-success);\n  }\n  .card.warning > .heading {\n    background-color: var(--color-warning);\n  }\n  :is(.error, .info, .success, .warning) .heading-icon {\n    font-size: 1.25rem;\n  }\n  .card > div > .content {\n    grid-row: 2;\n    grid-column: 1/span 2;\n  }\n  .card.default .close {\n    background-color: var(--color-subtle);\n  }\n  .card.error .close {\n    background-color: var(--color-danger);\n  }\n  .card.info .close {\n    background-color: var(--color-primary);\n  }\n  .card.success .close {\n    background-color: var(--color-success);\n  }\n  .card.warning .close {\n    background-color: var(--color-warning);\n  }\n  .close > button {\n    border-radius: 50%; /* visible on focus */\n    color: var(--color-light);\n    cursor: pointer;\n    height: var(--a11y-min-size);\n    width: var(--a11y-min-size);\n  }\n  .close > button.hide-label kol-icon {\n    display: flex;\n    width: 1em;\n    height: 1em;\n    font-size: 1.2rem;\n  }\n  .close > button:active {\n    box-shadow: none;\n    outline: none;\n  }\n}";
const alertCss = css_248z$x;

var css_248z$w = "@layer kol-theme-component {\n  :host {\n    display: inline-block;\n    font-size: inherit;\n  }\n  :host > span {\n    border-radius: var(--border-radius);\n    display: inline-flex;\n    font-style: normal;\n  }\n  :host > span.smart-button {\n    align-items: center;\n  }\n  :host > span kol-button-wc:hover > button {\n    background-color: var(--color-primary-variant);\n    color: var(--color-light);\n  }\n  :host > span kol-button-wc > button {\n    color: inherit;\n    border-top-right-radius: var(--border-radius);\n    border-bottom-right-radius: var(--border-radius);\n    padding: 0.2rem;\n  }\n  :host > span kol-span-wc {\n    padding: 0.25rem 0.75rem;\n  }\n  :host > span > kol-span-wc {\n    align-items: center;\n    font-style: normal;\n    gap: 0.5rem;\n  }\n  :host > span > kol-span-wc > span {\n    display: flex;\n    gap: 0.25rem;\n  }\n}";
const badgeCss = css_248z$w;

var css_248z$v = "@layer kol-theme-component {\n  li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {\n    font-size: 0.75rem;\n    color: var(--color-subtle);\n  }\n  kol-link::part(icon) {\n    font-size: 1.25rem;\n  }\n  ul li > :is(span, kol-link) {\n    line-height: 1.25rem;\n    height: 20px;\n  }\n  ul li:last-child > span {\n    color: var(--color-subtle);\n  }\n}";
const breadcrumbCss = css_248z$v;

var css_248z$u = "@layer kol-theme-component {\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  :is(a, button) > kol-span-wc {\n    font-weight: 700;\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: var(--border-width);\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px 14px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  :is(a, button):disabled > kol-span-wc {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  .primary :is(a, button) > kol-span-wc,\n  .primary :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .secondary :is(a, button) > kol-span-wc,\n  .secondary :is(a, button):disabled:hover > kol-span-wc,\n  .normal :is(a, button) > kol-span-wc,\n  .normal :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-light);\n    border-color: var(--color-primary);\n    color: var(--color-primary);\n  }\n  .danger :is(a, button) > kol-span-wc,\n  .danger :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n    color: var(--color-light);\n  }\n  .ghost :is(a, button) > kol-span-wc,\n  .ghost :is(a, button):disabled:hover > kol-span-wc {\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n    box-shadow: none;\n    color: var(--color-primary);\n  } /*-----------*/\n  .primary :is(a, button):active > kol-span-wc,\n  .primary :is(a, button):hover > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):hover > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):hover > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n  }\n  :is(a, button):disabled:hover > kol-span-wc,\n  :is(a, button):focus:hover > kol-span-wc {\n    box-shadow: none;\n  }\n  .primary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc {\n    border-color: var(--color-light);\n    box-shadow: none;\n    outline: none;\n  }\n  :is(a, button).hide-label > kol-span-wc {\n    padding: 0.8rem;\n    width: unset;\n  }\n  :is(a, button).hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  :is(a, button).loading > kol-span-wc kol-icon {\n    animation: spin 5s infinite linear;\n  }\n  /** small ghost button */\n  .ghost :is(a, button).small > kol-span-wc {\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .ghost :is(a, button).small > kol-span-wc > span {\n    border-radius: 1.5em;\n    border-style: solid;\n    border-width: var(--border-width);\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n  }\n  .ghost :is(a, button).small:active > kol-span-wc > span,\n  .ghost :is(a, button).small:hover > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:active > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:hover > kol-span-wc > span {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  } /** :is(a,button) with transparent background */\n  :is(a, button).transparent > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent > kol-span-wc > span,\n  :is(a, button).transparent > kol-span-wc {\n    background-color: transparent;\n    border-color: transparent;\n  }\n  .access-key-hint {\n    background: var(--color-mute-variant);\n    border-radius: 3px;\n    color: var(--color-text);\n    padding: 0 0.3em;\n  }\n}";
const buttonCss = css_248z$u;

var css_248z$t = "@layer kol-theme-component {\n  :host > kol-button-group-wc {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing);\n  }\n}";
const buttonGroupCss = css_248z$t;

var css_248z$s = "@layer kol-theme-component {\n  :is(a, button) {\n    color: var(--color-primary);\n    font-style: normal;\n    font-weight: 400;\n    text-decoration-line: underline;\n    font-size: inherit;\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline: calc(var(--border-width) * 2) solid;\n  }\n  :is(a, button):hover {\n    text-decoration-thickness: 0.25em;\n  }\n  :is(a, button):visited {\n    color: var(--visited);\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .skip {\n    left: -99999px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 9999999;\n  }\n  .skip:focus {\n    background: white;\n    left: unset;\n    position: unset;\n  }\n  .access-key-hint {\n    background: var(--color-mute-variant);\n    border-radius: 3px;\n    color: var(--color-text);\n    padding: 0 0.3em;\n  }\n}";
const buttonLinkCss = css_248z$s;

var css_248z$r = "@layer kol-theme-component {\n  /* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */\n  :host > div {\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-light);\n    grid-template-rows: min-content 2fr min-content;\n    box-shadow: 0 0 0.25rem var(--color-subtle);\n    border-radius: var(--border-radius);\n  }\n  :host kol-heading-wc {\n    line-height: 1.75rem;\n  }\n  :host div.header {\n    padding: 1rem 1rem 0.5rem 1rem;\n  }\n  :host div.content {\n    padding: 0.5rem 1rem 1rem;\n    overflow: hidden;\n  }\n  :host div.footer {\n    padding: 0.5rem 1rem;\n  }\n}";
const cardCss = css_248z$r;

var css_248z$q = "@layer kol-theme-component {\n  details > summary {\n    border-radius: var(--border-radius);\n  }\n  details kol-indented-text {\n    margin: 0.25rem 0 0 0.65rem;\n  }\n  kol-icon {\n    font-size: 1.2rem;\n  }\n}";
const detailsCss = css_248z$q;

var css_248z$p = "@layer kol-theme-component {\n  .headline-h1,\n  .headline-h2,\n  .headline-h3,\n  .headline-h4,\n  .headline-h5,\n  .headline-h6 {\n    color: inherit;\n    font-style: normal;\n  }\n  .headline-h1,\n  .headline-h2,\n  .headline-h3 {\n    font-weight: 700;\n  }\n  .headline-h1 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n  }\n  .headline-h2 {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .headline-h3 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n  }\n}";
const headingCss = css_248z$p;

var css_248z$o = "@layer kol-theme-component {\n  :host {\n    width: 1em;\n    height: 1em;\n  }\n  :host > i {\n    width: 1em;\n    height: 1em;\n  }\n}";
const iconCss = css_248z$o;

var css_248z$n = "@layer kol-theme-component {\n  :host > div {\n    background-color: var(--color-light);\n    border-left: none;\n    box-shadow: -2px 0px 0px var(--color-primary-variant);\n    padding: 0 0.5rem;\n    width: 100%;\n  }\n}";
const indentedTextCss = css_248z$n;

var css_248z$m = "@layer kol-theme-component {\n  :host kol-input {\n    display: grid;\n    align-items: center;\n    justify-items: left;\n    width: 100%;\n    min-height: var(--a11y-min-size);\n    gap: 0.4rem;\n  }\n  :host kol-input.default {\n    grid-template-columns: 1.5rem auto;\n  }\n  :host kol-input.switch {\n    grid-template-columns: 3.5rem auto;\n  }\n  :host kol-input.button {\n    gap: 0.4rem 0;\n  }\n  .checkbox-container {\n    justify-content: flex-start;\n  }\n  :host kol-input > div.input {\n    display: inherit;\n    min-height: var(--a11y-min-size);\n    order: 2;\n  }\n  :host kol-input > div.input input {\n    margin: 0px;\n  }\n  :host kol-input > label {\n    cursor: pointer;\n    order: 3;\n  }\n  :host kol-input > kol-alert.error {\n    order: 1;\n    padding-top: calc(var(--spacing) / 2);\n    grid-column: span 2/auto;\n  }\n  :host kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  :host kol-input.error input:focus,\n  kol-input.error select:focus,\n  kol-input.error textarea:focus {\n    outline-color: var(--color-danger) !important;\n  }\n  :host kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  :host input {\n    cursor: pointer;\n    order: 1;\n    width: 100%;\n    border-color: var(--color-subtle);\n    border-width: 2px;\n    border-style: solid;\n    border-radius: var(--border-radius);\n    line-height: 24px;\n    font-size: 1rem;\n  }\n  :host input:hover {\n    border-color: var(--color-primary);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n  }\n  :host input:focus:hover {\n    box-shadow: none;\n  }\n  :host input:active {\n    box-shadow: none;\n  }\n  :host kol-alert {\n    display: block;\n    width: 100%;\n  } /* CHECKBOX */\n  :host kol-input label span {\n    margin-top: 0.125rem;\n  }\n  :host .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  :host kol-input input[type=checkbox] {\n    appearance: none;\n    background-color: white;\n    cursor: pointer;\n    transition: 0.5s;\n  }\n  :host kol-input input[type=checkbox]:checked {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n  :host kol-input.default input[type=checkbox] {\n    border-radius: var(--border-radius);\n    height: 1.5rem;\n    min-width: 1.5rem;\n    width: 1.5rem;\n  }\n  :host kol-input.default input[type=checkbox]:indeterminate {\n    background-color: var(--color-primary);\n  }\n  :host kol-input.default .icon {\n    color: var(--color-light);\n    margin-left: 0.25rem;\n  }\n  :host kol-input.switch input[type=checkbox] {\n    background-color: var(--color-subtle);\n    border-radius: 1.25em;\n    border-width: 0;\n    display: block;\n    height: 1.5em;\n    min-width: 3.5em;\n    position: relative;\n    width: 3.5em;\n  }\n  :host kol-input.switch input[type=checkbox]:before {\n    width: 1.25em;\n    height: 1.25em;\n    left: calc(0.25em - 2px);\n    top: calc(0.25em - 2px);\n    border-radius: 1.25em;\n    background-color: white;\n    position: absolute;\n  }\n  :host kol-input.switch input[type=checkbox]:checked {\n    background-color: var(--color-primary);\n  }\n  :host kol-input.switch input[type=checkbox]:checked:before {\n    transform: translateX(2em);\n  }\n  :host kol-input.switch input[type=checkbox]:indeterminate:before {\n    transform: translateX(1em);\n  }\n  .switch .icon {\n    width: 1.25em;\n    height: 1.25em;\n    left: 2px;\n  }\n  .switch.checked .icon {\n    transform: translate(2em, -50%);\n  }\n  .switch.indeterminate .icon {\n    transform: translate(1em, -50%);\n  }\n  :host .disabled {\n    opacity: 0.33;\n  }\n  .button:focus-within {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n}";
const inputCheckboxCss = css_248z$m;

var css_248z$l = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input[type=color] {\n    border: none;\n    min-height: 40px !important;\n  }\n  input[type=color] {\n    background-color: transparent;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputColorCss = css_248z$l;

var css_248z$k = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputDateCss = css_248z$k;

var css_248z$j = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputEmailCss = css_248z$j;

var css_248z$i = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  kol-input .input input[type=file] {\n    padding-top: calc(0.5em + 2px);\n  }\n  input {\n    border: none;\n  }\n  input[type=file] {\n    background-color: transparent;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(button, input, label, option, select, textarea) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, select, textarea, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputFileCss = css_248z$i;

var css_248z$h = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputNumberCss = css_248z$h;

var css_248z$g = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(button, input, label, option, select, textarea) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, select, textarea, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputPasswordCss = css_248z$g;

var css_248z$f = "@layer kol-theme-component {\n  label {\n    cursor: pointer;\n    display: grid;\n    line-height: 20px;\n    gap: calc(var(--spacing) * 2);\n    width: 100%;\n  }\n  input {\n    cursor: pointer;\n    width: 100%;\n    border-color: var(--color-subtle);\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 5px;\n    line-height: 24px;\n  }\n  input:hover {\n    border-color: var(--color-primary);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n  }\n  input:focus:hover {\n    box-shadow: none;\n  }\n  input:hover {\n    border-color: var(--color-primary);\n  }\n  kol-alert {\n    display: block;\n    width: 100%;\n  }\n  .required legend > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  } /* RADIO */\n  fieldset {\n    border: 0px;\n    margin: 0px;\n    padding: 0px;\n    display: grid;\n    gap: 0.25em;\n  }\n  .radio-input-wrapper {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    gap: 0.5rem;\n    margin: 0;\n    min-height: var(--a11y-min-size);\n    position: relative;\n  }\n  .radio-input-wrapper label {\n    cursor: pointer;\n    display: flex;\n    padding-left: calc(var(--spacing) / 2);\n    width: 100%;\n  }\n  .radio-input-wrapper label span {\n    margin-top: 0.125em;\n  }\n  .radio-input-wrapper input[type=radio] {\n    appearance: none;\n    transition: 0.5s;\n    border-radius: 100%;\n    height: 1.5rem;\n    min-width: 1.5rem;\n    width: 1.5rem;\n  }\n  .radio-input-wrapper input[type=radio]:before {\n    content: \"\";\n    cursor: pointer;\n    border-radius: 100%;\n    display: block;\n  }\n  .radio-input-wrapper input[type=radio]:checked:before {\n    background-color: var(--color-primary);\n  }\n  .radio-input-wrapper input[type=radio]:disabled {\n    cursor: not-allowed;\n    background-color: var(--color-mute-variant);\n  }\n  kol-alert.error {\n    order: 1;\n  }\n  fieldset legend {\n    order: 2;\n    display: contents;\n  }\n  fieldset kol-input {\n    order: 3;\n  }\n  fieldset.error {\n    border-left: 3px solid var(--color-danger);\n    color: var(--color-danger);\n    font-weight: 700;\n    padding-left: 1rem;\n  }\n  fieldset.error input:focus,\n  fieldset.error select:focus,\n  fieldset.error textarea:focus {\n    outline-color: var(--color-danger) !important;\n  }\n  fieldset.error kol-alert.error {\n    margin-left: -0.25em;\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  .disabled {\n    opacity: 0.33;\n  }\n  fieldset.horizontal {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing) calc(var(--spacing) * 2);\n  }\n  fieldset.horizontal legend {\n    display: inline-block;\n    margin-bottom: calc(var(--spacing) / 2);\n  }\n  fieldset .input-slot {\n    gap: var(--spacing);\n  }\n  .radio-input-wrapper label {\n    padding-left: 0;\n  }\n}";
const inputRadioCss = css_248z$f;

var css_248z$e = "@layer kol-theme-component {\n  .inputs-wrapper {\n    gap: 1rem;\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input.icon-left > kol-icon:first-child {\n    margin-right: 0.5rem;\n  }\n  .input.icon-right > kol-icon:last-child {\n    margin-left: 0.5rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(.input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}";
const inputRangeCss = css_248z$e;

var css_248z$d = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, label) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n  }\n}";
const inputTextCss = css_248z$d;

var css_248z$c = "@layer kol-theme-component {\n  :is(a, button) {\n    color: var(--color-primary);\n    font-style: normal;\n    font-weight: 400;\n    text-decoration-line: underline;\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline: var(--border-width) solid;\n  }\n  :is(a, button):hover {\n    text-decoration-thickness: 0.25em;\n  }\n  :is(a, button):visited {\n    color: var(--visited);\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .skip {\n    left: -99999px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 9999999;\n    line-height: 1em;\n  }\n  .skip:focus {\n    background: white;\n    left: unset;\n    position: unset;\n  }\n}";
const linkCss = css_248z$c;

var css_248z$b = "@layer kol-theme-component {\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: calc(var(--border-width) * 2);\n    transition: outline-offset 0.2s linear;\n  }\n  :is(a, button) > kol-span-wc {\n    font-weight: 700;\n    border-radius: var(--a11y-min-size);\n    border-style: solid;\n    outline-width: calc(var(--border-width) * 2);\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px 14px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  :is(a, button):disabled > kol-span-wc {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  .primary :is(a, button) > kol-span-wc,\n  .primary :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .secondary :is(a, button) > kol-span-wc,\n  .secondary :is(a, button):disabled:hover > kol-span-wc,\n  .normal :is(a, button) > kol-span-wc,\n  .normal :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-light);\n    border-color: var(--color-primary);\n    color: var(--color-primary);\n  }\n  .danger :is(a, button) > kol-span-wc,\n  .danger :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n    color: var(--color-light);\n  }\n  .ghost :is(a, button) > kol-span-wc,\n  .ghost :is(a, button):disabled:hover > kol-span-wc {\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n    box-shadow: none;\n    color: var(--color-primary);\n  } /*-----------*/\n  .primary :is(a, button):active > kol-span-wc,\n  .primary :is(a, button):hover > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):hover > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):hover > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n  }\n  :is(a, button):disabled:hover > kol-span-wc,\n  :is(a, button):focus:hover > kol-span-wc {\n    box-shadow: none;\n  }\n  .primary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc {\n    border-color: var(--color-light);\n    box-shadow: none;\n    outline: none;\n  }\n  :is(a, button).hide-label > kol-span-wc {\n    padding: 0.8rem;\n    width: unset;\n  }\n  :is(a, button).hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  :is(a, button).loading > kol-span-wc kol-icon {\n    animation: spin 5s infinite linear;\n  }\n  /** small ghost button */\n  .ghost :is(a, button).small > kol-span-wc {\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .ghost :is(a, button).small > kol-span-wc > span {\n    border-radius: 1.5em;\n    border-style: solid;\n    border-width: var(--border-width);\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n  }\n  .ghost :is(a, button).small:active > kol-span-wc > span,\n  .ghost :is(a, button).small:hover > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:active > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:hover > kol-span-wc > span {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  } /** :is(a,button) with transparent background */\n  :is(a, button).transparent > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent > kol-span-wc > span,\n  :is(a, button).transparent > kol-span-wc {\n    background-color: transparent;\n    border-color: transparent;\n  }\n}";
const linkButtonCss = css_248z$b;

var css_248z$a = "@layer kol-theme-component {\n  :host .overlay .modal {\n    max-height: calc(100% - 32px);\n  }\n}";
const modalCss = css_248z$a;

var css_248z$9 = "@layer kol-theme-component {\n  nav {\n    background-color: var(--color-mute);\n  }\n  ul {\n    list-style: none;\n  }\n  kol-link-wc {\n    display: flex;\n  }\n  .entry-item a,\n  .entry-item .button {\n    align-items: center;\n    color: var(--color-primary);\n    display: flex;\n    gap: 0.5rem;\n    min-height: var(--a11y-min-size);\n    text-decoration: none;\n  }\n  .vertical .entry-item a,\n  .vertical .entry-item .button {\n    border-left: 2px solid transparent;\n    padding-left: 0.5rem;\n  }\n  .horizontal .entry-item a,\n  .horizontal .entry-item .button {\n    padding: 0 1rem;\n  }\n  .vertical .active .entry-item a,\n  .vertical .active .entry-item .button {\n    border-left-color: var(--color-primary);\n  }\n  .entry-item a:focus-visible,\n  .entry-item .button:focus-visible {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .entry-item a:hover {\n    text-decoration: underline;\n  }\n  .list .list {\n    padding-left: 1rem;\n  }\n  .active .entry-item a,\n  .active .entry-item .button {\n    font-weight: bold;\n  }\n  .active .list .entry-item a,\n  .active .list .entry-item .button {\n    font-weight: normal;\n    border-left-color: transparent;\n  }\n  .expand-button {\n    margin-left: 0.5rem;\n  }\n  .expand-button .button:hover {\n    background-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .expand-button .button:focus-visible {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .expand-button .button-inner {\n    justify-content: center;\n  }\n}";
const navCss = css_248z$9;

var css_248z$8 = "@layer kol-theme-component {\n  .button:focus {\n    outline: none;\n  }\n  .button-inner {\n    background-color: var(--color-light);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--color-primary);\n    color: var(--color-primary);\n    font-weight: 700;\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  .button:focus .button-inner {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .button:is(:active, :hover):not(:disabled) .button-inner {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .button:active .button-inner {\n    color: var(--color-light);\n    outline: none;\n  }\n  .button:disabled .button-inner {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n  .selected .button-inner {\n    background-color: var(--color-mute-variant);\n    border-radius: var(--a11y-min-size);\n    border: 0;\n    opacity: 1 !important;\n  }\n}";
const paginationCss = css_248z$8;

var css_248z$7 = "@layer kol-theme-component {\n  :host progress,\n  :host span {\n    display: block;\n    height: 0px;\n    overflow: hidden;\n    width: 0px;\n  }\n  :host svg line:first-child,\n  :host svg circle:first-child {\n    fill: transparent;\n    stroke: var(--color-mute-variant);\n  }\n  :host svg line:last-child,\n  :host svg circle:last-child {\n    fill: transparent;\n    stroke: var(--color-primary);\n  }\n  .cycle .progress {\n    stroke: var(--color-primary-variant);\n  }\n}";
const progressCss = css_248z$7;

var css_248z$6 = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  select {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 2rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  select:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(select, label, option) {\n    opacity: 1;\n  }\n  kol-input.disabled :is(select, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n  }\n  select[multiple] {\n    overflow: auto;\n  }\n  select option {\n    margin: 1px 0;\n    border-radius: var(--border-radius);\n    cursor: pointer;\n  }\n  select option:disabled {\n    cursor: not-allowed;\n  }\n  select:not([multiple]) option {\n    padding: 0.5em;\n  }\n  option:active:not(:disabled),\n  option:checked:not(:disabled),\n  option:focus:not(:disabled),\n  option:hover:not(:disabled) {\n    background: var(--color-primary-variant);\n    color: var(--color-light);\n  }\n}";
const selectCss = css_248z$6;

var css_248z$5 = "@layer kol-theme-component {\n  kol-link-wc > a > kol-span-wc {\n    border-radius: var(--a11y-min-size);\n    border-style: solid;\n    border-width: var(--border-width);\n    gap: calc(var(--spacing) * 2);\n    line-height: 1rem;\n    padding: 8px 14px;\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    color: var(--color-light);\n    cursor: pointer;\n  }\n}";
const skipNavCss = css_248z$5;

var css_248z$4 = "@layer kol-theme-component {\n  .popover {\n    background: #fff;\n  }\n}";
const splitButtonCss = css_248z$4;

var css_248z$3 = "@layer kol-theme-component {\n  :host * {\n    hyphens: var(--hyphens);\n    font-family: var(--font-family);\n    line-height: var(--line-height);\n    word-break: break-word;\n  }\n  :host > div {\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  caption {\n    padding: 0.5rem;\n  }\n  th {\n    font-weight: normal;\n    color: var(--color-primary);\n  }\n  :host table thead tr:first-child th,\n  :host table thead tr:first-child td {\n    border-width: 0;\n    border-top-width: calc(var(--border-width) * 2);\n    border-style: solid;\n    border-color: var(--color-primary-variant);\n  }\n  .table {\n    padding: 0.5rem;\n  }\n  .table:has(caption:focus) {\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: 3px;\n    transition: outline-offset 0.2s linear;\n  }\n  table {\n    width: 100%;\n    border-spacing: 0;\n  }\n  table,\n  :host table thead tr:last-child th,\n  :host table thead tr:last-child td {\n    border-width: 0;\n    border-bottom-width: calc(var(--border-width) * 2);\n    border-style: solid;\n    border-color: var(--color-primary-variant);\n  }\n  th {\n    background-color: var(--color-light);\n  }\n  th div {\n    width: 100%;\n    display: flex;\n    gap: 0.5rem;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n  }\n  tr:nth-child(even) {\n    background-color: var(--color-mute);\n  }\n  th,\n  td {\n    padding: 0.5rem;\n  }\n  th[aria-sort=ascending],\n  th[aria-sort=descending] {\n    font-weight: 700;\n  }\n  @media (min-width: 1024px) {\n    div.pagination kol-pagination {\n      display: flex;\n      align-items: center;\n    }\n  }\n}";
const tableCss = css_248z$3;

var css_248z$2 = "@layer kol-theme-component {\n  button:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  :host kol-button-group-wc {\n    display: inline-flex;\n    gap: 2rem;\n    flex-wrap: wrap;\n  }\n  button {\n    box-sizing: border-box;\n    background-color: transparent;\n    border: 0;\n    border-radius: var(--border-radius);\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 22px;\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    color: var(--color-subtle);\n    padding: 0;\n  }\n  button:hover {\n    color: var(--color-primary);\n  }\n  button.primary,\n  button.selected {\n    color: var(--color-primary);\n  }\n  button:not(.selected) kol-span-wc > span {\n    border-bottom: 0.25em solid transparent;\n  }\n  button.selected kol-span-wc > span {\n    border-bottom: 0.25em solid;\n  }\n  button kol-span-wc > span {\n    gap: 0.5rem;\n  }\n  :host > div > div {\n    padding: 0.25em 0;\n  }\n  div[role=tabpanel] {\n    height: 100%;\n  }\n  div.grid {\n    height: 100%;\n  }\n  :host > .tabs-align-right {\n    display: grid;\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-right kol-button-group-wc {\n    display: grid;\n    order: 2;\n  }\n  :host > .tabs-align-left {\n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n  :host > .tabs-align-left kol-button-group-wc {\n    display: grid;\n    order: 0;\n  }\n  :host > .tabs-align-bottom {\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc {\n    order: 2;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n    margin: 0px 1rem 0px 0px;\n  }\n  :host > .tabs-align-bottom > kol-button-group-wc > div > div {\n    margin: 0px 1rem;\n  }\n  :host > .tabs-align-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n  :host > .tabs-align-top kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-top kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n    margin: 0px 1rem 0px 0px;\n  }\n  :host > .tabs-align-top > kol-button-group-wc > div > div {\n    margin: 0px 1rem;\n  }\n  :host > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left {\n    grid-template-columns: auto 1fr;\n  }\n  :host > div.tabs-align-right {\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-left kol-button-group-wc,\n  :host > .tabs-align-top kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc,\n  :host > .tabs-align-right kol-button-group-wc {\n    order: 1;\n  }\n  :host > .tabs-align-left kol-button-group-wc,\n  :host > .tabs-align-right kol-button-group-wc {\n    gap: inherit;\n  }\n  :host > div.tabs-align-left kol-button-group-wc > div,\n  :host > div.tabs-align-left kol-button-group-wc > div > div,\n  :host > div.tabs-align-right kol-button-group-wc > div,\n  :host > div.tabs-align-right kol-button-group-wc > div > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n  :host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n    width: 100%;\n  }\n  :host > div.tabs-align-bottom kol-button-group-wc div,\n  :host > div.tabs-align-top kol-button-group-wc div {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  :host kol-button-group-wc button {\n    border: none;\n  }\n}";
const tabsCss = css_248z$2;

var css_248z$1 = "@layer kol-theme-component {\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .counter {\n    order: 4;\n  }\n  kol-input .hint {\n    order: 5;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  textarea {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  textarea:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: \"*\";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  .disabled {\n    opacity: 0.33;\n  }\n  select[multiple],\n  textarea {\n    overflow: auto;\n  }\n  textarea {\n    display: block;\n  }\n  .input {\n    position: relative;\n  }\n}";
const textareaCss = css_248z$1;

var css_248z = "@layer kol-theme-component {\n  :host {\n    top: 1rem;\n    right: 1rem;\n    width: 440px;\n  }\n  .toast {\n    margin-top: 1rem;\n  }\n}";
const toastContainerCss = css_248z;

const DEFAULT = KoliBri.createTheme("default", {
  GLOBAL: globalCss,
  "KOL-ABBR": abbrCss,
  "KOL-ACCORDION": accordionCss,
  "KOL-ALERT": alertCss,
  "KOL-BADGE": badgeCss,
  "KOL-BREADCRUMB": breadcrumbCss,
  "KOL-BUTTON": buttonCss,
  "KOL-BUTTON-GROUP": buttonGroupCss,
  "KOL-BUTTON-LINK": buttonLinkCss,
  "KOL-CARD": cardCss,
  "KOL-DETAILS": detailsCss,
  "KOL-HEADING": headingCss,
  "KOL-ICON": iconCss,
  "KOL-INDENTED-TEXT": indentedTextCss,
  "KOL-INPUT-CHECKBOX": inputCheckboxCss,
  "KOL-INPUT-COLOR": inputColorCss,
  "KOL-INPUT-DATE": inputDateCss,
  "KOL-INPUT-EMAIL": inputEmailCss,
  "KOL-INPUT-FILE": inputFileCss,
  "KOL-INPUT-NUMBER": inputNumberCss,
  "KOL-INPUT-PASSWORD": inputPasswordCss,
  "KOL-INPUT-RADIO": inputRadioCss,
  "KOL-INPUT-RANGE": inputRangeCss,
  "KOL-INPUT-TEXT": inputTextCss,
  "KOL-LINK": linkCss,
  "KOL-LINK-BUTTON": linkButtonCss,
  "KOL-MODAL": modalCss,
  "KOL-NAV": navCss,
  "KOL-PAGINATION": paginationCss,
  "KOL-PROGRESS": progressCss,
  "KOL-SELECT": selectCss,
  "KOL-SKIP-NAV": skipNavCss,
  "KOL-SPLIT-BUTTON": splitButtonCss,
  "KOL-TABLE": tableCss,
  "KOL-TABS": tabsCss,
  "KOL-TEXTAREA": textareaCss,
  "KOL-TOAST-CONTAINER": toastContainerCss
});

const css$1 = (input) => input.join(``);

const ECL_EC = KoliBri.createTheme("ecl-ec", {
  GLOBAL: css$1`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #004494;
			--color-yellow: #ffd617;
			--color-grey: #404040;
			--color-blue-130: #002f67;
			--color-blue-120: #003776;
			--color-blue-110: #003d84;
			--color-blue-100: var(--color-blue);
			--color-blue-75: #4073af;
			--color-blue-50: #bfd0e4;
			--color-blue-25: #bfd0e4;
			--color-blue-5: #f2f5f9;
			--color-yellow-120: #f8ae21;
			--color-yellow-110: #fbc11d;
			--color-yellow-100: var(--color-yellow);
			--color-yellow-75: #ffde39;
			--color-yellow-50: #ffe879;
			--color-yellow-25: #fff4bb;
			--color-grey-100: var(--color-grey);
			--color-grey-75: #707070;
			--color-grey-50: #9f9f9f;
			--color-grey-25: #cfcfcf;
			--color-grey-20: #d9d9d9;
			--color-grey-15: #e3e3e3;
			--color-grey-10: #ebebeb;
			--color-grey-5: #f5f5f5;
			--color-grey-3: #f9f9f9;
			--color-blue-n: #006fb4;
			--color-orange: #f29527;
			--color-green: #467a39;
			--color-red: #da2131;
			--color-red-1xx: #981722;
			--color-black: #000;
			--color-white: #fff;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight: 400;
			--font-weight-bold: 600;
			--line-height: 1.5em;
			--line-height-heading: 1.2em; /* ?! */
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
			font-family: var(--font-family);
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
	`,
  "KOL-HEADING": css$1`
		.headline-h1 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h2 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h3 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h4 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h5 {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.headline-h6 {
			color: rgb(234, 0, 255);
		}
	`,
  "KOL-ACCORDION": css$1`
		:host > div {
			background-color: var(--color-grey-5);
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
		}
		:host > div .headline button {
			text-align: left;
			width: 100%;
			padding: 0 var(--spacing-m);
			display: flex;
			place-items: center;
		}
		:host > div .headline button kol-icon {
			margin-bottom: 0.75rem;
			margin-inline-end: 1rem;
			margin-inline-start: 0;
			margin-top: 0.75rem;
		}
		:host > div .headline button span {
			color: var(--color-grey);
			font-weight: var(--font-weight-bold);
			padding: 0.75rem 0;
			width: 100%;
		}
		:host > div[part*='open'] .headline button span {
			border-bottom: 1px solid var(--color-grey);
		}
		:host > div .headline button:focus,
		:host > div .headline button:hover {
			background-color: var(--color-grey-25);
		}
		:host > div .headline button:focus {
			outline: 2px solid var(--color-blue);
			outline-offset: -2px;
		}
		.content {
			padding: var(--spacing-s) var(--spacing-m);
		}
	`,
  "KOL-INDENTED-TEXT": css$1`
		:host > div {
			border-end-start-radius: 0;
			border-inline-start: 10px solid var(--color-yellow);
			border-start-start-radius: 0;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
			margin: 0;
		}
	`,
  "KOL-BUTTON": css$1`
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,
  "KOL-LINK-BUTTON": css$1`
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			appearance: none;
			background: none;
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,
  "KOL-BADGE": css$1`
		:host > span {
			font: normal normal var(--font-weight) 1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,
  "KOL-ALERT": css$1`
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,
  "KOL-TABS": css$1`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,
  "KOL-LINK": css$1`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,
  "KOL-BUTTON-LINK": css$1`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,
  "KOL-BREADCRUMB": css$1`
		:host {
			font:
				normal normal 400 0.875rem/1rem arial,
				sans-serif;
			font-weight: var(--font-weight-bold);
		}
		kol-icon::part(icon separator)::before {
			color: var(--color-blue);
		}
		li:last-child {
			color: var(--color-grey-75);
		}
		kol-icon[exportparts*='separator'] {
			margin-inline-end: 0.5rem;
			margin-inline-start: 0.5rem;
			padding: 0;
		}
	`,
  "KOL-DETAILS": css$1`
		details > kol-indented-text {
			margin: 0.175rem;
			padding: 0;
		}
	`,
  "KOL-PROGRESS": css$1`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-grey-25);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-blue-130);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,
  "KOL-SPIN": css$1`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-75);
			}
		}
	`,
  "KOL-PAGINATION": css$1`
		:host {
			display: grid;
		}
		.button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		.button-inner {
			background-color: var(--color-yellow);
			border: 2px solid var(--color-yellow);
			color: var(--color-black);
			font-weight: var(--font-weight-bold);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0.25em 0.75em;
		}
		.button:not(:disabled):hover .button-inner {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.button:focus .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			opacity: 1 !important;
			text-decoration: underline;
		}
	`,
  "KOL-INPUT-CHECKBOX": css$1`
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}

		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
	`,
  "KOL-INPUT-COLOR": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-CARD": `:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: white;
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25em;
		line-height: 1.75em;
	}
	:host div.header {
		padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
	}
	:host div.content {
		padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
		overflow: hidden;
	}
	:host div.footer {
		padding: var(--spacing-xs) var(--spacing-m);
	}
	:host > div > div.content + div.footer {
		border-top: 2px solid var(--color-blue);
	}`,
  "KOL-BUTTON-GROUP": `:host > kol-button-group-wc {
		display: inline-flex;
		flex-wrap: wrap;
		gap: var(--spacing-2xs);
	}`,
  "KOL-INPUT-RADIO": `fieldset {
		border: 0;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.input-slot {
		gap: 0.25rem;
	}
	fieldset kol-alert {
		order: 1;
	}
	fieldset .hint {
		order: 2;
	}
	fieldset kol-alert {
		order: 3;
	}
	fieldset kol-input {
		order: 4;
	}
	.radio-input-wrapper {
    display: flex;
		align-items: center;
	}
	.radio-label {
		padding-left: 0.5rem;
	}
	input[type="radio"] {
		border: 2px solid var(--color-grey-75);
	}
	input[type="radio"]:before {
		display: none;
	}
	input[type="radio"]:checked {
		border-color: var(--color-blue);
		border-width: 7px;
	}
	input[type="radio"]:focus {
		outline: 2px solid var(--color-blue);
		outline-offset: 2px;
	}
	input[type="radio"]:not(:disabled):hover {
		border-color: var(--color-blue);
	}
	label,
	legend {
		color: var(--color-grey);
	}
	legend {
		font-weight: var(--font-weight-bold);
	}
	.error input[type="radio"] {
		border: 2px solid var(--color-red);
	}
	.error input[type="radio"]:before {
		display: none;
	}
	.error input[type="radio"]:checked {
		border-color: var(--color-red);
		border-width: 7px;
	}
	.error input[type="radio"]:not(:disabled):hover {
		border-color: var(--color-red-1xx);
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-xs));
		order: 1;
		width: 100%;
	}
	.hint {
		font-size: 0.875rem;
		order: 4;
	}`,
  "KOL-INPUT-RANGE": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input:not([type="range"]):focus,
	select:focus,
	textarea:focus {
		border-top: 1px solid var(--color-blue);
		border-bottom: 1px solid var(--color-blue);
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-TEXT": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input:not([type="range"]):focus,
	select:focus,
	textarea:focus {
		border-top: 1px solid var(--color-blue);
		border-bottom: 1px solid var(--color-blue);
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-PASSWORD": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-NUMBER": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-DATE": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-EMAIL": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-INPUT-FILE": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-SELECT": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-TEXTAREA": `kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
		padding: 1px 0.5em;
	}
	.counter {
		order: 5;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,
  "KOL-ICON": `:host,
	:host > i {
		height: 1em;
		width: 1em;
	}`,
  "KOL-TABLE": `:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	caption {
		padding: 0.5em;
	}
	th {
		font-weight: normal;
		color: var(--color-midnight);
	}
	:host table thead tr:first-child th,
	:host table thead tr:first-child td {
		border-width: 0;
		border-top-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	.table {
		padding: 0.5em;
	}
	.table:has(caption:focus) {
		outline-color: var(--color-blue);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 2px;
	}
	table {
		width: 100%;
		border-spacing: 0;
	}
	table,
	:host table thead tr:last-child th,
	:host table thead tr:last-child td {
		border-width: 0;
		border-bottom-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	th {
		background-color: var(--color-white);
	}
	th div {
		width: 100%;
		display: flex;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	tbody tr:nth-child(odd) {
		background-color: var(--color-grey-10);
	}
	th,
	td {
		padding: 0.5em;
	}
	th[aria-sort="ascending"],
	th[aria-sort="descending"] {
		font-weight: 700;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,
  "KOL-NAV": `.list {
		display: flex;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	.list.vertical {
		flex-direction: column;
	}
	.entry {
		display: flex;
	}
	.entry kol-button-wc:first-child,
	.entry kol-link-wc,
	.entry kol-span-wc {
		flex-grow: 1;
	} /* custom. */
	nav {
		background-color: var(--color-blue);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.expand-button button {
		background-color: var(--color-blue-130);
		margin: auto;
		height: 100%;
	}
	kol-span-wc {
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		color: var(--color-white);
		font-size: 18px;
		justify-items: start;
		padding: 1rem;
		height: 100%;
	}
	li > ul,
	li + li {
		border-color: var(--color-blue-75);
		border-style: solid;
		border-width: 0;
		border-top-width: 2px;
	}
	a {
		text-decoration: none;
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
		border-color: var(--color-white);
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
	:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
		text-decoration: underline;
	}
	div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab6";
	}
	.expanded > div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab4";
	}`,
  "KOL-SKIP-NAV": `kol-link-wc > a > kol-span-wc {
		border-radius: 0;
		border-style: solid;
		border-width: 2px;
		font-weight: var(--font-weight-bold);
		gap: 0.5rem;
		line-height: 1rem;
		padding: 0.25em 0.75em;
		background-color: var(--color-blue);
		border-color: var(--color-blue);
		color: var(--color-white);
		cursor: pointer;
	}`,
  "KOL-SPLIT-BUTTON": `.popover {
		background: #fff;
	}`,
  "KOL-TOAST-CONTAINER": `:host {
		top: 1rem;
		right: 1rem;
		width: 440px;
		max-width: 100%;
	}
	.toast {
		display: block;
		background: #fff;
		margin-top: 1rem;
	}
	.alert {
		display: block;
	}`
});

const ECL_EU = KoliBri.createTheme("ecl-eu", {
  GLOBAL: css$1`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #0e47cb;
			--color-blue-140: #082b7a;
			--color-blue-130: #082b7a;
			--color-blue-120: #0b39a2;
			--color-blue-110: #0d40b7;
			--color-blue-100: #0e47cb;
			--color-blue-80: #3e6cd5;
			--color-blue-60: #6e91e0;
			--color-blue-40: #9fb5ea;
			--color-blue-20: #cfdaf5;
			--color-blue-10: #e7edfa;
			--color-blue-5: #f3f6fc;
			--color-yellow: #ffcc00;
			--color-yellow-140: #997a00;
			--color-yellow-130: #b38f00;
			--color-yellow-120: #cca300;
			--color-yellow-110: #e6b800;
			--color-yellow-100: #ffcc00;
			--color-yellow-80: #ffd633;
			--color-yellow-60: #ffe066;
			--color-yellow-40: #ffeb99;
			--color-yellow-20: #fff5cc;
			--color-yellow-10: #fffae6;
			--color-yellow-5: #fffcf2;
			--color-grey: #262b38;
			--color-grey-140: #171a22;
			--color-grey-130: #1b1e27;
			--color-grey-120: #1e222d;
			--color-grey-110: #222732;
			--color-grey-100: #262b38;
			--color-grey-80: #515560;
			--color-grey-75: #515560;
			--color-grey-60: #7d8088;
			--color-grey-40: #a8aaaf;
			--color-grey-20: #d4d5d7;
			--color-grey-10: #e9eaeb;
			--color-grey-5: #f4f5f5;
			--color-grey-3: #f9f9f9;
			--color-orange: #ff6200;
			--color-orange-140: #993b00;
			--color-orange-130: #b34500;
			--color-orange-120: #cc4e00;
			--color-orange-110: #e65800;
			--color-orange-100: #e65800;
			--color-orange-80: #ff8133;
			--color-orange-60: #ff914d;
			--color-orange-40: #ffb180;
			--color-orange-20: #ffd0b3;
			--color-orange-10: #ffefe6;
			--color-orange-5: #fff7f2;
			--color-green: #00c991;
			--color-green-140: #007957;
			--color-green-130: #008d66;
			--color-green-120: #008d66;
			--color-green-110: #00b583;
			--color-green-100: #00c991;
			--color-green-80: #00c991;
			--color-green-60: #66dfbd;
			--color-green-40: #99e9d3;
			--color-green-20: #ccf4e9;
			--color-green-10: #e6faf4;
			--color-green-5: #f2fcf9;
			--color-red: #ef0044;
			--color-red-140: #8f0029;
			--color-red-130: #a70030;
			--color-red-120: #bf0036;
			--color-red-110: #d7003d;
			--color-red-100: #ef0044;
			--color-red-80: #f23369;
			--color-red-60: #f5668f;
			--color-red-40: #f999b4;
			--color-red-20: #fcccda;
			--color-red-10: #fde6ec;
			--color-red-5: #fef2f5;
			--color-accent-blue-100: #00e9ff;
			--color-accent-blue-30: #b3f8ff;
			--color-purple: #510dcd;
			--color-purple-140: #31087b;
			--color-purple-130: #390990;
			--color-purple-120: #410aa4;
			--color-purple-110: #490cb9;
			--color-purple-100: #510dcd;
			--color-purple-80: #743dd7;
			--color-purple-60: #976ee1;
			--color-purple-40: #bf9af1;
			--color-purple-20: #dccff5;
			--color-purple-10: #eee7fa;
			--color-purple-5: #eee7fa;
			--color-white: #fff;
			--color-black: #000;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight-regular: 400;
			--font-weight-bold: 700;
			--line-height-regular: 1.5em;
			--line-height-heading: 1.2em;
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
			font-family: var(--font-family);
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
		p.l,
		p.lead {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		p,
		p.m,
		p.medium {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		p.s,
		p.small {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
		p.xs,
		p.extra-small {
			font-size: 0.75rem;
			line-height: 1.25rem;
		}
	`,
  "KOL-HEADING": css$1`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			font-weight: var(--font-weight-bold);
		}
		.headline-h1 {
			font-size: 2.625rem;
			line-height: 3.25rem;
		}
		.headline-h2 {
			font-size: 2.25rem;
			line-height: 2.75rem;
		}
		.headline-h3 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h4 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h5 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h6 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
	`,
  "KOL-ACCORDION": css$1`
		.accordion,
		div[part*='accordion'] {
			border-radius: 8px;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
			margin: 0;
			overflow: hidden;
		}
		.headline {
			font-size: 2em;
		}
		div[part*='close'] .headline button {
			border-radius: 8px;
		}
		div[part*='open'] .headline button {
			border-start-end-radius: 8px;
			border-start-start-radius: 8px;
		}
		.headline button {
			outline-offset: -1px;
			border: 0;
			border-bottom-color: #cfdaf5;
			border-bottom-style: solid;
			border-bottom-width: 2px;
			color: #171a22;
			position: relative;
			display: block;
			font:
				normal normal 400 1.125rem/1.75rem arial,
				sans-serif;
			padding: 1.5rem;
			text-align: start;
			width: 100%;
		}
		.headline button::before {
			background-color: #fc0;
			border-end-end-radius: 2px;
			border-end-start-radius: 2px;
			content: '';
			height: 4px;
			position: absolute;
			left: 1.5rem;
			top: 0;
			width: 32px;
		}
		.headline button kol-icon {
			margin-right: 0.75rem;
		}
		.headline button kol-icon::part(icon)::before {
			color: #0e47cb;
			font-weight: 900;
			font-family: 'Font Awesome 6 Free';
		}
		.open .headline button kol-icon::part(icon)::before {
			content: '\\f077';
		}
		:not(.open) .headline button kol-icon::part(icon)::before {
			content: '\\f078';
		}
		.content,
		div[part='content'] {
			-webkit-border-start: 4px solid #0e47cb;
			-webkit-margin-start: 0;
			border-bottom: 2px solid #cfdaf5;
			border-inline-start: 4px solid #0e47cb;
			color: #515560;
			font:
				normal normal 400 1rem/1.5rem arial,
				sans-serif;
			margin-inline-start: 0;
			padding: 1.5rem;
		}
		kol-span-wc > span {
			align-items: baseline;
		}
	`,
  "KOL-INDENTED-TEXT": css$1`
		:host > div {
			-webkit-border-start: 8px solid #0e47cb;
			-webkit-padding-start: 1.5rem;
			border-end-start-radius: 4px;
			border-inline-start: 8px solid #0e47cb;
			border-start-start-radius: 4px;
			display: inline-block;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
		}
	`,
  "KOL-BUTTON": css$1`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,
  "KOL-LINK-BUTTON": css$1`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,
  "KOL-BUTTON-GROUP": css$1`
		:host > kol-button-group-wc {
			gap: var(--spacing-2xs);
		}
	`,
  "KOL-PAGINATION": css$1`
		:host {
			display: grid;
		}
		.button {
			--kolibri-spacing: 0.25rem;
			border-radius: 4px;
			&:focus {
				outline: none;
			}
		}
		.button-inner {
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem Arial,
				sans-serif;
			padding: 0.75rem;
			background-color: #fc0;
			color: #171a22;
		}
		.button:focus-visible .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		button:not(:disabled):active .button-inner,
		button:not(:disabled):hover .button-inner {
			background-color: #fc0;
			border-color: #fc0;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.button:disabled .button-inner {
			opacity: 0.5;
			cursor: not-allowed;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			font-weight: bold;
			text-decoration: underline;
			opacity: 1 !important;
		}
	`,
  "KOL-NAV": css$1`
		.list {
			display: flex;
			list-style: none;
			margin: 0px;
			padding: 0px;
		}
		.list.vertical {
			flex-direction: column;
		}
		.entry {
			display: flex;
		}
		.entry kol-button-wc:first-child,
		.entry kol-link-wc,
		.entry kol-span-wc {
			flex-grow: 1;
		} /* custom. */
		nav {
			background-color: var(--color-blue);
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.expand-button button {
			background-color: var(--color-blue-130);
			margin: auto;
			height: 100%;
		}
		kol-span-wc {
			border-color: transparent;
			border-style: solid;
			border-width: 2px;
			color: var(--color-white);
			font-size: 18px;
			justify-items: start;
			padding: 1rem;
			height: 100%;
		}
		li > ul,
		li + li {
			border-color: var(--color-blue-75);
			border-style: solid;
			border-width: 0;
			border-top-width: 2px;
		}
		a {
			text-decoration: none;
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
			border-color: var(--color-white);
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
		:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
			text-decoration: underline;
		}
		div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab6';
		}
		.expanded > div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab4';
		}
	`,
  "KOL-BADGE": css$1`
		:host > span {
			font: normal normal var(--font-weight) 0.875rem/1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,
  "KOL-ALERT": css$1`
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,
  "KOL-CARD": css$1`
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
		}
		:host kol-heading-wc {
			display: inline-flex;
			font-style: normal;
			font-weight: 700;
			font-size: 1.25em;
			line-height: 1.75em;
		}
		:host div.header {
			padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
		}
		:host div.content {
			padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
			overflow: hidden;
		}
		:host div.footer {
			padding: var(--spacing-xs) var(--spacing-m);
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-blue);
		}
	`,
  "KOL-INPUT-CHECKBOX": css$1`
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}
		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,
  "KOL-INPUT-COLOR": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-FILE": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			margin: 1px;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-EMAIL": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-NUMBER": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-DATE": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-PASSWORD": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-INPUT-TEXT": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-SELECT": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-TEXTAREA": css$1`
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		kol-input .counter {
			order: 5;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,
  "KOL-TABLE": css$1`
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5em;
		}
		th {
			font-weight: normal;
			color: var(--color-midnight);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		.table {
			padding: 0.5em;
		}
		.table:has(caption:focus) {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		th {
			background-color: var(--color-white);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		tbody tr:nth-child(odd) {
			background-color: var(--color-grey-10);
		}
		th,
		td {
			padding: 0.5em;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,
  "KOL-TABS": css$1`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,
  "KOL-LINK": css$1`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,
  "KOL-BUTTON-LINK": css$1`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,
  "KOL-SPIN": css$1`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-80);
			}
		}
	`,
  "KOL-INPUT-RADIO": css$1`
		fieldset {
			border: 0;
			gap: 0.5rem;
			flex-wrap: wrap;
		}
		fieldset kol-alert {
			order: 1;
		}
		fieldset .hint {
			order: 2;
		}
		fieldset kol-alert {
			order: 3;
		}
		fieldset kol-input {
			order: 4;
		}
		.radio-input-wrapper {
			display: flex;
			align-items: center;
		}
		.radio-label {
			padding-left: 0.5rem;
		}
		input[type='radio'] {
			outline: 2px solid var(--color-grey-75);
			outline-offset: 2px;
		}
		input[type='radio']:before {
			display: none;
		}
		input[type='radio']:checked {
			border-color: var(--color-blue);
			border-width: 7px;
		}
		input[type='radio']:focus {
			outline-color: var(--color-blue);
		}
		input[type='radio']:not(:disabled):hover {
			border-color: var(--color-blue);
		}
		label,
		legend {
			color: var(--color-grey);
		}
		legend {
			font-weight: var(--font-weight-bold);
		}
		.error input[type='radio'] {
			border: 2px solid var(--color-red);
		}
		.error input[type='radio']:before {
			display: none;
		}
		.error input[type='radio']:checked {
			border-color: var(--color-red);
			border-width: 7px;
		}
		.error input[type='radio']:not(:disabled):hover {
			border-color: var(--color-red-1xx);
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-xs));
			order: 1;
			width: 100%;
		}
		.hint {
			font-size: 0.875rem;
			order: 4;
		}
	`,
  "KOL-INPUT-RANGE": css$1`
		.inputs-wrapper {
			gap: 1rem;
		}
	`,
  "KOL-SKIP-NAV": css$1`
		kol-link-wc > a > kol-span-wc {
			border-radius: 4px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 0.75rem;
			background-color: #0e47cb;
			color: #fff;
			cursor: pointer;
		}
	`,
  "KOL-SPLIT-BUTTON": css$1`
		.popover {
			background: #fff;
		}
	`,
  "KOL-TOAST-CONTAINER": css$1`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			display: block;
			background: #fff;
			margin-top: 1rem;
		}
		.alert {
			display: block;
		}
	`
});

const css = (input) => input.join(``);

const ITZBund = KoliBri.createTheme("itzbund", {
  GLOBAL: css`
		:host {
			--border-color: var(--color-anthrazit);
			--border-radius: 0.125rem;
			--color-anthrazit: #333;
			--color-jade: #f3f7fb;
			--color-weiss: #fff;
			--color-petrol: #007a89;
			--color-achat: #0b4d59;
			--color-teal: #056773;
			--color-fluorit: #66ddec;
			--color-rotton: rgba(188, 0, 0, 1);
			--color-rotton-20: rgba(188, 0, 0, 0.2);
			--color-gras: #138510;
			--color-warn: #f0541e;
			--color-blut: var(--color-rotton);
			--color-input-bg-default: #e8edf2;
			--gradient-petrol-achat: linear-gradient(67deg, var(--color-petrol), var(--color-achat));
			--color-citrin: #d4c912;
			--color-umber: #494500;
			--color-gelb: #fff443;
			--color-lichtgelb: #eeff6c;
			--gradient-gelb-citrin: linear-gradient(67deg, var(--color-gelb), var(--color-citrin));
			--font-family-sans: BundesSans Web;
			--font-family-serif: BundesSerif Web;
			--font-size: 16px;
			--spacing: 0.125em;
			--kolibri-spacing: calc(2 * var(--spacing));
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			font-family: var(--font-family); /* font-size: var(--font-size); */
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		a:focus,
		button:focus,
		input:focus,
		select:focus,
		summary:focus,
		textarea:focus {
			cursor: pointer;
			outline-color: var(--color-petrol);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.25em;
		}
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
	`,
  "KOL-BUTTON": css`
		button {
			background-color: transparent;
		}
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,
  "KOL-BUTTON-GROUP": css`
		:host > kol-button-group-wc {
			display: inline-flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	`,
  "KOL-LINK-BUTTON": css`
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,
  "KOL-PAGINATION": css`
		.button {
			border-radius: 2rem;
			font-family: var(--font-family-sans);
		}
		.button-inner {
			background-color: var(--color-weiss);
			border-radius: 2rem;
			border: var(--spacing) solid var(--color-anthrazit);
			color: var(--color-anthrazit);
			font-size: inherit;
			gap: 0.25em;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0 1rem;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
			transition-timing-function: ease-in-out;
		}
		.hide-label .button-inner {
			padding: 0 0.5rem;
		}
		.button:not(:disabled):hover .button-inner,
		.button:focus .button-inner {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
			color: var(--color-weiss);
			font-weight: bold;
			opacity: 1 !important;
			text-decoration: underline;
		}
	`,
  "KOL-BUTTON-LINK": css`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,
  "KOL-INPUT-TEXT": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-INPUT-PASSWORD": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-INPUT-NUMBER": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-INPUT-DATE": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-INPUT-EMAIL": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-INPUT-FILE": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-TEXTAREA": css`
		textarea:hover,
		textarea:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		textarea.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		textarea {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		textarea::placeholder {
			color: var(--default-border);
		}
		textarea:disabled {
			cursor: not-allowed;
		}
		textarea:disabled,
		textarea:read-only {
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		.kol-required span::after {
			content: '*';
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
	`,
  "KOL-ALERT": css`
		:host {
			--kolibri-border-width: 1px;
		}
		:host .default {
			border-color: var(--color-anthrazit);
		}
		.heading {
			gap: 0.5rem;
		}
		.default .heading-icon {
			background-color: var(--color-anthrazit);
		}
		:host .error {
			border-color: var(--color-rotton);
		}
		.error .heading-icon {
			background-color: var(--color-rotton);
		}
		:host .info {
			border-color: var(--color-petrol);
		}
		.info .heading-icon {
			background-color: var(--color-petrol);
		}
		:host .success {
			border-color: var(--color-gras);
		}
		:host .success .heading-icon {
			background-color: var(--color-gras);
		}
		:host .warning {
			border-color: var(--color-warn);
		}
		.warning .heading-icon {
			background-color: var(--color-warn);
		}
	`,
  "KOL-HEADING": css`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			line-height: 1em;
			margin: 0;
			padding: 0;
		}
		.headline-h1 {
			font-family: var(--font-family-serif);
			font-size: 54px;
			font-weight: bold;
		}
		.headline-h2 {
			font-family: var(--font-family-serif);
			font-size: 32px;
			font-weight: bold;
		}
		.headline-h3 {
			font-family: var(--font-family-serif);
			font-size: 26px;
			font-weight: bold;
		}
		.headline-h4 {
			font-family: var(--font-family-serif);
			font-size: 20px;
			font-weight: normal;
		}
		.headline-h5 {
			font-family: var(--font-family-serif);
			font-size: 17px;
			font-weight: bold;
		}
		.headline-h6 {
			font-family: var(--font-family-sans);
			font-size: 17px;
			font-weight: normal;
		}
	`,
  "KOL-BADGE": css`
		:host {
			display: inline-block;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
		}
		:host > span kol-button-wc {
			border-left: 1px solid rgba(0, 0, 0, 0.25);
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.5rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
		:host button {
			border-radius: 0 var(--spacing) var(--spacing) 0;
		}
	`,
  "KOL-INDENTED-TEXT": css`
		:host > div {
			background: var(--color-white);
			border-left: none;
			box-shadow: -4px 0px 0px var(--color-petrol);
			padding: 0.25em 0.5em;
			width: 100%;
		}
	`,
  "KOL-LINK": css`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,
  "KOL-BREADCRUMB": css`
		li > span {
			font-weight: bold;
			/* text-transform: uppercase; */
		}
	`,
  "KOL-SPIN": css`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`,
  "KOL-PROGRESS": css`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-fluorit);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-achat);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,
  "KOL-SELECT": css`
		select:hover,
		select:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		select.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		select {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		select:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		option {
			height: 2em;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
	`,
  "KOL-INPUT-COLOR": css`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,
  "KOL-ACCORDION": css`
		:host > div {
			font-family: var(--font-family);
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: grid;
			border-color: var(--kolibri-border-color);
			border-width: 1px;
			border-style: solid;
			border-radius: 0.25rem;
		}
		:host > div > kol-heading-wc {
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		:host > div > kol-heading-wc button {
			cursor: pointer;
			width: 100%;
			margin: 0;
			display: flex;
			gap: 0.5em;
			border: 0;
			align-items: center;
			overflow: hidden;
			font-size: inherit;
			line-height: 1.75em;
			background-color: transparent;
			padding: 0.5rem;
		}
		:host > div[part*='open'] > kol-heading-wc button {
			padding-bottom: 0;
		}
		:host > div[part*='open'] > kol-heading-wc button kol-icon {
			width: 1em;
		}
		:host > div div[part='header'],
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
		}
		:host > div div[part='header'] {
			padding-left: 2rem;
		}
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
			padding: 0 1rem 1rem 2.25rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			color: var(--color-midnight);
		}
		button {
			cursor: pointer;
			font-weight: inherit;
			font-size: inherit;
			line-height: inherit;
		}
		.content {
			padding: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(close)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f077';
		}
		:host > div > kol-heading-wc button kol-icon::part(open)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f078';
		}
	`,
  "KOL-TABLE": css`
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		:host > div:last-child {
			border-style: solid;
			border-width: 1px;
			border-color: var(--border-color);
		}
		.table {
			padding: 0.5em;
		}
		.table:has(caption:focus) {
			outline-color: var(--color-petrol);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
		}
		table,
		tr,
		th,
		td {
			border: 0 solid var(--border-color);
		}
		tr {
			border-top-width: 1px;
		}
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		th,
		td {
			border-right-width: 1px;
			padding: 0.25em 0.5em;
		}
		th {
			background-color: #eee;
		}
		.table-sort-button .button {
			font-weight: bold;
		}
		@media (min-width: 1024px) {
			:host > div.pagination,
			:host > div.pagination > div:last-child {
				grid-auto-flow: column;
			}
			:host > div.pagination kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,
  "KOL-NAV": css`
		:host .hidden {
			display: none;
		}
		:host > div > nav ul {
			list-style: none;
			margin: 0px;
			padding: 0px;
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
		}
		:host > div > nav ul > li {
			border-radius: var(--border-radius);
			overflow: hidden;
			padding: 0.125em;
		}
		:host > div > nav ul > li[part*='vertical'] + li {
			border-radius: 0;
			border-top: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='vertical selected'] {
			border-right: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li[part*='horizontal'] + li {
			border-radius: 0;
			border-left: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='horizontal selected'] {
			border-bottom: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li > div {
			height: 100%;
		}
		:host > div > nav kol-link-wc {
			width: 100%; /*height: 100%;font-weight: 600;*/
			display: block;
		}
		:host > div > nav kol-link-wc a {
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
			border: 1px solid transparent;
			grid: flex;
			line-height: 2em;
			padding: 0.5em;
			color: white;
			height: 100%;
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			cursor: pointer;
			text-decoration: inherit;
		}
		:host > div > nav kol-link-wc[exportparts*='selected'] a {
			background-color: var(--color-achat);
			font-weight: 700;
		}
		:host > div > nav kol-link-wc a kol-icon.mr-2 {
			margin-right: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a kol-icon.ml-2 {
			margin-left: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a:focus,
		:host > div > nav kol-link-wc a:hover {
			border: 1px solid white;
			background-color: var(--color-fluorit);
			color: var(--color-anthrazit);
		} /* compact button */
		:host > div > div:last-child {
			margin-top: 0.5em;
			width: 100%;
			text-align: center;
		}
		:host > div > nav kol-link-wc a.text-center {
			display: grid;
			align-items: center;
			justify-items: center;
		} /* horizontal */
		ul.flex {
			display: flex;
		}
		li > div > div.absolute {
			position: absolute;
		}
		kol-span-wc {
			justify-items: baseline;
		}
	`,
  "KOL-CARD": css`
		:host > div {
			background-color: white;
			border-color: var(--border-color);
			border-style: solid;
			border-width: 1px;
			border-radius: calc(2 * var(--border-radius));
			width: 100%;
			height: 100%;
		}
		kol-heading {
			padding: 0.5rem;
			display: block;
			border-bottom-style: solid;
			border-bottom-color: var(--border-color);
			border-bottom-width: 1px;
		}
		:host > div > div {
			display: block;
			padding: 0.5rem;
		}
		:host > div > div:last-child {
			display: block;
			padding: 0.5rem;
			border-top-style: solid;
			border-top-color: var(--color-achat);
			border-top-width: 1px;
		}
	`,
  "KOL-INPUT-CHECKBOX": css`
		.checkbox-container {
			justify-content: flex-start;
		}
		input {
			color: var(--default-letter);
			border-color: var(--default-border);
			border-width: 2px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		input:hover {
			border-color: var(--color-petrol);
		} /* NEU */
		kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
		}
		kol-input.default {
			grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
		}
		.switch {
			grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
		}
		.button {
			gap: 0.5rem 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-input > div.input {
			display: inline-flex;
			order: 1;
		}
		kol-input > div.input input {
			margin: 0px;
		}
		kol-input > label {
			order: 2;
			padding-left: calc(2 * 2 * var(--spacing));
		}
		kol-input > kol-alert.error {
			order: 3;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		} /* CHECKBOX */
		input[type='checkbox'] {
			appearance: none;
			background-color: white;
			cursor: pointer;
			transition: 0.5s;
		}
		input[type='checkbox']:checked {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
		}
		.default input[type='checkbox'] {
			height: calc(6 * 2 * var(--spacing));
			min-width: calc(6 * 2 * var(--spacing));
			width: calc(6 * 2 * var(--spacing));
		}

		.default .icon {
			margin-left: 0.25rem;
		}
		.default.checked .icon {
			color: var(--color-weiss);
		}

		.switch input[type='checkbox'] {
			display: block;
			min-width: 3.2em;
			width: 3.2em;
			height: 1.7em;
			position: relative;
		}
		.switch input[type='checkbox']:before {
			/* border-radius: 0.25em; */
			-webkit-transition: 0.5s;
			-moz-transition: 0.5s;
			-ms-transition: 0.5s;
			transition: 0.5;
			width: 1.2em;
			height: 1.2em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			background-color: black;
			position: absolute;
		}
		.switch input[type='checkbox']:checked:before {
			transform: translateX(1.5em);
			background-color: white;
		}
		.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(0.75em);
			background-color: var(--color-petrol);
		}
		.switch:is(:not(.checked), .indeterminate) .icon {
			color: #fff;
		}
		.disabled {
			opacity: 0.33;
		}
		kol-input span.hint {
			grid-column: span 2;
			font-style: italic;
			color: gray;
			display: block;
			order: 3;
			padding: 0 var(--spacing);
		}
		.button:focus-within {
			border-radius: 2rem;
			outline-color: var(--color-achat) !important;
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}
	`,
  "KOL-INPUT-RADIO": `/* INPUT */
	:host input:focus {
		outline-color: var(--color-achat) !important;
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		width: 100%;
		color: var(--color-anthrazit);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	input:hover {
		border-color: var(--color-achat);
	}
	kol-alert {
		display: block;
		width: 100%;
	}
	.kol-required span::after {
		content: "*";
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		flex-wrap: wrap;
	}
	fieldset.horizontal {
		gap: 1rem;
	}
	fieldset legend {
		display: block;
		width: 100%;
		line-height: 1.5em;
	}
	.radio-input-wrapper, .input {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		margin-top: 0.25em;
		margin-bottom: 0.25em;
		align-items: center;
		position: relative;
	}
	.radio-label {
		cursor: pointer;
		display: flex;
		width: 100%;
	}
	.radio-label span {
		margin-top: 0.125em;
	}
	.radio-input-wrapper input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * 2 * var(--spacing));
		min-width: calc(6 * 2 * var(--spacing));
		width: calc(6 * 2 * var(--spacing));
	}
	.radio-input-wrapper input[type="radio"]:checked:before {
		box-shadow: 0 0 0.1rem black;
		background-color: var(--color-petrol);
	}
	.radio-input-wrapper input[type="radio"]:disabled {
		background-color: var(--color-input-bg-default);
		border-color: #999;
		cursor: not-allowed;
	}
	kol-alert {
		width: 100%:
	}`,
  "KOL-TOAST-CONTAINER": `:host {
		top: 1rem;
		width: 750px;
		max-width: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
	.toast {
		background: #fff;
		margin-top: 1rem;
	}`,
  "KOL-TABS": `:host > div {
		display: block;
		width: 100%;
	}
	:host kol-button-group-wc {
		display: flex;
		background-color: var(--color-petrol);
	}
	:host kol-button-group-wc > div {
		display: inline-flex;
	}
	:host kol-button-group-wc > div + div {
		margin-left: 0.25em;
	}
	:host > div > div {
		padding: 0.25em;
		border: 1px solid var(--border-color);
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		line-height: 1.25em;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		width: inherit;
		overflow: hidden;
		border-style: solid;
		padding: calc(4 * var(--spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	kol-button-wc button.selected,
	kol-button-wc[aria-selected="true"] button {
		background-color: white;
		border-bottom-width: 0.25em !important;
		border-bottom-style: solid;
		border-bottom-color: var(--color-citrin) !important;
	}
	button > kol-span-wc span {
		display: flex;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary,
	button.primary:disabled:hover {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	button.primary:hover,
	button.primary:focus {
		color: var(--kolibri-color-primary);
	}
	button.secondary,
	button.secondary:disabled:hover {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	button.secondary:hover,
	button.secondary:focus {
		color: var(--kolibri-color-secondary);
	}
	button.normal,
	button.normal:disabled:hover {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: white;
	}
	button.normal:hover,
	button.normal:focus {
		color: var(--color-petrol);
	}
	button.danger,
	button.danger:disabled:hover {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	button.danger:hover,
	button.danger:focus {
		color: var(--kolibri-color-danger);
	}
	button.ghost,
	button.ghost:disabled:hover {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	button.ghost:hover,
	button.ghost:focus {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	button:hover,
	button:focus {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}
	button:active {
		outline: 0 !important;
		box-shadow: none !important;
	}
	.close-button {
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}`,
  "KOL-SKIP-NAV": `kol-link-wc > a > kol-span-wc {
		border-radius: 2rem;
  	border-style: solid;
		gap: 0.5rem;
		line-height: 1rem;
	  padding: 0 1rem;
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
		cursor: pointer;
	}`,
  "KOL-SPLIT-BUTTON": `.popover {
		background: #fff;
	}`
});

export { BMF, DEFAULT, ECL_EC, ECL_EU, ITZBund };
