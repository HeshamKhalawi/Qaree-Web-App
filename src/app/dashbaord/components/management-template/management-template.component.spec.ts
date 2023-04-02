import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTemplateComponent } from './management-template.component';

describe('ManagementTemplateComponent', () => {
  let component: ManagementTemplateComponent;
  let fixture: ComponentFixture<ManagementTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
