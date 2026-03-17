export function ProgressDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-court-accent' : 'w-2 bg-white/30'}`}
        />
      ))}
    </div>
  );
}
