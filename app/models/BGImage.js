export class BGImage {
  constructor(data) {
    this.author = data.author;
    this.largeImgUrl = data.largeImgUrl || data.url;
  }
}