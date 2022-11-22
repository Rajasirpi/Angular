import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { datatypes } from 'src/app/shared/interfaces/interfaces';
import { Static } from 'src/app/shared/utils/static';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss']
})
export class learningsComponent implements OnInit {
 
  constructor( private data:DataService ){}

   // intialized the variables
   firstName:string = Static.firstName;
   color:string =Static.color;
   text:string =Static.text;
   displayName = false ;
   val: string = Static.val; 
   @Output () childToParent = new EventEmitter();
  //  datas : Array<{id: number, name: string, role: string}>= [];
   datas : Array<datatypes> = [];

  ngOnInit() {
    this.datas = this.data.datalist();
  }

  /*
   Function to Change Background color
   */
  changeBg():void{
    if(this.color === Static.color)
      this.color = 'blue';
    else
      this.color =Static.color;
  }
  /*
   Function to display the message on event. Used component interaction here.
   */
  executeEvent():void{
    this.childToParent.emit("Used component ineraction")
  }

}

