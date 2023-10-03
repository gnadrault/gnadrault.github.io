import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  root: HTMLElement | null = document.querySelector('html');
  @ViewChild('dialogMenu') dialogMenu!: ElementRef;
  isDialogOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Switch between dark mode and light mode
  switchTheme() {
    console.log('Switch theme');
    if (this.root) {
      this.root.dataset['theme'] =
        this.root.dataset['theme'] === 'dark' ? 'light' : 'dark';
    }
  }

  // Open close dialog
  openDialog() {
    console.log('Open dialog', this.dialogMenu);
    if (!this.dialogMenu.nativeElement.open) {
      this.dialogMenu.nativeElement.show();
    } else {
      this.dialogMenu.nativeElement.close();
    }
    this.isDialogOpen = this.dialogMenu.nativeElement.open;
  }
}
