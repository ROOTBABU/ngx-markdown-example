import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http:HttpClient){
  }
  // fileName = './assets/markdown/test.md';
  markdown = `## without markdown file`;
  // md;

  // async ngOnInit() {
  //     this.md = await this.http.get(`/assets/markdown/test.md`, { responseType: 'text'}).toPromise();
  //     console.log(this.md)
  //     const response = await fetch('/assets/markdown/test.md');
  //     this.md = await response.text();
  //     console.log(this.md)
  // }
}
