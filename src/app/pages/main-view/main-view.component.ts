import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board:Board = new Board('Test Board',[
    new Column('Ideas',[
      'Some random idesa',
      'this is another random areas',
      'build an awesom application'
    ]),
    new Column('Research', [
      'lorem ipsom',
      'foo',
      'This is in the "Research" colmn'
    ]),
    new Column('Todo', [
      'get to work',
      'pickup groceries',
      'go home',
      'fail asleep'
    ]),
    new Column('Done',[
      'get up',
      'Brush teeth',
      'take a shower',
      'check e-mail',
      'walk dog'
    ])
  ]);
   
  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
