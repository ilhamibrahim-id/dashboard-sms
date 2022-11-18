import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';
import { TableUtil } from "../services/tabelUtil";
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-pdm-m-oci1',
  templateUrl: './pdm-m-oci1.component.html',
  styleUrls: ['./pdm-m-oci1.component.css']
})
export class PdmMOci1Component implements OnInit {
  currentDate = new Date();

  constructor(private service: CountService, private spinner: NgxSpinnerService,private captureService: NgxCaptureService) { }
  public resolved: boolean = false;
  public exportdata: boolean = false;
  @ViewChild('screen', { static: true }) screen: any;
  good: number = 0;
  satis: number = 0;
  unsatisf: number = 0;
  itemsPerPage: number = 0;
  searchText: any;
  searchDate: any = moment().format("YYYY-MM-DD");
  searchText2: any;
  currentPage: number = 1;
  public img = "";
  imgBase64 = '';
  @ViewChild("ss")
  taptap!: ElementRef;
  capture() {
    this.captureService
      .getImage(this.taptap.nativeElement, true)
      .subscribe((img:any) => {
        this.imgBase64 = img;
        this.downloadJson();
      });
  }

  downloadJson() {
    var element = document.createElement('a');
    element.setAttribute('href', this.imgBase64);
    element.setAttribute('download', 'reportingdaily.png');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
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
  funlocabnormaldate: any;
  funloclist: any = [];
  temperaturelist: any = [];
  temperaturedate: any = [];
  vibrationlist: any = [];
  vibrationdate: any = [];
  amperelist: any = [];
  amperedate: any = [];
  showPaginate: number = 5;
  showPaginate2: number = 5;
  abnormalasset: object = {};
  abnormalassetlist: any = [];
  ampereR: any = [];
  ampereS: any = [];
  ampereT: any = [];
  ampereDate: any = [];
  vibration2H: any = [];
  vibrationCF: any = [];
  vibrationDate: any = [];
  temperatureThermal: any = [];
  temperatureDate: any = [];
  @ViewChild("printsection")
  myNameElem!: ElementRef;
  notepdm: object = {};
  notepdmlist: any = [];
  picture: any;
  note: any;
  private goodsatisoci1:any;
  private pdmfinish:any;
  private finishtoday:any;
  private finishabnormal: any;
  private notepdmunsub:any;
  private temperaturelinesub:any;
  private amperesub: any;
  private vibtrationsub: any;
  private totalassetsub: any;
  filterMetadata = { count: 0 };
  filtre: any;
  isNumber(value: any) {
    return Number.isNaN(value);
  }
  public toFloat(value: string): number {
    return parseFloat(value);
 }
  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }
  date(masukandate: HTMLInputElement){
    //console.log(moment(masukandate.value).format("DD-MM-YYYY"));
    this.currentPage = 1;
    this.searchDate = masukandate.value;
  }
  generatePaginate() {
    this.showPaginate = this.totalfinishtoday2.length;
    this.showPaginate2 = this.abnormalassetlist.length;
    this.currentPage = 1;
    this.currentPage2 = 1;
    this.exportdata = !this.exportdata;
  }
  done() {
    this.exportdata = !this.exportdata;
    this.showPaginate = 5;
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
  }
  exportTable() {
    TableUtil.exportTableToExcel("prinsection");
    this.showPaginate = 5;
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
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
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
    popupWin.document.close();
  }
  data($event: any,$event2 : any) {
    if(this.coba != null && this.coba2 != null && this.coba3 != null){
      this.coba.destroy();
      this.coba2.destroy();
      this.coba3.destroy();
    }
    this.note = '';
    this.picture = '';
    this.temperaturelist = [];
    this.amperelist = [];
    this.vibrationlist = [];
    this.ampereDate = [];
    this.vibrationDate = [];
    this.temperatureDate = [];
    this.ampereR = [];
    this.ampereS = [];
    this.ampereT = [];
    this.vibration2H = [];
    this.vibrationCF = [];
    this.temperatureThermal = [];
    this.funloc = $event;
    this.funlocabnormaldate = $event2;
    var countagain = 0;

    for (let i = 0; i < this.notepdmlist.length; i++) {
      if (this.notepdmlist[i].device_name === this.funloc && this.notepdmlist[i].do_date === $event2) {
        this.note = this.notepdmlist[i].note;
        this.picture = 'http://192.168.9.47/plan_pdm/files/' + this.notepdmlist[i].picture;
        break;
      }
    }


    for (let i = 0; i < this.totaltemperaturelist.length; i++) {
      if (this.totaltemperaturelist[i].device_name === this.funloc) {
        this.temperaturelist.splice(this.temperaturelist.lenght, 0, this.totaltemperaturelist[i]);
      }
    }
    this.temperaturelist = this.temperaturelist.filter(function (e: any) { return e != null; });
    //console.log(this.temperaturelist);

    for (let i = 0; i < this.temperaturelist.length; i++) {
      if (this.temperaturelist[i].test_name === 'Thermal') {
        this.temperatureThermal.splice(this.temperatureThermal.lenght, 0, this.temperaturelist[i].value);
        this.temperatureDate.splice(this.temperatureDate.lenght, 0, this.temperaturelist[i].do_date);
      }
    }
    //console.log(this.temperatureDate);


    for (let i = 0; i < this.totalamperelist.length; i++) {
      if (this.totalamperelist[i].device_name === this.funloc) {
        this.amperelist.splice(this.amperelist.lenght, 0, this.totalamperelist[i]);
      }
    }
    this.amperelist = this.amperelist.filter(function (e: any) { return e != null; });
    for (let i = 0; i < this.amperelist.length; i++) {
      if (this.amperelist[i].test_name === 'R') {
        this.ampereR.splice(this.ampereR.lenght, 0, this.amperelist[i].value);
        this.ampereDate.splice(this.ampereDate.lenght, 0, this.amperelist[i].do_date);
      } else if (this.amperelist[i].test_name === 'S') {
        this.ampereS.splice(this.ampereS.lenght, 0, this.amperelist[i].value);
      } else if (this.amperelist[i].test_name === 'T') {
        this.ampereT.splice(this.ampereT.lenght, 0, this.amperelist[i].value);
      }
    }


    for (let i = 0; i < this.totalvibrationlist.length; i++) {
      if (this.totalvibrationlist[i].device_name === this.funloc) {
        this.vibrationlist.splice(this.vibrationlist.lenght, 0, this.totalvibrationlist[i]);
      }
    }

    this.vibrationlist = this.vibrationlist.filter(function (e: any) { return e != null; });
    for (let i = 0; i < this.vibrationlist.length; i++) {
      if (this.vibrationlist[i].test_name === '2H') {
        this.vibration2H.splice(this.vibration2H.lenght, 0, this.vibrationlist[i].value);
        this.vibrationDate.splice(this.vibrationDate.lenght, 0, this.vibrationlist[i].do_date);
      } else if (this.vibrationlist[i].test_name === 'CF+ (2H)') {
        this.vibrationCF.splice(this.vibrationCF.lenght, 0, this.vibrationlist[i].value);
      }
    }
    var dataVibration = {
      labels: this.vibrationDate,
      datasets: [
        {
          label: '2H',
          data: this.vibration2H,
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'CF+ 2H',
          data: this.vibrationCF,
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 6,
        },
      ],
    };
    var dataAmpere = {
      labels: this.ampereDate,
      datasets: [
        {
          label: 'R',
          data: this.ampereR,
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'S',
          data: this.ampereS,
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 7,
        },
        {
          label: 'T',
          data: this.ampereT,
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
          lineTension: 0,
          radius: 9,
        },
      ], options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
    var dataTemperature = {
      labels: this.temperatureDate,
      datasets: [
        {
          label: 'Thermal',
          data: this.temperatureThermal,
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };
    var loadagain = setInterval(() => {
      countagain++;;
      this.coba = new Chart('dum', {
        type: 'line',
        data: dataVibration,
      }
      );
      this.coba2 = new Chart('dumdum', {
        type: 'line',
        data: dataAmpere,
      });
      this.coba3 = new Chart('dumdumdum', {
        type: 'line',
        data: dataTemperature,
      });
      if (countagain == 1) {
        clearInterval(loadagain);
      }
    }, 500);
  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);

    this.loaddata = new Promise(resolve => {
      this.notepdmunsub = this.service.getNotePdm().subscribe(data => {
        this.notepdm = data;
        Object.values(this.notepdm).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.notepdmlist.splice(this.notepdmlist.lenght, 0, array[i]);
          }
        })

      }
      );
      this.finishabnormal = this.service.getReadFinishTodayoci1abnormal().subscribe(data => {
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
      this.temperaturelinesub = this.service.getTemperatureLineoci1().subscribe(data => {
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
      this.amperesub = this.service.getAmpereLineoci1().subscribe(data => {
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
      this.vibtrationsub = this.service.getVibrationLineoci1().subscribe(data => {
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
      this.finishtoday = this.service.getReadFinishTodayoci1().subscribe(data => {
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
        })
      }
      );
      this.goodsatisoci1 = this.service.getReadGoodAndSatisoci1().subscribe(data => {
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
      this.pdmfinish = this.service.getReadPdmFinishoci1().subscribe(data => {
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
      this.totalassetsub = this.service.getReadTotalPdmAssetoci1().subscribe(data => {
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
          this.goodsatisoci1.unsubscribe();
          this.pdmfinish.unsubscribe();
          this.finishtoday.unsubscribe();
          this.finishabnormal.unsubscribe();
          this.notepdmunsub.unsubscribe();
          this.temperaturelinesub.unsubscribe();
          this.amperesub.unsubscribe();
          this.vibtrationsub.unsubscribe();
          this.totalassetsub.unsubscribe();
          clearInterval(a);
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
