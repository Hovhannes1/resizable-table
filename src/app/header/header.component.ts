import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {TaskComponent} from '../body/task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showEntity = true;
  public showWork = false;
  @Input() public hideHead: boolean;

  public showEntities() {
    this.showEntity = true;
    this.showWork = false;
  }

  public showWorkflow() {
    this.showWork = true;
    this.showEntity = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
