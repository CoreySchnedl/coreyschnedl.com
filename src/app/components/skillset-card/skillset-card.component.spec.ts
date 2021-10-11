import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetCardComponent } from './skillset-card.component';

describe('SkillsetCardComponent', () => {
  let component: SkillsetCardComponent;
  let fixture: ComponentFixture<SkillsetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
