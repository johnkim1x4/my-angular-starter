import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    public appState: AppState
  ) {}

  ngOnInit() {}
}
