import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageB } from './page-b';

describe('PageB', () => {
  let component: PageB;
  let fixture: ComponentFixture<PageB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageB],
    }).compileComponents();

    fixture = TestBed.createComponent(PageB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
