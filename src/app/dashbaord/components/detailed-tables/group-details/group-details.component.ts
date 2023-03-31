import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  @Input() selectedGroup: any = false;
  constructor() { }

  ngOnInit(): void {
  }

  dummyUsers: dummyUsers[] = 
  [    {
    name: "User1", 
    ID: 2018, 
  },
  {
    name: "User2",
    ID: 2022,
  },
  {
    name: "User3",
    ID: 2020,
  },
  {
    name: "User4",
    ID: 2019,
  },
  {
    name: "User5",
    ID: 2023,
  },
  {
    name: "User6",
    ID: 2021,
  }];

}

interface dummyUsers {
  name: string;
  ID: number;
}