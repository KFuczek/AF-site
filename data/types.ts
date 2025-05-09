export interface ParagraphCard {
    title: string;
    description: string;
    imageUrl: string;
    type: string;
}

export interface ParagraphTeaser {
    title: string;
    url: string;
    description: string;
}

export interface ParagraphSection {
    scrollId: string;
    card: ParagraphCard;
    teaser: ParagraphTeaser;
}

export interface ParagraphData {
    info: ParagraphSection;
    history: ParagraphSection;
    news: ParagraphSection;
    realization: ParagraphSection;
    howToOrder: ParagraphSection;
    more: ParagraphSection;
    contact: ParagraphSection;
}
