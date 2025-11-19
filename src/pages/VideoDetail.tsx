import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { videos } from '@/data/videos';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatViews, timeAgo } from '@/lib/helpers';
import VideoCard from '@/components/VideoCard'; // For related videos

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return <div className="container mx-auto p-4 text-center">Video not found.</div>;
  }

  const relatedVideos = videos.filter(v => v.id !== id).slice(0, 4); // Show 4 related videos

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            className="w-full h-full"
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <div className="flex items-center justify-between flex-wrap gap-y-2 mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={video.channelAvatar as string} alt={video.channelName} />
              <AvatarFallback>{video.channelName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{video.channelName}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatViews(video.views)} • {timeAgo(video.uploadDate)}
              </p>
            </div>
            <Button variant="outline" className="ml-4">Subscribe</Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Like</Button>
            <Button variant="outline">Share</Button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Description */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-sm whitespace-pre-line">{video.description}</p>
        </div>
      </div>

      {/* Related Videos */}
      <div className="lg:col-span-1">
        <h2 className="text-xl font-bold mb-4">Related Videos</h2>
        <div className="space-y-4">
          {relatedVideos.map(relatedVideo => (
            <Link to={`/watch/${relatedVideo.id}`} key={relatedVideo.id} className="flex gap-2 items-start group">
              <img
                src={relatedVideo.thumbnail as string}
                alt={relatedVideo.title}
                className="w-40 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-500 transition-colors">
                  {relatedVideo.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {relatedVideo.channelName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatViews(relatedVideo.views)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
