import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmedioComponent } from './enmedio.component';

describe('EnmedioComponent', () => {
  let component: EnmedioComponent;
  let fixture: ComponentFixture<EnmedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnmedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnmedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
