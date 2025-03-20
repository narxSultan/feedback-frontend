import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedformComponent } from './feedform.component';

describe('FeedformComponent', () => {
  let component: FeedformComponent;
  let fixture: ComponentFixture<FeedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
