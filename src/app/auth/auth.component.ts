import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F46F22';
  //   this.elementRef.nativeElement.ownerDocument.body.style.width = '100%';
  // }
}
