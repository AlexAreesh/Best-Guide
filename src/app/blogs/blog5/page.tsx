import React from 'react';
import Footer from '@/app/components/Footer';

function Page() {
  return (
    <div className='bg-dessert-bg bg-cover opacity-90 bg-blur-sm text-black'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-highlightcolor mb-6">Top 5 Desserts You Must Try</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-600 mb-4">1. Tiramisu</h2>
          <p className="text-black">
            Tiramisu is a classic Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cheese. Its rich and creamy texture, combined with a hint of cocoa, makes it a must-try for dessert lovers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-600 mb-4">2. Chocolate Lava Cake</h2>
          <p className="text-black">
            This decadent dessert features a warm chocolate cake with a gooey molten center. Served with a scoop of vanilla ice cream, it’s the perfect indulgence for chocolate enthusiasts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-600 mb-4">3. Crème Brûlée</h2>
          <p className="text-black">
            Crème brûlée is a luxurious dessert made with a rich custard base topped with a layer of hard caramel. The contrast between the creamy custard and the crunchy top is simply delightful.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-600 mb-4">4. Pavlova</h2>
          <p className="text-black">
            Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova. Its crisp crust and soft, light inside are typically topped with whipped cream and fresh fruits, making it a refreshing treat.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brown-600 mb-4">5. Cheesecake</h2>
         
          <p className="text-black">
            Cheesecake is a rich and creamy dessert made with cream cheese, sugar, and eggs, often set on a graham cracker crust. It can be flavored with various toppings, from fruit to chocolate, making it a versatile favorite.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Page;
