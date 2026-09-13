import React from 'react';

export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow flex flex-col justify-between">
      <div className="card-body p-6">
        <div className="flex justify-between items-start">
          <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
          <span className="badge bg-brand-gradient text-white border-0 text-xs font-semibold px-2.5 py-1">
            {tech.badge}
          </span>
        </div>
        <h3 className="card-title mt-4 text-xl font-bold">{tech.name}</h3>
        <p className="text-sm text-base-content/70 flex-grow">{tech.description}</p>
        
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-base-200">
          <span className="badge badge-ghost text-xs font-medium">{tech.category}</span>
          <span className="text-xs font-medium text-base-content/60">{tech.difficulty}</span>
          <div className="flex items-center text-xs font-bold text-amber-500">
            ⭐ <span>{tech.rating}</span>
          </div>
        </div>
        
        <div className="card-actions mt-6">
          <button 
            onClick={() => onAdd(tech)} 
            disabled={isAdded}
            className={`btn btn-block btn-sm text-white border-0 ${
              isAdded 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-brand-gradient hover:opacity-90'
            }`}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
}