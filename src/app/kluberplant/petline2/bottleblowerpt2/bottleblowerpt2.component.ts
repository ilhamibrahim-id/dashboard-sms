import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-bottleblowerpt2',
  templateUrl: './bottleblowerpt2.component.html',
  styleUrls: ['./bottleblowerpt2.component.css']
})
export class Bottleblowerpt2Component implements OnInit {


  public resolved: boolean = false;
  public showtable: boolean = false;
  bottle: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  bottleobj: object = {};
  bottlearr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Husky Hypet 500 bottleion Molder';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
    window.scrollTo(0, 0);
  }
  show() {
    this.showtable = !this.showtable;
  }
  bukapdf() {
    window.open("assets/pdf/Sidel Botle Blower.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.bottlearr.length; i++) {
      if (this.bottlearr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.bottlearr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.bottlearr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.bottle = this.service.getBottleBlowerPt2().subscribe(data => {
      this.bottleobj = data;
      Object.values(this.bottleobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.bottlearr.splice(this.bottlearr.lenght, 0, array[i]);
        }

      })


    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      if(this.bottlearr.length > 0){
        // console.log(this.greaselist);

        this.spinner.hide();
        this.resolved = true;
      } else {
        this.deskripsi = 'Reconnect To Server';
        this.bottle.unsubscribe();
        this.bottle.unsubscribe();
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
