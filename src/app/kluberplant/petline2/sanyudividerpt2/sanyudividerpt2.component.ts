import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-sanyudividerpt2',
  templateUrl: './sanyudividerpt2.component.html',
  styleUrls: ['./sanyudividerpt2.component.css']
})
export class Sanyudividerpt2Component implements OnInit {



  public resolved: boolean = false;
  public showtable: boolean = false;
  sanyu: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  sanyuobj: object = {};
  sanyuarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Husky Hypet 500 sanyuion Molder';
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
    for (let i = 0; i < this.sanyuarr.length; i++) {
      if (this.sanyuarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.sanyuarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.sanyuarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.sanyu = this.service.getSanyuPt2().subscribe(data => {
      this.sanyuobj = data;
      Object.values(this.sanyuobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.sanyuarr.splice(this.sanyuarr.lenght, 0, array[i]);
        }

      })


    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      if(this.sanyuarr.length > 0){
        // console.log(this.greaselist);

        this.spinner.hide();
        this.resolved = true;
      } else {
        this.deskripsi = 'Reconnect To Server';
        this.sanyu.unsubscribe();
        this.ngOnInit();
      }
      if (count = 1){
        clearInterval(a);
      }
    },750);
  });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }


}
