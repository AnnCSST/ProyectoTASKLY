import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileDetailsComponent } from './view-profile-details.component';

describe('ViewProfileDetailsComponent', () => {
  let component: ViewProfileDetailsComponent;
  let fixture: ComponentFixture<ViewProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProfileDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
