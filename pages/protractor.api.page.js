class protractorApiPage {
  constructor(){
    this.mainTitle = $('.mainTitle');
    this.searchFeild = $('.searchFeild');
    this.sidebar = $('.sidebar');
  }

  async isMainTitle() {
    return await this.mainTitle.isDisplayed()
  }

  async isSearchFeild() {
    return await this.searchFeild.isDisplayed()
  }

  async isSidebar() {
    return await this.sidebar.isDisplayed()
  }

}
