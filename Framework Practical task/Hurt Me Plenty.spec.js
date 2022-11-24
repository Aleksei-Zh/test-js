/** [Hurt Me Plenty]

 When performing the task, you need to use the capabilities
  of Selenium WebDriver, the unit testing framework and the Page Object concept. 
  Automate the following script:

1. Open https://cloud.google.com/

2. By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"

3. Start the search by clicking the search button.

4. In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.

5. Activate the COMPUTE ENGINE section at the top of the page

6. Fill in the form with the following data:

    * Number of instances: 4

    * What are these instances for ?: leave blank

    * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS

    * VM Class: Regular

    * Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)

    * Select Add GPUs

        * Number of GPUs: 1

        * GPU type: NVIDIA Tesla V100

    * Local SSD: 2x375 Gb

    * Datacenter location: Frankfurt (europe-west3)

    * Commited usage: 1 Year

7. Click Add to Estimate

8. Check the correspondence of the data of the following fields: VM Class, Instance type, Region, local SSD, commitment term

9. Check that the rental amount per month matches the amount received when passing the test manually.

﻿ */

const checkPage = require("../../page/check.page");

const fillPage = require("../../page/fill.page");
const resultPage = require("../../page/result.page");
const searchPage = require("../../page/search.page");

describe ("Hurt Me Plenty", () =>{
    
    it ('Open, search', async () => {
        await browser.url("https://cloud.google.com/");   
        await searchPage.SearchInput('Google Cloud Platform Pricing Calculator')
        
    })
    it ('choose', async () => {   
        await resultPage.ResultInput();
                      
    })
    it ('fill', async () => {  
        await fillPage.FillInput();    
             
    })
    
    it ('check', async () => {         
        
        await checkPage.CheckInput() ;
                  
    })
    
})

    