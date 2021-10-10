import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCertificationsComponent } from './active-certifications.component';

describe('ActiveCertificationsComponent', () => {
  let component: ActiveCertificationsComponent;
  let fixture: ComponentFixture<ActiveCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
