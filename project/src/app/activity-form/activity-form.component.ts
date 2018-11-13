import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  _id: string;
  title: string;
  type: string;
  hours: number;
  file: File;

  handleFileInput(event) {
    if (event.target.files.length) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
