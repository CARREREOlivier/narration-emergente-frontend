import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsPlayViewComponent } from './lets-play-view.component';

describe('LetsPlayViewComponent', () => {
  let component: LetsPlayViewComponent;
  let fixture: ComponentFixture<LetsPlayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsPlayViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsPlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
