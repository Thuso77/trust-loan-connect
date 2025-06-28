
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idPassport: '',
    phoneNumber: '',
    email: '',
    workplace: '',
    loanAmount: '',
    message: ''
  });

  const [files, setFiles] = useState({
    idDocument: null as File | null,
    proofOfAddress: null as File | null,
    payslips: null as File | null,
    bankStatement: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFiles(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Files:', files);
    // Handle form submission here
  };

  return (
    <section id="application" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
              Apply for Your Personal Loan
            </h2>
            <p className="text-lg text-gray-700">
              Complete this simple form to get started with your personal loan application. 
              Our team will review your application and get back to you quickly.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-quickaid text-white rounded-t-lg">
              <CardTitle className="text-2xl">Personal Loan Application</CardTitle>
              <CardDescription className="text-quickaid-blue-100">
                All fields marked with * are required
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* ID/Passport Number */}
                <div className="space-y-2">
                  <Label htmlFor="idPassport" className="text-gray-700 font-medium">
                    ID Number or Passport Number *
                  </Label>
                  <Input
                    id="idPassport"
                    type="text"
                    value={formData.idPassport}
                    onChange={(e) => handleInputChange('idPassport', e.target.value)}
                    placeholder="Enter your ID or passport number"
                    required
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* Workplace */}
                <div className="space-y-2">
                  <Label htmlFor="workplace" className="text-gray-700 font-medium">
                    Where do you work? *
                  </Label>
                  <Input
                    id="workplace"
                    type="text"
                    value={formData.workplace}
                    onChange={(e) => handleInputChange('workplace', e.target.value)}
                    placeholder="Enter your employer or workplace"
                    required
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* Loan Amount */}
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                    Loan Amount Requested *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('loanAmount', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500">
                      <SelectValue placeholder="Select loan amount range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-500">R0 - R500</SelectItem>
                      <SelectItem value="500-2000">R500 - R2,000</SelectItem>
                      <SelectItem value="2000-5000">R2,000 - R5,000</SelectItem>
                      <SelectItem value="5000-10000">R5,000 - R10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* File Upload Section */}
                <div className="space-y-6 border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
                  
                  {/* ID/Passport Upload */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">
                      ID/Passport Document *
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-quickaid-blue-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange('idDocument', e.target.files?.[0] || null)}
                        className="hidden"
                        id="idDocument"
                      />
                      <label htmlFor="idDocument" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {files.idDocument ? files.idDocument.name : 'Click to upload ID/Passport'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Proof of Address Upload */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">
                      Proof of Address *
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-quickaid-blue-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange('proofOfAddress', e.target.files?.[0] || null)}
                        className="hidden"
                        id="proofOfAddress"
                      />
                      <label htmlFor="proofOfAddress" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {files.proofOfAddress ? files.proofOfAddress.name : 'Click to upload Proof of Address'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* 3 Latest Payslips Upload */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">
                      3 Latest Payslips *
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-quickaid-blue-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => handleFileChange('payslips', e.target.files?.[0] || null)}
                        className="hidden"
                        id="payslips"
                      />
                      <label htmlFor="payslips" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {files.payslips ? files.payslips.name : 'Click to upload 3 Latest Payslips'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* 3 Months Bank Statement Upload */}
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">
                      3 Months Bank Statement *
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-quickaid-blue-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange('bankStatement', e.target.files?.[0] || null)}
                        className="hidden"
                        id="bankStatement"
                      />
                      <label htmlFor="bankStatement" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {files.bankStatement ? files.bankStatement.name : 'Click to upload 3 Months Bank Statement'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Optional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your loan requirements..."
                    rows={4}
                    className="border-gray-300 focus:border-quickaid-blue-500 focus:ring-quickaid-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-quickaid hover:opacity-90 transition-opacity text-lg py-6"
                >
                  Submit Application
                </Button>

                {/* Disclaimer */}
                <div className="text-center text-sm text-gray-600 mt-6">
                  <p>
                    By submitting this application, you agree to our terms and conditions. 
                    QuickAid Financial Services is a registered Credit Provider licensed by the National Credit Regulator (NCR).
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
