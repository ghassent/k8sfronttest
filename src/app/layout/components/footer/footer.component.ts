import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FondationComponent } from 'app/main/fondation/fondation.component';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{
    /**
     * Constructor
     */
    constructor(    private dialog: MatDialog,        )
    {
    }
    Popup(){
        this.dialog.open(FondationComponent, {
            panelClass: 'contact-form-dialog',
            width: "30%", 
            height: "30%"
            });
    }
}
