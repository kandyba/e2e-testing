class HomePage {
  constructor() {
    this.ghLink = $('.github-button');
    this.ghLinkIcon = this.ghLink.$('img[src="img/GitHub-Mark-Light-32px.png"]');
    this.logo = $('.protractor-logo');
  }

  async isGitHubLinkDisplayed() {
    return await this.ghLink.isDisplayed();
  }

  async getGitHubLinkText() {
    return await this.ghLink.getText();
  }

  async isGitHubIconDisplayed() {
    return await this.ghLinkIcon.isDisplayed();
  }

  async clickGitHubLink() {
    await this.ghLink.click();

    await browser.waitForAngularEnabled(false);
  }

  async isLogoDisplayed() {
    return await this.logo.isDisplayed();
  }
}

module.exports = HomePage;
