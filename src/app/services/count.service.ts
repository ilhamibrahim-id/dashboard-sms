import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private url = 'http://localhost:3000/totalf';
  private urlpendingexecute = 'http://localhost:3000/totalreadpendingexecute';
  private urlreadyexecute = 'http://localhost:3000/totalreadreadyexecute';
  private urlfinishexecute = 'http://localhost:3000/totalreadfinishexecute';
  private urltotalpdmasset = 'http://localhost:3000/totalpdmasset';
  private urltotalpdmassetoci1 = 'http://localhost:3000/totalpdmassetoci1';
  private urltotalpdmassetoci2 = 'http://localhost:3000/totalpdmassetoci2';
  private urltotalpdmassetfsb = 'http://localhost:3000/totalpdmassetfsb';
  private urltotalpdmfinish = 'http://localhost:3000/totalreadfinishpdm';
  private urltotalpdmfinishoci1 = 'http://localhost:3000/totalreadfinishpdmoci1';
  private urltotalpdmfinishoci2 = 'http://localhost:3000/totalreadfinishpdmoci2';
  private urltotalpdmfinishfsb = 'http://localhost:3000/totalreadfinishpdmfsb';
  private urltotalgoodandsatis = 'http://localhost:3000/totalgoodandsatis';
  private urltotalgoodandsatisoci1 = 'http://localhost:3000/totalgoodandsatisoci1';
  private urltotalgoodandsatisoci2 = 'http://localhost:3000/totalgoodandsatisoci2';
  private urltotalgoodandsatisfsb = 'http://localhost:3000/totalgoodandsatisfsb';
  private urltotalunsatisunac = 'http://localhost:3000/totalunsatisunac';
  private urltotalunsatisunacoci1 = 'http://localhost:3000/totalunsatisunacoci1';
  private urltotalunsatisunacoci2 = 'http://localhost:3000/totalunsatisunacoci2';
  private urltotalunsatisunacfsb = 'http://localhost:3000/totalunsatisunacfsb';
  private urltotalassetoci1 = 'http://localhost:3000/totalasetoci1';
  private urltotalassetoci2 = 'http://localhost:3000/totalasetoci2';
  private urltotalfsb = 'http://localhost:3000/totalasetfsb';
  private urloci1good = 'http://localhost:3000/totaloci1good';
  private urloci1satis = 'http://localhost:3000/totaloci1satis';
  private urloci1unsatis = 'http://localhost:3000/totaloci1unsatis';
  private urloci1unacc = 'http://localhost:3000/totaloci1unacc';
  private urloci2good = 'http://localhost:3000/totaloci2good';
  private urloci2satis = 'http://localhost:3000/totaloci2satis';
  private urloci2unsatis = 'http://localhost:3000/totaloci2unsatis';
  private urloci2unacc = 'http://localhost:3000/totaloci2unacc';
  private urlfsbgood = 'http://localhost:3000/totalfsbgood';
  private urlfsbsatis = 'http://localhost:3000/totalfsbsatis';
  private urlfsbunsatis = 'http://localhost:3000/totalfsbunsatis';
  private urlfsbunacc = 'http://localhost:3000/totalfsbunacc';
  private urlTotalFindingM = 'http://localhost:3000/totalfindingm';
  private urlTotalPendingFindingM = 'http://localhost:3000/totalpendingexecutem';
  private urlTotalReadyFindingM = 'http://localhost:3000/totalreadyexecutem';
  private urlTotalFinishFindingM = 'http://localhost:3000/totalfinishexecutem';
  private urlFindingPending = 'http://localhost:3000/findingpending';
  private urlTotalLevel = 'http://localhost:3000/levelam';
  private urlTotalFindingMoci2 = 'http://localhost:3000/totalfindingmoci2';
  private urlTotalPendingFindingMoci2 = 'http://localhost:3000/totalpendingexecutemoci2';
  private urlTotalReadyFindingMoci2 = 'http://localhost:3000/totalreadyexecutemoci2';
  private urlTotalFinishFindingMoci2 = 'http://localhost:3000/totalfinishexecutemoci2';
  private urlFindingPendingoci2 = 'http://localhost:3000/findingpendingoci2';
  private urlTotalLeveloci2 = 'http://localhost:3000/levelamoci2';
  private urlTotalFindingMfsb = 'http://localhost:3000/totalfindingmfsb';
  private urlTotalPendingFindingMfsb = 'http://localhost:3000/totalpendingexecutemfsb';
  private urlTotalReadyFindingMfsb = 'http://localhost:3000/totalreadyexecutemfsb';
  private urlTotalFinishFindingMfsb = 'http://localhost:3000/totalfinishexecutemfsb';
  private urlFindingPendingfsb = 'http://localhost:3000/findingpendingfsb';
  private urlTotalLevelfsb = 'http://localhost:3000/levelamfsb';
  private urlFinishJobTodayoci1 = 'http://localhost:3000/finishtodaylistoci1';
  private urlFinishJobTodayoci2 = 'http://localhost:3000/finishtodaylistoci2';
  private urlFinishJobTodayfsb = 'http://localhost:3000/finishtodaylistfsb';
  private urlvibrationlineoci1 = 'http://localhost:3000/vibrationlineoci1';
  private urlvibrationlineoci2 = 'http://localhost:3000/vibrationlineoci2';
  private urlvibrationlinefsb = 'http://localhost:3000/vibrationlinefsb';
  private urlamperelineoci1 = 'http://localhost:3000/amperelineoci1';
  private urlamperelineoci2 = 'http://localhost:3000/amperelineoci2';
  private urlamperelinefsb = 'http://localhost:3000/amperelinefsb';
  private urltemperaturelineoci1 = 'http://localhost:3000/temperaturelineoci1';
  private urltemperaturelineoci2 = 'http://localhost:3000/temperaturelineoci2';
  private urltemperaturelinefsb = 'http://localhost:3000/temperaturelinefsb';
  private urlKategori = 'http://localhost:3000/kategori';

  constructor(private httpClient: HttpClient) { }
  getTemperatureLineoci1(){
    return this.httpClient.get(this.urltemperaturelineoci1);
  }
  getTemperatureLineoci2(){
    return this.httpClient.get(this.urltemperaturelineoci2);
  }
  getTemperatureLinefsb(){
    return this.httpClient.get(this.urltemperaturelinefsb);
  }
  getAmpereLineoci1(){
    return this.httpClient.get(this.urlamperelineoci1);
  }
  getAmpereLineoci2(){
    return this.httpClient.get(this.urlamperelineoci2);
  }
  getAmpereLinefsb(){
    return this.httpClient.get(this.urlamperelinefsb);
  }
  getVibrationLinefsb(){
    return this.httpClient.get(this.urlvibrationlinefsb);
  }
  getVibrationLineoci2(){
    return this.httpClient.get(this.urlvibrationlineoci2);
  }
  getVibrationLineoci1(){
    return this.httpClient.get(this.urlvibrationlineoci1);
  }
  getCountTotalFinding(){
    return this.httpClient.get(this.url);
  }
  getReadPendingExecute(){
    return this.httpClient.get(this.urlpendingexecute);
  }
  getReadReadyExecute(){
    return this.httpClient.get(this.urlreadyexecute);
  }
  getReadFinishExecute(){
    return this.httpClient.get(this.urlfinishexecute);
  }
  getReadTotalPdmAsset(){
    return this.httpClient.get(this.urltotalpdmasset);
  }
  getReadTotalPdmAssetoci1(){
    return this.httpClient.get(this.urltotalpdmassetoci1);
  }
  getReadTotalPdmAssetoci2(){
    return this.httpClient.get(this.urltotalpdmassetoci2);
  }
  getReadTotalPdmAssetfsb(){
    return this.httpClient.get(this.urltotalpdmassetfsb);
  }
  getReadPdmFinish(){
    return this.httpClient.get(this.urltotalpdmfinish);
  }
  getReadPdmFinishoci1(){
    return this.httpClient.get(this.urltotalpdmfinishoci1);
  }
  getReadPdmFinishoci2(){
    return this.httpClient.get(this.urltotalpdmfinishoci2);
  }
  getReadPdmFinishfsb(){
    return this.httpClient.get(this.urltotalpdmfinishfsb);
  }
  getReadGoodAndSatis(){
    return this.httpClient.get(this.urltotalgoodandsatis);
  }
  getReadGoodAndSatisoci1(){
    return this.httpClient.get(this.urltotalgoodandsatisoci1);
  }
  getReadGoodAndSatisoci2(){
    return this.httpClient.get(this.urltotalgoodandsatisoci2);
  }
  getReadGoodAndSatisfsb(){
    return this.httpClient.get(this.urltotalgoodandsatisfsb);
  }
  getReadunsatissunac(){
    return this.httpClient.get(this.urltotalunsatisunac);
  }
  getReadunsatissunacoci1(){
    return this.httpClient.get(this.urltotalunsatisunacoci1);
  }
  getReadunsatissunacoci2(){
    return this.httpClient.get(this.urltotalunsatisunacoci2);
  }
  getReadunsatissunacfsb(){
    return this.httpClient.get(this.urltotalunsatisunacfsb);
  }
  getTotalAssetOci1(){
    return this.httpClient.get(this.urltotalassetoci1);
  }
  getTotalAssetOci2(){
    return this.httpClient.get(this.urltotalassetoci2);
  }
  getTotalAssetFsb(){
    return this.httpClient.get(this.urltotalfsb);
  }
  getTotalOci1Good(){
    return this.httpClient.get(this.urloci1good);
  }
  getTotalOci1Satis () {
    return this.httpClient.get(this.urloci1satis);
  }
  getTotalOci1UnSatis () {
    return this.httpClient.get(this.urloci1unsatis);
  }
  getTotalOci1Unacc(){
    return this.httpClient.get(this.urloci1unacc);
  }
  getTotalOci2Good(){
    return this.httpClient.get(this.urloci2good);
  }
  getTotalOci2Satis () {
    return this.httpClient.get(this.urloci2satis);
  }
  getTotalOci2UnSatis () {
    return this.httpClient.get(this.urloci2unsatis);
  }
  getTotalOci2Unacc(){
    return this.httpClient.get(this.urloci2unacc);
  }
  getTotalFsbGood(){
    return this.httpClient.get(this.urlfsbgood);
  }
  getTotalFsbSatis () {
    return this.httpClient.get(this.urlfsbsatis);
  }
  getTotalFsbUnSatis () {
    return this.httpClient.get(this.urlfsbunsatis);
  }
  getTotalFsbUnacc(){
    return this.httpClient.get(this.urlfsbunacc);
  }
  getTotalFindingM () {
    return this.httpClient.get(this.urlTotalFindingM);
  }
  getTotalPendingFindingM () {
    return this.httpClient.get(this.urlTotalPendingFindingM);
  }
  getTotalReadyFindingM () {
    return this.httpClient.get(this.urlTotalReadyFindingM);
  }
  getTotalFinsihFindingM () {
    return this.httpClient.get(this.urlTotalFinishFindingM);
  }
  getReadFindingPending(){
    return this.httpClient.get(this.urlFindingPending);
  }
  getReadLevelTotal(){
    return this.httpClient.get(this.urlTotalLevel);
  }
  getTotalFindingMoci2 () {
    return this.httpClient.get(this.urlTotalFindingMoci2);
  }
  getTotalPendingFindingMoci2 () {
    return this.httpClient.get(this.urlTotalPendingFindingMoci2);
  }
  getTotalReadyFindingMoci2 () {
    return this.httpClient.get(this.urlTotalReadyFindingMoci2);
  }
  getTotalFinsihFindingMoci2 () {
    return this.httpClient.get(this.urlTotalFinishFindingMoci2);
  }
  getReadFindingPendingoci2(){
    return this.httpClient.get(this.urlFindingPendingoci2);
  }
  getReadLevelTotaloci2(){
    return this.httpClient.get(this.urlTotalLeveloci2);
  }
  getTotalFindingMfsb () {
    return this.httpClient.get(this.urlTotalFindingMfsb);
  }
  getTotalPendingFindingMfsb () {
    return this.httpClient.get(this.urlTotalPendingFindingMfsb);
  }
  getTotalReadyFindingMfsb () {
    return this.httpClient.get(this.urlTotalReadyFindingMfsb);
  }
  getTotalFinsihFindingMfsb () {
    return this.httpClient.get(this.urlTotalFinishFindingMfsb);
  }
  getReadFindingPendingfsb(){
    return this.httpClient.get(this.urlFindingPendingfsb);
  }
  getReadLevelTotalfsb(){
    return this.httpClient.get(this.urlTotalLevelfsb);
  }
  getReadFinishTodayoci1(){
    return this.httpClient.get(this.urlFinishJobTodayoci1);
  }
  getReadFinishTodayoci2(){
    return this.httpClient.get(this.urlFinishJobTodayoci2);
  }
  getReadFinishTodayfsb(){
    return this.httpClient.get(this.urlFinishJobTodayfsb);
  }
  getKategori(){
    return this.httpClient.get(this.urlKategori);
  }
}
