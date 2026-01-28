import React from 'react'

type LoaderProps = {
    active: boolean
    progress?: number
}

export default function Loader({ active, progress = 0 }: LoaderProps) {
    if (!active) return null

    const pct = Math.round(Math.min(Math.max(progress, 0), 1) * 100)

    return (
        <div className="loader-overlay">
            <div className="loader-spinner" aria-label="Loading" />
            <div className="loader-bar" aria-hidden="true">
                <div className="loader-bar__fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="loader-label">{pct}%</div>
        </div>
    )
}
