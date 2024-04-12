export interface ICharacters {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: IData;
}
interface IData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IResult[];
}
export interface IResult {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: IComics;
    series: IComics;
    stories: IStories;
    events: IComics;
    urls: IUrl[];
}
interface IUrl {
    type: string;
    url: string;
}
interface IStories {
    available: number;
    collectionURI: string;
    items: IItem[];
    returned: number;
}
interface IItem {
    resourceURI: string;
    name: string;
    type?: string;
}
interface IComics {
    available: number;
    collectionURI: string;
    items: IItem[];
    returned: number;
}
interface IThumbnail {
    path: string;
    extension: string;
}
