import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPendudukComponent } from './detail-penduduk.component';

describe('DetailPendudukComponent', () => {
  let component: DetailPendudukComponent;
  let fixture: ComponentFixture<DetailPendudukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPendudukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPendudukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
