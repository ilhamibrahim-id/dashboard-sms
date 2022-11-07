import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';
import { TableUtil } from "../services/tabelUtil";


@Component({
  selector: 'app-pdm-m-oci1',
  templateUrl: './pdm-m-oci1.component.html',
  styleUrls: ['./pdm-m-oci1.component.css']
})
export class PdmMOci1Component implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  good: number = 0;
  satis: number = 0;
  unsatisf: number = 0;
  itemsPerPage: number = 0;
  searchText: any;
  searchText2: any;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  itemsPerPage2: number = 0;
  currentPage2: number = 1;
  absoluteIndex2(indexOnPage: number): number {
    return this.itemsPerPage2 * (this.currentPage2 - 1) + indexOnPage;
  }
  unacc: number = 0;
  coba: any;
  donut: any = [];
  coba2: any;
  coba3: any;
  asset: object = {};
  asset2: any = [];
  totalasset: any;
  finish: object = {};
  finish2: any = [];
  totalfinish: any;
  goodsatis: object = {};
  goodsatis2: any = [];
  totalgoodsatis: any;
  unsatis: object = {};
  unsatis2: any = [];
  totalunsatis: any;
  totalfinishtoday: object = {};
  totalfinishtoday2: any = [];
  abnormal: object = {};
  totalabnormal: any = [];
  totalabnormallist: any = [];
  vibration: object = {};
  totalvibrationlist: any = [];
  totalvibrationdate: any = [];
  ampere: object = {};
  totalamperelist: any = [];
  totalamperedate: any = [];
  temperature: object = {};
  totaltemperaturelist: any = [];
  totaltemperaturedate: any = [];
  headertitle: any = [];
  devicename: any = [];
  statusdevice: any = [];
  public loaddata: any;
  uniqueChars: any;
  uniqueChars2: any;
  uniqueChars3: any;
  deskripsi: any = 'Loading..';
  funloc: any;
  funloclist: any = [];
  temperaturelist: any = [];
  temperaturedate: any = [];
  vibrationlist: any = [];
  vibrationdate: any = [];
  amperelist: any = [];
  amperedate: any = [];
  showPaginate: number = 5;
  abnormalasset: object = {};
  abnormalassetlist: any = [];
  @ViewChild("printsection")
  myNameElem!: ElementRef;
  generatePaginate() {
    this.showPaginate = this.totalfinishtoday2.length;
    this.currentPage = 1;
  }
  done() {
    this.showPaginate = 5;
  }
  exportTable() {
    TableUtil.exportTableToExcel("prinsection");
    this.showPaginate = 5;
  }
  print(): void {
    let printContents, popupWin: any;
    printContents = this.myNameElem.nativeElement.innerHTML;
    //console.log(printContents);

    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Reporting Daily</title>
          <style>
          *{
            text-align: center;
            font-family:  'Times New Roman', serif;
          }
          table {
            border-collapse: collapse;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    this.showPaginate = 5;
    popupWin.document.close();
  }
  data($event: any) {
    this.temperaturelist = [];
    this.temperaturedate = [];
    this.amperelist = [];
    this.amperedate = [];
    this.vibrationlist = [];
    this.vibrationdate = [];
    this.funloc = $event;
    var countagain = 0;
    for (let i = 0; i < this.totaltemperaturelist.length; i++) {
      if (this.totaltemperaturelist[i].device_name === this.funloc) {
        this.temperaturelist.splice(this.temperaturelist.lenght, 0, this.totaltemperaturelist[i].value);
      }
    }
    for (let i = 0; i < this.totaltemperaturedate.length; i++) {
      if (this.totaltemperaturedate[i].device_name === this.funloc) {
        this.temperaturedate.splice(this.temperaturedate.lenght, 0, this.totaltemperaturedate[i].do_date);
      }
    }
    this.temperaturelist = this.temperaturelist.filter(function (e: any) { return e != null; });
    this.temperaturedate = this.temperaturedate.filter(function (e: any) { return e != null; });
    for (let i = 0; i < this.totalamperelist.length; i++) {
      if (this.totalamperelist[i].device_name === this.funloc) {
        this.amperelist.splice(this.amperelist.lenght, 0, this.totalamperelist[i].value);
      }
    }
    for (let i = 0; i < this.totalamperedate.length; i++) {
      if (this.totalamperedate[i].device_name === this.funloc) {
        this.amperedate.splice(this.amperedate.lenght, 0, this.totalamperedate[i].do_date);
      }
    }
    this.amperelist = this.amperelist.filter(function (e: any) { return e != null; });
    this.amperedate = this.amperedate.filter(function (e: any) { return e != null; });
    for (let i = 0; i < this.totalvibrationlist.length; i++) {
      if (this.totalvibrationlist[i].device_name === this.funloc) {
        this.vibrationlist.splice(this.vibrationlist.lenght, 0, this.totalvibrationlist[i].value);
      }
    }
    for (let i = 0; i < this.totalvibrationdate.length; i++) {
      if (this.totalvibrationdate[i].device_name === this.funloc) {
        this.vibrationdate.splice(this.vibrationdate.lenght, 0, this.totalvibrationdate[i].do_date);
      }
    }
    //console.log(this.vibrationlist);

    this.vibrationlist = this.vibrationlist.filter(function (e: any) { return e != null; });
    this.vibrationdate = this.vibrationdate.filter(function (e: any) { return e != null; });
    var loadagain = setInterval(() => {
      countagain++;
      this.coba = new Chart('dum', {
        type: 'line',
        data: {
          labels: this.vibrationdate,
          datasets: [{
            label: 'Data Vibration',
            data: this.vibrationlist,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
          }]
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
      this.coba2 = new Chart('dumdum', {
        type: 'line',
        data: {
          labels: this.amperedate,
          datasets: [{
            label: 'Data Ampere',
            data: this.amperelist,
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              '#A0AC00',
            ],
            borderWidth: 1
          }]
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
      this.coba3 = new Chart('dumdumdum', {
        type: 'line',
        data: {
          labels: this.temperaturedate,
          datasets: [{
            label: 'Data Temperature',
            data: this.temperaturelist,
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
      if (countagain == 1) {
        clearInterval(loadagain);
      }
    }, 300);
  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getReadFinishTodayoci1abnormal().subscribe(data => {
        this.abnormalasset = data;
        Object.values(this.abnormalasset).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.abnormalassetlist.splice(this.abnormalassetlist.lenght, 0, array[i]);
          }
        })
      }
      );
      this.service.getTemperatureLineoci1().subscribe(data => {
        this.temperature = data;
        Object.values(this.temperature).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totaltemperaturelist.splice(this.totaltemperaturelist.lenght, 0, array[i]);
            this.totaltemperaturedate.splice(this.totaltemperaturedate.lenght, 0, array[i]);
            //// console.log(array[i]);
          }
        })
      }
      );
      this.service.getAmpereLineoci1().subscribe(data => {
        this.ampere = data;
        Object.values(this.ampere).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalamperelist.splice(this.totalamperelist.lenght, 0, array[i]);
            this.totalamperedate.splice(this.totalamperedate.lenght, 0, array[i]);
            //// console.log(array[i]);
          }
        })
      }
      );
      this.service.getVibrationLineoci1().subscribe(data => {
        this.vibration = data;
        Object.values(this.vibration).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalvibrationlist.splice(this.totalvibrationlist.lenght, 0, array[i]);
            this.totalvibrationdate.splice(this.totalvibrationdate.lenght, 0, array[i]);
            //// console.log(array[i]);
          }
        })
      }
      );
      this.service.getReadFinishTodayoci1().subscribe(data => {
        this.abnormal = data;
        Object.values(this.abnormal).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalabnormal.splice(this.totalabnormal.lenght, 0, array[i]);
          }

          // // console.log(this.findingpending2);
        })
      }
      );
      this.service.getReadFinishTodayoci1().subscribe(data => {
        this.totalfinishtoday = data;
        Object.values(this.totalfinishtoday).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
          }
          //// console.log(array.length);

          for (let i = 0; i < this.totalfinishtoday2.length; i++) {
            this.headertitle[i] = this.totalfinishtoday2[i].test_name;
            this.devicename[i] = this.totalfinishtoday2[i].device_name;
            this.statusdevice[i] = this.totalfinishtoday2[i].status;
          }
          this.uniqueChars = [...new Set(this.headertitle)];
          this.uniqueChars2 = [...new Set(this.devicename)];
          // console.log(this.totalfinishtoday2);
          //// console.log(this.statusdevice);


          // // console.log(this.findingpending2);
        })
      }
      );
      this.service.getReadunsatissunacoci1().subscribe(data => {
        this.unsatis = data;
        Object.values(this.unsatis).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.unsatis2.splice(this.unsatis2.lenght, 0, array[0]);
          for (let elem of this.unsatis2) {
            this.totalunsatis = elem.total;
          }
        })
      }
      );
      this.service.getReadGoodAndSatisoci1().subscribe(data => {
        this.goodsatis = data;
        Object.values(this.goodsatis).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.goodsatis2.splice(this.goodsatis2.lenght, 0, array[i]);
          }
          for (let elem of this.goodsatis2) {
            if (elem.status == 'Good') {
              this.good += 1;
            } else if (elem.status == 'Satisfactory') {
              this.satis += 1;
            } else if (elem.status == 'Unsatisfactory') {
              this.unsatisf += 1;
            } else if (elem.status == 'Unacceptable') {
              this.unacc += 1;
            }
            //// console.log(this.good);

          }
        })
      }
      );
      this.service.getReadPdmFinishoci1().subscribe(data => {
        this.finish = data;
        Object.values(this.finish).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.finish2.splice(this.finish2.lenght, 0, array[i]);
          }
          for (let elem of this.finish2) {
            this.totalfinish = elem.total;
          }
        })
      }
      );
      this.service.getReadTotalPdmAssetoci1().subscribe(data => {
        this.asset = data;
        Object.values(this.asset).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.asset2.splice(this.asset2.lenght, 0, array[0]);
          for (let elem of this.asset2) {
            this.totalasset = elem.total;
          }
        })
      }
      );
      var count = 0;
      var count2 = 0;
      var a = setInterval(() => {
        count++;
        if (this.totalasset != null) {
          var b = setInterval(() => {
            count2++;
            this.coba = new Chart('donut', {
              type: 'doughnut',
              data: {
                labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
                datasets: [{
                  label: '# of Votes',
                  data: [this.good, this.satis, this.unsatisf, this.unacc],
                  backgroundColor: [
                    'green',
                    'rgb(230, 230, 0)',
                    'orange',
                    'red',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                  ],
                  borderWidth: 1
                }]
              },
            });
            if (count2 = 1) {
              clearInterval(b);
            }
          }, 50);
          this.spinner.hide();
          this.resolved = true;
          clearInterval(a);
        } else {
          // this.spinner.show();
          this.deskripsi = 'Reconnect To Server';
          this.spinner.show();
          setInterval (() =>{
            window.location.reload();
          },2000);
        }
        if (count = 1) {
          clearInterval(a);
        }
      }, 750);
    });
    //// console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
