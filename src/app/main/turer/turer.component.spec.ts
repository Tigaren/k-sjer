import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurerComponent } from './turer.component';

describe('TurerComponent', () => {
  let component: TurerComponent;
  let fixture: ComponentFixture<TurerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
