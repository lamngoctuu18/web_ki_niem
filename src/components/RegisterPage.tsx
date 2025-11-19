import React, { useState } from 'react';
import { Heart, User, Lock, Mail, Eye, EyeOff, Calendar } from 'lucide-react';

interface RegisterPageProps {
  onBack: () => void;
  onLoginClick: () => void;
  onLoginSuccess?: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onBack, onLoginClick, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    anniversaryDate: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    if (!formData.anniversaryDate) {
      newErrors.anniversaryDate = 'Vui lòng chọn ngày kỷ niệm';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate registration process
    setTimeout(() => {
      alert('Đăng ký thành công! Chào mừng bạn đến với câu chuyện tình yêu của chúng tôi! ❤️');
      setIsSubmitting(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        onLoginClick();
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Romantic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
        <img
          src="/api/placeholder/1920/1080"
          alt="Romance background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-200 opacity-20 heart-floating w-6 h-6`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
          <span className="font-bold text-gray-700">Mai ❤️ Đạt</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
          >
            Đăng nhập
          </button>
          <button
            onClick={onBack}
            className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
          >
            Về trang chính
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 -mt-16">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2 drop-shadow-lg">
                THAM GIA CÙNG CHÚNG MÌNH
              </h1>
              <p className="text-gray-600 text-sm">
                Tạo tài khoản để trở thành một phần trong câu chuyện tình yêu
              </p>
              <div className="flex justify-center space-x-1 mt-2">
                <Heart className="w-4 h-4 text-pink-400 animate-heart-pulse" fill="currentColor" />
                <Heart className="w-3 h-3 text-pink-300 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-4 h-4 text-pink-400 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div className="space-y-1">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Tên đăng nhập"
                    className={`w-full pl-12 pr-4 py-3 bg-white/80 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      errors.username 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                </div>
                {errors.username && (
                  <p className="text-xs text-red-500 ml-4">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email của bạn"
                    className={`w-full pl-12 pr-4 py-3 bg-white/80 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 ml-4">{errors.email}</p>
                )}
              </div>

              {/* Anniversary Date */}
              <div className="space-y-1">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type="date"
                    name="anniversaryDate"
                    value={formData.anniversaryDate}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-white/80 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.anniversaryDate 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                </div>
                {errors.anniversaryDate && (
                  <p className="text-xs text-red-500 ml-4">{errors.anniversaryDate}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Mật khẩu"
                    className={`w-full pl-12 pr-12 py-3 bg-white/80 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      errors.password 
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
                {errors.password && (
                  <p className="text-xs text-red-500 ml-4">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Xác nhận mật khẩu"
                    className={`w-full pl-12 pr-12 py-3 bg-white/80 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-400 ${
                      errors.confirmPassword 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 ml-4">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-semibold rounded-2xl transform transition-all duration-200 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Đang đăng ký...</span>
                  </div>
                ) : (
                  'Đăng ký ngay ❤️'
                )}
              </button>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-gray-600 text-sm">Đã có tài khoản? </span>
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors duration-200 hover:underline"
                >
                  Đăng nhập ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;