import { test, expect } from '../fixtures/baseTest'

// TEST 1
test('Verify articles section on landing page', async ({ landingPage }) => {
  
  await test.step('Navigate to Articles section', async () => {
    await landingPage.clickArticles();
  });

  await test.step('Verify that Articles header is displayed', async () => {
    await expect(landingPage.articlesHeader).toBeVisible();
  });
}); // <--- Tutaj zamykamy pierwszy test

// TEST 2
test('Verify 2', async ({ landingPage }) => {
  
  await test.step('ffff', async () => {
    await landingPage.clickArticles();
  });

  await test.step('kkkk', async () => {
    await expect(landingPage.articlesHeader).toBeVisible();
  });
}); // <--- Tutaj zamykamy drugi test