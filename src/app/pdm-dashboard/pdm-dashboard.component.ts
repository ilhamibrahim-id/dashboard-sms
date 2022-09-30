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
  asset: object = {};
  asset2: any = [];
  totalasset: any;
  pdmfinish: object = {};
  pdmfinish2: any = [];
  totalpdmfinish: any;
  goodsatis: object = {};
  goodsatis2: any = [];
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
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  donut: any = [];
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 500);
    this.service.getTotalFsbUnacc().subscribe(data => {
      this.fsbunacc = data;
      Object.values(this.fsbunacc).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.fsbunacc2.splice(this.fsbunacc2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.fsbunacc2) {
          // this.totalfinding[0] = elem.total;
          this.fsb[3] = elem.total;
          this.totalfsbunacc = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalFsbUnSatis().subscribe(data => {
      this.fsbunsatis = data;
      Object.values(this.fsbunsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.fsbunsatis2.splice(this.fsbunsatis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.fsbunsatis2) {
          // this.totalfinding[0] = elem.total;
          this.fsb[2] = elem.total;
          this.totalfsbunsatis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalFsbSatis().subscribe(data => {
      this.fsbsatis = data;
      Object.values(this.fsbsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.fsbsatis2.splice(this.fsbsatis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.fsbsatis2) {
          // this.totalfinding[0] = elem.total;
          this.fsb[1] = elem.total;
          this.totalfsbsatis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalFsbGood().subscribe(data => {
      this.fsbgood = data;
      Object.values(this.fsbgood).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.fsbgood2.splice(this.fsbgood2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.fsbgood2) {
          // this.totalfinding[0] = elem.total;
          this.fsb[0] = elem.total;
          this.totalfsbgood = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci2Unacc().subscribe(data => {
      this.oci2unacc = data;
      Object.values(this.oci2unacc).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci2unacc2.splice(this.oci2unacc2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci2unacc2) {
          // this.totalfinding[0] = elem.total;
          this.oci2[3] = elem.total;
          this.totaloci2unacc = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci2UnSatis().subscribe(data => {
      this.oci2unsatis = data;
      Object.values(this.oci2unsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci2unsatis2.splice(this.oci2unsatis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci2unsatis2) {
          // this.totalfinding[0] = elem.total;
          this.oci2[2] = elem.total;
          this.totaloci2unsatis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci2Satis().subscribe(data => {
      this.oci2satis = data;
      Object.values(this.oci2satis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci2satis2.splice(this.oci2satis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci2satis2) {
          // this.totalfinding[0] = elem.total;
          this.oci2[1] = elem.total;
          this.totaloci2satis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci2Good().subscribe(data => {
      this.oci2good = data;
      Object.values(this.oci2good).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci2good2.splice(this.oci2good2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci2good2) {
          // this.totalfinding[0] = elem.total;
          this.oci2[0] = elem.total;
          this.totaloci2good = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci1Unacc().subscribe(data => {
      this.oci1unacc = data;
      Object.values(this.oci1unacc).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci1unacc2.splice(this.oci1unacc2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci1unacc2) {
          // this.totalfinding[0] = elem.total;
          this.oci[3] = elem.total;
          this.totaloci1unacc = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci1UnSatis().subscribe(data => {
      this.oci1unsatis = data;
      Object.values(this.oci1unsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci1unsatis2.splice(this.oci1unsatis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci1unsatis2) {
          // this.totalfinding[0] = elem.total;
          this.oci[2] = elem.total;
          this.totaloci1unsatis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci1Satis().subscribe(data => {
      this.oci1satis = data;
      Object.values(this.oci1satis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci1satis2.splice(this.oci1satis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci1satis2) {
          // this.totalfinding[0] = elem.total;
          this.oci[1] = elem.total;
          this.totaloci1satis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalOci1Good().subscribe(data => {
      this.oci1good = data;
      Object.values(this.oci1good).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.oci1good2.splice(this.oci1good2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.oci1good2) {
          // this.totalfinding[0] = elem.total;
          this.oci[0] = elem.total;
          this.totaloci1good = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
        // console.log(this.const2);
        for (let elem of this.asset2) {
          // this.totalfinding[0] = elem.total;
          this.totalasset = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getReadPdmFinish().subscribe(data => {
      this.pdmfinish = data;
      Object.values(this.pdmfinish).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.pdmfinish2.splice(this.pdmfinish2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.pdmfinish2) {
          // this.totalfinding[0] = elem.total;
          this.totalpdmfinish = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getReadGoodAndSatis().subscribe(data => {
      this.goodsatis = data;
      Object.values(this.goodsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.goodsatis2.splice(this.goodsatis2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.goodsatis2) {
          // this.totalfinding[0] = elem.total;
          this.totalgoodsatis = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getReadunsatissunac().subscribe(data => {
      this.unsatisunac = data;
      Object.values(this.unsatisunac).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.unsatisunac2.splice(this.unsatisunac2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.unsatisunac2) {
          // this.totalfinding[0] = elem.total;
          this.totalunsatisunac = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
        // console.log(this.const2);
        for (let elem of this.assetoci12) {
          // this.totalfinding[0] = elem.total;
          this.totalassetoci1 = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
        // console.log(this.const2);
        for (let elem of this.assetoci22) {
          // this.totalfinding[0] = elem.total;
          this.totalassetoci2 = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
        // console.log(this.const2);
        for (let elem of this.assetfsb2) {
          // this.totalfinding[0] = elem.total;
          this.totalfsb = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.resolved = true;
      this.coba = new Chart('dum', {
        type: 'doughnut',
        data: {
          labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
          datasets: [{
            label: '# of Votes',
            data: this.oci,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
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
            data: this.oci2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
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
            data: this.fsb,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
          }],

        },
      }
      );
      if (count == 1) {
        clearInterval(a);
      }

    }, 500);
  }
};
