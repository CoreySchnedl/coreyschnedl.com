import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbStreamDemoComponent } from './dynamodb-stream-demo.component';

describe('DynamodbStreamDemoComponent', () => {
  let component: DynamodbStreamDemoComponent;
  let fixture: ComponentFixture<DynamodbStreamDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamodbStreamDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamodbStreamDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
