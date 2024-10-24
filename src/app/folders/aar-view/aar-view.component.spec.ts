import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AarViewComponent } from './aar-view.component';

describe('AarViewComponent', () => {
  let component: AarViewComponent;
  let fixture: ComponentFixture<AarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AarViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
