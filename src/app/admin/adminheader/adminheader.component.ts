import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void { }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}


