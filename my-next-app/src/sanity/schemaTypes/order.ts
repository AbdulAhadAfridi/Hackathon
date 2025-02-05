export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
      },
      {
        name: 'companyName',
        type: 'string',
        title: 'Company Name',
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'city',
        type: 'string',
        title: 'City',
      },
      {
        name: 'province',
        type: 'string',
        title: 'Province',
      },
      {
        name: 'zipCode',
        type: 'string',
        title: 'ZIP Code',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'cartItems',
        type: 'array',
        title: 'Cart Items',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'subtotal',
        type: 'number',
        title: 'Subtotal',
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount',
      },
      {
        name: 'total',
        type: 'number',
        title: 'Total',
      },
      {
                name: 'status',
                type: 'string',
                title: 'OrderStatus',
                options:{
                    list: [
                        {title: 'Processing', value: 'Processing'},
                        {title: 'Shipped', value: 'Shipped'},
                        {title: 'Delivered', value: 'Delivered'},
                        {title: 'Cancelled', value: 'Cancelled'},
                    ],
                    layout: 'radio'
                },
        initialValue : 'Pending',
                },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };

// import { title } from 'process';

// export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//         {
//             name: 'name',
//             type: 'string',
//             title: 'FirstName',
//         },
//         {
//             name: 'surName',
//             type: 'string',
//             title: 'LastName',
//         },
//         {
//             name: 'address',
//             type: 'string',
//             title: 'Address',

//         },
//         {
//             name: 'city',
//             type: 'string',
//             title: 'City',
//         },
//         {
//             name: 'zipCode',
//             type: 'string',
//             title: 'ZipCode',
//         },
//         {
//             name: 'email',
//             type: 'string',
//             title: 'Email',
//         },
//     {
//         name: 'phone',
//         type: 'string',
//         title: 'Phone',
//     },
//     {
//         name: 'discount',
//         type: 'number',
//         title: 'Discount',
//     },
//     {
//         name: 'cartItems',
//         type: 'array',  
//         title: 'CartItems',
//         of: [{type: 'reference', to: {type: 'product'}}]
//     },
//     {
//         name: 'total',
//         type: 'number',
//         title: 'TotalPrice',
//     },
//     {
//         name: 'status',
//         type: 'string',
//         title: 'OrderStatus',
//         options:{
//             list: [
//                 {title: 'Processing', value: 'Processing'},
//                 {title: 'Shipped', value: 'Shipped'},
//                 {title: 'Delivered', value: 'Delivered'},
//                 {title: 'Cancelled', value: 'Cancelled'},
//             ],
//             layout: 'radio'
//         },
// initialValue : 'Pending',
//         },
        
    
//     ]
// }



