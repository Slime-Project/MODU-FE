export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-100">
      <div
        className="h-full rounded-full bg-primary-400"
        style={{ width: `${percentage}%` }}
        role="progressbar"
      >
        <span className="sr-only">진행 상태 {percentage}%</span>
      </div>
    </div>
  );
}
