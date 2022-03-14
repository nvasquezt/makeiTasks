"use Strict"
const { faker } = require('@faker-js/faker');
const fs = require('fs');

let list = ''

for (let index = 0; index <1000; index++) {
    const randomName = faker.name.findName();
    list += (index+1)+'. '+randomName.toString()+'\n';
}
fs.writeFileSync('randomNames.txt', list);