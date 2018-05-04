import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiveurComponent } from './suiveur.component';

describe('SuiveurComponent', () => {
  let component: SuiveurComponent;
  let fixture: ComponentFixture<SuiveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
