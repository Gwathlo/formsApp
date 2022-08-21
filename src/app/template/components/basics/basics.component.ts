import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  productValid(): boolean {
    return (
      this.myForm?.controls.product?.invalid &&
      this.myForm?.controls.product?.touched
    );
  }

  priceValid(): boolean {
    return (
      this.myForm?.controls.price?.value < 0 &&
      this.myForm?.controls.price?.touched
    );
  }

  save() {
    console.log(this.myForm.value);
  }
}
