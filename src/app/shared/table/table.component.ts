import { Component,Input,EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() HeadArray :any[] = [];
  @Input() GridArray :any[] = []; 
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
constructor(){}
// @Input() records!: any[];
// @Input() caption !: string;
// keys!: string[];
// ngOnChanges() {
//     this.keys = Object.keys(this.records[0]);
// }
ngOnInit(): void {
}
edit(item: any) {
  debugger;
  this.onEdit.emit(item);
}
delete(item: any) {
  
  this.onDelete.emit(item);
}
}
