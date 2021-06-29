const hashTable = require('../../hashTable/hashTable.js');



module.exports= function leftJion(table1 , table2){
  let resultArr=[];
  for (let i = 0; i <= table1.table.length - 1; i++) {
    if (table1.table[i]) {
      console.log(table1.table[i]);
      let key1 = [Object.keys(table1.table[i].head.value)[0] ] [0];
      let key2 = [Object.keys(table2.table[i].head.value)[0] ] [0];
      let v1 = [Object.values(table1.table[i].head.value)[0] ] [0];
      let v2 = [Object.values(table2.table[i].head.value)[0] ] [0];
      if(key1===key2){
        let packet =[key1,v1,v2];
        resultArr.push(packet);
      }
    }
  }

  return resultArr;

};
