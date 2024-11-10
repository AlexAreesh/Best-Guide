
function About() {
  return (
    <section className='w-full mt-24'>
      {/* Container 1 */}
      <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant1" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/img12.jpg" }
            alt="Best Street Food Stalls " 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Best Street Food Stalls </h2>
          <p className="text-lg text-gray-600">
          Discover the must-visit street food vendors serving up local favorites.
          </p>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant2" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/img45.jpeg" }
            alt="Family-Run Restaurants Offering Authentic Local Flavors" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Family-Run Restaurants Offering Authentic Local Flavors</h2>
          <p className="text-lg text-gray-600">
          Experience the heartwarming stories and dishes from teh road side famous family restaurants
          </p>
        </div>
      </div>

      {/* Container 3 */}
      <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant3" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/mix.jpg" } 
            alt="Vegan Delights: The Best Plant-Based Eateries" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Vegan Delights: The Best Plant-Based Eateries</h2>
          <p className="text-lg text-gray-600">
          Explore delicious vegan options that cater to all food lovers and craetes new oportunites for vegan to explore teh new world full of cuisines
          </p>
        </div>
      </div>

            {/* Container 4 */}
            <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant2" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/144.jpg" }
            alt="Hidden Coffee Shops with the Best Brews" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hidden Coffee Shops with the Best Brews</h2>
          <p className="text-lg text-gray-600">
          Find your next favorite spot for a cozy cup of coffee.
          </p>
        </div>
      </div>

            {/* Container 5 */}
            <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant2" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/vg.jpeg" }
            alt="Top 5 Desserts You Must Try" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Top 5 Desserts You Must Try</h2>
          <p className="text-lg text-gray-600">
          Indulge your sweet tooth with the city’s best dessert spots.
          </p>
        </div>
      </div>

            {/* Container 6 */}
            <div className="container flex items-center mb-12">
        <a href="https://example.com/restaurant2" target="_blank" rel="noopener noreferrer" className="w-1/2 pr-4">
          <img 
            src={"/images/av.jpg" }
            alt="International Cuisine: Best Spots for a Global Dining Experience" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </a>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">International Cuisine: Best Spots for a Global Dining Experience</h2>
          <p className="text-lg text-gray-600">
          Explore authentic international flavors right in your city.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
