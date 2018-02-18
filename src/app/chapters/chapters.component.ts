import { Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})

export class ChaptersComponent implements OnInit {


  ngOnInit() { }

  scroll(index:number) {
    var element = document.getElementById("deciding");
   console.log('scroll');
   console.log(element);
   // const el = element[index-1] as HTMLElement;
   element.scrollIntoView({behavior:"smooth"});
  }


}
