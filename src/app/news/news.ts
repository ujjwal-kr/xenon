export interface News {
    title?: string,
    link?: string,
    pub_date?: Pub_date,
    source: Source
}

interface Pub_date {
    _text?: string
}

interface Source {
    _text: string
}