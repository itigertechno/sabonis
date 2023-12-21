export interface ICatalogFilter {
}

export interface ICatalogDropList {
    title: string;
    className?: string;
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