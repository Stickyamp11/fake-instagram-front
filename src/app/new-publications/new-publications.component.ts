import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { HookPublicationsService } from '../hook-publications-service.service';
import { Observable } from 'rxjs';
import { PseudoGlobalStateService } from '../pseudo-global-state.service';

@Component({
  selector: 'app-new-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-publications.component.html',
  styleUrl: './new-publications.component.scss'
})
export class NewPublicationsComponent implements OnInit {
  isThereNewPubsSig: WritableSignal<boolean> = signal(true);
  hookPublicationsService: HookPublicationsService;
  pseudoGlobalStateService: PseudoGlobalStateService

  newPublications$: Observable<any> = new Observable();

  constructor(hookPublicationsService: HookPublicationsService, pseudoGlobalStateService: PseudoGlobalStateService){
    this.hookPublicationsService = hookPublicationsService;
    this.pseudoGlobalStateService = pseudoGlobalStateService;
  }

  ngOnInit(){
    this.newPublications$ = this.hookPublicationsService.onNewMessage();
    console.log(this.isThereNewPubsSig);

    this.newPublications$.subscribe(() => {
      this.isThereNewPubsSig.set(true);
    });
  }
  reloadPublications(){
    this.isThereNewPubsSig.set(false);
    this.pseudoGlobalStateService.fetchMorePublications();
    this.hookPublicationsService.fakeReceiver();
  }


}

