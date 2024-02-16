import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Talk from 'talkjs';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-chat',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
})
export class TalkComponent implements OnInit {
  title = 'Your Car Your Way - Chat';
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;
  private isSupport = false;

  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(
    private talkService: TalkService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    // récupération du paramètre qui nous permet de définir le type d'accès
    // 0 = client ; 1 = support
    const param = this.route.snapshot.paramMap.get('id')!;
    if (param !== null) {
      this.isSupport = param === '1';
    }

    this.createInbox();
  }

  private async createInbox() {
    // initilisation de talkService et passage du paramètre isSupport pour spécifier le type d'accès
    const session = await this.talkService.createCurrentSession(this.isSupport);
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }
}
