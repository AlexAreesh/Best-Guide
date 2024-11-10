import Footer from '@/app/components/Footer';
import React from 'react';

function Page() {
  return (
    <div className='bg-plantbased bg-cover opacity-90 backdrop-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-highlightcolor mb-6">Vegan Delights: The Best Plant-Based Eateries</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Introduction to Plant-Based Dining</h2>
          
          <p className="text-black">
            Plant-based dining is gaining popularity as more people discover the benefits of veganism for health, the environment, and animal welfare. This guide explores some of the best vegan eateries that offer delicious and innovative plant-based dishes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Top Vegan Restaurants</h2>
         
          <p className="text-black">
            Many restaurants are now exclusively vegan or offer substantial plant-based menus. These eateries not only cater to vegans but also to anyone looking for fresh, wholesome food.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Innovative Vegan Dishes</h2>
        
          <p className="text-black">
            From plant-based burgers to dairy-free desserts, innovative vegan dishes have come a long way. Chefs are experimenting with flavors and textures, making plant-based food exciting and satisfying.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Vegan Food Trends</h2>
         
          <p className="text-black">
            Current trends in the vegan food scene include globally inspired dishes, superfoods, and creative uses of vegetables that are transforming the way we think about plant-based dining.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Finding Local Vegan Eateries</h2>
          
          <p className="text-black">
            To find the best vegan eateries in your area, check local listings, review apps, and social media for recommendations. Many cities now have dedicated vegan food festivals that showcase local talent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">The Benefits of Vegan Eating</h2>
        
          <p className="text-black">
            Eating plant-based has numerous health benefits, including lower cholesterol, better digestion, and increased energy levels. Additionally, it's a sustainable choice for the environment.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Page;
