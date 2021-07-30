import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../data/publication';
import { Commentaire } from '../data/commentaire';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() publication:Publication ;
  commentaires:Commentaire[] ;
  constructor() { 
    this.publication = new Publication() ;

    this.commentaires = [
      new Commentaire(1, "Nick Jonas", "assets/img/user1.jpg", "Nice <3"),
      new Commentaire(2, "Nick Fury", "assets/img/user3.jpg", "You look good"),
      new Commentaire(3, "Nick Fury", "assets/img/user2.jpg", "Very beautiful")
    ]
  }

  ngOnInit(): void {
  }

}
