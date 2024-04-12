import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirDuenoComponent } from './anadir-dueno.component';

describe('AnadirDuenoComponent', () => {
  let component: AnadirDuenoComponent;
  let fixture: ComponentFixture<AnadirDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirDuenoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
