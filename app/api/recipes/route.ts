import { NextResponse } from 'next/server'
import { recipes } from '../recipes'

export async function GET(request: Request) {
	return NextResponse.json(recipes)
}
