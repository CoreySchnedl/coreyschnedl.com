import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSkillsetsComponent } from './current-skillsets.component';

describe('CurrentSkillsetsComponent', () => {
  let component: CurrentSkillsetsComponent;
  let fixture: ComponentFixture<CurrentSkillsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentSkillsetsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSkillsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
