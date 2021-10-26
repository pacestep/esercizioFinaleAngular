import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPokemonComponent } from './rejected-pokemon.component';

describe('RejectedPokemonComponent', () => {
  let component: RejectedPokemonComponent;
  let fixture: ComponentFixture<RejectedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
