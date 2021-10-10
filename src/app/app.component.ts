import { Component } from '@angular/core';
import { ColorSchemeService } from './services/ColorSchemeService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corey-schnedl-website';

  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.load();
  }
}
