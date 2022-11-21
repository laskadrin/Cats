import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cats-searcher',
  templateUrl: './cats-searcher.component.html',
  styleUrls: ['./cats-searcher.component.css']
})
export class CatsSearcherComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  @Output() search = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(text => {
        this.search.emit(text);
      });
  }








}
