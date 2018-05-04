import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EviteurComponent } from './eviteur.component';

describe('EviteurComponent', () => {
  let component: EviteurComponent;
  let fixture: ComponentFixture<EviteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EviteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EviteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
