import { NextResponse } from "next/server";
import packageJson from "../../../../package.json";

const API_KEY = process.env.CLIENT_REQUEST_API_KEY;
const startTime = Date.now();

export async function GET(req: Request) {
    const key = req.headers.get("client_request_api");
    if (key !== API_KEY) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

    return NextResponse.json({
        status: "Green",
        server_time: new Date().toISOString(),
        uptime_seconds: uptimeSeconds,
        deployment: process.env.VERCEL_ENV || "production",
        version: packageJson.version,
    });
}
