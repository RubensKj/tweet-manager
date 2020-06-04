import connection from '../database/connection';
import { Schema, Document } from 'mongoose';

export interface ITweet extends Document {
  title: string;
  description?: string;
}

const TweetSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String }
});

export default connection.model<ITweet>('tweets', TweetSchema);