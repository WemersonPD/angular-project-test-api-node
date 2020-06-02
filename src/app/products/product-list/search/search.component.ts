import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  public debounce: Subject<string> = new Subject<string>();

  @Output() OnTyping = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    this.debounce
    // Com o pipe a gente faz algum tipo de operação
    // Só vai ser o subscribe depois de 300 milis
    .pipe(debounceTime(300))
    .subscribe(filter => this.OnTyping.emit(filter))
  }

  ngOnDestroy(): void {
        // É preciso se desescrever do subJect, para que tenhamos perca de perfomace no sistema.
    this.debounce
      .unsubscribe()
  }
}
