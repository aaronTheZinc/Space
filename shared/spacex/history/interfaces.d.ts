export interface History {
    links:         Links;
    title:         string;
    eventDateUTC:  Date;
    eventDateUnix: number;
    details:       string;
    id:            string;
}

export interface Links {
    article: null | string;
}
