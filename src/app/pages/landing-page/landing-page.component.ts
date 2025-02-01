import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home | Digital Rewards for Business - One4all Rewards');
  }
}

