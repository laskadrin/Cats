import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsSelectorComponent } from './cats-selector.component';

describe('CatsSelectorComponent', () => {
  let component: CatsSelectorComponent;
  let fixture: ComponentFixture<CatsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
