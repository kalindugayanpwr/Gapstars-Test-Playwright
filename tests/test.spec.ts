import test, { Page,expect } from "@playwright/test"; 
import { InternetPage } from "../pages/internetPage";

test.describe('Test Suit', () => {

    test('Checkboxes test', async ({ page }) => {

        const internetPage = new InternetPage(page);
        await internetPage.openCheckboxPage(); 
        await internetPage.selectCheckboxes();
        await internetPage.verifyCheckboxes();
    })

    test('Dropdown test', async ({ page }) => {
         const internetPage = new InternetPage(page);
            await internetPage.openDropDownPage();
            await internetPage.selectDropDownOption();
            await internetPage.verifyDropDownOption();

    })

test('Drag and Drop test', async ({ page }) => {
    const internetPage = new InternetPage(page);
    await internetPage.openDragAndDropPage();
    await internetPage.performDragAndDrop();
    await internetPage.verifyDragAndDrop();

})

test('File upload test', async ({ page }) => {
    const internetPage = new InternetPage(page);
    await internetPage.openFileUploadPage();
    await internetPage.uploadFile();
    await internetPage.verifyFileUpload();
})

test('Horizontal slider test', async ({ page }) => {
    const internetPage = new InternetPage(page);
    await internetPage.openHorizontalSliderPage();
    await internetPage.moveHorizontalSlider();
    await internetPage.verifyHorizontalSlider();

})

});