import { Component, OnInit } from '@angular/core';
import { Publication } from '../data/publication' ;
import { Commentaire } from '../data/commentaire';

@Component({
  selector: 'app-feed-content',
  templateUrl: './feed-content.component.html',
  styleUrls: ['./feed-content.component.css']
})
export class FeedContentComponent implements OnInit {
  publications:Publication[] ;
  
  constructor() { 
    this.publications = [
      new Publication(1, "Randrimanana Sitraka", "assets/img/profil.jpg", "assets/img/user0.jpg", "RANDRIAMANANA Mamitina Sitraka Dimbiniaina"),
      new Publication(2, "Ester Esposito", "assets/img/user2.jpg", "assets/img/user2.jpg", "No legend"),
      new Publication(3, "Manny Ortiz", "assets/img/user3.jpg", "assets/img/user3.jpg", "#Portrait"),
      new Publication(4, "Elena Sorokina", "assets/img/user1.jpg", "assets/img/user1.jpg", "Looking for the future"),
    ] ;
  }

  ngOnInit(): void {
  }

}
