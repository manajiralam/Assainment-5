import React from 'react';

export default function StackSidebar({ stack, onRemove, onClearAll }) {
  return (
    <div className="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-200 sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-base-200">
        <div>
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-xs text-base-content/60 font-medium mt-0.5">
            {stack.length} Technology Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button 
            onClick={onClearAll}
            className="btn btn-xs btn-outline btn-error"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto">
        {stack.length === 0 ? (
          <div className="py-12 text-center text-base-content/50">
            <span className="text-4xl block mb-2">📥</span>
            <p className="text-sm font-medium">Your stack is empty.</p>
            <p className="text-xs mt-1">Click "Add to Stack" on technology cards to add items.</p>
          </div>
        ) : (
          stack.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-3 rounded-xl bg-base-200/60 border border-base-300"
            >
              <div className="flex items-center space-x-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                  <span className="text-[10px] text-base-content/60 font-medium">{item.category}</span>
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                className="btn btn-circle btn-xs btn-ghost text-base-content/60 hover:text-error"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}