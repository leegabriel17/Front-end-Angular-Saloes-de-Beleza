import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerLoginComponent } from './fazer-login.component';

describe('FazerLoginComponent', () => {
  let component: FazerLoginComponent;
  let fixture: ComponentFixture<FazerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
