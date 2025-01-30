import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicProductComponent } from './electronic-product.component';

describe('ElectronicProductComponent', () => {
  let component: ElectronicProductComponent;
  let fixture: ComponentFixture<ElectronicProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
