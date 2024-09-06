class TimeService {

  get getTime() {
    let time = new Date().toLocaleTimeString();
    return time;
  }
}

export const timeService = new TimeService();