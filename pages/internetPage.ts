import { Page, expect } from "@playwright/test";
import { BasePage } from "./basepage";
import path from "node:path";


export class InternetPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Define the all the Locators
    checkbox = this.page.locator("input[type='checkbox']");
    dropdown = this.page.locator("#dropdown");
    dragsource = this.page.locator("#column-a");
    dragtarget = this.page.locator("#column-b");
    fileuploadinput = this.page.locator("#file-upload");
    fileuploadbutton = this.page.locator("#file-submit");
    fileuploadsuccessmessage = this.page.locator("#uploaded-files");
    horizontalslider = this.page.locator("input[type='range']");

    // Checkbox Methods
    async openCheckboxPage() {
        await this.navigate('/checkboxes');
    }

    async selectCheckboxes() {
        if (await this.checkbox.nth(0).isChecked() === false) {
            await this.checkbox.nth(0).check();
        }
        if (await this.checkbox.nth(1).isChecked() === true) {
            await this.checkbox.nth(1).uncheck();
        }
    }

    async verifyCheckboxes() {
        await expect(this.checkbox.nth(0)).toBeChecked();
        await expect(this.checkbox.nth(1)).not.toBeChecked();
    }

    // Dropdown Methods
    async openDropDownPage() {
        await this.navigate('/dropdown');
    }

    async selectDropDownOption() {
        await this.dropdown.selectOption('Option 2');
    }

    async verifyDropDownOption() {
        await expect(this.dropdown).toHaveValue('2');
    }

    // Drag and Drop Methods
    async openDragAndDropPage() {
        await this.navigate('/drag_and_drop');
    }

    async performDragAndDrop() {
        await this.dragsource.dragTo(this.dragtarget);
    }

    async verifyDragAndDrop() {
        await expect(this.dragsource).toHaveText('B');
        await expect(this.dragtarget).toHaveText('A');
    }

    // File Upload Methods
    async openFileUploadPage() {
        await this.navigate('/upload');
    }

    async uploadFile() {
        const filePath = path.resolve(__dirname, '../testdata/Gapstars.png');
        await this.fileuploadinput.setInputFiles(filePath);
        await this.fileuploadbutton.click();
    }

    async verifyFileUpload() {
        await expect(this.fileuploadsuccessmessage).toHaveText('Gapstars.png');
    }

    // Horizontal Slider Methods
    async openHorizontalSliderPage() {
        await this.navigate('/horizontal_slider');
    }

    async moveHorizontalSlider() {
        await this.horizontalslider.focus();
        await this.page.keyboard.press('ArrowRight');
        await this.page.keyboard.press('ArrowRight');
        await this.page.keyboard.press('ArrowRight');
        await this.page.keyboard.press('ArrowRight');
    }

    async verifyHorizontalSlider() {
        const value = await this.horizontalslider.inputValue();
        expect(value).toBe('2');
    }

}