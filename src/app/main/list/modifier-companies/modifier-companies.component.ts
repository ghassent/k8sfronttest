import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modifier-companies',
  templateUrl: './modifier-companies.component.html',
  styleUrls: ['./modifier-companies.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class ModifierCompaniesComponent implements OnInit {
  id:number;
  detail:any;
  allowEdit : boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    generic_name: new FormControl(''),
    nationality: new FormControl(''),
    description: new FormControl(''),
    alt_names: new FormControl(''),
  });
  constructor(public service:AuthService,private route: ActivatedRoute,private router: Router){
    this.route.params.subscribe(
      (params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      
      }); 
      this.service.getListeId(this.id).subscribe(res => {        
        if(!res){          
          return;
        }
        this.detail=res;
         });
  }

  ngOnInit() {
  }
  update(){    
    this.service.updateOne(this.id,this.form.value);
    this.router.navigate(['/dashbord']); 
  }
  editOn(){
    this.allowEdit = true;
  }

}
