import { Component, Input } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent {
  @Input() member: Member = {
    id: 0,
    name: '',
  };

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      const numericId = Number(id);
      this.memberService
        .getMember(numericId)
        .subscribe((member) => (this.member = member));
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.memberService.updateMember(this.member).subscribe(() => this.goBack());
  }
}
