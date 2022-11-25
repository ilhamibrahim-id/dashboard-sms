import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprays',
  templateUrl: './sprays.component.html',
  styleUrls: ['./sprays.component.css']
})
export class SpraysComponent implements OnInit {

  constructor() { }
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit(): void {
  }

}
