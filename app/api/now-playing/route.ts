import { NextResponse } from 'next/server';
import getScrobbleData from '@/app/lib/lastfm';

// This disables caching for this route
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const songData = await getScrobbleData();
    return NextResponse.json(songData);
  } catch (error) {
    console.error('Error fetching song data:', error);
    return NextResponse.json({ error: 'Failed to fetch song data' }, { status: 500 });
  }
}