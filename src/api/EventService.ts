import { IEvent } from '../models/IEvent';

export default class EventService {

  private static host: string = window.location.origin;

  static async setEvent(event: IEvent): Promise<void> {
    try {
      const response = await fetch(this.host + '/api/event', {
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

  static async deleteEvent(id: string): Promise<void> {
    try {
      const response = await fetch(this.host + '/api/event', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ id: id })
      });
      const json = await response.json();
      console.log(json.message);
    } catch (e) {
      console.log(e);

    }
  }
}