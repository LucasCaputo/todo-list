import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  filter = new FormControl('');
  filterList: string[] = ['Highest', 'High', 'Medium', 'Low', 'Lowest'];

  items = [
    {
      createdAt: "2023-06-01T20:49:30.941Z",
      description: "description 1",
      priority: "priority 1",
      endDate: 1685669758,
      id: "1"
     },
     {
      createdAt: "2023-06-01T12:10:08.532Z",
      description: "description 2",
      priority: "priority 2",
      endDate: 1685669698,
      id: "2"
     },
     {
      createdAt: "2023-06-01T11:36:24.979Z",
      description: "description 3",
      priority: "priority 3",
      endDate: 1685669638,
      id: "3"
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
