import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailComponent } from './materail.component';

describe('MaterailComponent', () => {
  let component: MaterailComponent;
  let fixture: ComponentFixture<MaterailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
