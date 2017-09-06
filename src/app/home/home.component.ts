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
  value: string = ''

  constructor(
    public appState: AppState
  ) {}

  ngOnInit() {}

  submitState() {
    console.log('submitState', this.value);
    this.appState.set({ value: this.value });
    this.value = '';
  }
}
