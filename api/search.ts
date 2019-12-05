import {SearchResult} from "~/types";
import RequestService from '~/utils/request'
export default class SearchRepository {
  // @ts-ignore
  find (phoneNumber: string): Promise<SearchResult> {
    return RequestService.get<SearchResult>('https://us-central1-n-shield.cloudfunctions.net/fetchPostArticles?phoneNumber=' + phoneNumber )
      .then(res => {
        return <SearchResult>res.data;
      })
  }
}
