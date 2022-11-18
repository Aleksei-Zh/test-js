/**1. Open https://pastebin.com or a similar service in any browser

2. Create a New Paste with the following details:

* Code: "Hello from WebDriver"

* Paste Expiration: "10 Minutes"

* Paste Name / Title: "helloweb" */

describe ("I Can Win", () => {
    it("first test", async() => {
        await browser.url ("https://pastebin.com ");
        await $ ("#postform-text").click();
        await $ ("#postform-text").setValue("Hello from WebDriver");
        await $ ('//*[@id="w0"]/div[5]/div[1]/div[4]/div/span/span[1]/span/span[2]').click();
        await $ ("//ul[@role='listbox']/li[3]").click();
        await $("#postform-name").click();
        await $("#postform-name").setValue("helloweb");
    })
   
})

