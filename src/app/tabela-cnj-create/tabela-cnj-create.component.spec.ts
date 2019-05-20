import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCnjCreateComponent } from './tabela-cnj-create.component';

describe('TabelaCnjCreateComponent', () => {
  let component: TabelaCnjCreateComponent;
  let fixture: ComponentFixture<TabelaCnjCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaCnjCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCnjCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
