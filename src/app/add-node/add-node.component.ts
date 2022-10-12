import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CountService } from '../services/count.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  itemsPerPage: number = 0;
  currentPage: number = 1;
  deskripsi: any = 'Loading..';
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  p: number = 1;
  constructor(private service: CountService, private spinner: NgxSpinnerService, private router: Router) { }
  machine: any;
  machineA: string = "Cap_Checker_OC1";
  deviceA = new FormControl('');
  nodeA = new FormControl('');
  descriptionA = new FormControl('');
  listNode: any = [];
  public loaddata: any;
  public resolved: boolean = false;

  refresh() {
    this.machine = this.service.bigFiveMachine;
    this.listNode = this.service.listNode;
    console.log(this.listNode.length);
  };

  changeTable(value: any) {
    console.log(value);
    this.machineA = value;
    this.refresh();
    // console.log(this.labels);
  }

  insert() {
    // console.log(this.deviceA.value);
    if (this.deviceA.value == "" || this.nodeA.value == "" || this.descriptionA.value == "") {
      this.router.navigate(['/addnode']);
    } else {
      this.service.device = this.deviceA.value;
      this.service.node = this.nodeA.value;
      this.service.description = this.descriptionA.value;
      this.service.machine = this.machineA;
      this.service.insertNewNode();
    }
  }

  async ngOnInit(): Promise<void> {
    this.loaddata = new Promise(resolve => {
      let count = 0;
      this.service.getListNode();
      this.service.getBigFive();
      this.refresh();
      var a = setInterval(() => {
        count++;
        if (this.listNode == 0) {
          this.deskripsi = 'Reconnect To Server';
          this.spinner.show();
          this.ngOnInit();
        } else {
          this.spinner.hide();
          this.resolved = true;
        }
        if (count = 1) {
          clearInterval(a);
        }
      }, 500);
    });
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

}
