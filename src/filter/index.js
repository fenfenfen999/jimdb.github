import Vue from 'vue'

Vue.filter('formatNum', function(value) {
  if (!value) {
    return '0'
  }

  const stringValue = value.toString()
  const intPart = Number(value).toFixed(0) // 获取整数部分
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断

  let floatPart = '.00' // 预定义小数部分
  const value2Array = stringValue.split('.')

  // =2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString() // 拿到小数部分

    if (floatPart.length === 1) { // 补0,实际上用不着
      return intPartFormat + '.' + floatPart + '0'
    } else {
      return intPartFormat + '.' + floatPart
    }
  } else {
    return intPartFormat
  }
})

Vue.filter('formatTime', function(value) {
  if (value == null || value === '') {
    return ''
  }
  const time = new Date(value)

  // 枚举月份
  const month = new Array(12);
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';

  const y = time.getFullYear()
  const m = time.getMonth()
  const d = time.getDate()

  return '' + month[m] + ' ' + d + ', ' + y
})
