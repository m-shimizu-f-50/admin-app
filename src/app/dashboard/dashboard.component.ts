import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService
      .getMembers()
      .subscribe((members) => (this.members = members.slice(1, 5)));
  }
}
