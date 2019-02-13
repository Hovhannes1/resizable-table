import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HeaderComponent} from '../header/header.component';
import {TableComponent} from '../table/table.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  displayNameControl = new FormControl('', [
    Validators.required,
  ]);
  pluralNameControl = new FormControl('', [
    Validators.required,
  ]);
  systemNameControl = new FormControl('', [Validators.required, ]);

  @ViewChild('table')
    public table: TableComponent;
  public cursorPositionX: number;
  public cursorPositionY: number;

  matcher = new MyErrorStateMatcher();

  icons: any[];
  colors: any[];

  public hideHeader = false;
  public lastScroleValue = 0;
  public cordinateY: any;
  public headerShowHide(event: Event) {
    const newScroleValue: Element = <Element>event.target;
    this.hideHeader = this.lastScroleValue < newScroleValue.scrollTop && newScroleValue.scrollTop > 60;
    const cordinateOld = this.lastScroleValue;
    this.lastScroleValue = newScroleValue.scrollTop;
    const cordinateNew = newScroleValue.scrollTop;
    this.cordinateY = (cordinateNew - cordinateOld) > 40;
  }


  public magnet(event) {
    this.cursorPositionX = event.screenX;
    this.cursorPositionY = event.screenY;
  }
  public setDotActive(i) {
    for (let j = 0; j < this.icons.length; j++) {
      this.colors[j].state = i === this.colors[j].id;
    }
  }

  public setIconActive(i) {
    for (let j = 0; j < this.icons.length; j++) {
      this.icons[j].state = i === this.icons[j].id;
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.icons  = [
      {id: 0, name: 'icon-block', state: false},
      {id: 1, name: 'icon-document', state: false},
      {id: 2, name: 'icon-net', state: false},
      {id: 3, name: 'icon-document-checked', state: false},
      {id: 4, name: 'icon-inbox-check', state: false},
      {id: 5, name: 'icon-checkmark-outline', state: false},
      {id: 6, name: 'icon-clipboard-checked', state: false},
      {id: 7, name: 'icon-equalizer', state: false},
      {id: 8, name: 'icon-vignette', state: false},
      {id: 9, name: 'icon-infinity', state: false},
      {id: 10, name: 'icon-sync', state: false},
      {id: 11, name: 'icon-document-star', state: false},
      {id: 12, name: 'icon-info', state: false},
      {id: 13, name: 'icon-enter', state: false},
      {id: 14, name: 'icon-hipster', state: false},
      {id: 15, name: 'icon-forward', state: false}
    ];
    this.colors = [
      {id: 0, name: 'lightgrey', state: false},
      {id: 1, name: 'coral', state: false},
      {id: 2, name: 'lightblue', state: false},
      {id: 3, name: 'green', state: false},
      {id: 4, name: 'yellow', state: false},
      {id: 5, name: 'darkblue', state: false},
      {id: 6, name: 'orange', state: false},
      {id: 7, name: 'darkred', state: false},
      {id: 8, name: 'blue', state: false},
      {id: 9, name: 'brown', state: false}
    ];
  }
}

