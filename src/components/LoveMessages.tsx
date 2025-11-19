import React, { useState, useEffect } from 'react';
import { Heart, Quote } from 'lucide-react';

const LoveMessages: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      sender: "Mai",
      message: "Anh à, cảm ơn anh vì đã luôn ở bên em, động viên em khi em buồn, chia sẻ niềm vui khi em vui. Anh là ánh nắng trong cuộc đời em, là lý do em mỉm cười mỗi ngày. Em yêu anh nhiều lắm! 💕",
      avatar: "/api/placeholder/100/100",
      bgColor: "from-pink-50 to-rose-50",
      textColor: "text-pink-800"
    },
    {
      id: 2,
      sender: "Đạt",
      message: "Em yêu ơi, từ ngày có em, cuộc sống anh trở nên ý nghĩa và tràn đầy màu sắc. Em là điều tuyệt vời nhất mà anh được trải nghiệm trong đời này. Anh hứa sẽ luôn yêu thương, che chở cho em. I love you to the moon and back! 🌙✨",
      avatar: "/api/placeholder/100/100",
      bgColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(timer);
  }, [messages.length]);

  const currentMsg = messages[currentMessage];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Lời nhắn gửi yêu thương
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những lời tình yêu chân thành nhất từ trái tim đôi ta
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Message Display */}
        <div className="relative">
          <div className={`bg-gradient-to-br ${currentMsg.bgColor} rounded-3xl p-8 md:p-12 shadow-pink-md border border-pink-100 transition-all duration-1000`}>
            {/* Quote icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-white rounded-full p-3 shadow-pink">
                <Quote className="w-6 h-6 text-pink-500" />
              </div>
            </div>

            {/* Sender info */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-md">
                <img
                  src={currentMsg.avatar}
                  alt={currentMsg.sender}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{currentMsg.sender}</h3>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-pink-500 animate-heart-pulse" fill="currentColor" />
                  <span className="text-gray-600 text-sm">Với tình yêu vô tận</span>
                </div>
              </div>
            </div>

            {/* Message content */}
            <div className="relative">
              {isTyping ? (
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-gray-500 text-sm">đang soạn tin nhắn...</span>
                </div>
              ) : (
                <blockquote className={`text-lg md:text-xl leading-relaxed ${currentMsg.textColor} font-medium italic animate-fade-in`}>
                  "{currentMsg.message}"
                </blockquote>
              )}
            </div>

            {/* Decorative hearts */}
            <div className="absolute top-4 right-4 text-pink-300 opacity-20">
              <Heart className="w-8 h-8" fill="currentColor" />
            </div>
            <div className="absolute bottom-4 right-8 text-rose-300 opacity-20">
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
          </div>

          {/* Message indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMessage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMessage 
                    ? 'bg-pink-500 scale-125' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Love stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-pink">
            <div className="text-3xl font-bold text-pink-600 mb-2">303</div>
            <div className="text-gray-600 text-sm">Ngày yêu nhau</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-pink">
            <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
            <div className="text-gray-600 text-sm">Tin nhắn yêu thương</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-pink">
            <div className="text-3xl font-bold text-pink-600 mb-2">1</div>
            <div className="text-gray-600 text-sm">Tình yêu duy nhất</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-pink">
            <div className="text-3xl font-bold text-pink-600 mb-2">💕</div>
            <div className="text-gray-600 text-sm">Mãi mãi bên nhau</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessages;