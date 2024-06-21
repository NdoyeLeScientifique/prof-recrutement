import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwOublieComponent } from './pw-oublie.component';

describe('PwOublieComponent', () => {
  let component: PwOublieComponent;
  let fixture: ComponentFixture<PwOublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwOublieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
