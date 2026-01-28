import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';

// Definiujemy typy dla naszych fixture
type MyFixtures = {
  landingPage: LandingPage;
};

// Rozszerzamy bazowy test o nasze typy
export const test = base.extend<MyFixtures>({
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.open();
    await use(landingPage);
  },
});

export { expect } from '@playwright/test';