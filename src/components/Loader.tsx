import React from 'react'

type LoaderProps = {
    active: boolean
}

export default function Loader({ active }: LoaderProps) {
    if (!active) return null

    return (
        <div className="loader-overlay">
            <div className="loader-spinner" aria-label="Loading" />
            <div className="loader-label">Loading…</div>
        </div>
    )
}
