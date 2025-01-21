class HomePage {
    constructor(page) {
        this.page=page;
        this.classLink=page.getByTestId('class-tile-lessons-link')
    }

    async clickClassLink(){
        await this.classLink.first().click()
    }
}
module.exports = HomePage;
