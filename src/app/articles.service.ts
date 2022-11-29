import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { data } from './seed';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor() { }

  public getData(): Article[] {
    let articles: Article[] = [];

    data.forEach(articleData => {
      articles.push(
        new Article(articleData.title, articleData.description, articleData.author, articleData.imageUrl)
      );
    });

    return articles;
  }
}
