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
  currentDate = new Date();
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  public loaddata: any;
  donut: any = [];
  coba: any = [];
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
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
          new Chart('donut', {
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
        })
      }
      );
      this.service.getCountTotalFinding().subscribe(data => {
        this.const = data;
        Object.values(this.const).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.const2.splice(this.const2.lenght, 0, array[i]);
          }
          for (let elem of this.const2) {
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
          this.spinner.hide();
          this.resolved = true;

          new Chart('dum', {
            type: 'bar',
            data: {
              labels: ["Data %"],
              datasets: [
                {
                  label: 'Pending Execute',
                  data: [Math.round((this.pendingexecute / this.const2.length)*100)],
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
                  data: [Math.round((this.finishexecute / this.const2.length)*100)],
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
                  data: [Math.round((this.readyexecute / this.const2.length)*100)],
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
        })


      }
      );
    });
    //// console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
