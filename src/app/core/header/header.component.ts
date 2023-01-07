import { Component, OnInit } from '@angular/core';
import { switchTheme } from '@gnadrault/nexus-ui';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  switchTheme() {
    switchTheme();
  }

  openMenu() {
    this.modalService.openMenuModalEvent.next(!this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }
}
