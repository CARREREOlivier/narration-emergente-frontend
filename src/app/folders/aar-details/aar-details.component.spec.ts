import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AarDetailsComponent } from './aar-details.component';

describe('AarDetailsComponent', () => {
  let component: AarDetailsComponent;
  let fixture: ComponentFixture<AarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AarDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
