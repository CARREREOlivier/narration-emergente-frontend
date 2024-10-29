import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanFictionViewComponent } from './fan-fiction-view.component';

describe('FanFictionViewComponent', () => {
  let component: FanFictionViewComponent;
  let fixture: ComponentFixture<FanFictionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanFictionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanFictionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
