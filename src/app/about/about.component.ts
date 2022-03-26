import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { expand, flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class AboutComponent implements OnInit {
  public leader?: Leader[];

  constructor(private leaderservice: LeaderService) {
    this.leaderservice
      .getLeaders()
      .subscribe((leader) => (this.leader = leader));
  }

  ngOnInit(): void {}
}
