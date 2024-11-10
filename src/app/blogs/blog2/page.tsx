import Footer from '@/app/components/Footer';
import React from 'react';

function Page() {
  return (
    <div className='bg-restaurantbg bg-cover opacity-90 backdrop-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-highlightcolor mb-6">Exploring Family-Run Restaurants Offering Authentic Local Flavors</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Introduction to Family-Run Restaurants</h2>
          
          <p className="text-black">
            Family-run restaurants often provide a unique dining experience, offering authentic recipes that have been passed down through generations. These establishments pride themselves on preserving local culinary traditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Why Choose Family-Run Eateries?</h2>
       
          <p className="text-black">
            Choosing a family-run restaurant means enjoying food made with love and care. These eateries often use fresh, locally sourced ingredients and traditional cooking methods, delivering an authentic taste of the region.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Notable Family-Run Restaurants Across the Country</h2>
         
          <p className="text-black">
            Across the country, several family-run restaurants stand out for their commitment to authentic local flavors. These places not only serve great food but also contribute to preserving cultural culinary traditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Tips for Finding Authentic Family-Run Restaurants</h2>
         
          <p className="text-black">
            To find authentic family-run restaurants, look for places with a strong local following and a menu that reflects traditional dishes. Asking locals for recommendations can also lead you to hidden gems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">The Essence of Family-Run Restaurants</h2>
          
          <p className="text-black">
            Family-run restaurants embody the spirit of togetherness and tradition. Dining in these places is not just about the food; it’s about experiencing a piece of the family’s history and culture.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Page;
