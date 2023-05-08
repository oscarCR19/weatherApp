import { Component,OnInit,ElementRef} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { LocationService } from 'src/app/services/location/location.service';
import { CurrentweatherService } from 'src/app/services/currentweather/currentweather.service';
import { ForescastweatherService } from 'src/app/services/forecastweather/forescastweather.service';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit{
  date =  moment();
 
  latitude!:number;
  longitude!:number;
  humidity!:string;
  pressure!:string;
  windSpeed!:string;
  description!:string;
  currentTemp!:number;
  city!:string;
  codeCountry!:string;
  locationCity!:string;
  forecastdate:any[]=[];
  dayforecast:any[]=[];

  currentdate=this.date.format('DD/MM/YYYY');
  

  day=this.date.format('dddd');

   constructor (private location:LocationService,
    private currentweather:CurrentweatherService,
    private forecastweather:ForescastweatherService
    ){

   };

   ngOnInit(): void {
    this.getLocation();
    
   }



   getLocation(){
    Geolocation.getCurrentPosition().then(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.getforecastweather(this.latitude,this.longitude);
      this.getCurrentLocation(this.latitude,this.longitude);
    }).catch(error => {
      console.log('Error getting location', error);
    });
   
  };

  getCurrentLocation(latitude:number,longitude:number){
    this.location.getLocationData(latitude,longitude).subscribe((data:any)=>{
      this.city=data.address.city;
      this.codeCountry=data.address.country_code.toUpperCase();
      this.locationCity=data.display_name;
    });
  }

  getforecastweather(latitude:number,longitude:number){
    this.forecastweather.getForecastWeather(latitude,longitude).subscribe((data:any)=>{
      for(let i=0;i<data.cnt;i++){
        this.forecastdate.push(this.date.add(1,'days').format('DD/MM/YYYY'));
        this.dayforecast.push(data.list[i]);
       
       

      }
    });
    console.log(this.forecastdate);
  }

}
