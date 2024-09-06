import { AuthController } from './controllers/AuthController.js';
import { TodosController } from './controllers/TodosController.js';
import { TimeController } from './controllers/TimeController.js';
import { router } from './router-config.js';
import { ImageController } from './controllers/ImageController.js';
import { QuoteController } from './controllers/QuoteController.js';
import { WeatherController } from './controllers/WeatherController.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  TodosController = new TodosController();
  TimeController = new TimeController();
  ImageController = new ImageController();
  QuoteController = new QuoteController();
  WeatherController = new WeatherController();

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
