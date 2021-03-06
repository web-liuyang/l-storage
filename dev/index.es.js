import { decode, encode } from 'js-base64';
export { default as cookie } from 'js-cookie';

/**
 * @description 获取值
 * @param {string} key - 存储的key
 * @param {Pick<Local.IOptions, 'decode'>} [options] - 参数选项
 * @param {boolean} [options.decode] - 是否解密
 * @returns {any} 存储的值
 */

function get$1(key, options) {
  var value = localStorage.getItem(key);
  if (!value) return null;

  if (options === null || options === void 0 ? void 0 : options.decode) {
    return JSON.parse(decode(value));
  } else {
    return JSON.parse(value);
  }
}
/**
 * @description 设置值
 * @param {string} key - 设置的key
 * @param {*} value - 设置的value
 * @param {Pick<Local.IOptions, 'encode'>} [options] - 参数选项
 * @param {boolean} [options.encode] - 是否加密
 */


function set$1(key, value, options) {
  if (options === null || options === void 0 ? void 0 : options.encode) {
    localStorage.setItem(key, encode(JSON.stringify(value)));
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
/**
 * @description 删除值
 * @param {string} key - 删除的key
 */


function remove$1(key) {
  localStorage.removeItem(key);
}
/**
 * @description 清空
 */


function clear$1() {
  localStorage.clear();
}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$1,
  set: set$1,
  remove: remove$1,
  clear: clear$1
});

/**
 * @description 获取值
 * @param {string} key - 存储的key
 * @param {Pick<Session.IOptions, 'decode'>} [options] - 参数选项
 * @param {boolean} [options.decode] - 是否解密
 * @returns {*} 存储的值
 */

function get(key, options) {
  var value = sessionStorage.getItem(key);
  if (!value) return null;

  if (options === null || options === void 0 ? void 0 : options.decode) {
    return JSON.parse(decode(value));
  } else {
    return JSON.parse(value);
  }
}
/**
 * @description 设置值
 * @param {string} key - 设置的key
 * @param {*} value - 设置的value
 * @param {Pick<Session.IOptions, 'encode'>} [options] - 参数选项
 * @param {boolean} [options.encode] - 是否加密
 */


function set(key, value, options) {
  if (options === null || options === void 0 ? void 0 : options.encode) {
    sessionStorage.setItem(key, encode(JSON.stringify(value)));
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
/**
 * @description 删除值
 * @param {string} key - 删除的key
 */


function remove(key) {
  sessionStorage.removeItem(key);
}
/**
 * @description 清空
 */


function clear() {
  sessionStorage.clear();
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get,
  set: set,
  remove: remove,
  clear: clear
});

export { index$1 as local, index as session };
