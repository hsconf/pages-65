export interface PageForm {
    name: string;
    title: string;
    text: string;
}

export interface Pages extends PageForm {

}

export interface ApiPage {
    [id: string]: PageForm
}