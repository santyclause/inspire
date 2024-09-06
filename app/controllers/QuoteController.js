import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { setHTML } from "../utils/Writer.js";

export class QuoteController {
  constructor() {
    AppState.on('quote', this.drawQuote)
    this.getQuote();
  }

  async getQuote() {
    try {
      await quoteService.getQuote();
    } catch (error) {
      Pop.error(error);
    }
  }

  drawQuote() {
    const quote = AppState.quote;
    setHTML('quote-cont', quote.HTMLTemplate);
  }
}