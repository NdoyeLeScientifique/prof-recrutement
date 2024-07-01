import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOffreComponent } from './find-offre.component';

describe('FindOffreComponent', () => {
  let component: FindOffreComponent;
  let fixture: ComponentFixture<FindOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
