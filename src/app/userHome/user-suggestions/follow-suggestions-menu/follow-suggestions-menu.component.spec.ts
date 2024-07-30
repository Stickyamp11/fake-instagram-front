import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowSuggestionsMenuComponent } from './follow-suggestions-menu.component';

describe('FollowSuggestionsMenuComponent', () => {
  let component: FollowSuggestionsMenuComponent;
  let fixture: ComponentFixture<FollowSuggestionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowSuggestionsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowSuggestionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
