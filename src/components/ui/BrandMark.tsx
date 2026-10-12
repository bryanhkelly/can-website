export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" className={className} aria-hidden="true">
      <path d="M20 40V19M20 31L9 25M20 23L30 13" fill="none" stroke="#586148" strokeWidth="2" />
      <path d="M19 23C7 25 2 19 5 12C12 9 20 12 19 23Z" fill="#4b6749" />
      <path d="M21 18C19 5 26 1 33 5C36 12 30 19 21 18Z" fill="#405c46" />
      <path d="M19 34C7 36 3 30 6 24C13 22 20 25 19 34Z" fill="#bba669" />
      <path d="M22 36C20 25 27 21 34 26C35 33 30 38 22 36Z" fill="#7b8763" />
    </svg>
  )
}
