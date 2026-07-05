'use client'

export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '48px' }}>Sidan fungerar!</h1>
      <p>Om du ser detta så har vi lyckats rensa bort alla fel.</p>
    </main>
  );
}
'use client'

import { useEffect } from 'react'
import VoiceButton from '../components/VoiceButton';
import MeetingPopup from '@/components/MeetingPopup';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center p-10">Alltid Svar</h1>
      <VoiceButton />
      <MeetingPopup />
    </main>
  );
}
