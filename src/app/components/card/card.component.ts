import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openDialog() {
    this.modalService.openCardModalEvent.next(true);
  }
}
