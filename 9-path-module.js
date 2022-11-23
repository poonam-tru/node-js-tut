const  path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

//base of the file path which is text.txt
const base = path.basename(filePath);
console.log(base);

//with directory 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);