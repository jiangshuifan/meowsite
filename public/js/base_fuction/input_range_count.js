//这个需要在对应 input[type='range']设置max=1530,这个是来读取，红黄绿青蓝紫颜色过渡条值的
let caculateColorValue = (rangeElement) => {
    let currentVal = rangeElement.value;
    let range_section = Math.floor(currentVal / 255);
    let plus_value = currentVal % 255;
    if (range_section === 6) {
      //渐变区间
      range_section = 5;
      plus_value = 255;
    }
    let minus_value = 255 - plus_value;
    switch (range_section) {
      case 0:
        return `255,${plus_value},0`;
        break;
      case 1:
        return `${minus_value},255,0`;
        break;
      case 2:
        return `0,255,${plus_value}`;
        break;
      case 3:
        return `0,${minus_value},255`;
        break;
      case 4:
        return `${plus_value},0,255`;
        break;
      case 5:
        return `255,0,${minus_value}`;
        break;
    }
  };

let caculateNormalValue = (rangeElement,max,total)=>{
  let currentVal = rangeElement.value;
  let res =  currentVal*total/max
  return res
}