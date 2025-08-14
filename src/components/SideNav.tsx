import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  Building, 
  Rocket, 
  Monitor, 
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SideNavProps {
  selectedPage?: string;
  onPageChange?: (pageId: string) => void;
  className?: string;
}

const navItems: NavItem[] = [
  { id: 'plan', label: 'Plan', icon: Network },
  { id: 'explore', label: 'Explore', icon: Search },
  { id: 'build', label: 'Build', icon: Building },
  { id: 'deploy', label: 'Deploy', icon: Rocket },
  { id: 'monitor', label: 'Monitor', icon: Monitor },
];

export const SideNav: React.FC<SideNavProps> = ({
  selectedPage = 'plan',
  onPageChange,
  className = ''
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (itemId: string) => {
    onPageChange?.(itemId);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-sail-bg-200 border-r border-sail-standard flex flex-col transition-all duration-200 ${
      isCollapsed ? 'w-16' : 'w-64'
    } ${className}`} style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Navigation Items */}
      <nav className="flex-1 py-sail-standard">
        <ul className="space-y-sail-less">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center px-sail-standard py-sail-less text-left transition-colors ${
                    isSelected 
                      ? 'bg-sail-accent text-white' 
                      : 'text-sail-secondary hover:bg-sail-bg-standard'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-sail-less'}`} />
                  {!isCollapsed && (
                    <span className={`font-medium ${isSelected ? 'text-white' : 'text-sail-standard'}`}>
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle Button */}
      <div className="border-t border-sail-standard p-sail-standard">
        <button
          type="button"
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center text-sail-secondary hover:text-sail-standard transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideNav;