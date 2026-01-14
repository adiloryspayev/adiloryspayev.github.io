import React, { useState, useMemo } from 'react';

const FilterableTags = ({ items, type = 'projects' }) => {
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique tags from items
  const allTags = useMemo(() => {
    const tags = new Set();
    items.forEach(item => {
      item.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [items]);

  // Filter items based on selected tags and search query
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Filter by tags
      const matchesTags = selectedTags.size === 0 || 
        item.tags?.some(tag => selectedTags.has(tag));
      
      // Filter by search query
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesTags && matchesSearch;
    });
  }, [items, selectedTags, searchQuery]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const clearFilters = () => {
    setSelectedTags(new Set());
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder={`Search ${type}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-su-orange focus:border-transparent"
        />
        <svg 
          className="absolute right-3 top-3.5 w-5 h-5 text-gray-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      {/* Tags Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Filter by Technology
          </h3>
          {(selectedTags.size > 0 || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs text-su-orange hover:text-su-orange-light transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedTags.has(tag)
                  ? 'bg-su-orange text-white border border-su-orange shadow-lg shadow-su-orange/20'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-su-orange'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          Showing <span className="text-su-orange font-semibold">{filteredItems.length}</span> of {items.length} {type}
        </span>
        {selectedTags.size > 0 && (
          <span className="text-xs">
            {selectedTags.size} filter{selectedTags.size !== 1 ? 's' : ''} active
          </span>
        )}
      </div>

      {/* Filtered Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={item.id || index}
              className="card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date/Duration */}
              {item.date && (
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{item.date}</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                {item.url ? (
                  <a href={item.url} className="hover:text-su-orange transition-colors">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>

              {/* Subtitle/Organization */}
              {item.organization && (
                <p className="text-sm text-gray-400 mb-3">{item.organization}</p>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-900 text-su-orange-light text-xs font-mono rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links/Actions */}
              {item.links && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-700">
                  {item.links.github && (
                    <a
                      href={item.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-su-orange transition-colors flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {item.links.live && (
                    <a
                      href={item.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-su-orange transition-colors flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No {type} found matching your filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2 bg-su-orange hover:bg-su-orange-dark text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterableTags;