import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  @Input() selectedGroup: any = false;
  constructor() { }

  ngOnInit(): void {
  }

  dummyUsers: dummyUsers[] = 
  [    {
    name: "User1", 
    id: 2018, 
  },
  {
    name: "User2",
    id: 2022,
  },
  {
    name: "User3",
    id: 2020,
  },
  {
    name: "User4",
    id: 2019,
  },
  {
    name: "User5",
    id: 2023,
  },
  {
    name: "User6",
    id: 2021,
  }];
 

}

interface dummyUsers {
  name: string;
  id: number;
}