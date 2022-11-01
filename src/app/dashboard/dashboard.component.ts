import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public resolved: boolean = false;
  const: object = {};
  const2: any = [];
  angka: number = 0;
  totalfinding: any = [];
  currentDate = new Date();
  totalfindingd: any = [];
  totalfinding1: any;
  totalfinding2: any;
  totalfinding3: any;
  totalfinding4: any;
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  pendingexecute: object = {};
  pendingexecute2: any = [];
  readyexecute: object = {};
  readyexecute2: any = [];
  finishexecute: object = {};
  finishexecute2: any = [];
  public errorMsg: any;
  barChart: any = [];
  public loaddata: any;
  donut: any = [];
  coba: any = [];
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    this.Setting = 0;
    this.Replacement = 0;
    this.Improvement = 0;
    this.loaddata = new Promise(resolve => {
      this.service.getKategori().subscribe(data => {
        this.totalkategori = data;
        Object.values(this.totalkategori).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totalkategoriarr.length; i++) {
            if (this.totalkategoriarr[i].kategori === 'Setting') {
              this.Setting += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Replacement') {
              this.Replacement += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Improvement') {
              this.Improvement += 1;
            }
          }
          //// console.log(this.totalkategoriarr);

          // // console.log(this.medium);
          // // console.log(this.totallevel2);
        })


      }
      );
      //totalfinding
      this.service.getCountTotalFinding().subscribe(data => {
        this.const = data;
        Object.values(this.const).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.const2.splice(this.const2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.const2) {
            this.totalfinding[0] = elem.total;
            this.totalfindingd[0] = elem.total;
            this.totalfinding1 = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      //readpendingexecute
      this.service.getReadPendingExecute().subscribe(data => {
        this.pendingexecute = data;
        Object.values(this.pendingexecute).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array[0]);
          this.pendingexecute2.splice(this.pendingexecute2.lenght, 0, array[0]);
          for (let elem of this.pendingexecute2) {
            this.totalfinding[1] = elem.total;
            this.totalfindingd[1] = elem.total;
            this.totalfinding2 = elem.total;
            //// console.log(this.totalfinding[0]);
          }
        })
      }
      );
      //readfinishexecute
      this.service.getReadFinishExecute().subscribe(data => {
        this.finishexecute = data;
        Object.values(this.finishexecute).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.finishexecute2.splice(this.finishexecute2.lenght, 0, array[0]);
          for (let elem of this.finishexecute2) {
            this.totalfinding[2] = elem.total;
            this.totalfindingd[2] = elem.total;
            this.totalfinding3 = elem.total;
            //// console.log(this.totalfinding[0]);
          }
          //  // console.log(this.finishexecute2.splice(this.finishexecute2.lenght,0,array[0]).total);
        })

      }
      );
      //readreadyexecute
      this.service.getReadReadyExecute().subscribe(data => {
        this.readyexecute = data;
        Object.values(this.readyexecute).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array[0]);
          this.readyexecute2.splice(this.readyexecute2.lenght, 0, array[0]);
          for (let elem of this.readyexecute2) {
            this.totalfinding[3] = elem.total;
            this.totalfindingd[3] = elem.total;
            this.totalfinding4 = elem.total;
            //// console.log(this.totalfinding[0]);
          }
        })
      }
      );
      var count2 = 0;
      var count = 0;
      var a = setInterval(() => {
        count++;
        if (this.totalfinding4 != null) {
          // // console.log("3");
          var b = setInterval(() => {
            count2++;
            this.donut = new Chart('donut', {
              type: 'doughnut',
              data: {
                labels: ["Setting", "Replacement", "Improvement"],
                datasets: [{
                  label: 'Data',
                  data: [this.Setting, this.Replacement, this.Improvement],
                  backgroundColor: [
                    'red',
                    'rgb(112, 112, 0)',
                    'green',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white',
                  ],
                  borderWidth: 1
                }]
              },
            });
            this.coba = new Chart('dum', {
              type: 'bar',
              data: {
                labels: ["Data %"],
                datasets: [
                  {
                    label: 'Pending Execute',
                    data: [Math.round((this.totalfinding[1] / this.totalfinding[0]) * 100)],
                    backgroundColor: [
                      'red'
                    ],
                    borderColor: [
                      'white'
                    ],
                    borderWidth: 1
                  },
                  {
                    label: 'Finish Execute',
                    data: [Math.round((this.totalfinding[2] / this.totalfinding[0]) * 100)],
                    backgroundColor: [
                      'rgb(112, 112, 0)'
                    ],
                    borderColor: [
                      'white'
                    ],
                    borderWidth: 1
                  },
                  {
                    label: 'Ready Execute',
                    data: [Math.round((this.totalfinding[3] / this.totalfinding[0]) * 100)],
                    backgroundColor: [
                      'green'
                    ],
                    borderColor: [
                      'white'
                    ],
                    borderWidth: 1
                  },
                ]
              }, options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      min: 0,
                      max: 100,
                      callback: function (value) { return value + "%" },
                      //beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Percentage"
                    }
                  }]
                }
              }
            });
            if (count2 = 3) {
              clearInterval(b);
            }
          }, 50);
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
    //// console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
