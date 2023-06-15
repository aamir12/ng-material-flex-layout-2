import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flex1Component } from './flex1.component';

describe('Flex1Component', () => {
  let component: Flex1Component;
  let fixture: ComponentFixture<Flex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flex1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
