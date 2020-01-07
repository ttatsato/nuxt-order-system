export interface SearchResult {
  id: number;
  tel: string;
  person: Person;
  tags: Array<Tag>;
  numberOfArticle: Number;
  ArticlesFromShop: Array<ArticleFromShop>;
  ArticlesFromPersonal: Array<ArticleFromPersonal>;
}

export interface Person {
  id: number;
  phoneNumber: string;
}
export interface OrderSet {
  order: Array<Order>
}
export interface Order {
  userId: number
  shopId: number
  product: Product
  memo: string
  status: string
}
export interface Product {
  id: number
  shopId: number
  name: string
  price: number
}


export interface Article {
  id: number;
  tags: Array<Tag>;
  date: Date;
  content: string;
  postData: Date;
}

export interface ArticleFromShop extends Article{
  shopId: number;
}

export interface ArticleFromPersonal extends Article{
  personalId: number;
}

export interface Tag {
  id: number;
  date: Date;
  content: string;
  postData: Date;
}
