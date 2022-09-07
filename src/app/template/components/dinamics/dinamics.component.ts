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

  newGame: string = '';

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  save() {
    console.log('form saved');
  }

  erase(index: number) {
    this.person.favorites.splice(index);
  }
}
