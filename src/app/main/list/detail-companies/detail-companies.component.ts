import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Params, ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-detail-companies',
  templateUrl: './detail-companies.component.html',
  styleUrls: ['./detail-companies.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class DetailCompaniesComponent implements OnInit {
id:number;
detail:any;
  constructor(public service:AuthService,    private route: ActivatedRoute,
    ) {
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

}
