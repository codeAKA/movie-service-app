import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() item: MovieModel;
  id: string;
  imgPlaceholderUrl = './app/images/img-placeholder.png';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params.id; });
   }

  ngOnInit() {
    this.item.poster = this.item.poster !== 'N/A' ? this.item.poster : this.imgPlaceholderUrl;
  }

}
