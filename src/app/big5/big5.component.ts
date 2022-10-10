import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CountService } from '../services/count.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-big5',
  templateUrl: './big5.component.html',
  styleUrls: ['./big5.component.css']
})
export class Big5Component implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  labels: any = [];
  datas: any = [];
  coba: any = [];
  donut: any = [];
  public loaddata: any;
  public resolved: boolean = false;
  async ngOnInit(): Promise<void> {
    this.loaddata = new Promise(resolve => {
      // this.service.getBigFive();
      this.service.getBigFiveByMachine("caser_oc2");
      // console.log(this.service.getBigFiveByMachine("AlarmInformation_OC2"));
      // console.log(this.service.bigFiveByMachine.length);
      var array = this.service.bigFiveByMachine;

      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }


      var chartOptions = {
        scales: {
          yAxes: [{
            barPercentage: 0.5
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        }
      };
      var count = 0;
      var a = setInterval(() => {
        count++;
        var barChart = new Chart("dum", {
          type: 'horizontalBar',
          data: {
            labels: this.service.bigFiveByMachineName,
            datasets: [{
              label: 'Caser OCI2',
              data: this.service.bigFiveByMachineValue,
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
        });
        if (count == 3 && this.service.bigFiveByMachineValue != 0) {
          //console.log("2");
          this.spinner.hide();
          this.resolved = true;
        } else if (count == 4 && this.service.bigFiveByMachineValue != 0) {
          //console.log("3");
          this.spinner.hide();
          this.resolved = true;
          clearInterval(a);
        } else if (count == 6 && this.service.bigFiveByMachineValue == 0){
          setInterval(() => {
            location.reload();
            },1500);
        }
      }, 100);
    });
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
