import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacexLaunchesComponent } from "./components/spacex-launches/spacex-launches.component";

@Component({
  selector: 'app-root',
  imports: [SpacexLaunchesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
