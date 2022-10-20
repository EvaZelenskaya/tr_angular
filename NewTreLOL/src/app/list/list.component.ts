import {Component, Input, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {AbstractControl, FormArray,  FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  @Input() callback: any ;
  @Input() indexList: number = 0 ;

  myForm!: FormGroup ;
   constructor() {}
  drop(event: CdkDragDrop<Array<AbstractControl<any>>, any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  ngOnInit(): void {

    this.myForm = new FormGroup<any>({

      items: new FormArray( [new FormControl('new value')]),
    })
   }





  get questionArray(){
    return this.myForm.get('items') as FormArray;

  }

removeItemControl(index: number){
  (this.myForm.get('items') as FormArray).removeAt(index);
}

  removeIList(){
    this.callback(this.indexList);
  }



  onSubmit(ref: HTMLInputElement) {
    this.questionArray.push(new FormControl(ref.value));
    ref.value = ''

   }

}
