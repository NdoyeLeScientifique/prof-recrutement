import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliserComponent } from './finaliser.component';

describe('FinaliserComponent', () => {
  let component: FinaliserComponent;
  let fixture: ComponentFixture<FinaliserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinaliserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinaliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
