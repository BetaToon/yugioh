import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardContainerModel } from "src/models/card-container.model";

@Injectable()
export class CardsService {
    constructor(private http: HttpClient) {}

    getCard(name: string){
        return this.http.get<CardContainerModel>('https://db.ygoprodeck.com/api/v7/cardinfo.php', {params:{name: name}});
    }
  }
  