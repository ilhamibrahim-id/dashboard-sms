import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-am-m-oci2',
  templateUrl: './am-m-oci2.component.html',
  styleUrls: ['./am-m-oci2.component.css']
})
export class AmMOci2Component implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  itemsPerPage2: number = 0;
  currentPage2: number = 1;
  absoluteIndex2(indexOnPage: number): number {
    return this.itemsPerPage2 * (this.currentPage2 - 1) + indexOnPage;
  }
  public resolved: boolean = false;
  totalfm: object = {};
  searchText: any;
  searchText2: any;
  totalfm2: any = [];
  findingpending: object = {};
  findingpending2: any = [];
  orderobj: object = {};
  orderarr: any = [];
  totallevel: object = {};
  totallevel2: any = [];
  ftotallevel: any = [];
  low: number = 0;
  medium: number = 0;
  high: number = 0;
  totalfindingmonitorbar: any = [];
  totalfindingmonitordonut: any = [];
  totalpm: object = {};
  totalpm2: any = [];
  totalrm: object = {};
  totalrm2: any = [];
  totalffm: object = {};
  totalffm2: any = [];
  coba: any = [];
  donut: any = [];
  totalfinding1: any;
  totalfinding2: any;
  totalfinding3: any;
  public loaddata: any;
  totalfinding4: any;
  funloc: any;
  funloclist: any = [];
  deskripsi: any = 'Loading..';
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  data($event: any) {
    //// console.log($event);
    this.funloclist = [];
    this.funloc = $event;
    // console.log(this.funloc);
    for (let i = 0; i < this.orderarr.length; i++) {
      if (this.orderarr[i].func_loc === this.funloc) {
        this.funloclist[i] = this.orderarr[i];
      }
    }
    this.funloclist = this.funloclist.filter(function (e: any) { return e != null; });
    // console.log(this.funloclist);
  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getOrder().subscribe(data => {
        this.orderobj = data;
        Object.values(this.orderobj).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.orderarr.splice(this.orderarr.lenght, 0, array[i]);
          }
          // console.log(this.orderarr);

          // // console.log(this.findingpending2);
        })


      }
      );
      this.service.getReadLevelTotaloci2().subscribe(data => {
        this.totallevel = data;
        Object.values(this.totallevel).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totallevel2.length; i++) {
            if (this.totallevel2[i].level === 'Low') {
              this.low += 1;
            }
            if (this.totallevel2[i].level === 'Medium') {
              this.medium += 1;
            }
            if (this.totallevel2[i].level === 'High') {
              this.high += 1;
            }
          }
          new Chart('donut2', {
            type: 'doughnut',
            data: {
              labels: ['Low', 'Medium', 'High'],
              datasets: [{
                label: '# of Votes',
                data: [this.low, this.medium, this.high],
                backgroundColor: [
                  'red',
                  'rgb(112, 112, 0)',
                  'blue',
                  'green',
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
          // // console.log(this.medium);
          // // console.log(this.totallevel2);
        })


      }
      );
      this.service.getReadFindingPendingoci2().subscribe(data => {
        this.findingpending = data;
        Object.values(this.findingpending).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.findingpending2.splice(this.findingpending2.lenght, 0, array[i]);
          }

          // // console.log(this.findingpending2);
        })


      }
      );
      this.service.getTotalFindingMoci2().subscribe(data => {
        this.totalfm = data;
        Object.values(this.totalfm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.totalfm2.splice(this.totalfm2.lenght, 0, array[i]);
          }
          // console.log(this.totalfm2);

          for (let elem of this.totalfm2) {
            if (elem.status == 'Done') {
              this.finishexecute += 1;
            }
            else if (elem.status == 'Draft' || elem.status == 'Submit' || elem.status == 'Revise') {
              this.pendingexecute += 1;
            }
            else if (elem.status == 'Approved') {
              this.readyexecute += 1;
            }
          }
          // // console.log(this.const2);
          new Chart('dum', {
            type: 'bar',
            data: {
              datasets: [
                {
                  label: 'Total Finding',
                  data: [this.totalfm2.length],
                  backgroundColor: [
                    'red',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  type: 'bar',
                  label: 'Pending Execute',
                  data: [this.pendingexecute],
                  backgroundColor: [
                    'rgb(112, 112, 0)',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Ready Execute',
                  data: [this.readyexecute],
                  backgroundColor: [
                    'blue',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Finish Execute',
                  data: [this.finishexecute],
                  backgroundColor: [
                    'green',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },

              ]
            }, options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
          new Chart('donut', {
            type: 'doughnut',
            data: {
              labels: ['Total finding', 'Pending execute', 'Ready execute', 'Finish execute'],
              datasets: [{
                label: '# of Votes',
                data: [this.totalfm2.length, this.pendingexecute, this.readyexecute, this.finishexecute],
                backgroundColor: [
                  'red',
                  'rgb(112, 112, 0)',
                  'blue',
                  'green',
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
          this.spinner.hide();
          this.resolved = true;
          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })
      })


    }
    );
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

