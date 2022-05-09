import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Zafer',
      email: 'zfrmnr@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ahmet',
      email: 'ahmet@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Slim shirt',
      slug: 'Adidas-slim-shirt',
      category: 'shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '3',
      name: 'Nike fit pant',
      slug: 'Nike-dit-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pants',
    },
    {
      // _id: '4',
      name: 'Adidas fit pant',
      slug: 'adidas-dit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pants',
    },
  ],
};

export default data;
