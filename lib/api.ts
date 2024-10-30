const API_BASE_URL = '/api';

export async function login(emailOrNickName: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailOrNickName, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

export async function updateUser(userData: {
  id: string;
  nickName: string;
  email: string;
  avatarUrl: string;
}) {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-User-ID': userData.id,
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }

  return response.json();
}