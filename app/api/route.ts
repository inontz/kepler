import { headers } from 'next/headers'
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
  const res = await fetch('https://api.inontz.me', {
  headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return NextResponse.json( data )
  // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}