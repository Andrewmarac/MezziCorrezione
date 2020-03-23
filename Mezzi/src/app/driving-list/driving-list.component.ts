import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Driving } from '../driving.model'
import { Rent } from '../rent.model'

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() rentli : Rent[]
  obs_driving : Observable<Driving[]>
  driving_list : Driving[]
  selectedauto : Driving;
    constructor(public http: HttpClient)
  {
    this.obs_driving = this.http.get<Driving[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi")
    this.obs_driving.subscribe(this.getDriving)
  }
  getDriving = (auto : Driving[]) =>
  {
    this.driving_list = auto;
  }
  BNoleggia(auto : Driving){
    this.selectedauto = auto;
    this.rentli.push(new Rent(auto,1));
    console.log(auto)
  }
  ngOnInit(): void {
  }

}
