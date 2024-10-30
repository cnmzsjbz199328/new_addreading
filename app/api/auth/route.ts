import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface LoginRequest {
  emailOrNickName: string;
  password: string;
}

interface UserResponse {
  id: number;
  nickName: string;
  email: string;
  avatarUrl: string;
  booksRead: number;
  meetingsAttended: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();

    // Simulate database validation
    if (!body.emailOrNickName || !body.password) {
      return NextResponse.json(
        { error: 'Email/nickname and password are required' },
        { status: 400 }
      );
    }

    // Mock successful login response
    const user: UserResponse = {
      id: 1,
      nickName: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      booksRead: 24,
      meetingsAttended: 12,
    };

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}