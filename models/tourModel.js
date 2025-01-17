import pkg from "mongoose";
const { Schema, model, models } = pkg;

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  ratings: {
    type: Number,
    default: 4.5,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a group size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },

  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have a summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});
const Tour = models.Tour || model("Tour", tourSchema);
export default Tour;
