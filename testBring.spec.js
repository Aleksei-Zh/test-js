
/**(Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

1. Open https://pastebin.com or a similar service in any browser

2. Create a New Paste with the following details:

* Code:

git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force

* Syntax Highlighting: "Bash"

* Paste Expiration: "10 Minutes"

* Paste Name / Title: "how to gain dominance among developers"

3. Save paste and check the following:

* Browser page title matches Paste Name / Title

* Syntax is suspended for bash

* Check that the code matches the one entered in paragraph 2 */

describe ("Bring It On", () => {
    it("first test", async() => {
        await browser.url ("https://pastebin.com ");
        await $ ("#postform-text").click();
        await $ ("#postform-text").setValue('git config --global user.name "New Sheriff in Town"' + "\n");
        await $ ("#postform-text").addValue('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")' + "\n");
        await $ ("#postform-text").addValue("git push origin master --force");
        await $ ('#select2-postform-format-container').click();
        await $ ("//li[@role='group']/ul/li[1]").click();
        await $ ('//*[@id="w0"]/div[5]/div[1]/div[4]/div/span/span[1]/span/span[2]').click();
        await $ ("//ul[@role='listbox']/li[3]").click();
        await $("#postform-name").click();
        await $("#postform-name").setValue("how to gain dominance among developers");
        await $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button').click();
        let headder = await $("//h1");
        expect(await headder.getText()).toEqual("how to gain dominance among developers");
        let sint = await $("//a[@href='/archive/bash']");
        expect(await sint.getText()).toEqual("Bash");
        let text1 = await $("//ol/li/div");
        expect(await text1.getText()).toEqual('git config --global user.name "New Sheriff in Town"');
        let text2 = await $("//ol/li[2]/div");
        expect(await text2.getText()).toEqual('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
        let text3 = await $("//ol/li[3]/div");
        expect(await text3.getText()).toEqual('git push origin master --force')
        
    })
    })

