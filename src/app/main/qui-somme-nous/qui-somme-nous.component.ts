import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-qui-somme-nous',
  templateUrl: './qui-somme-nous.component.html',
  styleUrls: ['./qui-somme-nous.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class QuiSommeNousComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
