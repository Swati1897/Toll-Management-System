import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollListComponent } from './toll-list.component';

describe('TollListComponent', () => {
  let component: TollListComponent;
  let fixture: ComponentFixture<TollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TollListComponent]
    });
    fixture = TestBed.createComponent(TollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
