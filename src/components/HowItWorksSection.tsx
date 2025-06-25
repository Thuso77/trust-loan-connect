
const HowItWorksSection = () => {
  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            Simple Personal Loan Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Getting a personal loan with QuickAid is straightforward and fast. 
            Apply online today and get the funding you need.
          </p>
          
          <div className="bg-gradient-quickaid rounded-lg p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">
              Join thousands of satisfied customers who have trusted QuickAid for their personal loan needs.
            </p>
            <button 
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-quickaid-blue-900 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
