import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinersComponent } from './liners.component';

describe('LinersComponent', () => {
  let component: LinersComponent;
  let fixture: ComponentFixture<LinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
