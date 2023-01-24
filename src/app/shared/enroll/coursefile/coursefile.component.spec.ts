import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { CoursefileComponent } from './coursefile.component';

describe('CoursefileComponent', () => {
  let component: CoursefileComponent;
  let fixture: ComponentFixture<CoursefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursefileComponent],
      providers: [HttpClient,
        HttpHandler, { provide: ToastrService, useValue: ToastrService }]
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
