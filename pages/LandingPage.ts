import { Locator, Page } from "@playwright/test";
import { ArticlesPage } from "./ArticlesPage";

export class LandingPage {
    readonly page: Page;
    readonly articlesModule: Locator
    readonly articlesHeader: Locator
    
    constructor(page: Page) {
        this.page = page;
        this.articlesModule = page.getByRole('link', { name: ' Articles Explore and create' });
        this.articlesHeader = page.getByRole('article', { name: ' Articles Explore and create' });
    }

    public async open(){
        await this.page.goto('http://localhost:3000/');
    }

    public async clickArticles(){
        await this.articlesModule.click()
        return new ArticlesPage(this.page)
    }


}