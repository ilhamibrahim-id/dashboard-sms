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
}
