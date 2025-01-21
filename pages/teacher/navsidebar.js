class Navsidebar {
    constructor(page) {
        this.page=page;
        this.libraryLink=page.getByTestId('sidebar-item-library');
    }


    async clickLibrary(){
        await this.libraryLink.click()
    }
}
module.exports = Navsidebar;
