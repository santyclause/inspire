import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js"
import { setText } from "../utils/Writer.js";

export class ImageController {
  constructor() {
    AppState.on('image', this.drawImage)
    this.getImage()
  }

  async getImage() {
    await imageService.getImage();
  }

  drawImage() {
    const img = AppState.image;
    const mainElem = document.getElementById('main');

    setText('photographer', img.author);
    mainElem.style.backgroundImage = `url(${img.largeImgUrl})`;
    return img.largeImgUrl;
  }
}