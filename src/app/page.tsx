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
