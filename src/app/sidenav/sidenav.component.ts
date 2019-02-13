import { Component, OnInit } from '@angular/core';
export interface NavList {
  id: number;
  name: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public positionSideNav  = 'Details';
  public sideNav: NavList[] = [
    {id: 0 , name: 'Details'},
    {id: 1, name: 'Properties'},
    {id: 2, name: 'Relations'},
    {id: 3, name: 'Forms'},
    {id: 4, name: 'Workflow'},
    {id: 5, name: 'DATA'}
    ];
  public changePosition(i) {
    for (let j = 0; i < this.sideNav.length; j++) {
      if (i === this.sideNav[j].id) {
        const position = this.sideNav[j].name;
        window.location.assign('#' + position);
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
