import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RProfilesComponent } from './r-profiles.component';

describe('RProfilesComponent', () => {
  let component: RProfilesComponent;
  let fixture: ComponentFixture<RProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
