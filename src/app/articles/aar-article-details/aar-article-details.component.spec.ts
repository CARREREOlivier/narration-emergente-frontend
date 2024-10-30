import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AarArticleDetailsComponent } from './aar-article-details.component';

describe('AarArticleDetailsComponent', () => {
  let component: AarArticleDetailsComponent;
  let fixture: ComponentFixture<AarArticleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AarArticleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AarArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
