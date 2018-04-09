import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})

export class ChaptersComponent implements OnInit {
  decidingTwo: string = 'Types of Testing and Deciding on Test Automation framework for your team';
  releaseDate: string = 'Determine release date for Potential Shippable Increments'
  prioritizationOfFeatures: string = 'Prioritization of Features'
  languageFrameworks: string = 'Determining the language framework for test automation'
  mvp: string = 'Minimal Viable Product'
  testDataCicd: string = 'Test Data Management and CICD'
  perfTesting: string= 'Performance Testing the UI and API of your web application'
  blazemeter: string= 'How to use blaze meter to create performance test scripts'
  atdd: string= 'Automated Test Driven Development'
  automationFrameworks: string='Types of Automation Frameworks'
  locators: string='Types of Locators and Best Method for Identifying Locators'
  cucumberFeatures: string='Cucumber Feature file, step defintions, and page objects'
  whenToAutomateStories: string='When Do You Automate Your Stories?'
   futureOfTestAIAutomation: string='Future of AI in Test Automation'

@ViewChild("deciding", {read: ElementRef}) deciding: ElementRef;

iframe_html: any;
youtubeUrl = "https://youtu.be/3hHL-BhBW4I";

constructor(private embedService: EmbedVideoService) {
  console.log(this.embedService.embed(this.youtubeUrl));
  this.iframe_html = this.embedService.embed(this.youtubeUrl);
 }

  ngOnInit() { }
  scroll(element: string) {
   var elementHtml = document.getElementById(element);
   elementHtml.scrollIntoView({behavior:"smooth"});
  }


}
