import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CountService } from '../services/count.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tables',
  templateUrl: './add-tables.component.html',
  styleUrls: ['./add-tables.component.css']
})
export class AddTablesComponent implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService, private router: Router) { }
  machine: any;
  machineA: string = "Cap_Checker_OC1";
  nameA = new FormControl('');
  nameB: string | any;
  public loaddata: any;
  public resolved: boolean = false;

  refresh() {
    this.machine = this.service.bigFiveMachine;
  };

  insert() {
    // console.log(this.deviceA.value);
    if (this.nameA.value == "") {
      this.router.navigate(['/addtables']);
    } else {
      this.service.table = this.nameA.value;
      this.service.insertNewTable();
      this.service.getBigFive();
      this.refresh();
      location.reload();
    }
  }

  delete(value: any){
    // console.log(value);
    this.service.table = value;
    console.log(this.service.table);
    this.service.deleteTable();
    this.service.table = "";
    this.service.getBigFive();
    this.refresh();
  }

  async ngOnInit(): Promise<void> {
    this.loaddata = new Promise(resolve => {
      this.service.getBigFive();
      this.refresh();
    });
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

}
