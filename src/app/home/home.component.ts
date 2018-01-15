import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { EmbedVideoService } from 'ngx-embed-video';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // template: '<div [innerHtml]="iframe_html"></div>'
})
export class HomeComponent implements OnInit{
  iframe_html: any;
  youtubeUrl = "https://youtu.be/Yk-JCb74mqM";

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrl));
    this.iframe_html = this.embedService.embed(this.youtubeUrl);
   }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }


}
