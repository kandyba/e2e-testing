const HomePage = require('../pages/home.page');

describe('Protractor Home page.', () => {
  const homePage = new HomePage();

  beforeAll(async () => await browser.get('/'));

  describe('GitHub Link', () => {
    afterAll(async () => {
      await browser.get(browser.baseUrl);
      await browser.waitForAngularEnabled(true);
    });

    it('Should have View on GitHub link.', async() => {
      expect(await homePage.isGitHubLinkDisplayed()).toBeTruthy('GitHub button not found');
      expect(await homePage.getGitHubLinkText()).toBe('View on GitHub', 'Incorrect text of the GitHub link');
      expect(await homePage.isGitHubIconDisplayed()).toBeTruthy();
    });

    it('Should redirect to GitHub repo', async () => {
      await homePage.clickGitHubLink();

      expect(await browser.getCurrentUrl()).toBe('https://github.com/angular/protractor', 'Is not redirected to Protractor repo');
    })
  });

  it('Should have Protractor Logo.', async() => {
    expect(await homePage.isLogoDisplayed()).toBe(true, 'Logo not found');
  });
});
