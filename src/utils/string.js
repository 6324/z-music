const numberConvert = (number) => {
  if (number > 10000) {
    return (number / 10000).toFixed(0) + '万'
  }
  else if (number < 10000) {
    return number.toFixed(0)
  }
}


const timeFormat = (s) => {
  var t='';
  if(s > -1){
    var min = Math.floor(s/60) % 60;
    var sec = s % 60;
    if(min < 10){t += "0";}
    t += min + ":";
    if(sec < 10){t += "0";}
    t += sec.toFixed(0);
  }
  return t;
}

export default {
  numberConvert,
  timeFormat
}
