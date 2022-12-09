import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-grease',
  templateUrl: './grease.component.html',
  styleUrls: ['./grease.component.css']
})
export class GreaseComponent implements OnInit {
  src: any;
  public resolved: boolean = false;
  private greaseproduct: any;
  grease: object = {};
  greaselist: any = [];
  loaddata: any;
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.greaseproduct = this.service.getGreaseProduct().subscribe(data => {
      this.grease = data;
      Object.values(this.grease).forEach(data => {
        // // console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });

        // // console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.greaselist.splice(this.greaselist.lenght, 0, array[i]);
        }
      })
    }
    );
    var count = 0;
    var a = setInterval(() => {
      count++;
      if(this.greaselist.length > 0){
        // console.log(this.greaselist);

        this.spinner.hide();
        this.resolved = true;
      } else {
        this.deskripsi = 'Reconnect To Server';
        this.greaseproduct.unsubscribe();
        this.greaseproduct.unsubscribe();
        this.ngOnInit();
      }
      if (count = 1){
        clearInterval(a);
      }
    },750);
  });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
  getpdf(link: any) {
    window.open("http://192.168.9.47/kluber_lubrication/files/" + link, "_blank");
  }


}
