import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pdm-m-fsb',
  templateUrl: './pdm-m-fsb.component.html',
  styleUrls: ['./pdm-m-fsb.component.css']
})
export class PdmMFsbComponent implements OnInit {


  coba: any = [];
  donut:any = [];
  coba2:any = [];
  ngOnInit(): void {
    this.coba = new Chart('dum', {
      type: 'line',
      data: {
          labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
          datasets: [{
              label: 'Vibration',
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
  this.coba2 = new Chart('dumdum', {
    type: 'line',
    data: {
        labels: ['Total finding', 'ready execute', 'pending execute', 'finish execute'],
        datasets: [{
            label: 'Ampere',
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
  type: 'line',
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
          label: 'temperature',
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

}};