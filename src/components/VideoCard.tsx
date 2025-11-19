import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatViews, timeAgo } from '@/lib/helpers';
import { Video } from '@/data/videos';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="block">
      <Card className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
        <img src={video.thumbnail as string} alt={video.title} className="w-full h-48 object-cover" />
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={video.channelAvatar as string} alt={video.channelName} />
              <AvatarFallback>{video.channelName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-md font-semibold line-clamp-2 leading-tight">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {video.channelName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatViews(video.views)} • {timeAgo(video.uploadDate)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
