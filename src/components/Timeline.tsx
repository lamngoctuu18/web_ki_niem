import React from 'react';
import { Heart, Calendar, Star, Gift, Coffee, Cake, Music, Camera, Plane, BookOpen, Gamepad2, Sparkles } from 'lucide-react';

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
      date: "Tháng 1/2024",
      title: "Lần đầu gặp nhau",
      description: "Ngày định mệnh khi hai trái tim tìm thấy nhau trong quán café nhỏ ấy. Một cái nhìn, một nụ cười, và mọi thứ bắt đầu từ đây.",
      icon: <Coffee className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      date: "Tháng 2/2024",
      title: "Ngày chính thức yêu nhau",
      description: "Valentine đáng nhớ nhất! Anh đã chính thức hỏi: 'Em có muốn làm người yêu anh không?' và em đã gật đầu với gương mặt đỏ bừng.",
      icon: <Heart className="w-6 h-6" />,
      image: "/api/placeholder/300/200",
      isSpecial: true
    },
    {
      id: 3,
      date: "Tháng 3/2024",
      title: "Hẹn hò đầu tiên",
      description: "Chuyến xem phim đầu tiên cùng nhau. Em đã chọn một bộ phim lãng mạn và anh thì cứ ngắm em suốt buổi chiếu.",
      icon: <Camera className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      date: "Tháng 4/2024",
      title: "Picnic mùa xuân",
      description: "Buổi picnic đầu tiên ở công viên khi hoa anh đào nở rộ. Chúng ta đã chụp vô số ảnh và cùng nhau làm bánh sandwich.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      date: "Tháng 5/2024",
      title: "Kỷ niệm 100 ngày yêu",
      description: "100 ngày ngọt ngào đầu tiên! Anh đã tặng em 100 bông hoa giấy nhỏ, mỗi bông đều có một lời nhắn yêu thương.",
      icon: <Star className="w-6 h-6" />,
      image: "/api/placeholder/300/200",
      isSpecial: true
    },
    {
      id: 6,
      date: "Tháng 6/2024",
      title: "Concert đầu tiên",
      description: "Đi xem concert của ca sĩ em yêu thích. Dù anh không biết các bài hát nhưng thấy em vui là anh cũng hạnh phúc rồi.",
      icon: <Music className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      date: "Tháng 7/2024",
      title: "Chuyến du lịch đầu tiên",
      description: "Đà Lạt - thành phố ngàn hoa. Chúng ta đã cùng nhau ngắm hoàng hôn trên đồi chè và hứa sẽ đi thật nhiều nơi bên nhau.",
      icon: <Plane className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      date: "Tháng 8/2024",
      title: "Sinh nhật của em",
      description: "Sinh nhật 20 tuổi của em. Anh đã chuẩn bị một bữa tiệc nhỏ với bánh kem tự làm (hơi lệch nhưng em vẫn khen ngon!).",
      icon: <Cake className="w-6 h-6" />,
      image: "/api/placeholder/300/200",
      isSpecial: true
    },
    {
      id: 9,
      date: "Tháng 9/2024",
      title: "Học nấu ăn cùng nhau",
      description: "Bắt đầu học nấu những món ăn em thích. Từ việc đổ muối thành đường cho đến những bữa cơm ngon lành.",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 10,
      date: "Tháng 10/2024",
      title: "Gaming cùng nhau",
      description: "Em bắt đầu chơi game cùng anh. Dù chưa giỏi nhưng thật vui khi có thể chia sẻ sở thích này với em.",
      icon: <Gamepad2 className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 11,
      date: "Tháng 11/2024",
      title: "Kỷ niệm 9 tháng",
      description: "9 tháng bên nhau và tình yêu ngày càng sâu đậm hơn. Anh biết em chính là người anh muốn gắn bó cả đời.",
      icon: <Gift className="w-6 h-6" />,
      image: "/api/placeholder/300/200"
    },
    {
      id: 12,
      date: "Tháng 12/2024",
      title: "Giáng sinh đầu tiên",
      description: "Giáng sinh đầu tiên bên nhau. Cùng trang trí cây thông, tặng quà và hứa hẹn sẽ có thật nhiều mùa Giáng sinh bên nhau.",
      icon: <Star className="w-6 h-6" />,
      image: "/api/placeholder/300/200",
      isSpecial: true
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