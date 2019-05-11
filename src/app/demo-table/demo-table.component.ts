import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss']
})
export class DemoTableComponent implements OnInit {

  headers: string[];
  public maximize = false;

  @Input() public isFast: any;
  @Input() public mousePositionX: number;
  @Input() public oldPositionX: number;
  @Input() public mousePositionY: number;

  public hideTableHead = false;
  public lastScrollValue = 0;
  public positionX = 0;
  public positionY = 0;

  public shaking = false;
  public tableShaking = false;

  public isResizable = false;
  public isDownResizable = false;

  public horizontalCord = 600;
  public verticalCord = 350;
  public colMinWidth = 150;
  public distance = 30;

  public isResizableCol = [];
  public widthOfCol = [];

  public colIsResizable = false;
  public colTwoIsResizable = false;
  public colThreeIsResizable = false;
  public colCoordinate = 150;
  public colTwoCoordinate = 150;
  public colThreeCoordinate = 150;

  public active = function(element) {
    return element === true;
  };

  public resizeStart() {
    this.isResizable = true;
  }

  public resizeStop() {
    this.isResizable = false;
  }

  public doResizing(e) {
    if (this.isResizable && this.horizontalCord >= 300) {
      this.horizontalCord = this.mousePositionX - 30;
    } if (this.horizontalCord < 300) {this.horizontalCord = 300; }

    if (this.isDownResizable && this.verticalCord >= 300) {
      this.verticalCord = this.verticalCord + e.movementY;
    } if (this.verticalCord < 300) {this.verticalCord = 300; }

    // if (this.colIsResizable && this.colCoordinate >= 150) {
    //   this.colCoordinate = this.mousePositionX - 30;
    // } if (this.colCoordinate < 150) {this.colCoordinate = 150; }
    //
    // if (this.colTwoIsResizable && this.colTwoCoordinate >= 150) {
    //   this.colTwoCoordinate = this.mousePositionX - this.colCoordinate - 30;
    // } if (this.colTwoCoordinate < 150) {this.colTwoCoordinate = 150; }
    //
    // if (this.colThreeIsResizable && this.colThreeCoordinate >= 150) {
    //   this.colThreeCoordinate = this.mousePositionX - this.colCoordinate - this.colTwoCoordinate - 30;
    // } if (this.colThreeCoordinate < 150) {this.colThreeCoordinate = 150; }

    for (let i = 0; i < this.headers.length; i++) {
      if (this.isResizableCol[i] && this.widthOfCol[i] >= this.colMinWidth) {
        for (let j = 0; j < this.headers.length; j++) {
          if (j < i) {
            this.distance += this.widthOfCol[j];
          }
        }
        this.widthOfCol[i] = this.mousePositionX - this.distance;
      }
    }
  }

  public resizeDownStart() {
    this.isDownResizable = true;
  }

  public resizeDownStop() {
    this.isDownResizable = false;
  }
  public colResizeStart() {
    this.isResizableCol[0] = true;
    console.log(this.isResizableCol);
  }
  public colResizeStop() {
    this.isResizableCol[0] = false;
  }

  public colTwoResizeStart() {
    this.isResizableCol[1] = true;
  }
  public colTwoResizeStop() {
    this.isResizableCol[1] = false;
  }

  public colThreeResizeStart() {
    this.isResizableCol[2] = true;
  }
  public colThreeResizeStop() {
    this.isResizableCol[2] = false;
  }

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
    this.hideTableHead = this.lastScrollValue < newScroleValue.scrollTop && newScroleValue.scrollTop > 60;
    this.lastScrollValue = newScroleValue.scrollTop;

    this.positionY = newScroleValue.scrollTop;
    this.positionX = newScroleValue.scrollLeft;
  }
  constructor() { }

  ngOnInit() {
    this.headers = ['VALIDATION', 'LAST UPDATED', 'MODE', 'STATE',
      'NAME', 'VALIDATION', 'LAST UPDATED', 'TYPE', 'MODE', 'STATE', 'ORDER'];

    for (let i = 0; i < this.headers.length; i++) {
      this.isResizableCol[i] = false;
      this.widthOfCol[i] = this.colMinWidth;
    }

  }


}
