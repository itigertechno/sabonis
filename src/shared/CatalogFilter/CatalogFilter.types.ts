export interface ICatalogFilter {
}

export interface ICatalogCheckboxLabel {
}

export interface ICatalogRangeSlider {
    initialMin: string;
    initialMax: string;
    min: number;
    max: number;
    step: number;
    priceCap: number;
    className?: string;
}