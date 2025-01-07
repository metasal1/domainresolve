import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {

    const domain = request.nextUrl.searchParams.get("domain")
    const resolve = await fetch(`https://alldomains.id/api/domain-owner/${domain}`)
    const data = await resolve.json()

    if (data.status === "success") {
        return NextResponse.json({ data });
    }

    return NextResponse.json({ error: 'Domain not found', data });
}

