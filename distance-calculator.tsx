import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DistanceCalculator = () => {
  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState(0);

  const calculateCost = (km) => {
    const calculatedCost = km * 0.5;
    setCost(calculatedCost);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCost(parseFloat(distance));
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <Calculator className="h-6 w-6 text-blue-500" />
          คำนวณค่าบริการ
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              ระยะทาง (กิโลเมตร)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่ระยะทาง"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            คำนวณ
          </button>

          {cost > 0 && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h3 className="text-lg font-semibold text-center text-blue-900">
                ผลการคำนวณ
              </h3>
              <div className="text-center mt-2">
                <p className="text-2xl font-bold text-blue-600">
                  {cost.toFixed(2)} บาท
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  ระยะทาง {distance} กม. × 0.5 บาท/กม.
                </p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default DistanceCalculator;
