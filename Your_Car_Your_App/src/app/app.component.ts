import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TalkService } from './talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(private talkService: TalkService) {}

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);
  }
}
