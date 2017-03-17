var moment = require("moment");
var datetime = moment().startOf('hour').fromNow();
console.log(datetime);

function test(x = 37){
  console.log(x);
}

console.log("Hello Marthe! umwana wanyu yarananiranye")
test();