import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private membersUrl = 'api/members'; // サーバーのUrl

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました。');
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add(
      `MemberService: 社員データ(id=${id})を取得しました。`
    );

    const member = MEMBERS.find((member) => member.id === id);
    if (!member) {
      throw new Error('Member not found');
    }

    return of(member);
  }

  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }
}
