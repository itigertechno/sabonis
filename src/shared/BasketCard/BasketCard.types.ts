import {ICard} from "@shared/InlineCard/InlineCard.types.ts";

export interface IBasketCard extends ICard {
    hasClose?: boolean;
    className?: string;
}
