import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/services/auth.service';
import {  angularMath } from 'angular-ts-math';
import { AddCompaniesComponent } from './add-companies/add-companies.component';
import { DialogService } from 'app/services/dialog.service';
import { NotificationService } from 'app/services/notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
nb:number;
recherche:any;
  identreprise:string;
  constructor(
    public dataservice:AuthService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private dialogService: DialogService,
    public notificationService: NotificationService,
  ){
      this.getList();
   }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'generic_name', 'description','alt_names','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    console.log(angularMath.getRest(102,100))
  }

  length = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [10,25, 50];

  onCreate() {
    this.dialog.open(AddCompaniesComponent, {
      panelClass: 'contact-form-dialog',
      width: "45%", 
      height: "50%"
      });
  }
  getList(){
      this.dataservice.getListe().subscribe(user => {        
        if(!user){          
          return;
        }
        this.nb=user.total;      
        console.log(user.data);
        
        this.listData = new MatTableDataSource(user.data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
    });
   }


  applyFilter(x) {
    this.dataservice.RechercheList(x).subscribe(res =>{
      this.listData = new MatTableDataSource(res.data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });

  }
  onDelete(id){
       this.dialogService.openConfirmDialog('voulez vous supprimer cette Item ?')
       .afterClosed().subscribe(res =>{
         if(res){
          this.dataservice.delete(id).subscribe(res => {        
            console.log(res);
            this.getList();
             });
           this.notificationService.warn('Deleted successfully');
         }
       });

  }


}


   
