import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColorSchemeService } from 'src/app/services/ColorSchemeService.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3'
    },
    {
      name: 'light',
      icon: 'wb_sunny'
    }
  ];

  constructor(
    public colorSchemeService: ColorSchemeService,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
    public router: Router
  ) {}

  setTheme(theme: string): void {
    this.colorSchemeService.update(theme);
  }
}
