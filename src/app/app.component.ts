import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    new Post(
      'Mon premier post',
      'Pour construire une application Angular, il faut en amont être un développeur Web :)'
    ),
    new Post('Mon deuxième post', "L'islam est un mode de vie, et pas seulement des adorations"),
    new Post(
      'Encore un post',
      "C'est vrai qu'on se confronte à plusieurs difficultés dans notre vie, toutefois, ce n'est que comme ça qu'on devient plus dure, et du coup plus à l'aise."
    )
  ];
}
