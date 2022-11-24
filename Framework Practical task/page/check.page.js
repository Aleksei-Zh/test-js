const Page = require ('./page');

class Check extends Page {
      
           async CheckInput () {
            
            await $('#compute > md-list > md-list-item:nth-child(8)').waitForDisplayed(10000);   
            let text1 = $ ('#compute > md-list > md-list-item:nth-child(8)')
            expect(await text1.getText()).toEqual('Provisioning model: Regular');
            let text2 = $ ('#compute > md-list > md-list-item:nth-child(6)')
            expect(await text2.getText()).toEqual('Commitment term: 1 Year');
            let text3 = $ ('#compute > md-list > div > div.md-no-sticky.md-subheader > div > span > span')
            expect(await text3.getText()).toEqual('4 x');
            let text4 = $ ("#resultBlock > md-card > md-card-content > div > div > div > div.cpc-cart-total > h2 > b");        
            expect(await text4.getText()).toEqual('Total Estimated Cost: USD 246.55 per 1 month');
            
           }
        }
module.exports = new Check();