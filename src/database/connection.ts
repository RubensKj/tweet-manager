import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://mongodbtest:Bhp0KeQI3IJWOuQ7@cluster0-8tjip.mongodb.net/tweet-manager?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  autoIndex: true
});

export default mongoose;