import React, { useState, useMemo } from 'react';

const FilterableTags = ({ items, type = 'projects' }) => {
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set();
    items.forEach(item => item.tags?.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesTags = selectedTags.size === 0 || item.tags?.some(tag => selectedTags.has(tag));
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTags && matchesSearch;
    });
  }, [items, selectedTags, searchQuery]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) newSet.delete(tag);
      else newSet.add(tag);
      return newSet;
    });
  };

  return (
    <div className="space-y-8">
      {/* Search & Filters */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder={`Search ${type}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 border ${
                selectedTags.has(tag)
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                  : 'bg-gray-900 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.size > 0 && (
            <button onClick={() => setSelectedTags(new Set())} className="px-3 py-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 hover:bg-gray-900/60 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                {item.url !== '#' ? <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
              </h3>
              <span className="text-xs font-mono text-emerald-600">{item.date}</span>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{item.description}</p>
            
            {item.highlights && (
              <ul className="mb-6 space-y-2">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-emerald-800">•</span> {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {item.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-950 border border-gray-800 rounded text-[10px] font-mono text-emerald-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableTags;
