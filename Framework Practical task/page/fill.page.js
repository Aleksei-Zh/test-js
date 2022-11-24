const Page = require ('./page');

class Fill extends Page {
      
           async FillInput () {
            
            await $('//*[@id="cloud-site"]/devsite-iframe/iframe').waitForDisplayed(40000);
            const frame = await  $('//*[@id="cloud-site"]/devsite-iframe/iframe');
            expect(frame).toExist()
            await frame.scrollIntoView();
            browser.switchToFrame(frame);
            await $('#myFrame').waitForDisplayed(40000);
            const frame1 = await  $('#myFrame');
            expect(frame1).toExist()
            await frame1.scrollIntoView();
            browser.switchToFrame(frame1);  

            browser.fullscreenWindow() ;   
            //** the form from the task has different lines to fill. So I've chosen few from them that almost the same to demonstrate that the  code works */       
            //**Number of instances: 4 */
            await $('//*[@id="input_90"]').waitForDisplayed(10000);         
            await $('//*[@id="input_90"]').click()
            await $('//*[@id="input_90"]').setValue(4); 
            //** Machine type: e2-standard-8 (vCPUs: 8, RAM: 32GB)*/      
            await $("#select_value_label_86").click();
            await $('#select_option_268').click(); 
            //**  Commited usage: 1 Year */     
            await $("#select_value_label_89").click();
            await $("#select_option_128").click(); 
            
               
            await $('[aria-label="Add to Estimate"]').click();       
               
           }
    
       }
module.exports = new Fill();


