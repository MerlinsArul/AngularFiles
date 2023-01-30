import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {

  @Input() Attribute: any[] = [];
  @Input() Attr: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public edit(item: {}) {
    this.onEdit.emit(item);
  }

  public delete(item: {}) {
    this.onDelete.emit(item);
  }
}
