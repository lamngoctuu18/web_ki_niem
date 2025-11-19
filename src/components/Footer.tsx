import React from 'react';
import { Heart, Instagram, Facebook, Mail, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;
  const yearsTogetherText = currentYear === startYear 
    ? '2024' 
    : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main content */}
        <div className="mb-12">
          {/* Animated heart */}
          <div className="mb-6">
            <Heart 
              className="w-16 h-16 mx-auto text-white animate-heart-pulse" 
              fill="currentColor" 
            />
          </div>

          {/* Main message */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            Cảm ơn vì đã cùng chúng mình
            <br />
            đi tiếp hành trình này
          </h2>

          <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Mỗi khoảnh khắc bên nhau đều là món quà quý giá. 
            Cảm ơn vì đã là một phần trong câu chuyện tình yêu của đôi ta.
          </p>

          {/* Anniversary info */}
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Calendar className="w-6 h-6 text-pink-100" />
              <span className="text-xl font-semibold">Kỷ niệm tình yêu</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {yearsTogetherText}
            </div>
            <div className="text-pink-100">
              Từ ngày đầu tiên đến mãi mãi
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://instagram.com" 
            className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com" 
            className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="mailto:mai.dat.love@gmail.com" 
            className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="h-px bg-white bg-opacity-30 flex-1 max-w-20"></div>
          <Heart className="w-4 h-4 text-pink-200" fill="currentColor" />
          <div className="h-px bg-white bg-opacity-30 flex-1 max-w-20"></div>
        </div>

        {/* Bottom text */}
        <div className="space-y-2 text-pink-100">
          <p className="text-lg font-medium">
            Mai ❤️ Đạt
          </p>
          <p className="text-sm">
            Made with love • {yearsTogetherText}
          </p>
          <p className="text-xs opacity-75">
            "Tình yêu đích thực không bao giờ có điểm kết thúc"
          </p>
        </div>

        {/* Floating hearts animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart 
            className="absolute w-4 h-4 text-pink-200 opacity-30 heart-floating" 
            style={{ left: '10%', top: '20%', animationDelay: '0s' }}
            fill="currentColor"
          />
          <Heart 
            className="absolute w-3 h-3 text-pink-100 opacity-40 heart-floating" 
            style={{ left: '20%', top: '60%', animationDelay: '2s' }}
            fill="currentColor"
          />
          <Heart 
            className="absolute w-5 h-5 text-pink-200 opacity-20 heart-floating" 
            style={{ right: '15%', top: '30%', animationDelay: '1s' }}
            fill="currentColor"
          />
          <Heart 
            className="absolute w-3 h-3 text-pink-100 opacity-50 heart-floating" 
            style={{ right: '25%', top: '70%', animationDelay: '3s' }}
            fill="currentColor"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;