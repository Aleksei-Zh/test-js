const Page = require ('./page');



class Email extends Page {
    
      
           async EmailGet () {
            browser.newWindow ('https://www.fakemail.net/');
            await browser.pause(3000);
            
            const EmailText = await $('//*[@id="email"]').getText();
            
            browser.switchWindow("Cloud Pricing Calculator"); 
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
            await $('//*[@id="Email Estimate"]').click();             
               await $("//form[@name='emailForm']/md-content/div[3]").click()
               await browser.pause(3000); 
               await browser.keys(EmailText);
               await browser.pause(5000);
               await $("//form[@name='emailForm']/md-dialog-actions/button[2]").click();
               await browser.pause(5000);
            
           }
           async CheckEmail(){
            browser.switchWindow('https://www.fakemail.net/');
            await browser.pause(20000);
            await $('//*[@id="schranka"]/tr').waitForDisplayed(10000);
            await $('//*[@id="schranka"]/tr').click();
            browser.url('https://www.fakemail.net/window/id/2');
            await $('#iframeMail').waitForDisplayed(5000);
            const frame3 = await  $('#iframeMail');
            
            browser.switchToFrame(frame3); 
            let text5 =  $("//*[@id='mobilepadding']/td/h2");        
            expect(await text5.getText()).toEqual('Estimated Monthly Cost: USD 246.55');           
           }
       }
module.exports = new Email();