import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeareaComponent } from './pokearea.component';

describe('PokeareaComponent', () => {
  let component: PokeareaComponent;
  let fixture: ComponentFixture<PokeareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
