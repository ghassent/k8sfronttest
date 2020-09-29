import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar, MatDialogConfig } from '@angular/material';
import { AuthService } from 'app/services/auth.service';
import { NotificationService } from 'app/services/notification.service';
import { fuseAnimations } from '@fuse/animations';
import { DetailcontactComponent } from './detailcontact/detailcontact.component';
import * as _ from 'lodash';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {

  nb:number;
recherche:any;
  identreprise:string;
  s: any;
  searchKey: any="";
  constructor(
    public dataservice:AuthService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    public notificationService: NotificationService,
  ){
      // this.getList();
   }
   onCreate(){
    this.dataservice.getContact(this.searchKey).subscribe(user => {        
      if(!user){          
        return; 
      }
      // this.listData = new MatTableDataSource(user.data);
      this.s=user.data
  });
    // this.router.navigate(['/addLangue']); 
}

  ngOnInit() {
  }

  getList(){
    //   this.dataservice.getContact().subscribe(user => {        
    //     if(!user){          
    //       return; 
    //     }
    //     this.nb=user.count;              
    //     this.listData = new MatTableDataSource(user.data);
    //     this.listData.sort = this.sort;
    //     this.listData.paginator = this.paginator;
    // });
  
   }


  // onDelete(id){
  //      this.dialogService.openConfirmDialog('voulez vous supprimer cette Item ?')
  //      .afterClosed().subscribe(res =>{
  //        if(res){
  //         this.dataservice.delete(id).subscribe(res => {        
  //           console.log(res);
  //           this.getList();
  //            });
  //          this.notificationService.warn('Deleted successfully');
  //        }
  //      });

  // } 

}
