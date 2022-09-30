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
  totalfindingd: any = [];
  totalfinding1: any;
  totalfinding2: any;
  totalfinding3: any;
  totalfinding4: any;

  pendingexecute: object = {};
  pendingexecute2: any = [];
  readyexecute: object = {};
  readyexecute2: any = [];
  finishexecute: object = {};
  finishexecute2: any = [];
  public errorMsg: any;
  barChart: any = [];
  donut: any = [];
  coba: any = [];
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 400);

    //totalfinding
    this.service.getCountTotalFinding().subscribe(data => {
      this.const = data;
      Object.values(this.const).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        this.const2.splice(this.const2.lenght, 0, array[0]);
        // console.log(this.const2);
        for (let elem of this.const2) {
          this.totalfinding[0] = elem.total;
          this.totalfindingd[0] = elem.total;
          this.totalfinding1 = elem.total;
          //console.log(this.totalfinding[0]);
        }

        // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
        // console.log(array[0]);
        this.pendingexecute2.splice(this.pendingexecute2.lenght, 0, array[0]);
        for (let elem of this.pendingexecute2) {
          this.totalfinding[1] = elem.total;
          this.totalfindingd[1] = elem.total;
          this.totalfinding2 = elem.total;
          //console.log(this.totalfinding[0]);
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
          //console.log(this.totalfinding[0]);
        }
        //  console.log(this.finishexecute2.splice(this.finishexecute2.lenght,0,array[0]).total);
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
        // console.log(array[0]);
        this.readyexecute2.splice(this.readyexecute2.lenght, 0, array[0]);
        for (let elem of this.readyexecute2) {
          this.totalfinding[3] = elem.total;
          this.totalfindingd[3] = elem.total;
          this.totalfinding4 = elem.total;
          //console.log(this.totalfinding[0]);
        }
      })
    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.resolved = true;
      //totalfinding
      this.service.getCountTotalFinding().subscribe(data => {
        this.const = data;
        Object.values(this.const).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.const2.splice(this.const2.lenght, 0, array[0]);
          // console.log(this.const2);
          for (let elem of this.const2) {
            this.totalfinding[0] = elem.total;
            this.totalfindingd[0] = elem.total;
            this.totalfinding1 = elem.total;
            //console.log(this.totalfinding[0]);
          }

          // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
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
          // console.log(array[0]);
          this.pendingexecute2.splice(this.pendingexecute2.lenght, 0, array[0]);
          for (let elem of this.pendingexecute2) {
            this.totalfinding[1] = elem.total;
            this.totalfindingd[1] = elem.total;
            this.totalfinding2 = elem.total;
            //console.log(this.totalfinding[0]);
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
            //console.log(this.totalfinding[0]);
          }
          //  console.log(this.finishexecute2.splice(this.finishexecute2.lenght,0,array[0]).total);
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
          // console.log(array[0]);
          this.readyexecute2.splice(this.readyexecute2.lenght, 0, array[0]);
          for (let elem of this.readyexecute2) {
            this.totalfinding[3] = elem.total;
            this.totalfindingd[3] = elem.total;
            this.totalfinding4 = elem.total;
            //console.log(this.totalfinding[0]);
          }
        })
      }
      );
      this.donut = new Chart('donut', {
        type: 'doughnut',
        data: {
          labels: ["Total Finding", "Pending Execute", "Finish Execute", "Ready Execute"],
          datasets: [{
            label: 'Data',
            data: this.totalfindingd,
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
      this.coba = new Chart('dum', {
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Total Finding',
              data: [this.totalfinding[0]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Pending Execute',
              data: [this.totalfinding[1]],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 0.2)'
              ],
              borderWidth: 1
            },
            {
              label: 'Finish Execute',
              data: [this.totalfinding[2]],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Ready Execute',
              data: [this.totalfinding[3]],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)'
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
      if (count == 1) {
        clearInterval(a);
      }
    }, 500);

  }
}
