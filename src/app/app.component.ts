import { Component, QueryList, ViewChildren } from '@angular/core';
import { CommentComponent } from './components/comment/comment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fun-examples';
  @ViewChildren('comment') comments: QueryList<CommentComponent>;

  focusOnFirst() {
    const allComments = this.comments.toArray();
    const firstComment = allComments[0];
    firstComment.focusOnComment();
  }
}
