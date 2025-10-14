import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";
import { get } from "http";
import { getSupabaseUserByCognitoId } from "./lib/supabase-auth";

const COGNITO_REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
const COGNITO_USER_POOL_ID = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!;
const COGNITO_APP_CLIENT_ID =
  process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!;

const ISSUER_URL = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
const JWKS_URL = `${ISSUER_URL}/.well-known/jwks.json`;
const JWKS = createRemoteJWKSet(new URL(JWKS_URL));

export async function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  //
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
