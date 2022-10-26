import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-pdm-m-fsb',
  templateUrl: './pdm-m-fsb.component.html',
  styleUrls: ['./pdm-m-fsb.component.css']
})
export class PdmMFsbComponent implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
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
  good: number = 0;
  satis: number = 0;
  unsatisf: number = 0;
  unacc: number = 0;
  coba: any;
  donut: any = [];
  coba2: any;
  coba3: any;
  asset: object = {};
  asset2: any = [];
  totalabnormallisttrue: any = [];
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
  public loaddata: any;
  deskripsi: any = 'Loading..';
  funloc: any;
  funloclist: any = [];
  temperaturelist: any = [];
  temperaturedate: any = [];
  vibrationlist: any = [];
  vibrationdate: any = [];
  amperelist: any = [];
  amperedate: any = [];
  data($event: any) {
    //// console.log($event);
    this.totaltemperaturedate = [];
    this.totaltemperaturelist = [];
    this.totalamperedate = [];
    this.totalamperelist = [];
    this.totalvibrationdate = [];
    this.totalvibrationlist = [];
    this.temperaturelist = [];
    this.temperaturedate = [];
    this.amperelist = [];
    this.amperedate = [];
    this.vibrationlist = [];
    this.vibrationdate = [];
    this.funloc = $event;
    // console.log(this.funloc);
    this.service.getTemperatureLinefsb().subscribe(data => {
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
        //console.log(this.totaltemperaturelist);
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
        //console.log(this.temperaturelist);

        // // console.log(this.vibration);
        //// console.log(this.totalvibrationlist);
      })
    }
    );
    this.service.getAmpereLinefsb().subscribe(data => {
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
        this.amperelist = this.temperaturelist.filter(function (e: any) { return e != null; });
        this.amperedate = this.temperaturedate.filter(function (e: any) { return e != null; });
        // // console.log(this.vibration);
        //// console.log(this.totalvibrationlist);
      })
    }
    );
    this.service.getVibrationLinefsb().subscribe(data => {
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
        console.log(this.totalvibrationlist);

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
        // // console.log(this.vibration);
        // // console.log(this.totalvibrationlist);
      })
    }
    );
    var countagain = 0;
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
            label: 'Ampere',
            data: this.amperelist,
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
      this.coba3 = new Chart('dumdumdum', {
        type: 'line',
        data: {
          labels: this.temperaturedate,
          datasets: [{
            label: 'Ampere',
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
    // for (let i = 0; i < this.orderarr.length; i++) {
    //   if(this.orderarr[i].func_loc === this.funloc){
    //   this.funloclist[i] = this.orderarr[i];
    //   }
    // }
    // this.funloclist = this.funloclist.filter(function (e: any) { return e != null; });
    // // console.log(this.funloclist);
  }
  async ngOnInit(): Promise<void> {
    this.loaddata = new Promise(resolve => {
      this.service.getReadFinishTodayfsb().subscribe(data => {
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
          for (var i = 0; i < this.totalabnormal.length; i++) {
            if (this.totalabnormal[i].length === 0) {
              continue;
            } else {
              if (this.totalabnormal[i].Stat === 'Unsatisfactory' || this.totalabnormal[i].Stat === 'Unacceptable') {
                this.totalabnormallist[i] = this.totalabnormal[i];
                //this.totalabnormallist[i] = this.totalabnormal[i];
              }
            }
          }
          //// console.log(this.totalabnormal);
          this.totalabnormallisttrue = this.totalabnormallist.filter(function (e: any) { return e != null; });

          // // console.log(this.findingpending2);
        })
      }
      );
      this.service.getReadFinishTodayfsb().subscribe(data => {
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

          // // console.log(this.findingpending2);
        })
      }
      );
      this.service.getReadGoodAndSatisfsb().subscribe(data => {
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
            } else if (elem.status == 'Satisfactory'){
              this.satis += 1;
            } else if (elem.status == 'Unsatisfactory'){
              this.unsatisf += 1;
            } else if (elem.status == 'Unacceptable'){
              this.unacc += 1;
            }
            //// console.log(this.good);

          }
        })
      }
      );
      this.service.getReadPdmFinishfsb().subscribe(data => {
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
      this.service.getReadTotalPdmAssetfsb().subscribe(data => {
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
                  data: [this.good, this.satis, this.unsatisf,this.unacc],
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
            if (count2 = 3) {
              clearInterval(b);
            }
          }, 50);
          this.spinner.hide();
          this.resolved = true;
          //// console.log("3");
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
    //// console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
