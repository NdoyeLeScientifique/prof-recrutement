import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCandidatureComponent } from './ma-candidature.component';

describe('MaCandidatureComponent', () => {
  let component: MaCandidatureComponent;
  let fixture: ComponentFixture<MaCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaCandidatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
