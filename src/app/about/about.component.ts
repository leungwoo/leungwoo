import { Component, Inject, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animations';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut()],
})
export class AboutComponent implements OnInit {
  public leader?: Leader[];

  constructor(
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL: string
  ) {
    this.leaderservice
      .getLeaders()
      .subscribe((leader) => (this.leader = leader));
  }

  ngOnInit(): void {}
}
