import mongoose from "mongoose";

const toolSchema = new mongoose.Schema(
  {
    image: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    type: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    specifications: [String],
    category: {
      type: String,
      required: true,
    },
    basicInfo: {
      type: Object,
      required: true,
    },
    packagingAndDelivery: {
      type: Object,
      required: true,
    },

    available_quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sample_price: {
      type: Number,
      required: true,
    },
    total_sold: {
      type: Number,
      default: 0,
    },
    revenue: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("tools", toolSchema);
