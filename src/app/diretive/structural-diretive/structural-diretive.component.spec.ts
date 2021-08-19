import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDiretiveComponent } from './structural-diretive.component';

describe('StructuralDiretiveComponent', () => {
  let component: StructuralDiretiveComponent;
  let fixture: ComponentFixture<StructuralDiretiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDiretiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDiretiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
