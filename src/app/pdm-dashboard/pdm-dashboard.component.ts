import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-pdm-dashboard',
  templateUrl: './pdm-dashboard.component.html',
  styleUrls: ['./pdm-dashboard.component.css']
})
export class PdmDashboardComponent implements OnInit {
  coba: any = [];
  good: number = 0;
  satis: number = 0;
  unsatisf: number = 0;
  unacc: number = 0;
  goodoci1: number = 0;
  satisoci1: number = 0;
  unsatisfoci1: number = 0;
  unaccoci1: number = 0;
  goodfsb: number = 0;
  satisfsb: number = 0;
  unsatisffsb: number = 0;
  unaccfsb: number = 0;
  asset: object = {};
  asset2: any = [];
  totalasset: any;
  pdmfinish: object = {};
  pdmfinish2: any = [];
  totalpdmfinish: any;
  goodsatis: object = {};
  goodsatis2: any = [];
  goodsatisoci1: object = {};
  goodsatis2oci1: any = [];
  goodsatisfsb: object = {};
  goodsatis2fsb: any = [];
  totalgoodsatis: any;
  unsatisunac: object = {};
  unsatisunac2: any = [];
  totalunsatisunac: any;
  assetoci1: object = {};
  assetoci12: any = [];
  totalassetoci1: any;
  assetoci2: object = {};
  assetoci22: any = [];
  totalassetoci2: any;
  assetfsb: object = {};
  assetfsb2: any = [];
  totalfsb: any;
  oci: any = [];
  oci1good: object = {};
  oci1good2: any = [];
  totaloci1good: any;
  oci1satis: object = {};
  oci1satis2: any = [];
  totaloci1satis: any;
  oci1unsatis: object = {};
  oci1unsatis2: any = [];
  totaloci1unsatis: any;
  oci1unacc: object = {};
  oci1unacc2: any = [];
  totaloci1unacc: any;
  oci2: any = [];
  oci2good: object = {};
  oci2good2: any = [];
  totaloci2good: any;
  oci2satis: object = {};
  oci2satis2: any = [];
  totaloci2satis: any;
  oci2unsatis: object = {};
  oci2unsatis2: any = [];
  totaloci2unsatis: any;
  oci2unacc: object = {};
  oci2unacc2: any = [];
  totaloci2unacc: any;
  fsb: any = [];
  fsbgood: object = {};
  fsbgood2: any = [];
  totalfsbgood: any;
  fsbsatis: object = {};
  fsbsatis2: any = [];
  totalfsbsatis: any;
  fsbunsatis: object = {};
  fsbunsatis2: any = [];
  totalfsbunsatis: any;
  fsbunacc: object = {};
  fsbunacc2: any = [];
  totalfsbunacc: any;
  playAudio(){
    let audio = new Audio();
    audio.src = "assets/audio.mp3";
    audio.load();
    audio.play();
  }
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  donut: any = [];
  public loaddata: any;
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.good = 0;
      this.goodoci1 = 0;
      this.satisoci1 = 0;
      this.satis = 0;
      this.goodfsb = 0;
      this.satisfsb = 0;
      this.unsatisfoci1 = 0;
      this.unsatisf = 0;
      this.unacc = 0;
      this.unaccoci1 = 0;
      this.unsatisffsb = 0;
      this.unaccfsb = 0;
      this.service.getReadGoodAndSatisoci2().subscribe(data => {
        this.goodsatis = data;
        Object.values(this.goodsatis).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.goodsatis2.splice(this.goodsatis2.lenght, 0, array[i]);
          }
          // console.log(this.goodsatis2);

          for (let elem of this.goodsatis2) {
            if (elem.status == 'Good') {
              this.good += 1;
            } else if (elem.status == 'Satisfactory') {
              this.satis += 1;
            } else if (elem.status == 'Unsatisfactory') {
              this.unsatisf += 1;
            } else if (elem.status == 'Unacceptable') {
              this.unacc += 1;
            }
            //// console.log(this.good);

          }
        })
      }
      );
      this.service.getReadGoodAndSatisfsb().subscribe(data => {
        this.goodsatisfsb = data;
        Object.values(this.goodsatisfsb).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.goodsatis2fsb.splice(this.goodsatis2fsb.lenght, 0, array[i]);
          }
          for (let elem of this.goodsatis2fsb) {
            if (elem.status == 'Good') {
              this.goodfsb += 1;
            } else if (elem.status == 'Satisfactory') {
              this.satisfsb += 1;
            } else if (elem.status == 'Unsatisfactory') {
              this.unsatisffsb += 1;
            } else if (elem.status == 'Unacceptable') {
              this.unaccfsb += 1;
            }
            //// console.log(this.good);

          }
        })
      }
      );
      this.service.getReadGoodAndSatisoci1().subscribe(data => {
        this.goodsatisoci1 = data;
        Object.values(this.goodsatisoci1).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.goodsatis2oci1.splice(this.goodsatis2oci1.lenght, 0, array[i]);
          }
          for (let elem of this.goodsatis2oci1) {
            if (elem.status == 'Good') {
              this.goodoci1 += 1;
            } else if (elem.status == 'Satisfactory') {
              this.satisoci1 += 1;
            } else if (elem.status == 'Unsatisfactory') {
              this.unsatisfoci1 += 1;
            } else if (elem.status == 'Unacceptable') {
              this.unaccoci1 += 1;
            }
            //// console.log(this.good);

          }
        })
      }
      );
      this.service.getReadTotalPdmAsset().subscribe(data => {
        this.asset = data;
        Object.values(this.asset).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.asset2.splice(this.asset2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.asset2) {
            // this.totalfinding[0] = elem.total;
            this.totalasset = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getReadPdmFinish().subscribe(data => {
        this.pdmfinish = data;
        Object.values(this.pdmfinish).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.pdmfinish2.splice(this.pdmfinish2.lenght, 0, array[i]);
          }
          // console.log(this.pdmfinish2);

          // // console.log(this.const2);
          for (let elem of this.pdmfinish2) {
            // this.totalfinding[0] = elem.total;
            this.totalpdmfinish = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalAssetOci1().subscribe(data => {
        this.assetoci1 = data;
        Object.values(this.assetoci1).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.assetoci12.splice(this.assetoci12.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.assetoci12) {
            // this.totalfinding[0] = elem.total;
            this.totalassetoci1 = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalAssetOci2().subscribe(data => {
        this.assetoci2 = data;
        Object.values(this.assetoci2).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.assetoci22.splice(this.assetoci22.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.assetoci22) {
            // this.totalfinding[0] = elem.total;
            this.totalassetoci2 = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalAssetFsb().subscribe(data => {
        this.assetfsb = data;
        Object.values(this.assetfsb).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.assetfsb2.splice(this.assetfsb2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.assetfsb2) {
            // this.totalfinding[0] = elem.total;
            this.totalfsb = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      var count = 0;
      var count2 = 0;
      var a = setInterval(() => {
        count++;
        if (this.totalfsb != null) {
          // // console.log("3");
          var b = setInterval(() => {
            count2++;
            //this.resolved = true;
            this.coba = new Chart('dum', {
              type: 'doughnut',
              data: {
                labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
                datasets: [{
                  label: '# of Votes',
                  data: [this.goodoci1, this.satisoci1, this.unsatisfoci1, this.unaccoci1],
                  backgroundColor: [
                    'green',
                    'rgb(230, 230, 0)',
                    'orange',
                    'red',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                  ],
                  borderWidth: 1
                }]
              },
            });
            this.coba = new Chart('donut', {
              type: 'doughnut',
              data: {
                labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
                datasets: [{
                  label: '# of Votes',
                  data: [this.good, this.satis, this.unsatisf, this.unacc],
                  backgroundColor: [
                    'green',
                    'rgb(230, 230, 0)',
                    'orange',
                    'red',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                  ],
                  borderWidth: 1
                }]
              },
            });
            this.coba = new Chart('donutku', {
              type: 'doughnut',
              options: {
                plugins: {
                  datalabels: {
                    display: true,
                    backgroundColor: '#ccc',
                    borderRadius: 3,
                    font: {
                      color: 'red',
                      weight: 'bold',
                    }
                  },
                  doughnutlabel: {
                    labels: [{
                      text: '550',
                      font: {
                        size: 20,
                        weight: 'bold'
                      }
                    }, {
                      text: 'total'
                    }]
                  }
                }
              },
              data: {
                labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
                datasets: [{
                  label: 'oi',
                  data: [this.goodfsb, this.satisfsb, this.unsatisffsb, this.unaccfsb],
                  backgroundColor: [
                    'green',
                    'rgb(230, 230, 0)',
                    'orange',
                    'red',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                  ],
                  borderWidth: 1
                }],

              },
            }
            );
            if (count2 = 1) {
              clearInterval(b);
            }
          }, 50);
          this.playAudio();
          if (count = 1) {
            clearInterval(a);
          }
          this.spinner.hide();
          this.resolved = true;
          clearInterval(a);
        } else {
          // this.spinner.show();
          this.deskripsi = 'Reconnect To Server';
          this.spinner.show();
          this.ngOnInit();
        }
        if (count = 1) {
          clearInterval(a);
        }
      }, 750);
    });
    // // console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
