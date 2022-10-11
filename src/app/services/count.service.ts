import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';

var api = 'http://192.168.152.47:3000/';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor(private httpClient: HttpClient) { }

  public bigFiveObject: object = {};
  public bigFive: any = [];
  public bigFiveByMachine: any = [];
  public bigFiveByMachineName: any = [];
  public bigFiveByMachineValue: any = [];
  public bigFiveMachine: any = [];

  public tableObject: object = {};
  public table: any = [];

  getTemperatureLineoci1() {
    return this.httpClient.get(api + "temperaturelineoci1");
  }

  getTemperatureLineoci2() {
    return this.httpClient.get(api + "temperaturelineoci2");
  }
  getTemperatureLinefsb() {
    return this.httpClient.get(api + "temperaturelinefsb");
  }
  getAmpereLineoci1() {
    return this.httpClient.get(api + "amperelineoci1");
  }
  getAmpereLineoci2() {
    return this.httpClient.get(api + "amperelineoci2");
  }
  getAmpereLinefsb() {
    return this.httpClient.get(api + "amperelinefsb");
  }
  getVibrationLinefsb() {
    return this.httpClient.get(api + "vibrationlinefsb");
  }
  getVibrationLineoci2() {
    return this.httpClient.get(api + "vibrationlineoci2");
  }
  getVibrationLineoci1() {
    return this.httpClient.get(api + "vibrationlineoci1");
  }
  getCountTotalFinding() {
    return this.httpClient.get(api + "totalf");
  }
  getReadPendingExecute() {
    return this.httpClient.get(api + "totalreadpendingexecute");
  }
  getReadReadyExecute() {
    return this.httpClient.get(api + "totalreadreadyexecute");
  }
  getReadFinishExecute() {
    return this.httpClient.get(api + "totalreadfinishexecute");
  }
  getReadTotalPdmAsset() {
    return this.httpClient.get(api + "totalpdmasset");
  }
  getReadTotalPdmAssetoci1() {
    return this.httpClient.get(api + "totalpdmassetoci1");
  }
  getReadTotalPdmAssetoci2() {
    return this.httpClient.get(api + "totalpdmassetoci2");
  }
  getReadTotalPdmAssetfsb() {
    return this.httpClient.get(api + "totalpdmassetfsb");
  }
  getReadPdmFinish() {
    return this.httpClient.get(api + "totalreadfinishpdm");
  }
  getReadPdmFinishoci1() {
    return this.httpClient.get(api + "totalreadfinishpdmoci1");
  }
  getReadPdmFinishoci2() {
    return this.httpClient.get(api + "totalreadfinishpdmoci2");
  }
  getReadPdmFinishfsb() {
    return this.httpClient.get(api + "totalreadfinishpdmfsb");
  }
  getReadGoodAndSatis() {
    return this.httpClient.get(api + "totalgoodandsatis");
  }
  getReadGoodAndSatisoci1() {
    return this.httpClient.get(api + "totalgoodandsatisoci1");
  }
  getReadGoodAndSatisoci2() {
    return this.httpClient.get(api + "totalgoodandsatisoci2");
  }
  getReadGoodAndSatisfsb() {
    return this.httpClient.get(api + "totalgoodandsatisfsb");
  }
  getReadunsatissunac() {
    return this.httpClient.get(api + "totalunsatisunac");
  }
  getReadunsatissunacoci1() {
    return this.httpClient.get(api + "totalunsatisunacoci1");
  }
  getReadunsatissunacoci2() {
    return this.httpClient.get(api + "totalunsatisunacoci2");
  }
  getReadunsatissunacfsb() {
    return this.httpClient.get(api + "totalunsatisunacfsb");
  }
  getTotalAssetOci1() {
    return this.httpClient.get(api + "totalasetoci1");
  }
  getTotalAssetOci2() {
    return this.httpClient.get(api + "totalasetoci2");
  }
  getTotalAssetFsb() {
    return this.httpClient.get(api + "totalasetfsb");
  }
  getTotalOci1Good() {
    return this.httpClient.get(api + "totaloci1good");
  }
  getTotalOci1Satis() {
    return this.httpClient.get(api + "totaloci1satis");
  }
  getTotalOci1UnSatis() {
    return this.httpClient.get(api + "totaloci1unsatis");
  }
  getTotalOci1Unacc() {
    return this.httpClient.get(api + "totaloci1unacc");
  }
  getTotalOci2Good() {
    return this.httpClient.get(api + "totaloci2good");
  }
  getTotalOci2Satis() {
    return this.httpClient.get(api + "totaloci2satis");
  }
  getTotalOci2UnSatis() {
    return this.httpClient.get(api + "totaloci2unsatis");
  }
  getTotalOci2Unacc() {
    return this.httpClient.get(api + "totaloci2unacc");
  }
  getTotalFsbGood() {
    return this.httpClient.get(api + "totalfsbgood");
  }
  getTotalFsbSatis() {
    return this.httpClient.get(api + "totalfsbsatis");
  }
  getTotalFsbUnSatis() {
    return this.httpClient.get(api + "totalfsbunsatis");
  }
  getTotalFsbUnacc() {
    return this.httpClient.get(api + "totalfsbunacc");
  }
  getTotalFindingM() {
    return this.httpClient.get(api + "TotalFindingM");
  }
  getTotalPendingFindingM() {
    return this.httpClient.get(api + "totalpendingexecutem");
  }
  getTotalReadyFindingM() {
    return this.httpClient.get(api + "totalreadyexecutem");
  }
  getTotalFinsihFindingM() {
    return this.httpClient.get(api + "totalfinishexecutem");
  }
  getReadFindingPending() {
    return this.httpClient.get(api + "findingpending");
  }
  getReadLevelTotal() {
    return this.httpClient.get(api + "levelam");
  }
  getTotalFindingMoci2() {
    return this.httpClient.get(api + "TotalFindingMoci2");
  }
  getTotalPendingFindingMoci2() {
    return this.httpClient.get(api + "totalpendingexecutemoci2");
  }
  getTotalReadyFindingMoci2() {
    return this.httpClient.get(api + "totalreadyexecutemoci2");
  }
  getTotalFinsihFindingMoci2() {
    return this.httpClient.get(api + "totalfinishexecutemoci2");
  }
  getReadFindingPendingoci2() {
    return this.httpClient.get(api + "findingpendingoci2");
  }
  getReadLevelTotaloci2() {
    return this.httpClient.get(api + "levelamoci2");
  }
  getTotalFindingMfsb() {
    return this.httpClient.get(api + "TotalFindingMfsb");
  }
  getTotalPendingFindingMfsb() {
    return this.httpClient.get(api + "totalpendingexecutemfsb");
  }
  getTotalReadyFindingMfsb() {
    return this.httpClient.get(api + "totalreadyexecutemfsb");
  }
  getTotalFinsihFindingMfsb() {
    return this.httpClient.get(api + "totalfinishexecutemfsb");
  }
  getReadFindingPendingfsb() {
    return this.httpClient.get(api + "findingpendingfsb");
  }
  getReadLevelTotalfsb() {
    return this.httpClient.get(api + "levelamfsb");
  }
  getReadFinishTodayoci1() {
    return this.httpClient.get(api + "finishtodaylistoci1");
  }
  getReadFinishTodayoci2() {
    return this.httpClient.get(api + "finishtodaylistoci2");
  }
  getReadFinishTodayfsb() {
    return this.httpClient.get(api + "finishtodaylistfsb");
  }
  getKategori() {
    return this.httpClient.get(api + "kategori");
  }
  getBigFive() {
    this.httpClient.get(api + "big5/get").subscribe(data => {
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
    this.bigFiveByMachine = [];
    this.bigFiveByMachineName = [];
    this.bigFiveByMachineValue = [];
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
