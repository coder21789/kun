import numeral from 'numeral';

export const autoScreen = () => {
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const scale = width / height

  const [originWidth, originHeight] = [1920, 1080]
  const originScale = originWidth / originHeight

  const initStyle = {
    width: originWidth,
    height: originHeight,
    transformOrigin: `0 0`,
    transform: `scale(1)`,
    position: 'relative',
  }

  let updateStyle = {}
  if (originScale > scale) {
    updateStyle = {
      ...initStyle,
      transform: `scale(${width / originWidth})`,
      top: (height - width / originScale) / 2
    }
    console.log(height, width, originScale)
  } else {
    updateStyle = {
      ...initStyle,
      transform: `scale(${height / originHeight})`,
      left: (width - height * originScale) / 2,
    }
  }
  return updateStyle
}

export function getFormatMoney(value) {
  if (typeof value !== 'number') {
    return { value };
  }

  if (value < 10e1) {
    return {
      value,
      unit: '元',
    };
  } else if (value < 10e5) {
    return {
      value: numeral(value / 10e3).format('0, 0.00'),
      unit: '万元',
    };
  } else {
    return {
      value: numeral(value / 10e7).format('0, 0.00'),
      unit: '亿元',
    };
  }
}