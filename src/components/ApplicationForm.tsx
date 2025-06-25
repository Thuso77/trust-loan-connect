
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    email: '',
    loanAmount: '',
    loanType: '',
    message: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: '',
      idNumber: '',
      phoneNumber: '',
      email: '',
      loanAmount: '',
      loanType: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <section 
      id="application" 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.95), rgba(59, 130, 246, 0.95)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Apply for Your Loan
          </h2>
          <p className="text-lg text-quickaid-blue-100 max-w-3xl mx-auto">
            Take the first step towards your financial goals. Fill out our secure application form and get an instant decision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-quickaid-blue-900">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="idNumber" className="text-quickaid-blue-900">
                    ID Number / Passport Number *
                  </Label>
                  <Input
                    id="idNumber"
                    type="text"
                    value={formData.idNumber}
                    onChange={(e) => handleChange('idNumber', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Enter your ID or passport number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phoneNumber" className="text-quickaid-blue-900">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="+27 xx xxx xxxx"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-quickaid-blue-900">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="loanType" className="text-quickaid-blue-900">
                    Loan Type *
                  </Label>
                  <Select value={formData.loanType} onValueChange={(value) => handleChange('loanType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="home">Home Loan</SelectItem>
                      <SelectItem value="auto">Auto Loan</SelectItem>
                      <SelectItem value="business">Business Loan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="loanAmount" className="text-quickaid-blue-900">
                    Loan Amount Requested *
                  </Label>
                  <Input
                    id="loanAmount"
                    type="text"
                    value={formData.loanAmount}
                    onChange={(e) => handleChange('loanAmount', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="R 100,000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-quickaid-blue-900">
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-1"
                  rows={4}
                  placeholder="Tell us more about your loan requirements or any questions you have..."
                />
              </div>

              <div className="bg-quickaid-blue-50 rounded-lg p-4">
                <p className="text-sm text-quickaid-blue-800">
                  <strong>Your information is secure:</strong> We use bank-level encryption to protect your personal data. 
                  By submitting this form, you agree to our terms and conditions and privacy policy.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-quickaid hover:opacity-90 transition-opacity text-lg py-6"
              >
                {isSubmitting ? 'Processing Application...' : 'Submit Application'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need help with your application? Call us at 
                <span className="text-quickaid-blue-600 font-semibold"> +27 11 123 4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
