import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelajeComponent } from './pelaje.component';

describe('PelajeComponent', () => {
  let component: PelajeComponent;
  let fixture: ComponentFixture<PelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
