import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-management-template',
  templateUrl: './management-template.component.html',
  styleUrls: ['./management-template.component.scss']
})
export class ManagementTemplateComponent implements OnInit {
  @Input() title?: string;
  @Input() type?: string;
  @Input() itemsCount?: number;
  @Input() filterBy?: string[];
  @Input() header?: string[];
  @Input() items?: any[][];

  ngOnInit(): void {
  }

}
