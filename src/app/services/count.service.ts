import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';

var api = 'http://192.168.152.47:3000/';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor(private httpClient: HttpClient) { }
  public bigFive: any = [];
  public bigFiveByMachine: any = [];
  public bigFiveByMachineName: any = [];
  public bigFiveByMachineValue: any = [];
  public bigFiveMachine: any = [];
  public bigFiveObject: object = {};
  getTemperatureLineoci1() {
    var url = api + "temperaturelineoci1";
    return this.httpClient.get(url);
  }
  getTemperatureLineoci2() {
    var url = api + "temperaturelineoci2";
    return this.httpClient.get(url);
  }
  getTemperatureLinefsb() {
    var url = api + "temperaturelinefsb";
    return this.httpClient.get(url);
  }
  getAmpereLineoci1() {
    var url = api + "amperelineoci1";
    return this.httpClient.get(url);
  }
  getAmpereLineoci2() {
    var url = api + "amperelineoci2";
    return this.httpClient.get(url);
  }
  getAmpereLinefsb() {
    var url = api + "amperelinefsb";
    return this.httpClient.get(url);
  }
  getVibrationLinefsb() {
    var url = api + "vibrationlinefsb";
    return this.httpClient.get(url);
  }
  getVibrationLineoci2() {
    var url = api + "vibrationlineoci2";
    return this.httpClient.get(url);
  }
  getVibrationLineoci1() {
    var url = api + "vibrationlineoci1";
    return this.httpClient.get(url);
  }
  getCountTotalFinding() {
    var url = api + "totalf";
    return this.httpClient.get(url);
  }
  getReadPendingExecute() {
    var url = api + "totalreadpendingexecute";
    return this.httpClient.get(url);
  }
  getReadReadyExecute() {
    var url = api + "totalreadreadyexecute";
    return this.httpClient.get(url);
  }
  getReadFinishExecute() {
    var url = api + "totalreadfinishexecute";
    return this.httpClient.get(url);
  }
  getReadTotalPdmAsset() {
    var url = api + "totalpdmasset";
    return this.httpClient.get(url);
  }
  getReadTotalPdmAssetoci1() {
    var url = api + "totalpdmassetoci1";
    return this.httpClient.get(url);
  }
  getReadTotalPdmAssetoci2() {
    var url = api + "totalpdmassetoci2";
    return this.httpClient.get(url);
  }
  getReadTotalPdmAssetfsb() {
    var url = api + "totalpdmassetfsb";
    return this.httpClient.get(url);
  }
  getReadPdmFinish() {
    var url = api + "totalreadfinishpdm";
    return this.httpClient.get(url);
  }
  getReadPdmFinishoci1() {
    var url = api + "totalreadfinishpdmoci1";
    return this.httpClient.get(url);
  }
  getReadPdmFinishoci2() {
    var url = api + "totalreadfinishpdmoci2";
    return this.httpClient.get(url);
  }
  getReadPdmFinishfsb() {
    var url = api + "totalreadfinishpdmfsb";
    return this.httpClient.get(url);
  }
  getReadGoodAndSatis() {
    var url = api + "totalgoodandsatis";
    return this.httpClient.get(url);
  }
  getReadGoodAndSatisoci1() {
    var url = api + "totalgoodandsatisoci1";
    return this.httpClient.get(url);
  }
  getReadGoodAndSatisoci2() {
    var url = api + "totalgoodandsatisoci2";
    return this.httpClient.get(url);
  }
  getReadGoodAndSatisfsb() {
    var url = api + "totalgoodandsatisfsb";
    return this.httpClient.get(url);
  }
  getReadunsatissunac() {
    var url = api + "totalunsatisunac";
    return this.httpClient.get(url);
  }
  getReadunsatissunacoci1() {
    var url = api + "totalunsatisunacoci1";
    return this.httpClient.get(url);
  }
  getReadunsatissunacoci2() {
    var url = api + "totalunsatisunacoci2";
    return this.httpClient.get(url);
  }
  getReadunsatissunacfsb() {
    var url = api + "totalunsatisunacfsb";
    return this.httpClient.get(url);
  }
  getTotalAssetOci1() {
    var url = api + "totalasetoci1";
    return this.httpClient.get(url);
  }
  getTotalAssetOci2() {
    var url = api + "totalasetoci2";
    return this.httpClient.get(url);
  }
  getTotalAssetFsb() {
    var url = api + "totalasetfsb";
    return this.httpClient.get(url);
  }
  getTotalOci1Good() {
    var url = api + "totaloci1good";
    return this.httpClient.get(url);
  }
  getTotalOci1Satis() {
    var url = api + "totaloci1satis";
    return this.httpClient.get(url);
  }
  getTotalOci1UnSatis() {
    var url = api + "totaloci1unsatis";
    return this.httpClient.get(url);
  }
  getTotalOci1Unacc() {
    var url = api + "totaloci1unacc";
    return this.httpClient.get(url);
  }
  getTotalOci2Good() {
    var url = api + "totaloci2good";
    return this.httpClient.get(url);
  }
  getTotalOci2Satis() {
    var url = api + "totaloci2satis";
    return this.httpClient.get(url);
  }
  getTotalOci2UnSatis() {
    var url = api + "totaloci2unsatis";
    return this.httpClient.get(url);
  }
  getTotalOci2Unacc() {
    var url = api + "totaloci2unacc";
    return this.httpClient.get(url);
  }
  getTotalFsbGood() {
    var url = api + "totalfsbgood";
    return this.httpClient.get(url);
  }
  getTotalFsbSatis() {
    var url = api + "totalfsbsatis";
    return this.httpClient.get(url);
  }
  getTotalFsbUnSatis() {
    var url = api + "totalfsbunsatis";
    return this.httpClient.get(url);
  }
  getTotalFsbUnacc() {
    var url = api + "totalfsbunacc";
    return this.httpClient.get(url);
  }
  getTotalFindingM() {
    var url = api + "TotalFindingM";
    return this.httpClient.get(url);
  }
  getTotalPendingFindingM() {
    var url = api + "totalpendingexecutem";
    return this.httpClient.get(url);
  }
  getTotalReadyFindingM() {
    var url = api + "totalreadyexecutem";
    return this.httpClient.get(url);
  }
  getTotalFinsihFindingM() {
    var url = api + "totalfinishexecutem";
    return this.httpClient.get(url);
  }
  getReadFindingPending() {
    var url = api + "findingpending";
    return this.httpClient.get(url);
  }
  getReadLevelTotal() {
    var url = api + "levelam";
    return this.httpClient.get(url);
  }
  getTotalFindingMoci2() {
    var url = api + "TotalFindingMoci2";
    return this.httpClient.get(url);
  }
  getTotalPendingFindingMoci2() {
    var url = api + "totalpendingexecutemoci2";
    return this.httpClient.get(url);
  }
  getTotalReadyFindingMoci2() {
    var url = api + "totalreadyexecutemoci2";
    return this.httpClient.get(url);
  }
  getTotalFinsihFindingMoci2() {
    var url = api + "totalfinishexecutemoci2";
    return this.httpClient.get(url);
  }
  getReadFindingPendingoci2() {
    var url = api + "findingpendingoci2";
    return this.httpClient.get(url);
  }
  getReadLevelTotaloci2() {
    var url = api + "levelamoci2";
    return this.httpClient.get(url);
  }
  getTotalFindingMfsb() {
    var url = api + "TotalFindingMfsb";
    return this.httpClient.get(url);
  }
  getTotalPendingFindingMfsb() {
    var url = api + "totalpendingexecutemfsb";
    return this.httpClient.get(url);
  }
  getTotalReadyFindingMfsb() {
    var url = api + "totalreadyexecutemfsb";
    return this.httpClient.get(url);
  }
  getTotalFinsihFindingMfsb() {
    var url = api + "totalfinishexecutemfsb";
    return this.httpClient.get(url);
  }
  getReadFindingPendingfsb() {
    var url = api + "findingpendingfsb";
    return this.httpClient.get(url);
  }
  getReadLevelTotalfsb() {
    var url = api + "levelamfsb";
    return this.httpClient.get(url);
  }
  getReadFinishTodayoci1() {
    var url = api + "finishtodaylistoci1";
    return this.httpClient.get(url);
  }
  getReadFinishTodayoci2() {
    var url = api + "finishtodaylistoci2";
    return this.httpClient.get(url);
  }
  getReadFinishTodayfsb() {
    var url = api + "finishtodaylistfsb";
    return this.httpClient.get(url);
  }
  getKategori() {
    var url = api + "kategori";
    return this.httpClient.get(url);
  }
  getBigFive() {
    var url = api + "big5/get";
    this.httpClient.get(url).subscribe(data => {
      this.bigFiveObject = data;
      Object.values(this.bigFiveObject).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          // console.log(i)
          var arrayy = Object.keys(array[i + 1]).map(function (key) {
            return array[i + 1][key];
          });
          // console.log(arrayy);
          let data: object = {};
          for (let j = 0; j < arrayy.length; j++) {
            var arrayyy = Object.keys(arrayy[j]).map(function (key) {
              return arrayy[j][key];
            });
            // console.log(arrayyy);
            for (let k = 0; k < arrayyy.length; k++) {
              data = {
                name: array[i],
                device: arrayyy[k],
                total: arrayyy[k + 1]
              }
              this.bigFive.splice(this.bigFive.length, 0, data);
              k++;
            }
          }
          this.bigFiveMachine.splice(this.bigFiveMachine.length, 0, array[i]);
          i++;
        }
      })
    });
    // return this.httpClient.get(url);
  }

  getBigFiveByMachine(namee:String) {
    var url = api + "big5/getbyid";
    this.httpClient.post(url,{ name: namee }).subscribe(data => {
      this.bigFiveObject = data;
      Object.values(this.bigFiveObject).forEach(data => {
        // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
          var arrayy = Object.keys(array[i]).map(function (key) {
            return array[i][key];
          });
          const data = [
            arrayy[0],
            arrayy[1]
          ];
          this.bigFiveByMachine.splice(this.bigFiveByMachine.length, 0, data);
          this.bigFiveByMachineName.splice(this.bigFiveByMachineName.length, 0, arrayy[0]);
          this.bigFiveByMachineValue.splice(this.bigFiveByMachineValue.length, 0, arrayy[1]);
          // console.log(arrayy);
        }
      })
    });
    // return this.bigFiveByMachineName;
  }
};
