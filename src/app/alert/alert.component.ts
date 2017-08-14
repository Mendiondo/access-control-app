import {Component, NgModule, ViewContainerRef} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: string;

  constructor(public dialogRef: MdDialogRef<AlertComponent>) { }

}
