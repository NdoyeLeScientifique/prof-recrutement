// src/app/modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private aboutModalVisibleSubject = new BehaviorSubject<boolean>(false);
  aboutModalVisible$ = this.aboutModalVisibleSubject.asObservable();

  openAboutModal() {
    this.aboutModalVisibleSubject.next(true);
  }

  closeAboutModal() {
    this.aboutModalVisibleSubject.next(false);
  }
}


