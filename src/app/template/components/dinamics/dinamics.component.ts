import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  person: Person = {
    name: 'Alex',
    favorites: [
      { id: 1, name: 'Carmaggeddon' },
      { id: 2, name: 'Monkey Island' },
    ],
  };

  save() {
    console.log('form saved');
  }
}
