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
  public resolved: boolean = false;
  totalfm: object = {};
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
  totalfinding4: any;
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 400);
    this.service.getReadLevelTotaloci2().subscribe(data => {
      this.totallevel = data;
      Object.values(this.totallevel).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
        }
        for (var i = 0; i < this.totallevel2.length; i++) {
          if (this.totallevel2[i].level === 'Low'){
            this.low +=1;
          }
          if (this.totallevel2[i].level === 'Medium'){
            this.medium +=1;
          }
          if (this.totallevel2[i].level === 'High'){
            this.high +=1;
          }
        }
        // console.log(this.medium);
        // console.log(this.totallevel2);
      })


    }
    );
    this.service.getReadFindingPendingoci2().subscribe(data => {
      this.findingpending = data;
      Object.values(this.findingpending).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.findingpending2.splice(this.findingpending2.lenght, 0, array[i]);
        }

        // console.log(this.findingpending2);
      })


    }
    );
    this.service.getTotalFindingMoci2().subscribe(data => {
      this.totalfm = data;
      Object.values(this.totalfm).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.totalfm2.splice(this.totalfm2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.totalfm2) {
          this.totalfinding1 = elem.total;
          this.totalfindingmonitorbar[0] = elem.total;
          this.totalfindingmonitordonut[0] = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalPendingFindingMoci2().subscribe(data => {
      this.totalpm = data;
      Object.values(this.totalpm).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.totalpm2.splice(this.totalpm2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.totalpm2) {
          this.totalfinding2 = elem.total;
          this.totalfindingmonitorbar[1] = elem.total;
          this.totalfindingmonitordonut[1] = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalFinsihFindingMoci2().subscribe(data => {
      this.totalffm = data;
      Object.values(this.totalffm).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.totalffm2.splice(this.totalffm2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.totalffm2) {
          this.totalfinding4 = elem.total;
          this.totalfindingmonitorbar[2] = elem.total;
          this.totalfindingmonitordonut[2] = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
      })


    }
    );
    this.service.getTotalReadyFindingMoci2().subscribe(data => {
      this.totalrm = data;
      Object.values(this.totalrm).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.totalrm2.splice(this.totalrm2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.totalrm2) {
          this.totalfinding3 = elem.total;
          this.totalfindingmonitorbar[3] = elem.total;
          this.totalfindingmonitordonut[3] = elem.total;
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
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Total Finding',
              data: [this.totalfindingmonitorbar[0]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            },
            {
              type: 'bar',
              label: 'Pending Execute',
              data: [this.totalfindingmonitorbar[1]],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
            },
            {
              label: 'Ready Execute',
              data: [this.totalfindingmonitorbar[2]],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 206, 86, 0.2)',
              ],
              borderWidth: 1
            },
            {
              label: 'Finish Execute',
              data: [this.totalfindingmonitorbar[3]],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 0.2)',
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
      this.coba = new Chart('donut2', {
        type: 'doughnut',
        data: {
          labels: ['Low','Medium','High'],
          datasets: [{
            label: '# of Votes',
            data: [this.low,this.medium,this.high],
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
      if (count == 1) {
        var count2 = 0;
        clearInterval(a)
        setInterval(() => {
          this.findingpending2.splice(0);
          this.totallevel2.splice(0);
          this.low = 0;
          this.medium = 0;
          this.high = 0;
          this.service.getReadLevelTotaloci2().subscribe(data => {
            this.totallevel = data;
            Object.values(this.totallevel).forEach(data => {
              // console.log(data);
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              // console.log(array);
              for (let i = 0; i < array.length; i++) {
                this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
              }
              for (var i = 0; i < this.totallevel2.length; i++) {
                if (this.totallevel2[i].level === 'Low'){
                  this.low +=1;
                }
                if (this.totallevel2[i].level === 'Medium'){
                  this.medium +=1;
                }
                if (this.totallevel2[i].level === 'High'){
                  this.high +=1;
                }
              }
              // console.log(this.medium);
              // console.log(this.totallevel2);
            })


          }
          );
          this.service.getReadFindingPendingoci2().subscribe(data => {
            this.findingpending = data;
            Object.values(this.findingpending).forEach(data => {
              // console.log(data);
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              // console.log(array);
              for (let i = 0; i < array.length; i++) {
                this.findingpending2.splice(this.findingpending2.lenght, 0, array[i]);
              }

              // console.log(this.findingpending2);
            })


          }
          );
          this.service.getTotalFindingMoci2().subscribe(data => {
            this.totalfm = data;
            Object.values(this.totalfm).forEach(data => {
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              this.totalfm2.splice(this.totalfm2.lenght, 0, array[0]);
              // console.log(this.const2);
              for (let elem of this.totalfm2) {
                this.totalfinding1 = elem.total;
                this.totalfindingmonitorbar[0] = elem.total;
                this.totalfindingmonitordonut[0] = elem.total;
                //console.log(this.totalfinding[0]);
              }

              // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
            })


          }
          );
          this.service.getTotalPendingFindingMoci2().subscribe(data => {
            this.totalpm = data;
            Object.values(this.totalpm).forEach(data => {
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              this.totalpm2.splice(this.totalpm2.lenght, 0, array[0]);
              // console.log(this.const2);
              for (let elem of this.totalpm2) {
                this.totalfinding2 = elem.total;
                this.totalfindingmonitorbar[1] = elem.total;
                this.totalfindingmonitordonut[1] = elem.total;
                //console.log(this.totalfinding[0]);
              }

              // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
            })


          }
          );
          this.service.getTotalFinsihFindingMoci2().subscribe(data => {
            this.totalffm = data;
            Object.values(this.totalffm).forEach(data => {
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              this.totalffm2.splice(this.totalffm2.lenght, 0, array[0]);
              // console.log(this.const2);
              for (let elem of this.totalffm2) {
                this.totalfinding4 = elem.total;
                this.totalfindingmonitorbar[2] = elem.total;
                this.totalfindingmonitordonut[2] = elem.total;
                //console.log(this.totalfinding[0]);
              }

              // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
            })


          }
          );
          this.service.getTotalReadyFindingMoci2().subscribe(data => {
            this.totalrm = data;
            Object.values(this.totalrm).forEach(data => {
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });
              this.totalrm2.splice(this.totalrm2.lenght, 0, array[0]);
              // console.log(this.const2);
              for (let elem of this.totalrm2) {
                this.totalfinding3 = elem.total;
                this.totalfindingmonitorbar[3] = elem.total;
                this.totalfindingmonitordonut[3] = elem.total;
                //console.log(this.totalfinding[0]);
              }

              // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
            })


          }
          );
          this.coba = new Chart('dum', {
            type: 'bar',
            data: {
              datasets: [
                {
                  label: 'Total Finding',
                  data: [this.totalfindingmonitorbar[0]],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                  ],
                  borderWidth: 1
                },
                {
                  type: 'bar',
                  label: 'Pending Execute',
                  data: [this.totalfindingmonitorbar[1]],
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Ready Execute',
                  data: [this.totalfindingmonitorbar[2]],
                  backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Finish Execute',
                  data: [this.totalfindingmonitorbar[3]],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 0.2)',
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
          this.coba = new Chart('donut2', {
            type: 'doughnut',
            data: {
              labels: ['Low','Medium','High'],
              datasets: [{
                label: '# of Votes',
                data: [this.low,this.medium,this.high],
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
          var b = setInterval(() => {
            clearInterval(b);
          this.coba = new Chart('donut2', {
            type: 'doughnut',
            data: {
              labels: ['Low','Medium','High'],
              datasets: [{
                label: '# of Votes',
                data: [this.low,this.medium,this.high],
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
        },200);
        }, 60000);
      };
    }, 400);
  }};
