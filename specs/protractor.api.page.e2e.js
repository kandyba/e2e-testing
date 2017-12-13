const protractorApiPage = require('../pages/protractor.api.page');

describe('Protractor API page', () => {
  const protractorApiPage = new protractorApiPage();

  beforeAll(async () => await browser.get('/'));

  afterAll(async () => {
    await browser.get(browser.baseUrl);
    await browser.waitForAngularEnabled(true);
  });

  it('Should have correct title.');
  it('Should have search field.');
  it('Should have sidebar.');
});
