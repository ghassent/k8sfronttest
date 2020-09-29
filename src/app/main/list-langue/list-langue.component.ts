import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-list-langue',
  templateUrl: './list-langue.component.html',
  styleUrls: ['./list-langue.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class ListLangueComponent implements OnInit {
tab:any;
  constructor(private router: Router,public service:AuthService) {
      this.service.getListelangue().subscribe(item => {    
        this.tab=item.data;
        console.log(this.tab)
        if(this.tab == "en"){
          this.tab ="gb"
          }    
        if(!item){          
          return;
        }
    });
   

   }

  ngOnInit() {
  }
  onCreate(){
       this.router.navigate(['/addLangue']); 
  }
}

