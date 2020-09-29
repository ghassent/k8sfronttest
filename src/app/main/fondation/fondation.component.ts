import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-fondation',
  templateUrl: './fondation.component.html',
  styleUrls: ['./fondation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class FondationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FondationComponent>,) { }
  onClose() {
    this.dialogRef.close();
  } 
   ngOnInit() {
  }

}
