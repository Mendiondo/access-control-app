import { AccessControlAppPage } from './app.po';

describe('access-control-app App', () => {
  let page: AccessControlAppPage;

  beforeEach(() => {
    page = new AccessControlAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
