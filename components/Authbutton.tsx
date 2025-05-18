
'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from './ui/button';

export default function AuthButton() {
  const user = useUser();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleLogin = () => {
    router.push('/login');
  };

  // Loading state check
  if (user === undefined) {
    return <Button disabled>Loading...</Button>;
  }

  return user ? (
    <Button onClick={handleLogout}>Sign Out</Button>
  ) : (
    <Button onClick={handleLogin}>Sign In</Button>
  );
}