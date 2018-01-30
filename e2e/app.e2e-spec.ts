import { WioSmsPage } from './app.po';

describe('wio-sms App', function() {
  let page: WioSmsPage;

  beforeEach(() => {
    page = new WioSmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
