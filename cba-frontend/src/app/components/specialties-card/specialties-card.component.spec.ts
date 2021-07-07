import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesCardComponent } from './specialties-card.component';

describe('SpecialtiesCardComponent', () => {
  let component: SpecialtiesCardComponent;
  let fixture: ComponentFixture<SpecialtiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtiesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
