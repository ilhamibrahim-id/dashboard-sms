import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  public resolved: boolean = false;
  deskripsi: any = 'Loading..';
  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();
    setInterval(() => {
      this.spinner.hide();
      this.resolved = true;
    },500);
  }
  name: any;
  email: any;
  pesan: any;
  sukses: any;
  public  sendEmail(e: Event) {
    if(this.name == null || this.email == null || this.pesan == null){
      alert('Please fill in the blank data');
      return;
    } else {
    e.preventDefault();
    emailjs.sendForm('service_f8er4jj', 'template_le007ag', e.target as HTMLFormElement, 'Pz1kVyNAMBldwqz7E')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.name = null;
        this.pesan = null;
        this.email = null;
        this.sukses = 'Your Message Has Been Sent To otsuka.ilhamibrahim@gmail.com';
      }, (error) => {
        console.log(error.text);
      });
    }
  }

}