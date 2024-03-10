import * as mongoose from 'mongoose';

import { HolidaySchema } from '../models/Holiday';

const Holiday = mongoose.model('Holiday', HolidaySchema);

export function create(holiday: any){
  const newHoliday = new Holiday(holiday);
  return newHoliday.save();
}

export function update(id: string, holiday: any){
  return Holiday.updateOne({ _id: id }, holiday)
}

export function listAll(){
  return Holiday.find({}).exec();
}

export function remove(id: string) {
  return Holiday.deleteOne({ _id: id });
}

export function load(id: string) {
  return Holiday.findById(id);
}