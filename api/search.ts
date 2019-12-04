import axios from 'axios'
import {SearchResult} from "~/types";
export default class SearchRepository {
  find (phoneNumber: string): Promise<SearchResult> {
    return axios.get('https://us-central1-n-shield.cloudfunctions.net/fetchPostArticles').then(res => {
      return res.data
    })
  }
}
