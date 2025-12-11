import React from 'react';

export const RichText = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="space-y-2 text-sm text-slate-600 leading-relaxed font-body">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('* ')) {
          const content = trimmedLine.substring(2);
          return (
            <div key={index} className="flex items-start gap-2 ml-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: parseBold(content) }} />
            </div>
          );
        }

        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
             return (
                 <h4 key={index} className="font-sub font-bold text-brand-deep mt-3 mb-1 uppercase tracking-wide text-xs" 
                     dangerouslySetInnerHTML={{ __html: parseBold(trimmedLine.replace(/\*\*/g, '')) }} 
                 />
             );
        }

        if (!trimmedLine) return <div key={index} className="h-1" />;

        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: parseBold(line) }} />
        );
      })}
    </div>
  );
};

const parseBold = (str) => {
  return str.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-800">$1</strong>');
};