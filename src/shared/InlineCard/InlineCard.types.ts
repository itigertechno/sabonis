export interface ICard {
    title: string;
    description: string;
    price: number;
    discount?: number | null;
    vendorCode: number;
    // url || json string?
    preview: string;
    stock: boolean;
}

export interface ICardInline extends ICard {
    hasCheckbox?: boolean;
}
