import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { EnrollComponent } from './enroll.component';

describe('EnrollComponent', () => {
  let component: EnrollComponent;
  let fixture: ComponentFixture<EnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollComponent],
      providers:[HttpClient,
      HttpHandler,{provide:ToastrService, useValue:ToastrService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
