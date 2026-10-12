import { Check } from 'lucide-react'

export function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-navy-700">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={2.5} />
      <span>{text}</span>
    </li>
  )
}
