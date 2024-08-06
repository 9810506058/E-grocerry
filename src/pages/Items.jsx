import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Messi Canva',
    href: '',
    imageSrc: '/123.jpg',
    imageAlt: 'Product 1 Image',
    Description: "Image description",
    price: 'Rs 400',
  },
  {
    id: 2,
    name: 'Product 2',
    href: '/products/2',
    imageSrc: '/images/logo192.png',
    imageAlt: 'Product 2 Image',
    Description: "Image description",
    price: 'Rs 400',
  },
  {
    id: 3,
    name: 'Product 3',
    href: '/products/3',
    imageSrc: '/images/logo192.png',
    imageAlt: 'Product 3 Image',
    Description: "Image description",
    price: 'Rs 350',
  },
  {
    id: 4,
    name: 'Product 4',
    href: '/products/4',
    imageSrc: '/images/logo192.png',
    imageAlt: 'Product 4 Image',
    Description: "Image description",
    price: 'Rs 450',
    
  },
  {
    id: 5,
    name: 'Product 5',
    href: '/Itemdescription.js',
    imageSrc: '/images/logo192.png',
    imageAlt: 'Product 5 Image',
    Description: "Image description",
    price: 'Rs 550',
  },
  // Add more product objects as needed
];

const Items = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 mt-20 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">The Items</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 border border-red-800 border">
                  <Link to={product.href}>
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between ml-4 ">
                  <div>
                    <h3 className="text-sm text-gray-700 ">
                      <Link to={product.href} className="text-red-600">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.Description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="flex justify-between items-center mt-3 gap-0 my-4 ml-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Quick View
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2  mr-3 rounded hover:bg-green-700">
                            Add to Cart
                        </button>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Items;
