import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})

export class ChaptersComponent implements OnInit {
  decidingTwo: string = 'Types of Testing and Deciding on Test Automation framework for your team';

@ViewChild("deciding", {read: ElementRef}) deciding: ElementRef;

deciding;
  ngOnInit() { }
  scroll(element: string) {
   console.log(element);
   var elementHtml = document.getElementById(element);
   console.log('scroll');
   console.log('deciding');
   elementHtml.scrollIntoView({behavior:"smooth"});
  }


}
