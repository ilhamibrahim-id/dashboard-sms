import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-filter-press1',
  templateUrl: './filter-press1.component.html',
  styleUrls: ['./filter-press1.component.css']
})
export class FilterPress1Component implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  press1: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  press1obj: object = {};
  press1arr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Filter Press x 2';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
    window.scrollTo(0, 0);
  }
  show() {
    this.showtable = !this.showtable;
  }
  bukapdf() {
    window.open("assets/pdf/SM OCII-2.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.press1arr.length; i++) {
      if (this.press1arr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.press1arr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.press1arr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.press1 = this.service.getPress1().subscribe(data => {
      this.press1obj = data;
      Object.values(this.press1obj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.press1arr.splice(this.press1arr.lenght, 0, array[i]);
        }

        this.spinner.hide();
        this.resolved = true;
      })


    }
    );
  });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

}
