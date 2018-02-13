import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public latitud;
  public longitud;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
        console.log(data);
        console.log(data);
     });
     console.log("XXXXXXXX");
  }

  ionViewDidLoad(){
  }

  getLatitudeLongitude() {
    console.log("1 ++++++++++++++++++++++++++");
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
    }).catch((error) => {
      console.log(error);
      console.log('Error getting location', error);
    });
    console.log("2 ++++++++++++++++++++++++++");
  }
}
