function * createIdGenerator() {
  for(let i = 1; i < Infinity; i++) {
    yield i;
  }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(size) {
let word = yield size;
while(1) {
  switch(word) {
    case 'up': 
    word = yield size += 2;
    break;
    case 'down':
    word = yield size -= 2;
    break;
    default:
    word = yield size;
  }
}
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
