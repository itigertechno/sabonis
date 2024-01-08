import {ICard} from "@shared/InlineCard/InlineCard.types.ts";

export interface IBasketCard extends ICard {
    hasClose?: boolean;
    className?: string;
    counterLock?: boolean;
}

export interface IMobileBasketStep {
    setStep: (newValue: number) => void,
    step: number,
    pickup: boolean;
    setPickup: (newValue: boolean) => void;
}