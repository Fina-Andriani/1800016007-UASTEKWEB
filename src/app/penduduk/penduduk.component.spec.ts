import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendudukComponent } from './penduduk.component';

describe('PendudukComponent', () => {
  let component: PendudukComponent;
  let fixture: ComponentFixture<PendudukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendudukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendudukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
