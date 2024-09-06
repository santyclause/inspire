export class Quote {
  constructor(data) {
    this.content = data.content || '';
    this.author = data.author || '';
  }

  get HTMLTemplate() {
    return `
        <h5>"${this.content}"</h5>
        <h6 class="author">- ${this.author}</h6>
    `
  }
}