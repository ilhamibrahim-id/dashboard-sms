import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-palletiserpt2',
  templateUrl: './palletiserpt2.component.html',
  styleUrls: ['./palletiserpt2.component.css']
})
export class Palletiserpt2Component implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  palletiser: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  palletiserobj: object = {};
  palletiserarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Husky Hypet 500 palletiserion Molder';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
    window.scrollTo(0, 0);
  }
  show() {
    this.showtable = !this.showtable;
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.target.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      if(count = 1){
        clearInterval(a);
      }
    },100);
  }
  bukapdf() {
    window.open("assets/pdf/BA_89405655_001700_Innopal Palettierer_EN_01.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.palletiserarr.length; i++) {
      if (this.palletiserarr[i].id == id) {
        this.gambar = "http://localhost/kluber_lubrication/files/" + this.palletiserarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.palletiserarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.palletiser = this.service.getPalletiserPt2().subscribe(data => {
      this.palletiserobj = data;
      Object.values(this.palletiserobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.palletiserarr.splice(this.palletiserarr.lenght, 0, array[i]);
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
