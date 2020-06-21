export interface News {
    title?: Title;
    link?: string;
    pubDate?: Pub_date;
    source: Source;
}

interface Title {
    _text? :string;
}

interface Pub_date {
    _text?: string;
}

interface Source {
    _text: string;
}