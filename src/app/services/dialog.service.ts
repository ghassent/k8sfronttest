import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
   return this.dialog.open(FuseConfirmDialogComponent,{
      width: '400px',
      height: '150px',
      disableClose: true,
      data :{
        message : 'voulez vous supprimer cette Item ?'
      }
    });
  }
}
