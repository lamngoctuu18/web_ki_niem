import React from 'react';
import { Heart, LogIn, LogOut } from 'lucide-react';

interface AuthButtonProps {
  onLoginClick: () => void;
  isLoggedIn?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onLoginClick, isLoggedIn = false }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onLoginClick}
        className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-pink-md hover:shadow-pink hover:bg-white/90 transition-all duration-300 border border-pink-200 group"
      >
        <Heart className="w-4 h-4 text-pink-500 group-hover:animate-heart-pulse" fill="currentColor" />
        <span className="text-pink-600 font-medium text-sm">
          {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
        </span>
        {isLoggedIn ? (
          <LogOut className="w-4 h-4 text-pink-500" />
        ) : (
          <LogIn className="w-4 h-4 text-pink-500" />
        )}
      </button>
    </div>
  );
};

export default AuthButton;