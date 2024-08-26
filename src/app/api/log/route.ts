import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/utils/mongodb';

export async function POST(req: NextRequest) {
    const { headers } = req;
    const ip = headers.get('x-forwarded-for') || req.ip || 'Unknown IP';
    const userAgent = headers.get('user-agent') || 'Unknown User Agent';
    // const timestamp = new Date();

    console.log(ip, userAgent);
    // try {
    //     const db = await getDb();
    //     const collection = db.collection('visitorLogs');

    //     // Insert the log into MongoDB
    //     await collection.insertOne({
    //         ip,
    //         userAgent,
    //         timestamp,
    //     });

    //     return NextResponse.json({ message: 'Visitor logged' });
    // } catch (error) {
    //     console.error('Error logging visit:', error);
    //     return NextResponse.json({ message: 'Error logging visit' }, { status: 500 });
    // }
}
