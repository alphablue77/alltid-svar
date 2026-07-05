'use client'

import { useState, useEffect } from 'react'

export default function MeetingPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('alltidsvar_popup_shown')
    if (alreadyShown) return

    const timer = setTimeout(() => {
      setShow(true)
      sessionStorage.setItem('alltidsvar_popup_shown', 'true')
    }, 14000)

    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setShow(false)
    setDismissed(true)
  }

  if (!show || dismissed) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-5 overlay-enter"
      style={{ background: 'rgba(19, 17, 15, 0.55)' }}
      onClick={close}
    >
      <div
        className="popup-enter relative max-w-md w-full rounded-2xl p-8"
        style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ color: 'var(--stone)' }}
          aria-label="Stäng"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-5 font-display text-lg"
          style={{ background: 'var(--clay)', color: 'var(--paper)' }}
        >
          D
        </div>

        <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--ink)' }}>
          Innan du går: 15 minuter med mig?
        </h3>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--stone)' }}>
          Jag är David, grundare av Alltid Svar. Boka ett kort samtal så visar jag exakt hur en AI-telefonsvarare skulle låta för din verksamhet. Live, ingen powerpoint.
        </p>

        <div className="flex flex-col gap-3">
          <button
            data-cal-link="david-nuay-0jcatd/15min"
            data-cal-namespace="15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={close}
            className="text-center rounded-full px-6 py-3.5 font-medium text-[15px] transition-transform hover:scale-[1.02] cursor-pointer"
            style={{ background: 'var(--clay)', color: 'var(--paper)' }}
          >
            Boka 15 minuter med David →
          </button>
          <button
            onClick={close}
            className="text-center text-sm py-1"
            style={{ color: 'var(--stone)' }}
          >
            Inte nu, tack
          </button>
        </div>
      </div>
    </div>
  )
}
