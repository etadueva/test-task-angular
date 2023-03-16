import { Component } from "@angular/core";

import * as data from 'src/assets/data/data.json';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})

export class PopularMoviesComponent {
  films: any = (data as any).default;

  details = false
}
