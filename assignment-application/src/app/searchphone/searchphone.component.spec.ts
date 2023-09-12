import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchphoneComponent } from './searchphone.component';

describe('SearchphoneComponent', () => {
  let component: SearchphoneComponent;
  let fixture: ComponentFixture<SearchphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchphoneComponent]
    });
    fixture = TestBed.createComponent(SearchphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
