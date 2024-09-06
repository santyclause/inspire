import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { BGImage } from "../models/BGImage.js";

class ImageService {


  async getImage() {
    const response = await api.get('api/images');
    const newImage = new BGImage(response.data);

    AppState.image = newImage;
    AppState.emit('image')
  }
}

export const imageService = new ImageService();