import { Component, OnInit } from '@angular/core';

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
    if (root) {
      root.dataset['theme'] =
        root.dataset['theme'] === 'dark' ? 'light' : 'dark';
    }
  }
}
