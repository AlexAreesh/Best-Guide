import Footer from '@/app/components/Footer';
import React from 'react';

function Page() {
    return (
        <div className="bg-white text-black">
            <main className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Exploring the Best Street Food Stalls in Pakistan</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Introduction to Pakistani Street Food</h2>
                    <p>
                        Pakistani street food is famous for its vibrant flavors and variety. From spicy snacks to sweet desserts, street vendors offer some of the most authentic and delicious experiences in the country. Here’s a guide to the best street food stalls you can't miss!
                    </p>
                  
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Top Street Food in Karachi</h2>
                    <p>
                        Karachi, known for its bustling food scene, offers some of the best street food in Pakistan. Popular stalls include Bun Kabab joints, spicy chaat corners, and traditional Nihari shops. Each has a unique twist on classic recipes, serving dishes full of flavor.
                    </p>
                   
                </section>

                {/* ... rest of the sections with similar image placeholders ... */}

                <Footer />
            </main>
        </div>
    );
}

export default Page;