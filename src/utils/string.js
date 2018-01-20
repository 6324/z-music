const numberConvert=(number)=>{
  if(number>10000){
    return (number/10000).toFixed(2)+'万'
  }
}

export default {
  numberConvert
}
