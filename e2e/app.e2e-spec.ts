import { ANGULARProjPage } from './app.po';

describe('angular-proj App', () => {
  let page: ANGULARProjPage;

  beforeEach(() => {
    page = new ANGULARProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
