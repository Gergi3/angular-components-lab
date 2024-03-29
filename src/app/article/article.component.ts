import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;
  descIsVisible: boolean = false;
  imgIsVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeDescVisibility() {
    this.descIsVisible = !this.descIsVisible;
  }

  changeImgVisibility() {
    this.imgIsVisible = !this.imgIsVisible;
  }

}
