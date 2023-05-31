// Find all the information about each products

db.collection.find({},{_id: 0}).toArray()
  
// Find the product price which are between 400 to 800

db.collection.find({
    $and: [
      {
        product_price: {
          $gt: 400
        }
      },
      {
        product_price: {
          $lt: 800
        }
      }
    ]
  },
  {
    _id: 0
  }).toArray()

// Find the product price which are not between 400 to 600


db.collection.find({
    $or: [
      {
        product_price: {
          $lt: 400
        }
      },
      {
        product_price: {
          $gt: 600
        }
      }
    ]
  },
  {
    _id: 0
  }).toArray()

// List the four product which are grater than 500 in price 


db.collection.find({
    "product_price": {
      $gt: 500
    }
  },
  {
    _id: 0
  }).toArray()


// Find the product name and product material of each products

db.collection.find({},
    {
      product_name: 1,
      product_material: 1,
      _id: 0
    }).toArray()


// Find the product with a row id of 10


db.collection.find({
    id: "10"
  },
  {
    _id: 0
  }).toArray()


// Find only the product name and product material


db.collection.find({
    id: "7"
  },
  {
    product_name: 1,
    product_material: 1,
    id: 1,
    _id: 0
  }).toArray()


// Find all products which contain the value of soft in product material 

db.collection.find({
  product_material: "Soft"
},
{
  _id: 0
}).toArray()

// Find products which contain product color indigo  and product price 492.00

// (Product its not there , but i write query)

db.collection.find({
    product_price: 492.00,
    product_color: "indigo"
  })


// Delete the products which product price value are same


db.collection.deleteOne({product_price:{$eq:36.00}})


