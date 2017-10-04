import { RoutExamplePage } from './app.po';

describe('rout-example App', () => {
  let page: RoutExamplePage;

  beforeEach(() => {
    page = new RoutExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
