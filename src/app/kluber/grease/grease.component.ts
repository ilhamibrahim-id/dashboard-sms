import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grease',
  templateUrl: './grease.component.html',
  styleUrls: ['./grease.component.css']
})
export class GreaseComponent implements OnInit {

  constructor() { }
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit(): void {
  }

}
