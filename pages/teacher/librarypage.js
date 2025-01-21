class LibraryPage {
    constructor(page) {
        this.page=page;
        this.searchBar=page.getByTestId('pathway-library-page-search-bar')
        this.activityThumbnail=page.getByTestId('activity-card-thumbnail')


    }

    async searchTxt(txt){
        await this.searchBar.click()
        await this.searchBar.fill(txt)
        await this.searchBar.press('Enter')
    }

    async clickActivity(){
        await this.activityThumbnail.click()
    }
}
module.exports = LibraryPage;
