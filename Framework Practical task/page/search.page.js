 const Page = require ('./page');

 class Search extends Page {
       
            async SearchInput (input) {
                await $('//input').click();
                await $('//input').setValue(input);
                await $('//input').addValue("\uE007");
                
            }
     
        }
module.exports = new Search();