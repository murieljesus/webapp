import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader:Leader[];
  selectedLeader: Leader;
  constructor(private leaderservice: LeaderService, private route:ActivatedRoute) { }


  ngOnInit() {
    this.leader = this.leaderservice.getLeaders();
    }
      onSelect(leader: Leader) {
      this.selectedLeader = leader;
      
      }
}
