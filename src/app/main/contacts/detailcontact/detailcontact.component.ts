import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'app/services/notification.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-detailcontact',
  templateUrl: './detailcontact.component.html',
  styleUrls: ['./detailcontact.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class DetailcontactComponent implements OnInit {
  contacts:any;
  today: number = Date.now();
  datemsg:number;
    constructor(
      public dialogRef: MatDialogRef<DetailcontactComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private service :AuthService
      ) 
      {
        this.service.getContactId(data.id).subscribe(res => {                            
          if(!res){          
            return;
          }
          this.contacts=res;          
          });
          // this.datemsg=this.contacts.date-this.today;          
      }
  
    ngOnInit() 
    {
     }
     onClose() {
     this.dialogRef.close();
     }
}
