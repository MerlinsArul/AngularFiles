import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  edit(item: {}) {
    this.onEdit.emit(item);
  }
  delete(item: {}) {
    this.onDelete.emit(item);
  }
}
