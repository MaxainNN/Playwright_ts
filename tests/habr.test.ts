import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

test.describe('Habr Website Tests', () => {
    let homePage: HomePage;
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchPage = new SearchPage(page);
        await homePage.navigateToHomePage();
    });

    test('Search for a topic and validate search results', async ({ page }) => {
        // Step 1: Search for a specific topic
        const topic = 'TypeScript';
        await homePage.searchForTopic(topic);

        // Step 2: Validate search results
        const resultsCount = await searchPage.getSearchResultsCount();
        expect(resultsCount).toBeGreaterThan(0);

        const firstResultText = await searchPage.getFirstSearchResultText();
        console.log(`First search result: ${firstResultText}`);

        // Step 3: Click on the first search result
        await searchPage.page.locator('.tm-articles-list__item a').first().click();

        // Step 4: Validate the navigation to the article
        const articleTitle = await page.locator('h1').innerText();
        expect(articleTitle).toContain('TypeScript');
    });

    test('Navigate to the first article on the homepage', async ({ page }) => {
        // Step 1: Click on the first article
        await homePage.clickOnFirstArticle();

        // Step 2: Validate the navigation to the article
        const articleTitle = await page.locator('h1').innerText();
        console.log(`Navigated to article: ${articleTitle}`);
        expect(articleTitle).not.toBe('');
    });
});