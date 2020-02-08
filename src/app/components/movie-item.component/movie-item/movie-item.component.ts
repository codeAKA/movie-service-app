import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params.id; });
   }

  ngOnInit() {
  }

}
