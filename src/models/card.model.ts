import { CardImageModel } from "./card-image-model.model";

export interface CardModel{
    name: string;
    desc: string;
    atk: string;
    def: string;
    level: string;
    card_images: Array<CardImageModel>;
}