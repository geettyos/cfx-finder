/* Github: https://github.com/geettyos/
//Discord: GEETTYOS#0001
//This script was made for educational purposes, I am not responsible for your actions using this script. This script was made for educational purposes.*/

console.log("\x1b[31m   _____ __________         _____ _____     ______ _           _           ");
console.log("  / ____|  ____\\ \\ / /     |_   _|  __ \\   |  ____(_)         | |          ");
console.log(" | |    | |__   \\ V /        | | | |__) |  | |__   _ _ __   __| | ___ _ __ ");
console.log(" | |    |  __|   > <         | | |  ___/   |  __| | | '_ \\ / _` |/ _ \\ '__|");
console.log(" | |____| |     / . \\       _| |_| |       | |    | | | | | (_| |  __/ |   ");
console.log("  \\_____|_|    /_/ \\_      |_____|_|       |_|    |_|_| |_|\\__,_|\\___|_|   ");
console.log("\x1b[0m");

const readline = require('readline');
const axios = require('axios');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
rl.question("Please enter server's CFX.re IP address (cfx.re/join/XXXXXX or XXXXXX): ", (url) => {

if (url.startsWith("cfx.re/join/")) {
  
  var request = "https://" + url

}

else if (url.startsWith("https://cfx.re/join/")) {
  
  var request = url
  var url = url.replace("https://", "")
  
} 

else {
  
  var request = "https://cfx.re/join/" + url
  var url = "cfx.re/join/" + url;

}

  async function storeheader() {

try {

  var response = (await axios.get(request)).headers["x-citizenfx-url"].replace("http://", "").replace("/", "");

} catch (error) {

  var response = "Server was not found! Check server's CFX.re IP address or server might be offline!"

}

console.log();
  console.log(`CFX.re IP: \x1b[36m${url}`);
  console.log(`\x1b[0mIP address: \x1b[36m${response}\x1b[0m`);
  console.log();
  console.log(`\x1b[32mNote: Remember that some servers have their IP hidden, but there is another way to get it. Also make sure that server is online!`)
  console.log();
  console.log(`\x1b[33mYou can contact me on Discord, just be kind - GEETTYOS#0001.`);
  console.log(`\x1b[33mFeel free to request features and report bugs. I will fix them or implement features as fast as I can. :)\x1b[0m`);
  console.log();
  recursiveAsyncReadLine();

}

storeheader()
});
};
recursiveAsyncReadLine();