import { AppComponent } from 'src/app/app.component';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { VERSION } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

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
  public lubisub: boolean = false;
  currentDate = new Date();
  public sub4: boolean = false;
  constructor(public router: Router,@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
  }
  lubiClick(){
    this.lubisub = !this.lubisub;
  }
  ameventclick(){
    this.resolved = !this.resolved;
  }
  refreshPage(){
    window.location.reload();
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
