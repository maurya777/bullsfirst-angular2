import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    rows: Object[];
    totals: Object;

    constructor(private accounts: AccountsService) {}

    fetchData() {
       this.rows = this.accounts.getAccounts();
       this.totals = this.accounts.getTotals();
    }

    ngOnInit() {
      this.fetchData();
    }

    addAccount() {
        this.accounts.addAccount({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'cyan'
        });
        this.fetchData();
    }
}
