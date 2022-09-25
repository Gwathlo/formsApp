import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [['Carmaggeddon'], ['Monkey Island']],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    this.favoritesArr.push(
      this.fb.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }
}
