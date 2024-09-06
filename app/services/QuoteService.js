import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Quote } from "../models/Quote.js";

class QuoteService {


  async getQuote() {
    const response = await api.get('api/quotes');
    AppState.quote = new Quote(response.data);
    AppState.emit('quote')
  }
}

export const quoteService = new QuoteService();