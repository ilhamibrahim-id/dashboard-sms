import { Component, Input, OnInit,EventEmitter, Injectable, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SidebarComponent } from './layout/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public warna: any = 'home';
  gantiwarna(warna:any){
    this.warna = warna;
  }
  ngOnInit(): void {
  }
}
