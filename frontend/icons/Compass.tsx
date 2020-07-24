import { Icon } from './IfcIcon'

export default function Compass({ className }: Icon) {
    return (
        <svg
            className={`${className}`}
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 16 10 10 16 8 14 14 8 16" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    )
}
