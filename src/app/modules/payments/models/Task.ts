import { safeParseISO } from "src/app/@core/utils/helpers";

export interface ITask {
  id: number;
  username: string;
  title: string;
  name: string;
  image: string;
  date: string;
  value: number;
  isPayed: boolean;
}

export class Task {
  id: number;
  username: string;
  title: string;
  name: string;
  image: string;
  date: Date;
  value: number;
  isPayed: boolean;

  constructor(data: ITask) {
    this.id = data.id;
    this.username = data.username;
    this.title = data.title;
    this.name = data.name;
    this.image = data.image;
    this.date = safeParseISO(data.date);
    this.value = data.value;
    this.isPayed = data.isPayed;
  }
}
