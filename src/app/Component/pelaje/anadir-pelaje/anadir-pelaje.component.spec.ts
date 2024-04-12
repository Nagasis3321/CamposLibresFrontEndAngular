import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPelajeComponent } from './anadir-pelaje.component';

describe('AnadirPelajeComponent', () => {
  let component: AnadirPelajeComponent;
  let fixture: ComponentFixture<AnadirPelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirPelajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirPelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
