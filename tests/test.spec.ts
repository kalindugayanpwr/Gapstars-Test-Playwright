import test, { Page, expect } from "@playwright/test";
import { InternetPage } from "../pages/internetPage";

test.describe('Test Suit', () => {

    test('Verify checkbox functionality', async ({ page }) => {
        const internetPage = new InternetPage(page);
        await internetPage.openCheckboxPage();
        await internetPage.selectCheckboxes();
        await internetPage.verifyCheckboxes();
    })

    test('Verify dropdown selection functionality', async ({ page }) => {
        const internetPage = new InternetPage(page);
        await internetPage.openDropDownPage();
        await internetPage.selectDropDownOption();
        await internetPage.verifyDropDownOption();
    })

    test('Verify drag and drop functionality', async ({ page }) => {
        const internetPage = new InternetPage(page);
        await internetPage.openDragAndDropPage();
        await internetPage.performDragAndDrop();
        await internetPage.verifyDragAndDrop();
    })

    test('Verify file upload functionality', async ({ page }) => {
        const internetPage = new InternetPage(page);
        await internetPage.openFileUploadPage();
        await internetPage.uploadFile();
        await internetPage.verifyFileUpload();
    })

    test('Verify horizontal slider functionality', async ({ page }) => {
        const internetPage = new InternetPage(page);
        await internetPage.openHorizontalSliderPage();
        await internetPage.moveHorizontalSlider();
        await internetPage.verifyHorizontalSlider();
    })

});