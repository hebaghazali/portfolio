import { NextResponse } from 'next/server';

// This function will handle GET requests
export async function GET() {
    const data = { message: 'Hello, world!' };

    return NextResponse.json(data);
}
