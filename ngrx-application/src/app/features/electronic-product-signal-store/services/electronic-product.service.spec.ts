import { TestBed } from '@angular/core/testing';

import { ElectronicProductService } from './electronic-product.service';

describe('ElectronicProductService', () => {
  let service: ElectronicProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
