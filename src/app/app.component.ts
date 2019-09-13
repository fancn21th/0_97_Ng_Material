import { Component } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { pluck } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public isSmallScreen: boolean;

  constructor(private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._breakpointObserver
      .observe(["(max-width: 901px)"])
      .pipe(pluck("matches"))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  get sidenavMode() {
    return this.isSmallScreen ? "over" : "side";
  }
}
