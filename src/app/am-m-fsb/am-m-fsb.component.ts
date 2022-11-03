import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-am-m-fsb',
  templateUrl: './am-m-fsb.component.html',
  styleUrls: ['./am-m-fsb.component.css']
})
export class AmMFsbComponent implements OnInit {
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
  orderarr: any = [];
  playAudio(){
    let audio = new Audio();
    audio.src = "assets/audio.mp3";
    audio.load();
    audio.play();
  }
  deskripsi: any = 'Loading..';
  orderobj: object = {};
  data($event: any) {
    //// console.log($event);
    this.funloclist = [];
    this.funloc = $event;
    // console.log(this.funloc);
    for (let i = 0; i < this.orderarr.length; i++) {
      if(this.orderarr[i].func_loc === this.funloc){
      this.funloclist[i] = this.orderarr[i];
      }
    }
    this.funloclist = this.funloclist.filter(function (e: any) { return e != null; });
    // console.log(this.funloclist);
  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.low= 0;
      this.medium= 0;
      this.high= 0;
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
      this.service.getReadLevelTotalfsb().subscribe(data => {
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
          // // console.log(this.medium);
          // // console.log(this.totallevel2);
        })


      }
      );
      this.service.getReadFindingPendingfsb().subscribe(data => {
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
      this.service.getTotalFindingMfsb().subscribe(data => {
        this.totalfm = data;
        Object.values(this.totalfm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.totalfm2.splice(this.totalfm2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.totalfm2) {
            this.totalfinding1 = elem.total;
            this.totalfindingmonitorbar[0] = elem.total;
            this.totalfindingmonitordonut[0] = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalPendingFindingMfsb().subscribe(data => {
        this.totalpm = data;
        Object.values(this.totalpm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.totalpm2.splice(this.totalpm2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.totalpm2) {
            this.totalfinding2 = elem.total;
            this.totalfindingmonitorbar[1] = elem.total;
            this.totalfindingmonitordonut[1] = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalFinsihFindingMfsb().subscribe(data => {
        this.totalffm = data;
        Object.values(this.totalffm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.totalffm2.splice(this.totalffm2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.totalffm2) {
            this.totalfinding4 = elem.total;
            this.totalfindingmonitorbar[2] = elem.total;
            this.totalfindingmonitordonut[2] = elem.total;
            //// console.log(this.totalfinding[0]);
          }

          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })


      }
      );
      this.service.getTotalReadyFindingMfsb().subscribe(data => {
        this.totalrm = data;
        Object.values(this.totalrm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.totalrm2.splice(this.totalrm2.lenght, 0, array[0]);
          // // console.log(this.const2);
          for (let elem of this.totalrm2) {
            this.totalfinding3 = elem.total;
            this.totalfindingmonitorbar[3] = elem.total;
            this.totalfindingmonitordonut[3] = elem.total;
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
        if (this.totalfinding3 != null) {
          //// console.log("3");
          var b = setInterval(() => {
            count2++;
            this.coba = new Chart('dum', {
              type: 'bar',
              data: {
                datasets: [
                  {
                    label: 'Total Finding',
                    data: [this.totalfindingmonitorbar[0]],
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
                    data: [this.totalfindingmonitorbar[1]],
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
                    data: [this.totalfindingmonitorbar[2]],
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
                    data: [this.totalfindingmonitorbar[3]],
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
            this.coba = new Chart('donut', {
              type: 'doughnut',
              data: {
                labels: ['Total finding', 'Pending execute', 'Ready execute', 'Finish execute'],
                datasets: [{
                  label: '# of Votes',
                  data: this.totalfindingmonitordonut,
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
            this.coba = new Chart('donut2', {
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
    // console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

