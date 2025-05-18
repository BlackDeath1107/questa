
import { ReactNode } from 'react';
import { SupabaseProvider } from './supabase-provider';
import AuthButton from '@/components/Authbutton';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-100">
    <AuthButton />
  </header>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}