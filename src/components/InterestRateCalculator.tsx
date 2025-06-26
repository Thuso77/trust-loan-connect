
import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InterestRateCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('3');
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
    const months = parseInt(loanTerm);
    const annualRate = getInterestRate(principal);
    const monthlyRate = annualRate / 12;

    if (principal && months && monthlyRate) {
      // Calculate monthly payment using loan formula
      const monthlyPaymentCalc = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalPaymentCalc = monthlyPaymentCalc * months;

      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayment(totalPaymentCalc);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-quickaid-blue-900 mb-6">
            Interest Rate Calculator
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Calculate your monthly payments and see how much you'll pay. 
            We offer competitive interest rates.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term (Months)
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quickaid-blue-500"
              >
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
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
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-semibold text-quickaid-blue-900">
                      R{monthlyPayment.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
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
                
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-quickaid-blue-600">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <div className="w-8 h-5 bg-red-600 rounded-l-sm flex items-center justify-center mr-1">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <div className="w-8 h-5 bg-yellow-500 rounded-r-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">We accept Mastercard payments</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestRateCalculator;
