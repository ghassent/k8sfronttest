import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class AddCompaniesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    generic_name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    alt_names: new FormControl('', Validators.required),
   });
  constructor( public dialogRef: MatDialogRef<AddCompaniesComponent>, public authService : AuthService,private router: Router,

    ) { }
    onClose() {
      this.dialogRef.close();
    }
  submit(){
    
     this.authService.Ajout(this.form.value.id,this.form.value.name,this.form.value.generic_name,this.form.value.nationality,this.form.value.description,this.form.value.alt_names)
  this.router.navigate(['/detailCompanies',this.form.value.id]); 
  this.dialogRef.close();

    }
  ngOnInit() {
  }

}
