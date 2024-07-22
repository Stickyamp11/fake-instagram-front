import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionProfileComponent } from './suggestion-profile.component';

describe('SuggestionProfileComponent', () => {
  let component: SuggestionProfileComponent;
  let fixture: ComponentFixture<SuggestionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
