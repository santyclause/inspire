import { setText } from "../utils/Writer.js";
import { timeService } from "../services/TimeService.js";

export class TimeController {
  constructor() {
    this.interval = setInterval(this.getTime, 100);
  }

  getTime() {
    let time = timeService.getTime;
    drawTime(time);
  }
}

function drawTime(time) {
  setText('time', time)
}