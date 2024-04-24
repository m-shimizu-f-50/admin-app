import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService
      .getMembers()
      .subscribe((members) => (this.members = members));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.memberService.addMember({ name } as Member).subscribe((member) => {
      this.members.push(member);
    });
  }

  delete(member: Member): void {
    this.members = this.members.filter((m) => m !== member); //削除しない社員を抽出して再生成
    this.memberService.deleteMember(member).subscribe(); // 注) subscribeがないとHTTP通信が行えないため必ず付ける
  }
}
