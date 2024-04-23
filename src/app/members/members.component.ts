import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  members: Member[] = [];
  selectedMember: Member = {
    id: 0,
    name: '',
  };

  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(
      `MembersComponent: 社員データ(id=${member.id})が選択されました`
    );
  }

  getMembers(): void {
    this.memberService
      .getMembers()
      .subscribe((members) => (this.members = members));
  }
}
