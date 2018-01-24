const numberConvert=(number)=>{
  if(number>10000){
    return (number/10000).toFixed(0)+'万'
  }
  else if (number<10000){
    return number.toFixed(0)
  }
}

export default {
  numberConvert
}
