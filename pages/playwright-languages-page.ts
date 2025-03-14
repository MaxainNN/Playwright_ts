import { Page } from '@playwright/test';
import { Title } from '../page-factory/title';
import { capitalizeFirstLetter } from '../utils/generic';
import { BasePage } from './base-page';

/**
 * PlaywrightLanguagesPage represents a specific page in the application that lists programming languages.
 * It extends the BasePage class to inherit common page functionality and adds language-specific methods.
 */
export class PlaywrightLanguagesPage extends BasePage {
    // A private instance of the Title component representing the language title on the page.
    private readonly languageTitle: Title;

    constructor(public page: Page) {
        super(page);

        // Initialize the Title component for the language title.
        // The locator uses a dynamic placeholder `#{language}` to match the language name.
        this.languageTitle = new Title({ page, locator: 'h2#{language}', name: 'Language title' });
    }

    /**
     * Verifies that a specific programming language is present on the page.
     * @param language - The name of the programming language to check (e.g., "javascript", "python").
     * @returns A Promise that resolves when the language is verified to be present.
     */
    async languagePresent(language: string): Promise<void> {
        await this.languageTitle.shouldBeVisible({ language });
        await this.languageTitle.shouldHaveText(capitalizeFirstLetter(language), { language });
    }
}