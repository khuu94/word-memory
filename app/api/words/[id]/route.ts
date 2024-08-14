import { NextResponse } from 'next/server';
import prisma from '@/app/db';

// READ word by id
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const word = await prisma.word.findUnique({
            where: { id: parseInt(params.id, 10) },
        });

        if (!word) {
            return NextResponse.json({ error: 'Word not found.' }, { status: 404 });
        }

        return NextResponse.json(word, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch word' }, { status: 500 });
    }
}

// UPDATE a word
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { englishWord, frenchWord } = await request.json();

    if (!englishWord || !frenchWord) {
        return NextResponse.json({ error: 'Both English and French words are required.' }, { status: 400 });
    }

    try {
        const updatedWord = await prisma.word.update({
            where: { id: parseInt(params.id, 10) },
            data: { englishWord, frenchWord },
        });

        return NextResponse.json(updatedWord, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to update word' }, { status: 500 });
    }
}

// DELETE a word
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.word.delete({
            where: { id: parseInt(params.id, 10) },
        });

        return NextResponse.json({ message: 'Word deleted successfully.' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to delete word' }, { status: 500 });
    }
}
