import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "aws-amplify/auth";
import {
  createSupabaseUser,
  getSupabaseUserByCognitoId,
} from "@/lib/supabase-auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    // Get current Cognito user
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Check if user exists in Supabase
    const user = await getSupabaseUserByCognitoId(currentUser.userId);

    if (!user) {
      return NextResponse.json(
        {
          error:
            "User not found in database. Please complete registration first.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.error("User sync error:", error);
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = await getSupabaseUserByCognitoId(currentUser.userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
}
