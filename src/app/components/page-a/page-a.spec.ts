import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageA } from './page-a';

describe('PageA', () => {
  let component: PageA;
  let fixture: ComponentFixture<PageA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageA],
    }).compileComponents();

    fixture = TestBed.createComponent(PageA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
