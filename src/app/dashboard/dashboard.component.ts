import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';
import {Chart}  from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  const: object = {};
  const2: any = [];
  totalfinding: any = [];
  pendingexecute: object = {};
  pendingexecute2: any = [];
  readyexecute: object = {};
  readyexecute2: any = [];
  finishexecute: object = {};
  finishexecute2: any = [];
  public errorMsg: any;
  constructor(private service: CountService) { }
  barChart: any = [];
  donut: any = [];
  async ngOnInit(){
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
          //console.log(this.totalfinding[0]);
        }
      })

    }
    );
    this.barChart = new Chart("dum", {
      type: 'horizontalBar',
      data: {
        labels: ["Total Finding", "Pending Execute", "Finish Execute", "Ready Execute"],
        datasets: [{
          label: 'Data',
          data: this.totalfinding,
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
    this.donut = new Chart('donut', {
      type: 'doughnut',
      data: {
        labels: ["Total Finding", "Pending Execute", "Finish Execute", "Ready Execute"],
        datasets: [{
          label: 'Data',
          data: this.totalfinding,
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
  }
}
