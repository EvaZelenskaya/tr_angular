import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {animate, style, transition, trigger, state} from "@angular/animations";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})


export class BoardComponent implements OnInit {
  lists: ListComponent[] = [];

  constructor() {

  }

  title = 'NewTreLOL';
  mode ='indeterminate';


  loading: boolean = true;
  state: string = 'initial';

  expand() {
    this.loading = false;
    this.state =  'expanded';
  }

  ngOnInit(): void {

    this.expand();

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }

  addList() {
  var newList = new ListComponent();
    this.lists.push(newList);
  }

 // функция где this  ссылается на тот самый объект :)
  removeList = (index: number): void => {
      this.lists.splice(index, 1);
  }

}
