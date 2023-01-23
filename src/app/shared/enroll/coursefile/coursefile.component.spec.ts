import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefileComponent } from './coursefile.component';

describe('CoursefileComponent', () => {
  let component: CoursefileComponent;
  let fixture: ComponentFixture<CoursefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
