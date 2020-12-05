export interface AuthResponseModel {
    message: string;
}

export interface Page {
    movie: number;
    tvShow: number;
    search: string;
}

export interface PageReadResponseModel {
    page: Page;
    message?: string;
}

export interface PageModifyResponseModel {
    message: string;
}
