export interface News {
    title?: Title;
    link?: Link;
    pubDate?: Pub_date;
    source: Source;
}

interface Link {
    _text?: string;
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