import React, { useState } from 'react';
import { Heart, Home, Camera, Clock, MessageCircle, Mail, X } from 'lucide-react';

// Import existing components
import StorySection from './StorySection';
import Timeline from './Timeline';
import PhotoAlbum from './PhotoAlbum';
import LoveMessages from './LoveMessages';

interface MainWebsiteProps {
  onLogout: () => void;
}

const MainWebsite: React.FC<MainWebsiteProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'story', label: 'Câu chuyện', icon: Heart },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'photos', label: 'Album ảnh', icon: Camera },
    { id: 'messages', label: 'Tin nhắn', icon: MessageCircle },
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onOpenLetter={() => setIsLetterOpen(true)} />;
      case 'story':
        return <StorySection />;
      case 'timeline':
        return <Timeline />;
      case 'photos':
        return <PhotoAlbum />;
      case 'messages':
        return <LoveMessages />;
      default:
        return <HomePage onOpenLetter={() => setIsLetterOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header with logout button */}
      <header className="bg-white/70 backdrop-blur-xl shadow-lg border-b border-pink-100/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white animate-heart-pulse" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-sedgwick">
                Mai ❤️ Đạt
              </h1>
              <p className="text-xs text-gray-500 font-medium">Forever & Always</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 text-pink-600 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-pink-200/50"
          >
            <span className="text-sm font-semibold">Đăng xuất</span>
            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Heart className="w-3 h-3 text-white" fill="currentColor" />
            </div>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white/60 backdrop-blur-2xl border-b border-pink-100/30 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-pink-50/80 p-2 rounded-2xl shadow-inner border border-pink-100/50">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25 scale-105'
                        : 'text-pink-600 hover:bg-white/80 hover:shadow-md'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                      activeTab === tab.id ? 'animate-bounce' : ''
                    }`} />
                    <span className="text-sm">{tab.label}</span>
                    {activeTab === tab.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {renderActiveContent()}
      </main>

      {/* Love Letter Modal */}
      {isLetterOpen && (
        <LoveLetter onClose={() => setIsLetterOpen(false)} />
      )}
    </div>
  );
};

// Home Page Component
const HomePage: React.FC<{ onOpenLetter: () => void }> = ({ onOpenLetter }) => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Enhanced floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-pink-200/40 heart-floating`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                fontSize: `${0.8 + Math.random() * 1.2}rem`
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Background gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="text-center max-w-5xl mx-auto z-10 relative">
          {/* Main hero image with modern card design */}
          <div className="mb-12 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 border-8 border-white hover:scale-105 transition-all duration-500 relative group">
                <img
                  src="/api/placeholder/400/400"
                  alt="Mai và Đạt"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Enhanced hero text */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold font-sedgwick bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent leading-tight" style={{ lineHeight: '2' }}>
                Mai
                <Heart className="inline w-16 h-16 mx-4 text-red-400 animate-heart-pulse" fill="currentColor" />
                Đạt
              </h1>
              <div className="flex justify-center space-x-2 mb-4">
                {['💕', '🌸', '💖', '🌸', '💕'].map((emoji, i) => (
                  <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Kỷ niệm hành trình yêu thương của chúng ta
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100/50">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Mỗi khoảnh khắc bên nhau đều là những trang đẹp nhất
                  <br />
                  trong cuốn sách tình yêu của đôi ta
                </p>
              </div>
            </div>

            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              {/* Love Letter Button */}
              <button
                onClick={onOpenLetter}
                className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white rounded-2xl shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center space-x-4">
                  <Mail className="w-7 h-7 group-hover:animate-bounce" />
                  <span className="font-bold text-lg">Mở lá thư tình yêu</span>
                  <Heart className="w-6 h-6 group-hover:animate-heart-pulse" fill="currentColor" />
                </div>
              </button>

              {/* Explore button */}
              <button
                onClick={() => {}}
                className="group flex items-center space-x-4 px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-pink-300/50 text-pink-600 rounded-2xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Heart className="w-6 h-6 group-hover:animate-heart-pulse" />
                <span className="font-bold text-lg">Khám phá thêm</span>
                <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:animate-ping"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/50 to-transparent"></div>
      </section>
    </div>
  );
};

// Love Letter Component
const LoveLetter: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenLetter = () => {
    setIsOpened(true);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center p-6 z-50">
      <div className="relative max-w-3xl w-full">
        {!isOpened ? (
          // Closed Letter with enhanced design
          <div className="text-center animate-scale-in">
            <button
              onClick={handleOpenLetter}
              className="group relative"
            >
              <div className="w-96 h-72 mx-auto bg-gradient-to-br from-pink-100/80 via-rose-100/80 to-pink-200/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 flex items-center justify-center relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 via-transparent to-rose-200/50 animate-pulse"></div>
                
                <div className="text-center z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    {/* Floating dots around mail icon */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-pink-700 font-sedgwick mb-2">Lá thư tình yêu</h3>
                  <p className="text-pink-600 text-lg font-medium mb-4">Từ trái tim anh dành cho em</p>
                  
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 rounded-2xl border border-pink-200/50">
                    <span className="text-pink-700 font-semibold">Nhấn để mở</span>
                    <Heart className="w-5 h-5 text-pink-500 animate-heart-pulse" fill="currentColor" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <Heart className="absolute top-6 right-6 w-8 h-8 text-pink-400/60 animate-float" fill="currentColor" />
                <Heart className="absolute bottom-6 left-6 w-6 h-6 text-rose-400/50 animate-float" fill="currentColor" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-6 w-3 h-3 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/4 right-8 w-2 h-2 bg-rose-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </button>
            
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-600 rounded-2xl hover:bg-white hover:text-gray-800 transition-all duration-200 shadow-lg border border-gray-200/50 font-medium"
            >
              Đóng
            </button>
          </div>
        ) : (
          // Opened Letter with enhanced design
          <div className="bg-gradient-to-br from-pink-50/90 via-white/90 to-rose-50/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 max-h-[85vh] overflow-y-auto animate-fade-in">
            {/* Enhanced Letter Header */}
            <div className="bg-gradient-to-r from-pink-200/80 via-rose-200/80 to-pink-200/80 p-8 rounded-t-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white hover:rotate-90 transition-all duration-300 shadow-lg"
              >
                <X className="w-6 h-6 text-pink-600" />
              </button>
              
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white animate-heart-pulse" fill="currentColor" />
                </div>
                <h3 className="text-4xl font-bold text-pink-700 font-sedgwick mb-2">Gửi em yêu của anh</h3>
                <p className="text-pink-600 text-lg font-medium">Với tình yêu vô tận ❤️</p>
                
                {/* Decorative line */}
                <div className="flex justify-center items-center space-x-2 mt-4">
                  <div className="h-px bg-pink-300 w-12"></div>
                  <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
                  <div className="h-px bg-pink-300 w-12"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Letter Content */}
            <div className="p-10 space-y-8">
              <div className="prose prose-pink max-w-none">
                <div className="text-center mb-8">
                  <p className="text-3xl font-sedgwick text-pink-600 mb-4">Em yêu ơi,</p>
                  <div className="flex justify-center space-x-1">
                    {['💕', '🌸', '💖', '🌹', '💕'].map((emoji, i) => (
                      <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <div className="bg-white/50 rounded-2xl p-6 border-l-4 border-pink-400">
                    <p>
                      Từ ngày anh gặp em, cuộc đời anh như được thắp sáng bởi ánh nắng mặt trời. 
                      Em là điều tuyệt vời nhất đã đến với anh, là lý do để anh mỉm cười mỗi ngày.
                    </p>
                  </div>

                  <p>
                    Những khoảnh khắc bên em đều là những kỷ niệm đáng trân trọng nhất trong lòng anh. 
                    Từ lần đầu gặp gỡ tại quán café nhỏ, đến những buổi tối dạo phố cùng nhau, 
                    mỗi giây phút đều là món quà quý giá mà cuộc sống ban tặng cho đôi ta.
                  </p>

                  <div className="bg-pink-50/80 rounded-2xl p-6 border border-pink-200/50">
                    <p>
                      Anh hứa sẽ luôn yêu thương, che chở và đồng hành cùng em trên con đường dài phía trước. 
                      Dù có khó khăn gì, anh cũng sẽ nắm tay em vượt qua tất cả.
                    </p>
                  </div>

                  <p>
                    Em là tình yêu đầu tiên và cũng là tình yêu cuối cùng của anh. 
                    Cảm ơn em đã đến bên anh và làm cho cuộc sống này trở nên ý nghĩa.
                  </p>
                </div>

                <div className="text-center mt-12 mb-8">
                  <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-8 border border-pink-200/50">
                    <p className="text-3xl text-pink-600 font-sedgwick mb-4">I love you to the moon and back!</p>
                    <div className="text-4xl space-x-2">
                      🌙✨💫⭐🌟
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3 mt-6">
                    <Heart className="w-8 h-8 text-pink-500 animate-heart-pulse" fill="currentColor" />
                    <Heart className="w-8 h-8 text-rose-500 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.3s' }} />
                    <Heart className="w-8 h-8 text-pink-400 animate-heart-pulse" fill="currentColor" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-block bg-white/60 rounded-2xl p-6 border border-pink-200/50">
                    <p className="text-gray-600 font-sedgwick text-xl mb-2">Yêu em nhiều lắm,</p>
                    <p className="text-pink-600 font-sedgwick text-3xl">Đạt ❤️</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Letter Footer */}
            <div className="bg-gradient-to-r from-pink-100/80 via-rose-100/80 to-pink-100/80 p-6 rounded-b-3xl text-center border-t border-pink-200/50">
              <div className="flex justify-center items-center space-x-4 text-lg text-pink-600 font-medium">
                <span className="text-2xl">🌸</span>
                <span>Made with endless love</span>
                <span className="text-2xl">🌸</span>
              </div>
              <div className="flex justify-center space-x-2 mt-3">
                {['💕', '💖', '💗', '💓', '💕'].map((emoji, i) => (
                  <span key={i} className="text-lg animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainWebsite;