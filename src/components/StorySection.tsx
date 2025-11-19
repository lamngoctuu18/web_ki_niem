import React from 'react';
import { Heart, MapPin, Calendar } from 'lucide-react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Chúng mình đã gặp nhau như thế nào?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-pink-md hover:shadow-pink transform hover:scale-105 transition-all duration-300">
                <img
                  src="/api/placeholder/500/600"
                  alt="Kỷ niệm đầu tiên"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 text-pink-300">
                <Heart className="w-8 h-8" fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 -left-4 text-pink-200">
                <Heart className="w-6 h-6" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Right side - Story content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-pink-600">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-medium">20 tháng 01, 2024</span>
              </div>
              
              <div className="flex items-center space-x-3 text-pink-600">
                <MapPin className="w-5 h-5" />
                <span className="text-lg font-medium">Quán café Highlands - Quận 1</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Ngày ấy, trời Sài Gòn nắng nhẹ. Anh ngồi ở góc quán, đang loay hoay với cuốn sách 
                "Clean Code" thì nhìn thấy em bước vào với chiếc áo trắng và nụ cười tỏa nắng. 
                Lúc đó anh biết, trái tim mình đã "crash" rồi.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Em còn nhớ không, em đã hỏi: "Excuse me, chỗ này có ai ngồi không?" rồi cười 
                một cách dễ thương khiến anh quên mất cả cú pháp JavaScript đang học. 
                Từ đó, mỗi ngày anh đều mong được gặp em ở quán này.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Ba tuần sau, khi em chấp nhận đi xem phim với anh, anh đã biết rằng 
                tình yêu này không phải là một bug mà là feature đẹp nhất mà Chúa đã 
                code vào cuộc đời anh. ❤️
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-400">
              <p className="text-pink-800 italic text-lg font-medium">
                "Có những câu chuyện tình yêu bắt đầu từ một cái nhìn, 
                có những câu chuyện bắt đầu từ một nụ cười... 
                Câu chuyện của chúng ta bắt đầu từ một ly café và 
                một cuốn sách về lập trình." 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;