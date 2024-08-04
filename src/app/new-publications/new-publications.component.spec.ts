import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublicationsComponent } from './new-publications.component';

describe('NewPublicationsComponent', () => {
  let component: NewPublicationsComponent;
  let fixture: ComponentFixture<NewPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
