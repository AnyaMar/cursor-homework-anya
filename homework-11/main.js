async function getRandomChinese(length) {
  let str = '';
  for(let i = 0; i < length; i++){
    str += String.fromCharCode((Date.now().toString()).slice(-5));
    await new Promise((resolve) => setTimeout(resolve, 50))
  }
  return console.log(str);
}
getRandomChinese(5);
