const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table"
    },
    consumer: {
      type: String,
      required: true
    },
    dishes: [
      {
        dish: {
          type: Schema.Types.ObjectId,
          ref: "Dish",
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        notes: {
          type: String
        },
        status: {
          type: String,
          required: true,
          default: "Ordenado",
          enum: ["Ordenado", "Entregado", "Cancelado"]
        }
      }
    ]
  },
  { timestamps: true }
);

// virtual to get the general order status
OrderSchema.virtual("status").get(function() {
  const dishes_status = new Set(this.dishes.map(dish => dish.status));
  if (dishes_status.has("Ordenado")) return "Abierta";
  return "Cerrada";
});

// enable the use of virtuals for schema
OrderSchema.set("toObject", { virtuals: true });
OrderSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Order", OrderSchema);
