import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-big5',
  templateUrl: './big5.component.html',
  styleUrls: ['./big5.component.css']
})
export class Big5Component implements OnInit {


  coba: any = [];
  donut:any = [];
  ngOnInit(): void {
    this.coba = {
      label: 'Density of Planets (kg/m3)',
      data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
      backgroundColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(30, 99, 132, 0.6)',
        'rgba(60, 99, 132, 0.6)',
        'rgba(90, 99, 132, 0.6)',
        'rgba(120, 99, 132, 0.6)',
        'rgba(150, 99, 132, 0.6)',
        'rgba(180, 99, 132, 0.6)',
        'rgba(210, 99, 132, 0.6)',
        'rgba(240, 99, 132, 0.6)'
      ],
      borderColor: [
        'rgba(0, 99, 132, 1)',
        'rgba(30, 99, 132, 1)',
        'rgba(60, 99, 132, 1)',
        'rgba(90, 99, 132, 1)',
        'rgba(120, 99, 132, 1)',
        'rgba(150, 99, 132, 1)',
        'rgba(180, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(240, 99, 132, 1)'
      ],
      borderWidth: 2,
      hoverBorderWidth: 0
    };

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

    var barChart = new Chart("dum", {
      type: 'horizontalBar',
      data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
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
      }],
      },
    });

}};
