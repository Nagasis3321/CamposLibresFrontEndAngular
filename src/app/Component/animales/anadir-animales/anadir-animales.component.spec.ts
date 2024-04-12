import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAnimalesComponent } from './anadir-animales.component';

describe('AnadirAnimalesComponent', () => {
  let component: AnadirAnimalesComponent;
  let fixture: ComponentFixture<AnadirAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirAnimalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
