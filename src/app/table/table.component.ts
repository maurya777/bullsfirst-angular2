import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows: Object[] = [];
  @Input() totals: Object = {};
  @Output() addAccount = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddAccount() {
    this.addAccount.emit();
  }

}
