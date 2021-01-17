import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardContainerModel } from 'src/models/card-container.model';
import { CardsService } from 'src/services/cards.service';

@Component({
  selector: 'yugi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yuguioh';

  cards: CardContainerModel;

  cardForm: FormGroup;

  constructor(private cardsService: CardsService, private fb: FormBuilder){
    this.cardForm = fb.group({
      name: fb.control('')
    })
  }

  ngOnInit(): void {
    
    
  }

  getCard()
  {
    this.cardsService.getCards(this.cardForm.get('name')?.value).subscribe(
      c => 
      {
        this.cards = c;
      }
    );
  }

  
}
