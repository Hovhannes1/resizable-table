import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  headers: string[];
  public maximize = false;

  @Input() public distanceY: any;

  public hideTableHead = false;
  public lastScroleValue = 0;
  public positionX = 0;
  public positionY = 0;
  public shaking = false;
  public tableShaking = false;

  public doSmt() {
    if (!this.shaking) {
      this.tableShaking = !this.tableShaking;
    }

  }
  public doSmtTwo() {
    if (!this.tableShaking) {
      this.shaking = !this.shaking;
    }

  }

  public tableHeaderHide(event: Event) {
    const newScroleValue: Element = <Element>event.target;
    this.hideTableHead = this.lastScroleValue < newScroleValue.scrollTop && newScroleValue.scrollTop > 60;
    this.lastScroleValue = newScroleValue.scrollTop;

    this.positionY = newScroleValue.scrollTop;
    this.positionX = newScroleValue.scrollLeft;
  }
  constructor() { }

  ngOnInit() {
    this.headers = ['NAME', 'VALIDATION', 'LAST UPDATED', 'MODE', 'STATE',
      'NAME', 'VALIDATION', 'LAST UPDATED', 'TYPE', 'MODE', 'STATE', 'ORDER'];
  }

}
