import { NextResponse } from 'next/server';
// import { headers, cookies } from 'next/headers';

const getFake = (q: string) =>
  new Promise<string>((res) => {
    setTimeout(() => res(`Fake on ${q}`), 2000);
  });

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  // const cooList = await cookies();
  // const headersList = await headers();

  // const coo2 =  cooList

  // console.log('COOKIES', cooList);

  if (!q) return NextResponse.json({ message: 'Param "q" not provided' });

  const response = await getFake(q);

  return NextResponse.json({ message: `So easy? Here ${response}` });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ body });
}
