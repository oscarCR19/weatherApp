import { Component,OnInit,ElementRef} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {

  geocoder!: google.maps.Geocoder;

  constructor(private elementRef: ElementRef) {
    this.geocoder = new google.maps.Geocoder();
  }


   ngOnInit(): void {
    async () => {
      let coordinates = await Geolocation. getCurrentPosition();

      console.log('Current position:', coordinates);
    };

    //this.getAddress(coordinates);

   }

   getAddress(latitude: number, longitude: number) {
    const location = new google.maps.LatLng(latitude, longitude);

    this.geocoder.geocode({ location }, (results:any, status:any) => {
      if (status === 'OK') {
        if (results[1]) {
          console.log(results[1].formatted_address);
        }
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  }


}
