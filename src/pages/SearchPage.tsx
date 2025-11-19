import React from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/videos';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.channelName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>
      {filteredVideos.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No videos found matching your query.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
