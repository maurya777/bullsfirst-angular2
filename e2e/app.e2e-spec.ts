import { BullsfirstAngular2Page } from './app.po';

describe('bullsfirst-angular2 App', function() {
  let page: BullsfirstAngular2Page;

  beforeEach(() => {
    page = new BullsfirstAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
