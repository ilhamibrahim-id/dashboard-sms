import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CountService } from '../services/count.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-big5',
  templateUrl: './big5.component.html',
  styleUrls: ['./big5.component.css']
})
export class Big5Component implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  labels: any;
  datas: any;
  machine: any;
  machineA: string = "Cap_Checker_OC1";
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  start: string = moment().subtract(7, 'd').format("YYYY-MM-DD");
  end: string = moment().format("YYYY-MM-DD");
  coba: any = [];
  donut: any = [];
  barchart: any;
  public loaddata: any;
  public resolved: boolean = false;
  deskripsi: any = 'Loading..';

  refresh() {
    this.labels = this.service.bigFiveByMachineName;
    this.datas = this.service.bigFiveByMachineValue;
    this.machine = this.service.bigFiveMachine;
  };

  bigFiveByMachine(value: any) {
    console.log(value);
    this.machineA = value;
    this.service.getBigFiveByMachine(this.machineA,this.start,this.end);
    this.refresh();
    // console.log(this.labels);
    // this.chart();
    this.updateChart();
  }

  dateRangeChange(start: HTMLInputElement, end: HTMLInputElement) {
    // console.log(dateRangeStart.value);
    // console.log(dateRangeEnd.value);
    this.start = moment(start.value).format("YYYY-MM-DD");
    this.end = moment(end.value).format("YYYY-MM-DD");
    // console.log(this.start);
    this.service.getBigFiveByMachine(this.machineA,this.start,this.end);
    this.refresh();
    // console.log(this.labels);
    // this.chart();
    this.updateChart();
  }

  async updateChart(): Promise<void> {
    this.loaddata = new Promise(resolve => {
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
      var count2 = 0;
      var a = setInterval(() => {
        count++;
        var b = setInterval(() => {
          count2++;
          this.barchart.data = {
            labels: this.labels,
            datasets: [{
              label: this.machineA,
              data: this.datas,
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
          };
          this.barchart.update();
          if (count2 = 3) {
            clearInterval(b);
          }
        }, 50);
        if (this.service.bigFiveByMachineValue != 0) {
          //console.log("3");
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
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  };

  async chart(): Promise<void> {
    this.loaddata = new Promise(resolve => {
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
      var count2 = 0;
      var a = setInterval(() => {
        count++;
        var b = setInterval(() => {
          count2++;
          this.barchart = new Chart("dum", {
            type: 'horizontalBar',
            data: {
              labels: this.service.bigFiveByMachineName,
              datasets: [{
                label: this.machineA,
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
          if (count2 = 3) {
            clearInterval(b);
          }
        }, 50);
        if (this.service.bigFiveByMachineValue != 0) {
          //console.log("3");
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
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  };

  ngOnInit(): void {
      // this.service.getBigFive();
      console.log(this.start);
      this.service.getBigFiveByMachine(this.machineA,this.start,this.end);
      // console.log(this.service.getBigFiveByMachine("AlarmInformation_OC2"));
      // console.log(this.service.bigFiveByMachine.length);
      this.service.getBigFive();
      this.refresh();
      // console.log(this.labels);
      this.chart();
  }
};
