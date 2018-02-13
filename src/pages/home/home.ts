import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public latitud: any;
  public longitud: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform: Platform) {     

  }

  ionViewDidLoad(){
    console.log("1 ++++++++++++++++++++++++++");
    this.platform.ready().then(() => {    
      this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true, maximumAge: 3000 }).then(pos => {
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`);
        this.latitud = pos.coords.latitude;
        this.longitud = pos.coords.longitude;
      }).catch( error => {
          console.log(error)
        }
      );
      // watch position
      const watch = this.geolocation.watchPosition().subscribe(pos => {
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)
        //this.position = pos;
      });
      // to stop watching
      watch.unsubscribe();
    });
    console.log("2 ++++++++++++++++++++++++++");
  }

  getLatitudeLongitude() {
    console.log("1A ++++++++++++++++++++++++++");
    console.log("2A ++++++++++++++++++++++++++");
  }
}
