import styled__default from 'styled-components'
export * from 'styled-components'

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr)
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter)
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}

var pxRe = /-?\d*[.\d]*px/g
var base64Re = /^data:\w+\/[a-zA-Z+\-.]+;base64,/i

var px2vw = function px2vw(px) {
  return Number(px) ? ''.concat(Math.round((Number(px) / 3.75) * 100000) / 100000, 'vw') : 0
}

var convertStringPx2vw = function convertStringPx2vw(style) {
  if (!style) return style

  if (
    !base64Re.test(style) && // 非base64字符串
    pxRe.test(style) // 包含px单位
  ) {
    return style.replace(pxRe, function (value) {
      return px2vw(value.replace('px', ''))
    })
  }

  return style
}

var isKeyframes = function isKeyframes(interpolation) {
  return (
    Object.prototype.toString.call(interpolation) === '[object Object]' &&
    interpolation.constructor.name === 'Keyframes'
  )
}

var convertKeyframesPx2vw = function convertKeyframesPx2vw(keyframes) {
  keyframes.stringifyArgs = keyframes.stringifyArgs.map(convertStringPx2vw)
  return keyframes
}

var convertInterpolationPx2vw = function convertInterpolationPx2vw(interpolation) {
  if (typeof interpolation === 'string') {
    return convertStringPx2vw(interpolation)
  }

  if (isKeyframes(interpolation)) {
    return convertKeyframesPx2vw(interpolation)
  }

  if (Array.isArray(interpolation)) {
    return interpolation.map(convertInterpolationPx2vw)
  }

  if (typeof interpolation === 'function') {
    return function (props) {
      return convertInterpolationPx2vw(interpolation(props))
    }
  }

  return interpolation
}

var withCss = function withCss(styled) {
  var interleave = function interleave(strings) {
    for (
      var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
      _key < _len;
      _key++
    ) {
      interpolations[_key - 1] = arguments[_key]
    }

    strings = strings.map(convertStringPx2vw)
    interpolations = interpolations.map(convertInterpolationPx2vw)
    return styled.apply(void 0, [strings].concat(_toConsumableArray(interpolations)))
  }

  Object.keys(styled).forEach(function (prop) {
    return (interleave[prop] = withTemplateFunc(styled[prop]))
  })
  return interleave
}

var withTemplateFunc = function withTemplateFunc(styled) {
  return function () {
    return withCss(styled.apply(void 0, arguments))
  }
}

var styledPx2vw = (function (styled) {
  var obj = withTemplateFunc(styled)
  Object.keys(styled).forEach(function (key) {
    obj[key] = withCss(styled[key])
    Object.keys(styled[key]).forEach(function (prop) {
      return (obj[key][prop] = withTemplateFunc(styled[key][prop]))
    })
  })
  return obj
})(styled__default)

export default styledPx2vw
export { px2vw }
