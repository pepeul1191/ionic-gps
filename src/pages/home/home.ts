import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public latitud;
  public longitud;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform: Platform) {     
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
    this.platform.ready().then(() => {
      console.log("1.5 ++++++++++++++++++++++++++");
      this.geolocation.getCurrentPosition({ timeout: 3000, enableHighAccuracy: true, maximumAge: 3000 }).then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
        return;
      }).catch((error) => {
        console.log(error);
        console.log('Error getting location', error);
      });
    });
    
    console.log("2 ++++++++++++++++++++++++++");
  }
}
