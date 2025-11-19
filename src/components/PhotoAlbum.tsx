import React, { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const PhotoAlbum: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos: Photo[] = [
    { id: 1, src: "/api/placeholder/400/300", alt: "Kỷ niệm 1", caption: "Lần đầu đi xem phim cùng nhau" },
    { id: 2, src: "/api/placeholder/300/400", alt: "Kỷ niệm 2", caption: "Ngày Valentine đầu tiên" },
    { id: 3, src: "/api/placeholder/400/500", alt: "Kỷ niệm 3", caption: "Chuyến du lịch Đà Lạt" },
    { id: 4, src: "/api/placeholder/350/300", alt: "Kỷ niệm 4", caption: "Sinh nhật của em" },
    { id: 5, src: "/api/placeholder/400/350", alt: "Kỷ niệm 5", caption: "Picnic ở công viên" },
    { id: 6, src: "/api/placeholder/300/350", alt: "Kỷ niệm 6", caption: "Nấu ăn cùng nhau" },
    { id: 7, src: "/api/placeholder/450/300", alt: "Kỷ niệm 7", caption: "Xem hoàng hôn" },
    { id: 8, src: "/api/placeholder/300/450", alt: "Kỷ niệm 8", caption: "Café buổi sáng" },
    { id: 9, src: "/api/placeholder/400/400", alt: "Kỷ niệm 9", caption: "Kỷ niệm 100 ngày" },
    { id: 10, src: "/api/placeholder/350/450", alt: "Kỷ niệm 10", caption: "Tự chụp hình đôi" },
    { id: 11, src: "/api/placeholder/500/350", alt: "Kỷ niệm 11", caption: "Đi biển cùng nhau" },
    { id: 12, src: "/api/placeholder/300/500", alt: "Kỷ niệm 12", caption: "Ngày mưa lãng mạn" }
  ];

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto);
      const nextIndex = (currentIndex + 1) % photos.length;
      setSelectedPhoto(photos[nextIndex].id);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      const currentIndex = photos.findIndex(p => p.id === selectedPhoto);
      const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
      setSelectedPhoto(photos[prevIndex].id);
    }
  };

  const selectedPhotoData = photos.find(p => p.id === selectedPhoto);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Album ký ức
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những khoảnh khắc đẹp nhất được lưu giữ trong ống kính và trái tim
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-md"
              onClick={() => openLightbox(photo.id)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Heart 
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" 
                    fill="currentColor" 
                  />
                </div>
                
                {/* Caption overlay */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && selectedPhotoData && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-200 bg-black bg-opacity-30 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-200 bg-black bg-opacity-30 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo */}
              <img
                src={selectedPhotoData.src}
                alt={selectedPhotoData.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Caption */}
              {selectedPhotoData.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium text-center">
                    {selectedPhotoData.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoAlbum;