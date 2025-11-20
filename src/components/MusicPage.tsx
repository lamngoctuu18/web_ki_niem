import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Heart, Music, Headphones, SkipBack, SkipForward } from 'lucide-react';

const MusicPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const musicData = {
    title: "Yêu Em Từ Cái Nhìn Đầu Tiên",
    artist: "Bài hát yêu thích của em",
    youtubeId: "OMXwIzoeQiE",
    lyrics: [
      "Yêu em từ cái nhìn đầu tiên",
      "Từ nụ cười ngây thơ của em", 
      "Trái tim anh đã thuộc về em",
      "Mãi mãi không phai nhạt",
      "",
      "Mỗi ngày bên em là một giấc mơ",
      "Ngọt ngào như những vì sao",
      "Anh muốn nắm tay em mãi mãi",
      "Đi qua bao nhiều mùa đông hạ"
    ]
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-20 relative overflow-hidden">
      {/* Floating music notes animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            <Music className="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Headphones className="w-12 h-12 text-pink-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent font-sedgwick" style={{ lineHeight: '2' }}>
              Âm Nhạc Của Em
            </h2>
            <Headphones className="w-12 h-12 text-pink-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những giai điệu ngọt ngào mà em yêu thích, cũng là những bài hát anh nghe để nhớ em mỗi ngày
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Music Player */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Music Cover & Video */}
            <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
              
              {/* YouTube Embed */}
              <div className="relative z-10 h-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${musicData.youtubeId}?autoplay=0&controls=1&rel=0&showinfo=0`}
                  title="Music Video"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Floating decorations */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-pink-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Music Info */}
            <div className="p-8 bg-gradient-to-r from-white/90 to-pink-50/90">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 font-poppins mb-2">
                    {musicData.title}
                  </h3>
                  <p className="text-lg text-pink-600 font-medium">
                    {musicData.artist}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <SkipBack className="w-6 h-6 text-pink-600" />
                  </button>
                  
                  <button 
                    onClick={handlePlayPause}
                    className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                  
                  <button className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <SkipForward className="w-6 h-6 text-pink-600" />
                  </button>
                  
                  <button className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <Volume2 className="w-6 h-6 text-pink-600" />
                  </button>
                </div>
              </div>

              {/* Progress bar placeholder */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>

          {/* Lyrics Section */}
          <div className="mt-12 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-gray-800 font-poppins mb-4 flex items-center justify-center space-x-3">
                <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                <span>Lời Bài Hát</span>
                <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
              </h4>
              <p className="text-gray-600">
                Những lời ca ngọt ngào mà em thường ngân nga
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-pink-50/80 to-purple-50/80 rounded-2xl p-8 border border-pink-200/30">
                {musicData.lyrics.map((line, index) => (
                  <div
                    key={index}
                    className="mb-3 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {line ? (
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        {line}
                      </p>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Music Notes */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg border border-white/50">
              <span className="text-4xl animate-bounce">🎵</span>
              <p className="text-lg text-gray-700 font-medium">
                "Âm nhạc là ngôn ngữ của tình yêu"
              </p>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎶</span>
            </div>
          </div>

          {/* Additional Music Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Playlist Yêu Thương", subtitle: "25 bài hát", icon: "💕" },
              { title: "Những Bài Hát Buồn", subtitle: "Khi nhớ em", icon: "💔" },
              { title: "Happy Songs", subtitle: "Khi được bên em", icon: "😊" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-600">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPage;