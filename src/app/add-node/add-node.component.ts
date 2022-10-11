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
    console.log(this.listNode);
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
      this.service.getListNode();
      this.service.getBigFive();
      this.refresh();
    });
    // console.log(this.service.bigFiveByMachineValue);
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

}
