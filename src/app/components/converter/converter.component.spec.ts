import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';
import { ForexService } from '../../services/forex.service';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterComponent ],
      providers: [{provide: ForexService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
