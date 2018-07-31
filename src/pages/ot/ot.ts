import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-ot',
  templateUrl: 'ot.html',
})
export class OtPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtPage');
  }
  pagePatients() {
    // this.navCtrl.setRoot(ProfilePage);
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  
  addpatient() {
    this.navCtrl.push(AddPatientPage);
  }
  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  sort(){
    console.log("Sort is working")
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)
  }
  search(){
    console.log("Search is working")
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
}
}
