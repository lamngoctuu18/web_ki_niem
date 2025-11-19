import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Floating hearts decoration */}
        <div className="absolute top-20 left-10 text-pink-300 heart-floating">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute top-32 right-20 text-pink-200 heart-floating" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-32 left-20 text-pink-300 heart-floating" style={{ animationDelay: '2s' }}>
          <Heart className="w-4 h-4" fill="currentColor" />
        </div>

        {/* Main hero image */}
        <div className="mb-8 animate-scale-in">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-pink-md border-4 border-white hover:scale-105 transition-transform duration-300">
            <img
              src="/api/placeholder/400/400"
              alt="Mai và Đạt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero text */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 font-poppins">
            Mai <Heart className="inline w-12 h-12 mx-2 text-red-400" fill="currentColor" /> Đạt
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Kỷ niệm hành trình yêu thương của chúng ta
          </p>

          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Mỗi khoảnh khắc bên nhau đều là những trang đẹp nhất trong cuốn sách tình yêu của đôi ta
          </p>

          <button
            onClick={scrollToStory}
            className="inline-flex items-center px-8 py-4 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 hover:shadow-pink-md transition-all duration-300 font-medium text-lg group"
          >
            Khám phá câu chuyện của chúng mình
            <Heart className="ml-2 w-5 h-5 group-hover:animate-heart-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;