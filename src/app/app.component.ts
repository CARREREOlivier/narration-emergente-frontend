import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'narration-emergente-frontend';
  cookiesAccepted: boolean = false;

  acceptCookies(): void {
    this.cookiesAccepted = true;
    document.cookie = 'cookiesAccepted=true; max-age=31536000; path=/';  // 1 an de durée
  }
}
