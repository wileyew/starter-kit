import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})

export class ChaptersComponent implements OnInit {
  decidingTwo: string = 'Types of Testing and Deciding on Test Automation framework for your team';

@ViewChild("deciding", {read: ElementRef}) deciding: ElementRef;

  ngOnInit() { }
  scroll(element: string) {
   var elementHtml = document.getElementById(element);
   elementHtml.scrollIntoView({behavior:"smooth"});
  }


}
