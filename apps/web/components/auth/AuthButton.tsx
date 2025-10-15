'use client';

// Placeholder component for authentication button
// This will be implemented when Google Auth is integrated

import { User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AuthButton() {
  // This will be replaced with actual auth logic
  const isAuthenticated = false;
  const user = null;

  const handleSignIn = () => {
    // Placeholder for Google sign-in
    console.log('Google sign-in to be implemented');
  };

  const handleSignOut = () => {
    // Placeholder for sign-out
    console.log('Sign-out to be implemented');
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-neutral-700">Welcome, {user.name}</span>
        <Button variant="outline" size="sm" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button variant="outline" size="sm" onClick={handleSignIn}>
      <User className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  );
}
