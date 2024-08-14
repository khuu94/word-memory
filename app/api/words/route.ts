import { NextResponse } from 'next/server';
import prisma from '@/app/db';

// CREATE a new word
export async function POST(request: Request) {
    const { englishWord, frenchWord } = await request.json();

    if (!englishWord || !frenchWord) {
        return NextResponse.json({ error: 'Both English and French words are required.' }, { status: 400 });
    }

    try {
        const newWord = await prisma.word.create({
            data: {
                englishWord,
                frenchWord,
            },
        });

        return NextResponse.json(newWord, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to create word' }, { status: 500 });
    }
}

// READ all words
export async function GET() {
    try {
        const words = await prisma.word.findMany();

        return NextResponse.json(words, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch words' }, { status: 500 });
    }
}