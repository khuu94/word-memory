import prisma from '@/app/db';
import { NextResponse } from 'next/server';

// READ rankings by Game
export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');

        const limit = limitParam ? parseInt(limitParam, 10) : 10;

        const rankings = await prisma.game.findMany({
            orderBy: {
                score: 'desc',
            },
            take: limit
        });

        return NextResponse.json(rankings, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch rankings' }, { status: 500 });
    }
}

// CREATE a new game
export async function POST(request: Request) {
    const { startTime, endTime, score, playerName } = await request.json();
    if (!playerName) {
        return NextResponse.json(
            { error: 'Player Name is required.' },
            { status: 400 }
        );
    }

    try {
        // Create the new game entry
        const newGame = await prisma.game.create({
            data: {
                startTime: new Date(), // TODO: Calculate date
                endTime: new Date(), // TODO: Calculate date
                score,
                playerName,
            },
        });

        return NextResponse.json(newGame, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to create game' }, { status: 500 });
    }
}
