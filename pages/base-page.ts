import test, { Page } from '@playwright/test';
import { Navbar } from '../components/navigation/navbar';

/**
 * Base class for all pages.
 * Contain common methods and components.
 * */
export class BasePage {
    // Instance of Navbar component
    readonly navbar: Navbar;

    /**
     * Constructor of BasePage class
     * @param page - Экземпляр страницы (Page) из Playwright, с которым будет работать класс.
     */
    constructor(public page: Page) {
        this.navbar = new Navbar(page);
    }

    /**
     * Method to navigate to the specified URL.
     * @param url - URL to navigate to.
     * @returns Promise<void>, cause async method.
     */
    async visit(url: string): Promise<void> {
        await test.step(`Opening the url "${url}"`, async () => {
            await this.page.goto(url, { waitUntil: 'networkidle' });
        });
    }

    /**
     * Method to reload the current page.
     * @returns Promise<void>, cause async method.
     */
    async reload(): Promise<void> {
        const currentUrl = this.page.url();

        await test.step(`Reloading page with url "${currentUrl}"`, async () => {
            await this.page.reload({ waitUntil: 'domcontentloaded' });
        });
    }
}