import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

interface WelcomePageProps {
  onContinue: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onContinue }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onContinue();
    }, 800);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/love-background-new.jpg"
          alt="Love background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart 
          className="absolute top-20 left-10 w-8 h-8 text-pink-300 opacity-80 heart-floating"
          fill="currentColor"
        />
        <Star 
          className="absolute top-32 right-20 w-6 h-6 text-pink-200 opacity-70 heart-floating"
          style={{ animationDelay: '1s' }}
        />
        <Sparkles 
          className="absolute bottom-40 left-16 w-7 h-7 text-pink-100 opacity-60 heart-floating"
          style={{ animationDelay: '2s' }}
        />
        <Heart 
          className="absolute bottom-32 right-24 w-6 h-6 text-pink-400 opacity-70 heart-floating"
          fill="currentColor"
          style={{ animationDelay: '0.5s' }}
        />
        <Star 
          className="absolute top-60 left-1/4 w-5 h-5 text-pink-200 opacity-60 heart-floating"
          style={{ animationDelay: '1.5s' }}
        />
        <Sparkles 
          className="absolute top-80 right-1/3 w-6 h-6 text-pink-300 opacity-70 heart-floating"
          style={{ animationDelay: '2.5s' }}
        />
        <Heart 
          className="absolute top-96 left-1/3 w-5 h-5 text-white opacity-50 heart-floating"
          fill="currentColor"
          style={{ animationDelay: '3s' }}
        />
        <Star 
          className="absolute bottom-60 right-1/4 w-7 h-7 text-pink-100 opacity-60 heart-floating"
          style={{ animationDelay: '3.5s' }}
        />
        <Sparkles 
          className="absolute top-40 left-2/3 w-5 h-5 text-pink-400 opacity-80 heart-floating"
          style={{ animationDelay: '4s' }}
        />
        <Heart 
          className="absolute bottom-96 left-3/4 w-6 h-6 text-pink-200 opacity-50 heart-floating"
          fill="currentColor"
          style={{ animationDelay: '4.5s' }}
        />
        
        {/* Extra romantic elements */}
        <div className="absolute top-52 right-1/3 text-3xl opacity-70 heart-floating" style={{ animationDelay: '1.2s' }}>💕</div>
        <div className="absolute bottom-48 left-1/4 text-2xl opacity-60 heart-floating" style={{ animationDelay: '2.8s' }}>💖</div>
        <div className="absolute top-72 left-1/2 text-4xl opacity-50 heart-floating" style={{ animationDelay: '3.3s' }}>💗</div>
        <div className="absolute bottom-72 right-1/2 text-3xl opacity-60 heart-floating" style={{ animationDelay: '4.1s' }}>💓</div>
        <div className="absolute top-44 right-1/4 text-2xl opacity-70 heart-floating" style={{ animationDelay: '0.8s' }}>🌸</div>
        <div className="absolute bottom-56 left-1/5 text-3xl opacity-50 heart-floating" style={{ animationDelay: '2.2s' }}>🌺</div>
        <div className="absolute top-64 right-1/5 text-2xl opacity-60 heart-floating" style={{ animationDelay: '3.7s' }}>🦋</div>
        <div className="absolute bottom-80 right-1/6 text-3xl opacity-40 heart-floating" style={{ animationDelay: '1.9s' }}>✨</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        
        {/* Main title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide" style={{ lineHeight: '2' }}>
            <span className="inline-block animate-scale-in font-sedgwick bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white drop-shadow-2xl">
              HELLO
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-2 font-sedgwick drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300" style={{ lineHeight: '2' }}>
            MY LOVE!!!
          </h2>
        </div>

        {/* Decorative icons around title */}
        <div className="relative mb-12">
          <div className="flex justify-center items-center space-x-6 text-4xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Star className="w-8 h-8 text-pink-200 animate-heart-pulse" />
            <Sparkles className="w-10 h-10 text-pink-300 animate-heart-pulse" style={{ animationDelay: '0.3s' }} />
            <Heart className="w-12 h-12 text-pink-400 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.6s' }} />
            <Sparkles className="w-10 h-10 text-pink-200 animate-heart-pulse" style={{ animationDelay: '0.9s' }} />
            <Star className="w-8 h-8 text-white animate-heart-pulse" style={{ animationDelay: '1.2s' }} />
          </div>
          
          {/* Additional emoji decorations */}
          <div className="flex justify-center items-center space-x-8 mt-4 text-2xl animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🌺</span>
            <span className="animate-bounce" style={{ animationDelay: '1s' }}>💗</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-2xl md:text-4xl text-white font-light font-sedgwick tracking-wide drop-shadow-lg">
            DO YOU WANT TO SEE
          </p>
          <p className="text-3xl md:text-5xl font-medium font-sedgwick tracking-wide drop-shadow-lg mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200">
            YOUR GIFT???
          </p>
          
          {/* Extra romantic stickers around subtitle */}
          <div className="flex justify-center items-center space-x-4 mt-6 text-xl animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <span className="animate-pulse" style={{ animationDelay: '0.1s' }}>🎁</span>
            <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>💝</span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>🌹</span>
            <span className="animate-pulse" style={{ animationDelay: '0.7s' }}>💝</span>
            <span className="animate-pulse" style={{ animationDelay: '0.9s' }}>🎁</span>
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 animate-fade-in transition-all duration-800 ${isAnimating ? 'scale-110 opacity-80' : ''}`} style={{ animationDelay: '1.5s' }}>
          
          {/* YES Button */}
          <button
            onClick={handleButtonClick}
            className="group px-12 py-6 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 hover:from-pink-300 hover:via-pink-200 hover:to-pink-300 text-pink-800 hover:text-pink-900 font-bold text-2xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/70 min-w-[200px] backdrop-blur-sm"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="group-hover:animate-bounce">YES</span>
              <Heart className="w-6 h-6 group-hover:animate-heart-pulse" fill="currentColor" />
            </div>
          </button>

          {/* CÓ Button */}
          <button
            onClick={handleButtonClick}
            className="group px-12 py-6 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 hover:from-pink-300 hover:via-pink-200 hover:to-pink-300 text-pink-800 hover:text-pink-900 font-bold text-2xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/70 min-w-[200px] backdrop-blur-sm"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="group-hover:animate-bounce">CÓ</span>
              <Sparkles className="w-6 h-6 group-hover:animate-heart-pulse" />
            </div>
          </button>
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex justify-center items-center space-x-3 mb-2">
            <span className="text-2xl animate-pulse" style={{ animationDelay: '0.2s' }}>🌸</span>
            <p className="text-white/80 text-lg font-light tracking-widest font-sedgwick">
              Made with endless love
            </p>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>🌸</span>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.1s' }}>💕</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.3s' }}>💖</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>💗</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.7s' }}>💖</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.9s' }}>💕</span>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability and pink theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-pink-800/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default WelcomePage;