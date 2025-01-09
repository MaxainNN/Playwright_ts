import { Page } from '@playwright/test';

export class SearchPage {
    private page: Page;
    private searchResultSelector = '.tm-articles-list__item';

    constructor(page: Page) {
        this.page = page;
    }

    async getSearchResultsCount(): Promise<number> {
        return await this.page.locator(this.searchResultSelector).count();
    }

    async getFirstSearchResultText(): Promise<string> {
        return await this.page.locator(`${this.searchResultSelector} h2`).first().innerText();
    }
}