import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ImageService {


  async getImage() {
    const response = await api.get('api/images');
    const newImage = response.data;

    AppState.image = newImage;
    AppState.emit('image')
  }
}

export const imageService = new ImageService();