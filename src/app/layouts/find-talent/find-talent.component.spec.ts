import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTalentComponent } from './find-talent.component';

describe('FindTalentComponent', () => {
  let component: FindTalentComponent;
  let fixture: ComponentFixture<FindTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
