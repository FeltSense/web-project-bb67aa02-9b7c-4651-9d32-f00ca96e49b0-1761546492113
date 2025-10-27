export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
      <p className="text-lg text-gray-600">Discover why food lovers keep coming back to Savory Haven</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"The farm-to-table freshness is unmatched! Every dish bursts with authentic flavors. The seasonal menu keeps us coming back monthly to try new creations. The chef's attention to ingredient quality really shines through."</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            SM
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
            <p className="text-sm text-gray-600">Food Blogger</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"Perfect ambiance for our anniversary dinner. The staff went above and beyond to make our evening special. The wine pairing recommendations were spot-on, and the presentation of each course was like edible art."</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            JC
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">James Chen</h4>
            <p className="text-sm text-gray-600">Marketing Director</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"As someone with dietary restrictions, I'm thrilled with how accommodating Savory Haven is. They crafted a custom gluten-free tasting menu that was just as impressive as the regular offerings. Finally, a place where I don't feel limited!"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            ER
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
            <p className="text-sm text-gray-600">Wellness Coach</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"We've hosted three corporate events here, and each time the experience has been flawless. The private dining room is elegant, the service is impeccable, and our clients are always impressed. The customizable menu options make it easy to cater to diverse groups."</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg mr-4">
            DK
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">David Kowalski</h4>
            <p className="text-sm text-gray-600">Event Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}