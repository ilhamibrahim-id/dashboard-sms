import { AppComponent } from 'src/app/app.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public resolved: boolean = false;
  public sub1: boolean = false;
  public sub2: boolean = false;
  public sub3: boolean = false;
  public sub4: boolean = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
  }
  ameventclick(){
    this.resolved = !this.resolved;
  }
  ammonitoringsub(){
    this.sub1 = !this.sub1;
  }
  pdmmonitoringsub(){
    this.sub2 = !this.sub2;
  }
  gamessub(){
    this.sub3 = !this.sub3;
  }
  big5sub(){
    this.sub4 = !this.sub4;
  }
}
