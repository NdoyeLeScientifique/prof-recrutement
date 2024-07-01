import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComplementaireComponent } from './profile-complementaire.component';

describe('ProfileComplementaireComponent', () => {
  let component: ProfileComplementaireComponent;
  let fixture: ComponentFixture<ProfileComplementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComplementaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileComplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
