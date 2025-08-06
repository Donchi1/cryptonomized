import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaExclamationCircle, FaMinus } from 'react-icons/fa';

interface Withdrawal {
  id: string;
  status: 'confirmed' | 'pending';
  amount: string;
  wallet: string;
}

const LatestWithdrawals: React.FC = () => {
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const tbodyRef = useRef<HTMLTableElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Sample data - in a real app, this would come from an API
  useEffect(() => {
    const sampleData: Withdrawal[] = [
      { id: '1', status: 'confirmed', amount: '$10,000.00', wallet: '3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca' },
      { id: '2', status: 'pending', amount: '$51,000.00', wallet: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
      { id: '3', status: 'confirmed', amount: '$24,100.00', wallet: 'f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e' },
      { id: '4', status: 'confirmed', amount: '$4,000.00', wallet: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
      { id: '5', status: 'confirmed', amount: '$500', wallet: '00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1' },
      { id: '6', status: 'confirmed', amount: '$240,000', wallet: 'b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48' },
      { id: '7', status: 'confirmed', amount: '$17,000', wallet: '1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b' },
      { id: '8', status: 'pending', amount: '$51,000', wallet: '6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7' },
      { id: '9', status: 'confirmed', amount: '$21,000', wallet: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
      { id: '10', status: 'pending', amount: '$6,000', wallet: '797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d' },
    ];
    
    // Duplicate the data to create a seamless loop
    setWithdrawals([...sampleData, ...sampleData]);
  }, []);

  // Auto-scroll functionality (scrolling down)
  useEffect(() => {
    if (isPaused || !tbodyRef.current) return;
    
    let scrollPosition = 0;
    const speed = 0.5; // Pixels per frame
    let animationId: number;
    const tbody = tbodyRef.current;
    
    const scroll = () => {
      if (isPaused) return;
      
      scrollPosition += speed;
      const viewportHeight = Math.round(window.innerHeight * 0.6); // 60vh in pixels
      const maxScroll = viewportHeight * 0.8; // 80% of viewport height for smoother loop
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      // Apply transform for smooth scrolling (positive Y for downward scroll)
      tbody.style.transform = `translateY(${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <div className="bg-transparent dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full ">
      <div className="bg-red-100 dark:bg-red-900 p-4 border-b border-white">
        <h3 className="text-2xl font-semibold text-red-500 flex items-center">
          <FaMinus className="mr-2 text-red-600 dark:text-red-400" />
          Latest Withdrawals
        </h3>
      </div>

      <div className="relative h-[400px] overflow-hidden border border-white rounded-b-lg " style={{ height: '60vh', width: '100%', overflowX: 'auto' }}>
        <div 
          className="h-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <table className="w-full border-collapse" ref={tbodyRef}>
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-b border-white">
                  STATUS
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-b border-white">
                  AMOUNT (USD)
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-b border-white">
                  WALLET ADDRESS
                </th>
              </tr>
            </thead>
            <tbody 
              
              className="transform transition-transform duration-300"
            >
              {withdrawals.map((withdrawal, index) => (
                <tr 
                  key={`${withdrawal.id}-${index}`} 
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap border-r border-gray-200 dark:border-gray-700">
                    <span 
                      className={`inline-flex items-center px-3 py-1.5 rounded text-xs font-medium ${
                        withdrawal.status === 'confirmed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-orange-500 text-white'
                      }`}
                    >
                      {withdrawal.status === 'confirmed' ? (
                        <FaCheck className="mr-2 text-green-200" />
                      ) : (
                        <FaExclamationCircle className="mr-2 text-orange-200" />
                      )}
                      {withdrawal.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-blue-600 dark:text-blue-400 font-medium border-r border-gray-200 dark:border-gray-700">
                    {withdrawal.amount}
                  </td>
                  <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-mono text-xs truncate">
                    {withdrawal.wallet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestWithdrawals;
