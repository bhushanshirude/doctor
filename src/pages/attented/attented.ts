import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { EmergencyPage } from '../emergency/emergency';
import { AddconferencePage } from '../addconference/addconference';
import { ConferPipe } from '../../pipes/search/conference';

@Component({
  selector: 'page-attented',
  templateUrl: 'attented.html',
})
export class AttentedPage {
  pipes: [ConferPipe];
  Api_url = "";
  array;
  doctor_id;
  value;
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public storage: Storage, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Get_Doctor(val);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttentedPage');
  }

  search() {
    this.value = 'search';
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  sea() {
    this.value = 'search !=search';
  }

  add() {
    console.log("add conference")
    this.appCtrl.getRootNavs()[0].push(AddconferencePage);
  }

  Get_Doctor(doctor_id) {
    console.log("Doctor Send:=>" + doctor_id);
    fetch(this.Api_url + 'users/android_getconference', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          for (let i = 0; i <= data.conference_upcomming.length; i++) {
            this.array = data.conference_attended;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }
}
