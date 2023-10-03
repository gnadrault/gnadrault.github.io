import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly url = 'assets/download/CV_Guillaume_Nadrault.pdf';
  readonly filename = 'CV_Guillaume_Nadrault.pdf';

  constructor() {}

  ngOnInit(): void {}

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.url);
    link.setAttribute('download', this.filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
