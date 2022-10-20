import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ opacity: 1

      })),
      state('expanded', style({  opacity: 0 })),
      transition('initial <=> expanded', animate('3s')),
    ]),
  ],
})


export class AppComponent implements OnInit{
  title = 'NewTreLOL';
  mode ='indeterminate';


  loading: boolean = true
  state: string = 'initial'

  expand() {
    //debugger
    this.loading = false
    this.state = 'expanded'
  }
  ngOnInit() {
   // this.loading = !this.loading;
    this.expand();
  }


}
