import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator', // Added missing comma
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  inp1: number | null = null;
  inp2: number | null = null;
  result: number | null = null;
  symbol: string = '+';
  count: number = 0;

  ngOnInit() {
    // Corrected the capitalization of ngOnInit
  }

  add() {
    this.symbol = '+';
    this.result = (this.inp1 || 0) + (this.inp2 || 0);
    this.count++;
  }
  
  subtract() {
    this.symbol = '-';
    this.result = (this.inp1 || 0) - (this.inp2 || 0);
    this.count++;
  }
  
  multiply() {
    this.symbol = '*';
    this.result = (this.inp1 || 0) * (this.inp2 || 0);
    this.count++;
  }
  
  divide() {
    if (this.inp2) {
      this.symbol = '/';
      this.result = (this.inp1 || 0) / this.inp2;
      this.count++;
    } else {
      console.error('Cannot divide by zero');
    }
  }
  

  reset() {
    this.result = null;
    this.symbol = '+';
    this.inp1 = null;
    this.inp2 = null;
    this.count = 0;
  }
}
