import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit{
src: any;
ngOnInit(): void {
}

getpdf(){
  this.src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
}
getpdfa(){
  this.src = 'https://media.neliti.com/media/publications/249244-none-837c3dfb.pdf';
}
}
