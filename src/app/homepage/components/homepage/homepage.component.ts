import { Component,OnInit,ElementRef} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { LocationService } from 'src/app/services/location/location.service';
import { CurrentweatherService } from 'src/app/services/currentweather/currentweather.service';
import * as moment from 'moment';
import 'moment/locale/es';

moment.locale('es');
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {

   
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

  buttonName="Fahrenheit";
  typeTemp="C";

  currentdate=this.date.format('DD/MM/YYYY');
  day=this.date.format('dddd');

   constructor (private location:LocationService,
    private currentweather:CurrentweatherService
    ){

   };

   ngOnInit(): void {
    
   this.getLocation();
   };



    getLocation(){
      Geolocation.getCurrentPosition().then(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude,this.longitude);
        this.getcurrentweather(this.latitude,this.longitude);
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

    getcurrentweather(latitude: number, longitude: number){
      this.currentweather.getCurrentWeather(latitude,longitude).subscribe((data:any)=>{
        this.humidity=data.main.humidity;
        this.description=data.weather[0].description.toUpperCase();
        this.pressure=data.main.pressure;
        this.windSpeed=data.wind.speed;
        this.currentTemp=Math.round(data.main.temp);
      });
    }

    changeTemp(){
      if(this.buttonName==="Fahrenheit"){
        this.currentTemp=(this.currentTemp*(9/5))+32;
        this.buttonName="Celsius";
        this.typeTemp="F";
      }else if(this.buttonName==="Celsius"){
        this.currentTemp=(this.currentTemp-32)/(9/5);
        this.buttonName="Fahrenheit";
        this.typeTemp="C";
        
      }

      }
    


};
