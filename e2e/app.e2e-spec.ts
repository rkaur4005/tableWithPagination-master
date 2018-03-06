import { MtsMaterialPage } from './app.po';

describe('mts-material App', () => {
  let page: MtsMaterialPage;

  beforeEach(() => {
    page = new MtsMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
