import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Heart, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QAPair {
  question: string;
  answer: string;
  keywords: string[];
}

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Chào em! Anh có thể trả lời những câu hỏi về câu chuyện tình yêu của chúng ta. Em hỏi gì đi nhé! ❤️",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const qaDatabase: QAPair[] = [
    { question: "Khi nào chúng ta gặp nhau?", answer: "Chúng ta gặp nhau lần đầu vào tháng 1/2024 tại một quán café nhỏ. Đó thực sự là định mệnh! ☕💕", keywords: ["gặp nhau", "lần đầu", "khi nào"] },
    { question: "Ngày yêu nhau là khi nào?", answer: "Ngày 14/02/2024 - Valentine! Ngày anh chính thức hỏi em làm người yêu và em đã gật đầu đỏ mặt hihi 💖", keywords: ["yêu nhau", "valentine", "chính thức"] },
    { question: "Anh yêu em như thế nào?", answer: "Anh yêu em như yêu chính cuộc sống của mình. Em là ánh nắng mỗi sáng, là lý do anh mỉm cười mỗi ngày 🌞💕", keywords: ["yêu em", "như thế nào", "feelings"] },
    { question: "Kỷ niệm đáng nhớ nhất?", answer: "Chuyến du lịch Đà Lạt tháng 7! Chúng ta cùng ngắm hoàng hôn và hứa sẽ đi thật nhiều nơi bên nhau 🌅🏔️", keywords: ["kỷ niệm", "đáng nhớ", "đà lạt"] },
    { question: "Màu sắc em thích?", answer: "Em thích màu hồng! Như màu chủ đạo của website này, dịu dàng và ngọt ngào như em vậy 💗🌸", keywords: ["màu sắc", "thích", "hồng"] },
    { question: "Món ăn em thích?", answer: "Em thích bánh ngọt và trà sữa! Anh luôn nhớ mua cho em mỗi khi đi qua cửa hàng 🧋🍰", keywords: ["món ăn", "thích", "bánh ngọt"] },
    { question: "Sở thích của em?", answer: "Em thích chụp ảnh, nghe nhạc và đọc sách. Đặc biệt là chụp ảnh với anh! 📸🎵📚", keywords: ["sở thích", "hobby", "chụp ảnh"] },
    { question: "Tại sao anh yêu em?", answer: "Vì em là người đặc biệt nhất! Em dễ thương, hiền lành và luôn khiến anh cảm thấy yêu đời hơn ✨💕", keywords: ["tại sao", "yêu em", "special"] },
    { question: "Ước mơ của chúng ta?", answer: "Ước mơ của chúng ta là được bên nhau mãi mãi, xây dựng một gia đình hạnh phúc và đi khắp thế giới cùng nhau 🏡🌍", keywords: ["ước mơ", "tương lai", "gia đình"] },
    { question: "Ngày sinh của em?", answer: "Sinh nhật em vào tháng 8! Năm nay anh đã làm bánh kem tự tay, tuy hơi lệch nhưng em vẫn khen ngon 😅🎂", keywords: ["sinh nhật", "ngày sinh", "tháng 8"] },
    { question: "Quà tặng đầu tiên?", answer: "Quà đầu tiên anh tặng em là một bó hoa hồng nhỏ cùng thiệp thủ công. Em vẫn giữ thiệp đó! 🌹💌", keywords: ["quà tặng", "đầu tiên", "hoa hồng"] },
    { question: "Bài hát yêu thích?", answer: "Bài hát 'A Thousand Years' vì nó nói lên tình cảm anh dành cho em - yêu em ngàn năm! 🎵💖", keywords: ["bài hát", "yêu thích", "thousand years"] },
    { question: "Phim yêu thích xem cùng nhau?", answer: "Các bộ phim lãng mạn! Đặc biệt là những buổi chiếu tối khi anh được nắm tay em 🎬💕", keywords: ["phim", "xem cùng", "lãng mạn"] },
    { question: "Địa điểm hẹn hò yêu thích?", answer: "Công viên gần nhà! Nơi chúng ta thường đi dạo buổi tối và ngắm sao cùng nhau ⭐🌙", keywords: ["địa điểm", "hẹn hò", "công viên"] },
    { question: "Cách anh gọi em?", answer: "Anh gọi em là 'em yêu', 'baby', và 'công chúa nhỏ'. Mỗi cách gọi đều chứa đựng tình yêu của anh 👑💕", keywords: ["gọi em", "nickname", "em yêu"] },
    { question: "Thói quen dễ thương của em?", answer: "Em có thói quen cắn môi khi suy nghĩ và hay lắc đầu khi ngại ngùng. Siêu dễ thương! 😊💖", keywords: ["thói quen", "dễ thương", "cute"] },
    { question: "Điều anh thích ở em nhất?", answer: "Nụ cười của em! Mỗi khi em cười là lúc anh cảm thấy cả thế giới đều sáng lên 😊✨", keywords: ["thích nhất", "nụ cười", "smile"] },
    { question: "Kế hoạch tương lai?", answer: "Anh muốn cưới em, có con với em, và già đi bên em. Đó là kế hoạch trọn đời của anh 💒👶", keywords: ["kế hoạch", "tương lai", "cưới"] },
    { question: "Tính cách em như thế nào?", answer: "Em hiền lành, dễ thương nhưng cũng rất bướng bỉnh. Anh yêu tất cả mặt của em! 😂💕", keywords: ["tính cách", "hiền lành", "bướng bỉnh"] },
    { question: "Món quà ý nghĩa nhất?", answer: "Chiếc nhẫn đôi chúng ta mua cùng nhau. Nó tượng trưng cho lời hứa mãi bên nhau 💍💕", keywords: ["món quà", "ý nghĩa", "nhẫn đôi"] },
    { question: "Làm gì khi em buồn?", answer: "Anh sẽ ôm em thật chặt, kể chuyện cười và mua đồ ăn em thích. Anh không thể thấy em buồn! 🤗💝", keywords: ["em buồn", "làm gì", "comfort"] },
    { question: "Cách anh tỏ tình?", answer: "Anh đã tặng em 99 bông hoa giấy với lời nhắn 'Làm người yêu anh nhé' ngày Valentine 🌹💌", keywords: ["tỏ tình", "valentine", "hoa giấy"] },
    { question: "Nơi chúng ta thường đi?", answer: "Quán trà sữa gần trường! Đó là nơi chúng ta có vô số kỷ niệm đẹp 🧋💕", keywords: ["thường đi", "quán trà sữa", "kỷ niệm"] },
    { question: "Điều em ghét ở anh?", answer: "Em ghét anh... quá yêu em! Khiến em phải yêu anh mất rồi đấy 😅💖", keywords: ["ghét", "điều ghét", "cute answer"] },
    { question: "Giấc mơ về em?", answer: "Anh mơ về một tương lai hai đứa già đi bên nhau, kể cho cháu nghe câu chuyện tình yêu này 👴👵💕", keywords: ["giấc mơ", "tương lai", "già đi"] },
    { question: "Cách anh biết yêu em?", answer: "Khi anh thấy mình cứ nghĩ về em mọi lúc, muốn chia sẻ mọi thứ với em. Đó là lúc anh biết mình yêu em 💭💖", keywords: ["biết yêu", "cảm giác", "realize"] },
    { question: "Em có đẹp không?", answer: "Em đẹp nhất thế giới trong mắt anh! Đẹp từ ngoài vào trong, từ nụ cười đến trái tim 😍✨", keywords: ["đẹp", "xinh", "beautiful"] },
    { question: "Anh có giận em không?", answer: "Anh không bao giờ giận em được! Chỉ có thể 'giận' vì em quá dễ thương thôi 😊💕", keywords: ["giận", "angry", "never mad"] },
    { question: "Thức ăn anh nấu cho em?", answer: "Anh thường nấu phở cho em ăn sáng và làm bánh mì trứng. Tuy chưa ngon lắm nhưng em luôn khen! 🍜🥖", keywords: ["nấu ăn", "phở", "bánh mì"] },
    { question: "Lần đầu nắm tay?", answer: "Lần đầu nắm tay là khi đi xem phim. Anh run cả người nhưng em đã siết chặt lại. Ký ức đẹp nhất! 👫💕", keywords: ["nắm tay", "lần đầu", "xem phim"] },
    { question: "Con vật em thích?", answer: "Em thích mèo! Nhỏ nhắn dễ thương như em vậy. Chúng ta sẽ nuôi mèo sau này nhé! 🐱💖", keywords: ["con vật", "thích", "mèo"] },
    { question: "Màn hình điện thoại em là gì?", answer: "Ảnh chúng ta chụp chung! Em luôn muốn nhìn thấy anh mỗi khi mở điện thoại 📱💕", keywords: ["màn hình", "điện thoại", "ảnh chung"] },
    { question: "Anh có nhớ em không?", answer: "Mỗi giây mỗi phút anh đều nhớ em! Nhớ từng cử chỉ, nụ cười và tiếng cười của em 🥰💭", keywords: ["nhớ em", "miss you", "every moment"] },
    { question: "Ước gì với em?", answer: "Ước được bên em mãi mãi, không bao giờ phải xa nhau. Đó là điều ước duy nhất của anh 🌟💕", keywords: ["ước gì", "mãi mãi", "bên nhau"] },
    { question: "Lời hứa với em?", answer: "Anh hứa sẽ yêu em hết lòng, che chở em và làm em hạnh phúc mỗi ngày. Đó là lời hứa thiêng liêng! 💒💖", keywords: ["lời hứa", "yêu hết lòng", "hạnh phúc"] },
    { question: "Cảm giác khi bên em?", answer: "Như đang ở thiên đường! Mọi thứ đều trở nên tuyệt vời và ý nghĩa hơn khi có em 😇✨", keywords: ["cảm giác", "bên em", "thiên đường"] },
    { question: "Em có quan trọng không?", answer: "Em quan trọng hơn cả sinh mệnh của anh! Em là lý do anh tồn tại trên đời này 💕🌍", keywords: ["quan trọng", "sinh mệnh", "important"] },
    { question: "Điều đặc biệt về em?", answer: "Em có khả năng làm anh cười ngay cả khi buồn nhất. Đó là phép màu chỉ em mới có! ✨😊", keywords: ["đặc biệt", "phép màu", "làm cười"] },
    { question: "Khi nào anh hạnh phúc nhất?", answer: "Khi thấy em cười! Nụ cười em là niềm hạnh phúc lớn nhất của anh 😊🌞", keywords: ["hạnh phúc nhất", "em cười", "niềm vui"] },
    { question: "Anh sợ điều gì nhất?", answer: "Anh sợ nhất là mất em. Không thể tưởng tượng cuộc sống không có em 😢💔", keywords: ["sợ nhất", "mất em", "fear"] },
    { question: "Thời gian yêu thương?", answer: "Đã gần 10 tháng rồi nhưng với anh như 10 năm vì mỗi ngày đều quý giá! ⏰💖", keywords: ["thời gian", "10 tháng", "quý giá"] },
    { question: "Điều anh muốn nói với em?", answer: "Anh muốn nói: Em là tất cả của anh, là tình yêu đầu và cuối cùng. I love you! 💕💫", keywords: ["muốn nói", "tất cả", "i love you"] },
    { question: "Em có yêu anh không?", answer: "Em yêu anh rất nhiều! Mỗi ngày tình yêu đó lại lớn thêm một chút 💖📈", keywords: ["em yêu anh", "rất nhiều", "lớn thêm"] },
    { question: "Kế hoạch hôm nay?", answer: "Kế hoạch là nghĩ về em, nhắn tin với em và mong được gặp em! 💭💕", keywords: ["kế hoạch", "hôm nay", "gặp em"] },
    { question: "Cách chăm sóc em?", answer: "Anh sẽ luôn quan tâm sức khỏe em, nhắc em ăn uống đầy đủ và ngủ đúng giờ 🍽️😴", keywords: ["chăm sóc", "sức khỏe", "quan tâm"] },
    { question: "Từ yêu thương cho em?", answer: "'Em yêu của anh' - ba từ đơn giản nhưng chứa đựng cả tình yêu cuộc đời anh 💕👑", keywords: ["từ yêu thương", "em yêu", "cuộc đời"] },
    { question: "Lý do yêu em mỗi ngày?", answer: "Vì em luôn làm mới bản thân, luôn có điều gì đó khiến anh ngạc nhiên và yêu em hơn 🌟💕", keywords: ["lý do", "mỗi ngày", "ngạc nhiên"] },
    { question: "Em trong mắt anh?", answer: "Em là thiên thần của anh! Đẹp, tốt bụng và mang lại ánh sáng cho cuộc đời anh 😇✨", keywords: ["trong mắt anh", "thiên thần", "ánh sáng"] },
    { question: "Câu nói yêu thích về em?", answer: "'You are my sunshine, my only sunshine!' - Em là ánh nắng duy nhất của anh ☀️💖", keywords: ["câu nói", "yêu thích", "sunshine"] },
    { question: "Tương lai với em?", answer: "Tương lai sẽ thật tươi sáng! Chúng ta sẽ cùng nhau vượt qua mọi thử thách và xây dựng hạnh phúc 🌈💕", keywords: ["tương lai", "tươi sáng", "cùng nhau"] }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const findBestAnswer = (userInput: string): string => {
    const lowercaseInput = userInput.toLowerCase();
    
    // Tìm câu trả lời phù hợp nhất dựa trên keywords
    let bestMatch = { score: 0, answer: "" };
    
    qaDatabase.forEach(qa => {
      let score = 0;
      qa.keywords.forEach(keyword => {
        if (lowercaseInput.includes(keyword.toLowerCase())) {
          score += 1;
        }
      });
      
      if (score > bestMatch.score) {
        bestMatch = { score, answer: qa.answer };
      }
    });

    // Nếu không tìm thấy câu trả lời phù hợp
    if (bestMatch.score === 0) {
      const defaultResponses = [
        "Anh chưa hiểu ý em lắm. Em có thể hỏi về chuyện tình yêu của chúng ta không? 💕",
        "Em thử hỏi về kỷ niệm của đôi ta đi! Anh có thể kể rất nhiều 🥰",
        "Anh có thể trả lời về cuộc sống và tình yêu của chúng ta. Em hỏi gì khác đi nhé! ❤️",
        "Hmm, anh không chắc hiểu ý em. Thử hỏi về những ngày đầu yêu nhau nhé! 💖"
      ];
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    return bestMatch.answer;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: findBestAnswer(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
          <Heart className="w-3 h-3" fill="currentColor" />
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-pink-100 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Đạt Bot 💕</h3>
            <p className="text-xs opacity-90">Luôn sẵn sàng trả lời về chúng ta!</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-pink-50/30">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
              message.isUser
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                : 'bg-white shadow-md border border-pink-100'
            }`}>
              <div className="flex items-start space-x-2">
                {!message.isUser && (
                  <Heart className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" fill="currentColor" />
                )}
                <p className="text-sm leading-relaxed">{message.text}</p>
                {message.isUser && (
                  <User className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-pink-100 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Hỏi anh về chúng ta đi..."
            className="flex-1 px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;