import React from 'react';
import { Heart, Calendar, Star, Gift, Coffee, Cake } from 'lucide-react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  isSpecial?: boolean;
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      date: "20/01/2024",
      title: "Lần đầu gặp nhau",
      description: "Ngày định mệnh khi hai trái tim tìm thấy nhau trong quán café nhỏ ấy. Một cái nhìn, một nụ cười, và mọi thứ bắt đầu từ đây.",
      icon: <Coffee className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      date: "14/02/2024",
      title: "Ngày chính thức yêu nhau",
      description: "Valentine đáng nhớ nhất! Anh đã chính thức hỏi: 'Em có muốn làm người yêu anh không?' và em đã gật đầu với gương mặt đỏ bừng.",
      icon: <Heart className="w-6 h-6" />,
      image: "/api/placeholder/300/200",
      isSpecial: true
    },
    {
      id: 3,
      date: "25/05/2024",
      title: "Kỷ niệm 100 ngày yêu",
      description: "100 ngày ngọt ngào đầu tiên! Anh đã tặng em 100 bông hoa giấy nhỏ, mỗi bông đều có một lời nhắn yêu thương.",
      icon: <Star className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      date: "20/07/2024",
      title: "Chuyến du lịch đầu tiên",
      description: "Đà Lạt - thành phố ngàn hoa. Chúng ta đã cùng nhau ngắm hoàng hôn trên đồi chè và hứa sẽ đi thật nhiều nơi bên nhau.",
      icon: <Gift className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      date: "15/10/2024",
      title: "Kỷ niệm 8 tháng",
      description: "Ngày anh nấu cho em bữa tối đầu tiên (và cũng là lần đầu anh nấu ăn 😅). Dù hơi mặn nhưng em vẫn ăn hết và nói 'ngon lắm'.",
      icon: <Cake className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-pink-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Hành trình yêu thương
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những khoảnh khắc đáng nhớ trong câu chuyện tình yêu của chúng ta
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-pink-300 rounded-full"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 ${
                  item.isSpecial ? 'w-6 h-6 bg-pink-500' : 'w-4 h-4 bg-pink-400'
                } rounded-full border-4 border-white shadow-pink flex items-center justify-center z-10`}>
                  {item.isSpecial && (
                    <Heart className="w-3 h-3 text-white" fill="currentColor" />
                  )}
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`bg-white rounded-2xl shadow-pink-md p-6 hover:shadow-pink transform hover:-translate-y-2 transition-all duration-300 ${
                    item.isSpecial ? 'border-2 border-pink-300' : ''
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-pink-500" />
                          <span className="text-pink-600 font-medium">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {item.image && (
                      <div className="mb-4 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>

                    {item.isSpecial && (
                      <div className="mt-4 flex justify-center">
                        <Heart className="w-6 h-6 text-pink-500 animate-heart-pulse" fill="currentColor" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;