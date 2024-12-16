import React from 'react';
import { Users, Calendar, Mail, Briefcase } from 'lucide-react';
import type { Club } from '../types';

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={club.imageUrl}
        alt={club.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
            <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              {club.category}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-1" />
            <span>{club.memberCount}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{club.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {club.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Career Paths:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {club.careerPaths.map((path, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
              >
                {path}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{club.meetingSchedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a
              href={`mailto:${club.contactEmail}`}
              className="text-blue-500 hover:underline"
            >
              {club.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}