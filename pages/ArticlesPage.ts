import { Locator, Page } from "@playwright/test";

export class ArticlesPage{
    articleTitle: Locator;

    constructor(readonly page: Page){
        this.page = page;
        this.articleTitle = page.getByRole('link', { name: 'Myth: Testing is only for' })
    }

    public async getTile(){
        return this.articleTitle.allTextContents()
    }

}