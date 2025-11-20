import React, { useState } from 'react';
import { Heart, User, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess?: () => void;
  onBack?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [showRegisterBubble, setShowRegisterBubble] = useState(false);
  const [showForgotBubble, setShowForgotBubble] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState<'normal' | 'heart' | 'forgot'>('normal');

  const correctUsername = '241024'; // ngày yêu cầu
  const correctPassword = '211124'; // mật khẩu yêu cầu

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setUsernameError('');
    setPasswordError('');
    
    let hasError = false;
    
    if (username !== correctUsername) {
      setUsernameError('vui lòng nhập tên đăng nhập là ngày đầu nhắn tin');
      hasError = true;
    }
    
    if (password !== correctPassword) {
      setPasswordError('Vui lòng ngày bắt đầu yêu nhau');
      hasError = true;
    }
    
    if (hasError) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } else {
      // Đăng nhập thành công
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }, 500);
    }
  };

  const handleRegister = () => {
    setBackgroundMode('heart');
    setShowRegisterBubble(true);
    setShowForgotBubble(false);
  };

  const handleForgotPassword = () => {
    setBackgroundMode('forgot');
    setShowForgotBubble(true);
    setShowRegisterBubble(false);
  };

  const resetToNormal = () => {
    setBackgroundMode('normal');
    setShowRegisterBubble(false);
    setShowForgotBubble(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          backgroundMode === 'normal' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50"></div>
        <img
          src="/api/placeholder/1920/1080"
          alt="Couple background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Heart making background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          backgroundMode === 'heart' || backgroundMode === 'forgot' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-50 to-white"></div>
        <img
          src="/api/placeholder/1920/1080"
          alt="Heart making"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Blur overlay for sides */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm md:backdrop-blur-none"></div>
      <div className="hidden md:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-xl"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/30 to-transparent backdrop-blur-xl"></div>

      {/* Navigation */}
      <nav className="relative z-20 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
          <span className="font-bold text-gray-700">Mai ❤️ Đạt</span>
        </div>
        <div className="flex items-center space-x-4">
          {(backgroundMode !== 'normal' || showRegisterBubble || showForgotBubble) && (
            <button
              onClick={resetToNormal}
              className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
            >
              Đăng nhập
            </button>
          )}
          {backgroundMode === 'normal' && !showRegisterBubble && !showForgotBubble && (
            <button
              onClick={handleRegister}
              className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
            >
              Tạo tài khoản
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
            >
              Về trang chính
            </button>
          )}
        </div>
      </nav>

      {/* Main content */}
      <div className={`relative z-10 flex items-center justify-center min-h-screen p-4 -mt-16 transition-opacity duration-500 ${
        showRegisterBubble || showForgotBubble ? 'opacity-30 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Mobile-like container */}
        <div className="w-full max-w-sm mx-auto">
          <div 
            className={`bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
              isShaking ? 'animate-shake' : ''
            } border border-white/50`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2 drop-shadow-lg">
                XIN CHÀO
              </h1>
              <div className="flex justify-center space-x-1">
                <Heart className="w-4 h-4 text-pink-400 animate-heart-pulse" fill="currentColor" />
                <Heart className="w-3 h-3 text-pink-300 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-4 h-4 text-pink-400 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Input */}
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setUsernameError('');
                    }}
                    placeholder="Nhập tên đăng nhập"
                    className={`w-full pl-12 pr-4 py-4 bg-white/80 border-2 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      usernameError 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                </div>
                {usernameError && (
                  <p className="text-sm text-pink-600 ml-4 animate-fade-in">
                    {usernameError}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError('');
                    }}
                    placeholder="Nhập mật khẩu"
                    className={`w-full pl-12 pr-12 py-4 bg-white/80 border-2 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      passwordError 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-sm text-pink-600 ml-4 animate-fade-in">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Đăng nhập ❤️
              </button>

              {/* Forgot Password Link */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors duration-200 hover:underline"
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* Register Button */}
              <button
                type="button"
                onClick={handleRegister}
                className={`w-full py-4 font-semibold rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${
                  usernameError || passwordError 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800' 
                    : 'bg-gradient-to-r from-purple-300 to-purple-400 text-white hover:from-purple-400 hover:to-purple-500'
                }`}
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Chat Bubbles */}
      {showRegisterBubble && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-fade-up">
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-pink-300 max-w-xs mx-4 relative">
            <p className="text-pink-700 font-medium text-center text-base">
              Có tài khoản rồi mà còn đăng ký à?
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pink-300"></div>
            {/* Close button */}
            <button
              onClick={resetToNormal}
              className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 text-white rounded-full text-xs hover:bg-pink-600 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {showForgotBubble && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-fade-up">
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-pink-300 max-w-xs mx-4 relative animate-bounce-gentle">
            <p className="text-pink-700 font-bold text-center text-lg">
              RỒI CHIA TAY ĐI
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pink-300"></div>
            {/* Close button */}
            <button
              onClick={resetToNormal}
              className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 text-white rounded-full text-xs hover:bg-pink-600 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;