import { Component, OnInit, Input } from '@angular/core';
import { Attested } from '../models/attested.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() attested: Attested;

  constructor() { }

  ngOnInit() {
  }

}
