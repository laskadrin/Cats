import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsSearcherComponent } from './cats-searcher.component';

describe('CatsSearcherComponent', () => {
  let component: CatsSearcherComponent;
  let fixture: ComponentFixture<CatsSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
