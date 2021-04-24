import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title = '';
}
