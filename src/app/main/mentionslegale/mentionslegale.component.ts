import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-mentionslegale',
  templateUrl: './mentionslegale.component.html',
  styleUrls: ['./mentionslegale.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
})
export class MentionslegaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
