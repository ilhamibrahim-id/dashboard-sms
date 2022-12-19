import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-sheetfeederpt2',
  templateUrl: './sheetfeederpt2.component.html',
  styleUrls: ['./sheetfeederpt2.component.css']
})
export class Sheetfeederpt2Component implements OnInit {


  public resolved: boolean = false;
  public showtable: boolean = false;
  sheetfeeder: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  sheetfeederobj: object = {};
  sheetfeederarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Shikoku sheetfeeder KP36';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
  }
  show() {
    this.showtable = !this.showtable;
  }
  bukapdf() {
    window.open("assets/pdf/Sheet Feeder Manual.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.sheetfeederarr.length; i++) {
      if (this.sheetfeederarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.sheetfeederarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.sheetfeederarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.sheetfeeder = this.service.getSheetFeederPt2().subscribe(data => {
      this.sheetfeederobj = data;
      Object.values(this.sheetfeederobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.sheetfeederarr.splice(this.sheetfeederarr.lenght, 0, array[i]);
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
