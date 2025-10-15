'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '919372324454'; // Format: country code + number without +
  const defaultMessage = encodeURIComponent(
    'Hi! I am interested in your products from Padma\'s Collection. I would like to know more about your offerings.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3">
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Chat with us on WhatsApp! 💬
          </span>
        </div>

        {/* Badge (optional - shows "Online" or notification count) */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
          1
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </a>
  );
}

