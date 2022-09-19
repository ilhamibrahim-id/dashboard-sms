import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-am-m-fsb',
  templateUrl: './am-m-fsb.component.html',
  styleUrls: ['./am-m-fsb.component.css']
})
export class AmMFsbComponent implements OnInit {


  coba: any = [];
  donut:any = [];
  ngOnInit(): void {
    this.coba = new Chart('dum', {
      type: 'bar',
      data: {
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
              label: 'Finding in this month',
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

  }};
