import { test, expect } from '@playwright/test';

test('example test with allure metadata', async ({ page }) => {
    await test.step('Navigate to example.com', async () => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test.info().annotations.push({ type: 'issue', description: 'https://jira.example.com/issue/123' });
    test.info().annotations.push({ type: 'feature', description: 'Login functionality' });
});