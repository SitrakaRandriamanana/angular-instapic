import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from '../data/commentaire';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment:Commentaire ;
  constructor() { 
    this.comment = new Commentaire() ;
  }

  ngOnInit(): void {
  }

}
