import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Sarah Turned Her Financial Emergency Into Success",
      excerpt: "Meet Sarah, a teacher from Johannesburg who used our personal loan to overcome a medical emergency and get back on track.",
      date: "2024-01-15",
      author: "QuickAid Team",
      image: "https://images.unsplash.com/photo-1494790108755-2616c18b9650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "5 Tips for Managing Your Personal Loan Effectively",
      excerpt: "Learn how to make the most of your personal loan and ensure timely repayments with these practical tips.",
      date: "2024-01-10",
      author: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Understanding Your Credit Score: A Beginner's Guide",
      excerpt: "Everything you need to know about credit scores and how they affect your loan applications.",
      date: "2024-01-05",
      author: "Credit Expert",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-quickaid-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-quickaid-blue-900 mb-6">
              Financial Insights & Stories
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from our customers and expert financial advice to help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-quickaid-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Story
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-quickaid-blue-900 mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button className="bg-gradient-quickaid hover:opacity-90 w-fit">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Articles */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-quickaid-blue-900 mb-8 text-center">
              More Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-quickaid-blue-900 mb-3">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="border-quickaid-blue-500 text-quickaid-blue-500 hover:bg-quickaid-blue-50">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Story Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-quickaid-blue-900 mb-6 text-center">
                Sarah's Success Story
              </h3>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Sarah Thompson, a 34-year-old primary school teacher from Johannesburg, found herself in a difficult situation when her daughter required emergency medical treatment. With limited savings and medical aid that didn't cover the full cost, Sarah needed R8,000 urgently.
                </p>
                
                <blockquote className="border-l-4 border-quickaid-blue-500 pl-6 my-8 italic text-gray-700">
                  "I was stressed and didn't know where to turn. A colleague recommended QuickAid Financial Services, and I'm so grateful they did. The application was simple, and I received a response within 2 hours."
                </blockquote>
                
                <p className="text-gray-700 mb-6">
                  Sarah applied for a R8,000 personal loan through our online application system. She submitted her required documents - ID, proof of address, payslips, and bank statements - and received approval the same day.
                </p>
                
                <p className="text-gray-700 mb-6">
                  "The terms were clearly explained, and there were no hidden surprises. I was able to get the treatment my daughter needed, and the flexible repayment terms meant I could manage the monthly payments comfortably within my budget."
                </p>
                
                <p className="text-gray-700 mb-6">
                  Sarah successfully repaid her loan over 10 months, and her daughter made a full recovery. Today, she recommends QuickAid Financial Services to anyone in need of quick, reliable financial assistance.
                </p>
                
                <div className="bg-quickaid-blue-50 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-bold text-quickaid-blue-900 mb-4">
                    Ready to Apply Like Sarah?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Get the financial assistance you need with our quick and transparent personal loan process.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/application'}
                    className="bg-gradient-quickaid hover:opacity-90"
                  >
                    Start Your Application
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
