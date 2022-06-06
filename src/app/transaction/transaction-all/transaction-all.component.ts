import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TransactionIncomeComponent } from '../transaction-income/transaction-income.component';


@Component({
  selector: 'all',
  templateUrl: './transaction-all.component.html',
  styleUrls: ['./transaction-all.component.scss']
})
export class TransactionallComponent implements OnInit {

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR!: ViewContainerRef;
  constructor(private CFR: ComponentFactoryResolver ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this.createComponent();
  }

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(TransactionIncomeComponent);
    let childComponentRef = this.VCR.createComponent(componentFactory);
  }
}
