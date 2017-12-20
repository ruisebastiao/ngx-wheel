/**
 * This is only for local test
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgxWheelModule } from "ngx-wheel";

@Component({
  selector: "app",
  template: `  <ngx-wheel centerText="Sayegh" [spinOnce]="spinOnce" fontColor="white" arrowColor="white" [spinRange]="[10,5]" (beforeSpin)="beforeSpinFn(x)" (afterSpin)="afterSpinFn(x)" prizeToWin="1" [prize_descriptions]="prizes" [colors]="colors"></ngx-wheel>`
})
class AppComponent {
  colors = [
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black"
  ];
  //10, 9, 6 ,2
  prizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  beforeSpinFn = function() {
    // alert("before");
  };
  spinOnce = true;
  afterSpinFn = function() {
    // alert("after");
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWheelModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
