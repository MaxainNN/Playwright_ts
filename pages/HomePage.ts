import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    private searchInputSelector = 'input[name="q"]';
    private searchButtonSelector = 'button[type="submit"]';
    private articleLinkSelector = 'article a.post__title_link';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://habr.com/');
    }

    async searchForTopic(topic: string) {
        await this.page.fill(this.searchInputSelector, topic);
        await this.page.click(this.searchButtonSelector);
    }

    async clickOnFirstArticle() {
        await this.page.click(this.articleLinkSelector);
    }
}