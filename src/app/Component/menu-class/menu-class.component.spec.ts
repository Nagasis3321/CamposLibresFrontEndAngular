import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClassComponent } from './menu-class.component';

describe('MenuClassComponent', () => {
  let component: MenuClassComponent;
  let fixture: ComponentFixture<MenuClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
