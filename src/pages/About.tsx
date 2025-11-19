import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About: React.FC = () => (
  <div className="p-4 max-w-3xl mx-auto space-y-8">
    <h1 className="text-4xl font-bold text-center text-gray-800">About GrocerEase</h1>

    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-2">Our Mission</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700 leading-relaxed">
          At GrocerEase, our mission is to simplify your grocery shopping experience by delivering the freshest, highest-quality produce and essential goods directly to your door. We believe in supporting local farmers and sustainable practices to bring you the best.
        </p>
      </CardContent>
    </Card>

    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-2">Our Values</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-green-700">Freshness:</span> We guarantee the freshness of every item, hand-picked and carefully delivered.
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-green-700">Convenience:</span> Save time and effort with our easy-to-use platform and reliable delivery service.
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-green-700">Community:</span> We foster strong relationships with local suppliers and give back to our community.
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-green-700">Sustainability:</span> Committed to eco-friendly packaging and reducing food waste.
        </p>
      </CardContent>
    </Card>

    <Card className="p-6 text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-2">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700">Have questions or feedback? We'd love to hear from you!</p>
        <p className="text-lg text-green-700 font-semibold mt-2">support@grocerease.com</p>
      </CardContent>
    </Card>
  </div>
);

export default About;