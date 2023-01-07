import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalService } from './services/modal.service';
import { openDialog, closeDialog } from '@gnadrault/nexus-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('dialogCard') dialogCard: ElementRef | undefined;
  @ViewChild('dialogMenu') dialogMenu: ElementRef | undefined;

  title = 'portfolio';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.openCardModalEvent.subscribe({
      next: (open) => {
        if (open) {
          openDialog(this.dialogCard?.nativeElement, true);
        } else {
          closeDialog(this.dialogCard?.nativeElement);
        }
      },
    });

    this.modalService.openMenuModalEvent.subscribe({
      next: (open) => {
        if (open) {
          openDialog(this.dialogMenu?.nativeElement);
        } else {
          closeDialog(this.dialogMenu?.nativeElement);
        }
      },
    });
  }

  closeCardDialog() {
    this.modalService.openCardModalEvent.next(false);
  }
}
