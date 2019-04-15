import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebAPI-app';
  // vertraege: any;
  vertraege: any;

  constructor(private http: Http) {
    http.get('/api/mukiAPI').subscribe(result => {
      this.vertraege = result.json();
      console.log(this.vertraege);
    });
  }
  // Wichtig
  // Anpassung in proxy.config.json nicht vergessen
  // Start mit: npm start (um mit proxy.config.json zu starten!)


  // https://www.youtube.com/watch?v=OjmZPPKaj6A  Info: Lokale Wep API nutzen
  // ngOnInit(): void {
  //     this.http.get('/api/mukiAPI').subscribe(data => {    // Anpassung in proxy.config.json nicht vergessen -> Start mit: npm start
  //  console.log(data.json());
  // })
  // }

}

export enum Anrede {
    Herr = 0,
    Frau = 1,
    Firma = 2,
    Undefiniert = 3

}

// Hinweis zum starten der Anwendung!!
// 1.Aus VisualStudio2017 Prokekt mukiVertragWebAPI starten (C:\Users\BucFra\Documents\Visual Studio 2017\Projects\WebAPI\WebAPI\)
// 2.In Terminal eingenben WebServer Starten:  npm start   (WebServer wieder beenden STRG+C)
// 3. http://localhost:4200/

// Hinweis Daten aus der WebAPI (Vertragslibrary werden angezeigt)




