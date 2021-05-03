import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor() {}
  @ViewChild('comment') comment: ElementRef;

  ngOnInit(): void {}

  handleButtonClick() {
    this.focusOnComment();
  }

  public focusOnComment() {
    this.comment.nativeElement.focus();
  }
}
