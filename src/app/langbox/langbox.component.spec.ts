import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangboxComponent } from './langbox.component';

describe('LangboxComponent', () => {
  let component: LangboxComponent;
  let fixture: ComponentFixture<LangboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
