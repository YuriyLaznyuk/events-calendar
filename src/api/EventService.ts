import { IEvent } from '../models/IEvent';

export default class EventService {


  static async setEvent(event: IEvent): Promise<void> {
    try {
      const response = await fetch(window.location.origin + '/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(event)
      });
      const json = await response.json();
      console.log(json.message);
    } catch (e) {
      console.log(e);
    }
  }
}