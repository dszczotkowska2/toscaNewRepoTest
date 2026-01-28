import { test, expect } from '../fixtures/baseTest'

test('Verify articles section on landing page', async ({ landingPage }) => {
  
  // Krok 1: Akcja
  await test.step('Navigate to Articles section', async () => {
    await landingPage.clickArticles();
  });

  // Krok 2: Weryfikacja (zawsze warto dodać krok na sprawdzenie)
  await test.step('Verify that Articles header is displayed', async () => {
    // Zakładamy, że masz taki lokator w landingPage
    await expect(landingPage.articlesHeader).toBeVisible();
  });

  test('Verify 2', async ({ landingPage }) => {
  
  // Krok 1: Akcja
  await test.step('ffff', async () => {
    await landingPage.clickArticles();
  });

  // Krok 2: Weryfikacja (zawsze warto dodać krok na sprawdzenie)
  await test.step('kkkk', async () => {
    // Zakładamy, że masz taki lokator w landingPage
    await expect(landingPage.articlesHeader).toBeVisible();
  });

});