
import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const InterestRateCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDays, setLoanDays] = useState([30]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Interest rates based on loan amounts (annual rates)
  const getInterestRate = (amount: number) => {
    if (amount <= 500) return 0.28; // 28%
    if (amount <= 2000) return 0.26; // 26%
    if (amount <= 5000) return 0.24; // 24%
    return 0.22; // 22% for amounts above R5000
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const days = loanDays[0];
    const annualRate = getInterestRate(principal);
    const dailyRate = annualRate / 365;

    if (principal && days && dailyRate) {
      // Simple interest calculation for short-term loans
      const interest = principal * dailyRate * days;
      const totalPaymentCalc = principal + interest;
      const monthlyPaymentCalc = totalPaymentCalc / (days / 30);

      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayment(totalPaymentCalc);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            Loan Calculator
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Calculate your payments and see how much you'll pay. 
            We offer competitive interest rates with flexible repayment terms.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (ZAR)
                </label>
                <select
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quickaid-blue-500"
                >
                  <option value="">Select loan amount</option>
                  <option value="250">R0 - R500</option>
                  <option value="1250">R500 - R2,000</option>
                  <option value="3500">R2,000 - R5,000</option>
                  <option value="7500">R5,000 - R10,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Repayment Period: {loanDays[0]} days
                </label>
                <Slider
                  value={loanDays}
                  onValueChange={setLoanDays}
                  max={365}
                  min={7}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>7 days</span>
                  <span>180 days</span>
                  <span>365 days</span>
                </div>
              </div>

              <Button 
                onClick={calculateLoan}
                className="bg-gradient-quickaid hover:opacity-90 transition-opacity"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Payment
              </Button>

              {monthlyPayment > 0 && (
                <div className="bg-quickaid-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-quickaid-blue-900 mb-4">
                    Your Loan Calculation
                  </h3>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-semibold text-quickaid-blue-900">
                        R{parseFloat(loanAmount).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repayment Period:</span>
                      <span className="font-semibold text-quickaid-blue-900">
                        {loanDays[0]} days
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount to Pay:</span>
                      <span className="font-semibold text-quickaid-blue-900">
                        R{totalPayment.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-semibold text-quickaid-blue-900">
                        {(getInterestRate(parseFloat(loanAmount)) * 100).toFixed(0)}% per annum
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* What You'll Need Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-quickaid-blue-900 mb-4">
              What You'll Need to Apply
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Personal Documents:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Valid ID or Passport</li>
                  <li>• Proof of Address (utility bill)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Financial Documents:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3 Latest Payslips</li>
                  <li>• 3 Months Bank Statement</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                onClick={() => window.location.href = '/application'}
                className="w-full bg-gradient-quickaid hover:opacity-90 transition-opacity"
              >
                Start Your Application Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestRateCalculator;
