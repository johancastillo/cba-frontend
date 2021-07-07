import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesSectionComponent } from './specialties-section.component';

describe('SpecialtiesSectionComponent', () => {
  let component: SpecialtiesSectionComponent;
  let fixture: ComponentFixture<SpecialtiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
