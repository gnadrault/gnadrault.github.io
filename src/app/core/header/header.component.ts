import { Component, OnInit } from '@angular/core';
import { switchTheme } from '@gnadrault/nexus-ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  switchTheme() {
    console.log('Switch theme');
    const root: HTMLElement | null = document.querySelector('html');
    switchTheme(root);
  }
}
