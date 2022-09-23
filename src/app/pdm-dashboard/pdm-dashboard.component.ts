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
  totalasset:any;
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  donut: any = [];
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 400);
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
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.resolved = true;
      this.coba = new Chart('dum', {
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
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: 'oi',
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
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
            label: 'oi',
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
        }, 60000);
      }

    }, 400);
  }
};
