const Page = require ('./page');

class Result extends Page {
      
           async ResultInput () {  
            await $("//div[@class='gsc-webResult gsc-result'][9]").waitForDisplayed(40000);         
            await $("//a[@href='https://cloud.google.com/products/calculator/?hl=sv']").click();
           }
    
       }
module.exports = new Result();