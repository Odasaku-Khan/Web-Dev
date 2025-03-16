import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LaunchFilterComponent } from "../launch-filter/launch-filter.component";
@Component({
  selector: 'app-spacex-launches',
  imports: [CommonModule, LaunchFilterComponent],
  templateUrl: './spacex-launches.component.html',
  styleUrl: './spacex-launches.component.css'
})
export class SpacexLaunchesComponent implements OnInit {
  launches: any[]=[];
  filtered: any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data=>{
      this.launches=data;
      this.filtered=data;

      console.log(data);
    })
  }
  filterSuccesful(){
    this.filtered=this.launches.filter(launch=>launch.launch_success===true);
  }

}
