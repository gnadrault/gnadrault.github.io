import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from 'src/app/models/interfaces';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  project: Project | undefined;

  constructor(
    private modalService: ModalService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.modalService.openCardModalEvent.next(true);
  }

  videoUrl() {
    if (this.project?.mainResource.url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        this.project?.mainResource.url
      );
    }
    return null;
  }
}
