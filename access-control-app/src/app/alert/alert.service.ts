import { Injectable } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef, MdDialogModule} from '@angular/material';
import { AlertComponent } from '../alert/alert.component';

@Injectable()
export class AlertService {
  dialogRef: MdDialogRef<AlertComponent>;

  constructor(public dialog: MdDialog) { }

  openDialog(message) {
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<AlertComponent> = this.dialog.open(AlertComponent, config);
    dialogRef.componentInstance.message = message;
  }

}
