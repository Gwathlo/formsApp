import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(1500),
  //   stocks: new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    name: ['RTX 4080ti'],
    price: [1500],
    stocks: [5],
  });

  constructor(private fb: FormBuilder) {}
}
