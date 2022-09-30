import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-pdm-m-oci1',
  templateUrl: './pdm-m-oci1.component.html',
  styleUrls: ['./pdm-m-oci1.component.css']
})
export class PdmMOci1Component implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  coba: any = [];
  donut: any = [];
  coba2: any = [];
  asset: object = {};
  asset2: any = [];
  totalasset: any;
  finish: object = {};
  finish2: any = [];
  totalfinish: any;
  goodsatis: object = {};
  goodsatis2: any = [];
  totalgoodsatis: any;
  unsatis: object = {};
  unsatis2: any = [];
  totalunsatis: any;
  totalfinishtoday: object = {};
  totalfinishtoday2: any = [];
  abnormal: object = {};
  totalabnormal: any = [];
  totalabnormallist: any = [];
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 400);
    this.service.getReadFinishTodayoci1().subscribe(data => {
      this.abnormal = data;
      Object.values(this.abnormal).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.totalabnormal.splice(this.totalabnormal.lenght, 0, array[i]);
        }
        for (var i = 0; i < this.totalabnormal.length; i++) {
          if(this.totalabnormal[i].status === 'Unatisfactory' || this.totalabnormal[i].status === 'Unacceptable'){
            this.totalabnormallist[i] = this.totalabnormal[i];
            //this.totalabnormallist[i] = this.totalabnormal[i];
          }
        }
        // console.log(this.findingpending2);
      })
    }
    );
    this.service.getReadFinishTodayoci1().subscribe(data => {
      this.totalfinishtoday = data;
      Object.values(this.totalfinishtoday).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
        }

        // console.log(this.findingpending2);
      })
    }
    );
    this.service.getReadunsatissunacoci1().subscribe(data => {
      this.unsatis = data;
      Object.values(this.unsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.unsatis2.splice(this.unsatis2.lenght, 0, array[0]);
        for (let elem of this.unsatis2) {
          this.totalunsatis = elem.total;
        }
      })
    }
    );
    this.service.getReadGoodAndSatisoci1().subscribe(data => {
      this.goodsatis = data;
      Object.values(this.goodsatis).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.goodsatis2.splice(this.goodsatis2.lenght, 0, array[0]);
        for (let elem of this.goodsatis2) {
          this.totalgoodsatis = elem.total;
        }
      })
    }
    );
    this.service.getReadPdmFinishoci1().subscribe(data => {
      this.finish = data;
      Object.values(this.finish).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.finish2.splice(this.finish2.lenght, 0, array[0]);
        for (let elem of this.finish2) {
          this.totalfinish = elem.total;
        }
      })
    }
    );
    this.service.getReadTotalPdmAssetoci1().subscribe(data => {
      this.asset = data;
      Object.values(this.asset).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.asset2.splice(this.asset2.lenght, 0, array[0]);
        for (let elem of this.asset2) {
          this.totalasset = elem.total;
        }
      })
    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.coba = new Chart('dum', {
        type: 'line',
        data: {
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: 'Vibration',
            data: [12, 19, 3, 5],
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
      this.coba2 = new Chart('dumdum', {
        type: 'line',
        data: {
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: 'Ampere',
            data: [12, 19, 3, 5],
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
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
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
        type: 'line',
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
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: 'temperature',
            data: [12, 19, 3, 5],
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
        clearInterval(a)
        setInterval(() => {
          this.coba = new Chart('dum', {
            type: 'line',
            data: {
              labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
              datasets: [{
                label: 'Vibration',
                data: [12, 19, 3, 5],
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
          this.coba2 = new Chart('dumdum', {
            type: 'line',
            data: {
              labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
              datasets: [{
                label: 'Ampere',
                data: [12, 19, 3, 5],
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
              labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5],
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
            type: 'line',
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
              labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
              datasets: [{
                label: 'temperature',
                data: [12, 19, 3, 5],
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
        },60000);
      };
    },500);

  }
};
