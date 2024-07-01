import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProfileRecruteurComponent } from './mon-profile-recruteur.component';

describe('MonProfileRecruteurComponent', () => {
  let component: MonProfileRecruteurComponent;
  let fixture: ComponentFixture<MonProfileRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonProfileRecruteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonProfileRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
