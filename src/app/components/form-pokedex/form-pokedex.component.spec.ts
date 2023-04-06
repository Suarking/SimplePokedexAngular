import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPokedexComponent } from './form-pokedex.component';

describe('FormPokedexComponent', () => {
  let component: FormPokedexComponent;
  let fixture: ComponentFixture<FormPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
