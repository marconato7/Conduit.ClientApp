import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component
({
    imports:     [ RouterOutlet ],
    selector:    "app-root",
    styleUrl:    "./app.component.css",
    templateUrl: "./app.component.html",
})
export class AppComponent
{
    title = "Conduit.ClientApp";
}
