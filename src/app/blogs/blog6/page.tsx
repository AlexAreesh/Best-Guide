import React from 'react';
import Footer from '@/app/components/Footer';

function Page() {
  return (
    <div className='bg-white text-black'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">International Cuisines: Best Spots for a Global Dining Experience</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Italian Cuisine at Osteria Francescana</h2>
          <p>
            Located in Modena, Italy, Osteria Francescana is known for its innovative dishes that pay homage to traditional Italian cuisine. Chef Massimo Bottura creates a unique dining experience with artistic presentations and bold flavors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Japanese Cuisine at Sukiyabashi Jiro</h2>
          <p>
            Famous for its sushi, Sukiyabashi Jiro in Tokyo, Japan, offers an unparalleled dining experience. The meticulous craftsmanship of Chef Jiro Ono ensures that each piece of sushi is a masterpiece of flavor and technique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. French Cuisine at Le Bernardin</h2>
          <p>
            Located in New York City, Le Bernardin is renowned for its seafood-focused French cuisine. The restaurant’s elegant atmosphere and impeccable service make it a top destination for a fine dining experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Mexican Cuisine at Pujol</h2>
          <p>
            Pujol in Mexico City offers a contemporary take on traditional Mexican dishes. Chef Enrique Olvera combines local ingredients with innovative techniques to create a culinary journey through Mexico’s rich flavors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Indian Cuisine at Gaggan</h2>
          <p>
            Gaggan in Bangkok, Thailand, is known for its progressive Indian cuisine. The restaurant features a playful menu that reimagines traditional Indian flavors with a modern twist, creating a memorable dining experience.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Page;
