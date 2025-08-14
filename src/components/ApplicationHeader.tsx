import React from 'react';
import { Search, Users } from 'lucide-react';

interface ApplicationHeaderProps {
  appName?: string;
  userInitials?: string;
}

export const ApplicationHeader: React.FC<ApplicationHeaderProps> = ({
  appName = "Appian Designer",
  userInitials = "PL"
}) => {
  return (
    <div className="app-header-sail border-b border-sail-standard">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
          <span className="text-blue-600 font-bold text-sm">A</span>
        </div>
        <span className="font-semibold text-gray-800">{appName}</span>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Search className="h-5 w-5" />
        </button>
        <button type="button" className="text-gray-700 hover:text-gray-900 transition-colors">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-sm font-medium">{userInitials}</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHeader;