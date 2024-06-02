import { getAccessToken } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const { accessToken } = await getAccessToken()
        
        return NextResponse.json({ accessToken }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 401 })
    }
}