import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HolidaySchema = new Schema({
    title: {
      type: String,
      required: 'Title is required'
    },
    description: {
      type: String,
      required: 'Description is required'
    },
    date: {
      type: Date   ,
      required: 'Date is required'         
    },
    participants: [String],
    location: {
      type: String   ,
      required: 'Location is required'         
    },
});
