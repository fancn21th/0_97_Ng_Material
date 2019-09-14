import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
