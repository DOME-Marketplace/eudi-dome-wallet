(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all3) => {
    for (var name5 in all3)
      __defProp(target, name5, { get: all3[name5], enumerable: true });
  };
  var __copyProps = (to, from3, except, desc) => {
    if (from3 && typeof from3 === "object" || typeof from3 === "function") {
      for (let key of __getOwnPropNames(from3))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  var process_exports = {};
  __export(process_exports, {
    _debugEnd: () => _debugEnd,
    _debugProcess: () => _debugProcess,
    _events: () => _events,
    _eventsCount: () => _eventsCount,
    _exiting: () => _exiting,
    _fatalExceptions: () => _fatalExceptions,
    _getActiveHandles: () => _getActiveHandles,
    _getActiveRequests: () => _getActiveRequests,
    _kill: () => _kill,
    _linkedBinding: () => _linkedBinding,
    _maxListeners: () => _maxListeners,
    _preload_modules: () => _preload_modules,
    _rawDebug: () => _rawDebug,
    _startProfilerIdleNotifier: () => _startProfilerIdleNotifier,
    _stopProfilerIdleNotifier: () => _stopProfilerIdleNotifier,
    _tickCallback: () => _tickCallback,
    abort: () => abort,
    addListener: () => addListener,
    allowedNodeEnvironmentFlags: () => allowedNodeEnvironmentFlags,
    arch: () => arch,
    argv: () => argv,
    argv0: () => argv0,
    assert: () => assert,
    binding: () => binding,
    chdir: () => chdir,
    config: () => config,
    cpuUsage: () => cpuUsage,
    cwd: () => cwd,
    debugPort: () => debugPort,
    default: () => process,
    dlopen: () => dlopen,
    domain: () => domain,
    emit: () => emit,
    emitWarning: () => emitWarning,
    env: () => env,
    execArgv: () => execArgv,
    execPath: () => execPath,
    exit: () => exit,
    features: () => features,
    hasUncaughtExceptionCaptureCallback: () => hasUncaughtExceptionCaptureCallback,
    hrtime: () => hrtime,
    kill: () => kill,
    listeners: () => listeners,
    memoryUsage: () => memoryUsage,
    moduleLoadList: () => moduleLoadList,
    nextTick: () => nextTick,
    off: () => off,
    on: () => on,
    once: () => once,
    openStdin: () => openStdin,
    pid: () => pid,
    platform: () => platform,
    ppid: () => ppid,
    prependListener: () => prependListener,
    prependOnceListener: () => prependOnceListener,
    reallyExit: () => reallyExit,
    release: () => release,
    removeAllListeners: () => removeAllListeners,
    removeListener: () => removeListener,
    resourceUsage: () => resourceUsage,
    setSourceMapsEnabled: () => setSourceMapsEnabled,
    setUncaughtExceptionCaptureCallback: () => setUncaughtExceptionCaptureCallback,
    stderr: () => stderr,
    stdin: () => stdin,
    stdout: () => stdout,
    title: () => title,
    umask: () => umask,
    uptime: () => uptime,
    version: () => version,
    versions: () => versions
  });
  function unimplemented(name5) {
    throw new Error("Node.js process " + name5 + " is not supported by JSPM core outside of Node.js");
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue)
      return;
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length)
      drainQueue();
  }
  function drainQueue() {
    if (draining)
      return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue)
          currentQueue[queueIndex].run();
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining)
      setTimeout(drainQueue, 0);
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function _linkedBinding(name5) {
    unimplemented("_linkedBinding");
  }
  function dlopen(name5) {
    unimplemented("dlopen");
  }
  function _getActiveRequests() {
    return [];
  }
  function _getActiveHandles() {
    return [];
  }
  function assert(condition, message) {
    if (!condition) throw new Error(message || "assertion error");
  }
  function hasUncaughtExceptionCaptureCallback() {
    return false;
  }
  function uptime() {
    return _performance.now() / 1e3;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  function on() {
    return process;
  }
  function listeners(name5) {
    return [];
  }
  var queue, draining, currentQueue, queueIndex, title, arch, platform, env, argv, execArgv, version, versions, emitWarning, binding, umask, cwd, chdir, release, _rawDebug, moduleLoadList, domain, _exiting, config, reallyExit, _kill, cpuUsage, resourceUsage, memoryUsage, kill, exit, openStdin, allowedNodeEnvironmentFlags, features, _fatalExceptions, setUncaughtExceptionCaptureCallback, _tickCallback, _debugProcess, _debugEnd, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, stdout, stderr, stdin, abort, pid, ppid, execPath, debugPort, argv0, _preload_modules, setSourceMapsEnabled, _performance, nanoPerSec, _maxListeners, _events, _eventsCount, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, process, nowOffset;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      arch = "x64";
      platform = "browser";
      env = {
        PATH: "/usr/bin",
        LANG: navigator.language + ".UTF-8",
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      argv = ["/usr/bin/node"];
      execArgv = [];
      version = "v16.8.0";
      versions = {};
      emitWarning = function(message, type) {
        console.warn((type ? type + ": " : "") + message);
      };
      binding = function(name5) {
        unimplemented("binding");
      };
      umask = function(mask) {
        return 0;
      };
      cwd = function() {
        return "/";
      };
      chdir = function(dir) {
      };
      release = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
      };
      _rawDebug = noop;
      moduleLoadList = [];
      domain = {};
      _exiting = false;
      config = {};
      reallyExit = noop;
      _kill = noop;
      cpuUsage = function() {
        return {};
      };
      resourceUsage = cpuUsage;
      memoryUsage = cpuUsage;
      kill = noop;
      exit = noop;
      openStdin = noop;
      allowedNodeEnvironmentFlags = {};
      features = {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false,
        cached_builtins: true
      };
      _fatalExceptions = noop;
      setUncaughtExceptionCaptureCallback = noop;
      _tickCallback = noop;
      _debugProcess = noop;
      _debugEnd = noop;
      _startProfilerIdleNotifier = noop;
      _stopProfilerIdleNotifier = noop;
      stdout = void 0;
      stderr = void 0;
      stdin = void 0;
      abort = noop;
      pid = 2;
      ppid = 1;
      execPath = "/bin/usr/node";
      debugPort = 9229;
      argv0 = "node";
      _preload_modules = [];
      setSourceMapsEnabled = noop;
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
      _maxListeners = 10;
      _events = {};
      _eventsCount = 0;
      addListener = on;
      once = on;
      off = on;
      removeListener = on;
      removeAllListeners = on;
      emit = noop;
      prependListener = on;
      prependOnceListener = on;
      process = {
        version,
        versions,
        arch,
        platform,
        release,
        _rawDebug,
        moduleLoadList,
        binding,
        _linkedBinding,
        _events,
        _eventsCount,
        _maxListeners,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        prependListener,
        prependOnceListener,
        listeners,
        domain,
        _exiting,
        config,
        dlopen,
        uptime,
        _getActiveRequests,
        _getActiveHandles,
        reallyExit,
        _kill,
        cpuUsage,
        resourceUsage,
        memoryUsage,
        kill,
        exit,
        openStdin,
        allowedNodeEnvironmentFlags,
        assert,
        features,
        _fatalExceptions,
        setUncaughtExceptionCaptureCallback,
        hasUncaughtExceptionCaptureCallback,
        emitWarning,
        nextTick,
        _tickCallback,
        _debugProcess,
        _debugEnd,
        _startProfilerIdleNotifier,
        _stopProfilerIdleNotifier,
        stdout,
        stdin,
        stderr,
        abort,
        umask,
        chdir,
        cwd,
        env,
        title,
        argv,
        execArgv,
        pid,
        ppid,
        execPath,
        debugPort,
        hrtime,
        argv0,
        _preload_modules,
        setSourceMapsEnabled
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var buffer_exports = {};
  __export(buffer_exports, {
    Buffer: () => Buffer2,
    INSPECT_MAX_BYTES: () => INSPECT_MAX_BYTES,
    default: () => exports,
    kMaxLength: () => kMaxLength
  });
  function dew$2() {
    if (_dewExec$2) return exports$3;
    _dewExec$2 = true;
    exports$3.byteLength = byteLength;
    exports$3.toByteArray = toByteArray;
    exports$3.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code5.length; i < len; ++i) {
      lookup[i] = code5[i];
      revLookup[code5.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num2) {
      return lookup[num2 >> 18 & 63] + lookup[num2 >> 12 & 63] + lookup[num2 >> 6 & 63] + lookup[num2 & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output3 = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output3.push(tripletToBase64(tmp));
      }
      return output3.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$3;
  }
  function dew$1() {
    if (_dewExec$1) return exports$2;
    _dewExec$1 = true;
    exports$2.read = function(buffer, offset, isLE3, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE3 ? nBytes - 1 : 0;
      var d = isLE3 ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$2.write = function(buffer, value, offset, isLE3, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE3 ? 0 : nBytes - 1;
      var d = isLE3 ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$2;
  }
  function dew() {
    if (_dewExec) return exports$1;
    _dewExec = true;
    const base643 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports$1.Buffer = Buffer3;
    exports$1.SlowBuffer = SlowBuffer;
    exports$1.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports$1.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length2) {
      if (length2 > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length2);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length2) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe2(arg);
      }
      return from3(arg, encodingOrOffset, length2);
    }
    Buffer3.poolSize = 8192;
    function from3(value, encodingOrOffset, length2) {
      if (typeof value === "string") {
        return fromString3(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length2);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length2);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length2);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length2) {
      return from3(value, encodingOrOffset, length2);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc2(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc2(size, fill, encoding);
    };
    function allocUnsafe2(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe2(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe2(size);
    };
    function fromString3(string2, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length2 = byteLength(string2, encoding) | 0;
      let buf = createBuffer(length2);
      const actual = buf.write(string2, encoding);
      if (actual !== length2) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length2 = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length2);
      for (let i = 0; i < length2; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length2) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length2 || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length2 === void 0) {
        buf = new Uint8Array(array);
      } else if (length2 === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length2);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length2) {
      if (length2 >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length2 | 0;
    }
    function SlowBuffer(length2) {
      if (+length2 != length2) {
        length2 = 0;
      }
      return Buffer3.alloc(+length2);
    }
    Buffer3.isBuffer = function isBuffer2(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare2(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat2(list, length2) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length2 === void 0) {
        length2 = 0;
        for (i = 0; i < list.length; ++i) {
          length2 += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length2);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string2, encoding) {
      if (Buffer3.isBuffer(string2)) {
        return string2.length;
      }
      if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2);
      }
      const len = string2.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes4(string2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes2(string2).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes4(string2).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString5() {
      const length2 = this.length;
      if (length2 === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length2);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals4(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str2 = "";
      const max = exports$1.INSPECT_MAX_BYTES;
      str2 = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str2 += " ... ";
      return "<Buffer " + str2 + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read2(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read2(arr, i + j) !== read2(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string2, offset, length2) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length2) {
        length2 = remaining;
      } else {
        length2 = Number(length2);
        if (length2 > remaining) {
          length2 = remaining;
        }
      }
      const strLen = string2.length;
      if (length2 > strLen / 2) {
        length2 = strLen / 2;
      }
      let i;
      for (i = 0; i < length2; ++i) {
        const parsed = parseInt(string2.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string2, offset, length2) {
      return blitBuffer(utf8ToBytes4(string2, buf.length - offset), buf, offset, length2);
    }
    function asciiWrite(buf, string2, offset, length2) {
      return blitBuffer(asciiToBytes(string2), buf, offset, length2);
    }
    function base64Write(buf, string2, offset, length2) {
      return blitBuffer(base64ToBytes2(string2), buf, offset, length2);
    }
    function ucs2Write(buf, string2, offset, length2) {
      return blitBuffer(utf16leToBytes(string2, buf.length - offset), buf, offset, length2);
    }
    Buffer3.prototype.write = function write(string2, offset, length2, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length2 = this.length;
        offset = 0;
      } else if (length2 === void 0 && typeof offset === "string") {
        encoding = offset;
        length2 = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length2)) {
          length2 = length2 >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length2;
          length2 = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length2 === void 0 || length2 > remaining) length2 = remaining;
      if (string2.length > 0 && (length2 < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string2, offset, length2);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string2, offset, length2);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string2, offset, length2);
          case "base64":
            return base64Write(this, string2, offset, length2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string2, offset, length2);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON2() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base643.fromByteArray(buf);
      } else {
        return base643.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes4 = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes4.length - 1; i += 2) {
        res += String.fromCharCode(bytes4[i] + bytes4[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length2) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length2) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code5 = val.charCodeAt(0);
          if (encoding === "utf8" && code5 < 128 || encoding === "latin1") {
            val = code5;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes4 = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes4.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes4[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name5) {
      if (name5) {
        return `${name5} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name5, actual) {
      return `The "${name5}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str2, range, input) {
      let msg = `The value of "${str2}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name5) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name5, "number", value);
      }
    }
    function boundsError(value, length2, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length2 < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length2}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str2) {
      str2 = str2.split("=")[0];
      str2 = str2.trim().replace(INVALID_BASE64_RE, "");
      if (str2.length < 2) return "";
      while (str2.length % 4 !== 0) {
        str2 = str2 + "=";
      }
      return str2;
    }
    function utf8ToBytes4(string2, units) {
      units = units || Infinity;
      let codePoint;
      const length2 = string2.length;
      let leadSurrogate = null;
      const bytes4 = [];
      for (let i = 0; i < length2; ++i) {
        codePoint = string2.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes4.push(239, 191, 189);
              continue;
            } else if (i + 1 === length2) {
              if ((units -= 3) > -1) bytes4.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes4.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes4.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes4.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes4.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes4.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes4.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes4;
    }
    function asciiToBytes(str2) {
      const byteArray = [];
      for (let i = 0; i < str2.length; ++i) {
        byteArray.push(str2.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str2, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str2.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str2.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes2(str2) {
      return base643.toByteArray(base64clean(str2));
    }
    function blitBuffer(src2, dst, offset, length2) {
      let i;
      for (i = 0; i < length2; ++i) {
        if (i + offset >= dst.length || i >= src2.length) break;
        dst[i + offset] = src2[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet3 = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet3[i] + alphabet3[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports$1;
  }
  var exports$3, _dewExec$2, exports$2, _dewExec$1, exports$1, _dewExec, exports, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$3 = {}, _dewExec$2 = false;
      exports$2 = {}, _dewExec$1 = false;
      exports$1 = {}, _dewExec = false;
      exports = dew();
      exports["Buffer"];
      exports["SlowBuffer"];
      exports["INSPECT_MAX_BYTES"];
      exports["kMaxLength"];
      Buffer2 = exports.Buffer;
      INSPECT_MAX_BYTES = exports.INSPECT_MAX_BYTES;
      kMaxLength = exports.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/elliptic/package.json
  var require_package = __commonJS({
    "node_modules/elliptic/package.json"(exports2, module) {
      module.exports = {
        name: "elliptic",
        version: "6.5.7",
        description: "EC cryptography",
        main: "lib/elliptic.js",
        files: [
          "lib"
        ],
        scripts: {
          lint: "eslint lib test",
          "lint:fix": "npm run lint -- --fix",
          unit: "istanbul test _mocha --reporter=spec test/index.js",
          test: "npm run lint && npm run unit",
          version: "grunt dist && git add dist/"
        },
        repository: {
          type: "git",
          url: "git@github.com:indutny/elliptic"
        },
        keywords: [
          "EC",
          "Elliptic",
          "curve",
          "Cryptography"
        ],
        author: "Fedor Indutny <fedor@indutny.com>",
        license: "MIT",
        bugs: {
          url: "https://github.com/indutny/elliptic/issues"
        },
        homepage: "https://github.com/indutny/elliptic",
        devDependencies: {
          brfs: "^2.0.2",
          coveralls: "^3.1.0",
          eslint: "^7.6.0",
          grunt: "^1.2.1",
          "grunt-browserify": "^5.3.0",
          "grunt-cli": "^1.3.2",
          "grunt-contrib-connect": "^3.0.0",
          "grunt-contrib-copy": "^1.0.0",
          "grunt-contrib-uglify": "^5.0.0",
          "grunt-mocha-istanbul": "^5.0.2",
          "grunt-saucelabs": "^9.0.1",
          istanbul: "^0.4.5",
          mocha: "^8.0.1"
        },
        dependencies: {
          "bn.js": "^4.11.9",
          brorand: "^1.1.0",
          "hash.js": "^1.0.0",
          "hmac-drbg": "^1.0.1",
          inherits: "^2.0.4",
          "minimalistic-assert": "^1.0.1",
          "minimalistic-crypto-utils": "^1.0.1"
        }
      };
    }
  });

  // node_modules/elliptic/node_modules/bn.js/lib/bn.js
  var require_bn = __commonJS({
    "node_modules/elliptic/node_modules/bn.js/lib/bn.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(module2, exports3) {
        "use strict";
        function assert4(val, msg) {
          if (!val) throw new Error(msg || "Assertion failed");
        }
        function inherits2(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
        function BN(number3, base3, endian) {
          if (BN.isBN(number3)) {
            return number3;
          }
          this.negative = 0;
          this.words = null;
          this.length = 0;
          this.red = null;
          if (number3 !== null) {
            if (base3 === "le" || base3 === "be") {
              endian = base3;
              base3 = 10;
            }
            this._init(number3 || 0, base3 || 10, endian || "be");
          }
        }
        if (typeof module2 === "object") {
          module2.exports = BN;
        } else {
          exports3.BN = BN;
        }
        BN.BN = BN;
        BN.wordSize = 26;
        var Buffer3;
        try {
          if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
            Buffer3 = window.Buffer;
          } else {
            Buffer3 = (init_buffer(), __toCommonJS(buffer_exports)).Buffer;
          }
        } catch (e) {
        }
        BN.isBN = function isBN(num2) {
          if (num2 instanceof BN) {
            return true;
          }
          return num2 !== null && typeof num2 === "object" && num2.constructor.wordSize === BN.wordSize && Array.isArray(num2.words);
        };
        BN.max = function max(left, right) {
          if (left.cmp(right) > 0) return left;
          return right;
        };
        BN.min = function min(left, right) {
          if (left.cmp(right) < 0) return left;
          return right;
        };
        BN.prototype._init = function init(number3, base3, endian) {
          if (typeof number3 === "number") {
            return this._initNumber(number3, base3, endian);
          }
          if (typeof number3 === "object") {
            return this._initArray(number3, base3, endian);
          }
          if (base3 === "hex") {
            base3 = 16;
          }
          assert4(base3 === (base3 | 0) && base3 >= 2 && base3 <= 36);
          number3 = number3.toString().replace(/\s+/g, "");
          var start = 0;
          if (number3[0] === "-") {
            start++;
            this.negative = 1;
          }
          if (start < number3.length) {
            if (base3 === 16) {
              this._parseHex(number3, start, endian);
            } else {
              this._parseBase(number3, base3, start);
              if (endian === "le") {
                this._initArray(this.toArray(), base3, endian);
              }
            }
          }
        };
        BN.prototype._initNumber = function _initNumber(number3, base3, endian) {
          if (number3 < 0) {
            this.negative = 1;
            number3 = -number3;
          }
          if (number3 < 67108864) {
            this.words = [number3 & 67108863];
            this.length = 1;
          } else if (number3 < 4503599627370496) {
            this.words = [
              number3 & 67108863,
              number3 / 67108864 & 67108863
            ];
            this.length = 2;
          } else {
            assert4(number3 < 9007199254740992);
            this.words = [
              number3 & 67108863,
              number3 / 67108864 & 67108863,
              1
            ];
            this.length = 3;
          }
          if (endian !== "le") return;
          this._initArray(this.toArray(), base3, endian);
        };
        BN.prototype._initArray = function _initArray(number3, base3, endian) {
          assert4(typeof number3.length === "number");
          if (number3.length <= 0) {
            this.words = [0];
            this.length = 1;
            return this;
          }
          this.length = Math.ceil(number3.length / 3);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var j, w;
          var off2 = 0;
          if (endian === "be") {
            for (i = number3.length - 1, j = 0; i >= 0; i -= 3) {
              w = number3[i] | number3[i - 1] << 8 | number3[i - 2] << 16;
              this.words[j] |= w << off2 & 67108863;
              this.words[j + 1] = w >>> 26 - off2 & 67108863;
              off2 += 24;
              if (off2 >= 26) {
                off2 -= 26;
                j++;
              }
            }
          } else if (endian === "le") {
            for (i = 0, j = 0; i < number3.length; i += 3) {
              w = number3[i] | number3[i + 1] << 8 | number3[i + 2] << 16;
              this.words[j] |= w << off2 & 67108863;
              this.words[j + 1] = w >>> 26 - off2 & 67108863;
              off2 += 24;
              if (off2 >= 26) {
                off2 -= 26;
                j++;
              }
            }
          }
          return this.strip();
        };
        function parseHex4Bits(string2, index) {
          var c = string2.charCodeAt(index);
          if (c >= 65 && c <= 70) {
            return c - 55;
          } else if (c >= 97 && c <= 102) {
            return c - 87;
          } else {
            return c - 48 & 15;
          }
        }
        function parseHexByte(string2, lowerBound, index) {
          var r = parseHex4Bits(string2, index);
          if (index - 1 >= lowerBound) {
            r |= parseHex4Bits(string2, index - 1) << 4;
          }
          return r;
        }
        BN.prototype._parseHex = function _parseHex(number3, start, endian) {
          this.length = Math.ceil((number3.length - start) / 6);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var off2 = 0;
          var j = 0;
          var w;
          if (endian === "be") {
            for (i = number3.length - 1; i >= start; i -= 2) {
              w = parseHexByte(number3, start, i) << off2;
              this.words[j] |= w & 67108863;
              if (off2 >= 18) {
                off2 -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off2 += 8;
              }
            }
          } else {
            var parseLength = number3.length - start;
            for (i = parseLength % 2 === 0 ? start + 1 : start; i < number3.length; i += 2) {
              w = parseHexByte(number3, start, i) << off2;
              this.words[j] |= w & 67108863;
              if (off2 >= 18) {
                off2 -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off2 += 8;
              }
            }
          }
          this.strip();
        };
        function parseBase(str2, start, end, mul) {
          var r = 0;
          var len = Math.min(str2.length, end);
          for (var i = start; i < len; i++) {
            var c = str2.charCodeAt(i) - 48;
            r *= mul;
            if (c >= 49) {
              r += c - 49 + 10;
            } else if (c >= 17) {
              r += c - 17 + 10;
            } else {
              r += c;
            }
          }
          return r;
        }
        BN.prototype._parseBase = function _parseBase(number3, base3, start) {
          this.words = [0];
          this.length = 1;
          for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base3) {
            limbLen++;
          }
          limbLen--;
          limbPow = limbPow / base3 | 0;
          var total = number3.length - start;
          var mod2 = total % limbLen;
          var end = Math.min(total, total - mod2) + start;
          var word = 0;
          for (var i = start; i < end; i += limbLen) {
            word = parseBase(number3, i, i + limbLen, base3);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          if (mod2 !== 0) {
            var pow3 = 1;
            word = parseBase(number3, i, number3.length, base3);
            for (i = 0; i < mod2; i++) {
              pow3 *= base3;
            }
            this.imuln(pow3);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          this.strip();
        };
        BN.prototype.copy = function copy(dest) {
          dest.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            dest.words[i] = this.words[i];
          }
          dest.length = this.length;
          dest.negative = this.negative;
          dest.red = this.red;
        };
        BN.prototype.clone = function clone() {
          var r = new BN(null);
          this.copy(r);
          return r;
        };
        BN.prototype._expand = function _expand(size) {
          while (this.length < size) {
            this.words[this.length++] = 0;
          }
          return this;
        };
        BN.prototype.strip = function strip() {
          while (this.length > 1 && this.words[this.length - 1] === 0) {
            this.length--;
          }
          return this._normSign();
        };
        BN.prototype._normSign = function _normSign() {
          if (this.length === 1 && this.words[0] === 0) {
            this.negative = 0;
          }
          return this;
        };
        BN.prototype.inspect = function inspect() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var zeros = [
          "",
          "0",
          "00",
          "000",
          "0000",
          "00000",
          "000000",
          "0000000",
          "00000000",
          "000000000",
          "0000000000",
          "00000000000",
          "000000000000",
          "0000000000000",
          "00000000000000",
          "000000000000000",
          "0000000000000000",
          "00000000000000000",
          "000000000000000000",
          "0000000000000000000",
          "00000000000000000000",
          "000000000000000000000",
          "0000000000000000000000",
          "00000000000000000000000",
          "000000000000000000000000",
          "0000000000000000000000000"
        ];
        var groupSizes = [
          0,
          0,
          25,
          16,
          12,
          11,
          10,
          9,
          8,
          8,
          7,
          7,
          7,
          7,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ];
        var groupBases = [
          0,
          0,
          33554432,
          43046721,
          16777216,
          48828125,
          60466176,
          40353607,
          16777216,
          43046721,
          1e7,
          19487171,
          35831808,
          62748517,
          7529536,
          11390625,
          16777216,
          24137569,
          34012224,
          47045881,
          64e6,
          4084101,
          5153632,
          6436343,
          7962624,
          9765625,
          11881376,
          14348907,
          17210368,
          20511149,
          243e5,
          28629151,
          33554432,
          39135393,
          45435424,
          52521875,
          60466176
        ];
        BN.prototype.toString = function toString5(base3, padding2) {
          base3 = base3 || 10;
          padding2 = padding2 | 0 || 1;
          var out;
          if (base3 === 16 || base3 === "hex") {
            out = "";
            var off2 = 0;
            var carry = 0;
            for (var i = 0; i < this.length; i++) {
              var w = this.words[i];
              var word = ((w << off2 | carry) & 16777215).toString(16);
              carry = w >>> 24 - off2 & 16777215;
              if (carry !== 0 || i !== this.length - 1) {
                out = zeros[6 - word.length] + word + out;
              } else {
                out = word + out;
              }
              off2 += 2;
              if (off2 >= 26) {
                off2 -= 26;
                i--;
              }
            }
            if (carry !== 0) {
              out = carry.toString(16) + out;
            }
            while (out.length % padding2 !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          if (base3 === (base3 | 0) && base3 >= 2 && base3 <= 36) {
            var groupSize = groupSizes[base3];
            var groupBase = groupBases[base3];
            out = "";
            var c = this.clone();
            c.negative = 0;
            while (!c.isZero()) {
              var r = c.modn(groupBase).toString(base3);
              c = c.idivn(groupBase);
              if (!c.isZero()) {
                out = zeros[groupSize - r.length] + r + out;
              } else {
                out = r + out;
              }
            }
            if (this.isZero()) {
              out = "0" + out;
            }
            while (out.length % padding2 !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          assert4(false, "Base should be between 2 and 36");
        };
        BN.prototype.toNumber = function toNumber() {
          var ret = this.words[0];
          if (this.length === 2) {
            ret += this.words[1] * 67108864;
          } else if (this.length === 3 && this.words[2] === 1) {
            ret += 4503599627370496 + this.words[1] * 67108864;
          } else if (this.length > 2) {
            assert4(false, "Number can only safely store up to 53 bits");
          }
          return this.negative !== 0 ? -ret : ret;
        };
        BN.prototype.toJSON = function toJSON2() {
          return this.toString(16);
        };
        BN.prototype.toBuffer = function toBuffer(endian, length2) {
          assert4(typeof Buffer3 !== "undefined");
          return this.toArrayLike(Buffer3, endian, length2);
        };
        BN.prototype.toArray = function toArray2(endian, length2) {
          return this.toArrayLike(Array, endian, length2);
        };
        BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length2) {
          var byteLength = this.byteLength();
          var reqLength = length2 || Math.max(1, byteLength);
          assert4(byteLength <= reqLength, "byte array longer than desired length");
          assert4(reqLength > 0, "Requested array length <= 0");
          this.strip();
          var littleEndian = endian === "le";
          var res = new ArrayType(reqLength);
          var b, i;
          var q = this.clone();
          if (!littleEndian) {
            for (i = 0; i < reqLength - byteLength; i++) {
              res[i] = 0;
            }
            for (i = 0; !q.isZero(); i++) {
              b = q.andln(255);
              q.iushrn(8);
              res[reqLength - i - 1] = b;
            }
          } else {
            for (i = 0; !q.isZero(); i++) {
              b = q.andln(255);
              q.iushrn(8);
              res[i] = b;
            }
            for (; i < reqLength; i++) {
              res[i] = 0;
            }
          }
          return res;
        };
        if (Math.clz32) {
          BN.prototype._countBits = function _countBits(w) {
            return 32 - Math.clz32(w);
          };
        } else {
          BN.prototype._countBits = function _countBits(w) {
            var t = w;
            var r = 0;
            if (t >= 4096) {
              r += 13;
              t >>>= 13;
            }
            if (t >= 64) {
              r += 7;
              t >>>= 7;
            }
            if (t >= 8) {
              r += 4;
              t >>>= 4;
            }
            if (t >= 2) {
              r += 2;
              t >>>= 2;
            }
            return r + t;
          };
        }
        BN.prototype._zeroBits = function _zeroBits(w) {
          if (w === 0) return 26;
          var t = w;
          var r = 0;
          if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
          }
          if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
          }
          if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
          }
          if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
          }
          if ((t & 1) === 0) {
            r++;
          }
          return r;
        };
        BN.prototype.bitLength = function bitLength() {
          var w = this.words[this.length - 1];
          var hi = this._countBits(w);
          return (this.length - 1) * 26 + hi;
        };
        function toBitArray(num2) {
          var w = new Array(num2.bitLength());
          for (var bit = 0; bit < w.length; bit++) {
            var off2 = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = (num2.words[off2] & 1 << wbit) >>> wbit;
          }
          return w;
        }
        BN.prototype.zeroBits = function zeroBits() {
          if (this.isZero()) return 0;
          var r = 0;
          for (var i = 0; i < this.length; i++) {
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
          }
          return r;
        };
        BN.prototype.byteLength = function byteLength() {
          return Math.ceil(this.bitLength() / 8);
        };
        BN.prototype.toTwos = function toTwos(width) {
          if (this.negative !== 0) {
            return this.abs().inotn(width).iaddn(1);
          }
          return this.clone();
        };
        BN.prototype.fromTwos = function fromTwos(width) {
          if (this.testn(width - 1)) {
            return this.notn(width).iaddn(1).ineg();
          }
          return this.clone();
        };
        BN.prototype.isNeg = function isNeg() {
          return this.negative !== 0;
        };
        BN.prototype.neg = function neg() {
          return this.clone().ineg();
        };
        BN.prototype.ineg = function ineg() {
          if (!this.isZero()) {
            this.negative ^= 1;
          }
          return this;
        };
        BN.prototype.iuor = function iuor(num2) {
          while (this.length < num2.length) {
            this.words[this.length++] = 0;
          }
          for (var i = 0; i < num2.length; i++) {
            this.words[i] = this.words[i] | num2.words[i];
          }
          return this.strip();
        };
        BN.prototype.ior = function ior(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuor(num2);
        };
        BN.prototype.or = function or2(num2) {
          if (this.length > num2.length) return this.clone().ior(num2);
          return num2.clone().ior(this);
        };
        BN.prototype.uor = function uor(num2) {
          if (this.length > num2.length) return this.clone().iuor(num2);
          return num2.clone().iuor(this);
        };
        BN.prototype.iuand = function iuand(num2) {
          var b;
          if (this.length > num2.length) {
            b = num2;
          } else {
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = this.words[i] & num2.words[i];
          }
          this.length = b.length;
          return this.strip();
        };
        BN.prototype.iand = function iand(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuand(num2);
        };
        BN.prototype.and = function and(num2) {
          if (this.length > num2.length) return this.clone().iand(num2);
          return num2.clone().iand(this);
        };
        BN.prototype.uand = function uand(num2) {
          if (this.length > num2.length) return this.clone().iuand(num2);
          return num2.clone().iuand(this);
        };
        BN.prototype.iuxor = function iuxor(num2) {
          var a;
          var b;
          if (this.length > num2.length) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = a.words[i] ^ b.words[i];
          }
          if (this !== a) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = a.length;
          return this.strip();
        };
        BN.prototype.ixor = function ixor(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuxor(num2);
        };
        BN.prototype.xor = function xor2(num2) {
          if (this.length > num2.length) return this.clone().ixor(num2);
          return num2.clone().ixor(this);
        };
        BN.prototype.uxor = function uxor(num2) {
          if (this.length > num2.length) return this.clone().iuxor(num2);
          return num2.clone().iuxor(this);
        };
        BN.prototype.inotn = function inotn(width) {
          assert4(typeof width === "number" && width >= 0);
          var bytesNeeded = Math.ceil(width / 26) | 0;
          var bitsLeft = width % 26;
          this._expand(bytesNeeded);
          if (bitsLeft > 0) {
            bytesNeeded--;
          }
          for (var i = 0; i < bytesNeeded; i++) {
            this.words[i] = ~this.words[i] & 67108863;
          }
          if (bitsLeft > 0) {
            this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
          }
          return this.strip();
        };
        BN.prototype.notn = function notn(width) {
          return this.clone().inotn(width);
        };
        BN.prototype.setn = function setn(bit, val) {
          assert4(typeof bit === "number" && bit >= 0);
          var off2 = bit / 26 | 0;
          var wbit = bit % 26;
          this._expand(off2 + 1);
          if (val) {
            this.words[off2] = this.words[off2] | 1 << wbit;
          } else {
            this.words[off2] = this.words[off2] & ~(1 << wbit);
          }
          return this.strip();
        };
        BN.prototype.iadd = function iadd(num2) {
          var r;
          if (this.negative !== 0 && num2.negative === 0) {
            this.negative = 0;
            r = this.isub(num2);
            this.negative ^= 1;
            return this._normSign();
          } else if (this.negative === 0 && num2.negative !== 0) {
            num2.negative = 0;
            r = this.isub(num2);
            num2.negative = 1;
            return r._normSign();
          }
          var a, b;
          if (this.length > num2.length) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          this.length = a.length;
          if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
          } else if (a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          return this;
        };
        BN.prototype.add = function add2(num2) {
          var res;
          if (num2.negative !== 0 && this.negative === 0) {
            num2.negative = 0;
            res = this.sub(num2);
            num2.negative ^= 1;
            return res;
          } else if (num2.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num2.sub(this);
            this.negative = 1;
            return res;
          }
          if (this.length > num2.length) return this.clone().iadd(num2);
          return num2.clone().iadd(this);
        };
        BN.prototype.isub = function isub(num2) {
          if (num2.negative !== 0) {
            num2.negative = 0;
            var r = this.iadd(num2);
            num2.negative = 1;
            return r._normSign();
          } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num2);
            this.negative = 1;
            return this._normSign();
          }
          var cmp = this.cmp(num2);
          if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
          }
          var a, b;
          if (cmp > 0) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          if (carry === 0 && i < a.length && a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = Math.max(this.length, i);
          if (a !== this) {
            this.negative = 1;
          }
          return this.strip();
        };
        BN.prototype.sub = function sub(num2) {
          return this.clone().isub(num2);
        };
        function smallMulTo(self2, num2, out) {
          out.negative = num2.negative ^ self2.negative;
          var len = self2.length + num2.length | 0;
          out.length = len;
          len = len - 1 | 0;
          var a = self2.words[0] | 0;
          var b = num2.words[0] | 0;
          var r = a * b;
          var lo = r & 67108863;
          var carry = r / 67108864 | 0;
          out.words[0] = lo;
          for (var k = 1; k < len; k++) {
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num2.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j | 0;
              a = self2.words[i] | 0;
              b = num2.words[j] | 0;
              r = a * b + rword;
              ncarry += r / 67108864 | 0;
              rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
          }
          if (carry !== 0) {
            out.words[k] = carry | 0;
          } else {
            out.length--;
          }
          return out.strip();
        }
        var comb10MulTo = function comb10MulTo2(self2, num2, out) {
          var a = self2.words;
          var b = num2.words;
          var o = out.words;
          var c = 0;
          var lo;
          var mid;
          var hi;
          var a0 = a[0] | 0;
          var al0 = a0 & 8191;
          var ah0 = a0 >>> 13;
          var a1 = a[1] | 0;
          var al1 = a1 & 8191;
          var ah1 = a1 >>> 13;
          var a2 = a[2] | 0;
          var al2 = a2 & 8191;
          var ah2 = a2 >>> 13;
          var a3 = a[3] | 0;
          var al3 = a3 & 8191;
          var ah3 = a3 >>> 13;
          var a4 = a[4] | 0;
          var al4 = a4 & 8191;
          var ah4 = a4 >>> 13;
          var a5 = a[5] | 0;
          var al5 = a5 & 8191;
          var ah5 = a5 >>> 13;
          var a6 = a[6] | 0;
          var al6 = a6 & 8191;
          var ah6 = a6 >>> 13;
          var a7 = a[7] | 0;
          var al7 = a7 & 8191;
          var ah7 = a7 >>> 13;
          var a8 = a[8] | 0;
          var al8 = a8 & 8191;
          var ah8 = a8 >>> 13;
          var a9 = a[9] | 0;
          var al9 = a9 & 8191;
          var ah9 = a9 >>> 13;
          var b0 = b[0] | 0;
          var bl0 = b0 & 8191;
          var bh0 = b0 >>> 13;
          var b1 = b[1] | 0;
          var bl1 = b1 & 8191;
          var bh1 = b1 >>> 13;
          var b2 = b[2] | 0;
          var bl2 = b2 & 8191;
          var bh2 = b2 >>> 13;
          var b3 = b[3] | 0;
          var bl3 = b3 & 8191;
          var bh3 = b3 >>> 13;
          var b4 = b[4] | 0;
          var bl4 = b4 & 8191;
          var bh4 = b4 >>> 13;
          var b5 = b[5] | 0;
          var bl5 = b5 & 8191;
          var bh5 = b5 >>> 13;
          var b6 = b[6] | 0;
          var bl6 = b6 & 8191;
          var bh6 = b6 >>> 13;
          var b7 = b[7] | 0;
          var bl7 = b7 & 8191;
          var bh7 = b7 >>> 13;
          var b8 = b[8] | 0;
          var bl8 = b8 & 8191;
          var bh8 = b8 >>> 13;
          var b9 = b[9] | 0;
          var bl9 = b9 & 8191;
          var bh9 = b9 >>> 13;
          out.negative = self2.negative ^ num2.negative;
          out.length = 19;
          lo = Math.imul(al0, bl0);
          mid = Math.imul(al0, bh0);
          mid = mid + Math.imul(ah0, bl0) | 0;
          hi = Math.imul(ah0, bh0);
          var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
          w0 &= 67108863;
          lo = Math.imul(al1, bl0);
          mid = Math.imul(al1, bh0);
          mid = mid + Math.imul(ah1, bl0) | 0;
          hi = Math.imul(ah1, bh0);
          lo = lo + Math.imul(al0, bl1) | 0;
          mid = mid + Math.imul(al0, bh1) | 0;
          mid = mid + Math.imul(ah0, bl1) | 0;
          hi = hi + Math.imul(ah0, bh1) | 0;
          var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
          w1 &= 67108863;
          lo = Math.imul(al2, bl0);
          mid = Math.imul(al2, bh0);
          mid = mid + Math.imul(ah2, bl0) | 0;
          hi = Math.imul(ah2, bh0);
          lo = lo + Math.imul(al1, bl1) | 0;
          mid = mid + Math.imul(al1, bh1) | 0;
          mid = mid + Math.imul(ah1, bl1) | 0;
          hi = hi + Math.imul(ah1, bh1) | 0;
          lo = lo + Math.imul(al0, bl2) | 0;
          mid = mid + Math.imul(al0, bh2) | 0;
          mid = mid + Math.imul(ah0, bl2) | 0;
          hi = hi + Math.imul(ah0, bh2) | 0;
          var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
          w2 &= 67108863;
          lo = Math.imul(al3, bl0);
          mid = Math.imul(al3, bh0);
          mid = mid + Math.imul(ah3, bl0) | 0;
          hi = Math.imul(ah3, bh0);
          lo = lo + Math.imul(al2, bl1) | 0;
          mid = mid + Math.imul(al2, bh1) | 0;
          mid = mid + Math.imul(ah2, bl1) | 0;
          hi = hi + Math.imul(ah2, bh1) | 0;
          lo = lo + Math.imul(al1, bl2) | 0;
          mid = mid + Math.imul(al1, bh2) | 0;
          mid = mid + Math.imul(ah1, bl2) | 0;
          hi = hi + Math.imul(ah1, bh2) | 0;
          lo = lo + Math.imul(al0, bl3) | 0;
          mid = mid + Math.imul(al0, bh3) | 0;
          mid = mid + Math.imul(ah0, bl3) | 0;
          hi = hi + Math.imul(ah0, bh3) | 0;
          var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
          w3 &= 67108863;
          lo = Math.imul(al4, bl0);
          mid = Math.imul(al4, bh0);
          mid = mid + Math.imul(ah4, bl0) | 0;
          hi = Math.imul(ah4, bh0);
          lo = lo + Math.imul(al3, bl1) | 0;
          mid = mid + Math.imul(al3, bh1) | 0;
          mid = mid + Math.imul(ah3, bl1) | 0;
          hi = hi + Math.imul(ah3, bh1) | 0;
          lo = lo + Math.imul(al2, bl2) | 0;
          mid = mid + Math.imul(al2, bh2) | 0;
          mid = mid + Math.imul(ah2, bl2) | 0;
          hi = hi + Math.imul(ah2, bh2) | 0;
          lo = lo + Math.imul(al1, bl3) | 0;
          mid = mid + Math.imul(al1, bh3) | 0;
          mid = mid + Math.imul(ah1, bl3) | 0;
          hi = hi + Math.imul(ah1, bh3) | 0;
          lo = lo + Math.imul(al0, bl4) | 0;
          mid = mid + Math.imul(al0, bh4) | 0;
          mid = mid + Math.imul(ah0, bl4) | 0;
          hi = hi + Math.imul(ah0, bh4) | 0;
          var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
          w4 &= 67108863;
          lo = Math.imul(al5, bl0);
          mid = Math.imul(al5, bh0);
          mid = mid + Math.imul(ah5, bl0) | 0;
          hi = Math.imul(ah5, bh0);
          lo = lo + Math.imul(al4, bl1) | 0;
          mid = mid + Math.imul(al4, bh1) | 0;
          mid = mid + Math.imul(ah4, bl1) | 0;
          hi = hi + Math.imul(ah4, bh1) | 0;
          lo = lo + Math.imul(al3, bl2) | 0;
          mid = mid + Math.imul(al3, bh2) | 0;
          mid = mid + Math.imul(ah3, bl2) | 0;
          hi = hi + Math.imul(ah3, bh2) | 0;
          lo = lo + Math.imul(al2, bl3) | 0;
          mid = mid + Math.imul(al2, bh3) | 0;
          mid = mid + Math.imul(ah2, bl3) | 0;
          hi = hi + Math.imul(ah2, bh3) | 0;
          lo = lo + Math.imul(al1, bl4) | 0;
          mid = mid + Math.imul(al1, bh4) | 0;
          mid = mid + Math.imul(ah1, bl4) | 0;
          hi = hi + Math.imul(ah1, bh4) | 0;
          lo = lo + Math.imul(al0, bl5) | 0;
          mid = mid + Math.imul(al0, bh5) | 0;
          mid = mid + Math.imul(ah0, bl5) | 0;
          hi = hi + Math.imul(ah0, bh5) | 0;
          var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
          w5 &= 67108863;
          lo = Math.imul(al6, bl0);
          mid = Math.imul(al6, bh0);
          mid = mid + Math.imul(ah6, bl0) | 0;
          hi = Math.imul(ah6, bh0);
          lo = lo + Math.imul(al5, bl1) | 0;
          mid = mid + Math.imul(al5, bh1) | 0;
          mid = mid + Math.imul(ah5, bl1) | 0;
          hi = hi + Math.imul(ah5, bh1) | 0;
          lo = lo + Math.imul(al4, bl2) | 0;
          mid = mid + Math.imul(al4, bh2) | 0;
          mid = mid + Math.imul(ah4, bl2) | 0;
          hi = hi + Math.imul(ah4, bh2) | 0;
          lo = lo + Math.imul(al3, bl3) | 0;
          mid = mid + Math.imul(al3, bh3) | 0;
          mid = mid + Math.imul(ah3, bl3) | 0;
          hi = hi + Math.imul(ah3, bh3) | 0;
          lo = lo + Math.imul(al2, bl4) | 0;
          mid = mid + Math.imul(al2, bh4) | 0;
          mid = mid + Math.imul(ah2, bl4) | 0;
          hi = hi + Math.imul(ah2, bh4) | 0;
          lo = lo + Math.imul(al1, bl5) | 0;
          mid = mid + Math.imul(al1, bh5) | 0;
          mid = mid + Math.imul(ah1, bl5) | 0;
          hi = hi + Math.imul(ah1, bh5) | 0;
          lo = lo + Math.imul(al0, bl6) | 0;
          mid = mid + Math.imul(al0, bh6) | 0;
          mid = mid + Math.imul(ah0, bl6) | 0;
          hi = hi + Math.imul(ah0, bh6) | 0;
          var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
          w6 &= 67108863;
          lo = Math.imul(al7, bl0);
          mid = Math.imul(al7, bh0);
          mid = mid + Math.imul(ah7, bl0) | 0;
          hi = Math.imul(ah7, bh0);
          lo = lo + Math.imul(al6, bl1) | 0;
          mid = mid + Math.imul(al6, bh1) | 0;
          mid = mid + Math.imul(ah6, bl1) | 0;
          hi = hi + Math.imul(ah6, bh1) | 0;
          lo = lo + Math.imul(al5, bl2) | 0;
          mid = mid + Math.imul(al5, bh2) | 0;
          mid = mid + Math.imul(ah5, bl2) | 0;
          hi = hi + Math.imul(ah5, bh2) | 0;
          lo = lo + Math.imul(al4, bl3) | 0;
          mid = mid + Math.imul(al4, bh3) | 0;
          mid = mid + Math.imul(ah4, bl3) | 0;
          hi = hi + Math.imul(ah4, bh3) | 0;
          lo = lo + Math.imul(al3, bl4) | 0;
          mid = mid + Math.imul(al3, bh4) | 0;
          mid = mid + Math.imul(ah3, bl4) | 0;
          hi = hi + Math.imul(ah3, bh4) | 0;
          lo = lo + Math.imul(al2, bl5) | 0;
          mid = mid + Math.imul(al2, bh5) | 0;
          mid = mid + Math.imul(ah2, bl5) | 0;
          hi = hi + Math.imul(ah2, bh5) | 0;
          lo = lo + Math.imul(al1, bl6) | 0;
          mid = mid + Math.imul(al1, bh6) | 0;
          mid = mid + Math.imul(ah1, bl6) | 0;
          hi = hi + Math.imul(ah1, bh6) | 0;
          lo = lo + Math.imul(al0, bl7) | 0;
          mid = mid + Math.imul(al0, bh7) | 0;
          mid = mid + Math.imul(ah0, bl7) | 0;
          hi = hi + Math.imul(ah0, bh7) | 0;
          var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
          w7 &= 67108863;
          lo = Math.imul(al8, bl0);
          mid = Math.imul(al8, bh0);
          mid = mid + Math.imul(ah8, bl0) | 0;
          hi = Math.imul(ah8, bh0);
          lo = lo + Math.imul(al7, bl1) | 0;
          mid = mid + Math.imul(al7, bh1) | 0;
          mid = mid + Math.imul(ah7, bl1) | 0;
          hi = hi + Math.imul(ah7, bh1) | 0;
          lo = lo + Math.imul(al6, bl2) | 0;
          mid = mid + Math.imul(al6, bh2) | 0;
          mid = mid + Math.imul(ah6, bl2) | 0;
          hi = hi + Math.imul(ah6, bh2) | 0;
          lo = lo + Math.imul(al5, bl3) | 0;
          mid = mid + Math.imul(al5, bh3) | 0;
          mid = mid + Math.imul(ah5, bl3) | 0;
          hi = hi + Math.imul(ah5, bh3) | 0;
          lo = lo + Math.imul(al4, bl4) | 0;
          mid = mid + Math.imul(al4, bh4) | 0;
          mid = mid + Math.imul(ah4, bl4) | 0;
          hi = hi + Math.imul(ah4, bh4) | 0;
          lo = lo + Math.imul(al3, bl5) | 0;
          mid = mid + Math.imul(al3, bh5) | 0;
          mid = mid + Math.imul(ah3, bl5) | 0;
          hi = hi + Math.imul(ah3, bh5) | 0;
          lo = lo + Math.imul(al2, bl6) | 0;
          mid = mid + Math.imul(al2, bh6) | 0;
          mid = mid + Math.imul(ah2, bl6) | 0;
          hi = hi + Math.imul(ah2, bh6) | 0;
          lo = lo + Math.imul(al1, bl7) | 0;
          mid = mid + Math.imul(al1, bh7) | 0;
          mid = mid + Math.imul(ah1, bl7) | 0;
          hi = hi + Math.imul(ah1, bh7) | 0;
          lo = lo + Math.imul(al0, bl8) | 0;
          mid = mid + Math.imul(al0, bh8) | 0;
          mid = mid + Math.imul(ah0, bl8) | 0;
          hi = hi + Math.imul(ah0, bh8) | 0;
          var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
          w8 &= 67108863;
          lo = Math.imul(al9, bl0);
          mid = Math.imul(al9, bh0);
          mid = mid + Math.imul(ah9, bl0) | 0;
          hi = Math.imul(ah9, bh0);
          lo = lo + Math.imul(al8, bl1) | 0;
          mid = mid + Math.imul(al8, bh1) | 0;
          mid = mid + Math.imul(ah8, bl1) | 0;
          hi = hi + Math.imul(ah8, bh1) | 0;
          lo = lo + Math.imul(al7, bl2) | 0;
          mid = mid + Math.imul(al7, bh2) | 0;
          mid = mid + Math.imul(ah7, bl2) | 0;
          hi = hi + Math.imul(ah7, bh2) | 0;
          lo = lo + Math.imul(al6, bl3) | 0;
          mid = mid + Math.imul(al6, bh3) | 0;
          mid = mid + Math.imul(ah6, bl3) | 0;
          hi = hi + Math.imul(ah6, bh3) | 0;
          lo = lo + Math.imul(al5, bl4) | 0;
          mid = mid + Math.imul(al5, bh4) | 0;
          mid = mid + Math.imul(ah5, bl4) | 0;
          hi = hi + Math.imul(ah5, bh4) | 0;
          lo = lo + Math.imul(al4, bl5) | 0;
          mid = mid + Math.imul(al4, bh5) | 0;
          mid = mid + Math.imul(ah4, bl5) | 0;
          hi = hi + Math.imul(ah4, bh5) | 0;
          lo = lo + Math.imul(al3, bl6) | 0;
          mid = mid + Math.imul(al3, bh6) | 0;
          mid = mid + Math.imul(ah3, bl6) | 0;
          hi = hi + Math.imul(ah3, bh6) | 0;
          lo = lo + Math.imul(al2, bl7) | 0;
          mid = mid + Math.imul(al2, bh7) | 0;
          mid = mid + Math.imul(ah2, bl7) | 0;
          hi = hi + Math.imul(ah2, bh7) | 0;
          lo = lo + Math.imul(al1, bl8) | 0;
          mid = mid + Math.imul(al1, bh8) | 0;
          mid = mid + Math.imul(ah1, bl8) | 0;
          hi = hi + Math.imul(ah1, bh8) | 0;
          lo = lo + Math.imul(al0, bl9) | 0;
          mid = mid + Math.imul(al0, bh9) | 0;
          mid = mid + Math.imul(ah0, bl9) | 0;
          hi = hi + Math.imul(ah0, bh9) | 0;
          var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
          w9 &= 67108863;
          lo = Math.imul(al9, bl1);
          mid = Math.imul(al9, bh1);
          mid = mid + Math.imul(ah9, bl1) | 0;
          hi = Math.imul(ah9, bh1);
          lo = lo + Math.imul(al8, bl2) | 0;
          mid = mid + Math.imul(al8, bh2) | 0;
          mid = mid + Math.imul(ah8, bl2) | 0;
          hi = hi + Math.imul(ah8, bh2) | 0;
          lo = lo + Math.imul(al7, bl3) | 0;
          mid = mid + Math.imul(al7, bh3) | 0;
          mid = mid + Math.imul(ah7, bl3) | 0;
          hi = hi + Math.imul(ah7, bh3) | 0;
          lo = lo + Math.imul(al6, bl4) | 0;
          mid = mid + Math.imul(al6, bh4) | 0;
          mid = mid + Math.imul(ah6, bl4) | 0;
          hi = hi + Math.imul(ah6, bh4) | 0;
          lo = lo + Math.imul(al5, bl5) | 0;
          mid = mid + Math.imul(al5, bh5) | 0;
          mid = mid + Math.imul(ah5, bl5) | 0;
          hi = hi + Math.imul(ah5, bh5) | 0;
          lo = lo + Math.imul(al4, bl6) | 0;
          mid = mid + Math.imul(al4, bh6) | 0;
          mid = mid + Math.imul(ah4, bl6) | 0;
          hi = hi + Math.imul(ah4, bh6) | 0;
          lo = lo + Math.imul(al3, bl7) | 0;
          mid = mid + Math.imul(al3, bh7) | 0;
          mid = mid + Math.imul(ah3, bl7) | 0;
          hi = hi + Math.imul(ah3, bh7) | 0;
          lo = lo + Math.imul(al2, bl8) | 0;
          mid = mid + Math.imul(al2, bh8) | 0;
          mid = mid + Math.imul(ah2, bl8) | 0;
          hi = hi + Math.imul(ah2, bh8) | 0;
          lo = lo + Math.imul(al1, bl9) | 0;
          mid = mid + Math.imul(al1, bh9) | 0;
          mid = mid + Math.imul(ah1, bl9) | 0;
          hi = hi + Math.imul(ah1, bh9) | 0;
          var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
          w10 &= 67108863;
          lo = Math.imul(al9, bl2);
          mid = Math.imul(al9, bh2);
          mid = mid + Math.imul(ah9, bl2) | 0;
          hi = Math.imul(ah9, bh2);
          lo = lo + Math.imul(al8, bl3) | 0;
          mid = mid + Math.imul(al8, bh3) | 0;
          mid = mid + Math.imul(ah8, bl3) | 0;
          hi = hi + Math.imul(ah8, bh3) | 0;
          lo = lo + Math.imul(al7, bl4) | 0;
          mid = mid + Math.imul(al7, bh4) | 0;
          mid = mid + Math.imul(ah7, bl4) | 0;
          hi = hi + Math.imul(ah7, bh4) | 0;
          lo = lo + Math.imul(al6, bl5) | 0;
          mid = mid + Math.imul(al6, bh5) | 0;
          mid = mid + Math.imul(ah6, bl5) | 0;
          hi = hi + Math.imul(ah6, bh5) | 0;
          lo = lo + Math.imul(al5, bl6) | 0;
          mid = mid + Math.imul(al5, bh6) | 0;
          mid = mid + Math.imul(ah5, bl6) | 0;
          hi = hi + Math.imul(ah5, bh6) | 0;
          lo = lo + Math.imul(al4, bl7) | 0;
          mid = mid + Math.imul(al4, bh7) | 0;
          mid = mid + Math.imul(ah4, bl7) | 0;
          hi = hi + Math.imul(ah4, bh7) | 0;
          lo = lo + Math.imul(al3, bl8) | 0;
          mid = mid + Math.imul(al3, bh8) | 0;
          mid = mid + Math.imul(ah3, bl8) | 0;
          hi = hi + Math.imul(ah3, bh8) | 0;
          lo = lo + Math.imul(al2, bl9) | 0;
          mid = mid + Math.imul(al2, bh9) | 0;
          mid = mid + Math.imul(ah2, bl9) | 0;
          hi = hi + Math.imul(ah2, bh9) | 0;
          var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
          w11 &= 67108863;
          lo = Math.imul(al9, bl3);
          mid = Math.imul(al9, bh3);
          mid = mid + Math.imul(ah9, bl3) | 0;
          hi = Math.imul(ah9, bh3);
          lo = lo + Math.imul(al8, bl4) | 0;
          mid = mid + Math.imul(al8, bh4) | 0;
          mid = mid + Math.imul(ah8, bl4) | 0;
          hi = hi + Math.imul(ah8, bh4) | 0;
          lo = lo + Math.imul(al7, bl5) | 0;
          mid = mid + Math.imul(al7, bh5) | 0;
          mid = mid + Math.imul(ah7, bl5) | 0;
          hi = hi + Math.imul(ah7, bh5) | 0;
          lo = lo + Math.imul(al6, bl6) | 0;
          mid = mid + Math.imul(al6, bh6) | 0;
          mid = mid + Math.imul(ah6, bl6) | 0;
          hi = hi + Math.imul(ah6, bh6) | 0;
          lo = lo + Math.imul(al5, bl7) | 0;
          mid = mid + Math.imul(al5, bh7) | 0;
          mid = mid + Math.imul(ah5, bl7) | 0;
          hi = hi + Math.imul(ah5, bh7) | 0;
          lo = lo + Math.imul(al4, bl8) | 0;
          mid = mid + Math.imul(al4, bh8) | 0;
          mid = mid + Math.imul(ah4, bl8) | 0;
          hi = hi + Math.imul(ah4, bh8) | 0;
          lo = lo + Math.imul(al3, bl9) | 0;
          mid = mid + Math.imul(al3, bh9) | 0;
          mid = mid + Math.imul(ah3, bl9) | 0;
          hi = hi + Math.imul(ah3, bh9) | 0;
          var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
          w12 &= 67108863;
          lo = Math.imul(al9, bl4);
          mid = Math.imul(al9, bh4);
          mid = mid + Math.imul(ah9, bl4) | 0;
          hi = Math.imul(ah9, bh4);
          lo = lo + Math.imul(al8, bl5) | 0;
          mid = mid + Math.imul(al8, bh5) | 0;
          mid = mid + Math.imul(ah8, bl5) | 0;
          hi = hi + Math.imul(ah8, bh5) | 0;
          lo = lo + Math.imul(al7, bl6) | 0;
          mid = mid + Math.imul(al7, bh6) | 0;
          mid = mid + Math.imul(ah7, bl6) | 0;
          hi = hi + Math.imul(ah7, bh6) | 0;
          lo = lo + Math.imul(al6, bl7) | 0;
          mid = mid + Math.imul(al6, bh7) | 0;
          mid = mid + Math.imul(ah6, bl7) | 0;
          hi = hi + Math.imul(ah6, bh7) | 0;
          lo = lo + Math.imul(al5, bl8) | 0;
          mid = mid + Math.imul(al5, bh8) | 0;
          mid = mid + Math.imul(ah5, bl8) | 0;
          hi = hi + Math.imul(ah5, bh8) | 0;
          lo = lo + Math.imul(al4, bl9) | 0;
          mid = mid + Math.imul(al4, bh9) | 0;
          mid = mid + Math.imul(ah4, bl9) | 0;
          hi = hi + Math.imul(ah4, bh9) | 0;
          var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
          w13 &= 67108863;
          lo = Math.imul(al9, bl5);
          mid = Math.imul(al9, bh5);
          mid = mid + Math.imul(ah9, bl5) | 0;
          hi = Math.imul(ah9, bh5);
          lo = lo + Math.imul(al8, bl6) | 0;
          mid = mid + Math.imul(al8, bh6) | 0;
          mid = mid + Math.imul(ah8, bl6) | 0;
          hi = hi + Math.imul(ah8, bh6) | 0;
          lo = lo + Math.imul(al7, bl7) | 0;
          mid = mid + Math.imul(al7, bh7) | 0;
          mid = mid + Math.imul(ah7, bl7) | 0;
          hi = hi + Math.imul(ah7, bh7) | 0;
          lo = lo + Math.imul(al6, bl8) | 0;
          mid = mid + Math.imul(al6, bh8) | 0;
          mid = mid + Math.imul(ah6, bl8) | 0;
          hi = hi + Math.imul(ah6, bh8) | 0;
          lo = lo + Math.imul(al5, bl9) | 0;
          mid = mid + Math.imul(al5, bh9) | 0;
          mid = mid + Math.imul(ah5, bl9) | 0;
          hi = hi + Math.imul(ah5, bh9) | 0;
          var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
          w14 &= 67108863;
          lo = Math.imul(al9, bl6);
          mid = Math.imul(al9, bh6);
          mid = mid + Math.imul(ah9, bl6) | 0;
          hi = Math.imul(ah9, bh6);
          lo = lo + Math.imul(al8, bl7) | 0;
          mid = mid + Math.imul(al8, bh7) | 0;
          mid = mid + Math.imul(ah8, bl7) | 0;
          hi = hi + Math.imul(ah8, bh7) | 0;
          lo = lo + Math.imul(al7, bl8) | 0;
          mid = mid + Math.imul(al7, bh8) | 0;
          mid = mid + Math.imul(ah7, bl8) | 0;
          hi = hi + Math.imul(ah7, bh8) | 0;
          lo = lo + Math.imul(al6, bl9) | 0;
          mid = mid + Math.imul(al6, bh9) | 0;
          mid = mid + Math.imul(ah6, bl9) | 0;
          hi = hi + Math.imul(ah6, bh9) | 0;
          var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
          w15 &= 67108863;
          lo = Math.imul(al9, bl7);
          mid = Math.imul(al9, bh7);
          mid = mid + Math.imul(ah9, bl7) | 0;
          hi = Math.imul(ah9, bh7);
          lo = lo + Math.imul(al8, bl8) | 0;
          mid = mid + Math.imul(al8, bh8) | 0;
          mid = mid + Math.imul(ah8, bl8) | 0;
          hi = hi + Math.imul(ah8, bh8) | 0;
          lo = lo + Math.imul(al7, bl9) | 0;
          mid = mid + Math.imul(al7, bh9) | 0;
          mid = mid + Math.imul(ah7, bl9) | 0;
          hi = hi + Math.imul(ah7, bh9) | 0;
          var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
          w16 &= 67108863;
          lo = Math.imul(al9, bl8);
          mid = Math.imul(al9, bh8);
          mid = mid + Math.imul(ah9, bl8) | 0;
          hi = Math.imul(ah9, bh8);
          lo = lo + Math.imul(al8, bl9) | 0;
          mid = mid + Math.imul(al8, bh9) | 0;
          mid = mid + Math.imul(ah8, bl9) | 0;
          hi = hi + Math.imul(ah8, bh9) | 0;
          var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
          w17 &= 67108863;
          lo = Math.imul(al9, bl9);
          mid = Math.imul(al9, bh9);
          mid = mid + Math.imul(ah9, bl9) | 0;
          hi = Math.imul(ah9, bh9);
          var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
          w18 &= 67108863;
          o[0] = w0;
          o[1] = w1;
          o[2] = w2;
          o[3] = w3;
          o[4] = w4;
          o[5] = w5;
          o[6] = w6;
          o[7] = w7;
          o[8] = w8;
          o[9] = w9;
          o[10] = w10;
          o[11] = w11;
          o[12] = w12;
          o[13] = w13;
          o[14] = w14;
          o[15] = w15;
          o[16] = w16;
          o[17] = w17;
          o[18] = w18;
          if (c !== 0) {
            o[19] = c;
            out.length++;
          }
          return out;
        };
        if (!Math.imul) {
          comb10MulTo = smallMulTo;
        }
        function bigMulTo(self2, num2, out) {
          out.negative = num2.negative ^ self2.negative;
          out.length = self2.length + num2.length;
          var carry = 0;
          var hncarry = 0;
          for (var k = 0; k < out.length - 1; k++) {
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num2.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j;
              var a = self2.words[i] | 0;
              var b = num2.words[j] | 0;
              var r = a * b;
              var lo = r & 67108863;
              ncarry = ncarry + (r / 67108864 | 0) | 0;
              lo = lo + rword | 0;
              rword = lo & 67108863;
              ncarry = ncarry + (lo >>> 26) | 0;
              hncarry += ncarry >>> 26;
              ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
          }
          if (carry !== 0) {
            out.words[k] = carry;
          } else {
            out.length--;
          }
          return out.strip();
        }
        function jumboMulTo(self2, num2, out) {
          var fftm = new FFTM();
          return fftm.mulp(self2, num2, out);
        }
        BN.prototype.mulTo = function mulTo(num2, out) {
          var res;
          var len = this.length + num2.length;
          if (this.length === 10 && num2.length === 10) {
            res = comb10MulTo(this, num2, out);
          } else if (len < 63) {
            res = smallMulTo(this, num2, out);
          } else if (len < 1024) {
            res = bigMulTo(this, num2, out);
          } else {
            res = jumboMulTo(this, num2, out);
          }
          return res;
        };
        function FFTM(x, y) {
          this.x = x;
          this.y = y;
        }
        FFTM.prototype.makeRBT = function makeRBT(N) {
          var t = new Array(N);
          var l = BN.prototype._countBits(N) - 1;
          for (var i = 0; i < N; i++) {
            t[i] = this.revBin(i, l, N);
          }
          return t;
        };
        FFTM.prototype.revBin = function revBin(x, l, N) {
          if (x === 0 || x === N - 1) return x;
          var rb = 0;
          for (var i = 0; i < l; i++) {
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
          }
          return rb;
        };
        FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
          for (var i = 0; i < N; i++) {
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
          }
        };
        FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
          this.permute(rbt, rws, iws, rtws, itws, N);
          for (var s = 1; s < N; s <<= 1) {
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for (var p = 0; p < N; p += l) {
              var rtwdf_ = rtwdf;
              var itwdf_ = itwdf;
              for (var j = 0; j < s; j++) {
                var re = rtws[p + j];
                var ie = itws[p + j];
                var ro = rtws[p + j + s];
                var io = itws[p + j + s];
                var rx = rtwdf_ * ro - itwdf_ * io;
                io = rtwdf_ * io + itwdf_ * ro;
                ro = rx;
                rtws[p + j] = re + ro;
                itws[p + j] = ie + io;
                rtws[p + j + s] = re - ro;
                itws[p + j + s] = ie - io;
                if (j !== l) {
                  rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                  itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                  rtwdf_ = rx;
                }
              }
            }
          }
        };
        FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
          var N = Math.max(m, n) | 1;
          var odd = N & 1;
          var i = 0;
          for (N = N / 2 | 0; N; N = N >>> 1) {
            i++;
          }
          return 1 << i + 1 + odd;
        };
        FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
          if (N <= 1) return;
          for (var i = 0; i < N / 2; i++) {
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
          }
        };
        FFTM.prototype.normalize13b = function normalize13b(ws, N) {
          var carry = 0;
          for (var i = 0; i < N / 2; i++) {
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) {
              carry = 0;
            } else {
              carry = w / 67108864 | 0;
            }
          }
          return ws;
        };
        FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
          var carry = 0;
          for (var i = 0; i < len; i++) {
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
          }
          for (i = 2 * len; i < N; ++i) {
            rws[i] = 0;
          }
          assert4(carry === 0);
          assert4((carry & ~8191) === 0);
        };
        FFTM.prototype.stub = function stub(N) {
          var ph = new Array(N);
          for (var i = 0; i < N; i++) {
            ph[i] = 0;
          }
          return ph;
        };
        FFTM.prototype.mulp = function mulp(x, y, out) {
          var N = 2 * this.guessLen13b(x.length, y.length);
          var rbt = this.makeRBT(N);
          var _ = this.stub(N);
          var rws = new Array(N);
          var rwst = new Array(N);
          var iwst = new Array(N);
          var nrws = new Array(N);
          var nrwst = new Array(N);
          var niwst = new Array(N);
          var rmws = out.words;
          rmws.length = N;
          this.convert13b(x.words, x.length, rws, N);
          this.convert13b(y.words, y.length, nrws, N);
          this.transform(rws, _, rwst, iwst, N, rbt);
          this.transform(nrws, _, nrwst, niwst, N, rbt);
          for (var i = 0; i < N; i++) {
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
          }
          this.conjugate(rwst, iwst, N);
          this.transform(rwst, iwst, rmws, _, N, rbt);
          this.conjugate(rmws, _, N);
          this.normalize13b(rmws, N);
          out.negative = x.negative ^ y.negative;
          out.length = x.length + y.length;
          return out.strip();
        };
        BN.prototype.mul = function mul(num2) {
          var out = new BN(null);
          out.words = new Array(this.length + num2.length);
          return this.mulTo(num2, out);
        };
        BN.prototype.mulf = function mulf(num2) {
          var out = new BN(null);
          out.words = new Array(this.length + num2.length);
          return jumboMulTo(this, num2, out);
        };
        BN.prototype.imul = function imul(num2) {
          return this.clone().mulTo(num2, this);
        };
        BN.prototype.imuln = function imuln(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = (this.words[i] | 0) * num2;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return this;
        };
        BN.prototype.muln = function muln(num2) {
          return this.clone().imuln(num2);
        };
        BN.prototype.sqr = function sqr() {
          return this.mul(this);
        };
        BN.prototype.isqr = function isqr() {
          return this.imul(this.clone());
        };
        BN.prototype.pow = function pow3(num2) {
          var w = toBitArray(num2);
          if (w.length === 0) return new BN(1);
          var res = this;
          for (var i = 0; i < w.length; i++, res = res.sqr()) {
            if (w[i] !== 0) break;
          }
          if (++i < w.length) {
            for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
              if (w[i] === 0) continue;
              res = res.mul(q);
            }
          }
          return res;
        };
        BN.prototype.iushln = function iushln(bits) {
          assert4(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          var carryMask = 67108863 >>> 26 - r << 26 - r;
          var i;
          if (r !== 0) {
            var carry = 0;
            for (i = 0; i < this.length; i++) {
              var newCarry = this.words[i] & carryMask;
              var c = (this.words[i] | 0) - newCarry << r;
              this.words[i] = c | carry;
              carry = newCarry >>> 26 - r;
            }
            if (carry) {
              this.words[i] = carry;
              this.length++;
            }
          }
          if (s !== 0) {
            for (i = this.length - 1; i >= 0; i--) {
              this.words[i + s] = this.words[i];
            }
            for (i = 0; i < s; i++) {
              this.words[i] = 0;
            }
            this.length += s;
          }
          return this.strip();
        };
        BN.prototype.ishln = function ishln(bits) {
          assert4(this.negative === 0);
          return this.iushln(bits);
        };
        BN.prototype.iushrn = function iushrn(bits, hint, extended) {
          assert4(typeof bits === "number" && bits >= 0);
          var h;
          if (hint) {
            h = (hint - hint % 26) / 26;
          } else {
            h = 0;
          }
          var r = bits % 26;
          var s = Math.min((bits - r) / 26, this.length);
          var mask = 67108863 ^ 67108863 >>> r << r;
          var maskedWords = extended;
          h -= s;
          h = Math.max(0, h);
          if (maskedWords) {
            for (var i = 0; i < s; i++) {
              maskedWords.words[i] = this.words[i];
            }
            maskedWords.length = s;
          }
          if (s === 0) {
          } else if (this.length > s) {
            this.length -= s;
            for (i = 0; i < this.length; i++) {
              this.words[i] = this.words[i + s];
            }
          } else {
            this.words[0] = 0;
            this.length = 1;
          }
          var carry = 0;
          for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
          }
          if (maskedWords && carry !== 0) {
            maskedWords.words[maskedWords.length++] = carry;
          }
          if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
          }
          return this.strip();
        };
        BN.prototype.ishrn = function ishrn(bits, hint, extended) {
          assert4(this.negative === 0);
          return this.iushrn(bits, hint, extended);
        };
        BN.prototype.shln = function shln(bits) {
          return this.clone().ishln(bits);
        };
        BN.prototype.ushln = function ushln(bits) {
          return this.clone().iushln(bits);
        };
        BN.prototype.shrn = function shrn(bits) {
          return this.clone().ishrn(bits);
        };
        BN.prototype.ushrn = function ushrn(bits) {
          return this.clone().iushrn(bits);
        };
        BN.prototype.testn = function testn(bit) {
          assert4(typeof bit === "number" && bit >= 0);
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s) return false;
          var w = this.words[s];
          return !!(w & q);
        };
        BN.prototype.imaskn = function imaskn(bits) {
          assert4(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          assert4(this.negative === 0, "imaskn works only with positive numbers");
          if (this.length <= s) {
            return this;
          }
          if (r !== 0) {
            s++;
          }
          this.length = Math.min(s, this.length);
          if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
          }
          return this.strip();
        };
        BN.prototype.maskn = function maskn(bits) {
          return this.clone().imaskn(bits);
        };
        BN.prototype.iaddn = function iaddn(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          if (num2 < 0) return this.isubn(-num2);
          if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) < num2) {
              this.words[0] = num2 - (this.words[0] | 0);
              this.negative = 0;
              return this;
            }
            this.negative = 0;
            this.isubn(num2);
            this.negative = 1;
            return this;
          }
          return this._iaddn(num2);
        };
        BN.prototype._iaddn = function _iaddn(num2) {
          this.words[0] += num2;
          for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
            this.words[i] -= 67108864;
            if (i === this.length - 1) {
              this.words[i + 1] = 1;
            } else {
              this.words[i + 1]++;
            }
          }
          this.length = Math.max(this.length, i + 1);
          return this;
        };
        BN.prototype.isubn = function isubn(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          if (num2 < 0) return this.iaddn(-num2);
          if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num2);
            this.negative = 1;
            return this;
          }
          this.words[0] -= num2;
          if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
          } else {
            for (var i = 0; i < this.length && this.words[i] < 0; i++) {
              this.words[i] += 67108864;
              this.words[i + 1] -= 1;
            }
          }
          return this.strip();
        };
        BN.prototype.addn = function addn(num2) {
          return this.clone().iaddn(num2);
        };
        BN.prototype.subn = function subn(num2) {
          return this.clone().isubn(num2);
        };
        BN.prototype.iabs = function iabs() {
          this.negative = 0;
          return this;
        };
        BN.prototype.abs = function abs() {
          return this.clone().iabs();
        };
        BN.prototype._ishlnsubmul = function _ishlnsubmul(num2, mul, shift) {
          var len = num2.length + shift;
          var i;
          this._expand(len);
          var w;
          var carry = 0;
          for (i = 0; i < num2.length; i++) {
            w = (this.words[i + shift] | 0) + carry;
            var right = (num2.words[i] | 0) * mul;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
          }
          for (; i < this.length - shift; i++) {
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
          }
          if (carry === 0) return this.strip();
          assert4(carry === -1);
          carry = 0;
          for (i = 0; i < this.length; i++) {
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
          }
          this.negative = 1;
          return this.strip();
        };
        BN.prototype._wordDiv = function _wordDiv(num2, mode) {
          var shift = this.length - num2.length;
          var a = this.clone();
          var b = num2;
          var bhi = b.words[b.length - 1] | 0;
          var bhiBits = this._countBits(bhi);
          shift = 26 - bhiBits;
          if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
          }
          var m = a.length - b.length;
          var q;
          if (mode !== "mod") {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for (var i = 0; i < q.length; i++) {
              q.words[i] = 0;
            }
          }
          var diff = a.clone()._ishlnsubmul(b, 1, m);
          if (diff.negative === 0) {
            a = diff;
            if (q) {
              q.words[m] = 1;
            }
          }
          for (var j = m - 1; j >= 0; j--) {
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while (a.negative !== 0) {
              qj--;
              a.negative = 0;
              a._ishlnsubmul(b, 1, j);
              if (!a.isZero()) {
                a.negative ^= 1;
              }
            }
            if (q) {
              q.words[j] = qj;
            }
          }
          if (q) {
            q.strip();
          }
          a.strip();
          if (mode !== "div" && shift !== 0) {
            a.iushrn(shift);
          }
          return {
            div: q || null,
            mod: a
          };
        };
        BN.prototype.divmod = function divmod(num2, mode, positive) {
          assert4(!num2.isZero());
          if (this.isZero()) {
            return {
              div: new BN(0),
              mod: new BN(0)
            };
          }
          var div, mod2, res;
          if (this.negative !== 0 && num2.negative === 0) {
            res = this.neg().divmod(num2, mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            if (mode !== "div") {
              mod2 = res.mod.neg();
              if (positive && mod2.negative !== 0) {
                mod2.iadd(num2);
              }
            }
            return {
              div,
              mod: mod2
            };
          }
          if (this.negative === 0 && num2.negative !== 0) {
            res = this.divmod(num2.neg(), mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            return {
              div,
              mod: res.mod
            };
          }
          if ((this.negative & num2.negative) !== 0) {
            res = this.neg().divmod(num2.neg(), mode);
            if (mode !== "div") {
              mod2 = res.mod.neg();
              if (positive && mod2.negative !== 0) {
                mod2.isub(num2);
              }
            }
            return {
              div: res.div,
              mod: mod2
            };
          }
          if (num2.length > this.length || this.cmp(num2) < 0) {
            return {
              div: new BN(0),
              mod: this
            };
          }
          if (num2.length === 1) {
            if (mode === "div") {
              return {
                div: this.divn(num2.words[0]),
                mod: null
              };
            }
            if (mode === "mod") {
              return {
                div: null,
                mod: new BN(this.modn(num2.words[0]))
              };
            }
            return {
              div: this.divn(num2.words[0]),
              mod: new BN(this.modn(num2.words[0]))
            };
          }
          return this._wordDiv(num2, mode);
        };
        BN.prototype.div = function div(num2) {
          return this.divmod(num2, "div", false).div;
        };
        BN.prototype.mod = function mod2(num2) {
          return this.divmod(num2, "mod", false).mod;
        };
        BN.prototype.umod = function umod(num2) {
          return this.divmod(num2, "mod", true).mod;
        };
        BN.prototype.divRound = function divRound(num2) {
          var dm = this.divmod(num2);
          if (dm.mod.isZero()) return dm.div;
          var mod2 = dm.div.negative !== 0 ? dm.mod.isub(num2) : dm.mod;
          var half = num2.ushrn(1);
          var r2 = num2.andln(1);
          var cmp = mod2.cmp(half);
          if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
          return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
        };
        BN.prototype.modn = function modn(num2) {
          assert4(num2 <= 67108863);
          var p = (1 << 26) % num2;
          var acc = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            acc = (p * acc + (this.words[i] | 0)) % num2;
          }
          return acc;
        };
        BN.prototype.idivn = function idivn(num2) {
          assert4(num2 <= 67108863);
          var carry = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num2 | 0;
            carry = w % num2;
          }
          return this.strip();
        };
        BN.prototype.divn = function divn(num2) {
          return this.clone().idivn(num2);
        };
        BN.prototype.egcd = function egcd(p) {
          assert4(p.negative === 0);
          assert4(!p.isZero());
          var x = this;
          var y = p.clone();
          if (x.negative !== 0) {
            x = x.umod(p);
          } else {
            x = x.clone();
          }
          var A = new BN(1);
          var B = new BN(0);
          var C = new BN(0);
          var D = new BN(1);
          var g = 0;
          while (x.isEven() && y.isEven()) {
            x.iushrn(1);
            y.iushrn(1);
            ++g;
          }
          var yp = y.clone();
          var xp = x.clone();
          while (!x.isZero()) {
            for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
            if (i > 0) {
              x.iushrn(i);
              while (i-- > 0) {
                if (A.isOdd() || B.isOdd()) {
                  A.iadd(yp);
                  B.isub(xp);
                }
                A.iushrn(1);
                B.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
            if (j > 0) {
              y.iushrn(j);
              while (j-- > 0) {
                if (C.isOdd() || D.isOdd()) {
                  C.iadd(yp);
                  D.isub(xp);
                }
                C.iushrn(1);
                D.iushrn(1);
              }
            }
            if (x.cmp(y) >= 0) {
              x.isub(y);
              A.isub(C);
              B.isub(D);
            } else {
              y.isub(x);
              C.isub(A);
              D.isub(B);
            }
          }
          return {
            a: C,
            b: D,
            gcd: y.iushln(g)
          };
        };
        BN.prototype._invmp = function _invmp(p) {
          assert4(p.negative === 0);
          assert4(!p.isZero());
          var a = this;
          var b = p.clone();
          if (a.negative !== 0) {
            a = a.umod(p);
          } else {
            a = a.clone();
          }
          var x1 = new BN(1);
          var x2 = new BN(0);
          var delta = b.clone();
          while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
            for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
            if (i > 0) {
              a.iushrn(i);
              while (i-- > 0) {
                if (x1.isOdd()) {
                  x1.iadd(delta);
                }
                x1.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
            if (j > 0) {
              b.iushrn(j);
              while (j-- > 0) {
                if (x2.isOdd()) {
                  x2.iadd(delta);
                }
                x2.iushrn(1);
              }
            }
            if (a.cmp(b) >= 0) {
              a.isub(b);
              x1.isub(x2);
            } else {
              b.isub(a);
              x2.isub(x1);
            }
          }
          var res;
          if (a.cmpn(1) === 0) {
            res = x1;
          } else {
            res = x2;
          }
          if (res.cmpn(0) < 0) {
            res.iadd(p);
          }
          return res;
        };
        BN.prototype.gcd = function gcd2(num2) {
          if (this.isZero()) return num2.abs();
          if (num2.isZero()) return this.abs();
          var a = this.clone();
          var b = num2.clone();
          a.negative = 0;
          b.negative = 0;
          for (var shift = 0; a.isEven() && b.isEven(); shift++) {
            a.iushrn(1);
            b.iushrn(1);
          }
          do {
            while (a.isEven()) {
              a.iushrn(1);
            }
            while (b.isEven()) {
              b.iushrn(1);
            }
            var r = a.cmp(b);
            if (r < 0) {
              var t = a;
              a = b;
              b = t;
            } else if (r === 0 || b.cmpn(1) === 0) {
              break;
            }
            a.isub(b);
          } while (true);
          return b.iushln(shift);
        };
        BN.prototype.invm = function invm(num2) {
          return this.egcd(num2).a.umod(num2);
        };
        BN.prototype.isEven = function isEven() {
          return (this.words[0] & 1) === 0;
        };
        BN.prototype.isOdd = function isOdd() {
          return (this.words[0] & 1) === 1;
        };
        BN.prototype.andln = function andln(num2) {
          return this.words[0] & num2;
        };
        BN.prototype.bincn = function bincn(bit) {
          assert4(typeof bit === "number");
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
          }
          var carry = q;
          for (var i = s; carry !== 0 && i < this.length; i++) {
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return this;
        };
        BN.prototype.isZero = function isZero() {
          return this.length === 1 && this.words[0] === 0;
        };
        BN.prototype.cmpn = function cmpn(num2) {
          var negative = num2 < 0;
          if (this.negative !== 0 && !negative) return -1;
          if (this.negative === 0 && negative) return 1;
          this.strip();
          var res;
          if (this.length > 1) {
            res = 1;
          } else {
            if (negative) {
              num2 = -num2;
            }
            assert4(num2 <= 67108863, "Number is too big");
            var w = this.words[0] | 0;
            res = w === num2 ? 0 : w < num2 ? -1 : 1;
          }
          if (this.negative !== 0) return -res | 0;
          return res;
        };
        BN.prototype.cmp = function cmp(num2) {
          if (this.negative !== 0 && num2.negative === 0) return -1;
          if (this.negative === 0 && num2.negative !== 0) return 1;
          var res = this.ucmp(num2);
          if (this.negative !== 0) return -res | 0;
          return res;
        };
        BN.prototype.ucmp = function ucmp(num2) {
          if (this.length > num2.length) return 1;
          if (this.length < num2.length) return -1;
          var res = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var a = this.words[i] | 0;
            var b = num2.words[i] | 0;
            if (a === b) continue;
            if (a < b) {
              res = -1;
            } else if (a > b) {
              res = 1;
            }
            break;
          }
          return res;
        };
        BN.prototype.gtn = function gtn(num2) {
          return this.cmpn(num2) === 1;
        };
        BN.prototype.gt = function gt(num2) {
          return this.cmp(num2) === 1;
        };
        BN.prototype.gten = function gten(num2) {
          return this.cmpn(num2) >= 0;
        };
        BN.prototype.gte = function gte(num2) {
          return this.cmp(num2) >= 0;
        };
        BN.prototype.ltn = function ltn(num2) {
          return this.cmpn(num2) === -1;
        };
        BN.prototype.lt = function lt(num2) {
          return this.cmp(num2) === -1;
        };
        BN.prototype.lten = function lten(num2) {
          return this.cmpn(num2) <= 0;
        };
        BN.prototype.lte = function lte(num2) {
          return this.cmp(num2) <= 0;
        };
        BN.prototype.eqn = function eqn(num2) {
          return this.cmpn(num2) === 0;
        };
        BN.prototype.eq = function eq(num2) {
          return this.cmp(num2) === 0;
        };
        BN.red = function red(num2) {
          return new Red(num2);
        };
        BN.prototype.toRed = function toRed(ctx) {
          assert4(!this.red, "Already a number in reduction context");
          assert4(this.negative === 0, "red works only with positives");
          return ctx.convertTo(this)._forceRed(ctx);
        };
        BN.prototype.fromRed = function fromRed() {
          assert4(this.red, "fromRed works only with numbers in reduction context");
          return this.red.convertFrom(this);
        };
        BN.prototype._forceRed = function _forceRed(ctx) {
          this.red = ctx;
          return this;
        };
        BN.prototype.forceRed = function forceRed(ctx) {
          assert4(!this.red, "Already a number in reduction context");
          return this._forceRed(ctx);
        };
        BN.prototype.redAdd = function redAdd(num2) {
          assert4(this.red, "redAdd works only with red numbers");
          return this.red.add(this, num2);
        };
        BN.prototype.redIAdd = function redIAdd(num2) {
          assert4(this.red, "redIAdd works only with red numbers");
          return this.red.iadd(this, num2);
        };
        BN.prototype.redSub = function redSub(num2) {
          assert4(this.red, "redSub works only with red numbers");
          return this.red.sub(this, num2);
        };
        BN.prototype.redISub = function redISub(num2) {
          assert4(this.red, "redISub works only with red numbers");
          return this.red.isub(this, num2);
        };
        BN.prototype.redShl = function redShl(num2) {
          assert4(this.red, "redShl works only with red numbers");
          return this.red.shl(this, num2);
        };
        BN.prototype.redMul = function redMul(num2) {
          assert4(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num2);
          return this.red.mul(this, num2);
        };
        BN.prototype.redIMul = function redIMul(num2) {
          assert4(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num2);
          return this.red.imul(this, num2);
        };
        BN.prototype.redSqr = function redSqr() {
          assert4(this.red, "redSqr works only with red numbers");
          this.red._verify1(this);
          return this.red.sqr(this);
        };
        BN.prototype.redISqr = function redISqr() {
          assert4(this.red, "redISqr works only with red numbers");
          this.red._verify1(this);
          return this.red.isqr(this);
        };
        BN.prototype.redSqrt = function redSqrt() {
          assert4(this.red, "redSqrt works only with red numbers");
          this.red._verify1(this);
          return this.red.sqrt(this);
        };
        BN.prototype.redInvm = function redInvm() {
          assert4(this.red, "redInvm works only with red numbers");
          this.red._verify1(this);
          return this.red.invm(this);
        };
        BN.prototype.redNeg = function redNeg() {
          assert4(this.red, "redNeg works only with red numbers");
          this.red._verify1(this);
          return this.red.neg(this);
        };
        BN.prototype.redPow = function redPow(num2) {
          assert4(this.red && !num2.red, "redPow(normalNum)");
          this.red._verify1(this);
          return this.red.pow(this, num2);
        };
        var primes = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function MPrime(name5, p) {
          this.name = name5;
          this.p = new BN(p, 16);
          this.n = this.p.bitLength();
          this.k = new BN(1).iushln(this.n).isub(this.p);
          this.tmp = this._tmp();
        }
        MPrime.prototype._tmp = function _tmp() {
          var tmp = new BN(null);
          tmp.words = new Array(Math.ceil(this.n / 13));
          return tmp;
        };
        MPrime.prototype.ireduce = function ireduce(num2) {
          var r = num2;
          var rlen;
          do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
          } while (rlen > this.n);
          var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
          if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
          } else if (cmp > 0) {
            r.isub(this.p);
          } else {
            if (r.strip !== void 0) {
              r.strip();
            } else {
              r._strip();
            }
          }
          return r;
        };
        MPrime.prototype.split = function split2(input, out) {
          input.iushrn(this.n, 0, out);
        };
        MPrime.prototype.imulK = function imulK(num2) {
          return num2.imul(this.k);
        };
        function K256() {
          MPrime.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        inherits2(K256, MPrime);
        K256.prototype.split = function split2(input, output3) {
          var mask = 4194303;
          var outLen = Math.min(input.length, 9);
          for (var i = 0; i < outLen; i++) {
            output3.words[i] = input.words[i];
          }
          output3.length = outLen;
          if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
          }
          var prev = input.words[9];
          output3.words[output3.length++] = prev & mask;
          for (i = 10; i < input.length; i++) {
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
          }
          prev >>>= 22;
          input.words[i - 10] = prev;
          if (prev === 0 && input.length > 10) {
            input.length -= 10;
          } else {
            input.length -= 9;
          }
        };
        K256.prototype.imulK = function imulK(num2) {
          num2.words[num2.length] = 0;
          num2.words[num2.length + 1] = 0;
          num2.length += 2;
          var lo = 0;
          for (var i = 0; i < num2.length; i++) {
            var w = num2.words[i] | 0;
            lo += w * 977;
            num2.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
          }
          if (num2.words[num2.length - 1] === 0) {
            num2.length--;
            if (num2.words[num2.length - 1] === 0) {
              num2.length--;
            }
          }
          return num2;
        };
        function P224() {
          MPrime.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        inherits2(P224, MPrime);
        function P192() {
          MPrime.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        inherits2(P192, MPrime);
        function P25519() {
          MPrime.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        inherits2(P25519, MPrime);
        P25519.prototype.imulK = function imulK(num2) {
          var carry = 0;
          for (var i = 0; i < num2.length; i++) {
            var hi = (num2.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num2.words[i] = lo;
            carry = hi;
          }
          if (carry !== 0) {
            num2.words[num2.length++] = carry;
          }
          return num2;
        };
        BN._prime = function prime(name5) {
          if (primes[name5]) return primes[name5];
          var prime2;
          if (name5 === "k256") {
            prime2 = new K256();
          } else if (name5 === "p224") {
            prime2 = new P224();
          } else if (name5 === "p192") {
            prime2 = new P192();
          } else if (name5 === "p25519") {
            prime2 = new P25519();
          } else {
            throw new Error("Unknown prime " + name5);
          }
          primes[name5] = prime2;
          return prime2;
        };
        function Red(m) {
          if (typeof m === "string") {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
          } else {
            assert4(m.gtn(1), "modulus must be greater than 1");
            this.m = m;
            this.prime = null;
          }
        }
        Red.prototype._verify1 = function _verify1(a) {
          assert4(a.negative === 0, "red works only with positives");
          assert4(a.red, "red works only with red numbers");
        };
        Red.prototype._verify2 = function _verify2(a, b) {
          assert4((a.negative | b.negative) === 0, "red works only with positives");
          assert4(
            a.red && a.red === b.red,
            "red works only with red numbers"
          );
        };
        Red.prototype.imod = function imod(a) {
          if (this.prime) return this.prime.ireduce(a)._forceRed(this);
          return a.umod(this.m)._forceRed(this);
        };
        Red.prototype.neg = function neg(a) {
          if (a.isZero()) {
            return a.clone();
          }
          return this.m.sub(a)._forceRed(this);
        };
        Red.prototype.add = function add2(a, b) {
          this._verify2(a, b);
          var res = a.add(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.iadd = function iadd(a, b) {
          this._verify2(a, b);
          var res = a.iadd(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res;
        };
        Red.prototype.sub = function sub(a, b) {
          this._verify2(a, b);
          var res = a.sub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.isub = function isub(a, b) {
          this._verify2(a, b);
          var res = a.isub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res;
        };
        Red.prototype.shl = function shl(a, num2) {
          this._verify1(a);
          return this.imod(a.ushln(num2));
        };
        Red.prototype.imul = function imul(a, b) {
          this._verify2(a, b);
          return this.imod(a.imul(b));
        };
        Red.prototype.mul = function mul(a, b) {
          this._verify2(a, b);
          return this.imod(a.mul(b));
        };
        Red.prototype.isqr = function isqr(a) {
          return this.imul(a, a.clone());
        };
        Red.prototype.sqr = function sqr(a) {
          return this.mul(a, a);
        };
        Red.prototype.sqrt = function sqrt(a) {
          if (a.isZero()) return a.clone();
          var mod3 = this.m.andln(3);
          assert4(mod3 % 2 === 1);
          if (mod3 === 3) {
            var pow3 = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow3);
          }
          var q = this.m.subn(1);
          var s = 0;
          while (!q.isZero() && q.andln(1) === 0) {
            s++;
            q.iushrn(1);
          }
          assert4(!q.isZero());
          var one = new BN(1).toRed(this);
          var nOne = one.redNeg();
          var lpow = this.m.subn(1).iushrn(1);
          var z = this.m.bitLength();
          z = new BN(2 * z * z).toRed(this);
          while (this.pow(z, lpow).cmp(nOne) !== 0) {
            z.redIAdd(nOne);
          }
          var c = this.pow(z, q);
          var r = this.pow(a, q.addn(1).iushrn(1));
          var t = this.pow(a, q);
          var m = s;
          while (t.cmp(one) !== 0) {
            var tmp = t;
            for (var i = 0; tmp.cmp(one) !== 0; i++) {
              tmp = tmp.redSqr();
            }
            assert4(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
          }
          return r;
        };
        Red.prototype.invm = function invm(a) {
          var inv = a._invmp(this.m);
          if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
          } else {
            return this.imod(inv);
          }
        };
        Red.prototype.pow = function pow3(a, num2) {
          if (num2.isZero()) return new BN(1).toRed(this);
          if (num2.cmpn(1) === 0) return a.clone();
          var windowSize = 4;
          var wnd = new Array(1 << windowSize);
          wnd[0] = new BN(1).toRed(this);
          wnd[1] = a;
          for (var i = 2; i < wnd.length; i++) {
            wnd[i] = this.mul(wnd[i - 1], a);
          }
          var res = wnd[0];
          var current = 0;
          var currentLen = 0;
          var start = num2.bitLength() % 26;
          if (start === 0) {
            start = 26;
          }
          for (i = num2.length - 1; i >= 0; i--) {
            var word = num2.words[i];
            for (var j = start - 1; j >= 0; j--) {
              var bit = word >> j & 1;
              if (res !== wnd[0]) {
                res = this.sqr(res);
              }
              if (bit === 0 && current === 0) {
                currentLen = 0;
                continue;
              }
              current <<= 1;
              current |= bit;
              currentLen++;
              if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
              res = this.mul(res, wnd[current]);
              currentLen = 0;
              current = 0;
            }
            start = 26;
          }
          return res;
        };
        Red.prototype.convertTo = function convertTo(num2) {
          var r = num2.umod(this.m);
          return r === num2 ? r.clone() : r;
        };
        Red.prototype.convertFrom = function convertFrom(num2) {
          var res = num2.clone();
          res.red = null;
          return res;
        };
        BN.mont = function mont(num2) {
          return new Mont(num2);
        };
        function Mont(m) {
          Red.call(this, m);
          this.shift = this.m.bitLength();
          if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
          }
          this.r = new BN(1).iushln(this.shift);
          this.r2 = this.imod(this.r.sqr());
          this.rinv = this.r._invmp(this.m);
          this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
          this.minv = this.minv.umod(this.r);
          this.minv = this.r.sub(this.minv);
        }
        inherits2(Mont, Red);
        Mont.prototype.convertTo = function convertTo(num2) {
          return this.imod(num2.ushln(this.shift));
        };
        Mont.prototype.convertFrom = function convertFrom(num2) {
          var r = this.imod(num2.mul(this.rinv));
          r.red = null;
          return r;
        };
        Mont.prototype.imul = function imul(a, b) {
          if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
          }
          var t = a.imul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.mul = function mul(a, b) {
          if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
          var t = a.mul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.invm = function invm(a) {
          var res = this.imod(a._invmp(this.m).mul(this.r2));
          return res._forceRed(this);
        };
      })(typeof module === "undefined" || module, exports2);
    }
  });

  // node_modules/minimalistic-assert/index.js
  var require_minimalistic_assert = __commonJS({
    "node_modules/minimalistic-assert/index.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = assert4;
      function assert4(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      assert4.equal = function assertEqual(l, r, msg) {
        if (l != r)
          throw new Error(msg || "Assertion failed: " + l + " != " + r);
      };
    }
  });

  // node_modules/minimalistic-crypto-utils/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/minimalistic-crypto-utils/lib/utils.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = exports2;
      function toArray2(msg, enc) {
        if (Array.isArray(msg))
          return msg.slice();
        if (!msg)
          return [];
        var res = [];
        if (typeof msg !== "string") {
          for (var i = 0; i < msg.length; i++)
            res[i] = msg[i] | 0;
          return res;
        }
        if (enc === "hex") {
          msg = msg.replace(/[^a-z0-9]+/ig, "");
          if (msg.length % 2 !== 0)
            msg = "0" + msg;
          for (var i = 0; i < msg.length; i += 2)
            res.push(parseInt(msg[i] + msg[i + 1], 16));
        } else {
          for (var i = 0; i < msg.length; i++) {
            var c = msg.charCodeAt(i);
            var hi = c >> 8;
            var lo = c & 255;
            if (hi)
              res.push(hi, lo);
            else
              res.push(lo);
          }
        }
        return res;
      }
      utils2.toArray = toArray2;
      function zero2(word) {
        if (word.length === 1)
          return "0" + word;
        else
          return word;
      }
      utils2.zero2 = zero2;
      function toHex2(msg) {
        var res = "";
        for (var i = 0; i < msg.length; i++)
          res += zero2(msg[i].toString(16));
        return res;
      }
      utils2.toHex = toHex2;
      utils2.encode = function encode11(arr, enc) {
        if (enc === "hex")
          return toHex2(arr);
        else
          return arr;
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/utils.js
  var require_utils2 = __commonJS({
    "node_modules/elliptic/lib/elliptic/utils.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = exports2;
      var BN = require_bn();
      var minAssert = require_minimalistic_assert();
      var minUtils = require_utils();
      utils2.assert = minAssert;
      utils2.toArray = minUtils.toArray;
      utils2.zero2 = minUtils.zero2;
      utils2.toHex = minUtils.toHex;
      utils2.encode = minUtils.encode;
      function getNAF(num2, w, bits) {
        var naf = new Array(Math.max(num2.bitLength(), bits) + 1);
        var i;
        for (i = 0; i < naf.length; i += 1) {
          naf[i] = 0;
        }
        var ws = 1 << w + 1;
        var k = num2.clone();
        for (i = 0; i < naf.length; i++) {
          var z;
          var mod2 = k.andln(ws - 1);
          if (k.isOdd()) {
            if (mod2 > (ws >> 1) - 1)
              z = (ws >> 1) - mod2;
            else
              z = mod2;
            k.isubn(z);
          } else {
            z = 0;
          }
          naf[i] = z;
          k.iushrn(1);
        }
        return naf;
      }
      utils2.getNAF = getNAF;
      function getJSF(k1, k2) {
        var jsf = [
          [],
          []
        ];
        k1 = k1.clone();
        k2 = k2.clone();
        var d1 = 0;
        var d2 = 0;
        var m8;
        while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
          var m14 = k1.andln(3) + d1 & 3;
          var m24 = k2.andln(3) + d2 & 3;
          if (m14 === 3)
            m14 = -1;
          if (m24 === 3)
            m24 = -1;
          var u1;
          if ((m14 & 1) === 0) {
            u1 = 0;
          } else {
            m8 = k1.andln(7) + d1 & 7;
            if ((m8 === 3 || m8 === 5) && m24 === 2)
              u1 = -m14;
            else
              u1 = m14;
          }
          jsf[0].push(u1);
          var u2;
          if ((m24 & 1) === 0) {
            u2 = 0;
          } else {
            m8 = k2.andln(7) + d2 & 7;
            if ((m8 === 3 || m8 === 5) && m14 === 2)
              u2 = -m24;
            else
              u2 = m24;
          }
          jsf[1].push(u2);
          if (2 * d1 === u1 + 1)
            d1 = 1 - d1;
          if (2 * d2 === u2 + 1)
            d2 = 1 - d2;
          k1.iushrn(1);
          k2.iushrn(1);
        }
        return jsf;
      }
      utils2.getJSF = getJSF;
      function cachedProperty(obj, name5, computer) {
        var key = "_" + name5;
        obj.prototype[name5] = function cachedProperty2() {
          return this[key] !== void 0 ? this[key] : this[key] = computer.call(this);
        };
      }
      utils2.cachedProperty = cachedProperty;
      function parseBytes(bytes4) {
        return typeof bytes4 === "string" ? utils2.toArray(bytes4, "hex") : bytes4;
      }
      utils2.parseBytes = parseBytes;
      function intFromLE(bytes4) {
        return new BN(bytes4, "hex", "le");
      }
      utils2.intFromLE = intFromLE;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/empty.js
  var empty_exports = {};
  __export(empty_exports, {
    default: () => empty_default
  });
  var empty_default;
  var init_empty = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/empty.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      empty_default = {};
    }
  });

  // node_modules/brorand/index.js
  var require_brorand = __commonJS({
    "node_modules/brorand/index.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      var r;
      module.exports = function rand(len) {
        if (!r)
          r = new Rand(null);
        return r.generate(len);
      };
      function Rand(rand) {
        this.rand = rand;
      }
      module.exports.Rand = Rand;
      Rand.prototype.generate = function generate(len) {
        return this._rand(len);
      };
      Rand.prototype._rand = function _rand(n) {
        if (this.rand.getBytes)
          return this.rand.getBytes(n);
        var res = new Uint8Array(n);
        for (var i = 0; i < res.length; i++)
          res[i] = this.rand.getByte();
        return res;
      };
      if (typeof self === "object") {
        if (self.crypto && self.crypto.getRandomValues) {
          Rand.prototype._rand = function _rand(n) {
            var arr = new Uint8Array(n);
            self.crypto.getRandomValues(arr);
            return arr;
          };
        } else if (self.msCrypto && self.msCrypto.getRandomValues) {
          Rand.prototype._rand = function _rand(n) {
            var arr = new Uint8Array(n);
            self.msCrypto.getRandomValues(arr);
            return arr;
          };
        } else if (typeof window === "object") {
          Rand.prototype._rand = function() {
            throw new Error("Not implemented yet");
          };
        }
      } else {
        try {
          crypto3 = (init_empty(), __toCommonJS(empty_exports));
          if (typeof crypto3.randomBytes !== "function")
            throw new Error("Not supported");
          Rand.prototype._rand = function _rand(n) {
            return crypto3.randomBytes(n);
          };
        } catch (e) {
        }
      }
      var crypto3;
    }
  });

  // node_modules/elliptic/lib/elliptic/curve/base.js
  var require_base = __commonJS({
    "node_modules/elliptic/lib/elliptic/curve/base.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var utils2 = require_utils2();
      var getNAF = utils2.getNAF;
      var getJSF = utils2.getJSF;
      var assert4 = utils2.assert;
      function BaseCurve(type, conf) {
        this.type = type;
        this.p = new BN(conf.p, 16);
        this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
        this.zero = new BN(0).toRed(this.red);
        this.one = new BN(1).toRed(this.red);
        this.two = new BN(2).toRed(this.red);
        this.n = conf.n && new BN(conf.n, 16);
        this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
        this._wnafT1 = new Array(4);
        this._wnafT2 = new Array(4);
        this._wnafT3 = new Array(4);
        this._wnafT4 = new Array(4);
        this._bitLength = this.n ? this.n.bitLength() : 0;
        var adjustCount = this.n && this.p.div(this.n);
        if (!adjustCount || adjustCount.cmpn(100) > 0) {
          this.redN = null;
        } else {
          this._maxwellTrick = true;
          this.redN = this.n.toRed(this.red);
        }
      }
      module.exports = BaseCurve;
      BaseCurve.prototype.point = function point() {
        throw new Error("Not implemented");
      };
      BaseCurve.prototype.validate = function validate2() {
        throw new Error("Not implemented");
      };
      BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
        assert4(p.precomputed);
        var doubles = p._getDoubles();
        var naf = getNAF(k, 1, this._bitLength);
        var I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
        I /= 3;
        var repr = [];
        var j;
        var nafW;
        for (j = 0; j < naf.length; j += doubles.step) {
          nafW = 0;
          for (var l = j + doubles.step - 1; l >= j; l--)
            nafW = (nafW << 1) + naf[l];
          repr.push(nafW);
        }
        var a = this.jpoint(null, null, null);
        var b = this.jpoint(null, null, null);
        for (var i = I; i > 0; i--) {
          for (j = 0; j < repr.length; j++) {
            nafW = repr[j];
            if (nafW === i)
              b = b.mixedAdd(doubles.points[j]);
            else if (nafW === -i)
              b = b.mixedAdd(doubles.points[j].neg());
          }
          a = a.add(b);
        }
        return a.toP();
      };
      BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
        var w = 4;
        var nafPoints = p._getNAFPoints(w);
        w = nafPoints.wnd;
        var wnd = nafPoints.points;
        var naf = getNAF(k, w, this._bitLength);
        var acc = this.jpoint(null, null, null);
        for (var i = naf.length - 1; i >= 0; i--) {
          for (var l = 0; i >= 0 && naf[i] === 0; i--)
            l++;
          if (i >= 0)
            l++;
          acc = acc.dblp(l);
          if (i < 0)
            break;
          var z = naf[i];
          assert4(z !== 0);
          if (p.type === "affine") {
            if (z > 0)
              acc = acc.mixedAdd(wnd[z - 1 >> 1]);
            else
              acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
          } else {
            if (z > 0)
              acc = acc.add(wnd[z - 1 >> 1]);
            else
              acc = acc.add(wnd[-z - 1 >> 1].neg());
          }
        }
        return p.type === "affine" ? acc.toP() : acc;
      };
      BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
        var wndWidth = this._wnafT1;
        var wnd = this._wnafT2;
        var naf = this._wnafT3;
        var max = 0;
        var i;
        var j;
        var p;
        for (i = 0; i < len; i++) {
          p = points[i];
          var nafPoints = p._getNAFPoints(defW);
          wndWidth[i] = nafPoints.wnd;
          wnd[i] = nafPoints.points;
        }
        for (i = len - 1; i >= 1; i -= 2) {
          var a = i - 1;
          var b = i;
          if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
            naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
            naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
            max = Math.max(naf[a].length, max);
            max = Math.max(naf[b].length, max);
            continue;
          }
          var comb = [
            points[a],
            /* 1 */
            null,
            /* 3 */
            null,
            /* 5 */
            points[b]
            /* 7 */
          ];
          if (points[a].y.cmp(points[b].y) === 0) {
            comb[1] = points[a].add(points[b]);
            comb[2] = points[a].toJ().mixedAdd(points[b].neg());
          } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
            comb[1] = points[a].toJ().mixedAdd(points[b]);
            comb[2] = points[a].add(points[b].neg());
          } else {
            comb[1] = points[a].toJ().mixedAdd(points[b]);
            comb[2] = points[a].toJ().mixedAdd(points[b].neg());
          }
          var index = [
            -3,
            /* -1 -1 */
            -1,
            /* -1 0 */
            -5,
            /* -1 1 */
            -7,
            /* 0 -1 */
            0,
            /* 0 0 */
            7,
            /* 0 1 */
            5,
            /* 1 -1 */
            1,
            /* 1 0 */
            3
            /* 1 1 */
          ];
          var jsf = getJSF(coeffs[a], coeffs[b]);
          max = Math.max(jsf[0].length, max);
          naf[a] = new Array(max);
          naf[b] = new Array(max);
          for (j = 0; j < max; j++) {
            var ja = jsf[0][j] | 0;
            var jb = jsf[1][j] | 0;
            naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
            naf[b][j] = 0;
            wnd[a] = comb;
          }
        }
        var acc = this.jpoint(null, null, null);
        var tmp = this._wnafT4;
        for (i = max; i >= 0; i--) {
          var k = 0;
          while (i >= 0) {
            var zero = true;
            for (j = 0; j < len; j++) {
              tmp[j] = naf[j][i] | 0;
              if (tmp[j] !== 0)
                zero = false;
            }
            if (!zero)
              break;
            k++;
            i--;
          }
          if (i >= 0)
            k++;
          acc = acc.dblp(k);
          if (i < 0)
            break;
          for (j = 0; j < len; j++) {
            var z = tmp[j];
            p;
            if (z === 0)
              continue;
            else if (z > 0)
              p = wnd[j][z - 1 >> 1];
            else if (z < 0)
              p = wnd[j][-z - 1 >> 1].neg();
            if (p.type === "affine")
              acc = acc.mixedAdd(p);
            else
              acc = acc.add(p);
          }
        }
        for (i = 0; i < len; i++)
          wnd[i] = null;
        if (jacobianResult)
          return acc;
        else
          return acc.toP();
      };
      function BasePoint(curve, type) {
        this.curve = curve;
        this.type = type;
        this.precomputed = null;
      }
      BaseCurve.BasePoint = BasePoint;
      BasePoint.prototype.eq = function eq() {
        throw new Error("Not implemented");
      };
      BasePoint.prototype.validate = function validate2() {
        return this.curve.validate(this);
      };
      BaseCurve.prototype.decodePoint = function decodePoint(bytes4, enc) {
        bytes4 = utils2.toArray(bytes4, enc);
        var len = this.p.byteLength();
        if ((bytes4[0] === 4 || bytes4[0] === 6 || bytes4[0] === 7) && bytes4.length - 1 === 2 * len) {
          if (bytes4[0] === 6)
            assert4(bytes4[bytes4.length - 1] % 2 === 0);
          else if (bytes4[0] === 7)
            assert4(bytes4[bytes4.length - 1] % 2 === 1);
          var res = this.point(
            bytes4.slice(1, 1 + len),
            bytes4.slice(1 + len, 1 + 2 * len)
          );
          return res;
        } else if ((bytes4[0] === 2 || bytes4[0] === 3) && bytes4.length - 1 === len) {
          return this.pointFromX(bytes4.slice(1, 1 + len), bytes4[0] === 3);
        }
        throw new Error("Unknown point format");
      };
      BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
        return this.encode(enc, true);
      };
      BasePoint.prototype._encode = function _encode(compact) {
        var len = this.curve.p.byteLength();
        var x = this.getX().toArray("be", len);
        if (compact)
          return [this.getY().isEven() ? 2 : 3].concat(x);
        return [4].concat(x, this.getY().toArray("be", len));
      };
      BasePoint.prototype.encode = function encode11(enc, compact) {
        return utils2.encode(this._encode(compact), enc);
      };
      BasePoint.prototype.precompute = function precompute(power) {
        if (this.precomputed)
          return this;
        var precomputed = {
          doubles: null,
          naf: null,
          beta: null
        };
        precomputed.naf = this._getNAFPoints(8);
        precomputed.doubles = this._getDoubles(4, power);
        precomputed.beta = this._getBeta();
        this.precomputed = precomputed;
        return this;
      };
      BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
        if (!this.precomputed)
          return false;
        var doubles = this.precomputed.doubles;
        if (!doubles)
          return false;
        return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
      };
      BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
        if (this.precomputed && this.precomputed.doubles)
          return this.precomputed.doubles;
        var doubles = [this];
        var acc = this;
        for (var i = 0; i < power; i += step) {
          for (var j = 0; j < step; j++)
            acc = acc.dbl();
          doubles.push(acc);
        }
        return {
          step,
          points: doubles
        };
      };
      BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
        if (this.precomputed && this.precomputed.naf)
          return this.precomputed.naf;
        var res = [this];
        var max = (1 << wnd) - 1;
        var dbl = max === 1 ? null : this.dbl();
        for (var i = 1; i < max; i++)
          res[i] = res[i - 1].add(dbl);
        return {
          wnd,
          points: res
        };
      };
      BasePoint.prototype._getBeta = function _getBeta() {
        return null;
      };
      BasePoint.prototype.dblp = function dblp(k) {
        var r = this;
        for (var i = 0; i < k; i++)
          r = r.dbl();
        return r;
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      if (typeof Object.create === "function") {
        module.exports = function inherits2(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits2(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/elliptic/lib/elliptic/curve/short.js
  var require_short = __commonJS({
    "node_modules/elliptic/lib/elliptic/curve/short.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils2();
      var BN = require_bn();
      var inherits2 = require_inherits_browser();
      var Base = require_base();
      var assert4 = utils2.assert;
      function ShortCurve(conf) {
        Base.call(this, "short", conf);
        this.a = new BN(conf.a, 16).toRed(this.red);
        this.b = new BN(conf.b, 16).toRed(this.red);
        this.tinv = this.two.redInvm();
        this.zeroA = this.a.fromRed().cmpn(0) === 0;
        this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
        this.endo = this._getEndomorphism(conf);
        this._endoWnafT1 = new Array(4);
        this._endoWnafT2 = new Array(4);
      }
      inherits2(ShortCurve, Base);
      module.exports = ShortCurve;
      ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
        if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
          return;
        var beta;
        var lambda;
        if (conf.beta) {
          beta = new BN(conf.beta, 16).toRed(this.red);
        } else {
          var betas = this._getEndoRoots(this.p);
          beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
          beta = beta.toRed(this.red);
        }
        if (conf.lambda) {
          lambda = new BN(conf.lambda, 16);
        } else {
          var lambdas = this._getEndoRoots(this.n);
          if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
            lambda = lambdas[0];
          } else {
            lambda = lambdas[1];
            assert4(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
          }
        }
        var basis;
        if (conf.basis) {
          basis = conf.basis.map(function(vec) {
            return {
              a: new BN(vec.a, 16),
              b: new BN(vec.b, 16)
            };
          });
        } else {
          basis = this._getEndoBasis(lambda);
        }
        return {
          beta,
          lambda,
          basis
        };
      };
      ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num2) {
        var red = num2 === this.p ? this.red : BN.mont(num2);
        var tinv = new BN(2).toRed(red).redInvm();
        var ntinv = tinv.redNeg();
        var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
        var l1 = ntinv.redAdd(s).fromRed();
        var l2 = ntinv.redSub(s).fromRed();
        return [l1, l2];
      };
      ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
        var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
        var u = lambda;
        var v = this.n.clone();
        var x1 = new BN(1);
        var y1 = new BN(0);
        var x2 = new BN(0);
        var y2 = new BN(1);
        var a0;
        var b0;
        var a1;
        var b1;
        var a2;
        var b2;
        var prevR;
        var i = 0;
        var r;
        var x;
        while (u.cmpn(0) !== 0) {
          var q = v.div(u);
          r = v.sub(q.mul(u));
          x = x2.sub(q.mul(x1));
          var y = y2.sub(q.mul(y1));
          if (!a1 && r.cmp(aprxSqrt) < 0) {
            a0 = prevR.neg();
            b0 = x1;
            a1 = r.neg();
            b1 = x;
          } else if (a1 && ++i === 2) {
            break;
          }
          prevR = r;
          v = u;
          u = r;
          x2 = x1;
          x1 = x;
          y2 = y1;
          y1 = y;
        }
        a2 = r.neg();
        b2 = x;
        var len1 = a1.sqr().add(b1.sqr());
        var len2 = a2.sqr().add(b2.sqr());
        if (len2.cmp(len1) >= 0) {
          a2 = a0;
          b2 = b0;
        }
        if (a1.negative) {
          a1 = a1.neg();
          b1 = b1.neg();
        }
        if (a2.negative) {
          a2 = a2.neg();
          b2 = b2.neg();
        }
        return [
          { a: a1, b: b1 },
          { a: a2, b: b2 }
        ];
      };
      ShortCurve.prototype._endoSplit = function _endoSplit(k) {
        var basis = this.endo.basis;
        var v1 = basis[0];
        var v2 = basis[1];
        var c1 = v2.b.mul(k).divRound(this.n);
        var c2 = v1.b.neg().mul(k).divRound(this.n);
        var p1 = c1.mul(v1.a);
        var p2 = c2.mul(v2.a);
        var q1 = c1.mul(v1.b);
        var q2 = c2.mul(v2.b);
        var k1 = k.sub(p1).sub(p2);
        var k2 = q1.add(q2).neg();
        return { k1, k2 };
      };
      ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
        x = new BN(x, 16);
        if (!x.red)
          x = x.toRed(this.red);
        var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
        var y = y2.redSqrt();
        if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
          throw new Error("invalid point");
        var isOdd = y.fromRed().isOdd();
        if (odd && !isOdd || !odd && isOdd)
          y = y.redNeg();
        return this.point(x, y);
      };
      ShortCurve.prototype.validate = function validate2(point) {
        if (point.inf)
          return true;
        var x = point.x;
        var y = point.y;
        var ax = this.a.redMul(x);
        var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
        return y.redSqr().redISub(rhs).cmpn(0) === 0;
      };
      ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
        var npoints = this._endoWnafT1;
        var ncoeffs = this._endoWnafT2;
        for (var i = 0; i < points.length; i++) {
          var split2 = this._endoSplit(coeffs[i]);
          var p = points[i];
          var beta = p._getBeta();
          if (split2.k1.negative) {
            split2.k1.ineg();
            p = p.neg(true);
          }
          if (split2.k2.negative) {
            split2.k2.ineg();
            beta = beta.neg(true);
          }
          npoints[i * 2] = p;
          npoints[i * 2 + 1] = beta;
          ncoeffs[i * 2] = split2.k1;
          ncoeffs[i * 2 + 1] = split2.k2;
        }
        var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
        for (var j = 0; j < i * 2; j++) {
          npoints[j] = null;
          ncoeffs[j] = null;
        }
        return res;
      };
      function Point2(curve, x, y, isRed) {
        Base.BasePoint.call(this, curve, "affine");
        if (x === null && y === null) {
          this.x = null;
          this.y = null;
          this.inf = true;
        } else {
          this.x = new BN(x, 16);
          this.y = new BN(y, 16);
          if (isRed) {
            this.x.forceRed(this.curve.red);
            this.y.forceRed(this.curve.red);
          }
          if (!this.x.red)
            this.x = this.x.toRed(this.curve.red);
          if (!this.y.red)
            this.y = this.y.toRed(this.curve.red);
          this.inf = false;
        }
      }
      inherits2(Point2, Base.BasePoint);
      ShortCurve.prototype.point = function point(x, y, isRed) {
        return new Point2(this, x, y, isRed);
      };
      ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
        return Point2.fromJSON(this, obj, red);
      };
      Point2.prototype._getBeta = function _getBeta() {
        if (!this.curve.endo)
          return;
        var pre = this.precomputed;
        if (pre && pre.beta)
          return pre.beta;
        var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (pre) {
          var curve = this.curve;
          var endoMul = function(p) {
            return curve.point(p.x.redMul(curve.endo.beta), p.y);
          };
          pre.beta = beta;
          beta.precomputed = {
            beta: null,
            naf: pre.naf && {
              wnd: pre.naf.wnd,
              points: pre.naf.points.map(endoMul)
            },
            doubles: pre.doubles && {
              step: pre.doubles.step,
              points: pre.doubles.points.map(endoMul)
            }
          };
        }
        return beta;
      };
      Point2.prototype.toJSON = function toJSON2() {
        if (!this.precomputed)
          return [this.x, this.y];
        return [this.x, this.y, this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
          }
        }];
      };
      Point2.fromJSON = function fromJSON(curve, obj, red) {
        if (typeof obj === "string")
          obj = JSON.parse(obj);
        var res = curve.point(obj[0], obj[1], red);
        if (!obj[2])
          return res;
        function obj2point(obj2) {
          return curve.point(obj2[0], obj2[1], red);
        }
        var pre = obj[2];
        res.precomputed = {
          beta: null,
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: [res].concat(pre.doubles.points.map(obj2point))
          },
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: [res].concat(pre.naf.points.map(obj2point))
          }
        };
        return res;
      };
      Point2.prototype.inspect = function inspect() {
        if (this.isInfinity())
          return "<EC Point Infinity>";
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
      };
      Point2.prototype.isInfinity = function isInfinity() {
        return this.inf;
      };
      Point2.prototype.add = function add2(p) {
        if (this.inf)
          return p;
        if (p.inf)
          return this;
        if (this.eq(p))
          return this.dbl();
        if (this.neg().eq(p))
          return this.curve.point(null, null);
        if (this.x.cmp(p.x) === 0)
          return this.curve.point(null, null);
        var c = this.y.redSub(p.y);
        if (c.cmpn(0) !== 0)
          c = c.redMul(this.x.redSub(p.x).redInvm());
        var nx = c.redSqr().redISub(this.x).redISub(p.x);
        var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
        return this.curve.point(nx, ny);
      };
      Point2.prototype.dbl = function dbl() {
        if (this.inf)
          return this;
        var ys1 = this.y.redAdd(this.y);
        if (ys1.cmpn(0) === 0)
          return this.curve.point(null, null);
        var a = this.curve.a;
        var x2 = this.x.redSqr();
        var dyinv = ys1.redInvm();
        var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
        var nx = c.redSqr().redISub(this.x.redAdd(this.x));
        var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
        return this.curve.point(nx, ny);
      };
      Point2.prototype.getX = function getX() {
        return this.x.fromRed();
      };
      Point2.prototype.getY = function getY() {
        return this.y.fromRed();
      };
      Point2.prototype.mul = function mul(k) {
        k = new BN(k, 16);
        if (this.isInfinity())
          return this;
        else if (this._hasDoubles(k))
          return this.curve._fixedNafMul(this, k);
        else if (this.curve.endo)
          return this.curve._endoWnafMulAdd([this], [k]);
        else
          return this.curve._wnafMul(this, k);
      };
      Point2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
        var points = [this, p2];
        var coeffs = [k1, k2];
        if (this.curve.endo)
          return this.curve._endoWnafMulAdd(points, coeffs);
        else
          return this.curve._wnafMulAdd(1, points, coeffs, 2);
      };
      Point2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
        var points = [this, p2];
        var coeffs = [k1, k2];
        if (this.curve.endo)
          return this.curve._endoWnafMulAdd(points, coeffs, true);
        else
          return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
      };
      Point2.prototype.eq = function eq(p) {
        return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
      };
      Point2.prototype.neg = function neg(_precompute) {
        if (this.inf)
          return this;
        var res = this.curve.point(this.x, this.y.redNeg());
        if (_precompute && this.precomputed) {
          var pre = this.precomputed;
          var negate = function(p) {
            return p.neg();
          };
          res.precomputed = {
            naf: pre.naf && {
              wnd: pre.naf.wnd,
              points: pre.naf.points.map(negate)
            },
            doubles: pre.doubles && {
              step: pre.doubles.step,
              points: pre.doubles.points.map(negate)
            }
          };
        }
        return res;
      };
      Point2.prototype.toJ = function toJ() {
        if (this.inf)
          return this.curve.jpoint(null, null, null);
        var res = this.curve.jpoint(this.x, this.y, this.curve.one);
        return res;
      };
      function JPoint(curve, x, y, z) {
        Base.BasePoint.call(this, curve, "jacobian");
        if (x === null && y === null && z === null) {
          this.x = this.curve.one;
          this.y = this.curve.one;
          this.z = new BN(0);
        } else {
          this.x = new BN(x, 16);
          this.y = new BN(y, 16);
          this.z = new BN(z, 16);
        }
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
        this.zOne = this.z === this.curve.one;
      }
      inherits2(JPoint, Base.BasePoint);
      ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
        return new JPoint(this, x, y, z);
      };
      JPoint.prototype.toP = function toP() {
        if (this.isInfinity())
          return this.curve.point(null, null);
        var zinv = this.z.redInvm();
        var zinv2 = zinv.redSqr();
        var ax = this.x.redMul(zinv2);
        var ay = this.y.redMul(zinv2).redMul(zinv);
        return this.curve.point(ax, ay);
      };
      JPoint.prototype.neg = function neg() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
      };
      JPoint.prototype.add = function add2(p) {
        if (this.isInfinity())
          return p;
        if (p.isInfinity())
          return this;
        var pz2 = p.z.redSqr();
        var z2 = this.z.redSqr();
        var u1 = this.x.redMul(pz2);
        var u2 = p.x.redMul(z2);
        var s1 = this.y.redMul(pz2.redMul(p.z));
        var s2 = p.y.redMul(z2.redMul(this.z));
        var h = u1.redSub(u2);
        var r = s1.redSub(s2);
        if (h.cmpn(0) === 0) {
          if (r.cmpn(0) !== 0)
            return this.curve.jpoint(null, null, null);
          else
            return this.dbl();
        }
        var h2 = h.redSqr();
        var h3 = h2.redMul(h);
        var v = u1.redMul(h2);
        var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
        var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
        var nz = this.z.redMul(p.z).redMul(h);
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype.mixedAdd = function mixedAdd(p) {
        if (this.isInfinity())
          return p.toJ();
        if (p.isInfinity())
          return this;
        var z2 = this.z.redSqr();
        var u1 = this.x;
        var u2 = p.x.redMul(z2);
        var s1 = this.y;
        var s2 = p.y.redMul(z2).redMul(this.z);
        var h = u1.redSub(u2);
        var r = s1.redSub(s2);
        if (h.cmpn(0) === 0) {
          if (r.cmpn(0) !== 0)
            return this.curve.jpoint(null, null, null);
          else
            return this.dbl();
        }
        var h2 = h.redSqr();
        var h3 = h2.redMul(h);
        var v = u1.redMul(h2);
        var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
        var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
        var nz = this.z.redMul(h);
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype.dblp = function dblp(pow3) {
        if (pow3 === 0)
          return this;
        if (this.isInfinity())
          return this;
        if (!pow3)
          return this.dbl();
        var i;
        if (this.curve.zeroA || this.curve.threeA) {
          var r = this;
          for (i = 0; i < pow3; i++)
            r = r.dbl();
          return r;
        }
        var a = this.curve.a;
        var tinv = this.curve.tinv;
        var jx = this.x;
        var jy = this.y;
        var jz = this.z;
        var jz4 = jz.redSqr().redSqr();
        var jyd = jy.redAdd(jy);
        for (i = 0; i < pow3; i++) {
          var jx2 = jx.redSqr();
          var jyd2 = jyd.redSqr();
          var jyd4 = jyd2.redSqr();
          var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
          var t1 = jx.redMul(jyd2);
          var nx = c.redSqr().redISub(t1.redAdd(t1));
          var t2 = t1.redISub(nx);
          var dny = c.redMul(t2);
          dny = dny.redIAdd(dny).redISub(jyd4);
          var nz = jyd.redMul(jz);
          if (i + 1 < pow3)
            jz4 = jz4.redMul(jyd4);
          jx = nx;
          jz = nz;
          jyd = dny;
        }
        return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
      };
      JPoint.prototype.dbl = function dbl() {
        if (this.isInfinity())
          return this;
        if (this.curve.zeroA)
          return this._zeroDbl();
        else if (this.curve.threeA)
          return this._threeDbl();
        else
          return this._dbl();
      };
      JPoint.prototype._zeroDbl = function _zeroDbl() {
        var nx;
        var ny;
        var nz;
        if (this.zOne) {
          var xx = this.x.redSqr();
          var yy = this.y.redSqr();
          var yyyy = yy.redSqr();
          var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
          s = s.redIAdd(s);
          var m = xx.redAdd(xx).redIAdd(xx);
          var t = m.redSqr().redISub(s).redISub(s);
          var yyyy8 = yyyy.redIAdd(yyyy);
          yyyy8 = yyyy8.redIAdd(yyyy8);
          yyyy8 = yyyy8.redIAdd(yyyy8);
          nx = t;
          ny = m.redMul(s.redISub(t)).redISub(yyyy8);
          nz = this.y.redAdd(this.y);
        } else {
          var a = this.x.redSqr();
          var b = this.y.redSqr();
          var c = b.redSqr();
          var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
          d = d.redIAdd(d);
          var e = a.redAdd(a).redIAdd(a);
          var f2 = e.redSqr();
          var c8 = c.redIAdd(c);
          c8 = c8.redIAdd(c8);
          c8 = c8.redIAdd(c8);
          nx = f2.redISub(d).redISub(d);
          ny = e.redMul(d.redISub(nx)).redISub(c8);
          nz = this.y.redMul(this.z);
          nz = nz.redIAdd(nz);
        }
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype._threeDbl = function _threeDbl() {
        var nx;
        var ny;
        var nz;
        if (this.zOne) {
          var xx = this.x.redSqr();
          var yy = this.y.redSqr();
          var yyyy = yy.redSqr();
          var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
          s = s.redIAdd(s);
          var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
          var t = m.redSqr().redISub(s).redISub(s);
          nx = t;
          var yyyy8 = yyyy.redIAdd(yyyy);
          yyyy8 = yyyy8.redIAdd(yyyy8);
          yyyy8 = yyyy8.redIAdd(yyyy8);
          ny = m.redMul(s.redISub(t)).redISub(yyyy8);
          nz = this.y.redAdd(this.y);
        } else {
          var delta = this.z.redSqr();
          var gamma = this.y.redSqr();
          var beta = this.x.redMul(gamma);
          var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
          alpha = alpha.redAdd(alpha).redIAdd(alpha);
          var beta4 = beta.redIAdd(beta);
          beta4 = beta4.redIAdd(beta4);
          var beta8 = beta4.redAdd(beta4);
          nx = alpha.redSqr().redISub(beta8);
          nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
          var ggamma8 = gamma.redSqr();
          ggamma8 = ggamma8.redIAdd(ggamma8);
          ggamma8 = ggamma8.redIAdd(ggamma8);
          ggamma8 = ggamma8.redIAdd(ggamma8);
          ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
        }
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype._dbl = function _dbl() {
        var a = this.curve.a;
        var jx = this.x;
        var jy = this.y;
        var jz = this.z;
        var jz4 = jz.redSqr().redSqr();
        var jx2 = jx.redSqr();
        var jy2 = jy.redSqr();
        var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
        var jxd4 = jx.redAdd(jx);
        jxd4 = jxd4.redIAdd(jxd4);
        var t1 = jxd4.redMul(jy2);
        var nx = c.redSqr().redISub(t1.redAdd(t1));
        var t2 = t1.redISub(nx);
        var jyd8 = jy2.redSqr();
        jyd8 = jyd8.redIAdd(jyd8);
        jyd8 = jyd8.redIAdd(jyd8);
        jyd8 = jyd8.redIAdd(jyd8);
        var ny = c.redMul(t2).redISub(jyd8);
        var nz = jy.redAdd(jy).redMul(jz);
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype.trpl = function trpl() {
        if (!this.curve.zeroA)
          return this.dbl().add(this);
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var zz = this.z.redSqr();
        var yyyy = yy.redSqr();
        var m = xx.redAdd(xx).redIAdd(xx);
        var mm = m.redSqr();
        var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        e = e.redIAdd(e);
        e = e.redAdd(e).redIAdd(e);
        e = e.redISub(mm);
        var ee = e.redSqr();
        var t = yyyy.redIAdd(yyyy);
        t = t.redIAdd(t);
        t = t.redIAdd(t);
        t = t.redIAdd(t);
        var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
        var yyu4 = yy.redMul(u);
        yyu4 = yyu4.redIAdd(yyu4);
        yyu4 = yyu4.redIAdd(yyu4);
        var nx = this.x.redMul(ee).redISub(yyu4);
        nx = nx.redIAdd(nx);
        nx = nx.redIAdd(nx);
        var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
        ny = ny.redIAdd(ny);
        ny = ny.redIAdd(ny);
        ny = ny.redIAdd(ny);
        var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
        return this.curve.jpoint(nx, ny, nz);
      };
      JPoint.prototype.mul = function mul(k, kbase) {
        k = new BN(k, kbase);
        return this.curve._wnafMul(this, k);
      };
      JPoint.prototype.eq = function eq(p) {
        if (p.type === "affine")
          return this.eq(p.toJ());
        if (this === p)
          return true;
        var z2 = this.z.redSqr();
        var pz2 = p.z.redSqr();
        if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
          return false;
        var z3 = z2.redMul(this.z);
        var pz3 = pz2.redMul(p.z);
        return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
      };
      JPoint.prototype.eqXToP = function eqXToP(x) {
        var zs = this.z.redSqr();
        var rx = x.toRed(this.curve.red).redMul(zs);
        if (this.x.cmp(rx) === 0)
          return true;
        var xc = x.clone();
        var t = this.curve.redN.redMul(zs);
        for (; ; ) {
          xc.iadd(this.curve.n);
          if (xc.cmp(this.curve.p) >= 0)
            return false;
          rx.redIAdd(t);
          if (this.x.cmp(rx) === 0)
            return true;
        }
      };
      JPoint.prototype.inspect = function inspect() {
        if (this.isInfinity())
          return "<EC JPoint Infinity>";
        return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
      };
      JPoint.prototype.isInfinity = function isInfinity() {
        return this.z.cmpn(0) === 0;
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/curve/mont.js
  var require_mont = __commonJS({
    "node_modules/elliptic/lib/elliptic/curve/mont.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var inherits2 = require_inherits_browser();
      var Base = require_base();
      var utils2 = require_utils2();
      function MontCurve(conf) {
        Base.call(this, "mont", conf);
        this.a = new BN(conf.a, 16).toRed(this.red);
        this.b = new BN(conf.b, 16).toRed(this.red);
        this.i4 = new BN(4).toRed(this.red).redInvm();
        this.two = new BN(2).toRed(this.red);
        this.a24 = this.i4.redMul(this.a.redAdd(this.two));
      }
      inherits2(MontCurve, Base);
      module.exports = MontCurve;
      MontCurve.prototype.validate = function validate2(point) {
        var x = point.normalize().x;
        var x2 = x.redSqr();
        var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
        var y = rhs.redSqrt();
        return y.redSqr().cmp(rhs) === 0;
      };
      function Point2(curve, x, z) {
        Base.BasePoint.call(this, curve, "projective");
        if (x === null && z === null) {
          this.x = this.curve.one;
          this.z = this.curve.zero;
        } else {
          this.x = new BN(x, 16);
          this.z = new BN(z, 16);
          if (!this.x.red)
            this.x = this.x.toRed(this.curve.red);
          if (!this.z.red)
            this.z = this.z.toRed(this.curve.red);
        }
      }
      inherits2(Point2, Base.BasePoint);
      MontCurve.prototype.decodePoint = function decodePoint(bytes4, enc) {
        return this.point(utils2.toArray(bytes4, enc), 1);
      };
      MontCurve.prototype.point = function point(x, z) {
        return new Point2(this, x, z);
      };
      MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
        return Point2.fromJSON(this, obj);
      };
      Point2.prototype.precompute = function precompute() {
      };
      Point2.prototype._encode = function _encode() {
        return this.getX().toArray("be", this.curve.p.byteLength());
      };
      Point2.fromJSON = function fromJSON(curve, obj) {
        return new Point2(curve, obj[0], obj[1] || curve.one);
      };
      Point2.prototype.inspect = function inspect() {
        if (this.isInfinity())
          return "<EC Point Infinity>";
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      };
      Point2.prototype.isInfinity = function isInfinity() {
        return this.z.cmpn(0) === 0;
      };
      Point2.prototype.dbl = function dbl() {
        var a = this.x.redAdd(this.z);
        var aa = a.redSqr();
        var b = this.x.redSub(this.z);
        var bb = b.redSqr();
        var c = aa.redSub(bb);
        var nx = aa.redMul(bb);
        var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
        return this.curve.point(nx, nz);
      };
      Point2.prototype.add = function add2() {
        throw new Error("Not supported on Montgomery curve");
      };
      Point2.prototype.diffAdd = function diffAdd(p, diff) {
        var a = this.x.redAdd(this.z);
        var b = this.x.redSub(this.z);
        var c = p.x.redAdd(p.z);
        var d = p.x.redSub(p.z);
        var da = d.redMul(a);
        var cb = c.redMul(b);
        var nx = diff.z.redMul(da.redAdd(cb).redSqr());
        var nz = diff.x.redMul(da.redISub(cb).redSqr());
        return this.curve.point(nx, nz);
      };
      Point2.prototype.mul = function mul(k) {
        var t = k.clone();
        var a = this;
        var b = this.curve.point(null, null);
        var c = this;
        for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
          bits.push(t.andln(1));
        for (var i = bits.length - 1; i >= 0; i--) {
          if (bits[i] === 0) {
            a = a.diffAdd(b, c);
            b = b.dbl();
          } else {
            b = a.diffAdd(b, c);
            a = a.dbl();
          }
        }
        return b;
      };
      Point2.prototype.mulAdd = function mulAdd() {
        throw new Error("Not supported on Montgomery curve");
      };
      Point2.prototype.jumlAdd = function jumlAdd() {
        throw new Error("Not supported on Montgomery curve");
      };
      Point2.prototype.eq = function eq(other) {
        return this.getX().cmp(other.getX()) === 0;
      };
      Point2.prototype.normalize = function normalize2() {
        this.x = this.x.redMul(this.z.redInvm());
        this.z = this.curve.one;
        return this;
      };
      Point2.prototype.getX = function getX() {
        this.normalize();
        return this.x.fromRed();
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/curve/edwards.js
  var require_edwards = __commonJS({
    "node_modules/elliptic/lib/elliptic/curve/edwards.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils2();
      var BN = require_bn();
      var inherits2 = require_inherits_browser();
      var Base = require_base();
      var assert4 = utils2.assert;
      function EdwardsCurve(conf) {
        this.twisted = (conf.a | 0) !== 1;
        this.mOneA = this.twisted && (conf.a | 0) === -1;
        this.extended = this.mOneA;
        Base.call(this, "edwards", conf);
        this.a = new BN(conf.a, 16).umod(this.red.m);
        this.a = this.a.toRed(this.red);
        this.c = new BN(conf.c, 16).toRed(this.red);
        this.c2 = this.c.redSqr();
        this.d = new BN(conf.d, 16).toRed(this.red);
        this.dd = this.d.redAdd(this.d);
        assert4(!this.twisted || this.c.fromRed().cmpn(1) === 0);
        this.oneC = (conf.c | 0) === 1;
      }
      inherits2(EdwardsCurve, Base);
      module.exports = EdwardsCurve;
      EdwardsCurve.prototype._mulA = function _mulA(num2) {
        if (this.mOneA)
          return num2.redNeg();
        else
          return this.a.redMul(num2);
      };
      EdwardsCurve.prototype._mulC = function _mulC(num2) {
        if (this.oneC)
          return num2;
        else
          return this.c.redMul(num2);
      };
      EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
        return this.point(x, y, z, t);
      };
      EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
        x = new BN(x, 16);
        if (!x.red)
          x = x.toRed(this.red);
        var x2 = x.redSqr();
        var rhs = this.c2.redSub(this.a.redMul(x2));
        var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
        var y2 = rhs.redMul(lhs.redInvm());
        var y = y2.redSqrt();
        if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
          throw new Error("invalid point");
        var isOdd = y.fromRed().isOdd();
        if (odd && !isOdd || !odd && isOdd)
          y = y.redNeg();
        return this.point(x, y);
      };
      EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
        y = new BN(y, 16);
        if (!y.red)
          y = y.toRed(this.red);
        var y2 = y.redSqr();
        var lhs = y2.redSub(this.c2);
        var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
        var x2 = lhs.redMul(rhs.redInvm());
        if (x2.cmp(this.zero) === 0) {
          if (odd)
            throw new Error("invalid point");
          else
            return this.point(this.zero, y);
        }
        var x = x2.redSqrt();
        if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
          throw new Error("invalid point");
        if (x.fromRed().isOdd() !== odd)
          x = x.redNeg();
        return this.point(x, y);
      };
      EdwardsCurve.prototype.validate = function validate2(point) {
        if (point.isInfinity())
          return true;
        point.normalize();
        var x2 = point.x.redSqr();
        var y2 = point.y.redSqr();
        var lhs = x2.redMul(this.a).redAdd(y2);
        var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
        return lhs.cmp(rhs) === 0;
      };
      function Point2(curve, x, y, z, t) {
        Base.BasePoint.call(this, curve, "projective");
        if (x === null && y === null && z === null) {
          this.x = this.curve.zero;
          this.y = this.curve.one;
          this.z = this.curve.one;
          this.t = this.curve.zero;
          this.zOne = true;
        } else {
          this.x = new BN(x, 16);
          this.y = new BN(y, 16);
          this.z = z ? new BN(z, 16) : this.curve.one;
          this.t = t && new BN(t, 16);
          if (!this.x.red)
            this.x = this.x.toRed(this.curve.red);
          if (!this.y.red)
            this.y = this.y.toRed(this.curve.red);
          if (!this.z.red)
            this.z = this.z.toRed(this.curve.red);
          if (this.t && !this.t.red)
            this.t = this.t.toRed(this.curve.red);
          this.zOne = this.z === this.curve.one;
          if (this.curve.extended && !this.t) {
            this.t = this.x.redMul(this.y);
            if (!this.zOne)
              this.t = this.t.redMul(this.z.redInvm());
          }
        }
      }
      inherits2(Point2, Base.BasePoint);
      EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
        return Point2.fromJSON(this, obj);
      };
      EdwardsCurve.prototype.point = function point(x, y, z, t) {
        return new Point2(this, x, y, z, t);
      };
      Point2.fromJSON = function fromJSON(curve, obj) {
        return new Point2(curve, obj[0], obj[1], obj[2]);
      };
      Point2.prototype.inspect = function inspect() {
        if (this.isInfinity())
          return "<EC Point Infinity>";
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      };
      Point2.prototype.isInfinity = function isInfinity() {
        return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
      };
      Point2.prototype._extDbl = function _extDbl() {
        var a = this.x.redSqr();
        var b = this.y.redSqr();
        var c = this.z.redSqr();
        c = c.redIAdd(c);
        var d = this.curve._mulA(a);
        var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
        var g = d.redAdd(b);
        var f2 = g.redSub(c);
        var h = d.redSub(b);
        var nx = e.redMul(f2);
        var ny = g.redMul(h);
        var nt = e.redMul(h);
        var nz = f2.redMul(g);
        return this.curve.point(nx, ny, nz, nt);
      };
      Point2.prototype._projDbl = function _projDbl() {
        var b = this.x.redAdd(this.y).redSqr();
        var c = this.x.redSqr();
        var d = this.y.redSqr();
        var nx;
        var ny;
        var nz;
        var e;
        var h;
        var j;
        if (this.curve.twisted) {
          e = this.curve._mulA(c);
          var f2 = e.redAdd(d);
          if (this.zOne) {
            nx = b.redSub(c).redSub(d).redMul(f2.redSub(this.curve.two));
            ny = f2.redMul(e.redSub(d));
            nz = f2.redSqr().redSub(f2).redSub(f2);
          } else {
            h = this.z.redSqr();
            j = f2.redSub(h).redISub(h);
            nx = b.redSub(c).redISub(d).redMul(j);
            ny = f2.redMul(e.redSub(d));
            nz = f2.redMul(j);
          }
        } else {
          e = c.redAdd(d);
          h = this.curve._mulC(this.z).redSqr();
          j = e.redSub(h).redSub(h);
          nx = this.curve._mulC(b.redISub(e)).redMul(j);
          ny = this.curve._mulC(e).redMul(c.redISub(d));
          nz = e.redMul(j);
        }
        return this.curve.point(nx, ny, nz);
      };
      Point2.prototype.dbl = function dbl() {
        if (this.isInfinity())
          return this;
        if (this.curve.extended)
          return this._extDbl();
        else
          return this._projDbl();
      };
      Point2.prototype._extAdd = function _extAdd(p) {
        var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
        var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
        var c = this.t.redMul(this.curve.dd).redMul(p.t);
        var d = this.z.redMul(p.z.redAdd(p.z));
        var e = b.redSub(a);
        var f2 = d.redSub(c);
        var g = d.redAdd(c);
        var h = b.redAdd(a);
        var nx = e.redMul(f2);
        var ny = g.redMul(h);
        var nt = e.redMul(h);
        var nz = f2.redMul(g);
        return this.curve.point(nx, ny, nz, nt);
      };
      Point2.prototype._projAdd = function _projAdd(p) {
        var a = this.z.redMul(p.z);
        var b = a.redSqr();
        var c = this.x.redMul(p.x);
        var d = this.y.redMul(p.y);
        var e = this.curve.d.redMul(c).redMul(d);
        var f2 = b.redSub(e);
        var g = b.redAdd(e);
        var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
        var nx = a.redMul(f2).redMul(tmp);
        var ny;
        var nz;
        if (this.curve.twisted) {
          ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
          nz = f2.redMul(g);
        } else {
          ny = a.redMul(g).redMul(d.redSub(c));
          nz = this.curve._mulC(f2).redMul(g);
        }
        return this.curve.point(nx, ny, nz);
      };
      Point2.prototype.add = function add2(p) {
        if (this.isInfinity())
          return p;
        if (p.isInfinity())
          return this;
        if (this.curve.extended)
          return this._extAdd(p);
        else
          return this._projAdd(p);
      };
      Point2.prototype.mul = function mul(k) {
        if (this._hasDoubles(k))
          return this.curve._fixedNafMul(this, k);
        else
          return this.curve._wnafMul(this, k);
      };
      Point2.prototype.mulAdd = function mulAdd(k1, p, k2) {
        return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
      };
      Point2.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
        return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
      };
      Point2.prototype.normalize = function normalize2() {
        if (this.zOne)
          return this;
        var zi = this.z.redInvm();
        this.x = this.x.redMul(zi);
        this.y = this.y.redMul(zi);
        if (this.t)
          this.t = this.t.redMul(zi);
        this.z = this.curve.one;
        this.zOne = true;
        return this;
      };
      Point2.prototype.neg = function neg() {
        return this.curve.point(
          this.x.redNeg(),
          this.y,
          this.z,
          this.t && this.t.redNeg()
        );
      };
      Point2.prototype.getX = function getX() {
        this.normalize();
        return this.x.fromRed();
      };
      Point2.prototype.getY = function getY() {
        this.normalize();
        return this.y.fromRed();
      };
      Point2.prototype.eq = function eq(other) {
        return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
      };
      Point2.prototype.eqXToP = function eqXToP(x) {
        var rx = x.toRed(this.curve.red).redMul(this.z);
        if (this.x.cmp(rx) === 0)
          return true;
        var xc = x.clone();
        var t = this.curve.redN.redMul(this.z);
        for (; ; ) {
          xc.iadd(this.curve.n);
          if (xc.cmp(this.curve.p) >= 0)
            return false;
          rx.redIAdd(t);
          if (this.x.cmp(rx) === 0)
            return true;
        }
      };
      Point2.prototype.toP = Point2.prototype.normalize;
      Point2.prototype.mixedAdd = Point2.prototype.add;
    }
  });

  // node_modules/elliptic/lib/elliptic/curve/index.js
  var require_curve = __commonJS({
    "node_modules/elliptic/lib/elliptic/curve/index.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var curve = exports2;
      curve.base = require_base();
      curve.short = require_short();
      curve.mont = require_mont();
      curve.edwards = require_edwards();
    }
  });

  // node_modules/hash.js/lib/hash/utils.js
  var require_utils3 = __commonJS({
    "node_modules/hash.js/lib/hash/utils.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var assert4 = require_minimalistic_assert();
      var inherits2 = require_inherits_browser();
      exports2.inherits = inherits2;
      function isSurrogatePair(msg, i) {
        if ((msg.charCodeAt(i) & 64512) !== 55296) {
          return false;
        }
        if (i < 0 || i + 1 >= msg.length) {
          return false;
        }
        return (msg.charCodeAt(i + 1) & 64512) === 56320;
      }
      function toArray2(msg, enc) {
        if (Array.isArray(msg))
          return msg.slice();
        if (!msg)
          return [];
        var res = [];
        if (typeof msg === "string") {
          if (!enc) {
            var p = 0;
            for (var i = 0; i < msg.length; i++) {
              var c = msg.charCodeAt(i);
              if (c < 128) {
                res[p++] = c;
              } else if (c < 2048) {
                res[p++] = c >> 6 | 192;
                res[p++] = c & 63 | 128;
              } else if (isSurrogatePair(msg, i)) {
                c = 65536 + ((c & 1023) << 10) + (msg.charCodeAt(++i) & 1023);
                res[p++] = c >> 18 | 240;
                res[p++] = c >> 12 & 63 | 128;
                res[p++] = c >> 6 & 63 | 128;
                res[p++] = c & 63 | 128;
              } else {
                res[p++] = c >> 12 | 224;
                res[p++] = c >> 6 & 63 | 128;
                res[p++] = c & 63 | 128;
              }
            }
          } else if (enc === "hex") {
            msg = msg.replace(/[^a-z0-9]+/ig, "");
            if (msg.length % 2 !== 0)
              msg = "0" + msg;
            for (i = 0; i < msg.length; i += 2)
              res.push(parseInt(msg[i] + msg[i + 1], 16));
          }
        } else {
          for (i = 0; i < msg.length; i++)
            res[i] = msg[i] | 0;
        }
        return res;
      }
      exports2.toArray = toArray2;
      function toHex2(msg) {
        var res = "";
        for (var i = 0; i < msg.length; i++)
          res += zero2(msg[i].toString(16));
        return res;
      }
      exports2.toHex = toHex2;
      function htonl(w) {
        var res = w >>> 24 | w >>> 8 & 65280 | w << 8 & 16711680 | (w & 255) << 24;
        return res >>> 0;
      }
      exports2.htonl = htonl;
      function toHex32(msg, endian) {
        var res = "";
        for (var i = 0; i < msg.length; i++) {
          var w = msg[i];
          if (endian === "little")
            w = htonl(w);
          res += zero8(w.toString(16));
        }
        return res;
      }
      exports2.toHex32 = toHex32;
      function zero2(word) {
        if (word.length === 1)
          return "0" + word;
        else
          return word;
      }
      exports2.zero2 = zero2;
      function zero8(word) {
        if (word.length === 7)
          return "0" + word;
        else if (word.length === 6)
          return "00" + word;
        else if (word.length === 5)
          return "000" + word;
        else if (word.length === 4)
          return "0000" + word;
        else if (word.length === 3)
          return "00000" + word;
        else if (word.length === 2)
          return "000000" + word;
        else if (word.length === 1)
          return "0000000" + word;
        else
          return word;
      }
      exports2.zero8 = zero8;
      function join32(msg, start, end, endian) {
        var len = end - start;
        assert4(len % 4 === 0);
        var res = new Array(len / 4);
        for (var i = 0, k = start; i < res.length; i++, k += 4) {
          var w;
          if (endian === "big")
            w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
          else
            w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
          res[i] = w >>> 0;
        }
        return res;
      }
      exports2.join32 = join32;
      function split32(msg, endian) {
        var res = new Array(msg.length * 4);
        for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
          var m = msg[i];
          if (endian === "big") {
            res[k] = m >>> 24;
            res[k + 1] = m >>> 16 & 255;
            res[k + 2] = m >>> 8 & 255;
            res[k + 3] = m & 255;
          } else {
            res[k + 3] = m >>> 24;
            res[k + 2] = m >>> 16 & 255;
            res[k + 1] = m >>> 8 & 255;
            res[k] = m & 255;
          }
        }
        return res;
      }
      exports2.split32 = split32;
      function rotr32(w, b) {
        return w >>> b | w << 32 - b;
      }
      exports2.rotr32 = rotr32;
      function rotl32(w, b) {
        return w << b | w >>> 32 - b;
      }
      exports2.rotl32 = rotl32;
      function sum32(a, b) {
        return a + b >>> 0;
      }
      exports2.sum32 = sum32;
      function sum32_3(a, b, c) {
        return a + b + c >>> 0;
      }
      exports2.sum32_3 = sum32_3;
      function sum32_4(a, b, c, d) {
        return a + b + c + d >>> 0;
      }
      exports2.sum32_4 = sum32_4;
      function sum32_5(a, b, c, d, e) {
        return a + b + c + d + e >>> 0;
      }
      exports2.sum32_5 = sum32_5;
      function sum64(buf, pos, ah, al) {
        var bh = buf[pos];
        var bl = buf[pos + 1];
        var lo = al + bl >>> 0;
        var hi = (lo < al ? 1 : 0) + ah + bh;
        buf[pos] = hi >>> 0;
        buf[pos + 1] = lo;
      }
      exports2.sum64 = sum64;
      function sum64_hi(ah, al, bh, bl) {
        var lo = al + bl >>> 0;
        var hi = (lo < al ? 1 : 0) + ah + bh;
        return hi >>> 0;
      }
      exports2.sum64_hi = sum64_hi;
      function sum64_lo(ah, al, bh, bl) {
        var lo = al + bl;
        return lo >>> 0;
      }
      exports2.sum64_lo = sum64_lo;
      function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
        var carry = 0;
        var lo = al;
        lo = lo + bl >>> 0;
        carry += lo < al ? 1 : 0;
        lo = lo + cl >>> 0;
        carry += lo < cl ? 1 : 0;
        lo = lo + dl >>> 0;
        carry += lo < dl ? 1 : 0;
        var hi = ah + bh + ch + dh + carry;
        return hi >>> 0;
      }
      exports2.sum64_4_hi = sum64_4_hi;
      function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
        var lo = al + bl + cl + dl;
        return lo >>> 0;
      }
      exports2.sum64_4_lo = sum64_4_lo;
      function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
        var carry = 0;
        var lo = al;
        lo = lo + bl >>> 0;
        carry += lo < al ? 1 : 0;
        lo = lo + cl >>> 0;
        carry += lo < cl ? 1 : 0;
        lo = lo + dl >>> 0;
        carry += lo < dl ? 1 : 0;
        lo = lo + el >>> 0;
        carry += lo < el ? 1 : 0;
        var hi = ah + bh + ch + dh + eh + carry;
        return hi >>> 0;
      }
      exports2.sum64_5_hi = sum64_5_hi;
      function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
        var lo = al + bl + cl + dl + el;
        return lo >>> 0;
      }
      exports2.sum64_5_lo = sum64_5_lo;
      function rotr64_hi(ah, al, num2) {
        var r = al << 32 - num2 | ah >>> num2;
        return r >>> 0;
      }
      exports2.rotr64_hi = rotr64_hi;
      function rotr64_lo(ah, al, num2) {
        var r = ah << 32 - num2 | al >>> num2;
        return r >>> 0;
      }
      exports2.rotr64_lo = rotr64_lo;
      function shr64_hi(ah, al, num2) {
        return ah >>> num2;
      }
      exports2.shr64_hi = shr64_hi;
      function shr64_lo(ah, al, num2) {
        var r = ah << 32 - num2 | al >>> num2;
        return r >>> 0;
      }
      exports2.shr64_lo = shr64_lo;
    }
  });

  // node_modules/hash.js/lib/hash/common.js
  var require_common = __commonJS({
    "node_modules/hash.js/lib/hash/common.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var assert4 = require_minimalistic_assert();
      function BlockHash() {
        this.pending = null;
        this.pendingTotal = 0;
        this.blockSize = this.constructor.blockSize;
        this.outSize = this.constructor.outSize;
        this.hmacStrength = this.constructor.hmacStrength;
        this.padLength = this.constructor.padLength / 8;
        this.endian = "big";
        this._delta8 = this.blockSize / 8;
        this._delta32 = this.blockSize / 32;
      }
      exports2.BlockHash = BlockHash;
      BlockHash.prototype.update = function update(msg, enc) {
        msg = utils2.toArray(msg, enc);
        if (!this.pending)
          this.pending = msg;
        else
          this.pending = this.pending.concat(msg);
        this.pendingTotal += msg.length;
        if (this.pending.length >= this._delta8) {
          msg = this.pending;
          var r = msg.length % this._delta8;
          this.pending = msg.slice(msg.length - r, msg.length);
          if (this.pending.length === 0)
            this.pending = null;
          msg = utils2.join32(msg, 0, msg.length - r, this.endian);
          for (var i = 0; i < msg.length; i += this._delta32)
            this._update(msg, i, i + this._delta32);
        }
        return this;
      };
      BlockHash.prototype.digest = function digest2(enc) {
        this.update(this._pad());
        assert4(this.pending === null);
        return this._digest(enc);
      };
      BlockHash.prototype._pad = function pad() {
        var len = this.pendingTotal;
        var bytes4 = this._delta8;
        var k = bytes4 - (len + this.padLength) % bytes4;
        var res = new Array(k + this.padLength);
        res[0] = 128;
        for (var i = 1; i < k; i++)
          res[i] = 0;
        len <<= 3;
        if (this.endian === "big") {
          for (var t = 8; t < this.padLength; t++)
            res[i++] = 0;
          res[i++] = 0;
          res[i++] = 0;
          res[i++] = 0;
          res[i++] = 0;
          res[i++] = len >>> 24 & 255;
          res[i++] = len >>> 16 & 255;
          res[i++] = len >>> 8 & 255;
          res[i++] = len & 255;
        } else {
          res[i++] = len & 255;
          res[i++] = len >>> 8 & 255;
          res[i++] = len >>> 16 & 255;
          res[i++] = len >>> 24 & 255;
          res[i++] = 0;
          res[i++] = 0;
          res[i++] = 0;
          res[i++] = 0;
          for (t = 8; t < this.padLength; t++)
            res[i++] = 0;
        }
        return res;
      };
    }
  });

  // node_modules/hash.js/lib/hash/sha/common.js
  var require_common2 = __commonJS({
    "node_modules/hash.js/lib/hash/sha/common.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var rotr32 = utils2.rotr32;
      function ft_1(s, x, y, z) {
        if (s === 0)
          return ch32(x, y, z);
        if (s === 1 || s === 3)
          return p32(x, y, z);
        if (s === 2)
          return maj32(x, y, z);
      }
      exports2.ft_1 = ft_1;
      function ch32(x, y, z) {
        return x & y ^ ~x & z;
      }
      exports2.ch32 = ch32;
      function maj32(x, y, z) {
        return x & y ^ x & z ^ y & z;
      }
      exports2.maj32 = maj32;
      function p32(x, y, z) {
        return x ^ y ^ z;
      }
      exports2.p32 = p32;
      function s0_256(x) {
        return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
      }
      exports2.s0_256 = s0_256;
      function s1_256(x) {
        return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
      }
      exports2.s1_256 = s1_256;
      function g0_256(x) {
        return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
      }
      exports2.g0_256 = g0_256;
      function g1_256(x) {
        return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
      }
      exports2.g1_256 = g1_256;
    }
  });

  // node_modules/hash.js/lib/hash/sha/1.js
  var require__ = __commonJS({
    "node_modules/hash.js/lib/hash/sha/1.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var common = require_common();
      var shaCommon = require_common2();
      var rotl32 = utils2.rotl32;
      var sum32 = utils2.sum32;
      var sum32_5 = utils2.sum32_5;
      var ft_1 = shaCommon.ft_1;
      var BlockHash = common.BlockHash;
      var sha1_K = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
      ];
      function SHA1() {
        if (!(this instanceof SHA1))
          return new SHA1();
        BlockHash.call(this);
        this.h = [
          1732584193,
          4023233417,
          2562383102,
          271733878,
          3285377520
        ];
        this.W = new Array(80);
      }
      utils2.inherits(SHA1, BlockHash);
      module.exports = SHA1;
      SHA1.blockSize = 512;
      SHA1.outSize = 160;
      SHA1.hmacStrength = 80;
      SHA1.padLength = 64;
      SHA1.prototype._update = function _update(msg, start) {
        var W = this.W;
        for (var i = 0; i < 16; i++)
          W[i] = msg[start + i];
        for (; i < W.length; i++)
          W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        var a = this.h[0];
        var b = this.h[1];
        var c = this.h[2];
        var d = this.h[3];
        var e = this.h[4];
        for (i = 0; i < W.length; i++) {
          var s = ~~(i / 20);
          var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
          e = d;
          d = c;
          c = rotl32(b, 30);
          b = a;
          a = t;
        }
        this.h[0] = sum32(this.h[0], a);
        this.h[1] = sum32(this.h[1], b);
        this.h[2] = sum32(this.h[2], c);
        this.h[3] = sum32(this.h[3], d);
        this.h[4] = sum32(this.h[4], e);
      };
      SHA1.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h, "big");
        else
          return utils2.split32(this.h, "big");
      };
    }
  });

  // node_modules/hash.js/lib/hash/sha/256.js
  var require__2 = __commonJS({
    "node_modules/hash.js/lib/hash/sha/256.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var common = require_common();
      var shaCommon = require_common2();
      var assert4 = require_minimalistic_assert();
      var sum32 = utils2.sum32;
      var sum32_4 = utils2.sum32_4;
      var sum32_5 = utils2.sum32_5;
      var ch32 = shaCommon.ch32;
      var maj32 = shaCommon.maj32;
      var s0_256 = shaCommon.s0_256;
      var s1_256 = shaCommon.s1_256;
      var g0_256 = shaCommon.g0_256;
      var g1_256 = shaCommon.g1_256;
      var BlockHash = common.BlockHash;
      var sha256_K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      function SHA2562() {
        if (!(this instanceof SHA2562))
          return new SHA2562();
        BlockHash.call(this);
        this.h = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ];
        this.k = sha256_K;
        this.W = new Array(64);
      }
      utils2.inherits(SHA2562, BlockHash);
      module.exports = SHA2562;
      SHA2562.blockSize = 512;
      SHA2562.outSize = 256;
      SHA2562.hmacStrength = 192;
      SHA2562.padLength = 64;
      SHA2562.prototype._update = function _update(msg, start) {
        var W = this.W;
        for (var i = 0; i < 16; i++)
          W[i] = msg[start + i];
        for (; i < W.length; i++)
          W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
        var a = this.h[0];
        var b = this.h[1];
        var c = this.h[2];
        var d = this.h[3];
        var e = this.h[4];
        var f2 = this.h[5];
        var g = this.h[6];
        var h = this.h[7];
        assert4(this.k.length === W.length);
        for (i = 0; i < W.length; i++) {
          var T1 = sum32_5(h, s1_256(e), ch32(e, f2, g), this.k[i], W[i]);
          var T2 = sum32(s0_256(a), maj32(a, b, c));
          h = g;
          g = f2;
          f2 = e;
          e = sum32(d, T1);
          d = c;
          c = b;
          b = a;
          a = sum32(T1, T2);
        }
        this.h[0] = sum32(this.h[0], a);
        this.h[1] = sum32(this.h[1], b);
        this.h[2] = sum32(this.h[2], c);
        this.h[3] = sum32(this.h[3], d);
        this.h[4] = sum32(this.h[4], e);
        this.h[5] = sum32(this.h[5], f2);
        this.h[6] = sum32(this.h[6], g);
        this.h[7] = sum32(this.h[7], h);
      };
      SHA2562.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h, "big");
        else
          return utils2.split32(this.h, "big");
      };
    }
  });

  // node_modules/hash.js/lib/hash/sha/224.js
  var require__3 = __commonJS({
    "node_modules/hash.js/lib/hash/sha/224.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var SHA2562 = require__2();
      function SHA2242() {
        if (!(this instanceof SHA2242))
          return new SHA2242();
        SHA2562.call(this);
        this.h = [
          3238371032,
          914150663,
          812702999,
          4144912697,
          4290775857,
          1750603025,
          1694076839,
          3204075428
        ];
      }
      utils2.inherits(SHA2242, SHA2562);
      module.exports = SHA2242;
      SHA2242.blockSize = 512;
      SHA2242.outSize = 224;
      SHA2242.hmacStrength = 192;
      SHA2242.padLength = 64;
      SHA2242.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h.slice(0, 7), "big");
        else
          return utils2.split32(this.h.slice(0, 7), "big");
      };
    }
  });

  // node_modules/hash.js/lib/hash/sha/512.js
  var require__4 = __commonJS({
    "node_modules/hash.js/lib/hash/sha/512.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var common = require_common();
      var assert4 = require_minimalistic_assert();
      var rotr64_hi = utils2.rotr64_hi;
      var rotr64_lo = utils2.rotr64_lo;
      var shr64_hi = utils2.shr64_hi;
      var shr64_lo = utils2.shr64_lo;
      var sum64 = utils2.sum64;
      var sum64_hi = utils2.sum64_hi;
      var sum64_lo = utils2.sum64_lo;
      var sum64_4_hi = utils2.sum64_4_hi;
      var sum64_4_lo = utils2.sum64_4_lo;
      var sum64_5_hi = utils2.sum64_5_hi;
      var sum64_5_lo = utils2.sum64_5_lo;
      var BlockHash = common.BlockHash;
      var sha512_K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function SHA5122() {
        if (!(this instanceof SHA5122))
          return new SHA5122();
        BlockHash.call(this);
        this.h = [
          1779033703,
          4089235720,
          3144134277,
          2227873595,
          1013904242,
          4271175723,
          2773480762,
          1595750129,
          1359893119,
          2917565137,
          2600822924,
          725511199,
          528734635,
          4215389547,
          1541459225,
          327033209
        ];
        this.k = sha512_K;
        this.W = new Array(160);
      }
      utils2.inherits(SHA5122, BlockHash);
      module.exports = SHA5122;
      SHA5122.blockSize = 1024;
      SHA5122.outSize = 512;
      SHA5122.hmacStrength = 192;
      SHA5122.padLength = 128;
      SHA5122.prototype._prepareBlock = function _prepareBlock(msg, start) {
        var W = this.W;
        for (var i = 0; i < 32; i++)
          W[i] = msg[start + i];
        for (; i < W.length; i += 2) {
          var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);
          var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
          var c1_hi = W[i - 14];
          var c1_lo = W[i - 13];
          var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);
          var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
          var c3_hi = W[i - 32];
          var c3_lo = W[i - 31];
          W[i] = sum64_4_hi(
            c0_hi,
            c0_lo,
            c1_hi,
            c1_lo,
            c2_hi,
            c2_lo,
            c3_hi,
            c3_lo
          );
          W[i + 1] = sum64_4_lo(
            c0_hi,
            c0_lo,
            c1_hi,
            c1_lo,
            c2_hi,
            c2_lo,
            c3_hi,
            c3_lo
          );
        }
      };
      SHA5122.prototype._update = function _update(msg, start) {
        this._prepareBlock(msg, start);
        var W = this.W;
        var ah = this.h[0];
        var al = this.h[1];
        var bh = this.h[2];
        var bl = this.h[3];
        var ch = this.h[4];
        var cl = this.h[5];
        var dh = this.h[6];
        var dl = this.h[7];
        var eh = this.h[8];
        var el = this.h[9];
        var fh = this.h[10];
        var fl = this.h[11];
        var gh = this.h[12];
        var gl = this.h[13];
        var hh = this.h[14];
        var hl = this.h[15];
        assert4(this.k.length === W.length);
        for (var i = 0; i < W.length; i += 2) {
          var c0_hi = hh;
          var c0_lo = hl;
          var c1_hi = s1_512_hi(eh, el);
          var c1_lo = s1_512_lo(eh, el);
          var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
          var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
          var c3_hi = this.k[i];
          var c3_lo = this.k[i + 1];
          var c4_hi = W[i];
          var c4_lo = W[i + 1];
          var T1_hi = sum64_5_hi(
            c0_hi,
            c0_lo,
            c1_hi,
            c1_lo,
            c2_hi,
            c2_lo,
            c3_hi,
            c3_lo,
            c4_hi,
            c4_lo
          );
          var T1_lo = sum64_5_lo(
            c0_hi,
            c0_lo,
            c1_hi,
            c1_lo,
            c2_hi,
            c2_lo,
            c3_hi,
            c3_lo,
            c4_hi,
            c4_lo
          );
          c0_hi = s0_512_hi(ah, al);
          c0_lo = s0_512_lo(ah, al);
          c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
          c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
          var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
          var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          eh = sum64_hi(dh, dl, T1_hi, T1_lo);
          el = sum64_lo(dl, dl, T1_hi, T1_lo);
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
          al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
        }
        sum64(this.h, 0, ah, al);
        sum64(this.h, 2, bh, bl);
        sum64(this.h, 4, ch, cl);
        sum64(this.h, 6, dh, dl);
        sum64(this.h, 8, eh, el);
        sum64(this.h, 10, fh, fl);
        sum64(this.h, 12, gh, gl);
        sum64(this.h, 14, hh, hl);
      };
      SHA5122.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h, "big");
        else
          return utils2.split32(this.h, "big");
      };
      function ch64_hi(xh, xl, yh, yl, zh) {
        var r = xh & yh ^ ~xh & zh;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function ch64_lo(xh, xl, yh, yl, zh, zl) {
        var r = xl & yl ^ ~xl & zl;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function maj64_hi(xh, xl, yh, yl, zh) {
        var r = xh & yh ^ xh & zh ^ yh & zh;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function maj64_lo(xh, xl, yh, yl, zh, zl) {
        var r = xl & yl ^ xl & zl ^ yl & zl;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function s0_512_hi(xh, xl) {
        var c0_hi = rotr64_hi(xh, xl, 28);
        var c1_hi = rotr64_hi(xl, xh, 2);
        var c2_hi = rotr64_hi(xl, xh, 7);
        var r = c0_hi ^ c1_hi ^ c2_hi;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function s0_512_lo(xh, xl) {
        var c0_lo = rotr64_lo(xh, xl, 28);
        var c1_lo = rotr64_lo(xl, xh, 2);
        var c2_lo = rotr64_lo(xl, xh, 7);
        var r = c0_lo ^ c1_lo ^ c2_lo;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function s1_512_hi(xh, xl) {
        var c0_hi = rotr64_hi(xh, xl, 14);
        var c1_hi = rotr64_hi(xh, xl, 18);
        var c2_hi = rotr64_hi(xl, xh, 9);
        var r = c0_hi ^ c1_hi ^ c2_hi;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function s1_512_lo(xh, xl) {
        var c0_lo = rotr64_lo(xh, xl, 14);
        var c1_lo = rotr64_lo(xh, xl, 18);
        var c2_lo = rotr64_lo(xl, xh, 9);
        var r = c0_lo ^ c1_lo ^ c2_lo;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function g0_512_hi(xh, xl) {
        var c0_hi = rotr64_hi(xh, xl, 1);
        var c1_hi = rotr64_hi(xh, xl, 8);
        var c2_hi = shr64_hi(xh, xl, 7);
        var r = c0_hi ^ c1_hi ^ c2_hi;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function g0_512_lo(xh, xl) {
        var c0_lo = rotr64_lo(xh, xl, 1);
        var c1_lo = rotr64_lo(xh, xl, 8);
        var c2_lo = shr64_lo(xh, xl, 7);
        var r = c0_lo ^ c1_lo ^ c2_lo;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function g1_512_hi(xh, xl) {
        var c0_hi = rotr64_hi(xh, xl, 19);
        var c1_hi = rotr64_hi(xl, xh, 29);
        var c2_hi = shr64_hi(xh, xl, 6);
        var r = c0_hi ^ c1_hi ^ c2_hi;
        if (r < 0)
          r += 4294967296;
        return r;
      }
      function g1_512_lo(xh, xl) {
        var c0_lo = rotr64_lo(xh, xl, 19);
        var c1_lo = rotr64_lo(xl, xh, 29);
        var c2_lo = shr64_lo(xh, xl, 6);
        var r = c0_lo ^ c1_lo ^ c2_lo;
        if (r < 0)
          r += 4294967296;
        return r;
      }
    }
  });

  // node_modules/hash.js/lib/hash/sha/384.js
  var require__5 = __commonJS({
    "node_modules/hash.js/lib/hash/sha/384.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var SHA5122 = require__4();
      function SHA3842() {
        if (!(this instanceof SHA3842))
          return new SHA3842();
        SHA5122.call(this);
        this.h = [
          3418070365,
          3238371032,
          1654270250,
          914150663,
          2438529370,
          812702999,
          355462360,
          4144912697,
          1731405415,
          4290775857,
          2394180231,
          1750603025,
          3675008525,
          1694076839,
          1203062813,
          3204075428
        ];
      }
      utils2.inherits(SHA3842, SHA5122);
      module.exports = SHA3842;
      SHA3842.blockSize = 1024;
      SHA3842.outSize = 384;
      SHA3842.hmacStrength = 192;
      SHA3842.padLength = 128;
      SHA3842.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h.slice(0, 12), "big");
        else
          return utils2.split32(this.h.slice(0, 12), "big");
      };
    }
  });

  // node_modules/hash.js/lib/hash/sha.js
  var require_sha = __commonJS({
    "node_modules/hash.js/lib/hash/sha.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      exports2.sha1 = require__();
      exports2.sha224 = require__3();
      exports2.sha256 = require__2();
      exports2.sha384 = require__5();
      exports2.sha512 = require__4();
    }
  });

  // node_modules/hash.js/lib/hash/ripemd.js
  var require_ripemd = __commonJS({
    "node_modules/hash.js/lib/hash/ripemd.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var common = require_common();
      var rotl32 = utils2.rotl32;
      var sum32 = utils2.sum32;
      var sum32_3 = utils2.sum32_3;
      var sum32_4 = utils2.sum32_4;
      var BlockHash = common.BlockHash;
      function RIPEMD1602() {
        if (!(this instanceof RIPEMD1602))
          return new RIPEMD1602();
        BlockHash.call(this);
        this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        this.endian = "little";
      }
      utils2.inherits(RIPEMD1602, BlockHash);
      exports2.ripemd160 = RIPEMD1602;
      RIPEMD1602.blockSize = 512;
      RIPEMD1602.outSize = 160;
      RIPEMD1602.hmacStrength = 192;
      RIPEMD1602.padLength = 64;
      RIPEMD1602.prototype._update = function update(msg, start) {
        var A = this.h[0];
        var B = this.h[1];
        var C = this.h[2];
        var D = this.h[3];
        var E = this.h[4];
        var Ah = A;
        var Bh = B;
        var Ch = C;
        var Dh = D;
        var Eh = E;
        for (var j = 0; j < 80; j++) {
          var T = sum32(
            rotl32(
              sum32_4(A, f2(j, B, C, D), msg[r[j] + start], K(j)),
              s[j]
            ),
            E
          );
          A = E;
          E = D;
          D = rotl32(C, 10);
          C = B;
          B = T;
          T = sum32(
            rotl32(
              sum32_4(Ah, f2(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
              sh[j]
            ),
            Eh
          );
          Ah = Eh;
          Eh = Dh;
          Dh = rotl32(Ch, 10);
          Ch = Bh;
          Bh = T;
        }
        T = sum32_3(this.h[1], C, Dh);
        this.h[1] = sum32_3(this.h[2], D, Eh);
        this.h[2] = sum32_3(this.h[3], E, Ah);
        this.h[3] = sum32_3(this.h[4], A, Bh);
        this.h[4] = sum32_3(this.h[0], B, Ch);
        this.h[0] = T;
      };
      RIPEMD1602.prototype._digest = function digest2(enc) {
        if (enc === "hex")
          return utils2.toHex32(this.h, "little");
        else
          return utils2.split32(this.h, "little");
      };
      function f2(j, x, y, z) {
        if (j <= 15)
          return x ^ y ^ z;
        else if (j <= 31)
          return x & y | ~x & z;
        else if (j <= 47)
          return (x | ~y) ^ z;
        else if (j <= 63)
          return x & z | y & ~z;
        else
          return x ^ (y | ~z);
      }
      function K(j) {
        if (j <= 15)
          return 0;
        else if (j <= 31)
          return 1518500249;
        else if (j <= 47)
          return 1859775393;
        else if (j <= 63)
          return 2400959708;
        else
          return 2840853838;
      }
      function Kh(j) {
        if (j <= 15)
          return 1352829926;
        else if (j <= 31)
          return 1548603684;
        else if (j <= 47)
          return 1836072691;
        else if (j <= 63)
          return 2053994217;
        else
          return 0;
      }
      var r = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
      ];
      var rh = [
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
      ];
      var s = [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ];
      var sh = [
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
      ];
    }
  });

  // node_modules/hash.js/lib/hash/hmac.js
  var require_hmac = __commonJS({
    "node_modules/hash.js/lib/hash/hmac.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils3();
      var assert4 = require_minimalistic_assert();
      function Hmac(hash3, key, enc) {
        if (!(this instanceof Hmac))
          return new Hmac(hash3, key, enc);
        this.Hash = hash3;
        this.blockSize = hash3.blockSize / 8;
        this.outSize = hash3.outSize / 8;
        this.inner = null;
        this.outer = null;
        this._init(utils2.toArray(key, enc));
      }
      module.exports = Hmac;
      Hmac.prototype._init = function init(key) {
        if (key.length > this.blockSize)
          key = new this.Hash().update(key).digest();
        assert4(key.length <= this.blockSize);
        for (var i = key.length; i < this.blockSize; i++)
          key.push(0);
        for (i = 0; i < key.length; i++)
          key[i] ^= 54;
        this.inner = new this.Hash().update(key);
        for (i = 0; i < key.length; i++)
          key[i] ^= 106;
        this.outer = new this.Hash().update(key);
      };
      Hmac.prototype.update = function update(msg, enc) {
        this.inner.update(msg, enc);
        return this;
      };
      Hmac.prototype.digest = function digest2(enc) {
        this.outer.update(this.inner.digest());
        return this.outer.digest(enc);
      };
    }
  });

  // node_modules/hash.js/lib/hash.js
  var require_hash = __commonJS({
    "node_modules/hash.js/lib/hash.js"(exports2) {
      init_dirname();
      init_buffer2();
      init_process2();
      var hash3 = exports2;
      hash3.utils = require_utils3();
      hash3.common = require_common();
      hash3.sha = require_sha();
      hash3.ripemd = require_ripemd();
      hash3.hmac = require_hmac();
      hash3.sha1 = hash3.sha.sha1;
      hash3.sha256 = hash3.sha.sha256;
      hash3.sha224 = hash3.sha.sha224;
      hash3.sha384 = hash3.sha.sha384;
      hash3.sha512 = hash3.sha.sha512;
      hash3.ripemd160 = hash3.ripemd.ripemd160;
    }
  });

  // node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js
  var require_secp256k1 = __commonJS({
    "node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
            ]
          ]
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
            ]
          ]
        }
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/curves.js
  var require_curves = __commonJS({
    "node_modules/elliptic/lib/elliptic/curves.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var curves2 = exports2;
      var hash3 = require_hash();
      var curve = require_curve();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      function PresetCurve(options) {
        if (options.type === "short")
          this.curve = new curve.short(options);
        else if (options.type === "edwards")
          this.curve = new curve.edwards(options);
        else
          this.curve = new curve.mont(options);
        this.g = this.curve.g;
        this.n = this.curve.n;
        this.hash = options.hash;
        assert4(this.g.validate(), "Invalid curve");
        assert4(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      curves2.PresetCurve = PresetCurve;
      function defineCurve(name5, options) {
        Object.defineProperty(curves2, name5, {
          configurable: true,
          enumerable: true,
          get: function() {
            var curve2 = new PresetCurve(options);
            Object.defineProperty(curves2, name5, {
              configurable: true,
              enumerable: true,
              value: curve2
            });
            return curve2;
          }
        });
      }
      defineCurve("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: hash3.sha256,
        gRed: false,
        g: [
          "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
          "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
        ]
      });
      defineCurve("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: hash3.sha256,
        gRed: false,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
        ]
      });
      defineCurve("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: hash3.sha256,
        gRed: false,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
        ]
      });
      defineCurve("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: hash3.sha384,
        gRed: false,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
        ]
      });
      defineCurve("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: hash3.sha512,
        gRed: false,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
        ]
      });
      defineCurve("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: hash3.sha256,
        gRed: false,
        g: [
          "9"
        ]
      });
      defineCurve("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        // -121665 * (121666^(-1)) (mod P)
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: hash3.sha256,
        gRed: false,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          // 4/5
          "6666666666666666666666666666666666666666666666666666666666666658"
        ]
      });
      var pre;
      try {
        pre = require_secp256k1();
      } catch (e) {
        pre = void 0;
      }
      defineCurve("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: hash3.sha256,
        // Precomputed endomorphism
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
          }
        ],
        gRed: false,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          pre
        ]
      });
    }
  });

  // node_modules/hmac-drbg/lib/hmac-drbg.js
  var require_hmac_drbg = __commonJS({
    "node_modules/hmac-drbg/lib/hmac-drbg.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var hash3 = require_hash();
      var utils2 = require_utils();
      var assert4 = require_minimalistic_assert();
      function HmacDRBG(options) {
        if (!(this instanceof HmacDRBG))
          return new HmacDRBG(options);
        this.hash = options.hash;
        this.predResist = !!options.predResist;
        this.outLen = this.hash.outSize;
        this.minEntropy = options.minEntropy || this.hash.hmacStrength;
        this._reseed = null;
        this.reseedInterval = null;
        this.K = null;
        this.V = null;
        var entropy = utils2.toArray(options.entropy, options.entropyEnc || "hex");
        var nonce = utils2.toArray(options.nonce, options.nonceEnc || "hex");
        var pers = utils2.toArray(options.pers, options.persEnc || "hex");
        assert4(
          entropy.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        );
        this._init(entropy, nonce, pers);
      }
      module.exports = HmacDRBG;
      HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
        var seed = entropy.concat(nonce).concat(pers);
        this.K = new Array(this.outLen / 8);
        this.V = new Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) {
          this.K[i] = 0;
          this.V[i] = 1;
        }
        this._update(seed);
        this._reseed = 1;
        this.reseedInterval = 281474976710656;
      };
      HmacDRBG.prototype._hmac = function hmac2() {
        return new hash3.hmac(this.hash, this.K);
      };
      HmacDRBG.prototype._update = function update(seed) {
        var kmac = this._hmac().update(this.V).update([0]);
        if (seed)
          kmac = kmac.update(seed);
        this.K = kmac.digest();
        this.V = this._hmac().update(this.V).digest();
        if (!seed)
          return;
        this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
        this.V = this._hmac().update(this.V).digest();
      };
      HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add2, addEnc) {
        if (typeof entropyEnc !== "string") {
          addEnc = add2;
          add2 = entropyEnc;
          entropyEnc = null;
        }
        entropy = utils2.toArray(entropy, entropyEnc);
        add2 = utils2.toArray(add2, addEnc);
        assert4(
          entropy.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        );
        this._update(entropy.concat(add2 || []));
        this._reseed = 1;
      };
      HmacDRBG.prototype.generate = function generate(len, enc, add2, addEnc) {
        if (this._reseed > this.reseedInterval)
          throw new Error("Reseed is required");
        if (typeof enc !== "string") {
          addEnc = add2;
          add2 = enc;
          enc = null;
        }
        if (add2) {
          add2 = utils2.toArray(add2, addEnc || "hex");
          this._update(add2);
        }
        var temp = [];
        while (temp.length < len) {
          this.V = this._hmac().update(this.V).digest();
          temp = temp.concat(this.V);
        }
        var res = temp.slice(0, len);
        this._update(add2);
        this._reseed++;
        return utils2.encode(res, enc);
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/ec/key.js
  var require_key = __commonJS({
    "node_modules/elliptic/lib/elliptic/ec/key.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      function KeyPair(ec, options) {
        this.ec = ec;
        this.priv = null;
        this.pub = null;
        if (options.priv)
          this._importPrivate(options.priv, options.privEnc);
        if (options.pub)
          this._importPublic(options.pub, options.pubEnc);
      }
      module.exports = KeyPair;
      KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
        if (pub instanceof KeyPair)
          return pub;
        return new KeyPair(ec, {
          pub,
          pubEnc: enc
        });
      };
      KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
        if (priv instanceof KeyPair)
          return priv;
        return new KeyPair(ec, {
          priv,
          privEnc: enc
        });
      };
      KeyPair.prototype.validate = function validate2() {
        var pub = this.getPublic();
        if (pub.isInfinity())
          return { result: false, reason: "Invalid public key" };
        if (!pub.validate())
          return { result: false, reason: "Public key is not a point" };
        if (!pub.mul(this.ec.curve.n).isInfinity())
          return { result: false, reason: "Public key * N != O" };
        return { result: true, reason: null };
      };
      KeyPair.prototype.getPublic = function getPublic(compact, enc) {
        if (typeof compact === "string") {
          enc = compact;
          compact = null;
        }
        if (!this.pub)
          this.pub = this.ec.g.mul(this.priv);
        if (!enc)
          return this.pub;
        return this.pub.encode(enc, compact);
      };
      KeyPair.prototype.getPrivate = function getPrivate(enc) {
        if (enc === "hex")
          return this.priv.toString(16, 2);
        else
          return this.priv;
      };
      KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
        this.priv = new BN(key, enc || 16);
        this.priv = this.priv.umod(this.ec.curve.n);
      };
      KeyPair.prototype._importPublic = function _importPublic(key, enc) {
        if (key.x || key.y) {
          if (this.ec.curve.type === "mont") {
            assert4(key.x, "Need x coordinate");
          } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
            assert4(key.x && key.y, "Need both x and y coordinate");
          }
          this.pub = this.ec.curve.point(key.x, key.y);
          return;
        }
        this.pub = this.ec.curve.decodePoint(key, enc);
      };
      KeyPair.prototype.derive = function derive(pub) {
        if (!pub.validate()) {
          assert4(pub.validate(), "public point not validated");
        }
        return pub.mul(this.priv).getX();
      };
      KeyPair.prototype.sign = function sign(msg, enc, options) {
        return this.ec.sign(msg, this, enc, options);
      };
      KeyPair.prototype.verify = function verify(msg, signature) {
        return this.ec.verify(msg, signature, this);
      };
      KeyPair.prototype.inspect = function inspect() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/ec/signature.js
  var require_signature = __commonJS({
    "node_modules/elliptic/lib/elliptic/ec/signature.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      function Signature(options, enc) {
        if (options instanceof Signature)
          return options;
        if (this._importDER(options, enc))
          return;
        assert4(options.r && options.s, "Signature without r or s");
        this.r = new BN(options.r, 16);
        this.s = new BN(options.s, 16);
        if (options.recoveryParam === void 0)
          this.recoveryParam = null;
        else
          this.recoveryParam = options.recoveryParam;
      }
      module.exports = Signature;
      function Position() {
        this.place = 0;
      }
      function getLength(buf, p) {
        var initial = buf[p.place++];
        if (!(initial & 128)) {
          return initial;
        }
        var octetLen = initial & 15;
        if (octetLen === 0 || octetLen > 4) {
          return false;
        }
        if (buf[p.place] === 0) {
          return false;
        }
        var val = 0;
        for (var i = 0, off2 = p.place; i < octetLen; i++, off2++) {
          val <<= 8;
          val |= buf[off2];
          val >>>= 0;
        }
        if (val <= 127) {
          return false;
        }
        p.place = off2;
        return val;
      }
      function rmPadding(buf) {
        var i = 0;
        var len = buf.length - 1;
        while (!buf[i] && !(buf[i + 1] & 128) && i < len) {
          i++;
        }
        if (i === 0) {
          return buf;
        }
        return buf.slice(i);
      }
      Signature.prototype._importDER = function _importDER(data, enc) {
        data = utils2.toArray(data, enc);
        var p = new Position();
        if (data[p.place++] !== 48) {
          return false;
        }
        var len = getLength(data, p);
        if (len === false) {
          return false;
        }
        if (len + p.place !== data.length) {
          return false;
        }
        if (data[p.place++] !== 2) {
          return false;
        }
        var rlen = getLength(data, p);
        if (rlen === false) {
          return false;
        }
        if ((data[p.place] & 128) !== 0) {
          return false;
        }
        var r = data.slice(p.place, rlen + p.place);
        p.place += rlen;
        if (data[p.place++] !== 2) {
          return false;
        }
        var slen = getLength(data, p);
        if (slen === false) {
          return false;
        }
        if (data.length !== slen + p.place) {
          return false;
        }
        if ((data[p.place] & 128) !== 0) {
          return false;
        }
        var s = data.slice(p.place, slen + p.place);
        if (r[0] === 0) {
          if (r[1] & 128) {
            r = r.slice(1);
          } else {
            return false;
          }
        }
        if (s[0] === 0) {
          if (s[1] & 128) {
            s = s.slice(1);
          } else {
            return false;
          }
        }
        this.r = new BN(r);
        this.s = new BN(s);
        this.recoveryParam = null;
        return true;
      };
      function constructLength(arr, len) {
        if (len < 128) {
          arr.push(len);
          return;
        }
        var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
        arr.push(octets | 128);
        while (--octets) {
          arr.push(len >>> (octets << 3) & 255);
        }
        arr.push(len);
      }
      Signature.prototype.toDER = function toDER(enc) {
        var r = this.r.toArray();
        var s = this.s.toArray();
        if (r[0] & 128)
          r = [0].concat(r);
        if (s[0] & 128)
          s = [0].concat(s);
        r = rmPadding(r);
        s = rmPadding(s);
        while (!s[0] && !(s[1] & 128)) {
          s = s.slice(1);
        }
        var arr = [2];
        constructLength(arr, r.length);
        arr = arr.concat(r);
        arr.push(2);
        constructLength(arr, s.length);
        var backHalf = arr.concat(s);
        var res = [48];
        constructLength(res, backHalf.length);
        res = res.concat(backHalf);
        return utils2.encode(res, enc);
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/ec/index.js
  var require_ec = __commonJS({
    "node_modules/elliptic/lib/elliptic/ec/index.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var HmacDRBG = require_hmac_drbg();
      var utils2 = require_utils2();
      var curves2 = require_curves();
      var rand = require_brorand();
      var assert4 = utils2.assert;
      var KeyPair = require_key();
      var Signature = require_signature();
      function EC3(options) {
        if (!(this instanceof EC3))
          return new EC3(options);
        if (typeof options === "string") {
          assert4(
            Object.prototype.hasOwnProperty.call(curves2, options),
            "Unknown curve " + options
          );
          options = curves2[options];
        }
        if (options instanceof curves2.PresetCurve)
          options = { curve: options };
        this.curve = options.curve.curve;
        this.n = this.curve.n;
        this.nh = this.n.ushrn(1);
        this.g = this.curve.g;
        this.g = options.curve.g;
        this.g.precompute(options.curve.n.bitLength() + 1);
        this.hash = options.hash || options.curve.hash;
      }
      module.exports = EC3;
      EC3.prototype.keyPair = function keyPair(options) {
        return new KeyPair(this, options);
      };
      EC3.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
        return KeyPair.fromPrivate(this, priv, enc);
      };
      EC3.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
        return KeyPair.fromPublic(this, pub, enc);
      };
      EC3.prototype.genKeyPair = function genKeyPair(options) {
        if (!options)
          options = {};
        var drbg = new HmacDRBG({
          hash: this.hash,
          pers: options.pers,
          persEnc: options.persEnc || "utf8",
          entropy: options.entropy || rand(this.hash.hmacStrength),
          entropyEnc: options.entropy && options.entropyEnc || "utf8",
          nonce: this.n.toArray()
        });
        var bytes4 = this.n.byteLength();
        var ns2 = this.n.sub(new BN(2));
        for (; ; ) {
          var priv = new BN(drbg.generate(bytes4));
          if (priv.cmp(ns2) > 0)
            continue;
          priv.iaddn(1);
          return this.keyFromPrivate(priv);
        }
      };
      EC3.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
        var delta = msg.byteLength() * 8 - this.n.bitLength();
        if (delta > 0)
          msg = msg.ushrn(delta);
        if (!truncOnly && msg.cmp(this.n) >= 0)
          return msg.sub(this.n);
        else
          return msg;
      };
      EC3.prototype.sign = function sign(msg, key, enc, options) {
        if (typeof enc === "object") {
          options = enc;
          enc = null;
        }
        if (!options)
          options = {};
        key = this.keyFromPrivate(key, enc);
        msg = this._truncateToN(new BN(msg, 16));
        var bytes4 = this.n.byteLength();
        var bkey = key.getPrivate().toArray("be", bytes4);
        var nonce = msg.toArray("be", bytes4);
        var drbg = new HmacDRBG({
          hash: this.hash,
          entropy: bkey,
          nonce,
          pers: options.pers,
          persEnc: options.persEnc || "utf8"
        });
        var ns1 = this.n.sub(new BN(1));
        for (var iter = 0; ; iter++) {
          var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
          k = this._truncateToN(k, true);
          if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
            continue;
          var kp = this.g.mul(k);
          if (kp.isInfinity())
            continue;
          var kpX = kp.getX();
          var r = kpX.umod(this.n);
          if (r.cmpn(0) === 0)
            continue;
          var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
          s = s.umod(this.n);
          if (s.cmpn(0) === 0)
            continue;
          var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);
          if (options.canonical && s.cmp(this.nh) > 0) {
            s = this.n.sub(s);
            recoveryParam ^= 1;
          }
          return new Signature({ r, s, recoveryParam });
        }
      };
      EC3.prototype.verify = function verify(msg, signature, key, enc) {
        msg = this._truncateToN(new BN(msg, 16));
        key = this.keyFromPublic(key, enc);
        signature = new Signature(signature, "hex");
        var r = signature.r;
        var s = signature.s;
        if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
          return false;
        if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
          return false;
        var sinv = s.invm(this.n);
        var u1 = sinv.mul(msg).umod(this.n);
        var u2 = sinv.mul(r).umod(this.n);
        var p;
        if (!this.curve._maxwellTrick) {
          p = this.g.mulAdd(u1, key.getPublic(), u2);
          if (p.isInfinity())
            return false;
          return p.getX().umod(this.n).cmp(r) === 0;
        }
        p = this.g.jmulAdd(u1, key.getPublic(), u2);
        if (p.isInfinity())
          return false;
        return p.eqXToP(r);
      };
      EC3.prototype.recoverPubKey = function(msg, signature, j, enc) {
        assert4((3 & j) === j, "The recovery param is more than two bits");
        signature = new Signature(signature, enc);
        var n = this.n;
        var e = new BN(msg);
        var r = signature.r;
        var s = signature.s;
        var isYOdd = j & 1;
        var isSecondKey = j >> 1;
        if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
          throw new Error("Unable to find sencond key candinate");
        if (isSecondKey)
          r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
        else
          r = this.curve.pointFromX(r, isYOdd);
        var rInv = signature.r.invm(n);
        var s1 = n.sub(e).mul(rInv).umod(n);
        var s2 = s.mul(rInv).umod(n);
        return this.g.mulAdd(s1, r, s2);
      };
      EC3.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
        signature = new Signature(signature, enc);
        if (signature.recoveryParam !== null)
          return signature.recoveryParam;
        for (var i = 0; i < 4; i++) {
          var Qprime;
          try {
            Qprime = this.recoverPubKey(e, signature, i);
          } catch (e2) {
            continue;
          }
          if (Qprime.eq(Q))
            return i;
        }
        throw new Error("Unable to find valid recovery factor");
      };
    }
  });

  // node_modules/elliptic/lib/elliptic/eddsa/key.js
  var require_key2 = __commonJS({
    "node_modules/elliptic/lib/elliptic/eddsa/key.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      var parseBytes = utils2.parseBytes;
      var cachedProperty = utils2.cachedProperty;
      function KeyPair(eddsa, params) {
        this.eddsa = eddsa;
        this._secret = parseBytes(params.secret);
        if (eddsa.isPoint(params.pub))
          this._pub = params.pub;
        else
          this._pubBytes = parseBytes(params.pub);
      }
      KeyPair.fromPublic = function fromPublic(eddsa, pub) {
        if (pub instanceof KeyPair)
          return pub;
        return new KeyPair(eddsa, { pub });
      };
      KeyPair.fromSecret = function fromSecret(eddsa, secret) {
        if (secret instanceof KeyPair)
          return secret;
        return new KeyPair(eddsa, { secret });
      };
      KeyPair.prototype.secret = function secret() {
        return this._secret;
      };
      cachedProperty(KeyPair, "pubBytes", function pubBytes() {
        return this.eddsa.encodePoint(this.pub());
      });
      cachedProperty(KeyPair, "pub", function pub() {
        if (this._pubBytes)
          return this.eddsa.decodePoint(this._pubBytes);
        return this.eddsa.g.mul(this.priv());
      });
      cachedProperty(KeyPair, "privBytes", function privBytes() {
        var eddsa = this.eddsa;
        var hash3 = this.hash();
        var lastIx = eddsa.encodingLength - 1;
        var a = hash3.slice(0, eddsa.encodingLength);
        a[0] &= 248;
        a[lastIx] &= 127;
        a[lastIx] |= 64;
        return a;
      });
      cachedProperty(KeyPair, "priv", function priv() {
        return this.eddsa.decodeInt(this.privBytes());
      });
      cachedProperty(KeyPair, "hash", function hash3() {
        return this.eddsa.hash().update(this.secret()).digest();
      });
      cachedProperty(KeyPair, "messagePrefix", function messagePrefix() {
        return this.hash().slice(this.eddsa.encodingLength);
      });
      KeyPair.prototype.sign = function sign(message) {
        assert4(this._secret, "KeyPair can only verify");
        return this.eddsa.sign(message, this);
      };
      KeyPair.prototype.verify = function verify(message, sig) {
        return this.eddsa.verify(message, sig, this);
      };
      KeyPair.prototype.getSecret = function getSecret(enc) {
        assert4(this._secret, "KeyPair is public only");
        return utils2.encode(this.secret(), enc);
      };
      KeyPair.prototype.getPublic = function getPublic(enc) {
        return utils2.encode(this.pubBytes(), enc);
      };
      module.exports = KeyPair;
    }
  });

  // node_modules/elliptic/lib/elliptic/eddsa/signature.js
  var require_signature2 = __commonJS({
    "node_modules/elliptic/lib/elliptic/eddsa/signature.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var BN = require_bn();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      var cachedProperty = utils2.cachedProperty;
      var parseBytes = utils2.parseBytes;
      function Signature(eddsa, sig) {
        this.eddsa = eddsa;
        if (typeof sig !== "object")
          sig = parseBytes(sig);
        if (Array.isArray(sig)) {
          assert4(sig.length === eddsa.encodingLength * 2, "Signature has invalid size");
          sig = {
            R: sig.slice(0, eddsa.encodingLength),
            S: sig.slice(eddsa.encodingLength)
          };
        }
        assert4(sig.R && sig.S, "Signature without R or S");
        if (eddsa.isPoint(sig.R))
          this._R = sig.R;
        if (sig.S instanceof BN)
          this._S = sig.S;
        this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
        this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
      }
      cachedProperty(Signature, "S", function S() {
        return this.eddsa.decodeInt(this.Sencoded());
      });
      cachedProperty(Signature, "R", function R() {
        return this.eddsa.decodePoint(this.Rencoded());
      });
      cachedProperty(Signature, "Rencoded", function Rencoded() {
        return this.eddsa.encodePoint(this.R());
      });
      cachedProperty(Signature, "Sencoded", function Sencoded() {
        return this.eddsa.encodeInt(this.S());
      });
      Signature.prototype.toBytes = function toBytes3() {
        return this.Rencoded().concat(this.Sencoded());
      };
      Signature.prototype.toHex = function toHex2() {
        return utils2.encode(this.toBytes(), "hex").toUpperCase();
      };
      module.exports = Signature;
    }
  });

  // node_modules/elliptic/lib/elliptic/eddsa/index.js
  var require_eddsa = __commonJS({
    "node_modules/elliptic/lib/elliptic/eddsa/index.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var hash3 = require_hash();
      var curves2 = require_curves();
      var utils2 = require_utils2();
      var assert4 = utils2.assert;
      var parseBytes = utils2.parseBytes;
      var KeyPair = require_key2();
      var Signature = require_signature2();
      function EDDSA(curve) {
        assert4(curve === "ed25519", "only tested with ed25519 so far");
        if (!(this instanceof EDDSA))
          return new EDDSA(curve);
        curve = curves2[curve].curve;
        this.curve = curve;
        this.g = curve.g;
        this.g.precompute(curve.n.bitLength() + 1);
        this.pointClass = curve.point().constructor;
        this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
        this.hash = hash3.sha512;
      }
      module.exports = EDDSA;
      EDDSA.prototype.sign = function sign(message, secret) {
        message = parseBytes(message);
        var key = this.keyFromSecret(secret);
        var r = this.hashInt(key.messagePrefix(), message);
        var R = this.g.mul(r);
        var Rencoded = this.encodePoint(R);
        var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
        var S = r.add(s_).umod(this.curve.n);
        return this.makeSignature({ R, S, Rencoded });
      };
      EDDSA.prototype.verify = function verify(message, sig, pub) {
        message = parseBytes(message);
        sig = this.makeSignature(sig);
        if (sig.S().gte(sig.eddsa.curve.n) || sig.S().isNeg()) {
          return false;
        }
        var key = this.keyFromPublic(pub);
        var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
        var SG = this.g.mul(sig.S());
        var RplusAh = sig.R().add(key.pub().mul(h));
        return RplusAh.eq(SG);
      };
      EDDSA.prototype.hashInt = function hashInt() {
        var hash4 = this.hash();
        for (var i = 0; i < arguments.length; i++)
          hash4.update(arguments[i]);
        return utils2.intFromLE(hash4.digest()).umod(this.curve.n);
      };
      EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
        return KeyPair.fromPublic(this, pub);
      };
      EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
        return KeyPair.fromSecret(this, secret);
      };
      EDDSA.prototype.makeSignature = function makeSignature(sig) {
        if (sig instanceof Signature)
          return sig;
        return new Signature(this, sig);
      };
      EDDSA.prototype.encodePoint = function encodePoint(point) {
        var enc = point.getY().toArray("le", this.encodingLength);
        enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0;
        return enc;
      };
      EDDSA.prototype.decodePoint = function decodePoint(bytes4) {
        bytes4 = utils2.parseBytes(bytes4);
        var lastIx = bytes4.length - 1;
        var normed = bytes4.slice(0, lastIx).concat(bytes4[lastIx] & ~128);
        var xIsOdd = (bytes4[lastIx] & 128) !== 0;
        var y = utils2.intFromLE(normed);
        return this.curve.pointFromY(y, xIsOdd);
      };
      EDDSA.prototype.encodeInt = function encodeInt(num2) {
        return num2.toArray("le", this.encodingLength);
      };
      EDDSA.prototype.decodeInt = function decodeInt(bytes4) {
        return utils2.intFromLE(bytes4);
      };
      EDDSA.prototype.isPoint = function isPoint(val) {
        return val instanceof this.pointClass;
      };
    }
  });

  // node_modules/elliptic/lib/elliptic.js
  var require_elliptic = __commonJS({
    "node_modules/elliptic/lib/elliptic.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var elliptic3 = exports2;
      elliptic3.version = require_package().version;
      elliptic3.utils = require_utils2();
      elliptic3.rand = require_brorand();
      elliptic3.curve = require_curve();
      elliptic3.curves = require_curves();
      elliptic3.ec = require_ec();
      elliptic3.eddsa = require_eddsa();
    }
  });

  // node_modules/asn1.js/node_modules/bn.js/lib/bn.js
  var require_bn2 = __commonJS({
    "node_modules/asn1.js/node_modules/bn.js/lib/bn.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(module2, exports3) {
        "use strict";
        function assert4(val, msg) {
          if (!val) throw new Error(msg || "Assertion failed");
        }
        function inherits2(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
        function BN(number3, base3, endian) {
          if (BN.isBN(number3)) {
            return number3;
          }
          this.negative = 0;
          this.words = null;
          this.length = 0;
          this.red = null;
          if (number3 !== null) {
            if (base3 === "le" || base3 === "be") {
              endian = base3;
              base3 = 10;
            }
            this._init(number3 || 0, base3 || 10, endian || "be");
          }
        }
        if (typeof module2 === "object") {
          module2.exports = BN;
        } else {
          exports3.BN = BN;
        }
        BN.BN = BN;
        BN.wordSize = 26;
        var Buffer3;
        try {
          if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
            Buffer3 = window.Buffer;
          } else {
            Buffer3 = (init_buffer(), __toCommonJS(buffer_exports)).Buffer;
          }
        } catch (e) {
        }
        BN.isBN = function isBN(num2) {
          if (num2 instanceof BN) {
            return true;
          }
          return num2 !== null && typeof num2 === "object" && num2.constructor.wordSize === BN.wordSize && Array.isArray(num2.words);
        };
        BN.max = function max(left, right) {
          if (left.cmp(right) > 0) return left;
          return right;
        };
        BN.min = function min(left, right) {
          if (left.cmp(right) < 0) return left;
          return right;
        };
        BN.prototype._init = function init(number3, base3, endian) {
          if (typeof number3 === "number") {
            return this._initNumber(number3, base3, endian);
          }
          if (typeof number3 === "object") {
            return this._initArray(number3, base3, endian);
          }
          if (base3 === "hex") {
            base3 = 16;
          }
          assert4(base3 === (base3 | 0) && base3 >= 2 && base3 <= 36);
          number3 = number3.toString().replace(/\s+/g, "");
          var start = 0;
          if (number3[0] === "-") {
            start++;
            this.negative = 1;
          }
          if (start < number3.length) {
            if (base3 === 16) {
              this._parseHex(number3, start, endian);
            } else {
              this._parseBase(number3, base3, start);
              if (endian === "le") {
                this._initArray(this.toArray(), base3, endian);
              }
            }
          }
        };
        BN.prototype._initNumber = function _initNumber(number3, base3, endian) {
          if (number3 < 0) {
            this.negative = 1;
            number3 = -number3;
          }
          if (number3 < 67108864) {
            this.words = [number3 & 67108863];
            this.length = 1;
          } else if (number3 < 4503599627370496) {
            this.words = [
              number3 & 67108863,
              number3 / 67108864 & 67108863
            ];
            this.length = 2;
          } else {
            assert4(number3 < 9007199254740992);
            this.words = [
              number3 & 67108863,
              number3 / 67108864 & 67108863,
              1
            ];
            this.length = 3;
          }
          if (endian !== "le") return;
          this._initArray(this.toArray(), base3, endian);
        };
        BN.prototype._initArray = function _initArray(number3, base3, endian) {
          assert4(typeof number3.length === "number");
          if (number3.length <= 0) {
            this.words = [0];
            this.length = 1;
            return this;
          }
          this.length = Math.ceil(number3.length / 3);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var j, w;
          var off2 = 0;
          if (endian === "be") {
            for (i = number3.length - 1, j = 0; i >= 0; i -= 3) {
              w = number3[i] | number3[i - 1] << 8 | number3[i - 2] << 16;
              this.words[j] |= w << off2 & 67108863;
              this.words[j + 1] = w >>> 26 - off2 & 67108863;
              off2 += 24;
              if (off2 >= 26) {
                off2 -= 26;
                j++;
              }
            }
          } else if (endian === "le") {
            for (i = 0, j = 0; i < number3.length; i += 3) {
              w = number3[i] | number3[i + 1] << 8 | number3[i + 2] << 16;
              this.words[j] |= w << off2 & 67108863;
              this.words[j + 1] = w >>> 26 - off2 & 67108863;
              off2 += 24;
              if (off2 >= 26) {
                off2 -= 26;
                j++;
              }
            }
          }
          return this.strip();
        };
        function parseHex4Bits(string2, index) {
          var c = string2.charCodeAt(index);
          if (c >= 65 && c <= 70) {
            return c - 55;
          } else if (c >= 97 && c <= 102) {
            return c - 87;
          } else {
            return c - 48 & 15;
          }
        }
        function parseHexByte(string2, lowerBound, index) {
          var r = parseHex4Bits(string2, index);
          if (index - 1 >= lowerBound) {
            r |= parseHex4Bits(string2, index - 1) << 4;
          }
          return r;
        }
        BN.prototype._parseHex = function _parseHex(number3, start, endian) {
          this.length = Math.ceil((number3.length - start) / 6);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var off2 = 0;
          var j = 0;
          var w;
          if (endian === "be") {
            for (i = number3.length - 1; i >= start; i -= 2) {
              w = parseHexByte(number3, start, i) << off2;
              this.words[j] |= w & 67108863;
              if (off2 >= 18) {
                off2 -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off2 += 8;
              }
            }
          } else {
            var parseLength = number3.length - start;
            for (i = parseLength % 2 === 0 ? start + 1 : start; i < number3.length; i += 2) {
              w = parseHexByte(number3, start, i) << off2;
              this.words[j] |= w & 67108863;
              if (off2 >= 18) {
                off2 -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off2 += 8;
              }
            }
          }
          this.strip();
        };
        function parseBase(str2, start, end, mul) {
          var r = 0;
          var len = Math.min(str2.length, end);
          for (var i = start; i < len; i++) {
            var c = str2.charCodeAt(i) - 48;
            r *= mul;
            if (c >= 49) {
              r += c - 49 + 10;
            } else if (c >= 17) {
              r += c - 17 + 10;
            } else {
              r += c;
            }
          }
          return r;
        }
        BN.prototype._parseBase = function _parseBase(number3, base3, start) {
          this.words = [0];
          this.length = 1;
          for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base3) {
            limbLen++;
          }
          limbLen--;
          limbPow = limbPow / base3 | 0;
          var total = number3.length - start;
          var mod2 = total % limbLen;
          var end = Math.min(total, total - mod2) + start;
          var word = 0;
          for (var i = start; i < end; i += limbLen) {
            word = parseBase(number3, i, i + limbLen, base3);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          if (mod2 !== 0) {
            var pow3 = 1;
            word = parseBase(number3, i, number3.length, base3);
            for (i = 0; i < mod2; i++) {
              pow3 *= base3;
            }
            this.imuln(pow3);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          this.strip();
        };
        BN.prototype.copy = function copy(dest) {
          dest.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            dest.words[i] = this.words[i];
          }
          dest.length = this.length;
          dest.negative = this.negative;
          dest.red = this.red;
        };
        BN.prototype.clone = function clone() {
          var r = new BN(null);
          this.copy(r);
          return r;
        };
        BN.prototype._expand = function _expand(size) {
          while (this.length < size) {
            this.words[this.length++] = 0;
          }
          return this;
        };
        BN.prototype.strip = function strip() {
          while (this.length > 1 && this.words[this.length - 1] === 0) {
            this.length--;
          }
          return this._normSign();
        };
        BN.prototype._normSign = function _normSign() {
          if (this.length === 1 && this.words[0] === 0) {
            this.negative = 0;
          }
          return this;
        };
        BN.prototype.inspect = function inspect() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var zeros = [
          "",
          "0",
          "00",
          "000",
          "0000",
          "00000",
          "000000",
          "0000000",
          "00000000",
          "000000000",
          "0000000000",
          "00000000000",
          "000000000000",
          "0000000000000",
          "00000000000000",
          "000000000000000",
          "0000000000000000",
          "00000000000000000",
          "000000000000000000",
          "0000000000000000000",
          "00000000000000000000",
          "000000000000000000000",
          "0000000000000000000000",
          "00000000000000000000000",
          "000000000000000000000000",
          "0000000000000000000000000"
        ];
        var groupSizes = [
          0,
          0,
          25,
          16,
          12,
          11,
          10,
          9,
          8,
          8,
          7,
          7,
          7,
          7,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ];
        var groupBases = [
          0,
          0,
          33554432,
          43046721,
          16777216,
          48828125,
          60466176,
          40353607,
          16777216,
          43046721,
          1e7,
          19487171,
          35831808,
          62748517,
          7529536,
          11390625,
          16777216,
          24137569,
          34012224,
          47045881,
          64e6,
          4084101,
          5153632,
          6436343,
          7962624,
          9765625,
          11881376,
          14348907,
          17210368,
          20511149,
          243e5,
          28629151,
          33554432,
          39135393,
          45435424,
          52521875,
          60466176
        ];
        BN.prototype.toString = function toString5(base3, padding2) {
          base3 = base3 || 10;
          padding2 = padding2 | 0 || 1;
          var out;
          if (base3 === 16 || base3 === "hex") {
            out = "";
            var off2 = 0;
            var carry = 0;
            for (var i = 0; i < this.length; i++) {
              var w = this.words[i];
              var word = ((w << off2 | carry) & 16777215).toString(16);
              carry = w >>> 24 - off2 & 16777215;
              if (carry !== 0 || i !== this.length - 1) {
                out = zeros[6 - word.length] + word + out;
              } else {
                out = word + out;
              }
              off2 += 2;
              if (off2 >= 26) {
                off2 -= 26;
                i--;
              }
            }
            if (carry !== 0) {
              out = carry.toString(16) + out;
            }
            while (out.length % padding2 !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          if (base3 === (base3 | 0) && base3 >= 2 && base3 <= 36) {
            var groupSize = groupSizes[base3];
            var groupBase = groupBases[base3];
            out = "";
            var c = this.clone();
            c.negative = 0;
            while (!c.isZero()) {
              var r = c.modn(groupBase).toString(base3);
              c = c.idivn(groupBase);
              if (!c.isZero()) {
                out = zeros[groupSize - r.length] + r + out;
              } else {
                out = r + out;
              }
            }
            if (this.isZero()) {
              out = "0" + out;
            }
            while (out.length % padding2 !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          assert4(false, "Base should be between 2 and 36");
        };
        BN.prototype.toNumber = function toNumber() {
          var ret = this.words[0];
          if (this.length === 2) {
            ret += this.words[1] * 67108864;
          } else if (this.length === 3 && this.words[2] === 1) {
            ret += 4503599627370496 + this.words[1] * 67108864;
          } else if (this.length > 2) {
            assert4(false, "Number can only safely store up to 53 bits");
          }
          return this.negative !== 0 ? -ret : ret;
        };
        BN.prototype.toJSON = function toJSON2() {
          return this.toString(16);
        };
        BN.prototype.toBuffer = function toBuffer(endian, length2) {
          assert4(typeof Buffer3 !== "undefined");
          return this.toArrayLike(Buffer3, endian, length2);
        };
        BN.prototype.toArray = function toArray2(endian, length2) {
          return this.toArrayLike(Array, endian, length2);
        };
        BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length2) {
          var byteLength = this.byteLength();
          var reqLength = length2 || Math.max(1, byteLength);
          assert4(byteLength <= reqLength, "byte array longer than desired length");
          assert4(reqLength > 0, "Requested array length <= 0");
          this.strip();
          var littleEndian = endian === "le";
          var res = new ArrayType(reqLength);
          var b, i;
          var q = this.clone();
          if (!littleEndian) {
            for (i = 0; i < reqLength - byteLength; i++) {
              res[i] = 0;
            }
            for (i = 0; !q.isZero(); i++) {
              b = q.andln(255);
              q.iushrn(8);
              res[reqLength - i - 1] = b;
            }
          } else {
            for (i = 0; !q.isZero(); i++) {
              b = q.andln(255);
              q.iushrn(8);
              res[i] = b;
            }
            for (; i < reqLength; i++) {
              res[i] = 0;
            }
          }
          return res;
        };
        if (Math.clz32) {
          BN.prototype._countBits = function _countBits(w) {
            return 32 - Math.clz32(w);
          };
        } else {
          BN.prototype._countBits = function _countBits(w) {
            var t = w;
            var r = 0;
            if (t >= 4096) {
              r += 13;
              t >>>= 13;
            }
            if (t >= 64) {
              r += 7;
              t >>>= 7;
            }
            if (t >= 8) {
              r += 4;
              t >>>= 4;
            }
            if (t >= 2) {
              r += 2;
              t >>>= 2;
            }
            return r + t;
          };
        }
        BN.prototype._zeroBits = function _zeroBits(w) {
          if (w === 0) return 26;
          var t = w;
          var r = 0;
          if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
          }
          if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
          }
          if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
          }
          if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
          }
          if ((t & 1) === 0) {
            r++;
          }
          return r;
        };
        BN.prototype.bitLength = function bitLength() {
          var w = this.words[this.length - 1];
          var hi = this._countBits(w);
          return (this.length - 1) * 26 + hi;
        };
        function toBitArray(num2) {
          var w = new Array(num2.bitLength());
          for (var bit = 0; bit < w.length; bit++) {
            var off2 = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = (num2.words[off2] & 1 << wbit) >>> wbit;
          }
          return w;
        }
        BN.prototype.zeroBits = function zeroBits() {
          if (this.isZero()) return 0;
          var r = 0;
          for (var i = 0; i < this.length; i++) {
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
          }
          return r;
        };
        BN.prototype.byteLength = function byteLength() {
          return Math.ceil(this.bitLength() / 8);
        };
        BN.prototype.toTwos = function toTwos(width) {
          if (this.negative !== 0) {
            return this.abs().inotn(width).iaddn(1);
          }
          return this.clone();
        };
        BN.prototype.fromTwos = function fromTwos(width) {
          if (this.testn(width - 1)) {
            return this.notn(width).iaddn(1).ineg();
          }
          return this.clone();
        };
        BN.prototype.isNeg = function isNeg() {
          return this.negative !== 0;
        };
        BN.prototype.neg = function neg() {
          return this.clone().ineg();
        };
        BN.prototype.ineg = function ineg() {
          if (!this.isZero()) {
            this.negative ^= 1;
          }
          return this;
        };
        BN.prototype.iuor = function iuor(num2) {
          while (this.length < num2.length) {
            this.words[this.length++] = 0;
          }
          for (var i = 0; i < num2.length; i++) {
            this.words[i] = this.words[i] | num2.words[i];
          }
          return this.strip();
        };
        BN.prototype.ior = function ior(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuor(num2);
        };
        BN.prototype.or = function or2(num2) {
          if (this.length > num2.length) return this.clone().ior(num2);
          return num2.clone().ior(this);
        };
        BN.prototype.uor = function uor(num2) {
          if (this.length > num2.length) return this.clone().iuor(num2);
          return num2.clone().iuor(this);
        };
        BN.prototype.iuand = function iuand(num2) {
          var b;
          if (this.length > num2.length) {
            b = num2;
          } else {
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = this.words[i] & num2.words[i];
          }
          this.length = b.length;
          return this.strip();
        };
        BN.prototype.iand = function iand(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuand(num2);
        };
        BN.prototype.and = function and(num2) {
          if (this.length > num2.length) return this.clone().iand(num2);
          return num2.clone().iand(this);
        };
        BN.prototype.uand = function uand(num2) {
          if (this.length > num2.length) return this.clone().iuand(num2);
          return num2.clone().iuand(this);
        };
        BN.prototype.iuxor = function iuxor(num2) {
          var a;
          var b;
          if (this.length > num2.length) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = a.words[i] ^ b.words[i];
          }
          if (this !== a) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = a.length;
          return this.strip();
        };
        BN.prototype.ixor = function ixor(num2) {
          assert4((this.negative | num2.negative) === 0);
          return this.iuxor(num2);
        };
        BN.prototype.xor = function xor2(num2) {
          if (this.length > num2.length) return this.clone().ixor(num2);
          return num2.clone().ixor(this);
        };
        BN.prototype.uxor = function uxor(num2) {
          if (this.length > num2.length) return this.clone().iuxor(num2);
          return num2.clone().iuxor(this);
        };
        BN.prototype.inotn = function inotn(width) {
          assert4(typeof width === "number" && width >= 0);
          var bytesNeeded = Math.ceil(width / 26) | 0;
          var bitsLeft = width % 26;
          this._expand(bytesNeeded);
          if (bitsLeft > 0) {
            bytesNeeded--;
          }
          for (var i = 0; i < bytesNeeded; i++) {
            this.words[i] = ~this.words[i] & 67108863;
          }
          if (bitsLeft > 0) {
            this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
          }
          return this.strip();
        };
        BN.prototype.notn = function notn(width) {
          return this.clone().inotn(width);
        };
        BN.prototype.setn = function setn(bit, val) {
          assert4(typeof bit === "number" && bit >= 0);
          var off2 = bit / 26 | 0;
          var wbit = bit % 26;
          this._expand(off2 + 1);
          if (val) {
            this.words[off2] = this.words[off2] | 1 << wbit;
          } else {
            this.words[off2] = this.words[off2] & ~(1 << wbit);
          }
          return this.strip();
        };
        BN.prototype.iadd = function iadd(num2) {
          var r;
          if (this.negative !== 0 && num2.negative === 0) {
            this.negative = 0;
            r = this.isub(num2);
            this.negative ^= 1;
            return this._normSign();
          } else if (this.negative === 0 && num2.negative !== 0) {
            num2.negative = 0;
            r = this.isub(num2);
            num2.negative = 1;
            return r._normSign();
          }
          var a, b;
          if (this.length > num2.length) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          this.length = a.length;
          if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
          } else if (a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          return this;
        };
        BN.prototype.add = function add2(num2) {
          var res;
          if (num2.negative !== 0 && this.negative === 0) {
            num2.negative = 0;
            res = this.sub(num2);
            num2.negative ^= 1;
            return res;
          } else if (num2.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num2.sub(this);
            this.negative = 1;
            return res;
          }
          if (this.length > num2.length) return this.clone().iadd(num2);
          return num2.clone().iadd(this);
        };
        BN.prototype.isub = function isub(num2) {
          if (num2.negative !== 0) {
            num2.negative = 0;
            var r = this.iadd(num2);
            num2.negative = 1;
            return r._normSign();
          } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num2);
            this.negative = 1;
            return this._normSign();
          }
          var cmp = this.cmp(num2);
          if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
          }
          var a, b;
          if (cmp > 0) {
            a = this;
            b = num2;
          } else {
            a = num2;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          if (carry === 0 && i < a.length && a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = Math.max(this.length, i);
          if (a !== this) {
            this.negative = 1;
          }
          return this.strip();
        };
        BN.prototype.sub = function sub(num2) {
          return this.clone().isub(num2);
        };
        function smallMulTo(self2, num2, out) {
          out.negative = num2.negative ^ self2.negative;
          var len = self2.length + num2.length | 0;
          out.length = len;
          len = len - 1 | 0;
          var a = self2.words[0] | 0;
          var b = num2.words[0] | 0;
          var r = a * b;
          var lo = r & 67108863;
          var carry = r / 67108864 | 0;
          out.words[0] = lo;
          for (var k = 1; k < len; k++) {
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num2.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j | 0;
              a = self2.words[i] | 0;
              b = num2.words[j] | 0;
              r = a * b + rword;
              ncarry += r / 67108864 | 0;
              rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
          }
          if (carry !== 0) {
            out.words[k] = carry | 0;
          } else {
            out.length--;
          }
          return out.strip();
        }
        var comb10MulTo = function comb10MulTo2(self2, num2, out) {
          var a = self2.words;
          var b = num2.words;
          var o = out.words;
          var c = 0;
          var lo;
          var mid;
          var hi;
          var a0 = a[0] | 0;
          var al0 = a0 & 8191;
          var ah0 = a0 >>> 13;
          var a1 = a[1] | 0;
          var al1 = a1 & 8191;
          var ah1 = a1 >>> 13;
          var a2 = a[2] | 0;
          var al2 = a2 & 8191;
          var ah2 = a2 >>> 13;
          var a3 = a[3] | 0;
          var al3 = a3 & 8191;
          var ah3 = a3 >>> 13;
          var a4 = a[4] | 0;
          var al4 = a4 & 8191;
          var ah4 = a4 >>> 13;
          var a5 = a[5] | 0;
          var al5 = a5 & 8191;
          var ah5 = a5 >>> 13;
          var a6 = a[6] | 0;
          var al6 = a6 & 8191;
          var ah6 = a6 >>> 13;
          var a7 = a[7] | 0;
          var al7 = a7 & 8191;
          var ah7 = a7 >>> 13;
          var a8 = a[8] | 0;
          var al8 = a8 & 8191;
          var ah8 = a8 >>> 13;
          var a9 = a[9] | 0;
          var al9 = a9 & 8191;
          var ah9 = a9 >>> 13;
          var b0 = b[0] | 0;
          var bl0 = b0 & 8191;
          var bh0 = b0 >>> 13;
          var b1 = b[1] | 0;
          var bl1 = b1 & 8191;
          var bh1 = b1 >>> 13;
          var b2 = b[2] | 0;
          var bl2 = b2 & 8191;
          var bh2 = b2 >>> 13;
          var b3 = b[3] | 0;
          var bl3 = b3 & 8191;
          var bh3 = b3 >>> 13;
          var b4 = b[4] | 0;
          var bl4 = b4 & 8191;
          var bh4 = b4 >>> 13;
          var b5 = b[5] | 0;
          var bl5 = b5 & 8191;
          var bh5 = b5 >>> 13;
          var b6 = b[6] | 0;
          var bl6 = b6 & 8191;
          var bh6 = b6 >>> 13;
          var b7 = b[7] | 0;
          var bl7 = b7 & 8191;
          var bh7 = b7 >>> 13;
          var b8 = b[8] | 0;
          var bl8 = b8 & 8191;
          var bh8 = b8 >>> 13;
          var b9 = b[9] | 0;
          var bl9 = b9 & 8191;
          var bh9 = b9 >>> 13;
          out.negative = self2.negative ^ num2.negative;
          out.length = 19;
          lo = Math.imul(al0, bl0);
          mid = Math.imul(al0, bh0);
          mid = mid + Math.imul(ah0, bl0) | 0;
          hi = Math.imul(ah0, bh0);
          var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
          w0 &= 67108863;
          lo = Math.imul(al1, bl0);
          mid = Math.imul(al1, bh0);
          mid = mid + Math.imul(ah1, bl0) | 0;
          hi = Math.imul(ah1, bh0);
          lo = lo + Math.imul(al0, bl1) | 0;
          mid = mid + Math.imul(al0, bh1) | 0;
          mid = mid + Math.imul(ah0, bl1) | 0;
          hi = hi + Math.imul(ah0, bh1) | 0;
          var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
          w1 &= 67108863;
          lo = Math.imul(al2, bl0);
          mid = Math.imul(al2, bh0);
          mid = mid + Math.imul(ah2, bl0) | 0;
          hi = Math.imul(ah2, bh0);
          lo = lo + Math.imul(al1, bl1) | 0;
          mid = mid + Math.imul(al1, bh1) | 0;
          mid = mid + Math.imul(ah1, bl1) | 0;
          hi = hi + Math.imul(ah1, bh1) | 0;
          lo = lo + Math.imul(al0, bl2) | 0;
          mid = mid + Math.imul(al0, bh2) | 0;
          mid = mid + Math.imul(ah0, bl2) | 0;
          hi = hi + Math.imul(ah0, bh2) | 0;
          var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
          w2 &= 67108863;
          lo = Math.imul(al3, bl0);
          mid = Math.imul(al3, bh0);
          mid = mid + Math.imul(ah3, bl0) | 0;
          hi = Math.imul(ah3, bh0);
          lo = lo + Math.imul(al2, bl1) | 0;
          mid = mid + Math.imul(al2, bh1) | 0;
          mid = mid + Math.imul(ah2, bl1) | 0;
          hi = hi + Math.imul(ah2, bh1) | 0;
          lo = lo + Math.imul(al1, bl2) | 0;
          mid = mid + Math.imul(al1, bh2) | 0;
          mid = mid + Math.imul(ah1, bl2) | 0;
          hi = hi + Math.imul(ah1, bh2) | 0;
          lo = lo + Math.imul(al0, bl3) | 0;
          mid = mid + Math.imul(al0, bh3) | 0;
          mid = mid + Math.imul(ah0, bl3) | 0;
          hi = hi + Math.imul(ah0, bh3) | 0;
          var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
          w3 &= 67108863;
          lo = Math.imul(al4, bl0);
          mid = Math.imul(al4, bh0);
          mid = mid + Math.imul(ah4, bl0) | 0;
          hi = Math.imul(ah4, bh0);
          lo = lo + Math.imul(al3, bl1) | 0;
          mid = mid + Math.imul(al3, bh1) | 0;
          mid = mid + Math.imul(ah3, bl1) | 0;
          hi = hi + Math.imul(ah3, bh1) | 0;
          lo = lo + Math.imul(al2, bl2) | 0;
          mid = mid + Math.imul(al2, bh2) | 0;
          mid = mid + Math.imul(ah2, bl2) | 0;
          hi = hi + Math.imul(ah2, bh2) | 0;
          lo = lo + Math.imul(al1, bl3) | 0;
          mid = mid + Math.imul(al1, bh3) | 0;
          mid = mid + Math.imul(ah1, bl3) | 0;
          hi = hi + Math.imul(ah1, bh3) | 0;
          lo = lo + Math.imul(al0, bl4) | 0;
          mid = mid + Math.imul(al0, bh4) | 0;
          mid = mid + Math.imul(ah0, bl4) | 0;
          hi = hi + Math.imul(ah0, bh4) | 0;
          var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
          w4 &= 67108863;
          lo = Math.imul(al5, bl0);
          mid = Math.imul(al5, bh0);
          mid = mid + Math.imul(ah5, bl0) | 0;
          hi = Math.imul(ah5, bh0);
          lo = lo + Math.imul(al4, bl1) | 0;
          mid = mid + Math.imul(al4, bh1) | 0;
          mid = mid + Math.imul(ah4, bl1) | 0;
          hi = hi + Math.imul(ah4, bh1) | 0;
          lo = lo + Math.imul(al3, bl2) | 0;
          mid = mid + Math.imul(al3, bh2) | 0;
          mid = mid + Math.imul(ah3, bl2) | 0;
          hi = hi + Math.imul(ah3, bh2) | 0;
          lo = lo + Math.imul(al2, bl3) | 0;
          mid = mid + Math.imul(al2, bh3) | 0;
          mid = mid + Math.imul(ah2, bl3) | 0;
          hi = hi + Math.imul(ah2, bh3) | 0;
          lo = lo + Math.imul(al1, bl4) | 0;
          mid = mid + Math.imul(al1, bh4) | 0;
          mid = mid + Math.imul(ah1, bl4) | 0;
          hi = hi + Math.imul(ah1, bh4) | 0;
          lo = lo + Math.imul(al0, bl5) | 0;
          mid = mid + Math.imul(al0, bh5) | 0;
          mid = mid + Math.imul(ah0, bl5) | 0;
          hi = hi + Math.imul(ah0, bh5) | 0;
          var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
          w5 &= 67108863;
          lo = Math.imul(al6, bl0);
          mid = Math.imul(al6, bh0);
          mid = mid + Math.imul(ah6, bl0) | 0;
          hi = Math.imul(ah6, bh0);
          lo = lo + Math.imul(al5, bl1) | 0;
          mid = mid + Math.imul(al5, bh1) | 0;
          mid = mid + Math.imul(ah5, bl1) | 0;
          hi = hi + Math.imul(ah5, bh1) | 0;
          lo = lo + Math.imul(al4, bl2) | 0;
          mid = mid + Math.imul(al4, bh2) | 0;
          mid = mid + Math.imul(ah4, bl2) | 0;
          hi = hi + Math.imul(ah4, bh2) | 0;
          lo = lo + Math.imul(al3, bl3) | 0;
          mid = mid + Math.imul(al3, bh3) | 0;
          mid = mid + Math.imul(ah3, bl3) | 0;
          hi = hi + Math.imul(ah3, bh3) | 0;
          lo = lo + Math.imul(al2, bl4) | 0;
          mid = mid + Math.imul(al2, bh4) | 0;
          mid = mid + Math.imul(ah2, bl4) | 0;
          hi = hi + Math.imul(ah2, bh4) | 0;
          lo = lo + Math.imul(al1, bl5) | 0;
          mid = mid + Math.imul(al1, bh5) | 0;
          mid = mid + Math.imul(ah1, bl5) | 0;
          hi = hi + Math.imul(ah1, bh5) | 0;
          lo = lo + Math.imul(al0, bl6) | 0;
          mid = mid + Math.imul(al0, bh6) | 0;
          mid = mid + Math.imul(ah0, bl6) | 0;
          hi = hi + Math.imul(ah0, bh6) | 0;
          var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
          w6 &= 67108863;
          lo = Math.imul(al7, bl0);
          mid = Math.imul(al7, bh0);
          mid = mid + Math.imul(ah7, bl0) | 0;
          hi = Math.imul(ah7, bh0);
          lo = lo + Math.imul(al6, bl1) | 0;
          mid = mid + Math.imul(al6, bh1) | 0;
          mid = mid + Math.imul(ah6, bl1) | 0;
          hi = hi + Math.imul(ah6, bh1) | 0;
          lo = lo + Math.imul(al5, bl2) | 0;
          mid = mid + Math.imul(al5, bh2) | 0;
          mid = mid + Math.imul(ah5, bl2) | 0;
          hi = hi + Math.imul(ah5, bh2) | 0;
          lo = lo + Math.imul(al4, bl3) | 0;
          mid = mid + Math.imul(al4, bh3) | 0;
          mid = mid + Math.imul(ah4, bl3) | 0;
          hi = hi + Math.imul(ah4, bh3) | 0;
          lo = lo + Math.imul(al3, bl4) | 0;
          mid = mid + Math.imul(al3, bh4) | 0;
          mid = mid + Math.imul(ah3, bl4) | 0;
          hi = hi + Math.imul(ah3, bh4) | 0;
          lo = lo + Math.imul(al2, bl5) | 0;
          mid = mid + Math.imul(al2, bh5) | 0;
          mid = mid + Math.imul(ah2, bl5) | 0;
          hi = hi + Math.imul(ah2, bh5) | 0;
          lo = lo + Math.imul(al1, bl6) | 0;
          mid = mid + Math.imul(al1, bh6) | 0;
          mid = mid + Math.imul(ah1, bl6) | 0;
          hi = hi + Math.imul(ah1, bh6) | 0;
          lo = lo + Math.imul(al0, bl7) | 0;
          mid = mid + Math.imul(al0, bh7) | 0;
          mid = mid + Math.imul(ah0, bl7) | 0;
          hi = hi + Math.imul(ah0, bh7) | 0;
          var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
          w7 &= 67108863;
          lo = Math.imul(al8, bl0);
          mid = Math.imul(al8, bh0);
          mid = mid + Math.imul(ah8, bl0) | 0;
          hi = Math.imul(ah8, bh0);
          lo = lo + Math.imul(al7, bl1) | 0;
          mid = mid + Math.imul(al7, bh1) | 0;
          mid = mid + Math.imul(ah7, bl1) | 0;
          hi = hi + Math.imul(ah7, bh1) | 0;
          lo = lo + Math.imul(al6, bl2) | 0;
          mid = mid + Math.imul(al6, bh2) | 0;
          mid = mid + Math.imul(ah6, bl2) | 0;
          hi = hi + Math.imul(ah6, bh2) | 0;
          lo = lo + Math.imul(al5, bl3) | 0;
          mid = mid + Math.imul(al5, bh3) | 0;
          mid = mid + Math.imul(ah5, bl3) | 0;
          hi = hi + Math.imul(ah5, bh3) | 0;
          lo = lo + Math.imul(al4, bl4) | 0;
          mid = mid + Math.imul(al4, bh4) | 0;
          mid = mid + Math.imul(ah4, bl4) | 0;
          hi = hi + Math.imul(ah4, bh4) | 0;
          lo = lo + Math.imul(al3, bl5) | 0;
          mid = mid + Math.imul(al3, bh5) | 0;
          mid = mid + Math.imul(ah3, bl5) | 0;
          hi = hi + Math.imul(ah3, bh5) | 0;
          lo = lo + Math.imul(al2, bl6) | 0;
          mid = mid + Math.imul(al2, bh6) | 0;
          mid = mid + Math.imul(ah2, bl6) | 0;
          hi = hi + Math.imul(ah2, bh6) | 0;
          lo = lo + Math.imul(al1, bl7) | 0;
          mid = mid + Math.imul(al1, bh7) | 0;
          mid = mid + Math.imul(ah1, bl7) | 0;
          hi = hi + Math.imul(ah1, bh7) | 0;
          lo = lo + Math.imul(al0, bl8) | 0;
          mid = mid + Math.imul(al0, bh8) | 0;
          mid = mid + Math.imul(ah0, bl8) | 0;
          hi = hi + Math.imul(ah0, bh8) | 0;
          var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
          w8 &= 67108863;
          lo = Math.imul(al9, bl0);
          mid = Math.imul(al9, bh0);
          mid = mid + Math.imul(ah9, bl0) | 0;
          hi = Math.imul(ah9, bh0);
          lo = lo + Math.imul(al8, bl1) | 0;
          mid = mid + Math.imul(al8, bh1) | 0;
          mid = mid + Math.imul(ah8, bl1) | 0;
          hi = hi + Math.imul(ah8, bh1) | 0;
          lo = lo + Math.imul(al7, bl2) | 0;
          mid = mid + Math.imul(al7, bh2) | 0;
          mid = mid + Math.imul(ah7, bl2) | 0;
          hi = hi + Math.imul(ah7, bh2) | 0;
          lo = lo + Math.imul(al6, bl3) | 0;
          mid = mid + Math.imul(al6, bh3) | 0;
          mid = mid + Math.imul(ah6, bl3) | 0;
          hi = hi + Math.imul(ah6, bh3) | 0;
          lo = lo + Math.imul(al5, bl4) | 0;
          mid = mid + Math.imul(al5, bh4) | 0;
          mid = mid + Math.imul(ah5, bl4) | 0;
          hi = hi + Math.imul(ah5, bh4) | 0;
          lo = lo + Math.imul(al4, bl5) | 0;
          mid = mid + Math.imul(al4, bh5) | 0;
          mid = mid + Math.imul(ah4, bl5) | 0;
          hi = hi + Math.imul(ah4, bh5) | 0;
          lo = lo + Math.imul(al3, bl6) | 0;
          mid = mid + Math.imul(al3, bh6) | 0;
          mid = mid + Math.imul(ah3, bl6) | 0;
          hi = hi + Math.imul(ah3, bh6) | 0;
          lo = lo + Math.imul(al2, bl7) | 0;
          mid = mid + Math.imul(al2, bh7) | 0;
          mid = mid + Math.imul(ah2, bl7) | 0;
          hi = hi + Math.imul(ah2, bh7) | 0;
          lo = lo + Math.imul(al1, bl8) | 0;
          mid = mid + Math.imul(al1, bh8) | 0;
          mid = mid + Math.imul(ah1, bl8) | 0;
          hi = hi + Math.imul(ah1, bh8) | 0;
          lo = lo + Math.imul(al0, bl9) | 0;
          mid = mid + Math.imul(al0, bh9) | 0;
          mid = mid + Math.imul(ah0, bl9) | 0;
          hi = hi + Math.imul(ah0, bh9) | 0;
          var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
          w9 &= 67108863;
          lo = Math.imul(al9, bl1);
          mid = Math.imul(al9, bh1);
          mid = mid + Math.imul(ah9, bl1) | 0;
          hi = Math.imul(ah9, bh1);
          lo = lo + Math.imul(al8, bl2) | 0;
          mid = mid + Math.imul(al8, bh2) | 0;
          mid = mid + Math.imul(ah8, bl2) | 0;
          hi = hi + Math.imul(ah8, bh2) | 0;
          lo = lo + Math.imul(al7, bl3) | 0;
          mid = mid + Math.imul(al7, bh3) | 0;
          mid = mid + Math.imul(ah7, bl3) | 0;
          hi = hi + Math.imul(ah7, bh3) | 0;
          lo = lo + Math.imul(al6, bl4) | 0;
          mid = mid + Math.imul(al6, bh4) | 0;
          mid = mid + Math.imul(ah6, bl4) | 0;
          hi = hi + Math.imul(ah6, bh4) | 0;
          lo = lo + Math.imul(al5, bl5) | 0;
          mid = mid + Math.imul(al5, bh5) | 0;
          mid = mid + Math.imul(ah5, bl5) | 0;
          hi = hi + Math.imul(ah5, bh5) | 0;
          lo = lo + Math.imul(al4, bl6) | 0;
          mid = mid + Math.imul(al4, bh6) | 0;
          mid = mid + Math.imul(ah4, bl6) | 0;
          hi = hi + Math.imul(ah4, bh6) | 0;
          lo = lo + Math.imul(al3, bl7) | 0;
          mid = mid + Math.imul(al3, bh7) | 0;
          mid = mid + Math.imul(ah3, bl7) | 0;
          hi = hi + Math.imul(ah3, bh7) | 0;
          lo = lo + Math.imul(al2, bl8) | 0;
          mid = mid + Math.imul(al2, bh8) | 0;
          mid = mid + Math.imul(ah2, bl8) | 0;
          hi = hi + Math.imul(ah2, bh8) | 0;
          lo = lo + Math.imul(al1, bl9) | 0;
          mid = mid + Math.imul(al1, bh9) | 0;
          mid = mid + Math.imul(ah1, bl9) | 0;
          hi = hi + Math.imul(ah1, bh9) | 0;
          var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
          w10 &= 67108863;
          lo = Math.imul(al9, bl2);
          mid = Math.imul(al9, bh2);
          mid = mid + Math.imul(ah9, bl2) | 0;
          hi = Math.imul(ah9, bh2);
          lo = lo + Math.imul(al8, bl3) | 0;
          mid = mid + Math.imul(al8, bh3) | 0;
          mid = mid + Math.imul(ah8, bl3) | 0;
          hi = hi + Math.imul(ah8, bh3) | 0;
          lo = lo + Math.imul(al7, bl4) | 0;
          mid = mid + Math.imul(al7, bh4) | 0;
          mid = mid + Math.imul(ah7, bl4) | 0;
          hi = hi + Math.imul(ah7, bh4) | 0;
          lo = lo + Math.imul(al6, bl5) | 0;
          mid = mid + Math.imul(al6, bh5) | 0;
          mid = mid + Math.imul(ah6, bl5) | 0;
          hi = hi + Math.imul(ah6, bh5) | 0;
          lo = lo + Math.imul(al5, bl6) | 0;
          mid = mid + Math.imul(al5, bh6) | 0;
          mid = mid + Math.imul(ah5, bl6) | 0;
          hi = hi + Math.imul(ah5, bh6) | 0;
          lo = lo + Math.imul(al4, bl7) | 0;
          mid = mid + Math.imul(al4, bh7) | 0;
          mid = mid + Math.imul(ah4, bl7) | 0;
          hi = hi + Math.imul(ah4, bh7) | 0;
          lo = lo + Math.imul(al3, bl8) | 0;
          mid = mid + Math.imul(al3, bh8) | 0;
          mid = mid + Math.imul(ah3, bl8) | 0;
          hi = hi + Math.imul(ah3, bh8) | 0;
          lo = lo + Math.imul(al2, bl9) | 0;
          mid = mid + Math.imul(al2, bh9) | 0;
          mid = mid + Math.imul(ah2, bl9) | 0;
          hi = hi + Math.imul(ah2, bh9) | 0;
          var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
          w11 &= 67108863;
          lo = Math.imul(al9, bl3);
          mid = Math.imul(al9, bh3);
          mid = mid + Math.imul(ah9, bl3) | 0;
          hi = Math.imul(ah9, bh3);
          lo = lo + Math.imul(al8, bl4) | 0;
          mid = mid + Math.imul(al8, bh4) | 0;
          mid = mid + Math.imul(ah8, bl4) | 0;
          hi = hi + Math.imul(ah8, bh4) | 0;
          lo = lo + Math.imul(al7, bl5) | 0;
          mid = mid + Math.imul(al7, bh5) | 0;
          mid = mid + Math.imul(ah7, bl5) | 0;
          hi = hi + Math.imul(ah7, bh5) | 0;
          lo = lo + Math.imul(al6, bl6) | 0;
          mid = mid + Math.imul(al6, bh6) | 0;
          mid = mid + Math.imul(ah6, bl6) | 0;
          hi = hi + Math.imul(ah6, bh6) | 0;
          lo = lo + Math.imul(al5, bl7) | 0;
          mid = mid + Math.imul(al5, bh7) | 0;
          mid = mid + Math.imul(ah5, bl7) | 0;
          hi = hi + Math.imul(ah5, bh7) | 0;
          lo = lo + Math.imul(al4, bl8) | 0;
          mid = mid + Math.imul(al4, bh8) | 0;
          mid = mid + Math.imul(ah4, bl8) | 0;
          hi = hi + Math.imul(ah4, bh8) | 0;
          lo = lo + Math.imul(al3, bl9) | 0;
          mid = mid + Math.imul(al3, bh9) | 0;
          mid = mid + Math.imul(ah3, bl9) | 0;
          hi = hi + Math.imul(ah3, bh9) | 0;
          var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
          w12 &= 67108863;
          lo = Math.imul(al9, bl4);
          mid = Math.imul(al9, bh4);
          mid = mid + Math.imul(ah9, bl4) | 0;
          hi = Math.imul(ah9, bh4);
          lo = lo + Math.imul(al8, bl5) | 0;
          mid = mid + Math.imul(al8, bh5) | 0;
          mid = mid + Math.imul(ah8, bl5) | 0;
          hi = hi + Math.imul(ah8, bh5) | 0;
          lo = lo + Math.imul(al7, bl6) | 0;
          mid = mid + Math.imul(al7, bh6) | 0;
          mid = mid + Math.imul(ah7, bl6) | 0;
          hi = hi + Math.imul(ah7, bh6) | 0;
          lo = lo + Math.imul(al6, bl7) | 0;
          mid = mid + Math.imul(al6, bh7) | 0;
          mid = mid + Math.imul(ah6, bl7) | 0;
          hi = hi + Math.imul(ah6, bh7) | 0;
          lo = lo + Math.imul(al5, bl8) | 0;
          mid = mid + Math.imul(al5, bh8) | 0;
          mid = mid + Math.imul(ah5, bl8) | 0;
          hi = hi + Math.imul(ah5, bh8) | 0;
          lo = lo + Math.imul(al4, bl9) | 0;
          mid = mid + Math.imul(al4, bh9) | 0;
          mid = mid + Math.imul(ah4, bl9) | 0;
          hi = hi + Math.imul(ah4, bh9) | 0;
          var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
          w13 &= 67108863;
          lo = Math.imul(al9, bl5);
          mid = Math.imul(al9, bh5);
          mid = mid + Math.imul(ah9, bl5) | 0;
          hi = Math.imul(ah9, bh5);
          lo = lo + Math.imul(al8, bl6) | 0;
          mid = mid + Math.imul(al8, bh6) | 0;
          mid = mid + Math.imul(ah8, bl6) | 0;
          hi = hi + Math.imul(ah8, bh6) | 0;
          lo = lo + Math.imul(al7, bl7) | 0;
          mid = mid + Math.imul(al7, bh7) | 0;
          mid = mid + Math.imul(ah7, bl7) | 0;
          hi = hi + Math.imul(ah7, bh7) | 0;
          lo = lo + Math.imul(al6, bl8) | 0;
          mid = mid + Math.imul(al6, bh8) | 0;
          mid = mid + Math.imul(ah6, bl8) | 0;
          hi = hi + Math.imul(ah6, bh8) | 0;
          lo = lo + Math.imul(al5, bl9) | 0;
          mid = mid + Math.imul(al5, bh9) | 0;
          mid = mid + Math.imul(ah5, bl9) | 0;
          hi = hi + Math.imul(ah5, bh9) | 0;
          var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
          w14 &= 67108863;
          lo = Math.imul(al9, bl6);
          mid = Math.imul(al9, bh6);
          mid = mid + Math.imul(ah9, bl6) | 0;
          hi = Math.imul(ah9, bh6);
          lo = lo + Math.imul(al8, bl7) | 0;
          mid = mid + Math.imul(al8, bh7) | 0;
          mid = mid + Math.imul(ah8, bl7) | 0;
          hi = hi + Math.imul(ah8, bh7) | 0;
          lo = lo + Math.imul(al7, bl8) | 0;
          mid = mid + Math.imul(al7, bh8) | 0;
          mid = mid + Math.imul(ah7, bl8) | 0;
          hi = hi + Math.imul(ah7, bh8) | 0;
          lo = lo + Math.imul(al6, bl9) | 0;
          mid = mid + Math.imul(al6, bh9) | 0;
          mid = mid + Math.imul(ah6, bl9) | 0;
          hi = hi + Math.imul(ah6, bh9) | 0;
          var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
          w15 &= 67108863;
          lo = Math.imul(al9, bl7);
          mid = Math.imul(al9, bh7);
          mid = mid + Math.imul(ah9, bl7) | 0;
          hi = Math.imul(ah9, bh7);
          lo = lo + Math.imul(al8, bl8) | 0;
          mid = mid + Math.imul(al8, bh8) | 0;
          mid = mid + Math.imul(ah8, bl8) | 0;
          hi = hi + Math.imul(ah8, bh8) | 0;
          lo = lo + Math.imul(al7, bl9) | 0;
          mid = mid + Math.imul(al7, bh9) | 0;
          mid = mid + Math.imul(ah7, bl9) | 0;
          hi = hi + Math.imul(ah7, bh9) | 0;
          var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
          w16 &= 67108863;
          lo = Math.imul(al9, bl8);
          mid = Math.imul(al9, bh8);
          mid = mid + Math.imul(ah9, bl8) | 0;
          hi = Math.imul(ah9, bh8);
          lo = lo + Math.imul(al8, bl9) | 0;
          mid = mid + Math.imul(al8, bh9) | 0;
          mid = mid + Math.imul(ah8, bl9) | 0;
          hi = hi + Math.imul(ah8, bh9) | 0;
          var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
          w17 &= 67108863;
          lo = Math.imul(al9, bl9);
          mid = Math.imul(al9, bh9);
          mid = mid + Math.imul(ah9, bl9) | 0;
          hi = Math.imul(ah9, bh9);
          var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
          w18 &= 67108863;
          o[0] = w0;
          o[1] = w1;
          o[2] = w2;
          o[3] = w3;
          o[4] = w4;
          o[5] = w5;
          o[6] = w6;
          o[7] = w7;
          o[8] = w8;
          o[9] = w9;
          o[10] = w10;
          o[11] = w11;
          o[12] = w12;
          o[13] = w13;
          o[14] = w14;
          o[15] = w15;
          o[16] = w16;
          o[17] = w17;
          o[18] = w18;
          if (c !== 0) {
            o[19] = c;
            out.length++;
          }
          return out;
        };
        if (!Math.imul) {
          comb10MulTo = smallMulTo;
        }
        function bigMulTo(self2, num2, out) {
          out.negative = num2.negative ^ self2.negative;
          out.length = self2.length + num2.length;
          var carry = 0;
          var hncarry = 0;
          for (var k = 0; k < out.length - 1; k++) {
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num2.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j;
              var a = self2.words[i] | 0;
              var b = num2.words[j] | 0;
              var r = a * b;
              var lo = r & 67108863;
              ncarry = ncarry + (r / 67108864 | 0) | 0;
              lo = lo + rword | 0;
              rword = lo & 67108863;
              ncarry = ncarry + (lo >>> 26) | 0;
              hncarry += ncarry >>> 26;
              ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
          }
          if (carry !== 0) {
            out.words[k] = carry;
          } else {
            out.length--;
          }
          return out.strip();
        }
        function jumboMulTo(self2, num2, out) {
          var fftm = new FFTM();
          return fftm.mulp(self2, num2, out);
        }
        BN.prototype.mulTo = function mulTo(num2, out) {
          var res;
          var len = this.length + num2.length;
          if (this.length === 10 && num2.length === 10) {
            res = comb10MulTo(this, num2, out);
          } else if (len < 63) {
            res = smallMulTo(this, num2, out);
          } else if (len < 1024) {
            res = bigMulTo(this, num2, out);
          } else {
            res = jumboMulTo(this, num2, out);
          }
          return res;
        };
        function FFTM(x, y) {
          this.x = x;
          this.y = y;
        }
        FFTM.prototype.makeRBT = function makeRBT(N) {
          var t = new Array(N);
          var l = BN.prototype._countBits(N) - 1;
          for (var i = 0; i < N; i++) {
            t[i] = this.revBin(i, l, N);
          }
          return t;
        };
        FFTM.prototype.revBin = function revBin(x, l, N) {
          if (x === 0 || x === N - 1) return x;
          var rb = 0;
          for (var i = 0; i < l; i++) {
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
          }
          return rb;
        };
        FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
          for (var i = 0; i < N; i++) {
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
          }
        };
        FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
          this.permute(rbt, rws, iws, rtws, itws, N);
          for (var s = 1; s < N; s <<= 1) {
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for (var p = 0; p < N; p += l) {
              var rtwdf_ = rtwdf;
              var itwdf_ = itwdf;
              for (var j = 0; j < s; j++) {
                var re = rtws[p + j];
                var ie = itws[p + j];
                var ro = rtws[p + j + s];
                var io = itws[p + j + s];
                var rx = rtwdf_ * ro - itwdf_ * io;
                io = rtwdf_ * io + itwdf_ * ro;
                ro = rx;
                rtws[p + j] = re + ro;
                itws[p + j] = ie + io;
                rtws[p + j + s] = re - ro;
                itws[p + j + s] = ie - io;
                if (j !== l) {
                  rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                  itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                  rtwdf_ = rx;
                }
              }
            }
          }
        };
        FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
          var N = Math.max(m, n) | 1;
          var odd = N & 1;
          var i = 0;
          for (N = N / 2 | 0; N; N = N >>> 1) {
            i++;
          }
          return 1 << i + 1 + odd;
        };
        FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
          if (N <= 1) return;
          for (var i = 0; i < N / 2; i++) {
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
          }
        };
        FFTM.prototype.normalize13b = function normalize13b(ws, N) {
          var carry = 0;
          for (var i = 0; i < N / 2; i++) {
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) {
              carry = 0;
            } else {
              carry = w / 67108864 | 0;
            }
          }
          return ws;
        };
        FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
          var carry = 0;
          for (var i = 0; i < len; i++) {
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
          }
          for (i = 2 * len; i < N; ++i) {
            rws[i] = 0;
          }
          assert4(carry === 0);
          assert4((carry & ~8191) === 0);
        };
        FFTM.prototype.stub = function stub(N) {
          var ph = new Array(N);
          for (var i = 0; i < N; i++) {
            ph[i] = 0;
          }
          return ph;
        };
        FFTM.prototype.mulp = function mulp(x, y, out) {
          var N = 2 * this.guessLen13b(x.length, y.length);
          var rbt = this.makeRBT(N);
          var _ = this.stub(N);
          var rws = new Array(N);
          var rwst = new Array(N);
          var iwst = new Array(N);
          var nrws = new Array(N);
          var nrwst = new Array(N);
          var niwst = new Array(N);
          var rmws = out.words;
          rmws.length = N;
          this.convert13b(x.words, x.length, rws, N);
          this.convert13b(y.words, y.length, nrws, N);
          this.transform(rws, _, rwst, iwst, N, rbt);
          this.transform(nrws, _, nrwst, niwst, N, rbt);
          for (var i = 0; i < N; i++) {
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
          }
          this.conjugate(rwst, iwst, N);
          this.transform(rwst, iwst, rmws, _, N, rbt);
          this.conjugate(rmws, _, N);
          this.normalize13b(rmws, N);
          out.negative = x.negative ^ y.negative;
          out.length = x.length + y.length;
          return out.strip();
        };
        BN.prototype.mul = function mul(num2) {
          var out = new BN(null);
          out.words = new Array(this.length + num2.length);
          return this.mulTo(num2, out);
        };
        BN.prototype.mulf = function mulf(num2) {
          var out = new BN(null);
          out.words = new Array(this.length + num2.length);
          return jumboMulTo(this, num2, out);
        };
        BN.prototype.imul = function imul(num2) {
          return this.clone().mulTo(num2, this);
        };
        BN.prototype.imuln = function imuln(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = (this.words[i] | 0) * num2;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return this;
        };
        BN.prototype.muln = function muln(num2) {
          return this.clone().imuln(num2);
        };
        BN.prototype.sqr = function sqr() {
          return this.mul(this);
        };
        BN.prototype.isqr = function isqr() {
          return this.imul(this.clone());
        };
        BN.prototype.pow = function pow3(num2) {
          var w = toBitArray(num2);
          if (w.length === 0) return new BN(1);
          var res = this;
          for (var i = 0; i < w.length; i++, res = res.sqr()) {
            if (w[i] !== 0) break;
          }
          if (++i < w.length) {
            for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
              if (w[i] === 0) continue;
              res = res.mul(q);
            }
          }
          return res;
        };
        BN.prototype.iushln = function iushln(bits) {
          assert4(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          var carryMask = 67108863 >>> 26 - r << 26 - r;
          var i;
          if (r !== 0) {
            var carry = 0;
            for (i = 0; i < this.length; i++) {
              var newCarry = this.words[i] & carryMask;
              var c = (this.words[i] | 0) - newCarry << r;
              this.words[i] = c | carry;
              carry = newCarry >>> 26 - r;
            }
            if (carry) {
              this.words[i] = carry;
              this.length++;
            }
          }
          if (s !== 0) {
            for (i = this.length - 1; i >= 0; i--) {
              this.words[i + s] = this.words[i];
            }
            for (i = 0; i < s; i++) {
              this.words[i] = 0;
            }
            this.length += s;
          }
          return this.strip();
        };
        BN.prototype.ishln = function ishln(bits) {
          assert4(this.negative === 0);
          return this.iushln(bits);
        };
        BN.prototype.iushrn = function iushrn(bits, hint, extended) {
          assert4(typeof bits === "number" && bits >= 0);
          var h;
          if (hint) {
            h = (hint - hint % 26) / 26;
          } else {
            h = 0;
          }
          var r = bits % 26;
          var s = Math.min((bits - r) / 26, this.length);
          var mask = 67108863 ^ 67108863 >>> r << r;
          var maskedWords = extended;
          h -= s;
          h = Math.max(0, h);
          if (maskedWords) {
            for (var i = 0; i < s; i++) {
              maskedWords.words[i] = this.words[i];
            }
            maskedWords.length = s;
          }
          if (s === 0) {
          } else if (this.length > s) {
            this.length -= s;
            for (i = 0; i < this.length; i++) {
              this.words[i] = this.words[i + s];
            }
          } else {
            this.words[0] = 0;
            this.length = 1;
          }
          var carry = 0;
          for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
          }
          if (maskedWords && carry !== 0) {
            maskedWords.words[maskedWords.length++] = carry;
          }
          if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
          }
          return this.strip();
        };
        BN.prototype.ishrn = function ishrn(bits, hint, extended) {
          assert4(this.negative === 0);
          return this.iushrn(bits, hint, extended);
        };
        BN.prototype.shln = function shln(bits) {
          return this.clone().ishln(bits);
        };
        BN.prototype.ushln = function ushln(bits) {
          return this.clone().iushln(bits);
        };
        BN.prototype.shrn = function shrn(bits) {
          return this.clone().ishrn(bits);
        };
        BN.prototype.ushrn = function ushrn(bits) {
          return this.clone().iushrn(bits);
        };
        BN.prototype.testn = function testn(bit) {
          assert4(typeof bit === "number" && bit >= 0);
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s) return false;
          var w = this.words[s];
          return !!(w & q);
        };
        BN.prototype.imaskn = function imaskn(bits) {
          assert4(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          assert4(this.negative === 0, "imaskn works only with positive numbers");
          if (this.length <= s) {
            return this;
          }
          if (r !== 0) {
            s++;
          }
          this.length = Math.min(s, this.length);
          if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
          }
          return this.strip();
        };
        BN.prototype.maskn = function maskn(bits) {
          return this.clone().imaskn(bits);
        };
        BN.prototype.iaddn = function iaddn(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          if (num2 < 0) return this.isubn(-num2);
          if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) < num2) {
              this.words[0] = num2 - (this.words[0] | 0);
              this.negative = 0;
              return this;
            }
            this.negative = 0;
            this.isubn(num2);
            this.negative = 1;
            return this;
          }
          return this._iaddn(num2);
        };
        BN.prototype._iaddn = function _iaddn(num2) {
          this.words[0] += num2;
          for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
            this.words[i] -= 67108864;
            if (i === this.length - 1) {
              this.words[i + 1] = 1;
            } else {
              this.words[i + 1]++;
            }
          }
          this.length = Math.max(this.length, i + 1);
          return this;
        };
        BN.prototype.isubn = function isubn(num2) {
          assert4(typeof num2 === "number");
          assert4(num2 < 67108864);
          if (num2 < 0) return this.iaddn(-num2);
          if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num2);
            this.negative = 1;
            return this;
          }
          this.words[0] -= num2;
          if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
          } else {
            for (var i = 0; i < this.length && this.words[i] < 0; i++) {
              this.words[i] += 67108864;
              this.words[i + 1] -= 1;
            }
          }
          return this.strip();
        };
        BN.prototype.addn = function addn(num2) {
          return this.clone().iaddn(num2);
        };
        BN.prototype.subn = function subn(num2) {
          return this.clone().isubn(num2);
        };
        BN.prototype.iabs = function iabs() {
          this.negative = 0;
          return this;
        };
        BN.prototype.abs = function abs() {
          return this.clone().iabs();
        };
        BN.prototype._ishlnsubmul = function _ishlnsubmul(num2, mul, shift) {
          var len = num2.length + shift;
          var i;
          this._expand(len);
          var w;
          var carry = 0;
          for (i = 0; i < num2.length; i++) {
            w = (this.words[i + shift] | 0) + carry;
            var right = (num2.words[i] | 0) * mul;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
          }
          for (; i < this.length - shift; i++) {
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
          }
          if (carry === 0) return this.strip();
          assert4(carry === -1);
          carry = 0;
          for (i = 0; i < this.length; i++) {
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
          }
          this.negative = 1;
          return this.strip();
        };
        BN.prototype._wordDiv = function _wordDiv(num2, mode) {
          var shift = this.length - num2.length;
          var a = this.clone();
          var b = num2;
          var bhi = b.words[b.length - 1] | 0;
          var bhiBits = this._countBits(bhi);
          shift = 26 - bhiBits;
          if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
          }
          var m = a.length - b.length;
          var q;
          if (mode !== "mod") {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for (var i = 0; i < q.length; i++) {
              q.words[i] = 0;
            }
          }
          var diff = a.clone()._ishlnsubmul(b, 1, m);
          if (diff.negative === 0) {
            a = diff;
            if (q) {
              q.words[m] = 1;
            }
          }
          for (var j = m - 1; j >= 0; j--) {
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while (a.negative !== 0) {
              qj--;
              a.negative = 0;
              a._ishlnsubmul(b, 1, j);
              if (!a.isZero()) {
                a.negative ^= 1;
              }
            }
            if (q) {
              q.words[j] = qj;
            }
          }
          if (q) {
            q.strip();
          }
          a.strip();
          if (mode !== "div" && shift !== 0) {
            a.iushrn(shift);
          }
          return {
            div: q || null,
            mod: a
          };
        };
        BN.prototype.divmod = function divmod(num2, mode, positive) {
          assert4(!num2.isZero());
          if (this.isZero()) {
            return {
              div: new BN(0),
              mod: new BN(0)
            };
          }
          var div, mod2, res;
          if (this.negative !== 0 && num2.negative === 0) {
            res = this.neg().divmod(num2, mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            if (mode !== "div") {
              mod2 = res.mod.neg();
              if (positive && mod2.negative !== 0) {
                mod2.iadd(num2);
              }
            }
            return {
              div,
              mod: mod2
            };
          }
          if (this.negative === 0 && num2.negative !== 0) {
            res = this.divmod(num2.neg(), mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            return {
              div,
              mod: res.mod
            };
          }
          if ((this.negative & num2.negative) !== 0) {
            res = this.neg().divmod(num2.neg(), mode);
            if (mode !== "div") {
              mod2 = res.mod.neg();
              if (positive && mod2.negative !== 0) {
                mod2.isub(num2);
              }
            }
            return {
              div: res.div,
              mod: mod2
            };
          }
          if (num2.length > this.length || this.cmp(num2) < 0) {
            return {
              div: new BN(0),
              mod: this
            };
          }
          if (num2.length === 1) {
            if (mode === "div") {
              return {
                div: this.divn(num2.words[0]),
                mod: null
              };
            }
            if (mode === "mod") {
              return {
                div: null,
                mod: new BN(this.modn(num2.words[0]))
              };
            }
            return {
              div: this.divn(num2.words[0]),
              mod: new BN(this.modn(num2.words[0]))
            };
          }
          return this._wordDiv(num2, mode);
        };
        BN.prototype.div = function div(num2) {
          return this.divmod(num2, "div", false).div;
        };
        BN.prototype.mod = function mod2(num2) {
          return this.divmod(num2, "mod", false).mod;
        };
        BN.prototype.umod = function umod(num2) {
          return this.divmod(num2, "mod", true).mod;
        };
        BN.prototype.divRound = function divRound(num2) {
          var dm = this.divmod(num2);
          if (dm.mod.isZero()) return dm.div;
          var mod2 = dm.div.negative !== 0 ? dm.mod.isub(num2) : dm.mod;
          var half = num2.ushrn(1);
          var r2 = num2.andln(1);
          var cmp = mod2.cmp(half);
          if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
          return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
        };
        BN.prototype.modn = function modn(num2) {
          assert4(num2 <= 67108863);
          var p = (1 << 26) % num2;
          var acc = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            acc = (p * acc + (this.words[i] | 0)) % num2;
          }
          return acc;
        };
        BN.prototype.idivn = function idivn(num2) {
          assert4(num2 <= 67108863);
          var carry = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num2 | 0;
            carry = w % num2;
          }
          return this.strip();
        };
        BN.prototype.divn = function divn(num2) {
          return this.clone().idivn(num2);
        };
        BN.prototype.egcd = function egcd(p) {
          assert4(p.negative === 0);
          assert4(!p.isZero());
          var x = this;
          var y = p.clone();
          if (x.negative !== 0) {
            x = x.umod(p);
          } else {
            x = x.clone();
          }
          var A = new BN(1);
          var B = new BN(0);
          var C = new BN(0);
          var D = new BN(1);
          var g = 0;
          while (x.isEven() && y.isEven()) {
            x.iushrn(1);
            y.iushrn(1);
            ++g;
          }
          var yp = y.clone();
          var xp = x.clone();
          while (!x.isZero()) {
            for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
            if (i > 0) {
              x.iushrn(i);
              while (i-- > 0) {
                if (A.isOdd() || B.isOdd()) {
                  A.iadd(yp);
                  B.isub(xp);
                }
                A.iushrn(1);
                B.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
            if (j > 0) {
              y.iushrn(j);
              while (j-- > 0) {
                if (C.isOdd() || D.isOdd()) {
                  C.iadd(yp);
                  D.isub(xp);
                }
                C.iushrn(1);
                D.iushrn(1);
              }
            }
            if (x.cmp(y) >= 0) {
              x.isub(y);
              A.isub(C);
              B.isub(D);
            } else {
              y.isub(x);
              C.isub(A);
              D.isub(B);
            }
          }
          return {
            a: C,
            b: D,
            gcd: y.iushln(g)
          };
        };
        BN.prototype._invmp = function _invmp(p) {
          assert4(p.negative === 0);
          assert4(!p.isZero());
          var a = this;
          var b = p.clone();
          if (a.negative !== 0) {
            a = a.umod(p);
          } else {
            a = a.clone();
          }
          var x1 = new BN(1);
          var x2 = new BN(0);
          var delta = b.clone();
          while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
            for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) ;
            if (i > 0) {
              a.iushrn(i);
              while (i-- > 0) {
                if (x1.isOdd()) {
                  x1.iadd(delta);
                }
                x1.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) ;
            if (j > 0) {
              b.iushrn(j);
              while (j-- > 0) {
                if (x2.isOdd()) {
                  x2.iadd(delta);
                }
                x2.iushrn(1);
              }
            }
            if (a.cmp(b) >= 0) {
              a.isub(b);
              x1.isub(x2);
            } else {
              b.isub(a);
              x2.isub(x1);
            }
          }
          var res;
          if (a.cmpn(1) === 0) {
            res = x1;
          } else {
            res = x2;
          }
          if (res.cmpn(0) < 0) {
            res.iadd(p);
          }
          return res;
        };
        BN.prototype.gcd = function gcd2(num2) {
          if (this.isZero()) return num2.abs();
          if (num2.isZero()) return this.abs();
          var a = this.clone();
          var b = num2.clone();
          a.negative = 0;
          b.negative = 0;
          for (var shift = 0; a.isEven() && b.isEven(); shift++) {
            a.iushrn(1);
            b.iushrn(1);
          }
          do {
            while (a.isEven()) {
              a.iushrn(1);
            }
            while (b.isEven()) {
              b.iushrn(1);
            }
            var r = a.cmp(b);
            if (r < 0) {
              var t = a;
              a = b;
              b = t;
            } else if (r === 0 || b.cmpn(1) === 0) {
              break;
            }
            a.isub(b);
          } while (true);
          return b.iushln(shift);
        };
        BN.prototype.invm = function invm(num2) {
          return this.egcd(num2).a.umod(num2);
        };
        BN.prototype.isEven = function isEven() {
          return (this.words[0] & 1) === 0;
        };
        BN.prototype.isOdd = function isOdd() {
          return (this.words[0] & 1) === 1;
        };
        BN.prototype.andln = function andln(num2) {
          return this.words[0] & num2;
        };
        BN.prototype.bincn = function bincn(bit) {
          assert4(typeof bit === "number");
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
          }
          var carry = q;
          for (var i = s; carry !== 0 && i < this.length; i++) {
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return this;
        };
        BN.prototype.isZero = function isZero() {
          return this.length === 1 && this.words[0] === 0;
        };
        BN.prototype.cmpn = function cmpn(num2) {
          var negative = num2 < 0;
          if (this.negative !== 0 && !negative) return -1;
          if (this.negative === 0 && negative) return 1;
          this.strip();
          var res;
          if (this.length > 1) {
            res = 1;
          } else {
            if (negative) {
              num2 = -num2;
            }
            assert4(num2 <= 67108863, "Number is too big");
            var w = this.words[0] | 0;
            res = w === num2 ? 0 : w < num2 ? -1 : 1;
          }
          if (this.negative !== 0) return -res | 0;
          return res;
        };
        BN.prototype.cmp = function cmp(num2) {
          if (this.negative !== 0 && num2.negative === 0) return -1;
          if (this.negative === 0 && num2.negative !== 0) return 1;
          var res = this.ucmp(num2);
          if (this.negative !== 0) return -res | 0;
          return res;
        };
        BN.prototype.ucmp = function ucmp(num2) {
          if (this.length > num2.length) return 1;
          if (this.length < num2.length) return -1;
          var res = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var a = this.words[i] | 0;
            var b = num2.words[i] | 0;
            if (a === b) continue;
            if (a < b) {
              res = -1;
            } else if (a > b) {
              res = 1;
            }
            break;
          }
          return res;
        };
        BN.prototype.gtn = function gtn(num2) {
          return this.cmpn(num2) === 1;
        };
        BN.prototype.gt = function gt(num2) {
          return this.cmp(num2) === 1;
        };
        BN.prototype.gten = function gten(num2) {
          return this.cmpn(num2) >= 0;
        };
        BN.prototype.gte = function gte(num2) {
          return this.cmp(num2) >= 0;
        };
        BN.prototype.ltn = function ltn(num2) {
          return this.cmpn(num2) === -1;
        };
        BN.prototype.lt = function lt(num2) {
          return this.cmp(num2) === -1;
        };
        BN.prototype.lten = function lten(num2) {
          return this.cmpn(num2) <= 0;
        };
        BN.prototype.lte = function lte(num2) {
          return this.cmp(num2) <= 0;
        };
        BN.prototype.eqn = function eqn(num2) {
          return this.cmpn(num2) === 0;
        };
        BN.prototype.eq = function eq(num2) {
          return this.cmp(num2) === 0;
        };
        BN.red = function red(num2) {
          return new Red(num2);
        };
        BN.prototype.toRed = function toRed(ctx) {
          assert4(!this.red, "Already a number in reduction context");
          assert4(this.negative === 0, "red works only with positives");
          return ctx.convertTo(this)._forceRed(ctx);
        };
        BN.prototype.fromRed = function fromRed() {
          assert4(this.red, "fromRed works only with numbers in reduction context");
          return this.red.convertFrom(this);
        };
        BN.prototype._forceRed = function _forceRed(ctx) {
          this.red = ctx;
          return this;
        };
        BN.prototype.forceRed = function forceRed(ctx) {
          assert4(!this.red, "Already a number in reduction context");
          return this._forceRed(ctx);
        };
        BN.prototype.redAdd = function redAdd(num2) {
          assert4(this.red, "redAdd works only with red numbers");
          return this.red.add(this, num2);
        };
        BN.prototype.redIAdd = function redIAdd(num2) {
          assert4(this.red, "redIAdd works only with red numbers");
          return this.red.iadd(this, num2);
        };
        BN.prototype.redSub = function redSub(num2) {
          assert4(this.red, "redSub works only with red numbers");
          return this.red.sub(this, num2);
        };
        BN.prototype.redISub = function redISub(num2) {
          assert4(this.red, "redISub works only with red numbers");
          return this.red.isub(this, num2);
        };
        BN.prototype.redShl = function redShl(num2) {
          assert4(this.red, "redShl works only with red numbers");
          return this.red.shl(this, num2);
        };
        BN.prototype.redMul = function redMul(num2) {
          assert4(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num2);
          return this.red.mul(this, num2);
        };
        BN.prototype.redIMul = function redIMul(num2) {
          assert4(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num2);
          return this.red.imul(this, num2);
        };
        BN.prototype.redSqr = function redSqr() {
          assert4(this.red, "redSqr works only with red numbers");
          this.red._verify1(this);
          return this.red.sqr(this);
        };
        BN.prototype.redISqr = function redISqr() {
          assert4(this.red, "redISqr works only with red numbers");
          this.red._verify1(this);
          return this.red.isqr(this);
        };
        BN.prototype.redSqrt = function redSqrt() {
          assert4(this.red, "redSqrt works only with red numbers");
          this.red._verify1(this);
          return this.red.sqrt(this);
        };
        BN.prototype.redInvm = function redInvm() {
          assert4(this.red, "redInvm works only with red numbers");
          this.red._verify1(this);
          return this.red.invm(this);
        };
        BN.prototype.redNeg = function redNeg() {
          assert4(this.red, "redNeg works only with red numbers");
          this.red._verify1(this);
          return this.red.neg(this);
        };
        BN.prototype.redPow = function redPow(num2) {
          assert4(this.red && !num2.red, "redPow(normalNum)");
          this.red._verify1(this);
          return this.red.pow(this, num2);
        };
        var primes = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function MPrime(name5, p) {
          this.name = name5;
          this.p = new BN(p, 16);
          this.n = this.p.bitLength();
          this.k = new BN(1).iushln(this.n).isub(this.p);
          this.tmp = this._tmp();
        }
        MPrime.prototype._tmp = function _tmp() {
          var tmp = new BN(null);
          tmp.words = new Array(Math.ceil(this.n / 13));
          return tmp;
        };
        MPrime.prototype.ireduce = function ireduce(num2) {
          var r = num2;
          var rlen;
          do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
          } while (rlen > this.n);
          var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
          if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
          } else if (cmp > 0) {
            r.isub(this.p);
          } else {
            if (r.strip !== void 0) {
              r.strip();
            } else {
              r._strip();
            }
          }
          return r;
        };
        MPrime.prototype.split = function split2(input, out) {
          input.iushrn(this.n, 0, out);
        };
        MPrime.prototype.imulK = function imulK(num2) {
          return num2.imul(this.k);
        };
        function K256() {
          MPrime.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        inherits2(K256, MPrime);
        K256.prototype.split = function split2(input, output3) {
          var mask = 4194303;
          var outLen = Math.min(input.length, 9);
          for (var i = 0; i < outLen; i++) {
            output3.words[i] = input.words[i];
          }
          output3.length = outLen;
          if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
          }
          var prev = input.words[9];
          output3.words[output3.length++] = prev & mask;
          for (i = 10; i < input.length; i++) {
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
          }
          prev >>>= 22;
          input.words[i - 10] = prev;
          if (prev === 0 && input.length > 10) {
            input.length -= 10;
          } else {
            input.length -= 9;
          }
        };
        K256.prototype.imulK = function imulK(num2) {
          num2.words[num2.length] = 0;
          num2.words[num2.length + 1] = 0;
          num2.length += 2;
          var lo = 0;
          for (var i = 0; i < num2.length; i++) {
            var w = num2.words[i] | 0;
            lo += w * 977;
            num2.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
          }
          if (num2.words[num2.length - 1] === 0) {
            num2.length--;
            if (num2.words[num2.length - 1] === 0) {
              num2.length--;
            }
          }
          return num2;
        };
        function P224() {
          MPrime.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        inherits2(P224, MPrime);
        function P192() {
          MPrime.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        inherits2(P192, MPrime);
        function P25519() {
          MPrime.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        inherits2(P25519, MPrime);
        P25519.prototype.imulK = function imulK(num2) {
          var carry = 0;
          for (var i = 0; i < num2.length; i++) {
            var hi = (num2.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num2.words[i] = lo;
            carry = hi;
          }
          if (carry !== 0) {
            num2.words[num2.length++] = carry;
          }
          return num2;
        };
        BN._prime = function prime(name5) {
          if (primes[name5]) return primes[name5];
          var prime2;
          if (name5 === "k256") {
            prime2 = new K256();
          } else if (name5 === "p224") {
            prime2 = new P224();
          } else if (name5 === "p192") {
            prime2 = new P192();
          } else if (name5 === "p25519") {
            prime2 = new P25519();
          } else {
            throw new Error("Unknown prime " + name5);
          }
          primes[name5] = prime2;
          return prime2;
        };
        function Red(m) {
          if (typeof m === "string") {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
          } else {
            assert4(m.gtn(1), "modulus must be greater than 1");
            this.m = m;
            this.prime = null;
          }
        }
        Red.prototype._verify1 = function _verify1(a) {
          assert4(a.negative === 0, "red works only with positives");
          assert4(a.red, "red works only with red numbers");
        };
        Red.prototype._verify2 = function _verify2(a, b) {
          assert4((a.negative | b.negative) === 0, "red works only with positives");
          assert4(
            a.red && a.red === b.red,
            "red works only with red numbers"
          );
        };
        Red.prototype.imod = function imod(a) {
          if (this.prime) return this.prime.ireduce(a)._forceRed(this);
          return a.umod(this.m)._forceRed(this);
        };
        Red.prototype.neg = function neg(a) {
          if (a.isZero()) {
            return a.clone();
          }
          return this.m.sub(a)._forceRed(this);
        };
        Red.prototype.add = function add2(a, b) {
          this._verify2(a, b);
          var res = a.add(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.iadd = function iadd(a, b) {
          this._verify2(a, b);
          var res = a.iadd(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res;
        };
        Red.prototype.sub = function sub(a, b) {
          this._verify2(a, b);
          var res = a.sub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.isub = function isub(a, b) {
          this._verify2(a, b);
          var res = a.isub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res;
        };
        Red.prototype.shl = function shl(a, num2) {
          this._verify1(a);
          return this.imod(a.ushln(num2));
        };
        Red.prototype.imul = function imul(a, b) {
          this._verify2(a, b);
          return this.imod(a.imul(b));
        };
        Red.prototype.mul = function mul(a, b) {
          this._verify2(a, b);
          return this.imod(a.mul(b));
        };
        Red.prototype.isqr = function isqr(a) {
          return this.imul(a, a.clone());
        };
        Red.prototype.sqr = function sqr(a) {
          return this.mul(a, a);
        };
        Red.prototype.sqrt = function sqrt(a) {
          if (a.isZero()) return a.clone();
          var mod3 = this.m.andln(3);
          assert4(mod3 % 2 === 1);
          if (mod3 === 3) {
            var pow3 = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow3);
          }
          var q = this.m.subn(1);
          var s = 0;
          while (!q.isZero() && q.andln(1) === 0) {
            s++;
            q.iushrn(1);
          }
          assert4(!q.isZero());
          var one = new BN(1).toRed(this);
          var nOne = one.redNeg();
          var lpow = this.m.subn(1).iushrn(1);
          var z = this.m.bitLength();
          z = new BN(2 * z * z).toRed(this);
          while (this.pow(z, lpow).cmp(nOne) !== 0) {
            z.redIAdd(nOne);
          }
          var c = this.pow(z, q);
          var r = this.pow(a, q.addn(1).iushrn(1));
          var t = this.pow(a, q);
          var m = s;
          while (t.cmp(one) !== 0) {
            var tmp = t;
            for (var i = 0; tmp.cmp(one) !== 0; i++) {
              tmp = tmp.redSqr();
            }
            assert4(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
          }
          return r;
        };
        Red.prototype.invm = function invm(a) {
          var inv = a._invmp(this.m);
          if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
          } else {
            return this.imod(inv);
          }
        };
        Red.prototype.pow = function pow3(a, num2) {
          if (num2.isZero()) return new BN(1).toRed(this);
          if (num2.cmpn(1) === 0) return a.clone();
          var windowSize = 4;
          var wnd = new Array(1 << windowSize);
          wnd[0] = new BN(1).toRed(this);
          wnd[1] = a;
          for (var i = 2; i < wnd.length; i++) {
            wnd[i] = this.mul(wnd[i - 1], a);
          }
          var res = wnd[0];
          var current = 0;
          var currentLen = 0;
          var start = num2.bitLength() % 26;
          if (start === 0) {
            start = 26;
          }
          for (i = num2.length - 1; i >= 0; i--) {
            var word = num2.words[i];
            for (var j = start - 1; j >= 0; j--) {
              var bit = word >> j & 1;
              if (res !== wnd[0]) {
                res = this.sqr(res);
              }
              if (bit === 0 && current === 0) {
                currentLen = 0;
                continue;
              }
              current <<= 1;
              current |= bit;
              currentLen++;
              if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
              res = this.mul(res, wnd[current]);
              currentLen = 0;
              current = 0;
            }
            start = 26;
          }
          return res;
        };
        Red.prototype.convertTo = function convertTo(num2) {
          var r = num2.umod(this.m);
          return r === num2 ? r.clone() : r;
        };
        Red.prototype.convertFrom = function convertFrom(num2) {
          var res = num2.clone();
          res.red = null;
          return res;
        };
        BN.mont = function mont(num2) {
          return new Mont(num2);
        };
        function Mont(m) {
          Red.call(this, m);
          this.shift = this.m.bitLength();
          if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
          }
          this.r = new BN(1).iushln(this.shift);
          this.r2 = this.imod(this.r.sqr());
          this.rinv = this.r._invmp(this.m);
          this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
          this.minv = this.minv.umod(this.r);
          this.minv = this.r.sub(this.minv);
        }
        inherits2(Mont, Red);
        Mont.prototype.convertTo = function convertTo(num2) {
          return this.imod(num2.ushln(this.shift));
        };
        Mont.prototype.convertFrom = function convertFrom(num2) {
          var r = this.imod(num2.mul(this.rinv));
          r.red = null;
          return r;
        };
        Mont.prototype.imul = function imul(a, b) {
          if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
          }
          var t = a.imul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.mul = function mul(a, b) {
          if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
          var t = a.mul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.invm = function invm(a) {
          var res = this.imod(a._invmp(this.m).mul(this.r2));
          return res._forceRed(this);
        };
      })(typeof module === "undefined" || module, exports2);
    }
  });

  // node_modules/safer-buffer/safer.js
  var require_safer = __commonJS({
    "node_modules/safer-buffer/safer.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var buffer = (init_buffer(), __toCommonJS(buffer_exports));
      var Buffer3 = buffer.Buffer;
      var safer = {};
      var key;
      for (key in buffer) {
        if (!buffer.hasOwnProperty(key)) continue;
        if (key === "SlowBuffer" || key === "Buffer") continue;
        safer[key] = buffer[key];
      }
      var Safer = safer.Buffer = {};
      for (key in Buffer3) {
        if (!Buffer3.hasOwnProperty(key)) continue;
        if (key === "allocUnsafe" || key === "allocUnsafeSlow") continue;
        Safer[key] = Buffer3[key];
      }
      safer.Buffer.prototype = Buffer3.prototype;
      if (!Safer.from || Safer.from === Uint8Array.from) {
        Safer.from = function(value, encodingOrOffset, length2) {
          if (typeof value === "number") {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
          }
          if (value && typeof value.length === "undefined") {
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
          }
          return Buffer3(value, encodingOrOffset, length2);
        };
      }
      if (!Safer.alloc) {
        Safer.alloc = function(size, fill, encoding) {
          if (typeof size !== "number") {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
          }
          if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
          }
          var buf = Buffer3(size);
          if (!fill || fill.length === 0) {
            buf.fill(0);
          } else if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
          return buf;
        };
      }
      if (!safer.kStringMaxLength) {
        try {
          safer.kStringMaxLength = process_exports.binding("buffer").kStringMaxLength;
        } catch (e) {
        }
      }
      if (!safer.constants) {
        safer.constants = {
          MAX_LENGTH: safer.kMaxLength
        };
        if (safer.kStringMaxLength) {
          safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
        }
      }
      module.exports = safer;
    }
  });

  // node_modules/asn1.js/lib/asn1/base/reporter.js
  var require_reporter = __commonJS({
    "node_modules/asn1.js/lib/asn1/base/reporter.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      function Reporter(options) {
        this._reporterState = {
          obj: null,
          path: [],
          options: options || {},
          errors: []
        };
      }
      exports2.Reporter = Reporter;
      Reporter.prototype.isError = function isError(obj) {
        return obj instanceof ReporterError;
      };
      Reporter.prototype.save = function save() {
        const state = this._reporterState;
        return { obj: state.obj, pathLen: state.path.length };
      };
      Reporter.prototype.restore = function restore(data) {
        const state = this._reporterState;
        state.obj = data.obj;
        state.path = state.path.slice(0, data.pathLen);
      };
      Reporter.prototype.enterKey = function enterKey(key) {
        return this._reporterState.path.push(key);
      };
      Reporter.prototype.exitKey = function exitKey(index) {
        const state = this._reporterState;
        state.path = state.path.slice(0, index - 1);
      };
      Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
        const state = this._reporterState;
        this.exitKey(index);
        if (state.obj !== null)
          state.obj[key] = value;
      };
      Reporter.prototype.path = function path() {
        return this._reporterState.path.join("/");
      };
      Reporter.prototype.enterObject = function enterObject() {
        const state = this._reporterState;
        const prev = state.obj;
        state.obj = {};
        return prev;
      };
      Reporter.prototype.leaveObject = function leaveObject(prev) {
        const state = this._reporterState;
        const now = state.obj;
        state.obj = prev;
        return now;
      };
      Reporter.prototype.error = function error(msg) {
        let err;
        const state = this._reporterState;
        const inherited = msg instanceof ReporterError;
        if (inherited) {
          err = msg;
        } else {
          err = new ReporterError(state.path.map(function(elem) {
            return "[" + JSON.stringify(elem) + "]";
          }).join(""), msg.message || msg, msg.stack);
        }
        if (!state.options.partial)
          throw err;
        if (!inherited)
          state.errors.push(err);
        return err;
      };
      Reporter.prototype.wrapResult = function wrapResult(result) {
        const state = this._reporterState;
        if (!state.options.partial)
          return result;
        return {
          result: this.isError(result) ? null : result,
          errors: state.errors
        };
      };
      function ReporterError(path, msg) {
        this.path = path;
        this.rethrow(msg);
      }
      inherits2(ReporterError, Error);
      ReporterError.prototype.rethrow = function rethrow(msg) {
        this.message = msg + " at: " + (this.path || "(shallow)");
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, ReporterError);
        if (!this.stack) {
          try {
            throw new Error(this.message);
          } catch (e) {
            this.stack = e.stack;
          }
        }
        return this;
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/base/buffer.js
  var require_buffer = __commonJS({
    "node_modules/asn1.js/lib/asn1/base/buffer.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      var Reporter = require_reporter().Reporter;
      var Buffer3 = require_safer().Buffer;
      function DecoderBuffer(base3, options) {
        Reporter.call(this, options);
        if (!Buffer3.isBuffer(base3)) {
          this.error("Input not Buffer");
          return;
        }
        this.base = base3;
        this.offset = 0;
        this.length = base3.length;
      }
      inherits2(DecoderBuffer, Reporter);
      exports2.DecoderBuffer = DecoderBuffer;
      DecoderBuffer.isDecoderBuffer = function isDecoderBuffer(data) {
        if (data instanceof DecoderBuffer) {
          return true;
        }
        const isCompatible = typeof data === "object" && Buffer3.isBuffer(data.base) && data.constructor.name === "DecoderBuffer" && typeof data.offset === "number" && typeof data.length === "number" && typeof data.save === "function" && typeof data.restore === "function" && typeof data.isEmpty === "function" && typeof data.readUInt8 === "function" && typeof data.skip === "function" && typeof data.raw === "function";
        return isCompatible;
      };
      DecoderBuffer.prototype.save = function save() {
        return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
      };
      DecoderBuffer.prototype.restore = function restore(save) {
        const res = new DecoderBuffer(this.base);
        res.offset = save.offset;
        res.length = this.offset;
        this.offset = save.offset;
        Reporter.prototype.restore.call(this, save.reporter);
        return res;
      };
      DecoderBuffer.prototype.isEmpty = function isEmpty() {
        return this.offset === this.length;
      };
      DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
        if (this.offset + 1 <= this.length)
          return this.base.readUInt8(this.offset++, true);
        else
          return this.error(fail || "DecoderBuffer overrun");
      };
      DecoderBuffer.prototype.skip = function skip(bytes4, fail) {
        if (!(this.offset + bytes4 <= this.length))
          return this.error(fail || "DecoderBuffer overrun");
        const res = new DecoderBuffer(this.base);
        res._reporterState = this._reporterState;
        res.offset = this.offset;
        res.length = this.offset + bytes4;
        this.offset += bytes4;
        return res;
      };
      DecoderBuffer.prototype.raw = function raw(save) {
        return this.base.slice(save ? save.offset : this.offset, this.length);
      };
      function EncoderBuffer(value, reporter) {
        if (Array.isArray(value)) {
          this.length = 0;
          this.value = value.map(function(item) {
            if (!EncoderBuffer.isEncoderBuffer(item))
              item = new EncoderBuffer(item, reporter);
            this.length += item.length;
            return item;
          }, this);
        } else if (typeof value === "number") {
          if (!(0 <= value && value <= 255))
            return reporter.error("non-byte EncoderBuffer value");
          this.value = value;
          this.length = 1;
        } else if (typeof value === "string") {
          this.value = value;
          this.length = Buffer3.byteLength(value);
        } else if (Buffer3.isBuffer(value)) {
          this.value = value;
          this.length = value.length;
        } else {
          return reporter.error("Unsupported type: " + typeof value);
        }
      }
      exports2.EncoderBuffer = EncoderBuffer;
      EncoderBuffer.isEncoderBuffer = function isEncoderBuffer(data) {
        if (data instanceof EncoderBuffer) {
          return true;
        }
        const isCompatible = typeof data === "object" && data.constructor.name === "EncoderBuffer" && typeof data.length === "number" && typeof data.join === "function";
        return isCompatible;
      };
      EncoderBuffer.prototype.join = function join2(out, offset) {
        if (!out)
          out = Buffer3.alloc(this.length);
        if (!offset)
          offset = 0;
        if (this.length === 0)
          return out;
        if (Array.isArray(this.value)) {
          this.value.forEach(function(item) {
            item.join(out, offset);
            offset += item.length;
          });
        } else {
          if (typeof this.value === "number")
            out[offset] = this.value;
          else if (typeof this.value === "string")
            out.write(this.value, offset);
          else if (Buffer3.isBuffer(this.value))
            this.value.copy(out, offset);
          offset += this.length;
        }
        return out;
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/base/node.js
  var require_node = __commonJS({
    "node_modules/asn1.js/lib/asn1/base/node.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var Reporter = require_reporter().Reporter;
      var EncoderBuffer = require_buffer().EncoderBuffer;
      var DecoderBuffer = require_buffer().DecoderBuffer;
      var assert4 = require_minimalistic_assert();
      var tags = [
        "seq",
        "seqof",
        "set",
        "setof",
        "objid",
        "bool",
        "gentime",
        "utctime",
        "null_",
        "enum",
        "int",
        "objDesc",
        "bitstr",
        "bmpstr",
        "charstr",
        "genstr",
        "graphstr",
        "ia5str",
        "iso646str",
        "numstr",
        "octstr",
        "printstr",
        "t61str",
        "unistr",
        "utf8str",
        "videostr"
      ];
      var methods = [
        "key",
        "obj",
        "use",
        "optional",
        "explicit",
        "implicit",
        "def",
        "choice",
        "any",
        "contains"
      ].concat(tags);
      var overrided = [
        "_peekTag",
        "_decodeTag",
        "_use",
        "_decodeStr",
        "_decodeObjid",
        "_decodeTime",
        "_decodeNull",
        "_decodeInt",
        "_decodeBool",
        "_decodeList",
        "_encodeComposite",
        "_encodeStr",
        "_encodeObjid",
        "_encodeTime",
        "_encodeNull",
        "_encodeInt",
        "_encodeBool"
      ];
      function Node(enc, parent, name5) {
        const state = {};
        this._baseState = state;
        state.name = name5;
        state.enc = enc;
        state.parent = parent || null;
        state.children = null;
        state.tag = null;
        state.args = null;
        state.reverseArgs = null;
        state.choice = null;
        state.optional = false;
        state.any = false;
        state.obj = false;
        state.use = null;
        state.useDecoder = null;
        state.key = null;
        state["default"] = null;
        state.explicit = null;
        state.implicit = null;
        state.contains = null;
        if (!state.parent) {
          state.children = [];
          this._wrap();
        }
      }
      module.exports = Node;
      var stateProps = [
        "enc",
        "parent",
        "children",
        "tag",
        "args",
        "reverseArgs",
        "choice",
        "optional",
        "any",
        "obj",
        "use",
        "alteredUse",
        "key",
        "default",
        "explicit",
        "implicit",
        "contains"
      ];
      Node.prototype.clone = function clone() {
        const state = this._baseState;
        const cstate = {};
        stateProps.forEach(function(prop) {
          cstate[prop] = state[prop];
        });
        const res = new this.constructor(cstate.parent);
        res._baseState = cstate;
        return res;
      };
      Node.prototype._wrap = function wrap() {
        const state = this._baseState;
        methods.forEach(function(method) {
          this[method] = function _wrappedMethod() {
            const clone = new this.constructor(this);
            state.children.push(clone);
            return clone[method].apply(clone, arguments);
          };
        }, this);
      };
      Node.prototype._init = function init(body) {
        const state = this._baseState;
        assert4(state.parent === null);
        body.call(this);
        state.children = state.children.filter(function(child) {
          return child._baseState.parent === this;
        }, this);
        assert4.equal(state.children.length, 1, "Root node can have only one child");
      };
      Node.prototype._useArgs = function useArgs(args) {
        const state = this._baseState;
        const children = args.filter(function(arg) {
          return arg instanceof this.constructor;
        }, this);
        args = args.filter(function(arg) {
          return !(arg instanceof this.constructor);
        }, this);
        if (children.length !== 0) {
          assert4(state.children === null);
          state.children = children;
          children.forEach(function(child) {
            child._baseState.parent = this;
          }, this);
        }
        if (args.length !== 0) {
          assert4(state.args === null);
          state.args = args;
          state.reverseArgs = args.map(function(arg) {
            if (typeof arg !== "object" || arg.constructor !== Object)
              return arg;
            const res = {};
            Object.keys(arg).forEach(function(key) {
              if (key == (key | 0))
                key |= 0;
              const value = arg[key];
              res[value] = key;
            });
            return res;
          });
        }
      };
      overrided.forEach(function(method) {
        Node.prototype[method] = function _overrided() {
          const state = this._baseState;
          throw new Error(method + " not implemented for encoding: " + state.enc);
        };
      });
      tags.forEach(function(tag) {
        Node.prototype[tag] = function _tagMethod() {
          const state = this._baseState;
          const args = Array.prototype.slice.call(arguments);
          assert4(state.tag === null);
          state.tag = tag;
          this._useArgs(args);
          return this;
        };
      });
      Node.prototype.use = function use(item) {
        assert4(item);
        const state = this._baseState;
        assert4(state.use === null);
        state.use = item;
        return this;
      };
      Node.prototype.optional = function optional() {
        const state = this._baseState;
        state.optional = true;
        return this;
      };
      Node.prototype.def = function def(val) {
        const state = this._baseState;
        assert4(state["default"] === null);
        state["default"] = val;
        state.optional = true;
        return this;
      };
      Node.prototype.explicit = function explicit(num2) {
        const state = this._baseState;
        assert4(state.explicit === null && state.implicit === null);
        state.explicit = num2;
        return this;
      };
      Node.prototype.implicit = function implicit(num2) {
        const state = this._baseState;
        assert4(state.explicit === null && state.implicit === null);
        state.implicit = num2;
        return this;
      };
      Node.prototype.obj = function obj() {
        const state = this._baseState;
        const args = Array.prototype.slice.call(arguments);
        state.obj = true;
        if (args.length !== 0)
          this._useArgs(args);
        return this;
      };
      Node.prototype.key = function key(newKey) {
        const state = this._baseState;
        assert4(state.key === null);
        state.key = newKey;
        return this;
      };
      Node.prototype.any = function any() {
        const state = this._baseState;
        state.any = true;
        return this;
      };
      Node.prototype.choice = function choice(obj) {
        const state = this._baseState;
        assert4(state.choice === null);
        state.choice = obj;
        this._useArgs(Object.keys(obj).map(function(key) {
          return obj[key];
        }));
        return this;
      };
      Node.prototype.contains = function contains(item) {
        const state = this._baseState;
        assert4(state.use === null);
        state.contains = item;
        return this;
      };
      Node.prototype._decode = function decode10(input, options) {
        const state = this._baseState;
        if (state.parent === null)
          return input.wrapResult(state.children[0]._decode(input, options));
        let result = state["default"];
        let present = true;
        let prevKey = null;
        if (state.key !== null)
          prevKey = input.enterKey(state.key);
        if (state.optional) {
          let tag = null;
          if (state.explicit !== null)
            tag = state.explicit;
          else if (state.implicit !== null)
            tag = state.implicit;
          else if (state.tag !== null)
            tag = state.tag;
          if (tag === null && !state.any) {
            const save = input.save();
            try {
              if (state.choice === null)
                this._decodeGeneric(state.tag, input, options);
              else
                this._decodeChoice(input, options);
              present = true;
            } catch (e) {
              present = false;
            }
            input.restore(save);
          } else {
            present = this._peekTag(input, tag, state.any);
            if (input.isError(present))
              return present;
          }
        }
        let prevObj;
        if (state.obj && present)
          prevObj = input.enterObject();
        if (present) {
          if (state.explicit !== null) {
            const explicit = this._decodeTag(input, state.explicit);
            if (input.isError(explicit))
              return explicit;
            input = explicit;
          }
          const start = input.offset;
          if (state.use === null && state.choice === null) {
            let save;
            if (state.any)
              save = input.save();
            const body = this._decodeTag(
              input,
              state.implicit !== null ? state.implicit : state.tag,
              state.any
            );
            if (input.isError(body))
              return body;
            if (state.any)
              result = input.raw(save);
            else
              input = body;
          }
          if (options && options.track && state.tag !== null)
            options.track(input.path(), start, input.length, "tagged");
          if (options && options.track && state.tag !== null)
            options.track(input.path(), input.offset, input.length, "content");
          if (state.any) {
          } else if (state.choice === null) {
            result = this._decodeGeneric(state.tag, input, options);
          } else {
            result = this._decodeChoice(input, options);
          }
          if (input.isError(result))
            return result;
          if (!state.any && state.choice === null && state.children !== null) {
            state.children.forEach(function decodeChildren(child) {
              child._decode(input, options);
            });
          }
          if (state.contains && (state.tag === "octstr" || state.tag === "bitstr")) {
            const data = new DecoderBuffer(result);
            result = this._getUse(state.contains, input._reporterState.obj)._decode(data, options);
          }
        }
        if (state.obj && present)
          result = input.leaveObject(prevObj);
        if (state.key !== null && (result !== null || present === true))
          input.leaveKey(prevKey, state.key, result);
        else if (prevKey !== null)
          input.exitKey(prevKey);
        return result;
      };
      Node.prototype._decodeGeneric = function decodeGeneric(tag, input, options) {
        const state = this._baseState;
        if (tag === "seq" || tag === "set")
          return null;
        if (tag === "seqof" || tag === "setof")
          return this._decodeList(input, tag, state.args[0], options);
        else if (/str$/.test(tag))
          return this._decodeStr(input, tag, options);
        else if (tag === "objid" && state.args)
          return this._decodeObjid(input, state.args[0], state.args[1], options);
        else if (tag === "objid")
          return this._decodeObjid(input, null, null, options);
        else if (tag === "gentime" || tag === "utctime")
          return this._decodeTime(input, tag, options);
        else if (tag === "null_")
          return this._decodeNull(input, options);
        else if (tag === "bool")
          return this._decodeBool(input, options);
        else if (tag === "objDesc")
          return this._decodeStr(input, tag, options);
        else if (tag === "int" || tag === "enum")
          return this._decodeInt(input, state.args && state.args[0], options);
        if (state.use !== null) {
          return this._getUse(state.use, input._reporterState.obj)._decode(input, options);
        } else {
          return input.error("unknown tag: " + tag);
        }
      };
      Node.prototype._getUse = function _getUse(entity, obj) {
        const state = this._baseState;
        state.useDecoder = this._use(entity, obj);
        assert4(state.useDecoder._baseState.parent === null);
        state.useDecoder = state.useDecoder._baseState.children[0];
        if (state.implicit !== state.useDecoder._baseState.implicit) {
          state.useDecoder = state.useDecoder.clone();
          state.useDecoder._baseState.implicit = state.implicit;
        }
        return state.useDecoder;
      };
      Node.prototype._decodeChoice = function decodeChoice(input, options) {
        const state = this._baseState;
        let result = null;
        let match = false;
        Object.keys(state.choice).some(function(key) {
          const save = input.save();
          const node = state.choice[key];
          try {
            const value = node._decode(input, options);
            if (input.isError(value))
              return false;
            result = { type: key, value };
            match = true;
          } catch (e) {
            input.restore(save);
            return false;
          }
          return true;
        }, this);
        if (!match)
          return input.error("Choice not matched");
        return result;
      };
      Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
        return new EncoderBuffer(data, this.reporter);
      };
      Node.prototype._encode = function encode11(data, reporter, parent) {
        const state = this._baseState;
        if (state["default"] !== null && state["default"] === data)
          return;
        const result = this._encodeValue(data, reporter, parent);
        if (result === void 0)
          return;
        if (this._skipDefault(result, reporter, parent))
          return;
        return result;
      };
      Node.prototype._encodeValue = function encode11(data, reporter, parent) {
        const state = this._baseState;
        if (state.parent === null)
          return state.children[0]._encode(data, reporter || new Reporter());
        let result = null;
        this.reporter = reporter;
        if (state.optional && data === void 0) {
          if (state["default"] !== null)
            data = state["default"];
          else
            return;
        }
        let content = null;
        let primitive = false;
        if (state.any) {
          result = this._createEncoderBuffer(data);
        } else if (state.choice) {
          result = this._encodeChoice(data, reporter);
        } else if (state.contains) {
          content = this._getUse(state.contains, parent)._encode(data, reporter);
          primitive = true;
        } else if (state.children) {
          content = state.children.map(function(child) {
            if (child._baseState.tag === "null_")
              return child._encode(null, reporter, data);
            if (child._baseState.key === null)
              return reporter.error("Child should have a key");
            const prevKey = reporter.enterKey(child._baseState.key);
            if (typeof data !== "object")
              return reporter.error("Child expected, but input is not object");
            const res = child._encode(data[child._baseState.key], reporter, data);
            reporter.leaveKey(prevKey);
            return res;
          }, this).filter(function(child) {
            return child;
          });
          content = this._createEncoderBuffer(content);
        } else {
          if (state.tag === "seqof" || state.tag === "setof") {
            if (!(state.args && state.args.length === 1))
              return reporter.error("Too many args for : " + state.tag);
            if (!Array.isArray(data))
              return reporter.error("seqof/setof, but data is not Array");
            const child = this.clone();
            child._baseState.implicit = null;
            content = this._createEncoderBuffer(data.map(function(item) {
              const state2 = this._baseState;
              return this._getUse(state2.args[0], data)._encode(item, reporter);
            }, child));
          } else if (state.use !== null) {
            result = this._getUse(state.use, parent)._encode(data, reporter);
          } else {
            content = this._encodePrimitive(state.tag, data);
            primitive = true;
          }
        }
        if (!state.any && state.choice === null) {
          const tag = state.implicit !== null ? state.implicit : state.tag;
          const cls = state.implicit === null ? "universal" : "context";
          if (tag === null) {
            if (state.use === null)
              reporter.error("Tag could be omitted only for .use()");
          } else {
            if (state.use === null)
              result = this._encodeComposite(tag, primitive, cls, content);
          }
        }
        if (state.explicit !== null)
          result = this._encodeComposite(state.explicit, false, "context", result);
        return result;
      };
      Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
        const state = this._baseState;
        const node = state.choice[data.type];
        if (!node) {
          assert4(
            false,
            data.type + " not found in " + JSON.stringify(Object.keys(state.choice))
          );
        }
        return node._encode(data.value, reporter);
      };
      Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
        const state = this._baseState;
        if (/str$/.test(tag))
          return this._encodeStr(data, tag);
        else if (tag === "objid" && state.args)
          return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
        else if (tag === "objid")
          return this._encodeObjid(data, null, null);
        else if (tag === "gentime" || tag === "utctime")
          return this._encodeTime(data, tag);
        else if (tag === "null_")
          return this._encodeNull();
        else if (tag === "int" || tag === "enum")
          return this._encodeInt(data, state.args && state.reverseArgs[0]);
        else if (tag === "bool")
          return this._encodeBool(data);
        else if (tag === "objDesc")
          return this._encodeStr(data, tag);
        else
          throw new Error("Unsupported tag: " + tag);
      };
      Node.prototype._isNumstr = function isNumstr(str2) {
        return /^[0-9 ]*$/.test(str2);
      };
      Node.prototype._isPrintstr = function isPrintstr(str2) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(str2);
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/constants/der.js
  var require_der = __commonJS({
    "node_modules/asn1.js/lib/asn1/constants/der.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      function reverse(map) {
        const res = {};
        Object.keys(map).forEach(function(key) {
          if ((key | 0) == key)
            key = key | 0;
          const value = map[key];
          res[value] = key;
        });
        return res;
      }
      exports2.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private"
      };
      exports2.tagClassByName = reverse(exports2.tagClass);
      exports2.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr"
      };
      exports2.tagByName = reverse(exports2.tag);
    }
  });

  // node_modules/asn1.js/lib/asn1/encoders/der.js
  var require_der2 = __commonJS({
    "node_modules/asn1.js/lib/asn1/encoders/der.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      var Buffer3 = require_safer().Buffer;
      var Node = require_node();
      var der = require_der();
      function DEREncoder(entity) {
        this.enc = "der";
        this.name = entity.name;
        this.entity = entity;
        this.tree = new DERNode();
        this.tree._init(entity.body);
      }
      module.exports = DEREncoder;
      DEREncoder.prototype.encode = function encode11(data, reporter) {
        return this.tree._encode(data, reporter).join();
      };
      function DERNode(parent) {
        Node.call(this, "der", parent);
      }
      inherits2(DERNode, Node);
      DERNode.prototype._encodeComposite = function encodeComposite(tag, primitive, cls, content) {
        const encodedTag = encodeTag(tag, primitive, cls, this.reporter);
        if (content.length < 128) {
          const header2 = Buffer3.alloc(2);
          header2[0] = encodedTag;
          header2[1] = content.length;
          return this._createEncoderBuffer([header2, content]);
        }
        let lenOctets = 1;
        for (let i = content.length; i >= 256; i >>= 8)
          lenOctets++;
        const header = Buffer3.alloc(1 + 1 + lenOctets);
        header[0] = encodedTag;
        header[1] = 128 | lenOctets;
        for (let i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8)
          header[i] = j & 255;
        return this._createEncoderBuffer([header, content]);
      };
      DERNode.prototype._encodeStr = function encodeStr(str2, tag) {
        if (tag === "bitstr") {
          return this._createEncoderBuffer([str2.unused | 0, str2.data]);
        } else if (tag === "bmpstr") {
          const buf = Buffer3.alloc(str2.length * 2);
          for (let i = 0; i < str2.length; i++) {
            buf.writeUInt16BE(str2.charCodeAt(i), i * 2);
          }
          return this._createEncoderBuffer(buf);
        } else if (tag === "numstr") {
          if (!this._isNumstr(str2)) {
            return this.reporter.error("Encoding of string type: numstr supports only digits and space");
          }
          return this._createEncoderBuffer(str2);
        } else if (tag === "printstr") {
          if (!this._isPrintstr(str2)) {
            return this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
          }
          return this._createEncoderBuffer(str2);
        } else if (/str$/.test(tag)) {
          return this._createEncoderBuffer(str2);
        } else if (tag === "objDesc") {
          return this._createEncoderBuffer(str2);
        } else {
          return this.reporter.error("Encoding of string type: " + tag + " unsupported");
        }
      };
      DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
        if (typeof id === "string") {
          if (!values)
            return this.reporter.error("string objid given, but no values map found");
          if (!values.hasOwnProperty(id))
            return this.reporter.error("objid not found in values map");
          id = values[id].split(/[\s.]+/g);
          for (let i = 0; i < id.length; i++)
            id[i] |= 0;
        } else if (Array.isArray(id)) {
          id = id.slice();
          for (let i = 0; i < id.length; i++)
            id[i] |= 0;
        }
        if (!Array.isArray(id)) {
          return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(id));
        }
        if (!relative) {
          if (id[1] >= 40)
            return this.reporter.error("Second objid identifier OOB");
          id.splice(0, 2, id[0] * 40 + id[1]);
        }
        let size = 0;
        for (let i = 0; i < id.length; i++) {
          let ident = id[i];
          for (size++; ident >= 128; ident >>= 7)
            size++;
        }
        const objid = Buffer3.alloc(size);
        let offset = objid.length - 1;
        for (let i = id.length - 1; i >= 0; i--) {
          let ident = id[i];
          objid[offset--] = ident & 127;
          while ((ident >>= 7) > 0)
            objid[offset--] = 128 | ident & 127;
        }
        return this._createEncoderBuffer(objid);
      };
      function two(num2) {
        if (num2 < 10)
          return "0" + num2;
        else
          return num2;
      }
      DERNode.prototype._encodeTime = function encodeTime(time, tag) {
        let str2;
        const date = new Date(time);
        if (tag === "gentime") {
          str2 = [
            two(date.getUTCFullYear()),
            two(date.getUTCMonth() + 1),
            two(date.getUTCDate()),
            two(date.getUTCHours()),
            two(date.getUTCMinutes()),
            two(date.getUTCSeconds()),
            "Z"
          ].join("");
        } else if (tag === "utctime") {
          str2 = [
            two(date.getUTCFullYear() % 100),
            two(date.getUTCMonth() + 1),
            two(date.getUTCDate()),
            two(date.getUTCHours()),
            two(date.getUTCMinutes()),
            two(date.getUTCSeconds()),
            "Z"
          ].join("");
        } else {
          this.reporter.error("Encoding " + tag + " time is not supported yet");
        }
        return this._encodeStr(str2, "octstr");
      };
      DERNode.prototype._encodeNull = function encodeNull() {
        return this._createEncoderBuffer("");
      };
      DERNode.prototype._encodeInt = function encodeInt(num2, values) {
        if (typeof num2 === "string") {
          if (!values)
            return this.reporter.error("String int or enum given, but no values map");
          if (!values.hasOwnProperty(num2)) {
            return this.reporter.error("Values map doesn't contain: " + JSON.stringify(num2));
          }
          num2 = values[num2];
        }
        if (typeof num2 !== "number" && !Buffer3.isBuffer(num2)) {
          const numArray = num2.toArray();
          if (!num2.sign && numArray[0] & 128) {
            numArray.unshift(0);
          }
          num2 = Buffer3.from(numArray);
        }
        if (Buffer3.isBuffer(num2)) {
          let size2 = num2.length;
          if (num2.length === 0)
            size2++;
          const out2 = Buffer3.alloc(size2);
          num2.copy(out2);
          if (num2.length === 0)
            out2[0] = 0;
          return this._createEncoderBuffer(out2);
        }
        if (num2 < 128)
          return this._createEncoderBuffer(num2);
        if (num2 < 256)
          return this._createEncoderBuffer([0, num2]);
        let size = 1;
        for (let i = num2; i >= 256; i >>= 8)
          size++;
        const out = new Array(size);
        for (let i = out.length - 1; i >= 0; i--) {
          out[i] = num2 & 255;
          num2 >>= 8;
        }
        if (out[0] & 128) {
          out.unshift(0);
        }
        return this._createEncoderBuffer(Buffer3.from(out));
      };
      DERNode.prototype._encodeBool = function encodeBool(value) {
        return this._createEncoderBuffer(value ? 255 : 0);
      };
      DERNode.prototype._use = function use(entity, obj) {
        if (typeof entity === "function")
          entity = entity(obj);
        return entity._getEncoder("der").tree;
      };
      DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
        const state = this._baseState;
        let i;
        if (state["default"] === null)
          return false;
        const data = dataBuffer.join();
        if (state.defaultBuffer === void 0)
          state.defaultBuffer = this._encodeValue(state["default"], reporter, parent).join();
        if (data.length !== state.defaultBuffer.length)
          return false;
        for (i = 0; i < data.length; i++)
          if (data[i] !== state.defaultBuffer[i])
            return false;
        return true;
      };
      function encodeTag(tag, primitive, cls, reporter) {
        let res;
        if (tag === "seqof")
          tag = "seq";
        else if (tag === "setof")
          tag = "set";
        if (der.tagByName.hasOwnProperty(tag))
          res = der.tagByName[tag];
        else if (typeof tag === "number" && (tag | 0) === tag)
          res = tag;
        else
          return reporter.error("Unknown tag: " + tag);
        if (res >= 31)
          return reporter.error("Multi-octet tag encoding unsupported");
        if (!primitive)
          res |= 32;
        res |= der.tagClassByName[cls || "universal"] << 6;
        return res;
      }
    }
  });

  // node_modules/asn1.js/lib/asn1/encoders/pem.js
  var require_pem = __commonJS({
    "node_modules/asn1.js/lib/asn1/encoders/pem.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      var DEREncoder = require_der2();
      function PEMEncoder(entity) {
        DEREncoder.call(this, entity);
        this.enc = "pem";
      }
      inherits2(PEMEncoder, DEREncoder);
      module.exports = PEMEncoder;
      PEMEncoder.prototype.encode = function encode11(data, options) {
        const buf = DEREncoder.prototype.encode.call(this, data);
        const p = buf.toString("base64");
        const out = ["-----BEGIN " + options.label + "-----"];
        for (let i = 0; i < p.length; i += 64)
          out.push(p.slice(i, i + 64));
        out.push("-----END " + options.label + "-----");
        return out.join("\n");
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/encoders/index.js
  var require_encoders = __commonJS({
    "node_modules/asn1.js/lib/asn1/encoders/index.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var encoders = exports2;
      encoders.der = require_der2();
      encoders.pem = require_pem();
    }
  });

  // node_modules/asn1.js/lib/asn1/decoders/der.js
  var require_der3 = __commonJS({
    "node_modules/asn1.js/lib/asn1/decoders/der.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      var bignum = require_bn2();
      var DecoderBuffer = require_buffer().DecoderBuffer;
      var Node = require_node();
      var der = require_der();
      function DERDecoder(entity) {
        this.enc = "der";
        this.name = entity.name;
        this.entity = entity;
        this.tree = new DERNode();
        this.tree._init(entity.body);
      }
      module.exports = DERDecoder;
      DERDecoder.prototype.decode = function decode10(data, options) {
        if (!DecoderBuffer.isDecoderBuffer(data)) {
          data = new DecoderBuffer(data, options);
        }
        return this.tree._decode(data, options);
      };
      function DERNode(parent) {
        Node.call(this, "der", parent);
      }
      inherits2(DERNode, Node);
      DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
        if (buffer.isEmpty())
          return false;
        const state = buffer.save();
        const decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
        if (buffer.isError(decodedTag))
          return decodedTag;
        buffer.restore(state);
        return decodedTag.tag === tag || decodedTag.tagStr === tag || decodedTag.tagStr + "of" === tag || any;
      };
      DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
        const decodedTag = derDecodeTag(
          buffer,
          'Failed to decode tag of "' + tag + '"'
        );
        if (buffer.isError(decodedTag))
          return decodedTag;
        let len = derDecodeLen(
          buffer,
          decodedTag.primitive,
          'Failed to get length of "' + tag + '"'
        );
        if (buffer.isError(len))
          return len;
        if (!any && decodedTag.tag !== tag && decodedTag.tagStr !== tag && decodedTag.tagStr + "of" !== tag) {
          return buffer.error('Failed to match tag: "' + tag + '"');
        }
        if (decodedTag.primitive || len !== null)
          return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
        const state = buffer.save();
        const res = this._skipUntilEnd(
          buffer,
          'Failed to skip indefinite length body: "' + this.tag + '"'
        );
        if (buffer.isError(res))
          return res;
        len = buffer.offset - state.offset;
        buffer.restore(state);
        return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
      };
      DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
        for (; ; ) {
          const tag = derDecodeTag(buffer, fail);
          if (buffer.isError(tag))
            return tag;
          const len = derDecodeLen(buffer, tag.primitive, fail);
          if (buffer.isError(len))
            return len;
          let res;
          if (tag.primitive || len !== null)
            res = buffer.skip(len);
          else
            res = this._skipUntilEnd(buffer, fail);
          if (buffer.isError(res))
            return res;
          if (tag.tagStr === "end")
            break;
        }
      };
      DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder, options) {
        const result = [];
        while (!buffer.isEmpty()) {
          const possibleEnd = this._peekTag(buffer, "end");
          if (buffer.isError(possibleEnd))
            return possibleEnd;
          const res = decoder.decode(buffer, "der", options);
          if (buffer.isError(res) && possibleEnd)
            break;
          result.push(res);
        }
        return result;
      };
      DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
        if (tag === "bitstr") {
          const unused = buffer.readUInt8();
          if (buffer.isError(unused))
            return unused;
          return { unused, data: buffer.raw() };
        } else if (tag === "bmpstr") {
          const raw = buffer.raw();
          if (raw.length % 2 === 1)
            return buffer.error("Decoding of string type: bmpstr length mismatch");
          let str2 = "";
          for (let i = 0; i < raw.length / 2; i++) {
            str2 += String.fromCharCode(raw.readUInt16BE(i * 2));
          }
          return str2;
        } else if (tag === "numstr") {
          const numstr = buffer.raw().toString("ascii");
          if (!this._isNumstr(numstr)) {
            return buffer.error("Decoding of string type: numstr unsupported characters");
          }
          return numstr;
        } else if (tag === "octstr") {
          return buffer.raw();
        } else if (tag === "objDesc") {
          return buffer.raw();
        } else if (tag === "printstr") {
          const printstr = buffer.raw().toString("ascii");
          if (!this._isPrintstr(printstr)) {
            return buffer.error("Decoding of string type: printstr unsupported characters");
          }
          return printstr;
        } else if (/str$/.test(tag)) {
          return buffer.raw().toString();
        } else {
          return buffer.error("Decoding of string type: " + tag + " unsupported");
        }
      };
      DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
        let result;
        const identifiers = [];
        let ident = 0;
        let subident = 0;
        while (!buffer.isEmpty()) {
          subident = buffer.readUInt8();
          ident <<= 7;
          ident |= subident & 127;
          if ((subident & 128) === 0) {
            identifiers.push(ident);
            ident = 0;
          }
        }
        if (subident & 128)
          identifiers.push(ident);
        const first = identifiers[0] / 40 | 0;
        const second = identifiers[0] % 40;
        if (relative)
          result = identifiers;
        else
          result = [first, second].concat(identifiers.slice(1));
        if (values) {
          let tmp = values[result.join(" ")];
          if (tmp === void 0)
            tmp = values[result.join(".")];
          if (tmp !== void 0)
            result = tmp;
        }
        return result;
      };
      DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
        const str2 = buffer.raw().toString();
        let year;
        let mon;
        let day;
        let hour;
        let min;
        let sec;
        if (tag === "gentime") {
          year = str2.slice(0, 4) | 0;
          mon = str2.slice(4, 6) | 0;
          day = str2.slice(6, 8) | 0;
          hour = str2.slice(8, 10) | 0;
          min = str2.slice(10, 12) | 0;
          sec = str2.slice(12, 14) | 0;
        } else if (tag === "utctime") {
          year = str2.slice(0, 2) | 0;
          mon = str2.slice(2, 4) | 0;
          day = str2.slice(4, 6) | 0;
          hour = str2.slice(6, 8) | 0;
          min = str2.slice(8, 10) | 0;
          sec = str2.slice(10, 12) | 0;
          if (year < 70)
            year = 2e3 + year;
          else
            year = 1900 + year;
        } else {
          return buffer.error("Decoding " + tag + " time is not supported yet");
        }
        return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
      };
      DERNode.prototype._decodeNull = function decodeNull() {
        return null;
      };
      DERNode.prototype._decodeBool = function decodeBool(buffer) {
        const res = buffer.readUInt8();
        if (buffer.isError(res))
          return res;
        else
          return res !== 0;
      };
      DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
        const raw = buffer.raw();
        let res = new bignum(raw);
        if (values)
          res = values[res.toString(10)] || res;
        return res;
      };
      DERNode.prototype._use = function use(entity, obj) {
        if (typeof entity === "function")
          entity = entity(obj);
        return entity._getDecoder("der").tree;
      };
      function derDecodeTag(buf, fail) {
        let tag = buf.readUInt8(fail);
        if (buf.isError(tag))
          return tag;
        const cls = der.tagClass[tag >> 6];
        const primitive = (tag & 32) === 0;
        if ((tag & 31) === 31) {
          let oct = tag;
          tag = 0;
          while ((oct & 128) === 128) {
            oct = buf.readUInt8(fail);
            if (buf.isError(oct))
              return oct;
            tag <<= 7;
            tag |= oct & 127;
          }
        } else {
          tag &= 31;
        }
        const tagStr = der.tag[tag];
        return {
          cls,
          primitive,
          tag,
          tagStr
        };
      }
      function derDecodeLen(buf, primitive, fail) {
        let len = buf.readUInt8(fail);
        if (buf.isError(len))
          return len;
        if (!primitive && len === 128)
          return null;
        if ((len & 128) === 0) {
          return len;
        }
        const num2 = len & 127;
        if (num2 > 4)
          return buf.error("length octect is too long");
        len = 0;
        for (let i = 0; i < num2; i++) {
          len <<= 8;
          const j = buf.readUInt8(fail);
          if (buf.isError(j))
            return j;
          len |= j;
        }
        return len;
      }
    }
  });

  // node_modules/asn1.js/lib/asn1/decoders/pem.js
  var require_pem2 = __commonJS({
    "node_modules/asn1.js/lib/asn1/decoders/pem.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var inherits2 = require_inherits_browser();
      var Buffer3 = require_safer().Buffer;
      var DERDecoder = require_der3();
      function PEMDecoder(entity) {
        DERDecoder.call(this, entity);
        this.enc = "pem";
      }
      inherits2(PEMDecoder, DERDecoder);
      module.exports = PEMDecoder;
      PEMDecoder.prototype.decode = function decode10(data, options) {
        const lines = data.toString().split(/[\r\n]+/g);
        const label = options.label.toUpperCase();
        const re = /^-----(BEGIN|END) ([^-]+)-----$/;
        let start = -1;
        let end = -1;
        for (let i = 0; i < lines.length; i++) {
          const match = lines[i].match(re);
          if (match === null)
            continue;
          if (match[2] !== label)
            continue;
          if (start === -1) {
            if (match[1] !== "BEGIN")
              break;
            start = i;
          } else {
            if (match[1] !== "END")
              break;
            end = i;
            break;
          }
        }
        if (start === -1 || end === -1)
          throw new Error("PEM section not found for: " + label);
        const base643 = lines.slice(start + 1, end).join("");
        base643.replace(/[^a-z0-9+/=]+/gi, "");
        const input = Buffer3.from(base643, "base64");
        return DERDecoder.prototype.decode.call(this, input, options);
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/decoders/index.js
  var require_decoders = __commonJS({
    "node_modules/asn1.js/lib/asn1/decoders/index.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var decoders = exports2;
      decoders.der = require_der3();
      decoders.pem = require_pem2();
    }
  });

  // node_modules/asn1.js/lib/asn1/api.js
  var require_api = __commonJS({
    "node_modules/asn1.js/lib/asn1/api.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var encoders = require_encoders();
      var decoders = require_decoders();
      var inherits2 = require_inherits_browser();
      var api = exports2;
      api.define = function define(name5, body) {
        return new Entity(name5, body);
      };
      function Entity(name5, body) {
        this.name = name5;
        this.body = body;
        this.decoders = {};
        this.encoders = {};
      }
      Entity.prototype._createNamed = function createNamed(Base) {
        const name5 = this.name;
        function Generated(entity) {
          this._initNamed(entity, name5);
        }
        inherits2(Generated, Base);
        Generated.prototype._initNamed = function _initNamed(entity, name6) {
          Base.call(this, entity, name6);
        };
        return new Generated(this);
      };
      Entity.prototype._getDecoder = function _getDecoder(enc) {
        enc = enc || "der";
        if (!this.decoders.hasOwnProperty(enc))
          this.decoders[enc] = this._createNamed(decoders[enc]);
        return this.decoders[enc];
      };
      Entity.prototype.decode = function decode10(data, enc, options) {
        return this._getDecoder(enc).decode(data, options);
      };
      Entity.prototype._getEncoder = function _getEncoder(enc) {
        enc = enc || "der";
        if (!this.encoders.hasOwnProperty(enc))
          this.encoders[enc] = this._createNamed(encoders[enc]);
        return this.encoders[enc];
      };
      Entity.prototype.encode = function encode11(data, enc, reporter) {
        return this._getEncoder(enc).encode(data, reporter);
      };
    }
  });

  // node_modules/asn1.js/lib/asn1/base/index.js
  var require_base2 = __commonJS({
    "node_modules/asn1.js/lib/asn1/base/index.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var base3 = exports2;
      base3.Reporter = require_reporter().Reporter;
      base3.DecoderBuffer = require_buffer().DecoderBuffer;
      base3.EncoderBuffer = require_buffer().EncoderBuffer;
      base3.Node = require_node();
    }
  });

  // node_modules/asn1.js/lib/asn1/constants/index.js
  var require_constants = __commonJS({
    "node_modules/asn1.js/lib/asn1/constants/index.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var constants = exports2;
      constants._reverse = function reverse(map) {
        const res = {};
        Object.keys(map).forEach(function(key) {
          if ((key | 0) == key)
            key = key | 0;
          const value = map[key];
          res[value] = key;
        });
        return res;
      };
      constants.der = require_der();
    }
  });

  // node_modules/asn1.js/lib/asn1.js
  var require_asn1 = __commonJS({
    "node_modules/asn1.js/lib/asn1.js"(exports2) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var asn12 = exports2;
      asn12.bignum = require_bn2();
      asn12.define = require_api().define;
      asn12.base = require_base2();
      asn12.constants = require_constants();
      asn12.decoders = require_decoders();
      asn12.encoders = require_encoders();
    }
  });

  // node_modules/@multiformats/base-x/src/index.js
  var require_src = __commonJS({
    "node_modules/@multiformats/base-x/src/index.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      function base3(ALPHABET2) {
        if (ALPHABET2.length >= 255) {
          throw new TypeError("Alphabet too long");
        }
        var BASE_MAP = new Uint8Array(256);
        for (var j = 0; j < BASE_MAP.length; j++) {
          BASE_MAP[j] = 255;
        }
        for (var i = 0; i < ALPHABET2.length; i++) {
          var x = ALPHABET2.charAt(i);
          var xc = x.charCodeAt(0);
          if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + " is ambiguous");
          }
          BASE_MAP[xc] = i;
        }
        var BASE = ALPHABET2.length;
        var LEADER = ALPHABET2.charAt(0);
        var FACTOR = Math.log(BASE) / Math.log(256);
        var iFACTOR = Math.log(256) / Math.log(BASE);
        function encode11(source) {
          if (source instanceof Uint8Array) {
          } else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
          } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
          }
          if (!(source instanceof Uint8Array)) {
            throw new TypeError("Expected Uint8Array");
          }
          if (source.length === 0) {
            return "";
          }
          var zeroes = 0;
          var length2 = 0;
          var pbegin = 0;
          var pend = source.length;
          while (pbegin !== pend && source[pbegin] === 0) {
            pbegin++;
            zeroes++;
          }
          var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
          var b58 = new Uint8Array(size);
          while (pbegin !== pend) {
            var carry = source[pbegin];
            var i2 = 0;
            for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
              carry += 256 * b58[it1] >>> 0;
              b58[it1] = carry % BASE >>> 0;
              carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length2 = i2;
            pbegin++;
          }
          var it2 = size - length2;
          while (it2 !== size && b58[it2] === 0) {
            it2++;
          }
          var str2 = LEADER.repeat(zeroes);
          for (; it2 < size; ++it2) {
            str2 += ALPHABET2.charAt(b58[it2]);
          }
          return str2;
        }
        function decodeUnsafe(source) {
          if (typeof source !== "string") {
            throw new TypeError("Expected String");
          }
          if (source.length === 0) {
            return new Uint8Array();
          }
          var psz = 0;
          if (source[psz] === " ") {
            return;
          }
          var zeroes = 0;
          var length2 = 0;
          while (source[psz] === LEADER) {
            zeroes++;
            psz++;
          }
          var size = (source.length - psz) * FACTOR + 1 >>> 0;
          var b256 = new Uint8Array(size);
          while (source[psz]) {
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) {
              return;
            }
            var i2 = 0;
            for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
              carry += BASE * b256[it3] >>> 0;
              b256[it3] = carry % 256 >>> 0;
              carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length2 = i2;
            psz++;
          }
          if (source[psz] === " ") {
            return;
          }
          var it4 = size - length2;
          while (it4 !== size && b256[it4] === 0) {
            it4++;
          }
          var vch = new Uint8Array(zeroes + (size - it4));
          var j2 = zeroes;
          while (it4 !== size) {
            vch[j2++] = b256[it4++];
          }
          return vch;
        }
        function decode10(string2) {
          var buffer = decodeUnsafe(string2);
          if (buffer) {
            return buffer;
          }
          throw new Error("Non-base" + BASE + " character");
        }
        return {
          encode: encode11,
          decodeUnsafe,
          decode: decode10
        };
      }
      module.exports = base3;
    }
  });

  // node_modules/multibase/src/util.js
  var require_util = __commonJS({
    "node_modules/multibase/src/util.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var textDecoder3 = new TextDecoder();
      var decodeText = (bytes4) => textDecoder3.decode(bytes4);
      var textEncoder3 = new TextEncoder();
      var encodeText2 = (text) => textEncoder3.encode(text);
      function concat2(arrs, length2) {
        const output3 = new Uint8Array(length2);
        let offset = 0;
        for (const arr of arrs) {
          output3.set(arr, offset);
          offset += arr.length;
        }
        return output3;
      }
      module.exports = { decodeText, encodeText: encodeText2, concat: concat2 };
    }
  });

  // node_modules/multibase/src/base.js
  var require_base3 = __commonJS({
    "node_modules/multibase/src/base.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var { encodeText: encodeText2 } = require_util();
      var Base = class {
        /**
         * @param {BaseName} name
         * @param {BaseCode} code
         * @param {CodecFactory} factory
         * @param {string} alphabet
         */
        constructor(name5, code5, factory, alphabet3) {
          this.name = name5;
          this.code = code5;
          this.codeBuf = encodeText2(this.code);
          this.alphabet = alphabet3;
          this.codec = factory(alphabet3);
        }
        /**
         * @param {Uint8Array} buf
         * @returns {string}
         */
        encode(buf) {
          return this.codec.encode(buf);
        }
        /**
         * @param {string} string
         * @returns {Uint8Array}
         */
        decode(string2) {
          for (const char of string2) {
            if (this.alphabet && this.alphabet.indexOf(char) < 0) {
              throw new Error(`invalid character '${char}' in '${string2}'`);
            }
          }
          return this.codec.decode(string2);
        }
      };
      module.exports = Base;
    }
  });

  // node_modules/multibase/src/rfc4648.js
  var require_rfc4648 = __commonJS({
    "node_modules/multibase/src/rfc4648.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var decode10 = (string2, alphabet3, bitsPerChar) => {
        const codes = {};
        for (let i = 0; i < alphabet3.length; ++i) {
          codes[alphabet3[i]] = i;
        }
        let end = string2.length;
        while (string2[end - 1] === "=") {
          --end;
        }
        const out = new Uint8Array(end * bitsPerChar / 8 | 0);
        let bits = 0;
        let buffer = 0;
        let written = 0;
        for (let i = 0; i < end; ++i) {
          const value = codes[string2[i]];
          if (value === void 0) {
            throw new SyntaxError("Invalid character " + string2[i]);
          }
          buffer = buffer << bitsPerChar | value;
          bits += bitsPerChar;
          if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
          }
        }
        if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
          throw new SyntaxError("Unexpected end of data");
        }
        return out;
      };
      var encode11 = (data, alphabet3, bitsPerChar) => {
        const pad = alphabet3[alphabet3.length - 1] === "=";
        const mask = (1 << bitsPerChar) - 1;
        let out = "";
        let bits = 0;
        let buffer = 0;
        for (let i = 0; i < data.length; ++i) {
          buffer = buffer << 8 | data[i];
          bits += 8;
          while (bits > bitsPerChar) {
            bits -= bitsPerChar;
            out += alphabet3[mask & buffer >> bits];
          }
        }
        if (bits) {
          out += alphabet3[mask & buffer << bitsPerChar - bits];
        }
        if (pad) {
          while (out.length * bitsPerChar & 7) {
            out += "=";
          }
        }
        return out;
      };
      var rfc46482 = (bitsPerChar) => (alphabet3) => {
        return {
          /**
           * @param {Uint8Array} input
           * @returns {string}
           */
          encode(input) {
            return encode11(input, alphabet3, bitsPerChar);
          },
          /**
           * @param {string} input
           * @returns {Uint8Array}
           */
          decode(input) {
            return decode10(input, alphabet3, bitsPerChar);
          }
        };
      };
      module.exports = { rfc4648: rfc46482 };
    }
  });

  // node_modules/multibase/src/constants.js
  var require_constants2 = __commonJS({
    "node_modules/multibase/src/constants.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var baseX2 = require_src();
      var Base = require_base3();
      var { rfc4648: rfc46482 } = require_rfc4648();
      var { decodeText, encodeText: encodeText2 } = require_util();
      var identity3 = () => {
        return {
          encode: decodeText,
          decode: encodeText2
        };
      };
      var constants = [
        ["identity", "\0", identity3, ""],
        ["base2", "0", rfc46482(1), "01"],
        ["base8", "7", rfc46482(3), "01234567"],
        ["base10", "9", baseX2, "0123456789"],
        ["base16", "f", rfc46482(4), "0123456789abcdef"],
        ["base16upper", "F", rfc46482(4), "0123456789ABCDEF"],
        ["base32hex", "v", rfc46482(5), "0123456789abcdefghijklmnopqrstuv"],
        ["base32hexupper", "V", rfc46482(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
        ["base32hexpad", "t", rfc46482(5), "0123456789abcdefghijklmnopqrstuv="],
        ["base32hexpadupper", "T", rfc46482(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
        ["base32", "b", rfc46482(5), "abcdefghijklmnopqrstuvwxyz234567"],
        ["base32upper", "B", rfc46482(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
        ["base32pad", "c", rfc46482(5), "abcdefghijklmnopqrstuvwxyz234567="],
        ["base32padupper", "C", rfc46482(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
        ["base32z", "h", rfc46482(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
        ["base36", "k", baseX2, "0123456789abcdefghijklmnopqrstuvwxyz"],
        ["base36upper", "K", baseX2, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        ["base58btc", "z", baseX2, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
        ["base58flickr", "Z", baseX2, "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],
        ["base64", "m", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],
        ["base64pad", "M", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
        ["base64url", "u", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],
        ["base64urlpad", "U", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]
      ];
      var names = constants.reduce(
        (prev, tupple) => {
          prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3]);
          return prev;
        },
        /** @type {Record<BaseName,Base>} */
        {}
      );
      var codes = constants.reduce(
        (prev, tupple) => {
          prev[tupple[1]] = names[tupple[0]];
          return prev;
        },
        /** @type {Record<BaseCode,Base>} */
        {}
      );
      module.exports = {
        names,
        codes
      };
    }
  });

  // node_modules/multibase/src/index.js
  var require_src2 = __commonJS({
    "node_modules/multibase/src/index.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var constants = require_constants2();
      var { encodeText: encodeText2, decodeText, concat: concat2 } = require_util();
      function multibase(nameOrCode, buf) {
        if (!buf) {
          throw new Error("requires an encoded Uint8Array");
        }
        const { name: name5, codeBuf } = encoding(nameOrCode);
        validEncode(name5, buf);
        return concat2([codeBuf, buf], codeBuf.length + buf.length);
      }
      function encode11(nameOrCode, buf) {
        const enc = encoding(nameOrCode);
        const data = encodeText2(enc.encode(buf));
        return concat2([enc.codeBuf, data], enc.codeBuf.length + data.length);
      }
      function decode10(data) {
        if (data instanceof Uint8Array) {
          data = decodeText(data);
        }
        const prefix = data[0];
        if (["f", "F", "v", "V", "t", "T", "b", "B", "c", "C", "h", "k", "K"].includes(prefix)) {
          data = data.toLowerCase();
        }
        const enc = encoding(
          /** @type {BaseCode} */
          data[0]
        );
        return enc.decode(data.substring(1));
      }
      function isEncoded(data) {
        if (data instanceof Uint8Array) {
          data = decodeText(data);
        }
        if (Object.prototype.toString.call(data) !== "[object String]") {
          return false;
        }
        try {
          const enc = encoding(
            /** @type {BaseCode} */
            data[0]
          );
          return enc.name;
        } catch (err) {
          return false;
        }
      }
      function validEncode(name5, buf) {
        const enc = encoding(name5);
        enc.decode(decodeText(buf));
      }
      function encoding(nameOrCode) {
        if (Object.prototype.hasOwnProperty.call(
          constants.names,
          /** @type {BaseName} */
          nameOrCode
        )) {
          return constants.names[
            /** @type {BaseName} */
            nameOrCode
          ];
        } else if (Object.prototype.hasOwnProperty.call(
          constants.codes,
          /** @type {BaseCode} */
          nameOrCode
        )) {
          return constants.codes[
            /** @type {BaseCode} */
            nameOrCode
          ];
        } else {
          throw new Error(`Unsupported encoding: ${nameOrCode}`);
        }
      }
      function encodingFromData(data) {
        if (data instanceof Uint8Array) {
          data = decodeText(data);
        }
        return encoding(
          /** @type {BaseCode} */
          data[0]
        );
      }
      exports2 = module.exports = multibase;
      exports2.encode = encode11;
      exports2.decode = decode10;
      exports2.isEncoded = isEncoded;
      exports2.encoding = encoding;
      exports2.encodingFromData = encodingFromData;
      var names = Object.freeze(constants.names);
      var codes = Object.freeze(constants.codes);
      exports2.names = names;
      exports2.codes = codes;
    }
  });

  // node_modules/canonicalize/lib/canonicalize.js
  var require_canonicalize = __commonJS({
    "node_modules/canonicalize/lib/canonicalize.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = function serialize(object) {
        if (typeof object === "number" && isNaN(object)) {
          throw new Error("NaN is not allowed");
        }
        if (typeof object === "number" && !isFinite(object)) {
          throw new Error("Infinity is not allowed");
        }
        if (object === null || typeof object !== "object") {
          return JSON.stringify(object);
        }
        if (object.toJSON instanceof Function) {
          return serialize(object.toJSON());
        }
        if (Array.isArray(object)) {
          const values2 = object.reduce((t, cv, ci) => {
            const comma = ci === 0 ? "" : ",";
            const value = cv === void 0 || typeof cv === "symbol" ? null : cv;
            return `${t}${comma}${serialize(value)}`;
          }, "");
          return `[${values2}]`;
        }
        const values = Object.keys(object).sort().reduce((t, cv) => {
          if (object[cv] === void 0 || typeof object[cv] === "symbol") {
            return t;
          }
          const comma = t.length === 0 ? "" : ",";
          return `${t}${comma}${serialize(cv)}:${serialize(object[cv])}`;
        }, "");
        return `{${values}}`;
      };
    }
  });

  // node_modules/lodash.isplainobject/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.isplainobject/index.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      var objectTag = "[object Object]";
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var funcProto = Function.prototype, objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      var objectToString = objectProto.toString;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isPlainObject3(value) {
        if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject3;
    }
  });

  // index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/wallet-lib/dist/eudiWallet.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/sha3.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/_assert.js
  init_dirname();
  init_buffer2();
  init_process2();
  function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
      throw new Error(`positive integer expected, not ${n}`);
  }
  function bool(b) {
    if (typeof b !== "boolean")
      throw new Error(`boolean expected, not ${b}`);
  }
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes(b, ...lengths) {
    if (!isBytes(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
  }
  function hash(h) {
    if (typeof h !== "function" || typeof h.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(h.outputLen);
    number(h.blockLen);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  var assert2 = { number, bool, bytes, hash, exists, output };
  var assert_default = assert2;

  // node_modules/@noble/hashes/esm/_u64.js
  init_dirname();
  init_buffer2();
  init_process2();
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n, le = false) {
    if (le)
      return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
    return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
  }
  function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
      const { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
  var shrSH = (h, _l, s) => h >>> s;
  var shrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
  var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
  var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
  var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
  var rotr32H = (_h, l) => l;
  var rotr32L = (h, _l) => h;
  var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
  var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
  var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
  var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  var u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  var u64_default = u64;

  // node_modules/@noble/hashes/esm/utils.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/crypto.js
  init_dirname();
  init_buffer2();
  init_process2();
  var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/@noble/hashes/esm/utils.js
  function isBytes2(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  var rotr = (word, shift) => word << 32 - shift | word >>> shift;
  var rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
  var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  var byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  var byteSwapIfBE = isLE ? (n) => n : (n) => byteSwap(n);
  function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = byteSwap(arr[i]);
    }
  }
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes4) {
    bytes(bytes4);
    let hex2 = "";
    for (let i = 0; i < bytes4.length; i++) {
      hex2 += hexes[bytes4[i]];
    }
    return hex2;
  }
  var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
      return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
      return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
      return char - (asciis._a - 10);
    return;
  }
  function hexToBytes(hex2) {
    if (typeof hex2 !== "string")
      throw new Error("hex string expected, got " + typeof hex2);
    const hl = hex2.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex2.charCodeAt(hi));
      const n2 = asciiToBase16(hex2.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex2[hi] + hex2[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  var nextTick2 = async () => {
  };
  async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
      cb(i);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await nextTick2();
      ts += diff;
    }
  }
  function utf8ToBytes(str2) {
    if (typeof str2 !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
    return new Uint8Array(new TextEncoder().encode(str2));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    bytes(data);
    return data;
  }
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      bytes(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  var Hash = class {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  };
  var toStr = {}.toString;
  function checkOpts(defaults2, opts) {
    if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults2, opts);
    return merged;
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto2 && typeof crypto2.getRandomValues === "function") {
      return crypto2.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }

  // node_modules/@noble/hashes/esm/sha3.js
  var SHA3_PI = [];
  var SHA3_ROTL = [];
  var _SHA3_IOTA = [];
  var _0n = /* @__PURE__ */ BigInt(0);
  var _1n = /* @__PURE__ */ BigInt(1);
  var _2n = /* @__PURE__ */ BigInt(2);
  var _7n = /* @__PURE__ */ BigInt(7);
  var _256n = /* @__PURE__ */ BigInt(256);
  var _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n;
    for (let j = 0; j < 7; j++) {
      R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
      if (R & _2n)
        t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
  }
  var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
  var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
  var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
  function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x = 0; x < 10; x++)
        B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0; x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B[idx0];
        const B1 = B[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
        for (let y = 0; y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0; y < 50; y += 10) {
        for (let x = 0; x < 10; x++)
          B[x] = s[y + x];
        for (let x = 0; x < 10; x++)
          s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
      }
      s[0] ^= SHA3_IOTA_H[round];
      s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
  }
  var Keccak = class _Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      number(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    keccak() {
      if (!isLE)
        byteSwap32(this.state32);
      keccakP(this.state32, this.rounds);
      if (!isLE)
        byteSwap32(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      exists(this);
      const { blockLen, state } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0; i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      exists(this, false);
      bytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes4) {
      number(bytes4);
      return this.xofInto(new Uint8Array(bytes4));
    }
    digestInto(out) {
      output(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  };
  var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
  var sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
  var sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
  var sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
  var sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
  var keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
  var keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  var keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
  var keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
  var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
  var shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
  var shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);

  // node_modules/@cef-eudi/key-encoder/dist/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var import_elliptic = __toESM(require_elliptic(), 1);
  var import_asn1 = __toESM(require_asn1(), 1);
  var EC = import_elliptic.default.ec;
  var curves = {
    secp256k1: {
      curveParameters: [1, 3, 132, 0, 10],
      privatePEMOptions: { label: "EC PRIVATE KEY" },
      publicPEMOptions: { label: "PUBLIC KEY" },
      curve: new EC("secp256k1")
    }
  };
  var ECPrivateKeyASN = import_asn1.default.define("ECPrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").explicit(0).objid().optional(), this.key("publicKey").explicit(1).bitstr().optional());
  });
  var ECPrivateKey8ASN = import_asn1.default.define("ECPrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("privateKeyAlgorithm").seq().obj(this.key("ecPublicKey").objid(), this.key("curve").objid()), this.key("privateKey").octstr().contains(ECPrivateKeyASN), this.key("attributes").explicit(0).bitstr().optional());
  });
  var SubjectPublicKeyInfoASN = import_asn1.default.define("SubjectPublicKeyInfo", function() {
    this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("curve").objid()), this.key("pub").bitstr());
  });
  var KeyEncoder = class {
    constructor(options) {
      if (typeof options === "string") {
        if (options !== "secp256k1") {
          throw new Error(`Unknown curve ${options}`);
        }
        options = curves[options];
      }
      this.options = options;
      this.algorithmID = [1, 2, 840, 10045, 2, 1];
    }
    PKCS1toPKCS8(privateKey) {
      return {
        version: 0,
        privateKey,
        privateKeyAlgorithm: {
          ecPublicKey: this.algorithmID,
          curve: privateKey.parameters
        }
      };
    }
    privateKeyObject(rawPrivateKey, rawPublicKey) {
      const privateKeyObject = {
        version: 1,
        privateKey: Buffer2.from(rawPrivateKey, "hex"),
        parameters: this.options.curveParameters
      };
      if (rawPublicKey) {
        privateKeyObject.publicKey = {
          unused: 0,
          data: Buffer2.from(rawPublicKey, "hex")
        };
      }
      return privateKeyObject;
    }
    publicKeyObject(rawPublicKey) {
      return {
        algorithm: {
          id: this.algorithmID,
          curve: this.options.curveParameters
        },
        pub: {
          unused: 0,
          data: Buffer2.from(rawPublicKey, "hex")
        }
      };
    }
    encodePrivate(privateKey, originalFormat, destinationFormat, destinationFormatType = "pkcs1") {
      let privateKeyObject;
      if (originalFormat === "raw") {
        if (typeof privateKey !== "string") {
          throw new Error("private key must be a string");
        }
        let keyPair = this.options.curve.keyFromPrivate(privateKey, "hex");
        let rawPublicKey = keyPair.getPublic("hex");
        privateKeyObject = this.privateKeyObject(privateKey, rawPublicKey);
      } else if (originalFormat === "der") {
        if (typeof privateKey !== "string") {
        } else if (typeof privateKey === "string") {
          privateKey = Buffer2.from(privateKey, "hex");
        } else {
          throw new Error("private key must be a buffer or a string");
        }
        privateKeyObject = ECPrivateKeyASN.decode(privateKey, "der");
      } else if (originalFormat === "pem") {
        if (typeof privateKey !== "string") {
          throw new Error("private key must be a string");
        }
        privateKeyObject = ECPrivateKeyASN.decode(privateKey, "pem", this.options.privatePEMOptions);
      } else {
        throw new Error("invalid private key format");
      }
      if (destinationFormat === "raw") {
        return privateKeyObject.privateKey.toString("hex");
      } else if (destinationFormat === "der") {
        return ECPrivateKeyASN.encode(privateKeyObject, "der").toString("hex");
      } else if (destinationFormat === "pem") {
        return destinationFormatType === "pkcs1" ? ECPrivateKeyASN.encode(privateKeyObject, "pem", this.options.privatePEMOptions) : ECPrivateKey8ASN.encode(this.PKCS1toPKCS8(privateKeyObject), "pem", {
          ...this.options.privatePEMOptions,
          label: "PRIVATE KEY"
        });
      } else {
        throw new Error("invalid destination format for private key");
      }
    }
    encodePublic(publicKey, originalFormat, destinationFormat) {
      let publicKeyObject;
      if (originalFormat === "raw") {
        if (typeof publicKey !== "string") {
          throw new Error("public key must be a string");
        }
        publicKeyObject = this.publicKeyObject(publicKey);
      } else if (originalFormat === "der") {
        if (typeof publicKey !== "string") {
        } else if (typeof publicKey === "string") {
          publicKey = Buffer2.from(publicKey, "hex");
        } else {
          throw new Error("public key must be a buffer or a string");
        }
        publicKeyObject = SubjectPublicKeyInfoASN.decode(publicKey, "der");
      } else if (originalFormat === "pem") {
        if (typeof publicKey !== "string") {
          throw new Error("public key must be a string");
        }
        publicKeyObject = SubjectPublicKeyInfoASN.decode(publicKey, "pem", this.options.publicPEMOptions);
      } else {
        throw new Error("invalid public key format");
      }
      if (destinationFormat === "raw") {
        return publicKeyObject.pub.data.toString("hex");
      } else if (destinationFormat === "der") {
        return SubjectPublicKeyInfoASN.encode(publicKeyObject, "der").toString("hex");
      } else if (destinationFormat === "pem") {
        return SubjectPublicKeyInfoASN.encode(publicKeyObject, "pem", this.options.publicPEMOptions);
      } else {
        throw new Error("invalid destination format for public key");
      }
    }
  };
  KeyEncoder.ECPrivateKeyASN = ECPrivateKeyASN;
  KeyEncoder.ECPrivateKey8ASN = ECPrivateKey8ASN;
  KeyEncoder.SubjectPublicKeyInfoASN = SubjectPublicKeyInfoASN;

  // node_modules/did-jwt/lib/index.module.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uint8arrays/esm/src/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uint8arrays/esm/src/compare.js
  init_dirname();
  init_buffer2();
  init_process2();
  function compare(a, b) {
    for (let i = 0; i < a.byteLength; i++) {
      if (a[i] < b[i]) {
        return -1;
      }
      if (a[i] > b[i]) {
        return 1;
      }
    }
    if (a.byteLength > b.byteLength) {
      return 1;
    }
    if (a.byteLength < b.byteLength) {
      return -1;
    }
    return 0;
  }

  // node_modules/uint8arrays/esm/src/concat.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uint8arrays/esm/src/alloc.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uint8arrays/esm/src/util/as-uint8array.js
  init_dirname();
  init_buffer2();
  init_process2();
  function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
  }

  // node_modules/uint8arrays/esm/src/alloc.js
  function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
      return asUint8Array(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
  }
  function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
      return asUint8Array(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
  }

  // node_modules/uint8arrays/esm/src/concat.js
  function concat(arrays, length2) {
    if (!length2) {
      length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output3 = allocUnsafe(length2);
    let offset = 0;
    for (const arr of arrays) {
      output3.set(arr, offset);
      offset += arr.length;
    }
    return asUint8Array(output3);
  }

  // node_modules/uint8arrays/esm/src/equals.js
  init_dirname();
  init_buffer2();
  init_process2();
  function equals(a, b) {
    if (a === b) {
      return true;
    }
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (let i = 0; i < a.byteLength; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  // node_modules/uint8arrays/esm/src/from-string.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uint8arrays/esm/src/util/bases.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/basics.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/bases/identity.js
  var identity_exports = {};
  __export(identity_exports, {
    identity: () => identity
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/bases/base.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/vendor/base-x.js
  init_dirname();
  init_buffer2();
  init_process2();
  function base(ALPHABET2, name5) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET2.length; i++) {
      var x = ALPHABET2.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET2.length;
    var LEADER = ALPHABET2.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode11(source) {
      if (source instanceof Uint8Array) ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length2 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i2;
        pbegin++;
      }
      var it2 = size - length2;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str2 = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str2 += ALPHABET2.charAt(b58[it2]);
      }
      return str2;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length2 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length2;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode10(string2) {
      var buffer = decodeUnsafe(string2);
      if (buffer) {
        return buffer;
      }
      throw new Error(`Non-${name5} character`);
    }
    return {
      encode: encode11,
      decodeUnsafe,
      decode: decode10
    };
  }
  var src = base;
  var _brrp__multiformats_scope_baseX = src;
  var base_x_default = _brrp__multiformats_scope_baseX;

  // node_modules/multiformats/esm/src/bytes.js
  var bytes_exports = {};
  __export(bytes_exports, {
    coerce: () => coerce,
    empty: () => empty,
    equals: () => equals2,
    fromHex: () => fromHex,
    fromString: () => fromString,
    isBinary: () => isBinary,
    toHex: () => toHex,
    toString: () => toString
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var empty = new Uint8Array(0);
  var toHex = (d) => d.reduce((hex2, byte) => hex2 + byte.toString(16).padStart(2, "0"), "");
  var fromHex = (hex2) => {
    const hexes4 = hex2.match(/../g);
    return hexes4 ? new Uint8Array(hexes4.map((b) => parseInt(b, 16))) : empty;
  };
  var equals2 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };
  var isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
  var fromString = (str2) => new TextEncoder().encode(str2);
  var toString = (b) => new TextDecoder().decode(b);

  // node_modules/multiformats/esm/src/bases/base.js
  var Encoder = class {
    constructor(name5, prefix, baseEncode) {
      this.name = name5;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes4) {
      if (bytes4 instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes4)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder = class {
    constructor(name5, prefix, baseDecode) {
      this.name = name5;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or(this, decoder);
    }
  };
  var ComposedDecoder = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or = (left, right) => new ComposedDecoder({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec = class {
    constructor(name5, prefix, baseEncode, baseDecode) {
      this.name = name5;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder(name5, prefix, baseEncode);
      this.decoder = new Decoder(name5, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from = ({ name: name5, prefix, encode: encode11, decode: decode10 }) => new Codec(name5, prefix, encode11, decode10);
  var baseX = ({ prefix, name: name5, alphabet: alphabet3 }) => {
    const { encode: encode11, decode: decode10 } = base_x_default(alphabet3, name5);
    return from({
      prefix,
      name: name5,
      encode: encode11,
      decode: (text) => coerce(decode10(text))
    });
  };
  var decode = (string2, alphabet3, bitsPerChar, name5) => {
    const codes = {};
    for (let i = 0; i < alphabet3.length; ++i) {
      codes[alphabet3[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name5} character`);
      }
      buffer = buffer << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode = (data, alphabet3, bitsPerChar) => {
    const pad = alphabet3[alphabet3.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer = buffer << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet3[mask & buffer >> bits];
      }
    }
    if (bits) {
      out += alphabet3[mask & buffer << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc4648 = ({ name: name5, prefix, bitsPerChar, alphabet: alphabet3 }) => {
    return from({
      prefix,
      name: name5,
      encode(input) {
        return encode(input, alphabet3, bitsPerChar);
      },
      decode(input) {
        return decode(input, alphabet3, bitsPerChar, name5);
      }
    });
  };

  // node_modules/multiformats/esm/src/bases/identity.js
  var identity = from({
    prefix: "\0",
    name: "identity",
    encode: (buf) => toString(buf),
    decode: (str2) => fromString(str2)
  });

  // node_modules/multiformats/esm/src/bases/base2.js
  var base2_exports = {};
  __export(base2_exports, {
    base2: () => base2
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base2 = rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });

  // node_modules/multiformats/esm/src/bases/base8.js
  var base8_exports = {};
  __export(base8_exports, {
    base8: () => base8
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base8 = rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });

  // node_modules/multiformats/esm/src/bases/base10.js
  var base10_exports = {};
  __export(base10_exports, {
    base10: () => base10
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base10 = baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });

  // node_modules/multiformats/esm/src/bases/base16.js
  var base16_exports = {};
  __export(base16_exports, {
    base16: () => base16,
    base16upper: () => base16upper
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base16 = rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  });
  var base16upper = rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });

  // node_modules/multiformats/esm/src/bases/base32.js
  var base32_exports = {};
  __export(base32_exports, {
    base32: () => base32,
    base32hex: () => base32hex,
    base32hexpad: () => base32hexpad,
    base32hexpadupper: () => base32hexpadupper,
    base32hexupper: () => base32hexupper,
    base32pad: () => base32pad,
    base32padupper: () => base32padupper,
    base32upper: () => base32upper,
    base32z: () => base32z
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base32 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/multiformats/esm/src/bases/base36.js
  var base36_exports = {};
  __export(base36_exports, {
    base36: () => base36,
    base36upper: () => base36upper
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base36 = baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  });
  var base36upper = baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });

  // node_modules/multiformats/esm/src/bases/base58.js
  var base58_exports = {};
  __export(base58_exports, {
    base58btc: () => base58btc,
    base58flickr: () => base58flickr
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/multiformats/esm/src/bases/base64.js
  var base64_exports = {};
  __export(base64_exports, {
    base64: () => base64,
    base64pad: () => base64pad,
    base64url: () => base64url,
    base64urlpad: () => base64urlpad
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  });
  var base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  });
  var base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  });
  var base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });

  // node_modules/multiformats/esm/src/bases/base256emoji.js
  var base256emoji_exports = {};
  __export(base256emoji_exports, {
    base256emoji: () => base256emoji
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
  var alphabetBytesToChars = alphabet.reduce((p, c, i) => {
    p[i] = c;
    return p;
  }, []);
  var alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
    p[c.codePointAt(0)] = i;
    return p;
  }, []);
  function encode2(data) {
    return data.reduce((p, c) => {
      p += alphabetBytesToChars[c];
      return p;
    }, "");
  }
  function decode2(str2) {
    const byts = [];
    for (const char of str2) {
      const byt = alphabetCharsToBytes[char.codePointAt(0)];
      if (byt === void 0) {
        throw new Error(`Non-base256emoji character: ${char}`);
      }
      byts.push(byt);
    }
    return new Uint8Array(byts);
  }
  var base256emoji = from({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: encode2,
    decode: decode2
  });

  // node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha2_browser_exports = {};
  __export(sha2_browser_exports, {
    sha256: () => sha256,
    sha512: () => sha512
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/hashes/hasher.js
  var hasher_exports = {};
  __export(hasher_exports, {
    Hasher: () => Hasher,
    from: () => from2
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/hashes/digest.js
  var digest_exports = {};
  __export(digest_exports, {
    Digest: () => Digest,
    create: () => create,
    decode: () => decode5,
    equals: () => equals3
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/varint.js
  var varint_exports = {};
  __export(varint_exports, {
    decode: () => decode4,
    encodeTo: () => encodeTo,
    encodingLength: () => encodingLength
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/vendor/varint.js
  init_dirname();
  init_buffer2();
  init_process2();
  var encode_1 = encode3;
  var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
  function encode3(num2, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num2 >= INT) {
      out[offset++] = num2 & 255 | MSB;
      num2 /= 128;
    }
    while (num2 & MSBALL) {
      out[offset++] = num2 & 255 | MSB;
      num2 >>>= 7;
    }
    out[offset] = num2 | 0;
    encode3.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode3 = read;
  var MSB$1 = 128, REST$1 = 127;
  function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
      if (counter >= l) {
        read.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf[counter++];
      res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$1);
    read.bytes = counter - offset;
    return res;
  }
  var N1 = Math.pow(2, 7);
  var N2 = Math.pow(2, 14);
  var N3 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);
  var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
  };
  var varint = {
    encode: encode_1,
    decode: decode3,
    encodingLength: length
  };
  var _brrp_varint = varint;
  var varint_default = _brrp_varint;

  // node_modules/multiformats/esm/src/varint.js
  var decode4 = (data, offset = 0) => {
    const code5 = varint_default.decode(data, offset);
    return [
      code5,
      varint_default.decode.bytes
    ];
  };
  var encodeTo = (int, target, offset = 0) => {
    varint_default.encode(int, target, offset);
    return target;
  };
  var encodingLength = (int) => {
    return varint_default.encodingLength(int);
  };

  // node_modules/multiformats/esm/src/hashes/digest.js
  var create = (code5, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength(code5);
    const digestOffset = sizeOffset + encodingLength(size);
    const bytes4 = new Uint8Array(digestOffset + size);
    encodeTo(code5, bytes4, 0);
    encodeTo(size, bytes4, sizeOffset);
    bytes4.set(digest2, digestOffset);
    return new Digest(code5, size, digest2, bytes4);
  };
  var decode5 = (multihash) => {
    const bytes4 = coerce(multihash);
    const [code5, sizeOffset] = decode4(bytes4);
    const [size, digestOffset] = decode4(bytes4.subarray(sizeOffset));
    const digest2 = bytes4.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest(code5, size, digest2, bytes4);
  };
  var equals3 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals2(a.bytes, b.bytes);
    }
  };
  var Digest = class {
    constructor(code5, size, digest2, bytes4) {
      this.code = code5;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes4;
    }
  };

  // node_modules/multiformats/esm/src/hashes/hasher.js
  var from2 = ({ name: name5, code: code5, encode: encode11 }) => new Hasher(name5, code5, encode11);
  var Hasher = class {
    constructor(name5, code5, encode11) {
      this.name = name5;
      this.code = code5;
      this.encode = encode11;
    }
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha = (name5) => async (data) => new Uint8Array(await crypto.subtle.digest(name5, data));
  var sha256 = from2({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
  });
  var sha512 = from2({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
  });

  // node_modules/multiformats/esm/src/hashes/identity.js
  var identity_exports2 = {};
  __export(identity_exports2, {
    identity: () => identity2
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var code = 0;
  var name = "identity";
  var encode4 = coerce;
  var digest = (input) => create(code, encode4(input));
  var identity2 = {
    code,
    name,
    encode: encode4,
    digest
  };

  // node_modules/multiformats/esm/src/codecs/raw.js
  var raw_exports = {};
  __export(raw_exports, {
    code: () => code2,
    decode: () => decode6,
    encode: () => encode5,
    name: () => name2
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var name2 = "raw";
  var code2 = 85;
  var encode5 = (node) => coerce(node);
  var decode6 = (data) => coerce(data);

  // node_modules/multiformats/esm/src/codecs/json.js
  var json_exports = {};
  __export(json_exports, {
    code: () => code3,
    decode: () => decode7,
    encode: () => encode6,
    name: () => name3
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var textEncoder = new TextEncoder();
  var textDecoder = new TextDecoder();
  var name3 = "json";
  var code3 = 512;
  var encode6 = (node) => textEncoder.encode(JSON.stringify(node));
  var decode7 = (data) => JSON.parse(textDecoder.decode(data));

  // node_modules/multiformats/esm/src/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/multiformats/esm/src/cid.js
  init_dirname();
  init_buffer2();
  init_process2();
  var CID = class _CID {
    constructor(version3, code5, multihash, bytes4) {
      this.code = code5;
      this.version = version3;
      this.multihash = multihash;
      this.bytes = bytes4;
      this.byteOffset = bytes4.byteOffset;
      this.byteLength = bytes4.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden,
        byteLength: hidden,
        code: readonly,
        version: readonly,
        multihash: readonly,
        bytes: readonly,
        _baseCache: hidden,
        asCID: hidden
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code5, multihash } = this;
          if (code5 !== DAG_PB_CODE) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code5, digest: digest2 } = this.multihash;
          const multihash = create(code5, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals3(this.multihash, other.multihash);
    }
    toString(base3) {
      const { bytes: bytes4, version: version3, _baseCache } = this;
      switch (version3) {
        case 0:
          return toStringV0(bytes4, _baseCache, base3 || base58btc.encoder);
        default:
          return toStringV1(bytes4, _baseCache, base3 || base32.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate(/^0\.0/, IS_CID_DEPRECATION);
      return !!(value && (value[cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version3, code: code5, multihash, bytes: bytes4 } = value;
        return new _CID(version3, code5, multihash, bytes4 || encodeCID(version3, code5, multihash.bytes));
      } else if (value != null && value[cidSymbol] === true) {
        const { version: version3, multihash, code: code5 } = value;
        const digest2 = decode5(multihash);
        return _CID.create(version3, code5, digest2);
      } else {
        return null;
      }
    }
    static create(version3, code5, digest2) {
      if (typeof code5 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version3) {
        case 0: {
          if (code5 !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
          } else {
            return new _CID(version3, code5, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes4 = encodeCID(version3, code5, digest2.bytes);
          return new _CID(version3, code5, digest2, bytes4);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE, digest2);
    }
    static createV1(code5, digest2) {
      return _CID.create(1, code5, digest2);
    }
    static decode(bytes4) {
      const [cid, remainder] = _CID.decodeFirst(bytes4);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes4) {
      const specs = _CID.inspectBytes(bytes4);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce(bytes4.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes4.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length2] = decode4(initialBytes.subarray(offset));
        offset += length2;
        return i;
      };
      let version3 = next();
      let codec = DAG_PB_CODE;
      if (version3 === 18) {
        version3 = 0;
        offset = 0;
      } else if (version3 === 1) {
        codec = next();
      }
      if (version3 !== 0 && version3 !== 1) {
        throw new RangeError(`Invalid CID version ${version3}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version3,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base3) {
      const [prefix, bytes4] = parseCIDtoBytes(source, base3);
      const cid = _CID.decode(bytes4);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes = (source, base3) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base3 || base58btc;
        return [
          base58btc.prefix,
          decoder.decode(`${base58btc.prefix}${source}`)
        ];
      }
      case base58btc.prefix: {
        const decoder = base3 || base58btc;
        return [
          base58btc.prefix,
          decoder.decode(source)
        ];
      }
      case base32.prefix: {
        const decoder = base3 || base32;
        return [
          base32.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base3 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base3.decode(source)
        ];
      }
    }
  };
  var toStringV0 = (bytes4, cache, base3) => {
    const { prefix } = base3;
    if (prefix !== base58btc.prefix) {
      throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
    }
    const cid = cache.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes4).slice(1);
      cache.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV1 = (bytes4, cache, base3) => {
    const { prefix } = base3;
    const cid = cache.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes4);
      cache.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE = 112;
  var SHA_256_CODE = 18;
  var encodeCID = (version3, code5, multihash) => {
    const codeOffset = encodingLength(version3);
    const hashOffset = codeOffset + encodingLength(code5);
    const bytes4 = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version3, bytes4, 0);
    encodeTo(code5, bytes4, codeOffset);
    bytes4.set(multihash, hashOffset);
    return bytes4;
  };
  var cidSymbol = Symbol.for("@ipld/js-cid/CID");
  var readonly = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version2 = "0.0.0-dev";
  var deprecate = (range, message) => {
    if (range.test(version2)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/multiformats/esm/src/basics.js
  var bases = {
    ...identity_exports,
    ...base2_exports,
    ...base8_exports,
    ...base10_exports,
    ...base16_exports,
    ...base32_exports,
    ...base36_exports,
    ...base58_exports,
    ...base64_exports,
    ...base256emoji_exports
  };
  var hashes = {
    ...sha2_browser_exports,
    ...identity_exports2
  };
  var codecs = {
    raw: raw_exports,
    json: json_exports
  };

  // node_modules/uint8arrays/esm/src/util/bases.js
  function createCodec(name5, prefix, encode11, decode10) {
    return {
      name: name5,
      prefix,
      encoder: {
        name: name5,
        prefix,
        encode: encode11
      },
      decoder: { decode: decode10 }
    };
  }
  var string = createCodec("utf8", "u", (buf) => {
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
  }, (str2) => {
    const encoder = new TextEncoder();
    return encoder.encode(str2.substring(1));
  });
  var ascii = createCodec("ascii", "a", (buf) => {
    let string2 = "a";
    for (let i = 0; i < buf.length; i++) {
      string2 += String.fromCharCode(buf[i]);
    }
    return string2;
  }, (str2) => {
    str2 = str2.substring(1);
    const buf = allocUnsafe(str2.length);
    for (let i = 0; i < str2.length; i++) {
      buf[i] = str2.charCodeAt(i);
    }
    return buf;
  });
  var BASES = {
    utf8: string,
    "utf-8": string,
    hex: bases.base16,
    latin1: ascii,
    ascii,
    binary: ascii,
    ...bases
  };
  var bases_default = BASES;

  // node_modules/uint8arrays/esm/src/from-string.js
  function fromString2(string2, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
    }
    return base3.decoder.decode(`${base3.prefix}${string2}`);
  }

  // node_modules/uint8arrays/esm/src/to-string.js
  init_dirname();
  init_buffer2();
  init_process2();
  function toString2(array, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    }
    return base3.encoder.encode(array).substring(1);
  }

  // node_modules/uint8arrays/esm/src/xor.js
  init_dirname();
  init_buffer2();
  init_process2();
  function xor(a, b) {
    if (a.length !== b.length) {
      throw new Error("Inputs should have the same length");
    }
    const result = allocUnsafe(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = a[i] ^ b[i];
    }
    return asUint8Array(result);
  }

  // node_modules/@noble/curves/esm/ed25519.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/sha512.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/_md.js
  init_dirname();
  init_buffer2();
  init_process2();
  function setBigUint64(view, byteOffset, value, isLE3) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE3);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE3 ? 4 : 0;
    const l = isLE3 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE3);
    view.setUint32(byteOffset + l, wl, isLE3);
  }
  var Chi = (a, b, c) => a & b ^ ~a & c;
  var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
  var HashMD = class extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE3) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE3;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE3 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE3);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE3);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length: length2, finished, destroyed, pos } = this;
      to.length = length2;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length2 % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  };

  // node_modules/@noble/hashes/esm/sha512.js
  var [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n) => BigInt(n))))();
  var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  var SHA512 = class extends HashMD {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4) {
        SHA512_W_H[i] = view.getUint32(offset);
        SHA512_W_L[i] = view.getUint32(offset += 4);
      }
      for (let i = 16; i < 80; i++) {
        const W15h = SHA512_W_H[i - 15] | 0;
        const W15l = SHA512_W_L[i - 15] | 0;
        const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
        const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i - 2] | 0;
        const W2l = SHA512_W_L[i - 2] | 0;
        const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
        const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
        const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
        const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
        SHA512_W_H[i] = SUMh | 0;
        SHA512_W_L[i] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i = 0; i < 80; i++) {
        const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
        const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
        const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
        const T1l = T1ll | 0;
        const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
        const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64_default.add3L(T1l, sigma0l, MAJl);
        Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  var SHA512_224 = class extends SHA512 {
    constructor() {
      super();
      this.Ah = 2352822216 | 0;
      this.Al = 424955298 | 0;
      this.Bh = 1944164710 | 0;
      this.Bl = 2312950998 | 0;
      this.Ch = 502970286 | 0;
      this.Cl = 855612546 | 0;
      this.Dh = 1738396948 | 0;
      this.Dl = 1479516111 | 0;
      this.Eh = 258812777 | 0;
      this.El = 2077511080 | 0;
      this.Fh = 2011393907 | 0;
      this.Fl = 79989058 | 0;
      this.Gh = 1067287976 | 0;
      this.Gl = 1780299464 | 0;
      this.Hh = 286451373 | 0;
      this.Hl = 2446758561 | 0;
      this.outputLen = 28;
    }
  };
  var SHA512_256 = class extends SHA512 {
    constructor() {
      super();
      this.Ah = 573645204 | 0;
      this.Al = 4230739756 | 0;
      this.Bh = 2673172387 | 0;
      this.Bl = 3360449730 | 0;
      this.Ch = 596883563 | 0;
      this.Cl = 1867755857 | 0;
      this.Dh = 2520282905 | 0;
      this.Dl = 1497426621 | 0;
      this.Eh = 2519219938 | 0;
      this.El = 2827943907 | 0;
      this.Fh = 3193839141 | 0;
      this.Fl = 1401305490 | 0;
      this.Gh = 721525244 | 0;
      this.Gl = 746961066 | 0;
      this.Hh = 246885852 | 0;
      this.Hl = 2177182882 | 0;
      this.outputLen = 32;
    }
  };
  var SHA384 = class extends SHA512 {
    constructor() {
      super();
      this.Ah = 3418070365 | 0;
      this.Al = 3238371032 | 0;
      this.Bh = 1654270250 | 0;
      this.Bl = 914150663 | 0;
      this.Ch = 2438529370 | 0;
      this.Cl = 812702999 | 0;
      this.Dh = 355462360 | 0;
      this.Dl = 4144912697 | 0;
      this.Eh = 1731405415 | 0;
      this.El = 4290775857 | 0;
      this.Fh = 2394180231 | 0;
      this.Fl = 1750603025 | 0;
      this.Gh = 3675008525 | 0;
      this.Gl = 1694076839 | 0;
      this.Hh = 1203062813 | 0;
      this.Hl = 3204075428 | 0;
      this.outputLen = 48;
    }
  };
  var sha5122 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
  var sha512_224 = /* @__PURE__ */ wrapConstructor(() => new SHA512_224());
  var sha512_256 = /* @__PURE__ */ wrapConstructor(() => new SHA512_256());
  var sha384 = /* @__PURE__ */ wrapConstructor(() => new SHA384());

  // node_modules/@noble/curves/esm/abstract/edwards.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/curves/esm/abstract/curve.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/curves/esm/abstract/modular.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/curves/esm/abstract/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    aInRange: () => aInRange,
    abool: () => abool,
    abytes: () => abytes,
    bitGet: () => bitGet,
    bitLen: () => bitLen,
    bitMask: () => bitMask,
    bitSet: () => bitSet,
    bytesToHex: () => bytesToHex2,
    bytesToNumberBE: () => bytesToNumberBE,
    bytesToNumberLE: () => bytesToNumberLE,
    concatBytes: () => concatBytes2,
    createHmacDrbg: () => createHmacDrbg,
    ensureBytes: () => ensureBytes,
    equalBytes: () => equalBytes,
    hexToBytes: () => hexToBytes2,
    hexToNumber: () => hexToNumber,
    inRange: () => inRange,
    isBytes: () => isBytes3,
    memoized: () => memoized,
    notImplemented: () => notImplemented,
    numberToBytesBE: () => numberToBytesBE,
    numberToBytesLE: () => numberToBytesLE,
    numberToHexUnpadded: () => numberToHexUnpadded,
    numberToVarBytesBE: () => numberToVarBytesBE,
    utf8ToBytes: () => utf8ToBytes2,
    validateObject: () => validateObject
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var _0n2 = /* @__PURE__ */ BigInt(0);
  var _1n2 = /* @__PURE__ */ BigInt(1);
  var _2n2 = /* @__PURE__ */ BigInt(2);
  function isBytes3(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function abytes(item) {
    if (!isBytes3(item))
      throw new Error("Uint8Array expected");
  }
  function abool(title2, value) {
    if (typeof value !== "boolean")
      throw new Error(`${title2} must be valid boolean, got "${value}".`);
  }
  var hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex2(bytes4) {
    abytes(bytes4);
    let hex2 = "";
    for (let i = 0; i < bytes4.length; i++) {
      hex2 += hexes2[bytes4[i]];
    }
    return hex2;
  }
  function numberToHexUnpadded(num2) {
    const hex2 = num2.toString(16);
    return hex2.length & 1 ? `0${hex2}` : hex2;
  }
  function hexToNumber(hex2) {
    if (typeof hex2 !== "string")
      throw new Error("hex string expected, got " + typeof hex2);
    return BigInt(hex2 === "" ? "0" : `0x${hex2}`);
  }
  var asciis2 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase162(char) {
    if (char >= asciis2._0 && char <= asciis2._9)
      return char - asciis2._0;
    if (char >= asciis2._A && char <= asciis2._F)
      return char - (asciis2._A - 10);
    if (char >= asciis2._a && char <= asciis2._f)
      return char - (asciis2._a - 10);
    return;
  }
  function hexToBytes2(hex2) {
    if (typeof hex2 !== "string")
      throw new Error("hex string expected, got " + typeof hex2);
    const hl = hex2.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase162(hex2.charCodeAt(hi));
      const n2 = asciiToBase162(hex2.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex2[hi] + hex2[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function bytesToNumberBE(bytes4) {
    return hexToNumber(bytesToHex2(bytes4));
  }
  function bytesToNumberLE(bytes4) {
    abytes(bytes4);
    return hexToNumber(bytesToHex2(Uint8Array.from(bytes4).reverse()));
  }
  function numberToBytesBE(n, len) {
    return hexToBytes2(n.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
  }
  function numberToVarBytesBE(n) {
    return hexToBytes2(numberToHexUnpadded(n));
  }
  function ensureBytes(title2, hex2, expectedLength) {
    let res;
    if (typeof hex2 === "string") {
      try {
        res = hexToBytes2(hex2);
      } catch (e) {
        throw new Error(`${title2} must be valid hex string, got "${hex2}". Cause: ${e}`);
      }
    } else if (isBytes3(hex2)) {
      res = Uint8Array.from(hex2);
    } else {
      throw new Error(`${title2} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(`${title2} expected ${expectedLength} bytes, got ${len}`);
    return res;
  }
  function concatBytes2(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      abytes(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  function equalBytes(a, b) {
    if (a.length !== b.length)
      return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
      diff |= a[i] ^ b[i];
    return diff === 0;
  }
  function utf8ToBytes2(str2) {
    if (typeof str2 !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
    return new Uint8Array(new TextEncoder().encode(str2));
  }
  var isPosBig = (n) => typeof n === "bigint" && _0n2 <= n;
  function inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
  }
  function aInRange(title2, n, min, max) {
    if (!inRange(n, min, max))
      throw new Error(`expected valid ${title2}: ${min} <= n < ${max}, got ${typeof n} ${n}`);
  }
  function bitLen(n) {
    let len;
    for (len = 0; n > _0n2; n >>= _1n2, len += 1)
      ;
    return len;
  }
  function bitGet(n, pos) {
    return n >> BigInt(pos) & _1n2;
  }
  function bitSet(n, pos, value) {
    return n | (value ? _1n2 : _0n2) << BigInt(pos);
  }
  var bitMask = (n) => (_2n2 << BigInt(n - 1)) - _1n2;
  var u8n = (data) => new Uint8Array(data);
  var u8fr = (arr) => Uint8Array.from(arr);
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v = u8n(hashLen);
    let k = u8n(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b);
    const reseed = (seed = u8n()) => {
      k = h(u8fr([0]), seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(u8fr([1]), seed);
      v = h();
    };
    const gen2 = () => {
      if (i++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes2(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  var validatorFns = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || isBytes3(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject(object, validators3, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
      const checkVal = validatorFns[type];
      if (typeof checkVal !== "function")
        throw new Error(`Invalid validator "${type}", expected function`);
      const val = object[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object)) {
        throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
      }
    };
    for (const [fieldName, type] of Object.entries(validators3))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object;
  }
  var notImplemented = () => {
    throw new Error("not implemented");
  };
  function memoized(fn) {
    const map = /* @__PURE__ */ new WeakMap();
    return (arg, ...args) => {
      const val = map.get(arg);
      if (val !== void 0)
        return val;
      const computed = fn(arg, ...args);
      map.set(arg, computed);
      return computed;
    };
  }

  // node_modules/@noble/curves/esm/abstract/modular.js
  var _0n3 = BigInt(0), _1n3 = BigInt(1), _2n3 = BigInt(2), _3n = BigInt(3);
  var _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
  var _9n = BigInt(9), _16n = BigInt(16);
  function mod(a, b) {
    const result = a % b;
    return result >= _0n3 ? result : b + result;
  }
  function pow(num2, power, modulo) {
    if (modulo <= _0n3 || power < _0n3)
      throw new Error("Expected power/modulo > 0");
    if (modulo === _1n3)
      return _0n3;
    let res = _1n3;
    while (power > _0n3) {
      if (power & _1n3)
        res = res * num2 % modulo;
      num2 = num2 * num2 % modulo;
      power >>= _1n3;
    }
    return res;
  }
  function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n3) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert(number3, modulo) {
    if (number3 === _0n3 || modulo <= _0n3) {
      throw new Error(`invert: expected positive integers, got n=${number3} mod=${modulo}`);
    }
    let a = mod(number3, modulo);
    let b = modulo;
    let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
    while (a !== _0n3) {
      const q = b / a;
      const r = b % a;
      const m = x - u * q;
      const n = y - v * q;
      b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd2 = b;
    if (gcd2 !== _1n3)
      throw new Error("invert: does not exist");
    return mod(x, modulo);
  }
  function tonelliShanks(P) {
    const legendreC = (P - _1n3) / _2n3;
    let Q, S, Z;
    for (Q = P - _1n3, S = 0; Q % _2n3 === _0n3; Q /= _2n3, S++)
      ;
    for (Z = _2n3; Z < P && pow(Z, legendreC, P) !== P - _1n3; Z++)
      ;
    if (S === 1) {
      const p1div4 = (P + _1n3) / _4n;
      return function tonelliFast(Fp4, n) {
        const root = Fp4.pow(n, p1div4);
        if (!Fp4.eql(Fp4.sqr(root), n))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q + _1n3) / _2n3;
    return function tonelliSlow(Fp4, n) {
      if (Fp4.pow(n, legendreC) === Fp4.neg(Fp4.ONE))
        throw new Error("Cannot find square root");
      let r = S;
      let g = Fp4.pow(Fp4.mul(Fp4.ONE, Z), Q);
      let x = Fp4.pow(n, Q1div2);
      let b = Fp4.pow(n, Q);
      while (!Fp4.eql(b, Fp4.ONE)) {
        if (Fp4.eql(b, Fp4.ZERO))
          return Fp4.ZERO;
        let m = 1;
        for (let t2 = Fp4.sqr(b); m < r; m++) {
          if (Fp4.eql(t2, Fp4.ONE))
            break;
          t2 = Fp4.sqr(t2);
        }
        const ge = Fp4.pow(g, _1n3 << BigInt(r - m - 1));
        g = Fp4.sqr(ge);
        x = Fp4.mul(x, ge);
        b = Fp4.mul(b, g);
        r = m;
      }
      return x;
    };
  }
  function FpSqrt(P) {
    if (P % _4n === _3n) {
      const p1div4 = (P + _1n3) / _4n;
      return function sqrt3mod4(Fp4, n) {
        const root = Fp4.pow(n, p1div4);
        if (!Fp4.eql(Fp4.sqr(root), n))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _8n === _5n) {
      const c1 = (P - _5n) / _8n;
      return function sqrt5mod8(Fp4, n) {
        const n2 = Fp4.mul(n, _2n3);
        const v = Fp4.pow(n2, c1);
        const nv = Fp4.mul(n, v);
        const i = Fp4.mul(Fp4.mul(nv, _2n3), v);
        const root = Fp4.mul(nv, Fp4.sub(i, Fp4.ONE));
        if (!Fp4.eql(Fp4.sqr(root), n))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _16n === _9n) {
    }
    return tonelliShanks(P);
  }
  var isNegativeLE = (num2, modulo) => (mod(num2, modulo) & _1n3) === _1n3;
  var FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  function FpPow(f2, num2, power) {
    if (power < _0n3)
      throw new Error("Expected power > 0");
    if (power === _0n3)
      return f2.ONE;
    if (power === _1n3)
      return num2;
    let p = f2.ONE;
    let d = num2;
    while (power > _0n3) {
      if (power & _1n3)
        p = f2.mul(p, d);
      d = f2.sqr(d);
      power >>= _1n3;
    }
    return p;
  }
  function FpInvertBatch(f2, nums) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num2, i) => {
      if (f2.is0(num2))
        return acc;
      tmp[i] = acc;
      return f2.mul(acc, num2);
    }, f2.ONE);
    const inverted = f2.inv(lastMultiplied);
    nums.reduceRight((acc, num2, i) => {
      if (f2.is0(num2))
        return acc;
      tmp[i] = f2.mul(acc, tmp[i]);
      return f2.mul(acc, num2);
    }, inverted);
    return tmp;
  }
  function FpDiv(f2, lhs, rhs) {
    return f2.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f2.ORDER) : f2.inv(rhs));
  }
  function FpLegendre(order) {
    const legendreConst = (order - _1n3) / _2n3;
    return (f2, x) => f2.pow(x, legendreConst);
  }
  function FpIsSquare(f2) {
    const legendre = FpLegendre(f2.ORDER);
    return (x) => {
      const p = legendre(f2, x);
      return f2.eql(p, f2.ZERO) || f2.eql(p, f2.ONE);
    };
  }
  function nLength(n, nBitLength) {
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLen2, isLE3 = false, redef = {}) {
    if (ORDER <= _0n3)
      throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
    if (BYTES > 2048)
      throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f2 = Object.freeze({
      ORDER,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n3,
      ONE: _1n3,
      create: (num2) => mod(num2, ORDER),
      isValid: (num2) => {
        if (typeof num2 !== "bigint")
          throw new Error(`Invalid field element: expected bigint, got ${typeof num2}`);
        return _0n3 <= num2 && num2 < ORDER;
      },
      is0: (num2) => num2 === _0n3,
      isOdd: (num2) => (num2 & _1n3) === _1n3,
      neg: (num2) => mod(-num2, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num2) => mod(num2 * num2, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num2, power) => FpPow(f2, num2, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num2) => num2 * num2,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num2) => invert(num2, ORDER),
      sqrt: redef.sqrt || ((n) => sqrtP(f2, n)),
      invertBatch: (lst) => FpInvertBatch(f2, lst),
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (a, b, c) => c ? b : a,
      toBytes: (num2) => isLE3 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
      fromBytes: (bytes4) => {
        if (bytes4.length !== BYTES)
          throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes4.length}`);
        return isLE3 ? bytesToNumberLE(bytes4) : bytesToNumberBE(bytes4);
      }
    });
    return Object.freeze(f2);
  }
  function FpSqrtOdd(Fp4, elm) {
    if (!Fp4.isOdd)
      throw new Error(`Field doesn't have isOdd`);
    const root = Fp4.sqrt(elm);
    return Fp4.isOdd(root) ? root : Fp4.neg(root);
  }
  function FpSqrtEven(Fp4, elm) {
    if (!Fp4.isOdd)
      throw new Error(`Field doesn't have isOdd`);
    const root = Fp4.sqrt(elm);
    return Fp4.isOdd(root) ? Fp4.neg(root) : root;
  }
  function hashToPrivateScalar(hash3, groupOrder, isLE3 = false) {
    hash3 = ensureBytes("privateHash", hash3);
    const hashLen = hash3.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
      throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num2 = isLE3 ? bytesToNumberLE(hash3) : bytesToNumberBE(hash3);
    return mod(num2, groupOrder - _1n3) + _1n3;
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length2 = getFieldBytesLength(fieldOrder);
    return length2 + Math.ceil(length2 / 2);
  }
  function mapHashToField(key, fieldOrder, isLE3 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num2 = isLE3 ? bytesToNumberBE(key) : bytesToNumberLE(key);
    const reduced = mod(num2, fieldOrder - _1n3) + _1n3;
    return isLE3 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }

  // node_modules/@noble/curves/esm/abstract/curve.js
  var _0n4 = BigInt(0);
  var _1n4 = BigInt(1);
  var pointPrecomputes = /* @__PURE__ */ new WeakMap();
  var pointWindowSizes = /* @__PURE__ */ new WeakMap();
  function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
      const neg = item.negate();
      return condition ? neg : item;
    };
    const validateW = (W) => {
      if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
        throw new Error(`Wrong window size=${W}, should be [1..${bits}]`);
    };
    const opts = (W) => {
      validateW(W);
      const windows = Math.ceil(bits / W) + 1;
      const windowSize = 2 ** (W - 1);
      return { windows, windowSize };
    };
    return {
      constTimeNegate,
      // non-const time multiplication ladder
      unsafeLadder(elm, n) {
        let p = c.ZERO;
        let d = elm;
        while (n > _0n4) {
          if (n & _1n4)
            p = p.add(d);
          d = d.double();
          n >>= _1n4;
        }
        return p;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W) {
        const { windows, windowSize } = opts(W);
        const points = [];
        let p = elm;
        let base3 = p;
        for (let window2 = 0; window2 < windows; window2++) {
          base3 = p;
          points.push(base3);
          for (let i = 1; i < windowSize; i++) {
            base3 = base3.add(p);
            points.push(base3);
          }
          p = base3.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W, precomputes, n) {
        const { windows, windowSize } = opts(W);
        let p = c.ZERO;
        let f2 = c.BASE;
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window2 = 0; window2 < windows; window2++) {
          const offset = window2 * windowSize;
          let wbits = Number(n & mask);
          n >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n += _1n4;
          }
          const offset1 = offset;
          const offset2 = offset + Math.abs(wbits) - 1;
          const cond1 = window2 % 2 !== 0;
          const cond2 = wbits < 0;
          if (wbits === 0) {
            f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
          } else {
            p = p.add(constTimeNegate(cond2, precomputes[offset2]));
          }
        }
        return { p, f: f2 };
      },
      wNAFCached(P, n, transform) {
        const W = pointWindowSizes.get(P) || 1;
        let comp = pointPrecomputes.get(P);
        if (!comp) {
          comp = this.precomputeWindow(P, W);
          if (W !== 1)
            pointPrecomputes.set(P, transform(comp));
        }
        return this.wNAF(W, comp, n);
      },
      // We calculate precomputes for elliptic curve point multiplication
      // using windowed method. This specifies window size and
      // stores precomputed values. Usually only base point would be precomputed.
      setWindowSize(P, W) {
        validateW(W);
        pointWindowSizes.set(P, W);
        pointPrecomputes.delete(P);
      }
    };
  }
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }

  // node_modules/@noble/curves/esm/abstract/edwards.js
  var _0n5 = BigInt(0), _1n5 = BigInt(1), _2n4 = BigInt(2), _8n2 = BigInt(8);
  var VERIFY_DEFAULT = { zip215: true };
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(curve, {
      hash: "function",
      a: "bigint",
      d: "bigint",
      randomBytes: "function"
    }, {
      adjustScalarBytes: "function",
      domain: "function",
      uvRatio: "function",
      mapToCurve: "function"
    });
    return Object.freeze({ ...opts });
  }
  function twistedEdwards(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp: Fp4, n: CURVE_ORDER, prehash, hash: cHash, randomBytes: randomBytes2, nByteLength, h: cofactor } = CURVE;
    const MASK = _2n4 << BigInt(nByteLength * 8) - _1n5;
    const modP2 = Fp4.create;
    const uvRatio2 = CURVE.uvRatio || ((u, v) => {
      try {
        return { isValid: true, value: Fp4.sqrt(u * Fp4.inv(v)) };
      } catch (e) {
        return { isValid: false, value: _0n5 };
      }
    });
    const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes4) => bytes4);
    const domain2 = CURVE.domain || ((data, ctx, phflag) => {
      abool("phflag", phflag);
      if (ctx.length || phflag)
        throw new Error("Contexts/pre-hash are not supported");
      return data;
    });
    function aCoordinate(title2, n) {
      aInRange("coordinate " + title2, n, _0n5, MASK);
    }
    function assertPoint(other) {
      if (!(other instanceof Point2))
        throw new Error("ExtendedPoint expected");
    }
    const toAffineMemo = memoized((p, iz) => {
      const { ex: x, ey: y, ez: z } = p;
      const is0 = p.is0();
      if (iz == null)
        iz = is0 ? _8n2 : Fp4.inv(z);
      const ax = modP2(x * iz);
      const ay = modP2(y * iz);
      const zz = modP2(z * iz);
      if (is0)
        return { x: _0n5, y: _1n5 };
      if (zz !== _1n5)
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    });
    const assertValidMemo = memoized((p) => {
      const { a, d } = CURVE;
      if (p.is0())
        throw new Error("bad point: ZERO");
      const { ex: X, ey: Y, ez: Z, et: T } = p;
      const X2 = modP2(X * X);
      const Y2 = modP2(Y * Y);
      const Z2 = modP2(Z * Z);
      const Z4 = modP2(Z2 * Z2);
      const aX2 = modP2(X2 * a);
      const left = modP2(Z2 * modP2(aX2 + Y2));
      const right = modP2(Z4 + modP2(d * modP2(X2 * Y2)));
      if (left !== right)
        throw new Error("bad point: equation left != right (1)");
      const XY = modP2(X * Y);
      const ZT = modP2(Z * T);
      if (XY !== ZT)
        throw new Error("bad point: equation left != right (2)");
      return true;
    });
    class Point2 {
      constructor(ex, ey, ez, et) {
        this.ex = ex;
        this.ey = ey;
        this.ez = ez;
        this.et = et;
        aCoordinate("x", ex);
        aCoordinate("y", ey);
        aCoordinate("z", ez);
        aCoordinate("t", et);
        Object.freeze(this);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static fromAffine(p) {
        if (p instanceof Point2)
          throw new Error("extended point not allowed");
        const { x, y } = p || {};
        aCoordinate("x", x);
        aCoordinate("y", y);
        return new Point2(x, y, _1n5, modP2(x * y));
      }
      static normalizeZ(points) {
        const toInv = Fp4.invertBatch(points.map((p) => p.ez));
        return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        wnaf.setWindowSize(this, windowSize);
      }
      // Not required for fromHex(), which always creates valid points.
      // Could be useful for fromAffine().
      assertValidity() {
        assertValidMemo(this);
      }
      // Compare one point to another.
      equals(other) {
        assertPoint(other);
        const { ex: X1, ey: Y1, ez: Z1 } = this;
        const { ex: X2, ey: Y2, ez: Z2 } = other;
        const X1Z2 = modP2(X1 * Z2);
        const X2Z1 = modP2(X2 * Z1);
        const Y1Z2 = modP2(Y1 * Z2);
        const Y2Z1 = modP2(Y2 * Z1);
        return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
      }
      is0() {
        return this.equals(Point2.ZERO);
      }
      negate() {
        return new Point2(modP2(-this.ex), this.ey, this.ez, modP2(-this.et));
      }
      // Fast algo for doubling Extended Point.
      // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
      // Cost: 4M + 4S + 1*a + 6add + 1*2.
      double() {
        const { a } = CURVE;
        const { ex: X1, ey: Y1, ez: Z1 } = this;
        const A = modP2(X1 * X1);
        const B = modP2(Y1 * Y1);
        const C = modP2(_2n4 * modP2(Z1 * Z1));
        const D = modP2(a * A);
        const x1y1 = X1 + Y1;
        const E = modP2(modP2(x1y1 * x1y1) - A - B);
        const G2 = D + B;
        const F = G2 - C;
        const H = D - B;
        const X3 = modP2(E * F);
        const Y3 = modP2(G2 * H);
        const T3 = modP2(E * H);
        const Z3 = modP2(F * G2);
        return new Point2(X3, Y3, Z3, T3);
      }
      // Fast algo for adding 2 Extended Points.
      // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
      // Cost: 9M + 1*a + 1*d + 7add.
      add(other) {
        assertPoint(other);
        const { a, d } = CURVE;
        const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
        const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
        if (a === BigInt(-1)) {
          const A2 = modP2((Y1 - X1) * (Y2 + X2));
          const B2 = modP2((Y1 + X1) * (Y2 - X2));
          const F2 = modP2(B2 - A2);
          if (F2 === _0n5)
            return this.double();
          const C2 = modP2(Z1 * _2n4 * T2);
          const D2 = modP2(T1 * _2n4 * Z2);
          const E2 = D2 + C2;
          const G3 = B2 + A2;
          const H2 = D2 - C2;
          const X32 = modP2(E2 * F2);
          const Y32 = modP2(G3 * H2);
          const T32 = modP2(E2 * H2);
          const Z32 = modP2(F2 * G3);
          return new Point2(X32, Y32, Z32, T32);
        }
        const A = modP2(X1 * X2);
        const B = modP2(Y1 * Y2);
        const C = modP2(T1 * d * T2);
        const D = modP2(Z1 * Z2);
        const E = modP2((X1 + Y1) * (X2 + Y2) - A - B);
        const F = D - C;
        const G2 = D + C;
        const H = modP2(B - a * A);
        const X3 = modP2(E * F);
        const Y3 = modP2(G2 * H);
        const T3 = modP2(E * H);
        const Z3 = modP2(F * G2);
        return new Point2(X3, Y3, Z3, T3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      wNAF(n) {
        return wnaf.wNAFCached(this, n, Point2.normalizeZ);
      }
      // Constant-time multiplication.
      multiply(scalar) {
        const n = scalar;
        aInRange("scalar", n, _1n5, CURVE_ORDER);
        const { p, f: f2 } = this.wNAF(n);
        return Point2.normalizeZ([p, f2])[0];
      }
      // Non-constant-time multiplication. Uses double-and-add algorithm.
      // It's faster, but should only be used when you don't care about
      // an exposed private key e.g. sig verification.
      // Does NOT allow scalars higher than CURVE.n.
      multiplyUnsafe(scalar) {
        const n = scalar;
        aInRange("scalar", n, _0n5, CURVE_ORDER);
        if (n === _0n5)
          return I;
        if (this.equals(I) || n === _1n5)
          return this;
        if (this.equals(G))
          return this.wNAF(n).p;
        return wnaf.unsafeLadder(this, n);
      }
      // Checks if point is of small order.
      // If you add something to small order point, you will have "dirty"
      // point with torsion component.
      // Multiplies point by cofactor and checks if the result is 0.
      isSmallOrder() {
        return this.multiplyUnsafe(cofactor).is0();
      }
      // Multiplies point by curve order and checks if the result is 0.
      // Returns `false` is the point is dirty.
      isTorsionFree() {
        return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
      }
      // Converts Extended point to default (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      toAffine(iz) {
        return toAffineMemo(this, iz);
      }
      clearCofactor() {
        const { h: cofactor2 } = CURVE;
        if (cofactor2 === _1n5)
          return this;
        return this.multiplyUnsafe(cofactor2);
      }
      // Converts hash string or Uint8Array to Point.
      // Uses algo from RFC8032 5.1.3.
      static fromHex(hex2, zip215 = false) {
        const { d, a } = CURVE;
        const len = Fp4.BYTES;
        hex2 = ensureBytes("pointHex", hex2, len);
        abool("zip215", zip215);
        const normed = hex2.slice();
        const lastByte = hex2[len - 1];
        normed[len - 1] = lastByte & ~128;
        const y = bytesToNumberLE(normed);
        const max = zip215 ? MASK : Fp4.ORDER;
        aInRange("pointHex.y", y, _0n5, max);
        const y2 = modP2(y * y);
        const u = modP2(y2 - _1n5);
        const v = modP2(d * y2 - a);
        let { isValid, value: x } = uvRatio2(u, v);
        if (!isValid)
          throw new Error("Point.fromHex: invalid y coordinate");
        const isXOdd = (x & _1n5) === _1n5;
        const isLastByteOdd = (lastByte & 128) !== 0;
        if (!zip215 && x === _0n5 && isLastByteOdd)
          throw new Error("Point.fromHex: x=0 and x_0=1");
        if (isLastByteOdd !== isXOdd)
          x = modP2(-x);
        return Point2.fromAffine({ x, y });
      }
      static fromPrivateKey(privKey) {
        return getExtendedPublicKey(privKey).point;
      }
      toRawBytes() {
        const { x, y } = this.toAffine();
        const bytes4 = numberToBytesLE(y, Fp4.BYTES);
        bytes4[bytes4.length - 1] |= x & _1n5 ? 128 : 0;
        return bytes4;
      }
      toHex() {
        return bytesToHex2(this.toRawBytes());
      }
    }
    Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, _1n5, modP2(CURVE.Gx * CURVE.Gy));
    Point2.ZERO = new Point2(_0n5, _1n5, _1n5, _0n5);
    const { BASE: G, ZERO: I } = Point2;
    const wnaf = wNAF(Point2, nByteLength * 8);
    function modN2(a) {
      return mod(a, CURVE_ORDER);
    }
    function modN_LE(hash3) {
      return modN2(bytesToNumberLE(hash3));
    }
    function getExtendedPublicKey(key) {
      const len = nByteLength;
      key = ensureBytes("private key", key, len);
      const hashed = ensureBytes("hashed private key", cHash(key), 2 * len);
      const head = adjustScalarBytes2(hashed.slice(0, len));
      const prefix = hashed.slice(len, 2 * len);
      const scalar = modN_LE(head);
      const point = G.multiply(scalar);
      const pointBytes = point.toRawBytes();
      return { head, prefix, scalar, point, pointBytes };
    }
    function getPublicKey(privKey) {
      return getExtendedPublicKey(privKey).pointBytes;
    }
    function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
      const msg = concatBytes2(...msgs);
      return modN_LE(cHash(domain2(msg, ensureBytes("context", context), !!prehash)));
    }
    function sign(msg, privKey, options = {}) {
      msg = ensureBytes("message", msg);
      if (prehash)
        msg = prehash(msg);
      const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
      const r = hashDomainToScalar(options.context, prefix, msg);
      const R = G.multiply(r).toRawBytes();
      const k = hashDomainToScalar(options.context, R, pointBytes, msg);
      const s = modN2(r + k * scalar);
      aInRange("signature.s", s, _0n5, CURVE_ORDER);
      const res = concatBytes2(R, numberToBytesLE(s, Fp4.BYTES));
      return ensureBytes("result", res, nByteLength * 2);
    }
    const verifyOpts = VERIFY_DEFAULT;
    function verify(sig, msg, publicKey, options = verifyOpts) {
      const { context, zip215 } = options;
      const len = Fp4.BYTES;
      sig = ensureBytes("signature", sig, 2 * len);
      msg = ensureBytes("message", msg);
      if (zip215 !== void 0)
        abool("zip215", zip215);
      if (prehash)
        msg = prehash(msg);
      const s = bytesToNumberLE(sig.slice(len, 2 * len));
      let A, R, SB;
      try {
        A = Point2.fromHex(publicKey, zip215);
        R = Point2.fromHex(sig.slice(0, len), zip215);
        SB = G.multiplyUnsafe(s);
      } catch (error) {
        return false;
      }
      if (!zip215 && A.isSmallOrder())
        return false;
      const k = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
      const RkA = R.add(A.multiplyUnsafe(k));
      return RkA.subtract(SB).clearCofactor().equals(Point2.ZERO);
    }
    G._setWindowSize(8);
    const utils2 = {
      getExtendedPublicKey,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => randomBytes2(Fp4.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(windowSize = 8, point = Point2.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    return {
      CURVE,
      getPublicKey,
      sign,
      verify,
      ExtendedPoint: Point2,
      utils: utils2
    };
  }

  // node_modules/@noble/curves/esm/abstract/hash-to-curve.js
  init_dirname();
  init_buffer2();
  init_process2();
  var os2ip = bytesToNumberBE;
  function i2osp(value, length2) {
    if (value < 0 || value >= 1 << 8 * length2) {
      throw new Error(`bad I2OSP call: value=${value} length=${length2}`);
    }
    const res = Array.from({ length: length2 }).fill(0);
    for (let i = length2 - 1; i >= 0; i--) {
      res[i] = value & 255;
      value >>>= 8;
    }
    return new Uint8Array(res);
  }
  function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for (let i = 0; i < a.length; i++) {
      arr[i] = a[i] ^ b[i];
    }
    return arr;
  }
  function anum(item) {
    if (!Number.isSafeInteger(item))
      throw new Error("number expected");
  }
  function expand_message_xmd(msg, DST, lenInBytes, H) {
    abytes(msg);
    abytes(DST);
    anum(lenInBytes);
    if (DST.length > 255)
      DST = H(concatBytes2(utf8ToBytes2("H2C-OVERSIZE-DST-"), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255)
      throw new Error("Invalid xmd length");
    const DST_prime = concatBytes2(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2);
    const b = new Array(ell);
    const b_0 = H(concatBytes2(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H(concatBytes2(b_0, i2osp(1, 1), DST_prime));
    for (let i = 1; i <= ell; i++) {
      const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
      b[i] = H(concatBytes2(...args));
    }
    const pseudo_random_bytes = concatBytes2(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
  }
  function expand_message_xof(msg, DST, lenInBytes, k, H) {
    abytes(msg);
    abytes(DST);
    anum(lenInBytes);
    if (DST.length > 255) {
      const dkLen = Math.ceil(2 * k / 8);
      DST = H.create({ dkLen }).update(utf8ToBytes2("H2C-OVERSIZE-DST-")).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255)
      throw new Error("expand_message_xof: invalid lenInBytes");
    return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
  }
  function hash_to_field(msg, count, options) {
    validateObject(options, {
      DST: "stringOrUint8Array",
      p: "bigint",
      m: "isSafeInteger",
      k: "isSafeInteger",
      hash: "hash"
    });
    const { p, k, m, hash: hash3, expand, DST: _DST } = options;
    abytes(msg);
    anum(count);
    const DST = typeof _DST === "string" ? utf8ToBytes2(_DST) : _DST;
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8);
    const len_in_bytes = count * m * L;
    let prb;
    if (expand === "xmd") {
      prb = expand_message_xmd(msg, DST, len_in_bytes, hash3);
    } else if (expand === "xof") {
      prb = expand_message_xof(msg, DST, len_in_bytes, k, hash3);
    } else if (expand === "_internal_pass") {
      prb = msg;
    } else {
      throw new Error('expand must be "xmd" or "xof"');
    }
    const u = new Array(count);
    for (let i = 0; i < count; i++) {
      const e = new Array(m);
      for (let j = 0; j < m; j++) {
        const elm_offset = L * (j + i * m);
        const tv = prb.subarray(elm_offset, elm_offset + L);
        e[j] = mod(os2ip(tv), p);
      }
      u[i] = e;
    }
    return u;
  }
  function isogenyMap(field, map) {
    const COEFF = map.map((i) => Array.from(i).reverse());
    return (x, y) => {
      const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
      x = field.div(xNum, xDen);
      y = field.mul(y, field.div(yNum, yDen));
      return { x, y };
    };
  }
  function createHasher(Point2, mapToCurve, def) {
    if (typeof mapToCurve !== "function")
      throw new Error("mapToCurve() must be defined");
    return {
      // Encodes byte string to elliptic curve.
      // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
      hashToCurve(msg, options) {
        const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
        const u0 = Point2.fromAffine(mapToCurve(u[0]));
        const u1 = Point2.fromAffine(mapToCurve(u[1]));
        const P = u0.add(u1).clearCofactor();
        P.assertValidity();
        return P;
      },
      // Encodes byte string to elliptic curve.
      // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
      encodeToCurve(msg, options) {
        const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
        const P = Point2.fromAffine(mapToCurve(u[0])).clearCofactor();
        P.assertValidity();
        return P;
      },
      // Same as encodeToCurve, but without hash
      mapToCurve(scalars) {
        if (!Array.isArray(scalars))
          throw new Error("mapToCurve: expected array of bigints");
        for (const i of scalars)
          if (typeof i !== "bigint")
            throw new Error(`mapToCurve: expected array of bigints, got ${i} in array`);
        const P = Point2.fromAffine(mapToCurve(scalars)).clearCofactor();
        P.assertValidity();
        return P;
      }
    };
  }

  // node_modules/@noble/curves/esm/abstract/montgomery.js
  init_dirname();
  init_buffer2();
  init_process2();
  var _0n6 = BigInt(0);
  var _1n6 = BigInt(1);
  function validateOpts2(curve) {
    validateObject(curve, {
      a: "bigint"
    }, {
      montgomeryBits: "isSafeInteger",
      nByteLength: "isSafeInteger",
      adjustScalarBytes: "function",
      domain: "function",
      powPminus2: "function",
      Gu: "bigint"
    });
    return Object.freeze({ ...curve });
  }
  function montgomery(curveDef) {
    const CURVE = validateOpts2(curveDef);
    const { P } = CURVE;
    const modP2 = (n) => mod(n, P);
    const montgomeryBits = CURVE.montgomeryBits;
    const montgomeryBytes = Math.ceil(montgomeryBits / 8);
    const fieldLen = CURVE.nByteLength;
    const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes4) => bytes4);
    const powPminus2 = CURVE.powPminus2 || ((x) => pow(x, P - BigInt(2), P));
    function cswap(swap, x_2, x_3) {
      const dummy = modP2(swap * (x_2 - x_3));
      x_2 = modP2(x_2 - dummy);
      x_3 = modP2(x_3 + dummy);
      return [x_2, x_3];
    }
    const a24 = (CURVE.a - BigInt(2)) / BigInt(4);
    function montgomeryLadder(u, scalar) {
      aInRange("u", u, _0n6, P);
      aInRange("scalar", scalar, _0n6, P);
      const k = scalar;
      const x_1 = u;
      let x_2 = _1n6;
      let z_2 = _0n6;
      let x_3 = u;
      let z_3 = _1n6;
      let swap = _0n6;
      let sw;
      for (let t = BigInt(montgomeryBits - 1); t >= _0n6; t--) {
        const k_t = k >> t & _1n6;
        swap ^= k_t;
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        swap = k_t;
        const A = x_2 + z_2;
        const AA = modP2(A * A);
        const B = x_2 - z_2;
        const BB = modP2(B * B);
        const E = AA - BB;
        const C = x_3 + z_3;
        const D = x_3 - z_3;
        const DA = modP2(D * A);
        const CB = modP2(C * B);
        const dacb = DA + CB;
        const da_cb = DA - CB;
        x_3 = modP2(dacb * dacb);
        z_3 = modP2(x_1 * modP2(da_cb * da_cb));
        x_2 = modP2(AA * BB);
        z_2 = modP2(E * (AA + modP2(a24 * E)));
      }
      sw = cswap(swap, x_2, x_3);
      x_2 = sw[0];
      x_3 = sw[1];
      sw = cswap(swap, z_2, z_3);
      z_2 = sw[0];
      z_3 = sw[1];
      const z2 = powPminus2(z_2);
      return modP2(x_2 * z2);
    }
    function encodeUCoordinate(u) {
      return numberToBytesLE(modP2(u), montgomeryBytes);
    }
    function decodeUCoordinate(uEnc) {
      const u = ensureBytes("u coordinate", uEnc, montgomeryBytes);
      if (fieldLen === 32)
        u[31] &= 127;
      return bytesToNumberLE(u);
    }
    function decodeScalar(n) {
      const bytes4 = ensureBytes("scalar", n);
      const len = bytes4.length;
      if (len !== montgomeryBytes && len !== fieldLen)
        throw new Error(`Expected ${montgomeryBytes} or ${fieldLen} bytes, got ${len}`);
      return bytesToNumberLE(adjustScalarBytes2(bytes4));
    }
    function scalarMult(scalar, u) {
      const pointU = decodeUCoordinate(u);
      const _scalar = decodeScalar(scalar);
      const pu = montgomeryLadder(pointU, _scalar);
      if (pu === _0n6)
        throw new Error("Invalid private or public key received");
      return encodeUCoordinate(pu);
    }
    const GuBytes = encodeUCoordinate(CURVE.Gu);
    function scalarMultBase(scalar) {
      return scalarMult(scalar, GuBytes);
    }
    return {
      scalarMult,
      scalarMultBase,
      getSharedSecret: (privateKey, publicKey) => scalarMult(privateKey, publicKey),
      getPublicKey: (privateKey) => scalarMultBase(privateKey),
      utils: { randomPrivateKey: () => CURVE.randomBytes(CURVE.nByteLength) },
      GuBytes
    };
  }

  // node_modules/@noble/curves/esm/ed25519.js
  var ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
  var ED25519_SQRT_M1 = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
  var _0n7 = BigInt(0), _1n7 = BigInt(1), _2n5 = BigInt(2), _3n2 = BigInt(3);
  var _5n2 = BigInt(5), _8n3 = BigInt(8);
  function ed25519_pow_2_252_3(x) {
    const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
    const P = ED25519_P;
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, _2n5, P) * b2 % P;
    const b5 = pow2(b4, _1n7, P) * x % P;
    const b10 = pow2(b5, _5n2, P) * b5 % P;
    const b20 = pow2(b10, _10n, P) * b10 % P;
    const b40 = pow2(b20, _20n, P) * b20 % P;
    const b80 = pow2(b40, _40n, P) * b40 % P;
    const b160 = pow2(b80, _80n, P) * b80 % P;
    const b240 = pow2(b160, _80n, P) * b80 % P;
    const b250 = pow2(b240, _10n, P) * b10 % P;
    const pow_p_5_8 = pow2(b250, _2n5, P) * x % P;
    return { pow_p_5_8, b2 };
  }
  function adjustScalarBytes(bytes4) {
    bytes4[0] &= 248;
    bytes4[31] &= 127;
    bytes4[31] |= 64;
    return bytes4;
  }
  function uvRatio(u, v) {
    const P = ED25519_P;
    const v3 = mod(v * v * v, P);
    const v7 = mod(v3 * v3 * v, P);
    const pow3 = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
    let x = mod(u * v3 * pow3, P);
    const vx2 = mod(v * x * x, P);
    const root1 = x;
    const root2 = mod(x * ED25519_SQRT_M1, P);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u, P);
    const noRoot = vx2 === mod(-u * ED25519_SQRT_M1, P);
    if (useRoot1)
      x = root1;
    if (useRoot2 || noRoot)
      x = root2;
    if (isNegativeLE(x, P))
      x = mod(-x, P);
    return { isValid: useRoot1 || useRoot2, value: x };
  }
  var ED25519_TORSION_SUBGROUP = [
    "0100000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
    "0000000000000000000000000000000000000000000000000000000000000080",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
    "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
  ];
  var Fp = /* @__PURE__ */ (() => Field(ED25519_P, void 0, true))();
  var ed25519Defaults = /* @__PURE__ */ (() => ({
    // Param: a
    a: BigInt(-1),
    // Fp.create(-1) is proper; our way still works and is faster
    // d is equal to -121665/121666 over finite field.
    // Negative number is P - number, and division is invert(number, P)
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
    Fp,
    // Subgroup order: how many points curve has
    // 2n**252n + 27742317777372353535851937790883648493n;
    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
    // Cofactor
    h: _8n3,
    // Base point (x, y) aka generator point
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
    hash: sha5122,
    randomBytes,
    adjustScalarBytes,
    // dom2
    // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
    // Constant-time, u/√v
    uvRatio
  }))();
  var ed25519 = /* @__PURE__ */ (() => twistedEdwards(ed25519Defaults))();
  function ed25519_domain(data, ctx, phflag) {
    if (ctx.length > 255)
      throw new Error("Context is too big");
    return concatBytes(utf8ToBytes("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
  }
  var ed25519ctx = /* @__PURE__ */ (() => twistedEdwards({
    ...ed25519Defaults,
    domain: ed25519_domain
  }))();
  var ed25519ph = /* @__PURE__ */ (() => twistedEdwards(Object.assign({}, ed25519Defaults, {
    domain: ed25519_domain,
    prehash: sha5122
  })))();
  var x25519 = /* @__PURE__ */ (() => montgomery({
    P: ED25519_P,
    a: BigInt(486662),
    montgomeryBits: 255,
    // n is 253 bits
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: (x) => {
      const P = ED25519_P;
      const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x);
      return mod(pow2(pow_p_5_8, _3n2, P) * b2, P);
    },
    adjustScalarBytes,
    randomBytes
  }))();
  function edwardsToMontgomeryPub(edwardsPub) {
    const { y } = ed25519.ExtendedPoint.fromHex(edwardsPub);
    const _1n10 = BigInt(1);
    return Fp.toBytes(Fp.create((_1n10 + y) * Fp.inv(_1n10 - y)));
  }
  var edwardsToMontgomery = edwardsToMontgomeryPub;
  function edwardsToMontgomeryPriv(edwardsPriv) {
    const hashed = ed25519Defaults.hash(edwardsPriv.subarray(0, 32));
    return ed25519Defaults.adjustScalarBytes(hashed).subarray(0, 32);
  }
  var ELL2_C1 = /* @__PURE__ */ (() => (Fp.ORDER + _3n2) / _8n3)();
  var ELL2_C2 = /* @__PURE__ */ (() => Fp.pow(_2n5, ELL2_C1))();
  var ELL2_C3 = /* @__PURE__ */ (() => Fp.sqrt(Fp.neg(Fp.ONE)))();
  function map_to_curve_elligator2_curve25519(u) {
    const ELL2_C4 = (Fp.ORDER - _5n2) / _8n3;
    const ELL2_J = BigInt(486662);
    let tv1 = Fp.sqr(u);
    tv1 = Fp.mul(tv1, _2n5);
    let xd = Fp.add(tv1, Fp.ONE);
    let x1n = Fp.neg(ELL2_J);
    let tv2 = Fp.sqr(xd);
    let gxd = Fp.mul(tv2, xd);
    let gx1 = Fp.mul(tv1, ELL2_J);
    gx1 = Fp.mul(gx1, x1n);
    gx1 = Fp.add(gx1, tv2);
    gx1 = Fp.mul(gx1, x1n);
    let tv3 = Fp.sqr(gxd);
    tv2 = Fp.sqr(tv3);
    tv3 = Fp.mul(tv3, gxd);
    tv3 = Fp.mul(tv3, gx1);
    tv2 = Fp.mul(tv2, tv3);
    let y11 = Fp.pow(tv2, ELL2_C4);
    y11 = Fp.mul(y11, tv3);
    let y12 = Fp.mul(y11, ELL2_C3);
    tv2 = Fp.sqr(y11);
    tv2 = Fp.mul(tv2, gxd);
    let e1 = Fp.eql(tv2, gx1);
    let y1 = Fp.cmov(y12, y11, e1);
    let x2n = Fp.mul(x1n, tv1);
    let y21 = Fp.mul(y11, u);
    y21 = Fp.mul(y21, ELL2_C2);
    let y22 = Fp.mul(y21, ELL2_C3);
    let gx2 = Fp.mul(gx1, tv1);
    tv2 = Fp.sqr(y21);
    tv2 = Fp.mul(tv2, gxd);
    let e2 = Fp.eql(tv2, gx2);
    let y2 = Fp.cmov(y22, y21, e2);
    tv2 = Fp.sqr(y1);
    tv2 = Fp.mul(tv2, gxd);
    let e3 = Fp.eql(tv2, gx1);
    let xn = Fp.cmov(x2n, x1n, e3);
    let y = Fp.cmov(y2, y1, e3);
    let e4 = Fp.isOdd(y);
    y = Fp.cmov(y, Fp.neg(y), e3 !== e4);
    return { xMn: xn, xMd: xd, yMn: y, yMd: _1n7 };
  }
  var ELL2_C1_EDWARDS = /* @__PURE__ */ (() => FpSqrtEven(Fp, Fp.neg(BigInt(486664))))();
  function map_to_curve_elligator2_edwards25519(u) {
    const { xMn, xMd, yMn, yMd } = map_to_curve_elligator2_curve25519(u);
    let xn = Fp.mul(xMn, yMd);
    xn = Fp.mul(xn, ELL2_C1_EDWARDS);
    let xd = Fp.mul(xMd, yMn);
    let yn = Fp.sub(xMn, xMd);
    let yd = Fp.add(xMn, xMd);
    let tv1 = Fp.mul(xd, yd);
    let e = Fp.eql(tv1, Fp.ZERO);
    xn = Fp.cmov(xn, Fp.ZERO, e);
    xd = Fp.cmov(xd, Fp.ONE, e);
    yn = Fp.cmov(yn, Fp.ONE, e);
    yd = Fp.cmov(yd, Fp.ONE, e);
    const inv = Fp.invertBatch([xd, yd]);
    return { x: Fp.mul(xn, inv[0]), y: Fp.mul(yn, inv[1]) };
  }
  var htf = /* @__PURE__ */ (() => createHasher(ed25519.ExtendedPoint, (scalars) => map_to_curve_elligator2_edwards25519(scalars[0]), {
    DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
    encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
    p: Fp.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: sha5122
  }))();
  var hashToCurve = /* @__PURE__ */ (() => htf.hashToCurve)();
  var encodeToCurve = /* @__PURE__ */ (() => htf.encodeToCurve)();
  function assertRstPoint(other) {
    if (!(other instanceof RistPoint))
      throw new Error("RistrettoPoint expected");
  }
  var SQRT_M1 = ED25519_SQRT_M1;
  var SQRT_AD_MINUS_ONE = /* @__PURE__ */ BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
  var INVSQRT_A_MINUS_D = /* @__PURE__ */ BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
  var ONE_MINUS_D_SQ = /* @__PURE__ */ BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
  var D_MINUS_ONE_SQ = /* @__PURE__ */ BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
  var invertSqrt = (number3) => uvRatio(_1n7, number3);
  var MAX_255B = /* @__PURE__ */ BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var bytes255ToNumberLE = (bytes4) => ed25519.CURVE.Fp.create(bytesToNumberLE(bytes4) & MAX_255B);
  function calcElligatorRistrettoMap(r0) {
    const { d } = ed25519.CURVE;
    const P = ed25519.CURVE.Fp.ORDER;
    const mod2 = ed25519.CURVE.Fp.create;
    const r = mod2(SQRT_M1 * r0 * r0);
    const Ns = mod2((r + _1n7) * ONE_MINUS_D_SQ);
    let c = BigInt(-1);
    const D = mod2((c - d * r) * mod2(r + d));
    let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D);
    let s_ = mod2(s * r0);
    if (!isNegativeLE(s_, P))
      s_ = mod2(-s_);
    if (!Ns_D_is_sq)
      s = s_;
    if (!Ns_D_is_sq)
      c = r;
    const Nt = mod2(c * (r - _1n7) * D_MINUS_ONE_SQ - D);
    const s2 = s * s;
    const W0 = mod2((s + s) * D);
    const W1 = mod2(Nt * SQRT_AD_MINUS_ONE);
    const W2 = mod2(_1n7 - s2);
    const W3 = mod2(_1n7 + s2);
    return new ed25519.ExtendedPoint(mod2(W0 * W3), mod2(W2 * W1), mod2(W1 * W3), mod2(W0 * W2));
  }
  var RistPoint = class _RistPoint {
    // Private property to discourage combining ExtendedPoint + RistrettoPoint
    // Always use Ristretto encoding/decoding instead.
    constructor(ep) {
      this.ep = ep;
    }
    static fromAffine(ap) {
      return new _RistPoint(ed25519.ExtendedPoint.fromAffine(ap));
    }
    /**
     * Takes uniform output of 64-byte hash function like sha512 and converts it to `RistrettoPoint`.
     * The hash-to-group operation applies Elligator twice and adds the results.
     * **Note:** this is one-way map, there is no conversion from point to hash.
     * https://ristretto.group/formulas/elligator.html
     * @param hex 64-byte output of a hash function
     */
    static hashToCurve(hex2) {
      hex2 = ensureBytes("ristrettoHash", hex2, 64);
      const r1 = bytes255ToNumberLE(hex2.slice(0, 32));
      const R1 = calcElligatorRistrettoMap(r1);
      const r2 = bytes255ToNumberLE(hex2.slice(32, 64));
      const R2 = calcElligatorRistrettoMap(r2);
      return new _RistPoint(R1.add(R2));
    }
    /**
     * Converts ristretto-encoded string to ristretto point.
     * https://ristretto.group/formulas/decoding.html
     * @param hex Ristretto-encoded 32 bytes. Not every 32-byte string is valid ristretto encoding
     */
    static fromHex(hex2) {
      hex2 = ensureBytes("ristrettoHex", hex2, 32);
      const { a, d } = ed25519.CURVE;
      const P = ed25519.CURVE.Fp.ORDER;
      const mod2 = ed25519.CURVE.Fp.create;
      const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
      const s = bytes255ToNumberLE(hex2);
      if (!equalBytes(numberToBytesLE(s, 32), hex2) || isNegativeLE(s, P))
        throw new Error(emsg);
      const s2 = mod2(s * s);
      const u1 = mod2(_1n7 + a * s2);
      const u2 = mod2(_1n7 - a * s2);
      const u1_2 = mod2(u1 * u1);
      const u2_2 = mod2(u2 * u2);
      const v = mod2(a * d * u1_2 - u2_2);
      const { isValid, value: I } = invertSqrt(mod2(v * u2_2));
      const Dx = mod2(I * u2);
      const Dy = mod2(I * Dx * v);
      let x = mod2((s + s) * Dx);
      if (isNegativeLE(x, P))
        x = mod2(-x);
      const y = mod2(u1 * Dy);
      const t = mod2(x * y);
      if (!isValid || isNegativeLE(t, P) || y === _0n7)
        throw new Error(emsg);
      return new _RistPoint(new ed25519.ExtendedPoint(x, y, _1n7, t));
    }
    /**
     * Encodes ristretto point to Uint8Array.
     * https://ristretto.group/formulas/encoding.html
     */
    toRawBytes() {
      let { ex: x, ey: y, ez: z, et: t } = this.ep;
      const P = ed25519.CURVE.Fp.ORDER;
      const mod2 = ed25519.CURVE.Fp.create;
      const u1 = mod2(mod2(z + y) * mod2(z - y));
      const u2 = mod2(x * y);
      const u2sq = mod2(u2 * u2);
      const { value: invsqrt } = invertSqrt(mod2(u1 * u2sq));
      const D1 = mod2(invsqrt * u1);
      const D2 = mod2(invsqrt * u2);
      const zInv = mod2(D1 * D2 * t);
      let D;
      if (isNegativeLE(t * zInv, P)) {
        let _x = mod2(y * SQRT_M1);
        let _y = mod2(x * SQRT_M1);
        x = _x;
        y = _y;
        D = mod2(D1 * INVSQRT_A_MINUS_D);
      } else {
        D = D2;
      }
      if (isNegativeLE(x * zInv, P))
        y = mod2(-y);
      let s = mod2((z - y) * D);
      if (isNegativeLE(s, P))
        s = mod2(-s);
      return numberToBytesLE(s, 32);
    }
    toHex() {
      return bytesToHex2(this.toRawBytes());
    }
    toString() {
      return this.toHex();
    }
    // Compare one point to another.
    equals(other) {
      assertRstPoint(other);
      const { ex: X1, ey: Y1 } = this.ep;
      const { ex: X2, ey: Y2 } = other.ep;
      const mod2 = ed25519.CURVE.Fp.create;
      const one = mod2(X1 * Y2) === mod2(Y1 * X2);
      const two = mod2(Y1 * Y2) === mod2(X1 * X2);
      return one || two;
    }
    add(other) {
      assertRstPoint(other);
      return new _RistPoint(this.ep.add(other.ep));
    }
    subtract(other) {
      assertRstPoint(other);
      return new _RistPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
      return new _RistPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
      return new _RistPoint(this.ep.multiplyUnsafe(scalar));
    }
    double() {
      return new _RistPoint(this.ep.double());
    }
    negate() {
      return new _RistPoint(this.ep.negate());
    }
  };
  var RistrettoPoint = /* @__PURE__ */ (() => {
    if (!RistPoint.BASE)
      RistPoint.BASE = new RistPoint(ed25519.ExtendedPoint.BASE);
    if (!RistPoint.ZERO)
      RistPoint.ZERO = new RistPoint(ed25519.ExtendedPoint.ZERO);
    return RistPoint;
  })();
  var hashToRistretto255 = (msg, options) => {
    const d = options.DST;
    const DST = typeof d === "string" ? utf8ToBytes(d) : d;
    const uniform_bytes = expand_message_xmd(msg, DST, 64, sha5122);
    const P = RistPoint.hashToCurve(uniform_bytes);
    return P;
  };
  var hash_to_ristretto255 = hashToRistretto255;

  // node_modules/@noble/curves/esm/secp256k1.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/sha256.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA256 = class extends HashMD {
    constructor() {
      super(64, 32, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  };
  var SHA224 = class extends SHA256 {
    constructor() {
      super();
      this.A = 3238371032 | 0;
      this.B = 914150663 | 0;
      this.C = 812702999 | 0;
      this.D = 4144912697 | 0;
      this.E = 4290775857 | 0;
      this.F = 1750603025 | 0;
      this.G = 1694076839 | 0;
      this.H = 3204075428 | 0;
      this.outputLen = 28;
    }
  };
  var sha2562 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
  var sha224 = /* @__PURE__ */ wrapConstructor(() => new SHA224());

  // node_modules/@noble/curves/esm/_shortw_utils.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/hashes/esm/hmac.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HMAC = class extends Hash {
    constructor(hash3, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      hash(hash3);
      const key = toBytes(_key);
      this.iHash = hash3.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash3.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      exists(this);
      bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac = (hash3, key, message) => new HMAC(hash3, key).update(message).digest();
  hmac.create = (hash3, key) => new HMAC(hash3, key);

  // node_modules/@noble/curves/esm/abstract/weierstrass.js
  init_dirname();
  init_buffer2();
  init_process2();
  function validateSigVerOpts(opts) {
    if (opts.lowS !== void 0)
      abool("lowS", opts.lowS);
    if (opts.prehash !== void 0)
      abool("prehash", opts.prehash);
  }
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp4, a } = opts;
    if (endo) {
      if (!Fp4.eql(a, Fp4.ZERO)) {
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
  var DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
      constructor(m = "") {
        super(m);
      }
    },
    _parseInt(data) {
      const { Err: E } = DER;
      if (data.length < 2 || data[0] !== 2)
        throw new E("Invalid signature integer tag");
      const len = data[1];
      const res = data.subarray(2, len + 2);
      if (!len || res.length !== len)
        throw new E("Invalid signature integer: wrong length");
      if (res[0] & 128)
        throw new E("Invalid signature integer: negative");
      if (res[0] === 0 && !(res[1] & 128))
        throw new E("Invalid signature integer: unnecessary leading zero");
      return { d: b2n(res), l: data.subarray(len + 2) };
    },
    toSig(hex2) {
      const { Err: E } = DER;
      const data = typeof hex2 === "string" ? h2b(hex2) : hex2;
      abytes(data);
      let l = data.length;
      if (l < 2 || data[0] != 48)
        throw new E("Invalid signature tag");
      if (data[1] !== l - 2)
        throw new E("Invalid signature: incorrect length");
      const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
      const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
      if (rBytesLeft.length)
        throw new E("Invalid signature: left bytes after parsing");
      return { r, s };
    },
    hexFromSig(sig) {
      const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
      const h = (num2) => {
        const hex2 = num2.toString(16);
        return hex2.length & 1 ? `0${hex2}` : hex2;
      };
      const s = slice(h(sig.s));
      const r = slice(h(sig.r));
      const shl = s.length / 2;
      const rhl = r.length / 2;
      const sl = h(shl);
      const rl = h(rhl);
      return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    }
  };
  var _0n8 = BigInt(0), _1n8 = BigInt(1), _2n6 = BigInt(2), _3n3 = BigInt(3), _4n2 = BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp: Fp4 } = CURVE;
    const toBytes3 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a = point.toAffine();
      return concatBytes2(Uint8Array.from([4]), Fp4.toBytes(a.x), Fp4.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes4) => {
      const tail = bytes4.subarray(1);
      const x = Fp4.fromBytes(tail.subarray(0, Fp4.BYTES));
      const y = Fp4.fromBytes(tail.subarray(Fp4.BYTES, 2 * Fp4.BYTES));
      return { x, y };
    });
    function weierstrassEquation(x) {
      const { a, b } = CURVE;
      const x2 = Fp4.sqr(x);
      const x3 = Fp4.mul(x2, x);
      return Fp4.add(Fp4.add(x3, Fp4.mul(x, a)), b);
    }
    if (!Fp4.eql(Fp4.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num2) {
      return inRange(num2, _1n8, CURVE.n);
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (isBytes3(key))
          key = bytesToHex2(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("Invalid key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num2;
      try {
        num2 = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
      }
      if (wrapPrivateKey)
        num2 = mod(num2, N);
      aInRange("private key", num2, _1n8, N);
      return num2;
    }
    function assertPrjPoint(other) {
      if (!(other instanceof Point2))
        throw new Error("ProjectivePoint expected");
    }
    const toAffineMemo = memoized((p, iz) => {
      const { px: x, py: y, pz: z } = p;
      if (Fp4.eql(z, Fp4.ONE))
        return { x, y };
      const is0 = p.is0();
      if (iz == null)
        iz = is0 ? Fp4.ONE : Fp4.inv(z);
      const ax = Fp4.mul(x, iz);
      const ay = Fp4.mul(y, iz);
      const zz = Fp4.mul(z, iz);
      if (is0)
        return { x: Fp4.ZERO, y: Fp4.ZERO };
      if (!Fp4.eql(zz, Fp4.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    });
    const assertValidMemo = memoized((p) => {
      if (p.is0()) {
        if (CURVE.allowInfinityPoint && !Fp4.is0(p.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = p.toAffine();
      if (!Fp4.isValid(x) || !Fp4.isValid(y))
        throw new Error("bad point: x or y not FE");
      const left = Fp4.sqr(y);
      const right = weierstrassEquation(x);
      if (!Fp4.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!p.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class Point2 {
      constructor(px, py, pz) {
        this.px = px;
        this.py = py;
        this.pz = pz;
        if (px == null || !Fp4.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp4.isValid(py))
          throw new Error("y required");
        if (pz == null || !Fp4.isValid(pz))
          throw new Error("z required");
        Object.freeze(this);
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp4.isValid(x) || !Fp4.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point2)
          throw new Error("projective point not allowed");
        const is0 = (i) => Fp4.eql(i, Fp4.ZERO);
        if (is0(x) && is0(y))
          return Point2.ZERO;
        return new Point2(x, y, Fp4.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = Fp4.invertBatch(points.map((p) => p.pz));
        return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex2) {
        const P = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex2)));
        P.assertValidity();
        return P;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        wnaf.setWindowSize(this, windowSize);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        assertValidMemo(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (Fp4.isOdd)
          return !Fp4.isOdd(y);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U1 = Fp4.eql(Fp4.mul(X1, Z2), Fp4.mul(X2, Z1));
        const U2 = Fp4.eql(Fp4.mul(Y1, Z2), Fp4.mul(Y2, Z1));
        return U1 && U2;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point2(this.px, Fp4.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b } = CURVE;
        const b3 = Fp4.mul(b, _3n3);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
        let t0 = Fp4.mul(X1, X1);
        let t1 = Fp4.mul(Y1, Y1);
        let t2 = Fp4.mul(Z1, Z1);
        let t3 = Fp4.mul(X1, Y1);
        t3 = Fp4.add(t3, t3);
        Z3 = Fp4.mul(X1, Z1);
        Z3 = Fp4.add(Z3, Z3);
        X3 = Fp4.mul(a, Z3);
        Y3 = Fp4.mul(b3, t2);
        Y3 = Fp4.add(X3, Y3);
        X3 = Fp4.sub(t1, Y3);
        Y3 = Fp4.add(t1, Y3);
        Y3 = Fp4.mul(X3, Y3);
        X3 = Fp4.mul(t3, X3);
        Z3 = Fp4.mul(b3, Z3);
        t2 = Fp4.mul(a, t2);
        t3 = Fp4.sub(t0, t2);
        t3 = Fp4.mul(a, t3);
        t3 = Fp4.add(t3, Z3);
        Z3 = Fp4.add(t0, t0);
        t0 = Fp4.add(Z3, t0);
        t0 = Fp4.add(t0, t2);
        t0 = Fp4.mul(t0, t3);
        Y3 = Fp4.add(Y3, t0);
        t2 = Fp4.mul(Y1, Z1);
        t2 = Fp4.add(t2, t2);
        t0 = Fp4.mul(t2, t3);
        X3 = Fp4.sub(X3, t0);
        Z3 = Fp4.mul(t2, t1);
        Z3 = Fp4.add(Z3, Z3);
        Z3 = Fp4.add(Z3, Z3);
        return new Point2(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
        const a = CURVE.a;
        const b3 = Fp4.mul(CURVE.b, _3n3);
        let t0 = Fp4.mul(X1, X2);
        let t1 = Fp4.mul(Y1, Y2);
        let t2 = Fp4.mul(Z1, Z2);
        let t3 = Fp4.add(X1, Y1);
        let t4 = Fp4.add(X2, Y2);
        t3 = Fp4.mul(t3, t4);
        t4 = Fp4.add(t0, t1);
        t3 = Fp4.sub(t3, t4);
        t4 = Fp4.add(X1, Z1);
        let t5 = Fp4.add(X2, Z2);
        t4 = Fp4.mul(t4, t5);
        t5 = Fp4.add(t0, t2);
        t4 = Fp4.sub(t4, t5);
        t5 = Fp4.add(Y1, Z1);
        X3 = Fp4.add(Y2, Z2);
        t5 = Fp4.mul(t5, X3);
        X3 = Fp4.add(t1, t2);
        t5 = Fp4.sub(t5, X3);
        Z3 = Fp4.mul(a, t4);
        X3 = Fp4.mul(b3, t2);
        Z3 = Fp4.add(X3, Z3);
        X3 = Fp4.sub(t1, Z3);
        Z3 = Fp4.add(t1, Z3);
        Y3 = Fp4.mul(X3, Z3);
        t1 = Fp4.add(t0, t0);
        t1 = Fp4.add(t1, t0);
        t2 = Fp4.mul(a, t2);
        t4 = Fp4.mul(b3, t4);
        t1 = Fp4.add(t1, t2);
        t2 = Fp4.sub(t0, t2);
        t2 = Fp4.mul(a, t2);
        t4 = Fp4.add(t4, t2);
        t0 = Fp4.mul(t1, t4);
        Y3 = Fp4.add(Y3, t0);
        t0 = Fp4.mul(t5, t4);
        X3 = Fp4.mul(t3, X3);
        X3 = Fp4.sub(X3, t0);
        t0 = Fp4.mul(t3, t1);
        Z3 = Fp4.mul(t5, Z3);
        Z3 = Fp4.add(Z3, t0);
        return new Point2(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point2.ZERO);
      }
      wNAF(n) {
        return wnaf.wNAFCached(this, n, Point2.normalizeZ);
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(sc) {
        aInRange("scalar", sc, _0n8, CURVE.n);
        const I = Point2.ZERO;
        if (sc === _0n8)
          return I;
        if (sc === _1n8)
          return this;
        const { endo } = CURVE;
        if (!endo)
          return wnaf.unsafeLadder(this, sc);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
        let k1p = I;
        let k2p = I;
        let d = this;
        while (k1 > _0n8 || k2 > _0n8) {
          if (k1 & _1n8)
            k1p = k1p.add(d);
          if (k2 & _1n8)
            k2p = k2p.add(d);
          d = d.double();
          k1 >>= _1n8;
          k2 >>= _1n8;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point2(Fp4.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        const { endo, n: N } = CURVE;
        aInRange("scalar", scalar, _1n8, N);
        let point, fake;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point2(Fp4.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p, f: f2 } = this.wNAF(scalar);
          point = p;
          fake = f2;
        }
        return Point2.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q, a, b) {
        const G = Point2.BASE;
        const mul = (P, a2) => a2 === _0n8 || a2 === _1n8 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
        const sum = mul(this, a).add(mul(Q, b));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        return toAffineMemo(this, iz);
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n8)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point2, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n8)
          return this;
        if (clearCofactor)
          return clearCofactor(Point2, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        abool("isCompressed", isCompressed);
        this.assertValidity();
        return toBytes3(Point2, this, isCompressed);
      }
      toHex(isCompressed = true) {
        abool("isCompressed", isCompressed);
        return bytesToHex2(this.toRawBytes(isCompressed));
      }
    }
    Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp4.ONE);
    Point2.ZERO = new Point2(Fp4.ZERO, Fp4.ONE, Fp4.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point2,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts3(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass(curveDef) {
    const CURVE = validateOpts3(curveDef);
    const { Fp: Fp4, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp4.BYTES + 1;
    const uncompressedLen = 2 * Fp4.BYTES + 1;
    function modN2(a) {
      return mod(a, CURVE_ORDER);
    }
    function invN(a) {
      return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a = point.toAffine();
        const x = Fp4.toBytes(a.x);
        const cat = concatBytes2;
        abool("isCompressed", isCompressed);
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
        } else {
          return cat(Uint8Array.from([4]), x, Fp4.toBytes(a.y));
        }
      },
      fromBytes(bytes4) {
        const len = bytes4.length;
        const head = bytes4[0];
        const tail = bytes4.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x = bytesToNumberBE(tail);
          if (!inRange(x, _1n8, Fp4.ORDER))
            throw new Error("Point is not on curve");
          const y2 = weierstrassEquation(x);
          let y;
          try {
            y = Fp4.sqrt(y2);
          } catch (sqrtError) {
            const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
            throw new Error("Point is not on curve" + suffix);
          }
          const isYOdd = (y & _1n8) === _1n8;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y = Fp4.neg(y);
          return { x, y };
        } else if (len === uncompressedLen && head === 4) {
          const x = Fp4.fromBytes(tail.subarray(0, Fp4.BYTES));
          const y = Fp4.fromBytes(tail.subarray(Fp4.BYTES, 2 * Fp4.BYTES));
          return { x, y };
        } else {
          throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
      }
    });
    const numToNByteStr = (num2) => bytesToHex2(numberToBytesBE(num2, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number3) {
      const HALF = CURVE_ORDER >> _1n8;
      return number3 > HALF;
    }
    function normalizeS(s) {
      return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
    }
    const slcNum = (b, from3, to) => bytesToNumberBE(b.slice(from3, to));
    class Signature {
      constructor(r, s, recovery) {
        this.r = r;
        this.s = s;
        this.recovery = recovery;
        this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex2) {
        const l = CURVE.nByteLength;
        hex2 = ensureBytes("compactSignature", hex2, l * 2);
        return new Signature(slcNum(hex2, 0, l), slcNum(hex2, l, 2 * l));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex2) {
        const { r, s } = DER.toSig(ensureBytes("DER", hex2));
        return new Signature(r, s);
      }
      assertValidity() {
        aInRange("r", this.r, _1n8, CURVE_ORDER);
        aInRange("s", this.s, _1n8, CURVE_ORDER);
      }
      addRecoveryBit(recovery) {
        return new Signature(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r, s, recovery: rec } = this;
        const h = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
        if (radj >= Fp4.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R = Point2.fromHex(prefix + numToNByteStr(radj));
        const ir = invN(radj);
        const u1 = modN2(-h * ir);
        const u2 = modN2(s * ir);
        const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes2(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes2(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteStr(this.r) + numToNByteStr(this.s);
      }
    }
    const utils2 = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length2 = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length2), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point2.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey(privateKey, isCompressed = true) {
      return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = isBytes3(item);
      const str2 = typeof item === "string";
      const len = (arr || str2) && item.length;
      if (arr)
        return len === compressedLen || len === uncompressedLen;
      if (str2)
        return len === 2 * compressedLen || len === 2 * uncompressedLen;
      if (item instanceof Point2)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b = Point2.fromHex(publicB);
      return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes4) {
      const num2 = bytesToNumberBE(bytes4);
      const delta = bytes4.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num2 >> BigInt(delta) : num2;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes4) {
      return modN2(bits2int(bytes4));
    };
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    function int2octets(num2) {
      aInRange(`num < 2^${CURVE.nBitLength}`, num2, _0n8, ORDER_MASK);
      return numberToBytesBE(num2, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash3, randomBytes: randomBytes2 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      validateSigVerOpts(opts);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash3(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (ent != null && ent !== false) {
        const e = ent === true ? randomBytes2(Fp4.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e));
      }
      const seed = concatBytes2(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const ik = invN(k);
        const q = Point2.BASE.multiply(k).toAffine();
        const r = modN2(q.x);
        if (r === _0n8)
          return;
        const s = modN2(ik * modN2(m + r * d));
        if (s === _0n8)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n8);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = normalizeS(s);
          recovery ^= 1;
        }
        return new Signature(r, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C = CURVE;
      const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
      return drbg(seed, k2sig);
    }
    Point2.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey = ensureBytes("publicKey", publicKey);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      validateSigVerOpts(opts);
      const { lowS, prehash } = opts;
      let _sig = void 0;
      let P;
      try {
        if (typeof sg === "string" || isBytes3(sg)) {
          try {
            _sig = Signature.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
            _sig = Signature.fromCompact(sg);
          }
        } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
          const { r: r2, s: s2 } = sg;
          _sig = new Signature(r2, s2);
        } else {
          throw new Error("PARSE");
        }
        P = Point2.fromHex(publicKey);
      } catch (error) {
        if (error.message === "PARSE")
          throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
        return false;
      }
      if (lowS && _sig.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r, s } = _sig;
      const h = bits2int_modN(msgHash);
      const is = invN(s);
      const u1 = modN2(h * is);
      const u2 = modN2(r * is);
      const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
      if (!R)
        return false;
      const v = modN2(R.x);
      return v === r;
    }
    return {
      CURVE,
      getPublicKey,
      getSharedSecret,
      sign,
      verify,
      ProjectivePoint: Point2,
      Signature,
      utils: utils2
    };
  }
  function SWUFpSqrtRatio(Fp4, Z) {
    const q = Fp4.ORDER;
    let l = _0n8;
    for (let o = q - _1n8; o % _2n6 === _0n8; o /= _2n6)
      l += _1n8;
    const c1 = l;
    const _2n_pow_c1_1 = _2n6 << c1 - _1n8 - _1n8;
    const _2n_pow_c1 = _2n_pow_c1_1 * _2n6;
    const c2 = (q - _1n8) / _2n_pow_c1;
    const c3 = (c2 - _1n8) / _2n6;
    const c4 = _2n_pow_c1 - _1n8;
    const c5 = _2n_pow_c1_1;
    const c6 = Fp4.pow(Z, c2);
    const c7 = Fp4.pow(Z, (c2 + _1n8) / _2n6);
    let sqrtRatio = (u, v) => {
      let tv1 = c6;
      let tv2 = Fp4.pow(v, c4);
      let tv3 = Fp4.sqr(tv2);
      tv3 = Fp4.mul(tv3, v);
      let tv5 = Fp4.mul(u, tv3);
      tv5 = Fp4.pow(tv5, c3);
      tv5 = Fp4.mul(tv5, tv2);
      tv2 = Fp4.mul(tv5, v);
      tv3 = Fp4.mul(tv5, u);
      let tv4 = Fp4.mul(tv3, tv2);
      tv5 = Fp4.pow(tv4, c5);
      let isQR = Fp4.eql(tv5, Fp4.ONE);
      tv2 = Fp4.mul(tv3, c7);
      tv5 = Fp4.mul(tv4, tv1);
      tv3 = Fp4.cmov(tv2, tv3, isQR);
      tv4 = Fp4.cmov(tv5, tv4, isQR);
      for (let i = c1; i > _1n8; i--) {
        let tv52 = i - _2n6;
        tv52 = _2n6 << tv52 - _1n8;
        let tvv5 = Fp4.pow(tv4, tv52);
        const e1 = Fp4.eql(tvv5, Fp4.ONE);
        tv2 = Fp4.mul(tv3, tv1);
        tv1 = Fp4.mul(tv1, tv1);
        tvv5 = Fp4.mul(tv4, tv1);
        tv3 = Fp4.cmov(tv2, tv3, e1);
        tv4 = Fp4.cmov(tvv5, tv4, e1);
      }
      return { isValid: isQR, value: tv3 };
    };
    if (Fp4.ORDER % _4n2 === _3n3) {
      const c12 = (Fp4.ORDER - _3n3) / _4n2;
      const c22 = Fp4.sqrt(Fp4.neg(Z));
      sqrtRatio = (u, v) => {
        let tv1 = Fp4.sqr(v);
        const tv2 = Fp4.mul(u, v);
        tv1 = Fp4.mul(tv1, tv2);
        let y1 = Fp4.pow(tv1, c12);
        y1 = Fp4.mul(y1, tv2);
        const y2 = Fp4.mul(y1, c22);
        const tv3 = Fp4.mul(Fp4.sqr(y1), v);
        const isQR = Fp4.eql(tv3, u);
        let y = Fp4.cmov(y2, y1, isQR);
        return { isValid: isQR, value: y };
      };
    }
    return sqrtRatio;
  }
  function mapToCurveSimpleSWU(Fp4, opts) {
    validateField(Fp4);
    if (!Fp4.isValid(opts.A) || !Fp4.isValid(opts.B) || !Fp4.isValid(opts.Z))
      throw new Error("mapToCurveSimpleSWU: invalid opts");
    const sqrtRatio = SWUFpSqrtRatio(Fp4, opts.Z);
    if (!Fp4.isOdd)
      throw new Error("Fp.isOdd is not implemented!");
    return (u) => {
      let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
      tv1 = Fp4.sqr(u);
      tv1 = Fp4.mul(tv1, opts.Z);
      tv2 = Fp4.sqr(tv1);
      tv2 = Fp4.add(tv2, tv1);
      tv3 = Fp4.add(tv2, Fp4.ONE);
      tv3 = Fp4.mul(tv3, opts.B);
      tv4 = Fp4.cmov(opts.Z, Fp4.neg(tv2), !Fp4.eql(tv2, Fp4.ZERO));
      tv4 = Fp4.mul(tv4, opts.A);
      tv2 = Fp4.sqr(tv3);
      tv6 = Fp4.sqr(tv4);
      tv5 = Fp4.mul(tv6, opts.A);
      tv2 = Fp4.add(tv2, tv5);
      tv2 = Fp4.mul(tv2, tv3);
      tv6 = Fp4.mul(tv6, tv4);
      tv5 = Fp4.mul(tv6, opts.B);
      tv2 = Fp4.add(tv2, tv5);
      x = Fp4.mul(tv1, tv3);
      const { isValid, value } = sqrtRatio(tv2, tv6);
      y = Fp4.mul(tv1, u);
      y = Fp4.mul(y, value);
      x = Fp4.cmov(x, tv3, isValid);
      y = Fp4.cmov(y, value, isValid);
      const e1 = Fp4.isOdd(u) === Fp4.isOdd(y);
      y = Fp4.cmov(Fp4.neg(y), y, e1);
      x = Fp4.div(x, tv4);
      return { x, y };
    };
  }

  // node_modules/@noble/curves/esm/_shortw_utils.js
  function getHash(hash3) {
    return {
      hash: hash3,
      hmac: (key, ...msgs) => hmac(hash3, key, concatBytes(...msgs)),
      randomBytes
    };
  }
  function createCurve(curveDef, defHash) {
    const create2 = (hash3) => weierstrass({ ...curveDef, ...getHash(hash3) });
    return Object.freeze({ ...create2(defHash), create: create2 });
  }

  // node_modules/@noble/curves/esm/secp256k1.js
  var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var _1n9 = BigInt(1);
  var _2n7 = BigInt(2);
  var divNearest = (a, b) => (a + b / _2n7) / b;
  function sqrtMod(y) {
    const P = secp256k1P;
    const _3n4 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P;
    const b3 = b2 * b2 * y % P;
    const b6 = pow2(b3, _3n4, P) * b3 % P;
    const b9 = pow2(b6, _3n4, P) * b3 % P;
    const b11 = pow2(b9, _2n7, P) * b2 % P;
    const b22 = pow2(b11, _11n, P) * b11 % P;
    const b44 = pow2(b22, _22n, P) * b22 % P;
    const b88 = pow2(b44, _44n, P) * b44 % P;
    const b176 = pow2(b88, _88n, P) * b88 % P;
    const b220 = pow2(b176, _44n, P) * b44 % P;
    const b223 = pow2(b220, _3n4, P) * b3 % P;
    const t1 = pow2(b223, _23n, P) * b22 % P;
    const t2 = pow2(t1, _6n, P) * b2 % P;
    const root = pow2(t2, _2n7, P);
    if (!Fp2.eql(Fp2.sqr(root), y))
      throw new Error("Cannot find square root");
    return root;
  }
  var Fp2 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  var secp256k1 = createCurve({
    a: BigInt(0),
    // equation params: a, b
    b: BigInt(7),
    // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp: Fp2,
    // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: secp256k1N,
    // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    // Cofactor
    lowS: true,
    // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k) => {
        const n = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n9 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n);
        const c2 = divNearest(-b1 * k, n);
        let k1 = mod(k - c1 * a1 - c2 * a2, n);
        let k2 = mod(-c1 * b1 - c2 * b2, n);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n - k1;
        if (k2neg)
          k2 = n - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
    }
  }, sha2562);
  var _0n9 = BigInt(0);
  var TAGGED_HASH_PREFIXES = {};
  function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = sha2562(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes2(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha2562(concatBytes2(tagP, ...messages));
  }
  var pointToBytes = (point) => point.toRawBytes(true).slice(1);
  var numTo32b = (n) => numberToBytesBE(n, 32);
  var modP = (x) => mod(x, secp256k1P);
  var modN = (x) => mod(x, secp256k1N);
  var Point = secp256k1.ProjectivePoint;
  var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
  function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
    let p = Point.fromPrivateKey(d_);
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar, bytes: pointToBytes(p) };
  }
  function lift_x(x) {
    aInRange("x", x, _1n9, secp256k1P);
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7));
    let y = sqrtMod(c);
    if (y % _2n7 !== _0n9)
      y = modP(-y);
    const p = new Point(x, y, _1n9);
    p.assertValidity();
    return p;
  }
  var num = bytesToNumberBE;
  function challenge(...args) {
    return modN(num(taggedHash("BIP0340/challenge", ...args)));
  }
  function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes;
  }
  function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes("message", message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
    const a = ensureBytes("auxRand", auxRand, 32);
    const t = numTo32b(d ^ num(taggedHash("BIP0340/aux", a)));
    const rand = taggedHash("BIP0340/nonce", t, px, m);
    const k_ = modN(num(rand));
    if (k_ === _0n9)
      throw new Error("sign failed: k is zero");
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
    const e = challenge(rx, px, m);
    const sig = new Uint8Array(64);
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    if (!schnorrVerify(sig, m, px))
      throw new Error("sign: Invalid signature produced");
    return sig;
  }
  function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes("signature", signature, 64);
    const m = ensureBytes("message", message);
    const pub = ensureBytes("publicKey", publicKey, 32);
    try {
      const P = lift_x(num(pub));
      const r = num(sig.subarray(0, 32));
      if (!inRange(r, _1n9, secp256k1P))
        return false;
      const s = num(sig.subarray(32, 64));
      if (!inRange(s, _1n9, secp256k1N))
        return false;
      const e = challenge(numTo32b(r), pointToBytes(P), m);
      const R = GmulAdd(P, s, modN(-e));
      if (!R || !R.hasEvenY() || R.toAffine().x !== r)
        return false;
      return true;
    } catch (error) {
      return false;
    }
  }
  var schnorr = /* @__PURE__ */ (() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
      randomPrivateKey: secp256k1.utils.randomPrivateKey,
      lift_x,
      pointToBytes,
      numberToBytesBE,
      bytesToNumberBE,
      taggedHash,
      mod
    }
  }))();
  var isoMap = /* @__PURE__ */ (() => isogenyMap(Fp2, [
    // xNum
    [
      "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
      "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
      "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
      "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
    ],
    // xDen
    [
      "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
      "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
      // LAST 1
    ],
    // yNum
    [
      "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
      "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
      "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
      "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
    ],
    // yDen
    [
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
      "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
      "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
      // LAST 1
    ]
  ].map((i) => i.map((j) => BigInt(j)))))();
  var mapSWU = /* @__PURE__ */ (() => mapToCurveSimpleSWU(Fp2, {
    A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
    B: BigInt("1771"),
    Z: Fp2.create(BigInt("-11"))
  }))();
  var htf2 = /* @__PURE__ */ (() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fp2.create(scalars[0]));
    return isoMap(x, y);
  }, {
    DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
    encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
    p: Fp2.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: sha2562
  }))();
  var hashToCurve2 = /* @__PURE__ */ (() => htf2.hashToCurve)();
  var encodeToCurve2 = /* @__PURE__ */ (() => htf2.encodeToCurve)();

  // node_modules/@noble/curves/esm/p256.js
  init_dirname();
  init_buffer2();
  init_process2();
  var Fp3 = Field(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
  var CURVE_A = Fp3.create(BigInt("-3"));
  var CURVE_B = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
  var p256 = createCurve({
    a: CURVE_A,
    // Equation params: a, b
    b: CURVE_B,
    Fp: Fp3,
    // Field: 2n**224n * (2n**32n-1n) + 2n**192n + 2n**96n-1n
    // Curve order, total count of valid points in the field
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    // Base (generator) point (x, y)
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
    h: BigInt(1),
    lowS: false
  }, sha2562);
  var secp256r1 = p256;
  var mapSWU2 = /* @__PURE__ */ (() => mapToCurveSimpleSWU(Fp3, {
    A: CURVE_A,
    B: CURVE_B,
    Z: Fp3.create(BigInt("-10"))
  }))();
  var htf3 = /* @__PURE__ */ (() => createHasher(secp256r1.ProjectivePoint, (scalars) => mapSWU2(scalars[0]), {
    DST: "P256_XMD:SHA-256_SSWU_RO_",
    encodeDST: "P256_XMD:SHA-256_SSWU_NU_",
    p: Fp3.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: sha2562
  }))();
  var hashToCurve3 = /* @__PURE__ */ (() => htf3.hashToCurve)();
  var encodeToCurve3 = /* @__PURE__ */ (() => htf3.encodeToCurve)();

  // node_modules/@noble/hashes/esm/ripemd160.js
  init_dirname();
  init_buffer2();
  init_process2();
  var Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
  var Id = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((_, i) => i));
  var Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
  var idxL = [Id];
  var idxR = [Pi];
  for (let i = 0; i < 4; i++)
    for (let j of [idxL, idxR])
      j.push(j[i].map((k) => Rho[k]));
  var shifts = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
  ].map((i) => new Uint8Array(i));
  var shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
  var shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
  var Kl = /* @__PURE__ */ new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]);
  var Kr = /* @__PURE__ */ new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function f(group, x, y, z) {
    if (group === 0)
      return x ^ y ^ z;
    else if (group === 1)
      return x & y | ~x & z;
    else if (group === 2)
      return (x | ~y) ^ z;
    else if (group === 3)
      return x & z | y & ~z;
    else
      return x ^ (y | ~z);
  }
  var R_BUF = /* @__PURE__ */ new Uint32Array(16);
  var RIPEMD160 = class extends HashMD {
    constructor() {
      super(64, 20, 8, true);
      this.h0 = 1732584193 | 0;
      this.h1 = 4023233417 | 0;
      this.h2 = 2562383102 | 0;
      this.h3 = 271733878 | 0;
      this.h4 = 3285377520 | 0;
    }
    get() {
      const { h0, h1, h2, h3, h4 } = this;
      return [h0, h1, h2, h3, h4];
    }
    set(h0, h1, h2, h3, h4) {
      this.h0 = h0 | 0;
      this.h1 = h1 | 0;
      this.h2 = h2 | 0;
      this.h3 = h3 | 0;
      this.h4 = h4 | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        R_BUF[i] = view.getUint32(offset, true);
      let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
      for (let group = 0; group < 5; group++) {
        const rGroup = 4 - group;
        const hbl = Kl[group], hbr = Kr[group];
        const rl = idxL[group], rr = idxR[group];
        const sl = shiftsL[group], sr = shiftsR[group];
        for (let i = 0; i < 16; i++) {
          const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
          al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
        }
        for (let i = 0; i < 16; i++) {
          const tr = rotl(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
          ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
        }
      }
      this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
      R_BUF.fill(0);
    }
    destroy() {
      this.destroyed = true;
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0);
    }
  };
  var ripemd160 = /* @__PURE__ */ wrapConstructor(() => new RIPEMD160());

  // node_modules/did-resolver/lib/resolver.module.js
  init_dirname();
  init_buffer2();
  init_process2();
  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }
    if (result && result.then) {
      return result.then(void 0, recover);
    }
    return result;
  }
  function inMemoryCache() {
    const cache = /* @__PURE__ */ new Map();
    return function(parsed, resolve2) {
      try {
        let _temp2 = function(_result) {
          if (_exit) return _result;
          const cached = cache.get(parsed.didUrl);
          return cached !== void 0 ? cached : Promise.resolve(resolve2()).then(function(result) {
            var _result$didResolution;
            if (((_result$didResolution = result.didResolutionMetadata) == null ? void 0 : _result$didResolution.error) !== "notFound") {
              cache.set(parsed.didUrl, result);
            }
            return result;
          });
        };
        let _exit;
        const _temp = function() {
          if (parsed.params && parsed.params["no-cache"] === "true") {
            return Promise.resolve(resolve2()).then(function(_await$resolve) {
              _exit = 1;
              return _await$resolve;
            });
          }
        }();
        return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function noCache(parsed, resolve2) {
    return resolve2();
  }
  var PCT_ENCODED = "(?:%[0-9a-fA-F]{2})";
  var ID_CHAR = `(?:[a-zA-Z0-9._-]|${PCT_ENCODED})`;
  var METHOD = "([a-z0-9]+)";
  var METHOD_ID = `((?:${ID_CHAR}*:)*(${ID_CHAR}+))`;
  var PARAM_CHAR = "[a-zA-Z0-9_.:%-]";
  var PARAM = `;${PARAM_CHAR}+=${PARAM_CHAR}*`;
  var PARAMS = `((${PARAM})*)`;
  var PATH = `(/[^#?]*)?`;
  var QUERY = `([?][^#]*)?`;
  var FRAGMENT = `(#.*)?`;
  var DID_MATCHER = new RegExp(`^did:${METHOD}:${METHOD_ID}${PARAMS}${PATH}${QUERY}${FRAGMENT}$`);
  function parse(didUrl) {
    if (didUrl === "" || !didUrl) return null;
    const sections = didUrl.match(DID_MATCHER);
    if (sections) {
      const parts = {
        did: `did:${sections[1]}:${sections[2]}`,
        method: sections[1],
        id: sections[2],
        didUrl
      };
      if (sections[4]) {
        const params = sections[4].slice(1).split(";");
        parts.params = {};
        for (const p of params) {
          const kv = p.split("=");
          parts.params[kv[0]] = kv[1];
        }
      }
      if (sections[6]) parts.path = sections[6];
      if (sections[7]) parts.query = sections[7].slice(1);
      if (sections[8]) parts.fragment = sections[8].slice(1);
      return parts;
    }
    return null;
  }
  var EMPTY_RESULT = {
    didResolutionMetadata: {},
    didDocument: null,
    didDocumentMetadata: {}
  };
  function wrapLegacyResolver(resolve2) {
    return function(did, parsed, resolver) {
      try {
        return Promise.resolve(_catch(function() {
          return Promise.resolve(resolve2(did, parsed, resolver)).then(function(doc) {
            return {
              ...EMPTY_RESULT,
              didResolutionMetadata: {
                contentType: "application/did+ld+json"
              },
              didDocument: doc
            };
          });
        }, function(e) {
          return {
            ...EMPTY_RESULT,
            didResolutionMetadata: {
              error: "notFound",
              message: e.toString()
              // This is not in spec, but may be helpful
            }
          };
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  var Resolver = class {
    constructor(registry = {}, options = {}) {
      this.registry = void 0;
      this.cache = void 0;
      this.registry = registry;
      this.cache = options.cache === true ? inMemoryCache() : options.cache || noCache;
      if (options.legacyResolvers) {
        Object.keys(options.legacyResolvers).map((methodName) => {
          if (!this.registry[methodName]) {
            this.registry[methodName] = wrapLegacyResolver(
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              options.legacyResolvers[methodName]
            );
          }
        });
      }
    }
    resolve(didUrl, options = {}) {
      try {
        const _this = this;
        const parsed = parse(didUrl);
        if (parsed === null) {
          return Promise.resolve({
            ...EMPTY_RESULT,
            didResolutionMetadata: {
              error: "invalidDid"
            }
          });
        }
        const resolver = _this.registry[parsed.method];
        if (!resolver) {
          return Promise.resolve({
            ...EMPTY_RESULT,
            didResolutionMetadata: {
              error: "unsupportedDidMethod"
            }
          });
        }
        return Promise.resolve(_this.cache(parsed, () => resolver(parsed.did, parsed, _this, options)));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };

  // node_modules/@scure/base/lib/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  // @__NO_SIDE_EFFECTS__
  function assertNumber(n) {
    if (!Number.isSafeInteger(n))
      throw new Error(`Wrong integer: ${n}`);
  }
  function isBytes4(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  // @__NO_SIDE_EFFECTS__
  function chain(...args) {
    const id = (a) => a;
    const wrap = (a, b) => (c) => a(b(c));
    const encode11 = args.map((x) => x.encode).reduceRight(wrap, id);
    const decode10 = args.map((x) => x.decode).reduce(wrap, id);
    return { encode: encode11, decode: decode10 };
  }
  // @__NO_SIDE_EFFECTS__
  function alphabet2(alphabet3) {
    return {
      encode: (digits) => {
        if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
          throw new Error("alphabet.encode input should be an array of numbers");
        return digits.map((i) => {
          /* @__PURE__ */ assertNumber(i);
          if (i < 0 || i >= alphabet3.length)
            throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet3.length})`);
          return alphabet3[i];
        });
      },
      decode: (input) => {
        if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
          throw new Error("alphabet.decode input should be array of strings");
        return input.map((letter) => {
          if (typeof letter !== "string")
            throw new Error(`alphabet.decode: not string element=${letter}`);
          const index = alphabet3.indexOf(letter);
          if (index === -1)
            throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet3}`);
          return index;
        });
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function join(separator = "") {
    if (typeof separator !== "string")
      throw new Error("join separator should be string");
    return {
      encode: (from3) => {
        if (!Array.isArray(from3) || from3.length && typeof from3[0] !== "string")
          throw new Error("join.encode input should be array of strings");
        for (let i of from3)
          if (typeof i !== "string")
            throw new Error(`join.encode: non-string input=${i}`);
        return from3.join(separator);
      },
      decode: (to) => {
        if (typeof to !== "string")
          throw new Error("join.decode input should be string");
        return to.split(separator);
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function padding(bits, chr = "=") {
    /* @__PURE__ */ assertNumber(bits);
    if (typeof chr !== "string")
      throw new Error("padding chr should be string");
    return {
      encode(data) {
        if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
          throw new Error("padding.encode input should be array of strings");
        for (let i of data)
          if (typeof i !== "string")
            throw new Error(`padding.encode: non-string input=${i}`);
        while (data.length * bits % 8)
          data.push(chr);
        return data;
      },
      decode(input) {
        if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
          throw new Error("padding.encode input should be array of strings");
        for (let i of input)
          if (typeof i !== "string")
            throw new Error(`padding.decode: non-string input=${i}`);
        let end = input.length;
        if (end * bits % 8)
          throw new Error("Invalid padding: string should have whole number of bytes");
        for (; end > 0 && input[end - 1] === chr; end--) {
          if (!((end - 1) * bits % 8))
            throw new Error("Invalid padding: string has too much padding");
        }
        return input.slice(0, end);
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function normalize(fn) {
    if (typeof fn !== "function")
      throw new Error("normalize fn should be function");
    return { encode: (from3) => from3, decode: (to) => fn(to) };
  }
  // @__NO_SIDE_EFFECTS__
  function convertRadix(data, from3, to) {
    if (from3 < 2)
      throw new Error(`convertRadix: wrong from=${from3}, base cannot be less than 2`);
    if (to < 2)
      throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data))
      throw new Error("convertRadix: data should be array");
    if (!data.length)
      return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d) => {
      /* @__PURE__ */ assertNumber(d);
      if (d < 0 || d >= from3)
        throw new Error(`Wrong integer: ${d}`);
    });
    while (true) {
      let carry = 0;
      let done = true;
      for (let i = pos; i < digits.length; i++) {
        const digit = digits[i];
        const digitBase = from3 * carry + digit;
        if (!Number.isSafeInteger(digitBase) || from3 * carry / from3 !== carry || digitBase - digit !== from3 * carry) {
          throw new Error("convertRadix: carry overflow");
        }
        carry = digitBase % to;
        const rounded = Math.floor(digitBase / to);
        digits[i] = rounded;
        if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
          throw new Error("convertRadix: carry overflow");
        if (!done)
          continue;
        else if (!rounded)
          pos = i;
        else
          done = false;
      }
      res.push(carry);
      if (done)
        break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
      res.push(0);
    return res.reverse();
  }
  var gcd = /* @__NO_SIDE_EFFECTS__ */ (a, b) => !b ? a : /* @__PURE__ */ gcd(b, a % b);
  var radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from3, to) => from3 + (to - /* @__PURE__ */ gcd(from3, to));
  // @__NO_SIDE_EFFECTS__
  function convertRadix2(data, from3, to, padding2) {
    if (!Array.isArray(data))
      throw new Error("convertRadix2: data should be array");
    if (from3 <= 0 || from3 > 32)
      throw new Error(`convertRadix2: wrong from=${from3}`);
    if (to <= 0 || to > 32)
      throw new Error(`convertRadix2: wrong to=${to}`);
    if (/* @__PURE__ */ radix2carry(from3, to) > 32) {
      throw new Error(`convertRadix2: carry overflow from=${from3} to=${to} carryBits=${/* @__PURE__ */ radix2carry(from3, to)}`);
    }
    let carry = 0;
    let pos = 0;
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data) {
      /* @__PURE__ */ assertNumber(n);
      if (n >= 2 ** from3)
        throw new Error(`convertRadix2: invalid data word=${n} from=${from3}`);
      carry = carry << from3 | n;
      if (pos + from3 > 32)
        throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from3}`);
      pos += from3;
      for (; pos >= to; pos -= to)
        res.push((carry >> pos - to & mask) >>> 0);
      carry &= 2 ** pos - 1;
    }
    carry = carry << to - pos & mask;
    if (!padding2 && pos >= from3)
      throw new Error("Excess padding");
    if (!padding2 && carry)
      throw new Error(`Non-zero padding: ${carry}`);
    if (padding2 && pos > 0)
      res.push(carry >>> 0);
    return res;
  }
  // @__NO_SIDE_EFFECTS__
  function radix(num2) {
    /* @__PURE__ */ assertNumber(num2);
    return {
      encode: (bytes4) => {
        if (!isBytes4(bytes4))
          throw new Error("radix.encode input should be Uint8Array");
        return /* @__PURE__ */ convertRadix(Array.from(bytes4), 2 ** 8, num2);
      },
      decode: (digits) => {
        if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
          throw new Error("radix.decode input should be array of numbers");
        return Uint8Array.from(/* @__PURE__ */ convertRadix(digits, num2, 2 ** 8));
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function radix2(bits, revPadding = false) {
    /* @__PURE__ */ assertNumber(bits);
    if (bits <= 0 || bits > 32)
      throw new Error("radix2: bits should be in (0..32]");
    if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
      throw new Error("radix2: carry overflow");
    return {
      encode: (bytes4) => {
        if (!isBytes4(bytes4))
          throw new Error("radix2.encode input should be Uint8Array");
        return /* @__PURE__ */ convertRadix2(Array.from(bytes4), 8, bits, !revPadding);
      },
      decode: (digits) => {
        if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
          throw new Error("radix2.decode input should be array of numbers");
        return Uint8Array.from(/* @__PURE__ */ convertRadix2(digits, bits, 8, revPadding));
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function unsafeWrapper(fn) {
    if (typeof fn !== "function")
      throw new Error("unsafeWrapper fn should be function");
    return function(...args) {
      try {
        return fn.apply(null, args);
      } catch (e) {
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function checksum(len, fn) {
    /* @__PURE__ */ assertNumber(len);
    if (typeof fn !== "function")
      throw new Error("checksum fn should be function");
    return {
      encode(data) {
        if (!isBytes4(data))
          throw new Error("checksum.encode: input should be Uint8Array");
        const checksum2 = fn(data).slice(0, len);
        const res = new Uint8Array(data.length + len);
        res.set(data);
        res.set(checksum2, data.length);
        return res;
      },
      decode(data) {
        if (!isBytes4(data))
          throw new Error("checksum.decode: input should be Uint8Array");
        const payload = data.slice(0, -len);
        const newChecksum = fn(payload).slice(0, len);
        const oldChecksum = data.slice(-len);
        for (let i = 0; i < len; i++)
          if (newChecksum[i] !== oldChecksum[i])
            throw new Error("Invalid checksum");
        return payload;
      }
    };
  }
  var utils = {
    alphabet: alphabet2,
    chain,
    checksum,
    convertRadix,
    convertRadix2,
    radix,
    radix2,
    join,
    padding
  };
  var base162 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet2("0123456789ABCDEF"), /* @__PURE__ */ join(""));
  var base322 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));
  var base32nopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ join(""));
  var base32hex2 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet2("0123456789ABCDEFGHIJKLMNOPQRSTUV"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));
  var base32hexnopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet2("0123456789ABCDEFGHIJKLMNOPQRSTUV"), /* @__PURE__ */ join(""));
  var base32crockford = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet2("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), /* @__PURE__ */ join(""), /* @__PURE__ */ normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
  var base642 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
  var base64nopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ join(""));
  var base64url2 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
  var base64urlnopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), /* @__PURE__ */ join(""));
  var genBase58 = (abc) => /* @__PURE__ */ chain(/* @__PURE__ */ radix(58), /* @__PURE__ */ alphabet2(abc), /* @__PURE__ */ join(""));
  var base58 = /* @__PURE__ */ genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
  var base58flickr2 = /* @__PURE__ */ genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
  var base58xrp = /* @__PURE__ */ genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
  var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
  var base58xmr = {
    encode(data) {
      let res = "";
      for (let i = 0; i < data.length; i += 8) {
        const block = data.subarray(i, i + 8);
        res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
      }
      return res;
    },
    decode(str2) {
      let res = [];
      for (let i = 0; i < str2.length; i += 11) {
        const slice = str2.slice(i, i + 11);
        const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
        const block = base58.decode(slice);
        for (let j = 0; j < block.length - blockLen; j++) {
          if (block[j] !== 0)
            throw new Error("base58xmr: wrong padding");
        }
        res = res.concat(Array.from(block.slice(block.length - blockLen)));
      }
      return Uint8Array.from(res);
    }
  };
  var createBase58check = (sha2564) => /* @__PURE__ */ chain(/* @__PURE__ */ checksum(4, (data) => sha2564(sha2564(data))), base58);
  var base58check = createBase58check;
  var BECH_ALPHABET = /* @__PURE__ */ chain(/* @__PURE__ */ alphabet2("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ join(""));
  var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
  // @__NO_SIDE_EFFECTS__
  function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 33554431) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
      if ((b >> i & 1) === 1)
        chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
  }
  // @__NO_SIDE_EFFECTS__
  function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
      const c = prefix.charCodeAt(i);
      if (c < 33 || c > 126)
        throw new Error(`Invalid prefix (${prefix})`);
      chk = /* @__PURE__ */ bech32Polymod(chk) ^ c >> 5;
    }
    chk = /* @__PURE__ */ bech32Polymod(chk);
    for (let i = 0; i < len; i++)
      chk = /* @__PURE__ */ bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
    for (let v of words)
      chk = /* @__PURE__ */ bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
      chk = /* @__PURE__ */ bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(/* @__PURE__ */ convertRadix2([chk % 2 ** 30], 30, 5, false));
  }
  // @__NO_SIDE_EFFECTS__
  function genBech32(encoding) {
    const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
    const _words = /* @__PURE__ */ radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = /* @__PURE__ */ unsafeWrapper(fromWords);
    function encode11(prefix, words, limit = 90) {
      if (typeof prefix !== "string")
        throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
      if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
        throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
      if (prefix.length === 0)
        throw new TypeError(`Invalid prefix length ${prefix.length}`);
      const actualLength = prefix.length + 7 + words.length;
      if (limit !== false && actualLength > limit)
        throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
      const lowered = prefix.toLowerCase();
      const sum = /* @__PURE__ */ bechChecksum(lowered, words, ENCODING_CONST);
      return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
    }
    function decode10(str2, limit = 90) {
      if (typeof str2 !== "string")
        throw new Error(`bech32.decode input should be string, not ${typeof str2}`);
      if (str2.length < 8 || limit !== false && str2.length > limit)
        throw new TypeError(`Wrong string length: ${str2.length} (${str2}). Expected (8..${limit})`);
      const lowered = str2.toLowerCase();
      if (str2 !== lowered && str2 !== str2.toUpperCase())
        throw new Error(`String must be lowercase or uppercase`);
      const sepIndex = lowered.lastIndexOf("1");
      if (sepIndex === 0 || sepIndex === -1)
        throw new Error(`Letter "1" must be present between prefix and data only`);
      const prefix = lowered.slice(0, sepIndex);
      const data = lowered.slice(sepIndex + 1);
      if (data.length < 6)
        throw new Error("Data must be at least 6 characters long");
      const words = BECH_ALPHABET.decode(data).slice(0, -6);
      const sum = /* @__PURE__ */ bechChecksum(prefix, words, ENCODING_CONST);
      if (!data.endsWith(sum))
        throw new Error(`Invalid checksum in ${str2}: expected "${sum}"`);
      return { prefix, words };
    }
    const decodeUnsafe = /* @__PURE__ */ unsafeWrapper(decode10);
    function decodeToBytes(str2) {
      const { prefix, words } = decode10(str2, false);
      return { prefix, words, bytes: fromWords(words) };
    }
    return { encode: encode11, decode: decode10, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
  }
  var bech32 = /* @__PURE__ */ genBech32("bech32");
  var bech32m = /* @__PURE__ */ genBech32("bech32m");
  var utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str2) => new TextEncoder().encode(str2)
  };
  var hex = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet2("0123456789abcdef"), /* @__PURE__ */ join(""), /* @__PURE__ */ normalize((s) => {
    if (typeof s !== "string" || s.length % 2)
      throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
  }));
  var CODERS = {
    utf8,
    hex,
    base16: base162,
    base32: base322,
    base64: base642,
    base64url: base64url2,
    base58,
    base58xmr
  };
  var coderTypeError = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
  var bytesToString = (type, bytes4) => {
    if (typeof type !== "string" || !CODERS.hasOwnProperty(type))
      throw new TypeError(coderTypeError);
    if (!isBytes4(bytes4))
      throw new TypeError("bytesToString() expects Uint8Array");
    return CODERS[type].encode(bytes4);
  };
  var str = bytesToString;
  var stringToBytes = (type, str2) => {
    if (!CODERS.hasOwnProperty(type))
      throw new TypeError(coderTypeError);
    if (typeof str2 !== "string")
      throw new TypeError("stringToBytes() expects string");
    return CODERS[type].decode(str2);
  };
  var bytes2 = stringToBytes;

  // node_modules/@noble/ciphers/esm/chacha.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/ciphers/esm/utils.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@noble/ciphers/esm/_assert.js
  init_dirname();
  init_buffer2();
  init_process2();
  function number2(n) {
    if (!Number.isSafeInteger(n) || n < 0)
      throw new Error(`positive integer expected, not ${n}`);
  }
  function bool2(b) {
    if (typeof b !== "boolean")
      throw new Error(`boolean expected, not ${b}`);
  }
  function isBytes5(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes3(b, ...lengths) {
    if (!isBytes5(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
  }
  function hash2(hash3) {
    if (typeof hash3 !== "function" || typeof hash3.create !== "function")
      throw new Error("hash must be wrapped by utils.wrapConstructor");
    number2(hash3.outputLen);
    number2(hash3.blockLen);
  }
  function exists2(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output2(out, instance) {
    bytes3(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  var assert3 = { number: number2, bool: bool2, bytes: bytes3, hash: hash2, exists: exists2, output: output2 };
  var assert_default2 = assert3;

  // node_modules/@noble/ciphers/esm/utils.js
  var u82 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  var u16 = (arr) => new Uint16Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 2));
  var u322 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  var createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  var isLE2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  if (!isLE2)
    throw new Error("Non little-endian hardware is not supported");
  var hexes3 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex3(bytes4) {
    bytes3(bytes4);
    let hex2 = "";
    for (let i = 0; i < bytes4.length; i++) {
      hex2 += hexes3[bytes4[i]];
    }
    return hex2;
  }
  var asciis3 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase163(char) {
    if (char >= asciis3._0 && char <= asciis3._9)
      return char - asciis3._0;
    if (char >= asciis3._A && char <= asciis3._F)
      return char - (asciis3._A - 10);
    if (char >= asciis3._a && char <= asciis3._f)
      return char - (asciis3._a - 10);
    return;
  }
  function hexToBytes3(hex2) {
    if (typeof hex2 !== "string")
      throw new Error("hex string expected, got " + typeof hex2);
    const hl = hex2.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase163(hex2.charCodeAt(hi));
      const n2 = asciiToBase163(hex2.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex2[hi] + hex2[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function hexToNumber2(hex2) {
    if (typeof hex2 !== "string")
      throw new Error("hex string expected, got " + typeof hex2);
    return BigInt(hex2 === "" ? "0" : `0x${hex2}`);
  }
  function bytesToNumberBE2(bytes4) {
    return hexToNumber2(bytesToHex3(bytes4));
  }
  function numberToBytesBE2(n, len) {
    return hexToBytes3(n.toString(16).padStart(len * 2, "0"));
  }
  var nextTick3 = async () => {
  };
  async function asyncLoop2(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
      cb(i);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await nextTick3();
      ts += diff;
    }
  }
  function utf8ToBytes3(str2) {
    if (typeof str2 !== "string")
      throw new Error(`string expected, got ${typeof str2}`);
    return new Uint8Array(new TextEncoder().encode(str2));
  }
  function bytesToUtf8(bytes4) {
    return new TextDecoder().decode(bytes4);
  }
  function toBytes2(data) {
    if (typeof data === "string")
      data = utf8ToBytes3(data);
    else if (isBytes5(data))
      data = data.slice();
    else
      throw new Error(`Uint8Array expected, got ${typeof data}`);
    return data;
  }
  function concatBytes3(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
      const a = arrays[i];
      bytes3(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  function checkOpts2(defaults2, opts) {
    if (opts == null || typeof opts !== "object")
      throw new Error("options must be defined");
    const merged = Object.assign(defaults2, opts);
    return merged;
  }
  function equalBytes2(a, b) {
    if (a.length !== b.length)
      return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
      diff |= a[i] ^ b[i];
    return diff === 0;
  }
  var Hash2 = class {
  };
  var wrapCipher = /* @__NO_SIDE_EFFECTS__ */ (params, c) => {
    Object.assign(c, params);
    return c;
  };
  function setBigUint642(view, byteOffset, value, isLE3) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE3);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE3 ? 4 : 0;
    const l = isLE3 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE3);
    view.setUint32(byteOffset + l, wl, isLE3);
  }
  function u64Lengths(ciphertext, AAD) {
    const num2 = new Uint8Array(16);
    const view = createView2(num2);
    setBigUint642(view, 0, BigInt(AAD ? AAD.length : 0), true);
    setBigUint642(view, 8, BigInt(ciphertext.length), true);
    return num2;
  }

  // node_modules/@noble/ciphers/esm/_poly1305.js
  init_dirname();
  init_buffer2();
  init_process2();
  var u8to16 = (a, i) => a[i++] & 255 | (a[i++] & 255) << 8;
  var Poly1305 = class {
    constructor(key) {
      this.blockLen = 16;
      this.outputLen = 16;
      this.buffer = new Uint8Array(16);
      this.r = new Uint16Array(10);
      this.h = new Uint16Array(10);
      this.pad = new Uint16Array(8);
      this.pos = 0;
      this.finished = false;
      key = toBytes2(key);
      bytes3(key, 32);
      const t0 = u8to16(key, 0);
      const t1 = u8to16(key, 2);
      const t2 = u8to16(key, 4);
      const t3 = u8to16(key, 6);
      const t4 = u8to16(key, 8);
      const t5 = u8to16(key, 10);
      const t6 = u8to16(key, 12);
      const t7 = u8to16(key, 14);
      this.r[0] = t0 & 8191;
      this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
      this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
      this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
      this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
      this.r[5] = t4 >>> 1 & 8190;
      this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
      this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
      this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
      this.r[9] = t7 >>> 5 & 127;
      for (let i = 0; i < 8; i++)
        this.pad[i] = u8to16(key, 16 + 2 * i);
    }
    process(data, offset, isLast = false) {
      const hibit = isLast ? 0 : 1 << 11;
      const { h, r } = this;
      const r0 = r[0];
      const r1 = r[1];
      const r2 = r[2];
      const r3 = r[3];
      const r4 = r[4];
      const r5 = r[5];
      const r6 = r[6];
      const r7 = r[7];
      const r8 = r[8];
      const r9 = r[9];
      const t0 = u8to16(data, offset + 0);
      const t1 = u8to16(data, offset + 2);
      const t2 = u8to16(data, offset + 4);
      const t3 = u8to16(data, offset + 6);
      const t4 = u8to16(data, offset + 8);
      const t5 = u8to16(data, offset + 10);
      const t6 = u8to16(data, offset + 12);
      const t7 = u8to16(data, offset + 14);
      let h0 = h[0] + (t0 & 8191);
      let h1 = h[1] + ((t0 >>> 13 | t1 << 3) & 8191);
      let h2 = h[2] + ((t1 >>> 10 | t2 << 6) & 8191);
      let h3 = h[3] + ((t2 >>> 7 | t3 << 9) & 8191);
      let h4 = h[4] + ((t3 >>> 4 | t4 << 12) & 8191);
      let h5 = h[5] + (t4 >>> 1 & 8191);
      let h6 = h[6] + ((t4 >>> 14 | t5 << 2) & 8191);
      let h7 = h[7] + ((t5 >>> 11 | t6 << 5) & 8191);
      let h8 = h[8] + ((t6 >>> 8 | t7 << 8) & 8191);
      let h9 = h[9] + (t7 >>> 5 | hibit);
      let c = 0;
      let d0 = c + h0 * r0 + h1 * (5 * r9) + h2 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
      c = d0 >>> 13;
      d0 &= 8191;
      d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r2) + h9 * (5 * r1);
      c += d0 >>> 13;
      d0 &= 8191;
      let d1 = c + h0 * r1 + h1 * r0 + h2 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
      c = d1 >>> 13;
      d1 &= 8191;
      d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r2);
      c += d1 >>> 13;
      d1 &= 8191;
      let d2 = c + h0 * r2 + h1 * r1 + h2 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
      c = d2 >>> 13;
      d2 &= 8191;
      d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
      c += d2 >>> 13;
      d2 &= 8191;
      let d3 = c + h0 * r3 + h1 * r2 + h2 * r1 + h3 * r0 + h4 * (5 * r9);
      c = d3 >>> 13;
      d3 &= 8191;
      d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
      c += d3 >>> 13;
      d3 &= 8191;
      let d4 = c + h0 * r4 + h1 * r3 + h2 * r2 + h3 * r1 + h4 * r0;
      c = d4 >>> 13;
      d4 &= 8191;
      d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
      c += d4 >>> 13;
      d4 &= 8191;
      let d5 = c + h0 * r5 + h1 * r4 + h2 * r3 + h3 * r2 + h4 * r1;
      c = d5 >>> 13;
      d5 &= 8191;
      d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
      c += d5 >>> 13;
      d5 &= 8191;
      let d6 = c + h0 * r6 + h1 * r5 + h2 * r4 + h3 * r3 + h4 * r2;
      c = d6 >>> 13;
      d6 &= 8191;
      d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
      c += d6 >>> 13;
      d6 &= 8191;
      let d7 = c + h0 * r7 + h1 * r6 + h2 * r5 + h3 * r4 + h4 * r3;
      c = d7 >>> 13;
      d7 &= 8191;
      d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
      c += d7 >>> 13;
      d7 &= 8191;
      let d8 = c + h0 * r8 + h1 * r7 + h2 * r6 + h3 * r5 + h4 * r4;
      c = d8 >>> 13;
      d8 &= 8191;
      d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
      c += d8 >>> 13;
      d8 &= 8191;
      let d9 = c + h0 * r9 + h1 * r8 + h2 * r7 + h3 * r6 + h4 * r5;
      c = d9 >>> 13;
      d9 &= 8191;
      d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
      c += d9 >>> 13;
      d9 &= 8191;
      c = (c << 2) + c | 0;
      c = c + d0 | 0;
      d0 = c & 8191;
      c = c >>> 13;
      d1 += c;
      h[0] = d0;
      h[1] = d1;
      h[2] = d2;
      h[3] = d3;
      h[4] = d4;
      h[5] = d5;
      h[6] = d6;
      h[7] = d7;
      h[8] = d8;
      h[9] = d9;
    }
    finalize() {
      const { h, pad } = this;
      const g = new Uint16Array(10);
      let c = h[1] >>> 13;
      h[1] &= 8191;
      for (let i = 2; i < 10; i++) {
        h[i] += c;
        c = h[i] >>> 13;
        h[i] &= 8191;
      }
      h[0] += c * 5;
      c = h[0] >>> 13;
      h[0] &= 8191;
      h[1] += c;
      c = h[1] >>> 13;
      h[1] &= 8191;
      h[2] += c;
      g[0] = h[0] + 5;
      c = g[0] >>> 13;
      g[0] &= 8191;
      for (let i = 1; i < 10; i++) {
        g[i] = h[i] + c;
        c = g[i] >>> 13;
        g[i] &= 8191;
      }
      g[9] -= 1 << 13;
      let mask = (c ^ 1) - 1;
      for (let i = 0; i < 10; i++)
        g[i] &= mask;
      mask = ~mask;
      for (let i = 0; i < 10; i++)
        h[i] = h[i] & mask | g[i];
      h[0] = (h[0] | h[1] << 13) & 65535;
      h[1] = (h[1] >>> 3 | h[2] << 10) & 65535;
      h[2] = (h[2] >>> 6 | h[3] << 7) & 65535;
      h[3] = (h[3] >>> 9 | h[4] << 4) & 65535;
      h[4] = (h[4] >>> 12 | h[5] << 1 | h[6] << 14) & 65535;
      h[5] = (h[6] >>> 2 | h[7] << 11) & 65535;
      h[6] = (h[7] >>> 5 | h[8] << 8) & 65535;
      h[7] = (h[8] >>> 8 | h[9] << 5) & 65535;
      let f2 = h[0] + pad[0];
      h[0] = f2 & 65535;
      for (let i = 1; i < 8; i++) {
        f2 = (h[i] + pad[i] | 0) + (f2 >>> 16) | 0;
        h[i] = f2 & 65535;
      }
    }
    update(data) {
      exists2(this);
      const { buffer, blockLen } = this;
      data = toBytes2(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(data, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(buffer, 0, false);
          this.pos = 0;
        }
      }
      return this;
    }
    destroy() {
      this.h.fill(0);
      this.r.fill(0);
      this.buffer.fill(0);
      this.pad.fill(0);
    }
    digestInto(out) {
      exists2(this);
      output2(out, this);
      this.finished = true;
      const { buffer, h } = this;
      let { pos } = this;
      if (pos) {
        buffer[pos++] = 1;
        for (; pos < 16; pos++)
          buffer[pos] = 0;
        this.process(buffer, 0, true);
      }
      this.finalize();
      let opos = 0;
      for (let i = 0; i < 8; i++) {
        out[opos++] = h[i] >>> 0;
        out[opos++] = h[i] >>> 8;
      }
      return out;
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
  };
  function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key) => hashCons(key).update(toBytes2(msg)).digest();
    const tmp = hashCons(new Uint8Array(32));
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key) => hashCons(key);
    return hashC;
  }
  var poly1305 = wrapConstructorWithKey((key) => new Poly1305(key));

  // node_modules/@noble/ciphers/esm/_arx.js
  init_dirname();
  init_buffer2();
  init_process2();
  var _utf8ToBytes = (str2) => Uint8Array.from(str2.split("").map((c) => c.charCodeAt(0)));
  var sigma16 = _utf8ToBytes("expand 16-byte k");
  var sigma32 = _utf8ToBytes("expand 32-byte k");
  var sigma16_32 = u322(sigma16);
  var sigma32_32 = u322(sigma32);
  var sigma = sigma32_32.slice();
  function rotl2(a, b) {
    return a << b | a >>> 32 - b;
  }
  function isAligned32(b) {
    return b.byteOffset % 4 === 0;
  }
  var BLOCK_LEN = 64;
  var BLOCK_LEN32 = 16;
  var MAX_COUNTER = 2 ** 32 - 1;
  var U32_EMPTY = new Uint32Array();
  function runCipher(core, sigma2, key, nonce, data, output3, counter, rounds) {
    const len = data.length;
    const block = new Uint8Array(BLOCK_LEN);
    const b32 = u322(block);
    const isAligned = isAligned32(data) && isAligned32(output3);
    const d32 = isAligned ? u322(data) : U32_EMPTY;
    const o32 = isAligned ? u322(output3) : U32_EMPTY;
    for (let pos = 0; pos < len; counter++) {
      core(sigma2, key, nonce, b32, counter, rounds);
      if (counter >= MAX_COUNTER)
        throw new Error("arx: counter overflow");
      const take = Math.min(BLOCK_LEN, len - pos);
      if (isAligned && take === BLOCK_LEN) {
        const pos32 = pos / 4;
        if (pos % 4 !== 0)
          throw new Error("arx: invalid block position");
        for (let j = 0, posj; j < BLOCK_LEN32; j++) {
          posj = pos32 + j;
          o32[posj] = d32[posj] ^ b32[j];
        }
        pos += BLOCK_LEN;
        continue;
      }
      for (let j = 0, posj; j < take; j++) {
        posj = pos + j;
        output3[posj] = data[posj] ^ block[j];
      }
      pos += take;
    }
  }
  function createCipher(core, opts) {
    const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } = checkOpts2({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, opts);
    if (typeof core !== "function")
      throw new Error("core must be a function");
    number2(counterLength);
    number2(rounds);
    bool2(counterRight);
    bool2(allowShortKeys);
    return (key, nonce, data, output3, counter = 0) => {
      bytes3(key);
      bytes3(nonce);
      bytes3(data);
      const len = data.length;
      if (!output3)
        output3 = new Uint8Array(len);
      bytes3(output3);
      number2(counter);
      if (counter < 0 || counter >= MAX_COUNTER)
        throw new Error("arx: counter overflow");
      if (output3.length < len)
        throw new Error(`arx: output (${output3.length}) is shorter than data (${len})`);
      const toClean = [];
      let l = key.length, k, sigma2;
      if (l === 32) {
        k = key.slice();
        toClean.push(k);
        sigma2 = sigma32_32;
      } else if (l === 16 && allowShortKeys) {
        k = new Uint8Array(32);
        k.set(key);
        k.set(key, 16);
        sigma2 = sigma16_32;
        toClean.push(k);
      } else {
        throw new Error(`arx: invalid 32-byte key, got length=${l}`);
      }
      if (!isAligned32(nonce)) {
        nonce = nonce.slice();
        toClean.push(nonce);
      }
      const k32 = u322(k);
      if (extendNonceFn) {
        if (nonce.length !== 24)
          throw new Error(`arx: extended nonce must be 24 bytes`);
        extendNonceFn(sigma2, k32, u322(nonce.subarray(0, 16)), k32);
        nonce = nonce.subarray(16);
      }
      const nonceNcLen = 16 - counterLength;
      if (nonceNcLen !== nonce.length)
        throw new Error(`arx: nonce must be ${nonceNcLen} or 16 bytes`);
      if (nonceNcLen !== 12) {
        const nc = new Uint8Array(12);
        nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
        nonce = nc;
        toClean.push(nonce);
      }
      const n32 = u322(nonce);
      runCipher(core, sigma2, k32, n32, data, output3, counter, rounds);
      while (toClean.length > 0)
        toClean.pop().fill(0);
      return output3;
    };
  }

  // node_modules/@noble/ciphers/esm/chacha.js
  function chachaCore(s, k, n, out, cnt, rounds = 20) {
    let y00 = s[0], y01 = s[1], y02 = s[2], y03 = s[3], y04 = k[0], y05 = k[1], y06 = k[2], y07 = k[3], y08 = k[4], y09 = k[5], y10 = k[6], y11 = k[7], y12 = cnt, y13 = n[0], y14 = n[1], y15 = n[2];
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    for (let r = 0; r < rounds; r += 2) {
      x00 = x00 + x04 | 0;
      x12 = rotl2(x12 ^ x00, 16);
      x08 = x08 + x12 | 0;
      x04 = rotl2(x04 ^ x08, 12);
      x00 = x00 + x04 | 0;
      x12 = rotl2(x12 ^ x00, 8);
      x08 = x08 + x12 | 0;
      x04 = rotl2(x04 ^ x08, 7);
      x01 = x01 + x05 | 0;
      x13 = rotl2(x13 ^ x01, 16);
      x09 = x09 + x13 | 0;
      x05 = rotl2(x05 ^ x09, 12);
      x01 = x01 + x05 | 0;
      x13 = rotl2(x13 ^ x01, 8);
      x09 = x09 + x13 | 0;
      x05 = rotl2(x05 ^ x09, 7);
      x02 = x02 + x06 | 0;
      x14 = rotl2(x14 ^ x02, 16);
      x10 = x10 + x14 | 0;
      x06 = rotl2(x06 ^ x10, 12);
      x02 = x02 + x06 | 0;
      x14 = rotl2(x14 ^ x02, 8);
      x10 = x10 + x14 | 0;
      x06 = rotl2(x06 ^ x10, 7);
      x03 = x03 + x07 | 0;
      x15 = rotl2(x15 ^ x03, 16);
      x11 = x11 + x15 | 0;
      x07 = rotl2(x07 ^ x11, 12);
      x03 = x03 + x07 | 0;
      x15 = rotl2(x15 ^ x03, 8);
      x11 = x11 + x15 | 0;
      x07 = rotl2(x07 ^ x11, 7);
      x00 = x00 + x05 | 0;
      x15 = rotl2(x15 ^ x00, 16);
      x10 = x10 + x15 | 0;
      x05 = rotl2(x05 ^ x10, 12);
      x00 = x00 + x05 | 0;
      x15 = rotl2(x15 ^ x00, 8);
      x10 = x10 + x15 | 0;
      x05 = rotl2(x05 ^ x10, 7);
      x01 = x01 + x06 | 0;
      x12 = rotl2(x12 ^ x01, 16);
      x11 = x11 + x12 | 0;
      x06 = rotl2(x06 ^ x11, 12);
      x01 = x01 + x06 | 0;
      x12 = rotl2(x12 ^ x01, 8);
      x11 = x11 + x12 | 0;
      x06 = rotl2(x06 ^ x11, 7);
      x02 = x02 + x07 | 0;
      x13 = rotl2(x13 ^ x02, 16);
      x08 = x08 + x13 | 0;
      x07 = rotl2(x07 ^ x08, 12);
      x02 = x02 + x07 | 0;
      x13 = rotl2(x13 ^ x02, 8);
      x08 = x08 + x13 | 0;
      x07 = rotl2(x07 ^ x08, 7);
      x03 = x03 + x04 | 0;
      x14 = rotl2(x14 ^ x03, 16);
      x09 = x09 + x14 | 0;
      x04 = rotl2(x04 ^ x09, 12);
      x03 = x03 + x04 | 0;
      x14 = rotl2(x14 ^ x03, 8);
      x09 = x09 + x14 | 0;
      x04 = rotl2(x04 ^ x09, 7);
    }
    let oi = 0;
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
  }
  function hchacha(s, k, i, o32) {
    let x00 = s[0], x01 = s[1], x02 = s[2], x03 = s[3], x04 = k[0], x05 = k[1], x06 = k[2], x07 = k[3], x08 = k[4], x09 = k[5], x10 = k[6], x11 = k[7], x12 = i[0], x13 = i[1], x14 = i[2], x15 = i[3];
    for (let r = 0; r < 20; r += 2) {
      x00 = x00 + x04 | 0;
      x12 = rotl2(x12 ^ x00, 16);
      x08 = x08 + x12 | 0;
      x04 = rotl2(x04 ^ x08, 12);
      x00 = x00 + x04 | 0;
      x12 = rotl2(x12 ^ x00, 8);
      x08 = x08 + x12 | 0;
      x04 = rotl2(x04 ^ x08, 7);
      x01 = x01 + x05 | 0;
      x13 = rotl2(x13 ^ x01, 16);
      x09 = x09 + x13 | 0;
      x05 = rotl2(x05 ^ x09, 12);
      x01 = x01 + x05 | 0;
      x13 = rotl2(x13 ^ x01, 8);
      x09 = x09 + x13 | 0;
      x05 = rotl2(x05 ^ x09, 7);
      x02 = x02 + x06 | 0;
      x14 = rotl2(x14 ^ x02, 16);
      x10 = x10 + x14 | 0;
      x06 = rotl2(x06 ^ x10, 12);
      x02 = x02 + x06 | 0;
      x14 = rotl2(x14 ^ x02, 8);
      x10 = x10 + x14 | 0;
      x06 = rotl2(x06 ^ x10, 7);
      x03 = x03 + x07 | 0;
      x15 = rotl2(x15 ^ x03, 16);
      x11 = x11 + x15 | 0;
      x07 = rotl2(x07 ^ x11, 12);
      x03 = x03 + x07 | 0;
      x15 = rotl2(x15 ^ x03, 8);
      x11 = x11 + x15 | 0;
      x07 = rotl2(x07 ^ x11, 7);
      x00 = x00 + x05 | 0;
      x15 = rotl2(x15 ^ x00, 16);
      x10 = x10 + x15 | 0;
      x05 = rotl2(x05 ^ x10, 12);
      x00 = x00 + x05 | 0;
      x15 = rotl2(x15 ^ x00, 8);
      x10 = x10 + x15 | 0;
      x05 = rotl2(x05 ^ x10, 7);
      x01 = x01 + x06 | 0;
      x12 = rotl2(x12 ^ x01, 16);
      x11 = x11 + x12 | 0;
      x06 = rotl2(x06 ^ x11, 12);
      x01 = x01 + x06 | 0;
      x12 = rotl2(x12 ^ x01, 8);
      x11 = x11 + x12 | 0;
      x06 = rotl2(x06 ^ x11, 7);
      x02 = x02 + x07 | 0;
      x13 = rotl2(x13 ^ x02, 16);
      x08 = x08 + x13 | 0;
      x07 = rotl2(x07 ^ x08, 12);
      x02 = x02 + x07 | 0;
      x13 = rotl2(x13 ^ x02, 8);
      x08 = x08 + x13 | 0;
      x07 = rotl2(x07 ^ x08, 7);
      x03 = x03 + x04 | 0;
      x14 = rotl2(x14 ^ x03, 16);
      x09 = x09 + x14 | 0;
      x04 = rotl2(x04 ^ x09, 12);
      x03 = x03 + x04 | 0;
      x14 = rotl2(x14 ^ x03, 8);
      x09 = x09 + x14 | 0;
      x04 = rotl2(x04 ^ x09, 7);
    }
    let oi = 0;
    o32[oi++] = x00;
    o32[oi++] = x01;
    o32[oi++] = x02;
    o32[oi++] = x03;
    o32[oi++] = x12;
    o32[oi++] = x13;
    o32[oi++] = x14;
    o32[oi++] = x15;
  }
  var chacha20orig = /* @__PURE__ */ createCipher(chachaCore, {
    counterRight: false,
    counterLength: 8,
    allowShortKeys: true
  });
  var chacha20 = /* @__PURE__ */ createCipher(chachaCore, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  });
  var xchacha20 = /* @__PURE__ */ createCipher(chachaCore, {
    counterRight: false,
    counterLength: 8,
    extendNonceFn: hchacha,
    allowShortKeys: false
  });
  var chacha8 = /* @__PURE__ */ createCipher(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 8
  });
  var chacha12 = /* @__PURE__ */ createCipher(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 12
  });
  var ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
  var updatePadded = (h, msg) => {
    h.update(msg);
    const left = msg.length % 16;
    if (left)
      h.update(ZEROS16.subarray(left));
  };
  var ZEROS32 = /* @__PURE__ */ new Uint8Array(32);
  function computeTag(fn, key, nonce, data, AAD) {
    const authKey = fn(key, nonce, ZEROS32);
    const h = poly1305.create(authKey);
    if (AAD)
      updatePadded(h, AAD);
    updatePadded(h, data);
    const num2 = new Uint8Array(16);
    const view = createView2(num2);
    setBigUint642(view, 0, BigInt(AAD ? AAD.length : 0), true);
    setBigUint642(view, 8, BigInt(data.length), true);
    h.update(num2);
    const res = h.digest();
    authKey.fill(0);
    return res;
  }
  var _poly1305_aead = (xorStream) => (key, nonce, AAD) => {
    const tagLength = 16;
    bytes3(key, 32);
    bytes3(nonce);
    return {
      encrypt: (plaintext, output3) => {
        const plength = plaintext.length;
        const clength = plength + tagLength;
        if (output3) {
          bytes3(output3, clength);
        } else {
          output3 = new Uint8Array(clength);
        }
        xorStream(key, nonce, plaintext, output3, 1);
        const tag = computeTag(xorStream, key, nonce, output3.subarray(0, -tagLength), AAD);
        output3.set(tag, plength);
        return output3;
      },
      decrypt: (ciphertext, output3) => {
        const clength = ciphertext.length;
        const plength = clength - tagLength;
        if (clength < tagLength)
          throw new Error(`encrypted data must be at least ${tagLength} bytes`);
        if (output3) {
          bytes3(output3, plength);
        } else {
          output3 = new Uint8Array(plength);
        }
        const data = ciphertext.subarray(0, -tagLength);
        const passedTag = ciphertext.subarray(-tagLength);
        const tag = computeTag(xorStream, key, nonce, data, AAD);
        if (!equalBytes2(passedTag, tag))
          throw new Error("invalid tag");
        xorStream(key, nonce, data, output3, 1);
        return output3;
      }
    };
  };
  var chacha20poly1305 = /* @__PURE__ */ wrapCipher({ blockSize: 64, nonceLength: 12, tagLength: 16 }, _poly1305_aead(chacha20));
  var xchacha20poly1305 = /* @__PURE__ */ wrapCipher({ blockSize: 64, nonceLength: 24, tagLength: 16 }, _poly1305_aead(xchacha20));

  // node_modules/did-jwt/lib/index.module.js
  var import_multibase = __toESM(require_src2(), 1);
  var import_canonicalize = __toESM(require_canonicalize(), 1);
  var u8a = {
    toString: toString2,
    fromString: fromString2,
    concat
  };
  function bytesToBase64url(b) {
    return u8a.toString(b, "base64url");
  }
  function base64ToBytes(s) {
    const inputBase64Url = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    return u8a.fromString(inputBase64Url, "base64url");
  }
  function base58ToBytes(s) {
    return u8a.fromString(s, "base58btc");
  }
  function bytesToBase58(b) {
    return u8a.toString(b, "base58btc");
  }
  var SUPPORTED_PUBLIC_KEY_TYPES = {
    ES256: ["JsonWebKey2020", "Multikey", "EcdsaSecp256r1VerificationKey2019"],
    ES256K: [
      "EcdsaSecp256k1VerificationKey2019",
      /**
       * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
       */
      "EcdsaSecp256k1RecoveryMethod2020",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "Secp256k1VerificationKey2018",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "Secp256k1SignatureVerificationKey2018",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "EcdsaPublicKeySecp256k1",
      /**
       *   'ConditionalProof2022',
       */
      "JsonWebKey2020",
      "Multikey"
    ],
    "ES256K-R": [
      "EcdsaSecp256k1VerificationKey2019",
      /**
       * Equivalent to EcdsaSecp256k1VerificationKey2019 when key is an ethereumAddress
       */
      "EcdsaSecp256k1RecoveryMethod2020",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "Secp256k1VerificationKey2018",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "Secp256k1SignatureVerificationKey2018",
      /**
       * @deprecated, supported for backward compatibility. Equivalent to EcdsaSecp256k1VerificationKey2019 when key is
       *   not an ethereumAddress
       */
      "EcdsaPublicKeySecp256k1",
      "ConditionalProof2022",
      "JsonWebKey2020",
      "Multikey"
    ],
    Ed25519: ["ED25519SignatureVerification", "Ed25519VerificationKey2018", "Ed25519VerificationKey2020", "JsonWebKey2020", "Multikey"],
    EdDSA: ["ED25519SignatureVerification", "Ed25519VerificationKey2018", "Ed25519VerificationKey2020", "JsonWebKey2020", "Multikey"]
  };
  var VM_TO_KEY_TYPE = {
    Secp256k1SignatureVerificationKey2018: "Secp256k1",
    Secp256k1VerificationKey2018: "Secp256k1",
    EcdsaSecp256k1VerificationKey2019: "Secp256k1",
    EcdsaPublicKeySecp256k1: "Secp256k1",
    EcdsaSecp256k1RecoveryMethod2020: "Secp256k1",
    EcdsaSecp256r1VerificationKey2019: "P-256",
    Ed25519VerificationKey2018: "Ed25519",
    Ed25519VerificationKey2020: "Ed25519",
    ED25519SignatureVerification: "Ed25519",
    X25519KeyAgreementKey2019: "X25519",
    X25519KeyAgreementKey2020: "X25519",
    ConditionalProof2022: void 0,
    JsonWebKey2020: void 0,
    Multikey: void 0
    // key type must be extracted from the multicodec
  };
  var supportedCodecs = {
    "ed25519-pub": 237,
    "x25519-pub": 236,
    "secp256k1-pub": 231,
    "bls12_381-g1-pub": 234,
    "bls12_381-g2-pub": 235,
    "p256-pub": 4608
  };
  var CODEC_TO_KEY_TYPE = {
    "bls12_381-g1-pub": "Bls12381G1",
    "bls12_381-g2-pub": "Bls12381G2",
    "ed25519-pub": "Ed25519",
    "p256-pub": "P-256",
    "secp256k1-pub": "Secp256k1",
    "x25519-pub": "X25519"
  };
  function extractPublicKeyBytes(pk) {
    if (pk.publicKeyBase58) {
      return {
        keyBytes: base58ToBytes(pk.publicKeyBase58),
        keyType: VM_TO_KEY_TYPE[pk.type]
      };
    } else if (pk.publicKeyBase64) {
      return {
        keyBytes: base64ToBytes(pk.publicKeyBase64),
        keyType: VM_TO_KEY_TYPE[pk.type]
      };
    } else if (pk.publicKeyHex) {
      return {
        keyBytes: hexToBytes4(pk.publicKeyHex),
        keyType: VM_TO_KEY_TYPE[pk.type]
      };
    } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === "secp256k1" && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
      return {
        keyBytes: secp256k1.ProjectivePoint.fromAffine({
          x: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.x)),
          y: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.y))
        }).toRawBytes(false),
        keyType: "Secp256k1"
      };
    } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === "P-256" && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
      return {
        keyBytes: p256.ProjectivePoint.fromAffine({
          x: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.x)),
          y: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.y))
        }).toRawBytes(false),
        keyType: "P-256"
      };
    } else if (pk.publicKeyJwk && pk.publicKeyJwk.kty === "OKP" && ["Ed25519", "X25519"].includes(pk.publicKeyJwk.crv ?? "") && pk.publicKeyJwk.x) {
      return {
        keyBytes: base64ToBytes(pk.publicKeyJwk.x),
        keyType: pk.publicKeyJwk.crv
      };
    } else if (pk.publicKeyMultibase) {
      const {
        keyBytes,
        keyType
      } = multibaseToBytes(pk.publicKeyMultibase);
      return {
        keyBytes,
        keyType: keyType ?? VM_TO_KEY_TYPE[pk.type]
      };
    }
    return {
      keyBytes: new Uint8Array()
    };
  }
  function bytesToMultibase(b, base3 = "base58btc", codec) {
    if (!codec) {
      return u8a.toString((0, import_multibase.encode)(base3, b), "utf-8");
    } else {
      const codecCode = typeof codec === "string" ? supportedCodecs[codec] : codec;
      const prefixLength = varint_exports.encodingLength(codecCode);
      const multicodecEncoding = new Uint8Array(prefixLength + b.length);
      varint_exports.encodeTo(codecCode, multicodecEncoding);
      multicodecEncoding.set(b, prefixLength);
      return u8a.toString((0, import_multibase.encode)(base3, multicodecEncoding), "utf-8");
    }
  }
  function multibaseToBytes(s) {
    const bytes4 = (0, import_multibase.decode)(s);
    if ([32, 33, 48, 64, 65, 96].includes(bytes4.length)) {
      return {
        keyBytes: bytes4
      };
    }
    try {
      const [codec, length2] = varint_exports.decode(bytes4);
      const possibleCodec = Object.entries(supportedCodecs).filter(([, code5]) => code5 === codec)?.[0][0] ?? "";
      return {
        keyBytes: bytes4.slice(length2),
        keyType: CODEC_TO_KEY_TYPE[possibleCodec]
      };
    } catch (e) {
      return {
        keyBytes: bytes4
      };
    }
  }
  function hexToBytes4(s, minLength) {
    let input = s.startsWith("0x") ? s.substring(2) : s;
    if (input.length % 2 !== 0) {
      input = `0${input}`;
    }
    if (minLength) {
      const paddedLength = Math.max(input.length, minLength * 2);
      input = input.padStart(paddedLength, "00");
    }
    return u8a.fromString(input.toLowerCase(), "base16");
  }
  function encodeBase64url(s) {
    return bytesToBase64url(u8a.fromString(s));
  }
  function decodeBase64url(s) {
    return u8a.toString(base64ToBytes(s));
  }
  function bytesToHex4(b) {
    return u8a.toString(b, "base16");
  }
  function bytesToBigInt(b) {
    return BigInt(`0x` + u8a.toString(b, "base16"));
  }
  function stringToBytes2(s) {
    return u8a.fromString(s, "utf-8");
  }
  function toJose({
    r,
    s,
    recoveryParam
  }, recoverable) {
    const jose = new Uint8Array(recoverable ? 65 : 64);
    jose.set(u8a.fromString(r, "base16"), 0);
    jose.set(u8a.fromString(s, "base16"), 32);
    if (recoverable) {
      if (typeof recoveryParam === "undefined") {
        throw new Error("Signer did not return a recoveryParam");
      }
      jose[64] = recoveryParam;
    }
    return bytesToBase64url(jose);
  }
  function fromJose(signature) {
    const signatureBytes = base64ToBytes(signature);
    if (signatureBytes.length < 64 || signatureBytes.length > 65) {
      throw new TypeError(`Wrong size for signature. Expected 64 or 65 bytes, but got ${signatureBytes.length}`);
    }
    const r = bytesToHex4(signatureBytes.slice(0, 32));
    const s = bytesToHex4(signatureBytes.slice(32, 64));
    const recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : void 0;
    return {
      r,
      s,
      recoveryParam
    };
  }
  function toSealed(ciphertext, tag) {
    return u8a.concat([base64ToBytes(ciphertext), tag ? base64ToBytes(tag) : new Uint8Array(0)]);
  }
  function leftpad(data, size = 64) {
    if (data.length === size) return data;
    return "0".repeat(size - data.length) + data;
  }
  function generateKeyPair() {
    const secretKey = x25519.utils.randomPrivateKey();
    const publicKey = x25519.getPublicKey(secretKey);
    return {
      secretKey,
      publicKey
    };
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== 32) {
      throw new Error(`x25519: seed must be ${32} bytes`);
    }
    return {
      publicKey: x25519.getPublicKey(seed),
      secretKey: seed
    };
  }
  function genX25519EphemeralKeyPair() {
    const epk = generateKeyPair();
    return {
      publicKeyJWK: {
        kty: "OKP",
        crv: "X25519",
        x: bytesToBase64url(epk.publicKey)
      },
      secretKey: epk.secretKey
    };
  }
  function isDefined(arg) {
    return arg !== null && typeof arg !== "undefined";
  }
  function sha2563(payload) {
    const data = typeof payload === "string" ? fromString2(payload) : payload;
    return sha2562(data);
  }
  var keccak = keccak_256;
  function toEthereumAddress(hexPublicKey) {
    const hashInput = fromString2(hexPublicKey.slice(2), "base16");
    return `0x${toString2(keccak(hashInput).slice(-20), "base16")}`;
  }
  function writeUint32BE(value, array = new Uint8Array(4)) {
    const encoded = fromString2(value.toString(), "base10");
    array.set(encoded, 4 - encoded.length);
    return array;
  }
  var lengthAndInput = (input) => concat([writeUint32BE(input.length), input]);
  function concatKDF(secret, keyLen, alg, producerInfo, consumerInfo) {
    if (keyLen !== 256) throw new Error(`Unsupported key length: ${keyLen}`);
    const value = concat([lengthAndInput(fromString2(alg)), lengthAndInput(typeof producerInfo === "undefined" ? new Uint8Array(0) : producerInfo), lengthAndInput(typeof consumerInfo === "undefined" ? new Uint8Array(0) : consumerInfo), writeUint32BE(keyLen)]);
    const roundNumber = 1;
    return sha2563(concat([writeUint32BE(roundNumber), secret, value]));
  }
  function ES256KSigner(privateKey, recoverable = false) {
    const privateKeyBytes = privateKey;
    if (privateKeyBytes.length !== 32) {
      throw new Error(`bad_key: Invalid private key format. Expecting 32 bytes, but got ${privateKeyBytes.length}`);
    }
    return function(data) {
      try {
        const signature = secp256k1.sign(sha2563(data), privateKeyBytes);
        return Promise.resolve(toJose({
          r: leftpad(signature.r.toString(16)),
          s: leftpad(signature.s.toString(16)),
          recoveryParam: signature.recovery
        }, recoverable));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function SimpleSigner(hexPrivateKey) {
    const signer = ES256KSigner(hexToBytes4(hexPrivateKey), true);
    return function(data) {
      try {
        return Promise.resolve(signer(data)).then(fromJose);
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function EllipticSigner(hexPrivateKey) {
    return ES256KSigner(hexToBytes4(hexPrivateKey));
  }
  function EdDSASigner(secretKey) {
    const privateKeyBytes = secretKey;
    if (![32, 64].includes(privateKeyBytes.length)) {
      throw new Error(`bad_key: Invalid private key format. Expecting 32 or 64 bytes, but got ${privateKeyBytes.length}`);
    }
    return function(data) {
      try {
        const dataBytes = typeof data === "string" ? stringToBytes2(data) : data;
        const signature = ed25519.sign(dataBytes, privateKeyBytes.slice(0, 32));
        return Promise.resolve(bytesToBase64url(signature));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function NaclSigner(base64PrivateKey) {
    return EdDSASigner(base64ToBytes(base64PrivateKey));
  }
  function ES256Signer(privateKey) {
    if (privateKey.length !== 32) {
      throw new Error(`bad_key: Invalid private key format. Expecting 32 bytes, but got ${privateKey.length}`);
    }
    return function(data) {
      try {
        const signature = p256.sign(sha2563(data), privateKey);
        return Promise.resolve(toJose({
          r: leftpad(signature.r.toString(16)),
          s: leftpad(signature.s.toString(16))
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function instanceOfEcdsaSignature(object) {
    return typeof object === "object" && "r" in object && "s" in object;
  }
  function ES256SignerAlg() {
    return function sign(payload, signer) {
      try {
        return Promise.resolve(signer(payload)).then(function(signature) {
          if (instanceOfEcdsaSignature(signature)) {
            return toJose(signature);
          } else {
            return signature;
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function ES256KSignerAlg(recoverable) {
    return function sign(payload, signer) {
      try {
        return Promise.resolve(signer(payload)).then(function(signature) {
          if (instanceOfEcdsaSignature(signature)) {
            return toJose(signature, recoverable);
          } else {
            if (recoverable && typeof fromJose(signature).recoveryParam === "undefined") {
              throw new Error(`not_supported: ES256K-R not supported when signer doesn't provide a recovery param`);
            }
            return signature;
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function Ed25519SignerAlg() {
    return function sign(payload, signer) {
      try {
        return Promise.resolve(signer(payload)).then(function(signature) {
          if (!instanceOfEcdsaSignature(signature)) {
            return signature;
          } else {
            throw new Error("invalid_config: expected a signer function that returns a string instead of signature object");
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  var algorithms$1 = {
    ES256: ES256SignerAlg(),
    ES256K: ES256KSignerAlg(),
    // This is a non-standard algorithm but retained for backwards compatibility
    // see https://github.com/decentralized-identity/did-jwt/issues/146
    "ES256K-R": ES256KSignerAlg(true),
    // This is actually incorrect but retained for backwards compatibility
    // see https://github.com/decentralized-identity/did-jwt/issues/130
    Ed25519: Ed25519SignerAlg(),
    EdDSA: Ed25519SignerAlg()
  };
  function SignerAlg(alg) {
    const impl = algorithms$1[alg];
    if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
    return impl;
  }
  function publicKeyToAddress$1(publicKey, otherAddress) {
    const version3 = bytesToHex4(base58ToBytes(otherAddress).slice(0, 1));
    const publicKeyBuffer = hexToBytes4(publicKey);
    const publicKeyHash = ripemd160(sha2563(publicKeyBuffer));
    const step1 = version3 + bytesToHex4(publicKeyHash);
    const step2 = sha2563(hexToBytes4(step1));
    const step3 = sha2563(step2);
    const checksum2 = bytesToHex4(step3).substring(0, 8);
    const step4 = step1 + checksum2;
    return bytesToBase58(hexToBytes4(step4));
  }
  function publicKeyToAddress(publicKey, prefix) {
    const publicKeyBuffer = secp256k1.ProjectivePoint.fromHex(publicKey).toRawBytes();
    const hash3 = ripemd160(sha2563(publicKeyBuffer));
    const words = bech32.toWords(hash3);
    return bech32.encode(prefix, words).replace(prefix, "");
  }
  function verifyBlockchainAccountId(publicKey, blockchainAccountId) {
    if (blockchainAccountId) {
      const chain2 = blockchainAccountId.split(":");
      switch (chain2[0]) {
        case "bip122":
          chain2[chain2.length - 1] = publicKeyToAddress$1(publicKey, chain2[chain2.length - 1]);
          break;
        case "cosmos":
          chain2[chain2.length - 1] = publicKeyToAddress(publicKey, chain2[1]);
          break;
        case "eip155":
          chain2[chain2.length - 1] = toEthereumAddress(publicKey);
          break;
        default:
          return false;
      }
      return chain2.join(":").toLowerCase() === blockchainAccountId.toLowerCase();
    }
    return false;
  }
  function toSignatureObject(signature, recoverable = false) {
    const rawSig = base64ToBytes(signature);
    if (rawSig.length !== (recoverable ? 65 : 64)) {
      throw new Error("wrong signature length");
    }
    const r = bytesToHex4(rawSig.slice(0, 32));
    const s = bytesToHex4(rawSig.slice(32, 64));
    const sigObj = {
      r,
      s
    };
    if (recoverable) {
      sigObj.recoveryParam = rawSig[64];
    }
    return sigObj;
  }
  function toSignatureObject2(signature, recoverable = false) {
    const bytes4 = base64ToBytes(signature);
    if (bytes4.length !== (recoverable ? 65 : 64)) {
      throw new Error("wrong signature length");
    }
    return {
      compact: bytes4.slice(0, 64),
      recovery: bytes4[64]
    };
  }
  function verifyES256(data, signature, authenticators) {
    const hash3 = sha2563(data);
    const sig = p256.Signature.fromCompact(toSignatureObject2(signature).compact);
    const fullPublicKeys = authenticators.filter((a) => !a.ethereumAddress && !a.blockchainAccountId);
    const signer = fullPublicKeys.find((pk) => {
      try {
        const {
          keyBytes
        } = extractPublicKeyBytes(pk);
        return p256.verify(sig, hash3, keyBytes);
      } catch (err) {
        return false;
      }
    });
    if (!signer) throw new Error("invalid_signature: Signature invalid for JWT");
    return signer;
  }
  function verifyES256K(data, signature, authenticators) {
    const hash3 = sha2563(data);
    const signatureNormalized = secp256k1.Signature.fromCompact(base64ToBytes(signature)).normalizeS();
    const fullPublicKeys = authenticators.filter((a) => {
      return !a.ethereumAddress && !a.blockchainAccountId;
    });
    const blockchainAddressKeys = authenticators.filter((a) => {
      return a.ethereumAddress || a.blockchainAccountId;
    });
    let signer = fullPublicKeys.find((pk) => {
      try {
        const {
          keyBytes
        } = extractPublicKeyBytes(pk);
        return secp256k1.verify(signatureNormalized, hash3, keyBytes);
      } catch (err) {
        return false;
      }
    });
    if (!signer && blockchainAddressKeys.length > 0) {
      signer = verifyRecoverableES256K(data, signature, blockchainAddressKeys);
    }
    if (!signer) throw new Error("invalid_signature: Signature invalid for JWT");
    return signer;
  }
  function verifyRecoverableES256K(data, signature, authenticators) {
    const signatures = [];
    if (signature.length > 86) {
      signatures.push(toSignatureObject2(signature, true));
    } else {
      const so = toSignatureObject2(signature, false);
      signatures.push({
        ...so,
        recovery: 0
      });
      signatures.push({
        ...so,
        recovery: 1
      });
    }
    const hash3 = sha2563(data);
    const checkSignatureAgainstSigner = (sigObj) => {
      const signature2 = secp256k1.Signature.fromCompact(sigObj.compact).addRecoveryBit(sigObj.recovery || 0);
      const recoveredPublicKey = signature2.recoverPublicKey(hash3);
      const recoveredAddress = toEthereumAddress(recoveredPublicKey.toHex(false)).toLowerCase();
      const recoveredPublicKeyHex = recoveredPublicKey.toHex(false);
      const recoveredCompressedPublicKeyHex = recoveredPublicKey.toHex(true);
      return authenticators.find((a) => {
        const {
          keyBytes
        } = extractPublicKeyBytes(a);
        const keyHex = bytesToHex4(keyBytes);
        return keyHex === recoveredPublicKeyHex || keyHex === recoveredCompressedPublicKeyHex || a.ethereumAddress?.toLowerCase() === recoveredAddress || a.blockchainAccountId?.split("@eip155")?.[0].toLowerCase() === recoveredAddress || // CAIP-2
        verifyBlockchainAccountId(recoveredPublicKeyHex, a.blockchainAccountId);
      });
    };
    for (const signature2 of signatures) {
      const verificationMethod = checkSignatureAgainstSigner(signature2);
      if (verificationMethod) return verificationMethod;
    }
    throw new Error("invalid_signature: Signature invalid for JWT");
  }
  function verifyEd25519(data, signature, authenticators) {
    const clear = stringToBytes2(data);
    const signatureBytes = base64ToBytes(signature);
    const signer = authenticators.find((a) => {
      const {
        keyBytes,
        keyType
      } = extractPublicKeyBytes(a);
      if (keyType === "Ed25519") {
        return ed25519.verify(signatureBytes, clear, keyBytes);
      } else {
        return false;
      }
    });
    if (!signer) throw new Error("invalid_signature: Signature invalid for JWT");
    return signer;
  }
  var algorithms = {
    ES256: verifyES256,
    ES256K: verifyES256K,
    // This is a non-standard algorithm but retained for backwards compatibility
    // see https://github.com/decentralized-identity/did-jwt/issues/146
    "ES256K-R": verifyRecoverableES256K,
    // This is actually incorrect but retained for backwards compatibility
    // see https://github.com/decentralized-identity/did-jwt/issues/130
    Ed25519: verifyEd25519,
    EdDSA: verifyEd25519
  };
  function VerifierAlgorithm(alg) {
    const impl = algorithms[alg];
    if (!impl) throw new Error(`not_supported: Unsupported algorithm ${alg}`);
    return impl;
  }
  VerifierAlgorithm.toSignatureObject = toSignatureObject;
  var JWT_ERROR = {
    /**
     * Thrown when a JWT payload schema is unexpected or when validity period does not match
     */
    INVALID_JWT: "invalid_jwt",
    /**
     * Thrown when the verifier audience does not match the one set in the JWT payload
     */
    INVALID_AUDIENCE: "invalid_config",
    /**
     * Thrown when none of the public keys of the issuer match the signature of the JWT.
     *
     * This is equivalent to `NO_SUITABLE_KEYS` when the `proofPurpose` is NOT specified.
     */
    INVALID_SIGNATURE: "invalid_signature",
    /**
     * Thrown when the DID document of the issuer does not have any keys that match the signature for the given
     * `proofPurpose`.
     *
     * This is equivalent to `invalid_signature`, when a `proofPurpose` is specified.
     */
    NO_SUITABLE_KEYS: "no_suitable_keys",
    /**
     * Thrown when the `alg` of the JWT or the encoding of the key is not supported
     */
    NOT_SUPPORTED: "not_supported",
    /**
     * Thrown when the DID resolver is unable to resolve the issuer DID.
     */
    RESOLVER_ERROR: "resolver_error"
  };
  function _catch$1(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }
    if (result && result.then) {
      return result.then(void 0, recover);
    }
    return result;
  }
  var verifyConditionDelegated = function(jwt, {
    header,
    payload,
    data,
    signature
  }, authenticator, options) {
    try {
      if (!authenticator.conditionDelegated) {
        throw new Error("Expected conditionDelegated");
      }
      if (!options.resolver) {
        throw new Error("Expected resolver");
      }
      let foundSigner;
      const issuer = authenticator.conditionDelegated;
      return Promise.resolve(resolveAuthenticator(options.resolver, header.alg, issuer, options.proofPurpose)).then(function(didAuthenticator) {
        let _exit2;
        function _temp6(_result4) {
          if (_exit2) ;
          if (foundSigner) {
            return authenticator;
          }
          throw new Error(`${JWT_ERROR.INVALID_SIGNATURE}: condition for authenticator ${authenticator.id} is not met.`);
        }
        const didResolutionResult = didAuthenticator.didResolutionResult;
        if (!didResolutionResult?.didDocument) {
          throw new Error(`${JWT_ERROR.RESOLVER_ERROR}: Could not resolve delegated DID ${issuer}.`);
        }
        const delegatedAuthenticator = didAuthenticator.authenticators.find((authenticator2) => authenticator2.id === issuer);
        if (!delegatedAuthenticator) {
          throw new Error(`${JWT_ERROR.NO_SUITABLE_KEYS}: Could not find delegated authenticator ${issuer} in it's DID Document`);
        }
        const _temp5 = function() {
          if (delegatedAuthenticator.type === CONDITIONAL_PROOF_2022) {
            return Promise.resolve(verifyJWT(jwt, {
              ...options,
              ...{
                didAuthenticator: {
                  didResolutionResult,
                  authenticators: [delegatedAuthenticator],
                  issuer: delegatedAuthenticator.id
                }
              }
            })).then(function({
              verified
            }) {
              if (verified) {
                foundSigner = delegatedAuthenticator;
              }
            });
          } else {
            try {
              foundSigner = verifyJWTDecoded({
                header,
                payload,
                data,
                signature
              }, delegatedAuthenticator);
            } catch (e) {
              if (!e.message.startsWith("invalid_signature:")) throw e;
            }
          }
        }();
        return _temp5 && _temp5.then ? _temp5.then(_temp6) : _temp6(_temp5);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var _iteratorSymbol$1 = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function _settle$2(pact, state, value) {
    if (!pact.s) {
      if (value instanceof _Pact$2) {
        if (value.s) {
          if (state & 1) {
            state = value.s;
          }
          value = value.v;
        } else {
          value.o = _settle$2.bind(null, pact, state);
          return;
        }
      }
      if (value && value.then) {
        value.then(_settle$2.bind(null, pact, state), _settle$2.bind(null, pact, 2));
        return;
      }
      pact.s = state;
      pact.v = value;
      const observer = pact.o;
      if (observer) {
        observer(pact);
      }
    }
  }
  var _Pact$2 = /* @__PURE__ */ function() {
    function _Pact2() {
    }
    _Pact2.prototype.then = function(onFulfilled, onRejected) {
      const result = new _Pact2();
      const state = this.s;
      if (state) {
        const callback = state & 1 ? onFulfilled : onRejected;
        if (callback) {
          try {
            _settle$2(result, 1, callback(this.v));
          } catch (e) {
            _settle$2(result, 2, e);
          }
          return result;
        } else {
          return this;
        }
      }
      this.o = function(_this) {
        try {
          const value = _this.v;
          if (_this.s & 1) {
            _settle$2(result, 1, onFulfilled ? onFulfilled(value) : value);
          } else if (onRejected) {
            _settle$2(result, 1, onRejected(value));
          } else {
            _settle$2(result, 2, value);
          }
        } catch (e) {
          _settle$2(result, 2, e);
        }
      };
      return result;
    };
    return _Pact2;
  }();
  function _isSettledPact$2(thenable) {
    return thenable instanceof _Pact$2 && thenable.s & 1;
  }
  function _forTo$2(array, body, check2) {
    var i = -1, pact, reject;
    function _cycle(result) {
      try {
        while (++i < array.length && (!check2 || !check2())) {
          result = body(i);
          if (result && result.then) {
            if (_isSettledPact$2(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle$2.bind(null, pact = new _Pact$2(), 2)));
              return;
            }
          }
        }
        if (pact) {
          _settle$2(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle$2(pact || (pact = new _Pact$2()), 2, e);
      }
    }
    _cycle();
    return pact;
  }
  var verifyConditionWeightedThreshold = function(jwt, {
    header,
    payload,
    data,
    signature
  }, authenticator, options) {
    try {
      let _temp4 = function(_result3) {
        if (_exit) return _result3;
        throw new Error(`${JWT_ERROR.INVALID_SIGNATURE}: condition for authenticator ${authenticator.id} is not met.`);
      };
      let _exit;
      if (!authenticator.conditionWeightedThreshold || !authenticator.threshold) {
        throw new Error("Expected conditionWeightedThreshold and threshold");
      }
      const issuers = [];
      const threshold = authenticator.threshold;
      let weightCount = 0;
      const _temp3 = _forOf$1(authenticator.conditionWeightedThreshold, function(weightedCondition) {
        function _temp2(_result2) {
          if (_exit) return _result2;
          if (foundSigner && !issuers.includes(foundSigner.id)) {
            issuers.push(foundSigner.id);
            weightCount += weightedCondition.weight;
            if (weightCount >= threshold) {
              _exit = 1;
              return authenticator;
            }
          }
        }
        const currentCondition = weightedCondition.condition;
        let foundSigner;
        const _temp = _catch$1(function() {
          if (currentCondition.type === CONDITIONAL_PROOF_2022) {
            if (!options.didAuthenticator) {
              throw new Error("Expected didAuthenticator");
            }
            const newOptions = {
              ...options,
              didAuthenticator: {
                didResolutionResult: options.didAuthenticator?.didResolutionResult,
                authenticators: [currentCondition],
                issuer: currentCondition.id
              }
            };
            return Promise.resolve(verifyJWT(jwt, newOptions)).then(function({
              verified
            }) {
              if (verified) {
                foundSigner = currentCondition;
              }
            });
          } else {
            return Promise.resolve(verifyJWTDecoded({
              header,
              payload,
              data,
              signature
            }, currentCondition)).then(function(_verifyJWTDecoded) {
              foundSigner = _verifyJWTDecoded;
            });
          }
        }, function(e) {
          if (!e.message.startsWith(JWT_ERROR.INVALID_SIGNATURE)) throw e;
        });
        return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
      }, function() {
        return _exit;
      });
      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  function _forOf$1(target, body, check2) {
    if (typeof target[_iteratorSymbol$1] === "function") {
      let _cycle = function(result) {
        try {
          while (!(step = iterator.next()).done && (!check2 || !check2())) {
            result = body(step.value);
            if (result && result.then) {
              if (_isSettledPact$2(result)) {
                result = result.v;
              } else {
                result.then(_cycle, reject || (reject = _settle$2.bind(null, pact = new _Pact$2(), 2)));
                return;
              }
            }
          }
          if (pact) {
            _settle$2(pact, 1, result);
          } else {
            pact = result;
          }
        } catch (e) {
          _settle$2(pact || (pact = new _Pact$2()), 2, e);
        }
      };
      var iterator = target[_iteratorSymbol$1](), step, pact, reject;
      _cycle();
      if (iterator.return) {
        var _fixup = function(value) {
          try {
            if (!step.done) {
              iterator.return();
            }
          } catch (e) {
          }
          return value;
        };
        if (pact && pact.then) {
          return pact.then(_fixup, function(e) {
            throw _fixup(e);
          });
        }
        _fixup();
      }
      return pact;
    }
    if (!("length" in target)) {
      throw new TypeError("Object is not iterable");
    }
    var values = [];
    for (var i = 0; i < target.length; i++) {
      values.push(target[i]);
    }
    return _forTo$2(values, function(i2) {
      return body(values[i2]);
    }, check2);
  }
  var verifyConditionalProof = function(jwt, {
    header,
    payload,
    signature,
    data
  }, authenticator, options) {
    try {
      if (authenticator.conditionWeightedThreshold) {
        return verifyConditionWeightedThreshold(jwt, {
          header,
          payload,
          data,
          signature
        }, authenticator, options);
      } else if (authenticator.conditionDelegated) {
        return verifyConditionDelegated(jwt, {
          header,
          payload,
          data,
          signature
        }, authenticator, options);
      }
      throw new Error(`${JWT_ERROR.INVALID_JWT}: conditional proof type did not find condition for authenticator ${authenticator.id}.`);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var verifyProof = function(jwt, {
    header,
    payload,
    signature,
    data
  }, authenticator, options) {
    try {
      if (authenticator.type === CONDITIONAL_PROOF_2022) {
        return verifyConditionalProof(jwt, {
          payload,
          header,
          signature,
          data
        }, authenticator, options);
      } else {
        return Promise.resolve(verifyJWTDecoded({
          header,
          payload,
          data,
          signature
        }, [authenticator]));
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var CONDITIONAL_PROOF_2022 = "ConditionalProof2022";
  function _settle$1(pact, state, value) {
    if (!pact.s) {
      if (value instanceof _Pact$1) {
        if (value.s) {
          if (state & 1) {
            state = value.s;
          }
          value = value.v;
        } else {
          value.o = _settle$1.bind(null, pact, state);
          return;
        }
      }
      if (value && value.then) {
        value.then(_settle$1.bind(null, pact, state), _settle$1.bind(null, pact, 2));
        return;
      }
      pact.s = state;
      pact.v = value;
      const observer = pact.o;
      if (observer) {
        observer(pact);
      }
    }
  }
  var _Pact$1 = /* @__PURE__ */ function() {
    function _Pact2() {
    }
    _Pact2.prototype.then = function(onFulfilled, onRejected) {
      const result = new _Pact2();
      const state = this.s;
      if (state) {
        const callback = state & 1 ? onFulfilled : onRejected;
        if (callback) {
          try {
            _settle$1(result, 1, callback(this.v));
          } catch (e) {
            _settle$1(result, 2, e);
          }
          return result;
        } else {
          return this;
        }
      }
      this.o = function(_this) {
        try {
          const value = _this.v;
          if (_this.s & 1) {
            _settle$1(result, 1, onFulfilled ? onFulfilled(value) : value);
          } else if (onRejected) {
            _settle$1(result, 1, onRejected(value));
          } else {
            _settle$1(result, 2, value);
          }
        } catch (e) {
          _settle$1(result, 2, e);
        }
      };
      return result;
    };
    return _Pact2;
  }();
  function _isSettledPact$1(thenable) {
    return thenable instanceof _Pact$1 && thenable.s & 1;
  }
  function _forTo$1(array, body, check2) {
    var i = -1, pact, reject;
    function _cycle(result) {
      try {
        while (++i < array.length && (!check2 || !check2())) {
          result = body(i);
          if (result && result.then) {
            if (_isSettledPact$1(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle$1.bind(null, pact = new _Pact$1(), 2)));
              return;
            }
          }
        }
        if (pact) {
          _settle$1(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle$1(pact || (pact = new _Pact$1()), 2, e);
      }
    }
    _cycle();
    return pact;
  }
  function _catch2(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }
    if (result && result.then) {
      return result.then(void 0, recover);
    }
    return result;
  }
  function _for$1(test2, update, body) {
    var stage;
    for (; ; ) {
      var shouldContinue = test2();
      if (_isSettledPact$1(shouldContinue)) {
        shouldContinue = shouldContinue.v;
      }
      if (!shouldContinue) {
        return result;
      }
      if (shouldContinue.then) {
        stage = 0;
        break;
      }
      var result = body();
      if (result && result.then) {
        if (_isSettledPact$1(result)) {
          result = result.s;
        } else {
          stage = 1;
          break;
        }
      }
      if (update) {
        var updateValue = update();
        if (updateValue && updateValue.then && !_isSettledPact$1(updateValue)) {
          stage = 2;
          break;
        }
      }
    }
    var pact = new _Pact$1();
    var reject = _settle$1.bind(null, pact, 2);
    (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
    return pact;
    function _resumeAfterBody(value) {
      result = value;
      do {
        if (update) {
          updateValue = update();
          if (updateValue && updateValue.then && !_isSettledPact$1(updateValue)) {
            updateValue.then(_resumeAfterUpdate).then(void 0, reject);
            return;
          }
        }
        shouldContinue = test2();
        if (!shouldContinue || _isSettledPact$1(shouldContinue) && !shouldContinue.v) {
          _settle$1(pact, 1, result);
          return;
        }
        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
          return;
        }
        result = body();
        if (_isSettledPact$1(result)) {
          result = result.v;
        }
      } while (!result || !result.then);
      result.then(_resumeAfterBody).then(void 0, reject);
    }
    function _resumeAfterTest(shouldContinue2) {
      if (shouldContinue2) {
        result = body();
        if (result && result.then) {
          result.then(_resumeAfterBody).then(void 0, reject);
        } else {
          _resumeAfterBody(result);
        }
      } else {
        _settle$1(pact, 1, result);
      }
    }
    function _resumeAfterUpdate() {
      if (shouldContinue = test2()) {
        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        } else {
          _resumeAfterTest(shouldContinue);
        }
      } else {
        _settle$1(pact, 1, result);
      }
    }
  }
  var resolveAuthenticator = function(resolver, alg, issuer, proofPurpose) {
    try {
      const types = SUPPORTED_PUBLIC_KEY_TYPES[alg];
      if (!types || types.length === 0) {
        throw new Error(`${JWT_ERROR.NOT_SUPPORTED}: No supported signature types for algorithm ${alg}`);
      }
      let didResult;
      return Promise.resolve(resolver.resolve(issuer, {
        accept: DID_JSON
      })).then(function(result) {
        if (Object.getOwnPropertyNames(result).indexOf("didDocument") === -1) {
          didResult = {
            didDocument: result,
            didDocumentMetadata: {},
            didResolutionMetadata: {
              contentType: DID_JSON
            }
          };
        } else {
          didResult = result;
        }
        if (didResult.didResolutionMetadata?.error || didResult.didDocument == null) {
          const {
            error,
            message
          } = didResult.didResolutionMetadata;
          throw new Error(`${JWT_ERROR.RESOLVER_ERROR}: Unable to resolve DID document for ${issuer}: ${error}, ${message || ""}`);
        }
        const getPublicKeyById = (verificationMethods, pubid) => {
          const filtered = verificationMethods.filter(({
            id
          }) => pubid === id);
          return filtered.length > 0 ? filtered[0] : null;
        };
        let publicKeysToCheck = [...didResult?.didDocument?.verificationMethod || [], ...didResult?.didDocument?.publicKey || []];
        if (typeof proofPurpose === "string") {
          if (proofPurpose.startsWith("assertion") && !Object.getOwnPropertyNames(didResult?.didDocument).includes("assertionMethod")) {
            didResult.didDocument = {
              ...didResult.didDocument
            };
            didResult.didDocument.assertionMethod = [...publicKeysToCheck.map((pk) => pk.id)];
          }
          publicKeysToCheck = (didResult.didDocument[proofPurpose] || []).map((verificationMethod) => {
            if (typeof verificationMethod === "string") {
              return getPublicKeyById(publicKeysToCheck, verificationMethod);
            } else if (typeof verificationMethod.publicKey === "string") {
              return getPublicKeyById(publicKeysToCheck, verificationMethod.publicKey);
            } else {
              return verificationMethod;
            }
          }).filter((key) => key != null);
        }
        const authenticators = publicKeysToCheck.filter(({
          type
        }) => types.find((supported) => supported === type));
        if (typeof proofPurpose === "string" && (!authenticators || authenticators.length === 0)) {
          throw new Error(`${JWT_ERROR.NO_SUITABLE_KEYS}: DID document for ${issuer} does not have public keys suitable for ${alg} with ${proofPurpose} purpose`);
        }
        if (!authenticators || authenticators.length === 0) {
          throw new Error(`${JWT_ERROR.NO_SUITABLE_KEYS}: DID document for ${issuer} does not have public keys for ${alg}`);
        }
        return {
          authenticators,
          issuer,
          didResolutionResult: didResult
        };
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var verifyJWT = function(jwt, options = {
    resolver: void 0,
    auth: void 0,
    audience: void 0,
    callbackUrl: void 0,
    skewTime: void 0,
    proofPurpose: void 0,
    policies: {},
    didAuthenticator: void 0
  }) {
    try {
      let _temp7 = function() {
        let _exit;
        function _temp5(_result) {
          if (_exit) ;
          if (signer) {
            const now = typeof options.policies?.now === "number" ? options.policies.now : Math.floor(Date.now() / 1e3);
            const skewTime = typeof options.skewTime !== "undefined" && options.skewTime >= 0 ? options.skewTime : NBF_SKEW;
            const nowSkewed = now + skewTime;
            if (options.policies?.nbf !== false && payload.nbf) {
              if (payload.nbf > nowSkewed) {
                throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT not valid before nbf: ${payload.nbf}`);
              }
            } else if (options.policies?.iat !== false && payload.iat && payload.iat > nowSkewed) {
              throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT not valid yet (issued in the future) iat: ${payload.iat}`);
            }
            if (options.policies?.exp !== false && payload.exp && payload.exp <= now - skewTime) {
              throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT has expired: exp: ${payload.exp} < now: ${now}`);
            }
            if (options.policies?.aud !== false && payload.aud) {
              if (!options.audience && !options.callbackUrl) {
                throw new Error(`${JWT_ERROR.INVALID_AUDIENCE}: JWT audience is required but your app address has not been configured`);
              }
              const audArray = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
              const matchedAudience = audArray.find((item) => options.audience === item || options.callbackUrl === item);
              if (typeof matchedAudience === "undefined") {
                throw new Error(`${JWT_ERROR.INVALID_AUDIENCE}: JWT audience does not match your DID or callback url`);
              }
            }
            return {
              verified: true,
              payload,
              didResolutionResult,
              issuer,
              signer,
              jwt,
              policies: options.policies
            };
          }
          throw new Error(`${JWT_ERROR.INVALID_SIGNATURE}: JWT not valid. issuer DID document does not contain a verificationMethod that matches the signature.`);
        }
        const {
          did
        } = parse(didUrl);
        let signer = null;
        const _temp4 = function() {
          if (did !== didUrl) {
            const authenticator = authenticators.find((auth) => auth.id === didUrl);
            if (!authenticator) {
              throw new Error(`${JWT_ERROR.INVALID_JWT}: No authenticator found for did URL ${didUrl}`);
            }
            return Promise.resolve(verifyProof(jwt, {
              payload,
              header,
              signature,
              data
            }, authenticator, options)).then(function(_verifyProof) {
              signer = _verifyProof;
            });
          } else {
            let i = 0;
            return _for$1(function() {
              return !_exit && !signer && i < authenticators.length;
            }, void 0, function() {
              function _temp3(_result2) {
                if (_exit) ;
                i++;
              }
              const authenticator = authenticators[i];
              const _temp2 = _catch2(function() {
                return Promise.resolve(verifyProof(jwt, {
                  payload,
                  header,
                  signature,
                  data
                }, authenticator, options)).then(function(_verifyProof2) {
                  signer = _verifyProof2;
                });
              }, function(e) {
                if (!e.message.includes(JWT_ERROR.INVALID_SIGNATURE) || i === authenticators.length - 1) throw e;
              });
              return _temp2 && _temp2.then ? _temp2.then(_temp3) : _temp3(_temp2);
            });
          }
        }();
        return _temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4);
      };
      if (!options.resolver) throw new Error("missing_resolver: No DID resolver has been configured");
      const {
        payload,
        header,
        signature,
        data
      } = decodeJWT(jwt, false);
      const proofPurpose = Object.prototype.hasOwnProperty.call(options, "auth") ? options.auth ? "authentication" : void 0 : options.proofPurpose;
      let didUrl;
      if (!payload.iss && !payload.client_id) {
        throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT iss or client_id are required`);
      }
      if (options.didAuthenticator) {
        didUrl = options.didAuthenticator.issuer;
      } else if (payload.iss === SELF_ISSUED_V2 || payload.iss === SELF_ISSUED_V2_VC_INTEROP) {
        if (!payload.sub) {
          throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT sub is required`);
        }
        if (typeof payload.sub_jwk === "undefined") {
          didUrl = payload.sub;
        } else {
          didUrl = (header.kid || "").split("#")[0];
        }
      } else if (payload.iss === SELF_ISSUED_V0_1) {
        if (!payload.did) {
          throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT did is required`);
        }
        didUrl = payload.did;
      } else if (!payload.iss && payload.scope === "openid" && payload.redirect_uri) {
        if (!payload.client_id) {
          throw new Error(`${JWT_ERROR.INVALID_JWT}: JWT client_id is required`);
        }
        didUrl = payload.client_id;
      } else {
        didUrl = payload.iss;
      }
      if (!didUrl) {
        throw new Error(`${JWT_ERROR.INVALID_JWT}: No DID has been found in the JWT`);
      }
      let authenticators;
      let issuer;
      let didResolutionResult;
      const _temp6 = function() {
        if (options.didAuthenticator) {
          ({
            didResolutionResult,
            authenticators,
            issuer
          } = options.didAuthenticator);
        } else {
          return Promise.resolve(resolveAuthenticator(options.resolver, header.alg, didUrl, proofPurpose)).then(function(_resolveAuthenticator) {
            ({
              didResolutionResult,
              authenticators,
              issuer
            } = _resolveAuthenticator);
            options.didAuthenticator = {
              didResolutionResult,
              authenticators,
              issuer
            };
          });
        }
      }();
      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(_temp7) : _temp7(_temp6));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var createMultisignatureJWT = function(payload, {
    expiresIn,
    canonicalize
  }, issuers) {
    try {
      if (issuers.length === 0) throw new Error("invalid_argument: must provide one or more issuers");
      let payloadResult = payload;
      let jwt = "";
      const _temp = _forTo$1(issuers, function(i) {
        const issuer = issuers[i];
        const header = {
          typ: "JWT",
          alg: issuer.alg
        };
        if (i !== 0) {
          header.cty = "JWT";
        }
        return Promise.resolve(createJWT(payloadResult, {
          ...issuer,
          canonicalize,
          expiresIn
        }, header)).then(function(_createJWT) {
          jwt = _createJWT;
          payloadResult = {
            jwt
          };
        });
      });
      return Promise.resolve(_temp && _temp.then ? _temp.then(function() {
        return jwt;
      }) : jwt);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var createJWT = function(payload, {
    issuer,
    signer,
    alg,
    expiresIn,
    canonicalize
  }, header = {}) {
    try {
      if (!signer) throw new Error("missing_signer: No Signer functionality has been configured");
      if (!issuer) throw new Error("missing_issuer: No issuing DID has been configured");
      if (!header.typ) header.typ = "JWT";
      if (!header.alg) header.alg = alg;
      const timestamps = {
        iat: Math.floor(Date.now() / 1e3),
        exp: void 0
      };
      if (expiresIn) {
        if (typeof expiresIn === "number") {
          timestamps.exp = (payload.nbf || timestamps.iat) + Math.floor(expiresIn);
        } else {
          throw new Error("invalid_argument: JWT expiresIn is not a number");
        }
      }
      const fullPayload = {
        ...timestamps,
        ...payload,
        iss: issuer
      };
      return createJWS(fullPayload, signer, header, {
        canonicalize
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var createJWS = function(payload, signer, header = {}, options = {}) {
    try {
      if (!header.alg) header.alg = defaultAlg;
      const encodedPayload = typeof payload === "string" ? payload : encodeSection(payload, options.canonicalize);
      const signingInput = [encodeSection(header, options.canonicalize), encodedPayload].join(".");
      const jwtSigner = SignerAlg(header.alg);
      return Promise.resolve(jwtSigner(signingInput, signer)).then(function(signature) {
        return [signingInput, signature].join(".");
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var SELF_ISSUED_V2 = "https://self-issued.me/v2";
  var SELF_ISSUED_V2_VC_INTEROP = "https://self-issued.me/v2/openid-vc";
  var SELF_ISSUED_V0_1 = "https://self-issued.me";
  var defaultAlg = "ES256K";
  var DID_JSON = "application/did+json";
  function encodeSection(data, shouldCanonicalize = false) {
    if (shouldCanonicalize) {
      return encodeBase64url((0, import_canonicalize.default)(data));
    } else {
      return encodeBase64url(JSON.stringify(data));
    }
  }
  var NBF_SKEW = 300;
  function decodeJWS(jws) {
    const parts = jws.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);
    if (parts) {
      return {
        header: JSON.parse(decodeBase64url(parts[1])),
        payload: parts[2],
        signature: parts[3],
        data: `${parts[1]}.${parts[2]}`
      };
    }
    throw new Error("invalid_argument: Incorrect format JWS");
  }
  function decodeJWT(jwt, recurse = true) {
    if (!jwt) throw new Error("invalid_argument: no JWT passed into decodeJWT");
    try {
      const jws = decodeJWS(jwt);
      const decodedJwt = Object.assign(jws, {
        payload: JSON.parse(decodeBase64url(jws.payload))
      });
      const iss = decodedJwt.payload.iss;
      if (decodedJwt.header.cty === "JWT" && recurse) {
        const innerDecodedJwt = decodeJWT(decodedJwt.payload.jwt);
        if (innerDecodedJwt.payload.iss !== iss) throw new Error(`${JWT_ERROR.INVALID_JWT}: multiple issuers`);
        return innerDecodedJwt;
      }
      return decodedJwt;
    } catch (e) {
      throw new Error("invalid_argument: Incorrect format JWT");
    }
  }
  function verifyJWTDecoded({
    header,
    payload,
    data,
    signature
  }, pubKeys) {
    if (!Array.isArray(pubKeys)) pubKeys = [pubKeys];
    const iss = payload.iss;
    let recurse = true;
    do {
      if (iss !== payload.iss) throw new Error(`${JWT_ERROR.INVALID_JWT}: multiple issuers`);
      try {
        const result = VerifierAlgorithm(header.alg)(data, signature, pubKeys);
        return result;
      } catch (e) {
        if (!e.message.startsWith(JWT_ERROR.INVALID_SIGNATURE)) throw e;
      }
      if (header.cty !== "JWT") {
        recurse = false;
      } else {
        ({
          payload,
          header,
          signature,
          data
        } = decodeJWT(payload.jwt, false));
      }
    } while (recurse);
    throw new Error(`${JWT_ERROR.INVALID_SIGNATURE}: no matching public key found`);
  }
  function verifyJWSDecoded({
    header,
    data,
    signature
  }, pubKeys) {
    if (!Array.isArray(pubKeys)) pubKeys = [pubKeys];
    const signer = VerifierAlgorithm(header.alg)(data, signature, pubKeys);
    return signer;
  }
  function verifyJWS(jws, pubKeys) {
    const jwsDecoded = decodeJWS(jws);
    return verifyJWSDecoded(jwsDecoded, pubKeys);
  }
  var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function _settle(pact, state, value) {
    if (!pact.s) {
      if (value instanceof _Pact) {
        if (value.s) {
          if (state & 1) {
            state = value.s;
          }
          value = value.v;
        } else {
          value.o = _settle.bind(null, pact, state);
          return;
        }
      }
      if (value && value.then) {
        value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
        return;
      }
      pact.s = state;
      pact.v = value;
      const observer = pact.o;
      if (observer) {
        observer(pact);
      }
    }
  }
  var _Pact = /* @__PURE__ */ function() {
    function _Pact2() {
    }
    _Pact2.prototype.then = function(onFulfilled, onRejected) {
      const result = new _Pact2();
      const state = this.s;
      if (state) {
        const callback = state & 1 ? onFulfilled : onRejected;
        if (callback) {
          try {
            _settle(result, 1, callback(this.v));
          } catch (e) {
            _settle(result, 2, e);
          }
          return result;
        } else {
          return this;
        }
      }
      this.o = function(_this) {
        try {
          const value = _this.v;
          if (_this.s & 1) {
            _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
          } else if (onRejected) {
            _settle(result, 1, onRejected(value));
          } else {
            _settle(result, 2, value);
          }
        } catch (e) {
          _settle(result, 2, e);
        }
      };
      return result;
    };
    return _Pact2;
  }();
  function _isSettledPact(thenable) {
    return thenable instanceof _Pact && thenable.s & 1;
  }
  function _forTo(array, body, check2) {
    var i = -1, pact, reject;
    function _cycle(result) {
      try {
        while (++i < array.length && (!check2 || !check2())) {
          result = body(i);
          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }
        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    }
    _cycle();
    return pact;
  }
  function _forOf(target, body, check2) {
    if (typeof target[_iteratorSymbol] === "function") {
      let _cycle = function(result) {
        try {
          while (!(step = iterator.next()).done && (!check2 || !check2())) {
            result = body(step.value);
            if (result && result.then) {
              if (_isSettledPact(result)) {
                result = result.v;
              } else {
                result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
                return;
              }
            }
          }
          if (pact) {
            _settle(pact, 1, result);
          } else {
            pact = result;
          }
        } catch (e) {
          _settle(pact || (pact = new _Pact()), 2, e);
        }
      };
      var iterator = target[_iteratorSymbol](), step, pact, reject;
      _cycle();
      if (iterator.return) {
        var _fixup = function(value) {
          try {
            if (!step.done) {
              iterator.return();
            }
          } catch (e) {
          }
          return value;
        };
        if (pact && pact.then) {
          return pact.then(_fixup, function(e) {
            throw _fixup(e);
          });
        }
        _fixup();
      }
      return pact;
    }
    if (!("length" in target)) {
      throw new TypeError("Object is not iterable");
    }
    var values = [];
    for (var i = 0; i < target.length; i++) {
      values.push(target[i]);
    }
    return _forTo(values, function(i2) {
      return body(values[i2]);
    }, check2);
  }
  function _for(test2, update, body) {
    var stage;
    for (; ; ) {
      var shouldContinue = test2();
      if (_isSettledPact(shouldContinue)) {
        shouldContinue = shouldContinue.v;
      }
      if (!shouldContinue) {
        return result;
      }
      if (shouldContinue.then) {
        stage = 0;
        break;
      }
      var result = body();
      if (result && result.then) {
        if (_isSettledPact(result)) {
          result = result.s;
        } else {
          stage = 1;
          break;
        }
      }
      if (update) {
        var updateValue = update();
        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          stage = 2;
          break;
        }
      }
    }
    var pact = new _Pact();
    var reject = _settle.bind(null, pact, 2);
    (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
    return pact;
    function _resumeAfterBody(value) {
      result = value;
      do {
        if (update) {
          updateValue = update();
          if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
            updateValue.then(_resumeAfterUpdate).then(void 0, reject);
            return;
          }
        }
        shouldContinue = test2();
        if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
          _settle(pact, 1, result);
          return;
        }
        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
          return;
        }
        result = body();
        if (_isSettledPact(result)) {
          result = result.v;
        }
      } while (!result || !result.then);
      result.then(_resumeAfterBody).then(void 0, reject);
    }
    function _resumeAfterTest(shouldContinue2) {
      if (shouldContinue2) {
        result = body();
        if (result && result.then) {
          result.then(_resumeAfterBody).then(void 0, reject);
        } else {
          _resumeAfterBody(result);
        }
      } else {
        _settle(pact, 1, result);
      }
    }
    function _resumeAfterUpdate() {
      if (shouldContinue = test2()) {
        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        } else {
          _resumeAfterTest(shouldContinue);
        }
      } else {
        _settle(pact, 1, result);
      }
    }
  }
  function validateJWE(jwe) {
    if (!(jwe.protected && jwe.iv && jwe.ciphertext && jwe.tag)) {
      throw new Error("bad_jwe: missing properties");
    }
    if (jwe.recipients) {
      jwe.recipients.map((rec) => {
        if (!(rec.header && rec.encrypted_key)) {
          throw new Error("bad_jwe: malformed recipients");
        }
      });
    }
  }
  function encodeJWE({
    ciphertext,
    tag,
    iv,
    protectedHeader,
    recipient
  }, aad) {
    const jwe = {
      protected: protectedHeader,
      iv: bytesToBase64url(iv ?? new Uint8Array(0)),
      ciphertext: bytesToBase64url(ciphertext),
      tag: bytesToBase64url(tag ?? new Uint8Array(0))
    };
    if (aad) jwe.aad = bytesToBase64url(aad);
    if (recipient) jwe.recipients = [recipient];
    return jwe;
  }
  var decryptJWE = function(jwe, decrypter) {
    try {
      let _temp5 = function(_result) {
        if (_exit) ;
        if (cleartext === null) throw new Error("failure: Failed to decrypt");
        return cleartext;
      };
      let _exit;
      validateJWE(jwe);
      const protHeader = JSON.parse(decodeBase64url(jwe.protected));
      if (protHeader.enc !== decrypter.enc) throw new Error(`not_supported: Decrypter does not supported: '${protHeader.enc}'`);
      const sealed = toSealed(jwe.ciphertext, jwe.tag);
      const aad = stringToBytes2(jwe.aad ? `${jwe.protected}.${jwe.aad}` : jwe.protected);
      let cleartext = null;
      const _temp4 = function() {
        if (protHeader.alg === "dir" && decrypter.alg === "dir") {
          return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad)).then(function(_decrypter$decrypt) {
            cleartext = _decrypter$decrypt;
          });
        } else return function() {
          if (!jwe.recipients || jwe.recipients.length === 0) {
            throw new Error("bad_jwe: missing recipients");
          } else {
            let i = 0;
            return _for(function() {
              return !cleartext && i < jwe.recipients.length;
            }, function() {
              return i++;
            }, function() {
              const recipient = jwe.recipients[i];
              Object.assign(recipient.header, protHeader);
              const _temp3 = function() {
                if (recipient.header.alg === decrypter.alg) {
                  return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad, recipient)).then(function(_decrypter$decrypt2) {
                    cleartext = _decrypter$decrypt2;
                  });
                }
              }();
              if (_temp3 && _temp3.then) return _temp3.then(function() {
              });
            });
          }
        }();
      }();
      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var createJWE = function(cleartext, encrypters, protectedHeader = {}, aad, useSingleEphemeralKey = false) {
    try {
      if (encrypters[0].alg === "dir") {
        if (encrypters.length > 1) throw new Error('not_supported: Can only do "dir" encryption to one key.');
        return Promise.resolve(encrypters[0].encrypt(cleartext, protectedHeader, aad)).then(function(encryptionResult) {
          return encodeJWE(encryptionResult, aad);
        });
      } else {
        const tmpEnc = encrypters[0].enc;
        if (!encrypters.reduce((acc, encrypter) => acc && encrypter.enc === tmpEnc, true)) {
          throw new Error("invalid_argument: Incompatible encrypters passed");
        }
        let cek;
        let jwe;
        let epk;
        if (useSingleEphemeralKey) {
          epk = encrypters[0].genEpk?.();
          const alg = encrypters[0].alg;
          protectedHeader = {
            ...protectedHeader,
            alg,
            epk: epk?.publicKeyJWK
          };
        }
        const _temp2 = _forOf(encrypters, function(encrypter) {
          const _temp = function() {
            if (!cek) {
              return Promise.resolve(encrypter.encrypt(cleartext, protectedHeader, aad, epk)).then(function(encryptionResult) {
                cek = encryptionResult.cek;
                jwe = encodeJWE(encryptionResult, aad);
              });
            } else {
              return Promise.resolve(encrypter.encryptCek?.(cek, epk)).then(function(recipient) {
                if (recipient) {
                  jwe?.recipients?.push(recipient);
                }
              });
            }
          }();
          if (_temp && _temp.then) return _temp.then(function() {
          });
        });
        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function() {
          return jwe;
        }) : jwe);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };
  function xc20pEncrypter(key) {
    return (cleartext, aad) => {
      const iv = randomBytes(24);
      const cipher = xchacha20poly1305(key, iv, aad);
      const sealed = cipher.encrypt(cleartext);
      return {
        ciphertext: sealed.subarray(0, sealed.length - 16),
        tag: sealed.subarray(sealed.length - 16),
        iv
      };
    };
  }
  function xc20pDirEncrypter(key) {
    const encrypt = function(cleartext, protectedHeader = {}, aad) {
      try {
        const protHeader = encodeBase64url(JSON.stringify(Object.assign({
          alg
        }, protectedHeader, {
          enc
        })));
        const encodedAad = stringToBytes2(aad ? `${protHeader}.${bytesToBase64url(aad)}` : protHeader);
        return Promise.resolve({
          ...xc20pEncrypt(cleartext, encodedAad),
          protectedHeader: protHeader
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    const xc20pEncrypt = xc20pEncrypter(key);
    const enc = "XC20P";
    const alg = "dir";
    return {
      alg,
      enc,
      encrypt
    };
  }
  function xc20pDirDecrypter(key) {
    const decrypt = function(sealed, iv, aad) {
      try {
        try {
          return Promise.resolve(xchacha20poly1305(key, iv, aad).decrypt(sealed));
        } catch (error) {
          return Promise.resolve(null);
        }
      } catch (e) {
        return Promise.reject(e);
      }
    };
    return {
      alg: "dir",
      enc: "XC20P",
      decrypt
    };
  }
  var createX25519EcdhEsKek = function(recipientPublicKey, senderSecret, alg, apu, apv, ephemeralKeyPair) {
    try {
      const crv = "X25519";
      const keyLen = 256;
      const ephemeral = ephemeralKeyPair ? generateKeyPairFromSeed(ephemeralKeyPair.secretKey) : generateKeyPair();
      const epk = {
        kty: "OKP",
        crv,
        x: bytesToBase64url(ephemeral.publicKey)
      };
      const sharedSecret = x25519.getSharedSecret(ephemeral.secretKey, recipientPublicKey);
      const consumerInfo = base64ToBytes(apv ?? "");
      const kek = concatKDF(sharedSecret, keyLen, alg, void 0, consumerInfo);
      return Promise.resolve({
        epk,
        kek
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var computeX25519EcdhEsKek = function(recipient, receiverSecret, alg) {
    try {
      let _temp2 = function() {
        let producerInfo = void 0;
        let consumerInfo = void 0;
        if (recipient.header.apu) producerInfo = base64ToBytes(recipient.header.apu);
        if (recipient.header.apv) consumerInfo = base64ToBytes(recipient.header.apv);
        return concatKDF(sharedSecret, keyLen, alg, producerInfo, consumerInfo);
      };
      const crv = "X25519";
      const keyLen = 256;
      const header = recipient.header;
      if (header.epk?.crv !== crv || typeof header.epk.x == "undefined") return Promise.resolve(null);
      const publicKey = base64ToBytes(header.epk.x);
      let sharedSecret;
      const _temp = function() {
        if (receiverSecret instanceof Uint8Array) {
          sharedSecret = x25519.getSharedSecret(receiverSecret, publicKey);
        } else {
          return Promise.resolve(receiverSecret(publicKey)).then(function(_receiverSecret) {
            sharedSecret = _receiverSecret;
          });
        }
      }();
      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var createX25519Ecdh1PUv3Kek = function(recipientPublicKey, senderSecret, alg, apu, apv, ephemeralKeyPair) {
    try {
      let _temp4 = function() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length);
        let partyUInfo = new Uint8Array(0);
        let partyVInfo = new Uint8Array(0);
        if (apu) partyUInfo = base64ToBytes(apu);
        if (apv) partyVInfo = base64ToBytes(apv);
        const kek = concatKDF(sharedSecret, keyLen, alg, partyUInfo, partyVInfo);
        return {
          epk,
          kek
        };
      };
      const crv = "X25519";
      const keyLen = 256;
      const ephemeral = ephemeralKeyPair ? generateKeyPairFromSeed(ephemeralKeyPair.secretKey) : generateKeyPair();
      const epk = {
        kty: "OKP",
        crv,
        x: bytesToBase64url(ephemeral.publicKey)
      };
      const zE = x25519.getSharedSecret(ephemeral.secretKey, recipientPublicKey);
      let zS;
      const _temp3 = function() {
        if (senderSecret instanceof Uint8Array) {
          zS = x25519.getSharedSecret(senderSecret, recipientPublicKey);
        } else {
          return Promise.resolve(senderSecret(recipientPublicKey)).then(function(_senderSecret) {
            zS = _senderSecret;
          });
        }
      }();
      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var computeX25519Ecdh1PUv3Kek = function(recipient, recipientSecret, senderPublicKey, alg) {
    try {
      let _temp2 = function() {
        const sharedSecret = new Uint8Array(zE.length + zS.length);
        sharedSecret.set(zE);
        sharedSecret.set(zS, zE.length);
        let producerInfo;
        let consumerInfo;
        if (recipient.header.apu) producerInfo = base64ToBytes(recipient.header.apu);
        if (recipient.header.apv) consumerInfo = base64ToBytes(recipient.header.apv);
        return concatKDF(sharedSecret, keyLen, alg, producerInfo, consumerInfo);
      };
      const crv = "X25519";
      const keyLen = 256;
      const header = recipient.header;
      if (header.epk?.crv !== crv || typeof header.epk.x == "undefined") return Promise.resolve(null);
      const publicKey = base64ToBytes(header.epk.x);
      let zE;
      let zS;
      const _temp = function() {
        if (recipientSecret instanceof Uint8Array) {
          zE = x25519.getSharedSecret(recipientSecret, publicKey);
          zS = x25519.getSharedSecret(recipientSecret, senderPublicKey);
        } else {
          return Promise.resolve(recipientSecret(publicKey)).then(function(_recipientSecret) {
            zE = _recipientSecret;
            return Promise.resolve(recipientSecret(senderPublicKey)).then(function(_recipientSecret2) {
              zS = _recipientSecret2;
            });
          });
        }
      }();
      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  function createX25519ECDH(mySecretKey) {
    if (mySecretKey.length !== 32) {
      throw new Error("invalid_argument: incorrect secret key length for X25519");
    }
    return function(theirPublicKey) {
      try {
        if (theirPublicKey.length !== 32) {
          throw new Error("invalid_argument: incorrect publicKey key length for X25519");
        }
        return Promise.resolve(x25519.getSharedSecret(mySecretKey, theirPublicKey));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  function createFullEncrypter(recipientPublicKey, senderSecret, options = {}, kekCreator, keyWrapper, contentEncrypter) {
    const encrypt = function(cleartext, protectedHeader = {}, aad, ephemeralKeyPair) {
      try {
        Object.assign(protectedHeader, {
          alg: void 0
        });
        const cek = randomBytes(32);
        return Promise.resolve(encryptCek(cek, ephemeralKeyPair)).then(function(recipient) {
          if (ephemeralKeyPair) {
            protectedHeader.alg = `${kekCreator.alg}+${keyWrapper.alg}`;
            protectedHeader.epk = ephemeralKeyPair.publicKeyJWK;
          }
          return Promise.resolve(contentEncrypter.from(cek).encrypt(cleartext, protectedHeader, aad)).then(function(_contentEncrypter$fro) {
            return {
              ..._contentEncrypter$fro,
              recipient,
              cek
            };
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    const encryptCek = function(cek, ephemeralKeyPair) {
      try {
        return Promise.resolve(kekCreator.createKek(recipientPublicKey, senderSecret, `${kekCreator.alg}+${keyWrapper.alg}`, options.apu, options.apv, ephemeralKeyPair)).then(function({
          epk,
          kek
        }) {
          return Promise.resolve(keyWrapper.from(kek).wrap(cek)).then(function(res) {
            const recipient = {
              encrypted_key: bytesToBase64url(res.ciphertext),
              header: {}
            };
            if (res.iv) recipient.header.iv = bytesToBase64url(res.iv);
            if (res.tag) recipient.header.tag = bytesToBase64url(res.tag);
            if (options.kid) recipient.header.kid = options.kid;
            if (options.apu) recipient.header.apu = options.apu;
            if (options.apv) recipient.header.apv = options.apv;
            if (!ephemeralKeyPair) {
              recipient.header.alg = `${kekCreator.alg}+${keyWrapper.alg}`;
              recipient.header.epk = epk;
            }
            return recipient;
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    return {
      alg: keyWrapper.alg,
      enc: contentEncrypter.enc,
      encrypt,
      encryptCek,
      genEpk: genX25519EphemeralKeyPair
    };
  }
  var resolveX25519Encrypters = function(dids, resolver) {
    try {
      const encryptersForDID = function(did, resolved = []) {
        try {
          return Promise.resolve(resolver.resolve(did)).then(function({
            didResolutionMetadata,
            didDocument
          }) {
            function _temp2() {
              const agreementKeys = didDocument.keyAgreement?.map((key) => {
                if (typeof key === "string") {
                  return [...didDocument.publicKey || [], ...didDocument.verificationMethod || []].find((pk) => pk.id === key);
                }
                return key;
              })?.filter((key) => typeof key !== "undefined");
              const pks = agreementKeys?.filter((key) => ["X25519KeyAgreementKey2019", "X25519KeyAgreementKey2020", "JsonWebKey2020", "Multikey"].includes(key.type)) ?? [];
              if (!pks.length && !controllerEncrypters.length) throw new Error(`no_suitable_keys: Could not find X25519 key for ${did}`);
              return pks.map((pk) => {
                const {
                  keyBytes,
                  keyType
                } = extractPublicKeyBytes(pk);
                if (keyType === "X25519") {
                  return x25519Encrypter(keyBytes, pk.id);
                } else {
                  return null;
                }
              }).filter(isDefined).concat(...controllerEncrypters);
            }
            resolved.push(did);
            if (didResolutionMetadata?.error || didDocument == null) {
              throw new Error(`resolver_error: Could not resolve ${did}: ${didResolutionMetadata.error}, ${didResolutionMetadata.message}`);
            }
            let controllerEncrypters = [];
            if (!didDocument.controller && !didDocument.keyAgreement) {
              throw new Error(`no_suitable_keys: Could not find x25519 key for ${did}`);
            }
            const _temp = function() {
              if (didDocument.controller) {
                let controllers = Array.isArray(didDocument.controller) ? didDocument.controller : [didDocument.controller];
                controllers = controllers.filter((c) => !resolved.includes(c));
                const encrypterPromises2 = controllers.map((did2) => encryptersForDID(did2, resolved).catch(() => {
                  return [];
                }));
                return Promise.resolve(Promise.all(encrypterPromises2)).then(function(encrypterArrays) {
                  controllerEncrypters = [].concat(...encrypterArrays);
                });
              }
            }();
            return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      };
      const encrypterPromises = dids.map((did) => encryptersForDID(did));
      return Promise.resolve(Promise.all(encrypterPromises)).then(function(encrypterArrays) {
        return [].concat(...encrypterArrays);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  function createAuthEncrypter(recipientPublicKey, senderSecret, options = {}) {
    return xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options);
  }
  function createAnonEncrypter(publicKey, options = {}) {
    return xc20pAnonEncrypterEcdhESx25519WithXc20PkwV2(publicKey, options);
  }
  function createAuthDecrypter(recipientSecret, senderPublicKey) {
    return xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey);
  }
  function createAnonDecrypter(recipientSecret) {
    return xc20pAnonDecrypterEcdhESx25519WithXc20PkwV2(recipientSecret);
  }
  function validateHeader(header) {
    if (!(header && header.epk && header.iv && header.tag)) {
      throw new Error("bad_jwe: malformed header");
    }
    return header;
  }
  var xc20pKeyWrapper = {
    from: (wrappingKey) => {
      const wrap = function(cek) {
        try {
          return Promise.resolve(xc20pEncrypter(wrappingKey)(cek));
        } catch (e) {
          return Promise.reject(e);
        }
      };
      return {
        wrap
      };
    },
    alg: "XC20PKW"
  };
  function x25519Encrypter(publicKey, kid, apv) {
    return xc20pAnonEncrypterEcdhESx25519WithXc20PkwV2(publicKey, {
      kid,
      apv
    });
  }
  function xc20pAnonEncrypterEcdhESx25519WithXc20PkwV2(recipientPublicKey, options = {}) {
    return createFullEncrypter(recipientPublicKey, void 0, options, {
      createKek: createX25519EcdhEsKek,
      alg: "ECDH-ES"
    }, xc20pKeyWrapper, {
      from: (cek) => xc20pDirEncrypter(cek),
      enc: "XC20P"
    });
  }
  function xc20pAuthEncrypterEcdh1PuV3x25519WithXc20PkwV2(recipientPublicKey, senderSecret, options = {}) {
    return createFullEncrypter(recipientPublicKey, senderSecret, options, {
      createKek: createX25519Ecdh1PUv3Kek,
      alg: "ECDH-1PU"
    }, xc20pKeyWrapper, {
      from: (cek) => xc20pDirEncrypter(cek),
      enc: "XC20P"
    });
  }
  function x25519Decrypter(receiverSecret) {
    return xc20pAnonDecrypterEcdhESx25519WithXc20PkwV2(receiverSecret);
  }
  function xc20pAnonDecrypterEcdhESx25519WithXc20PkwV2(recipientSecret) {
    const decrypt = function(sealed, iv, aad, recipient) {
      try {
        recipient = recipient;
        const header = validateHeader(recipient.header);
        return Promise.resolve(computeX25519EcdhEsKek(recipient, recipientSecret, alg)).then(function(kek) {
          if (!kek) return null;
          const sealedCek = toSealed(recipient.encrypted_key, header.tag);
          return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(header.iv))).then(function(cek) {
            return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    const alg = "ECDH-ES+XC20PKW";
    const enc = "XC20P";
    return {
      alg,
      enc,
      decrypt
    };
  }
  function xc20pAuthDecrypterEcdh1PuV3x25519WithXc20PkwV2(recipientSecret, senderPublicKey) {
    const decrypt = function(sealed, iv, aad, recipient) {
      try {
        recipient = recipient;
        const header = validateHeader(recipient.header);
        return Promise.resolve(computeX25519Ecdh1PUv3Kek(recipient, recipientSecret, senderPublicKey, alg)).then(function(kek) {
          if (!kek) return null;
          const sealedCek = toSealed(recipient.encrypted_key, header.tag);
          return Promise.resolve(xc20pDirDecrypter(kek).decrypt(sealedCek, base64ToBytes(header.iv))).then(function(cek) {
            return cek === null ? null : xc20pDirDecrypter(cek).decrypt(sealed, iv, aad);
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    const alg = "ECDH-1PU+XC20PKW";
    const enc = "XC20P";
    return {
      alg,
      enc,
      decrypt
    };
  }

  // node_modules/@cef-eudi/eudi-did-resolver/dist/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/eudi-did-resolver/dist/constants.js
  init_dirname();
  init_buffer2();
  init_process2();
  var EBSI_DID_METHOD_PREFIX = "did:ebsi:";
  var LEGAL_ENTITY = "LEGAL_ENTITY";
  var SUPPORTED_VERSIONS = [LEGAL_ENTITY];
  var EBSI_DID_SPECS = {
    [LEGAL_ENTITY]: {
      VERSION_ID: 1,
      BYTE_LENGTH: 16,
      PREFIX: EBSI_DID_METHOD_PREFIX
    }
  };
  var DID_RESOLUTION_ERROR_CODES = {
    INVALID_DID: "invalidDid",
    NOT_FOUND: "notFound",
    REPRESENTATION_NOT_SUPPORTED: "representationNotSupported",
    UNKNOWN_ERROR: "unknownError",
    INTERNAL_SERVER_ERROR: "internalServerError",
    CONFIGURATION_ERROR: "configurationError",
    INVALID_JWK: "invalidJwk"
  };

  // node_modules/@cef-eudi/eudi-did-resolver/dist/resolver.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/eudi-did-resolver/dist/resolvers/v1.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/axios.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/utils.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/bind.js
  init_dirname();
  init_buffer2();
  init_process2();
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString: toString3 } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str2 = toString3.call(thing);
    return cache[str2] || (cache[str2] = str2.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  var trim = (str2) => str2.trim ? str2.trim() : str2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str2, searchString, position) => {
    str2 = String(str2);
    if (position === void 0 || position > str2.length) {
      position = str2.length;
    }
    position -= searchString.length;
    const lastIndex = str2.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str2) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str2)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str2) => {
    return str2.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name5) => {
      let ret;
      if ((ret = reducer(descriptor, name5, obj)) !== false) {
        reducedDescriptors[name5] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name5) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name5) !== -1) {
        return false;
      }
      const value = obj[name5];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name5 + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop2 = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet3 = ALPHABET.ALPHA_DIGIT) => {
    let str2 = "";
    const { length: length2 } = alphabet3;
    while (size--) {
      str2 += alphabet3[Math.random() * length2 | 0];
    }
    return str2;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener("message", ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === "function",
    isFunction(_global.postMessage)
  );
  var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process_exports !== "undefined" && process_exports.nextTick || _setImmediate;
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop: noop2,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
  };

  // node_modules/axios/lib/core/Axios.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/buildURL.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/toFormData.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/core/AxiosError.js
  init_dirname();
  init_buffer2();
  init_process2();
  function AxiosError(message, code5, config2, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code5 && (this.code = code5);
    config2 && (this.config = config2);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code5) => {
    descriptors[code5] = { value: code5 };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code5, config2, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code5, config2, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  init_dirname();
  init_buffer2();
  init_process2();
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer2.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode8(str2) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str2).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name5, value) {
    this._pairs.push([name5, value]);
  };
  prototype2.toString = function toString4(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode8);
    } : encode8;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode9(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode9;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  init_dirname();
  init_buffer2();
  init_process2();
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/core/dispatchRequest.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/core/transformData.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/defaults/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/defaults/transitional.js
  init_dirname();
  init_buffer2();
  init_process2();
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/platform/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/platform/browser/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  init_dirname();
  init_buffer2();
  init_process2();
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  init_dirname();
  init_buffer2();
  init_process2();
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  init_dirname();
  init_buffer2();
  init_process2();
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports2 = {};
  __export(utils_exports2, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  init_dirname();
  init_buffer2();
  init_process2();
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var _navigator = typeof navigator === "object" && navigator || void 0;
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports2,
    ...browser_default
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  init_dirname();
  init_buffer2();
  init_process2();
  function parsePropPath(name5) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name5).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name5 = path[index++];
      if (name5 === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name5);
      const isLast = index >= path.length;
      name5 = !name5 && utils_default.isArray(target) ? target.length : name5;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name5)) {
          target[name5] = [target[name5], value];
        } else {
          target[name5] = value;
        }
        return !isNumericKey;
      }
      if (!target[name5] || !utils_default.isObject(target[name5])) {
        target[name5] = [];
      }
      const result = buildPath(path, value, target[name5], index);
      if (result && utils_default.isArray(target[name5])) {
        target[name5] = arrayToObject(target[name5]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name5, value) => {
        buildPath(parsePropPath(name5), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/core/AxiosHeaders.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/parseHeaders.js
  init_dirname();
  init_buffer2();
  init_process2();
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str2) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str2)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str2) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str2.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str2) => {
      return char.toUpperCase() + str2;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isHeaders(header)) {
        for (const [key, value] of header.entries()) {
          setHeader(value, key, rewrite);
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config2 = this || defaults_default;
    const context = response || config2;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  init_dirname();
  init_buffer2();
  init_process2();
  function CanceledError(message, config2, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config2, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/adapters/adapters.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/adapters/xhr.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/core/settle.js
  init_dirname();
  init_buffer2();
  init_process2();
  function settle(resolve2, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve2(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/parseProtocol.js
  init_dirname();
  init_buffer2();
  init_process2();
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/progressEventReducer.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/speedometer.js
  init_dirname();
  init_buffer2();
  init_process2();
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes4 = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes4[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes4[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/helpers/throttle.js
  init_dirname();
  init_buffer2();
  init_process2();
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default = throttle;

  // node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange2 = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange2 ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  var progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };
  var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

  // node_modules/axios/lib/helpers/resolveConfig.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  init_dirname();
  init_buffer2();
  init_process2();
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/cookies.js
  init_dirname();
  init_buffer2();
  init_process2();
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name5, value, expires, path, domain2, secure) {
        const cookie = [name5 + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain2) && cookie.push("domain=" + domain2);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name5) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name5 + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name5) {
        this.write(name5, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/core/buildFullPath.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  init_dirname();
  init_buffer2();
  init_process2();
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/core/mergeConfig.js
  init_dirname();
  init_buffer2();
  init_process2();
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config3 = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
    });
    return config3;
  }

  // node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default = (config2) => {
    const newConfig = mergeConfig({}, config2);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config2.params, config2.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils_default.isFormData(data)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };

  // node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config2) {
    return new Promise(function dispatchXhrRequest(resolve2, reject) {
      const _config = resolveConfig_default(config2);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config2,
          request
        };
        settle(function _resolve(value) {
          resolve2(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config2,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config2, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config2));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/adapters/fetch.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/helpers/composeSignals.js
  init_dirname();
  init_buffer2();
  init_process2();
  var composeSignals = (signals, timeout) => {
    let controller = new AbortController();
    let aborted;
    const onabort = function(cancel) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = cancel instanceof Error ? cancel : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2 && (signal2.removeEventListener ? signal2.removeEventListener("abort", onabort) : signal2.unsubscribe(onabort));
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2 && signal2.addEventListener && signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = unsubscribe;
    return [signal, () => {
      timer && clearTimeout(timer);
      timer = null;
    }];
  };
  var composeSignals_default = composeSignals;

  // node_modules/axios/lib/helpers/trackStream.js
  init_dirname();
  init_buffer2();
  init_process2();
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = async function* (iterable, chunkSize, encode11) {
    for await (const chunk of iterable) {
      yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode11(String(chunk)), chunkSize);
    }
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish, encode11) => {
    const iterator = readBytes(stream, chunkSize, encode11);
    let bytes4 = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes4 += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    });
  };

  // node_modules/axios/lib/adapters/fetch.js
  var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str2) => encoder.encode(str2))(new TextEncoder()) : async (str2) => new Uint8Array(await new Response(str2).arrayBuffer()));
  var test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  var supportsRequestStream = isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform_default.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
  var resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config2) => {
        throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config2);
      });
    });
  })(new Response());
  var getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils_default.isBlob(body)) {
      return body.size;
    }
    if (utils_default.isSpecCompliantForm(body)) {
      return (await new Request(body).arrayBuffer()).byteLength;
    }
    if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils_default.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils_default.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  var resolveBodyLength = async (headers, body) => {
    const length2 = utils_default.toFiniteNumber(headers.getContentLength());
    return length2 == null ? getBodyLength(body) : length2;
  };
  var fetch_default = isFetchSupported && (async (config2) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig_default(config2);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? composeSignals_default([signal, cancelToken], timeout) : [];
    let finished, request;
    const onFinish = () => {
      !finished && setTimeout(() => {
        composedSignal && composedSignal.unsubscribe();
      });
      finished = true;
    };
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
        }
      }
      if (!utils_default.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = "credentials" in Request.prototype;
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      });
      let response = await fetch(request);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            isStreamResponse && onFinish();
          }, encodeText),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config2);
      !isStreamResponse && onFinish();
      stopTimeout && stopTimeout();
      return await new Promise((resolve2, reject) => {
        settle(resolve2, reject, {
          data: responseData,
          headers: AxiosHeaders_default.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config: config2,
          request
        });
      });
    } catch (err) {
      onFinish();
      if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError_default.from(err, err && err.code, config2, request);
    }
  });

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: fetch_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length: length2 } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length2; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length2 ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config2) {
    if (config2.cancelToken) {
      config2.cancelToken.throwIfRequested();
    }
    if (config2.signal && config2.signal.aborted) {
      throw new CanceledError_default(null, config2);
    }
  }
  function dispatchRequest(config2) {
    throwIfCancellationRequested(config2);
    config2.headers = AxiosHeaders_default.from(config2.headers);
    config2.data = transformData.call(
      config2,
      config2.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
      config2.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config2.adapter || defaults_default.adapter);
    return adapter(config2).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData.call(
        config2,
        config2.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config2,
            config2.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/helpers/validator.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/axios/lib/env/data.js
  init_dirname();
  init_buffer2();
  init_process2();
  var VERSION = "1.7.5";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version3, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version3 ? " in " + version3 : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version3 && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version3 + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config2) {
      try {
        return await this._request(configOrUrl, config2);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config2) {
      if (typeof configOrUrl === "string") {
        config2 = config2 || {};
        config2.url = configOrUrl;
      } else {
        config2 = configOrUrl || {};
      }
      config2 = mergeConfig(this.defaults, config2);
      const { transitional: transitional2, paramsSerializer, headers } = config2;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config2.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config2.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config2.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain2 = [dispatchRequest.bind(this), void 0];
        chain2.unshift.apply(chain2, requestInterceptorChain);
        chain2.push.apply(chain2, responseInterceptorChain);
        len = chain2.length;
        promise = Promise.resolve(config2);
        while (i < len) {
          promise = promise.then(chain2[i++], chain2[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config2;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config2) {
      config2 = mergeConfig(this.defaults, config2);
      const fullPath = buildFullPath(config2.baseURL, config2.url);
      return buildURL(fullPath, config2.params, config2.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config2) {
      return this.request(mergeConfig(config2 || {}, {
        method,
        url,
        data: (config2 || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  init_dirname();
  init_buffer2();
  init_process2();
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve2) {
        resolvePromise = resolve2;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve2) => {
          token.subscribe(resolve2);
          _resolve = resolve2;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config2, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config2, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  init_dirname();
  init_buffer2();
  init_process2();
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create2(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // node_modules/@cef-eudi/eudi-did-resolver/dist/errors.js
  init_dirname();
  init_buffer2();
  init_process2();
  var ProblemDetailsError = class extends Error {
    constructor(status, title2, options) {
      super(title2);
      this.name = "ProblemDetailsError";
      this.status = status;
      this.title = title2;
      if (options) {
        if (options.type)
          this.type = options.type;
        if (options.detail)
          this.detail = options.detail;
        if (options.instance)
          this.instance = options.instance;
        if (options.extensions)
          this.extensions = options.extensions;
      }
      if (!this.type)
        this.type = "about:blank";
    }
    toJSON() {
      return {
        title: this.title,
        status: this.status,
        ...this.type && { type: this.type },
        ...this.detail && { detail: this.detail },
        ...this.instance && { instance: this.instance },
        ...this.extensions
      };
    }
    toString() {
      return `${this.status} - ${this.title}`;
    }
  };

  // node_modules/@cef-eudi/eudi-did-resolver/dist/resolvers/v1.js
  var AXIOS_TIMEOUT = 15e3;
  var SUPPORTED_CONTENT_TYPES = [
    "application/did+ld+json",
    "application/did+json"
  ];
  function isSupportedContentType(contentType) {
    return SUPPORTED_CONTENT_TYPES.includes(contentType);
  }
  async function get(url, contentType, timeout) {
    try {
      const response = await axios_default.get(url, {
        headers: {
          accept: contentType
        },
        timeout: timeout || AXIOS_TIMEOUT
      });
      return response.data;
    } catch (e) {
      let message = "";
      if (axios_default.isAxiosError(e)) {
        try {
          const { detail, title: title2 } = e.response?.data;
          message = detail || title2;
        } catch (err) {
          message = e.message;
        }
        throw new ProblemDetailsError(e.response?.status || 500, e.response?.statusText || "", {
          detail: message
        });
      }
      throw e;
    }
  }
  async function resolve(did, registry, didResolutionOptions) {
    if (!registry) {
      return {
        didDocument: null,
        didDocumentMetadata: {},
        didResolutionMetadata: {
          error: DID_RESOLUTION_ERROR_CODES.CONFIGURATION_ERROR,
          message: "A DID registry must be defined in order to resolve EBSI DID method v1 documents"
        }
      };
    }
    let accept = "application/did+ld+json";
    if (didResolutionOptions && didResolutionOptions.accept) {
      if (!isSupportedContentType(didResolutionOptions.accept)) {
        return {
          didDocument: null,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            error: DID_RESOLUTION_ERROR_CODES.REPRESENTATION_NOT_SUPPORTED,
            message: `Representation ${didResolutionOptions.accept} is not supported. Valid representations include: ${SUPPORTED_CONTENT_TYPES.join(", ")}`
          }
        };
      }
      accept = didResolutionOptions.accept;
    }
    try {
      const timeout = didResolutionOptions && typeof didResolutionOptions["timeout"] === "number" ? didResolutionOptions["timeout"] : AXIOS_TIMEOUT;
      const didDocument = await get(`${registry}/${did}`, accept, timeout);
      return {
        didDocument,
        didDocumentMetadata: {},
        didResolutionMetadata: { contentType: accept }
      };
    } catch (e) {
      let error = DID_RESOLUTION_ERROR_CODES.UNKNOWN_ERROR;
      let message = "";
      if (e instanceof ProblemDetailsError) {
        if (e.status === 400) {
          error = DID_RESOLUTION_ERROR_CODES.INVALID_DID;
          message = e.detail || e.title || "Bad Request";
        } else if (e.status === 404) {
          error = DID_RESOLUTION_ERROR_CODES.NOT_FOUND;
          message = e.detail || e.title || "Not Found";
        } else if (e.status === 500) {
          error = DID_RESOLUTION_ERROR_CODES.INTERNAL_SERVER_ERROR;
          message = e.detail || e.title || "Internal Server Error";
        } else {
          message = e.detail || e.title || "unknown";
        }
      } else if (e instanceof Error) {
        message = e.message;
      }
      return {
        didDocument: null,
        didDocumentMetadata: {},
        didResolutionMetadata: {
          error,
          message: `${message} | Registry used: ${registry}`
        }
      };
    }
  }

  // node_modules/@cef-eudi/eudi-did-resolver/dist/validator.js
  init_dirname();
  init_buffer2();
  init_process2();
  function validate(did) {
    if (!did || typeof did !== "string") {
      throw new Error("The DID must be a string");
    }
    if (!did.startsWith(EBSI_DID_METHOD_PREFIX)) {
      throw new Error(`The DID must start with "${EBSI_DID_METHOD_PREFIX}"`);
    }
    const methodSpecificIdentifier = did.substring(EBSI_DID_METHOD_PREFIX.length);
    if (!methodSpecificIdentifier.startsWith("z")) {
      throw new Error('The method-specific identifier must start with "z" (multibase base58btc-encoded)');
    }
    let decodedIdentifier;
    try {
      decodedIdentifier = base58btc.decode(methodSpecificIdentifier);
    } catch (e) {
      throw new Error("The method-specific identifier is not a valid multibase base58btc-encoded string");
    }
    const version3 = decodedIdentifier[0];
    if (!version3) {
      throw new Error("No version found");
    }
    const didSpecsKey = SUPPORTED_VERSIONS.find((specKey) => version3 === EBSI_DID_SPECS[specKey].VERSION_ID);
    if (!didSpecsKey) {
      throw new Error(`Unsupported version "${version3}"`);
    }
    if (decodedIdentifier.byteLength - 1 !== EBSI_DID_SPECS[didSpecsKey].BYTE_LENGTH) {
      throw new Error(`The subject identifier length (${decodedIdentifier.byteLength - 1} bytes) does not match the expected length (${EBSI_DID_SPECS[didSpecsKey].BYTE_LENGTH} bytes)`);
    }
    return version3;
  }

  // node_modules/@cef-eudi/eudi-did-resolver/dist/resolver.js
  function getResolver(resolverOptions) {
    async function resolve2(did, _, __, didResolutionOptions) {
      if (!resolverOptions || typeof resolverOptions !== "object") {
        return {
          didDocument: null,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            error: DID_RESOLUTION_ERROR_CODES.CONFIGURATION_ERROR,
            message: "Invalid or missing resolver options"
          }
        };
      }
      try {
        validate(did);
      } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return {
          didDocument: null,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            error: "invalidDid",
            message
          }
        };
      }
      return resolve(did, resolverOptions.registry, didResolutionOptions);
    }
    return { ebsi: resolve2 };
  }

  // node_modules/@cef-eudi/eudi-did-resolver/dist/util.js
  var util_exports = {};
  __export(util_exports, {
    createDid: () => createDid
  });
  init_dirname();
  init_buffer2();
  init_process2();
  function createDid(subjectIdentifierBytes, version3 = LEGAL_ENTITY) {
    const bytesArray = new Uint8Array(1 + EBSI_DID_SPECS[version3].BYTE_LENGTH);
    bytesArray.set([EBSI_DID_SPECS[version3].VERSION_ID]);
    if (subjectIdentifierBytes.length !== EBSI_DID_SPECS[version3].BYTE_LENGTH) {
      throw new Error(`Invalid subject identifier length. Expected: ${EBSI_DID_SPECS[version3].BYTE_LENGTH} bytes. Received: ${subjectIdentifierBytes.length} bytes.`);
    }
    bytesArray.set(subjectIdentifierBytes, 1);
    const methodSpecificIdentifier = base58btc.encode(bytesArray);
    return `${EBSI_DID_METHOD_PREFIX}${methodSpecificIdentifier}`;
  }

  // node_modules/@cef-eudi/key-did-resolver/dist/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/key-did-resolver/dist/constants.js
  init_dirname();
  init_buffer2();
  init_process2();
  var KEY_DID_METHOD_PREFIX = "did:key:";
  var DID_LD_JSON = "application/did+ld+json";
  var DID_JSON2 = "application/did+json";
  var SUPPORTED_CONTENT_TYPES2 = [DID_LD_JSON, DID_JSON2];

  // node_modules/@cef-eudi/key-did-resolver/dist/resolver.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/key-did-resolver/dist/errors/DidResolutionError.js
  init_dirname();
  init_buffer2();
  init_process2();
  var DidResolutionError = class extends Error {
    constructor(code5, message) {
      super(message);
      this.name = "DIDResolutionError";
      this.code = code5;
    }
  };

  // node_modules/@cef-eudi/key-did-resolver/dist/errors/InvalidDidError.js
  init_dirname();
  init_buffer2();
  init_process2();
  var InvalidDidError = class _InvalidDidError extends DidResolutionError {
    constructor(message) {
      super(_InvalidDidError.code, message);
      this.name = "InvalidDidError";
    }
  };
  InvalidDidError.code = "invalidDid";

  // node_modules/@cef-eudi/key-did-resolver/dist/errors/RepresentationNotSupportedError.js
  init_dirname();
  init_buffer2();
  init_process2();
  var RepresentationNotSupportedError = class _RepresentationNotSupportedError extends DidResolutionError {
    constructor(message) {
      super(_RepresentationNotSupportedError.code, message);
      this.name = "RepresentationNotSupportedError";
    }
  };
  RepresentationNotSupportedError.code = "representationNotSupported";

  // node_modules/@cef-eudi/key-did-resolver/dist/internals.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@cef-eudi/key-did-resolver/dist/codecs/jwk_jcs-pub.js
  init_dirname();
  init_buffer2();
  init_process2();
  var import_lodash = __toESM(require_lodash(), 1);
  var name4 = "jwk_jcs-pub";
  var code4 = 60241;
  var textEncoder2 = new TextEncoder();
  var textDecoder2 = new TextDecoder();
  function check(value, description) {
    if (typeof value !== "string" || !value) {
      throw new Error(`${description} missing or invalid`);
    }
  }
  function validatePlainObject(value) {
    if (!(0, import_lodash.default)(value)) {
      throw new Error("JWK must be an object");
    }
  }
  function validateJwk(jwk) {
    validatePlainObject(jwk);
    switch (jwk["kty"]) {
      case "EC":
        check(jwk["crv"], '"crv" (Curve) Parameter');
        check(jwk["x"], '"x" (X Coordinate) Parameter');
        check(jwk["y"], '"y" (Y Coordinate) Parameter');
        break;
      case "OKP":
        check(jwk["crv"], '"crv" (Subtype of Key Pair) Parameter');
        check(jwk["x"], '"x" (Public Key) Parameter');
        break;
      case "RSA":
        check(jwk["e"], '"e" (Exponent) Parameter');
        check(jwk["n"], '"n" (Modulus) Parameter');
        break;
      default:
        throw new Error('"kty" (Key Type) Parameter missing or unsupported');
    }
  }
  function canonicaliseJwk(jwk) {
    let components;
    switch (jwk.kty) {
      case "EC":
        components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
        break;
      case "OKP":
        components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
        break;
      case "RSA":
        components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
        break;
    }
    return components;
  }
  function encode10(jwk) {
    validateJwk(jwk);
    const components = canonicaliseJwk(jwk);
    return textEncoder2.encode(JSON.stringify(components));
  }
  function decode9(bytes4) {
    const jwk = JSON.parse(textDecoder2.decode(bytes4));
    validateJwk(jwk);
    if (JSON.stringify(jwk) !== JSON.stringify(canonicaliseJwk(jwk))) {
      throw new Error("The JWK embedded in the DID is not correctly formatted");
    }
    return jwk;
  }

  // node_modules/@cef-eudi/key-did-resolver/dist/drivers/jwk_jcs-pub.js
  var jwk_jcs_pub_exports = {};
  __export(jwk_jcs_pub_exports, {
    pubKeyBytesToDidDoc: () => pubKeyBytesToDidDoc
  });
  init_dirname();
  init_buffer2();
  init_process2();
  function pubKeyBytesToDidDoc(pubKeyBytes, identifier, contentType) {
    const did = `${KEY_DID_METHOD_PREFIX}${identifier}`;
    const keyId = `${did}#${identifier}`;
    let publicKeyJwk;
    try {
      publicKeyJwk = decode9(pubKeyBytes);
    } catch (e) {
      throw new InvalidDidError(e instanceof Error ? e.message : "Unknown error");
    }
    return {
      ...contentType === DID_LD_JSON && {
        "@context": [
          "https://www.w3.org/ns/did/v1",
          "https://w3id.org/security/suites/jws-2020/v1"
        ]
      },
      id: did,
      verificationMethod: [
        {
          id: keyId,
          type: "JsonWebKey2020",
          controller: did,
          publicKeyJwk
        }
      ],
      authentication: [keyId],
      assertionMethod: [keyId],
      capabilityInvocation: [keyId],
      capabilityDelegation: [keyId]
    };
  }

  // node_modules/@cef-eudi/key-did-resolver/dist/internals.js
  var codecToDriver = {
    [code4]: jwk_jcs_pub_exports
  };
  var encodePublicKey = (pubKeyBytes, code5) => {
    const size = pubKeyBytes.byteLength;
    const sizeOffset = varint_exports.encodingLength(code5);
    const messageOffset = sizeOffset;
    const bytes4 = new Uint8Array(messageOffset + size);
    varint_exports.encodeTo(code5, bytes4, 0);
    bytes4.set(pubKeyBytes, messageOffset);
    return base58btc.encode(bytes4);
  };
  var decodePublicKey = (publicKey) => {
    const multicodecPubKey = base58btc.decode(publicKey);
    const [code5, sizeOffset] = varint_exports.decode(multicodecPubKey);
    const pubKeyBytes = multicodecPubKey.slice(sizeOffset);
    return {
      pubKeyBytes,
      code: code5
    };
  };
  function resolveDidDoc(did, contentType) {
    let pubKeyBytes;
    let code5;
    if (!did || typeof did !== "string") {
      throw new InvalidDidError("The DID must be a string");
    }
    if (!did.startsWith(KEY_DID_METHOD_PREFIX)) {
      throw new InvalidDidError(`The DID must start with "${KEY_DID_METHOD_PREFIX}"`);
    }
    const methodSpecificIdentifier = did.substring(KEY_DID_METHOD_PREFIX.length);
    if (!methodSpecificIdentifier.startsWith(base58btc.prefix)) {
      throw new InvalidDidError(`The method-specific identifier must start with "${base58btc.prefix}" (multibase base58btc-encoded)`);
    }
    try {
      const decodedResult = decodePublicKey(methodSpecificIdentifier);
      pubKeyBytes = decodedResult.pubKeyBytes;
      code5 = decodedResult.code;
    } catch (e) {
      throw new InvalidDidError("The method-specific identifier is not a valid multibase base58btc-encoded string");
    }
    const driver = codecToDriver[code5];
    if (!driver) {
      throw new InvalidDidError(`Unsupported codec ${code5}`);
    }
    const didDocument = driver.pubKeyBytesToDidDoc(pubKeyBytes, methodSpecificIdentifier, contentType);
    return didDocument;
  }

  // node_modules/@cef-eudi/key-did-resolver/dist/resolver.js
  function getResolver2() {
    function resolve2(did, _, __, didResolutionOptions) {
      try {
        const contentType = didResolutionOptions?.accept || DID_LD_JSON;
        if (!SUPPORTED_CONTENT_TYPES2.includes(contentType)) {
          throw new RepresentationNotSupportedError(`Representation "${contentType}" is not supported`);
        }
        const didDocument = resolveDidDoc(did, contentType);
        return Promise.resolve({
          didDocument,
          didDocumentMetadata: {},
          didResolutionMetadata: { contentType }
        });
      } catch (e) {
        if (e instanceof DidResolutionError) {
          return Promise.resolve({
            didDocument: null,
            didDocumentMetadata: {},
            didResolutionMetadata: {
              error: e.code,
              message: e.message
            }
          });
        }
        const message = e instanceof Error ? e.message : "Unknown error";
        return Promise.resolve({
          didDocument: null,
          didDocumentMetadata: {},
          didResolutionMetadata: {
            error: "invalidDid",
            message
          }
        });
      }
    }
    return { key: resolve2 };
  }

  // node_modules/@cef-eudi/key-did-resolver/dist/util.js
  var util_exports2 = {};
  __export(util_exports2, {
    createDid: () => createDid2,
    validateDid: () => validateDid
  });
  init_dirname();
  init_buffer2();
  init_process2();
  function createDid2(publicKey) {
    try {
      return `${KEY_DID_METHOD_PREFIX}${encodePublicKey(encode10(publicKey), code4)}`;
    } catch (e) {
      throw new Error(e instanceof Error ? e.message : "Unknown error");
    }
  }
  function validateDid(did) {
    resolveDidDoc(did);
  }

  // node_modules/@cef-eudi/wallet-lib/dist/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  var add0xPrefix = (str2) => str2.startsWith("0x") ? str2 : `0x${str2}`;
  var remove0xPrefix = (str2) => str2.startsWith("0x") ? str2.slice(2) : str2;
  var hexStringToBase64Url = (hexString) => {
    const base163 = hexToBytes(remove0xPrefix(hexString));
    return base64url.baseEncode(base163);
  };

  // node_modules/@cef-eudi/wallet-lib/dist/EbsiWallet.js
  var import_elliptic2 = __toESM(require_elliptic(), 1);
  var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var _EbsiWallet_privateKey;
  var EC2 = import_elliptic2.default.ec;
  var LEGAL_ENTITY2 = "LEGAL_ENTITY";
  var NATURAL_PERSON = "NATURAL_PERSON";
  var SUPPORTED_VERSIONS2 = ["LEGAL_ENTITY", "NATURAL_PERSON"];
  var EbsiWallet = class _EbsiWallet {
    constructor(privateKey) {
      _EbsiWallet_privateKey.set(this, void 0);
      if (typeof privateKey === "string") {
        __classPrivateFieldSet(this, _EbsiWallet_privateKey, hexToBytes(remove0xPrefix(privateKey)), "f");
      } else {
        __classPrivateFieldSet(this, _EbsiWallet_privateKey, privateKey, "f");
      }
    }
    static createDid(version3 = LEGAL_ENTITY2, publicKeyJwk) {
      if (version3 === NATURAL_PERSON) {
        return util_exports2.createDid(publicKeyJwk);
      }
      return util_exports.createDid(randomBytes(EBSI_DID_SPECS[version3].BYTE_LENGTH));
    }
    static formatPublicKey(publicKey, format = "hex") {
      if (format === "hex") {
        return publicKey.encode("hex", false);
      }
      if (format === "pem") {
        const keyEncoder = new KeyEncoder("secp256k1");
        const rawPublicKey = publicKey.encode("hex", false);
        const pemPublicKey = keyEncoder.encodePublic(rawPublicKey, "raw", "pem");
        return pemPublicKey;
      }
      const jwk = {
        kty: "EC",
        crv: "secp256k1",
        x: hexStringToBase64Url(publicKey.getX().toString("hex", 64)),
        y: hexStringToBase64Url(publicKey.getY().toString("hex", 64))
      };
      return jwk;
    }
    static formatPrivateKey(privateKey, format = "hex") {
      const privateKeyHex = privateKey.toString("hex", 64);
      if (format === "hex") {
        return privateKeyHex;
      }
      if (format === "pem") {
        const keyEncoder = new KeyEncoder("secp256k1");
        const pemPrivateKey = keyEncoder.encodePrivate(privateKeyHex, "raw", "pem");
        return pemPrivateKey;
      }
      const publicKey = _EbsiWallet.ec.keyFromPrivate(privateKeyHex).getPublic();
      const jwk = {
        kty: "EC",
        crv: "secp256k1",
        x: hexStringToBase64Url(publicKey.getX().toString("hex", 64)),
        y: hexStringToBase64Url(publicKey.getY().toString("hex", 64)),
        d: hexStringToBase64Url(privateKeyHex)
      };
      return jwk;
    }
    static generateKeyPair({ format = "hex" } = {}) {
      const outputKeyOptions = {
        format,
        keyType: "EC",
        keyCurve: "secp256k1"
      };
      const keyPair = _EbsiWallet.ec.genKeyPair();
      const publicKey = keyPair.getPublic();
      const privateKey = keyPair.getPrivate();
      return {
        keyOptions: outputKeyOptions,
        publicKey: _EbsiWallet.formatPublicKey(publicKey, format),
        privateKey: _EbsiWallet.formatPrivateKey(privateKey, format)
      };
    }
    getPublicKey({ format } = {}) {
      const key = _EbsiWallet.ec.keyFromPrivate(__classPrivateFieldGet(this, _EbsiWallet_privateKey, "f"));
      const publicKey = key.getPublic();
      return _EbsiWallet.formatPublicKey(publicKey, format);
    }
    getEthereumAddress() {
      const publicKey = this.getPublicKey({ format: "hex" });
      return bytesToHex(keccak_256(hexToBytes(publicKey.slice(2)))).slice(-40);
    }
    static async prepareEthereumTransaction(txRequest, provider) {
      const gasEstimation = await provider.estimateGas(txRequest);
      return {
        ...txRequest,
        gasLimit: gasEstimation.mul(14).div(10)
      };
    }
    async signJwt(payload, options, header) {
      const signer = ES256KSigner(__classPrivateFieldGet(this, _EbsiWallet_privateKey, "f"));
      const signedJwt = await createJWT(payload, {
        signer,
        issuer: options.issuer,
        ...options.expiresIn && { expiresIn: options.expiresIn },
        canonicalize: true
      }, header);
      return signedJwt;
    }
  };
  _EbsiWallet_privateKey = /* @__PURE__ */ new WeakMap();
  EbsiWallet.ec = new EC2("secp256k1");

  // index.js
  async function createDIDFromJWK(jwk) {
    try {
      console.log("jwk:", jwk);
      if (typeof jwk === "string") {
        jwk = JSON.parse(jwk);
      }
      const did = EbsiWallet.createDid("NATURAL_PERSON", jwk);
      console.log("did NATURAL_PERSON:", did);
      return JSON.stringify({ success: true, content: did });
    } catch (error) {
      console.error("Error creating DID:", error);
      return JSON.stringify({ success: false, error: error.message });
    }
  }
  async function getDidDocument(did) {
    try {
      console.log("did:", did);
      const keyResolver = getResolver2();
      const didResolver = new Resolver(keyResolver);
      const doc = await didResolver.resolve(did);
      console.log(doc);
      console.log(doc["didResolutionMetadata"]);
      if ("error" in doc["didResolutionMetadata"]) {
        console.log(doc["didResolutionMetadata"]["error"]);
        throw new Error(doc["didResolutionMetadata"]["error"]);
      }
      return JSON.stringify({ success: true, content: doc });
    } catch (error) {
      console.error("Error getting did document:", error);
      return JSON.stringify({ success: false, error: error.message });
    }
  }
  async function getEntityDidDocument(did) {
    try {
      console.log("did:", did);
      const resolverConfig = {
        // registry: "https://api-pilot.eudi.eu/did-registry/v5/identifiers",
        registry: "https://api-pilot.ebsi.eu/did-registry/v4/identifiers"
      };
      const ebsiResolver = getResolver(resolverConfig);
      const didResolverEntity = new Resolver(ebsiResolver);
      const doc = await didResolverEntity.resolve("did:ebsi:zucwVRVRqAGQnpJNeyXDmYB");
      console.log(doc);
      if ("error" in doc["didResolutionMetadata"]) {
        console.log(doc["didResolutionMetadata"]["error"]);
        throw new Error(doc["didResolutionMetadata"]["error"]);
      }
      return JSON.stringify({ success: true, content: doc });
    } catch (error) {
      console.error("Error getting did document:", error);
      return JSON.stringify({ success: false, error: error.message });
    }
  }
  globalThis.createDIDFromJWK = createDIDFromJWK;
  globalThis.getDidDocument = getDidDocument;
  globalThis.getEntityDidDocument = getEntityDidDocument;
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/edwards.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/montgomery.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/ed25519.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/p256.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ciphers/esm/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
