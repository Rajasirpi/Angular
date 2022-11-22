import { Injectable } from '@angular/core';
import { datatypes } from 'src/app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  /**
  * Function to datalist with list of data to be displayed
  */
  datalist(){
    return [
      { 'id': 1, 'name':'employee-A', 'role':'analyst'},
      { 'id': 2, 'name':'employee-B', 'role':'developer'},
      { 'id': 3, 'name':'employee-C', 'role':'tester'}
    ];
  }
}
