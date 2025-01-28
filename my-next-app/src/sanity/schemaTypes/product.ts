export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'imagePath',
        title: 'Image Path',
        type: 'url',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",

      }
    },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: "size",
        type: "array",
        title: "Size",
        of: [{ type: "string" }],
        options: {
          list: ["S", "M", "L", "XL"], // Predefined sizes
        },
        validation: (Rule:import("@sanity/types").NumberRule) =>
          Rule.required()
            .min(1)
            .max(4)
            .error("Please select at least one size and at most all available sizes."),
      },
      {
        name: "colors",
        type: "array",
        title: "Colors",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "Red", value: "red" },
            { title: "Blue", value: "blue" },
            { title: "Black", value: "black" },
          ], // Predefined colors
        },
        validation: (Rule: import("@sanity/types").NumberRule) =>
          Rule.required()
            .min(1)
            .error("At least one color must be selected."),
      },
      {
        name: "discount",
        type: "number",
        title: "Discount",
        
      },
    ],
  };
  