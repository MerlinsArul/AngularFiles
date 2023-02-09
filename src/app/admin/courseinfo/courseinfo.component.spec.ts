import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CourseinfoComponent } from './courseinfo.component';

describe('CourseinfoComponent', () => {
  let component: CourseinfoComponent;
  let fixture: ComponentFixture<CourseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseinfoComponent],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        { provide: ToastrService, useValue: ToastrService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
