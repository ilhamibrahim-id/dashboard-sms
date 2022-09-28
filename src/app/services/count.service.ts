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
  private urltotalpdmfinish = 'http://localhost:3000/totalreadfinishpdm';
  private urltotalgoodandsatis = 'http://localhost:3000/totalgoodandsatis';
  private urltotalunsatisunac = 'http://localhost:3000/totalunsatisunac'
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

  constructor(private httpClient: HttpClient) { }

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
  getReadPdmFinish(){
    return this.httpClient.get(this.urltotalpdmfinish);
  }
  getReadGoodAndSatis(){
    return this.httpClient.get(this.urltotalgoodandsatis);
  }
  getReadunsatissunac(){
    return this.httpClient.get(this.urltotalunsatisunac);
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
}
