import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-labellerpt2',
  templateUrl: './labellerpt2.component.html',
  styleUrls: ['./labellerpt2.component.css']
})
export class Labellerpt2Component implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  labeller: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  labellerobj: object = {};
  labellerarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Husky Hypet 500 labellerion Molder';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
    window.scrollTo(0, 0);
  }
  show() {
    this.showtable = !this.showtable;
  }
  bukapdf() {
    window.open("assets/pdf/Labeller.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.labellerarr.length; i++) {
      if (this.labellerarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.labellerarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.labellerarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.labeller = this.service.getLabellerPt2().subscribe(data => {
      this.labellerobj = data;
      Object.values(this.labellerobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.labellerarr.splice(this.labellerarr.lenght, 0, array[i]);
        }

      })


    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      if(this.labellerarr.length > 0){
        // console.log(this.greaselist);

        this.spinner.hide();
        this.resolved = true;
      } else {
        this.deskripsi = 'Reconnect To Server';
        this.labeller.unsubscribe();
        this.labeller.unsubscribe();
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