import React from "react";
import { Card, CardContent } from "../teamComponent/Card";
import { Avatar, AvatarImage, AvatarFallback } from "../teamComponent/Avatar";
import { Badge } from "../teamComponent/Badge";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Oversees project timelines and team coordination."
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Architects the application and mentors developers."
  },
  {
    name: "Carla Martinez",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Designs user-friendly interfaces and experiences."
  },
  {
    name: "David Lee",
    role: "QA Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description: "Ensures the product meets quality standards."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h1>
        <p className="text-lg text-gray-600 mb-10">The people behind our task manager project</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition">
              <CardContent className="flex flex-col items-center p-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h2>
                <Badge className="mb-2" variant="secondary">{member.role}</Badge>
                <p className="text-sm text-gray-600 text-center">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
