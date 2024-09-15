import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Instagram, Film, Camera, TrendingUp, Sparkles, Video, Users, Leaf } from 'lucide-react';

const TrendCard = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center gap-2">
      <Icon className="h-6 w-6" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const TrendTracker = () => {
  const [activeTab, setActiveTab] = useState('social');

  const trends = {
    social: [
      { icon: Instagram, title: 'Authentic Moments', description: 'Candid, unpolished content is gaining traction as users seek more genuine experiences.' },
      { icon: TrendingUp, title: 'Vertical Video', description: 'With the rise of TikTok and Instagram Reels, vertical video formats are dominating social feeds.' },
      { icon: Sparkles, title: 'AR Filters', description: 'Augmented reality filters continue to evolve, offering users creative ways to enhance their content.' },
      { icon: Video, title: 'Live Streaming', description: 'Real-time engagement through live video is becoming increasingly popular across platforms.' }
    ],
    commercial: [
      { icon: Camera, title: 'Inclusive Representation', description: 'Brands are focusing on diverse and inclusive imagery in their marketing campaigns.' },
      { icon: Film, title: 'Cinematic Product Shots', description: 'High-quality, cinematic product photography is becoming a standard in e-commerce.' },
      { icon: Users, title: 'User-Generated Content', description: 'Brands are incorporating authentic customer photos and videos into their marketing strategies.' },
      { icon: Leaf, title: 'Sustainability Visuals', description: 'Eco-friendly themes and behind-the-scenes sustainability practices are being highlighted in visual content.' }
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Visual Trend Tracker</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="social">Social Media Trends</TabsTrigger>
          <TabsTrigger value="commercial">Commercial Trends</TabsTrigger>
        </TabsList>
        {Object.entries(trends).map(([category, categoryTrends]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryTrends.map((trend, index) => (
                <TrendCard key={index} {...trend} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TrendTracker;
