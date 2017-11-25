import { InmobiliariaPage } from './app.po';

describe('inmobiliaria App', function() {
  let page: InmobiliariaPage;

  beforeEach(() => {
    page = new InmobiliariaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
