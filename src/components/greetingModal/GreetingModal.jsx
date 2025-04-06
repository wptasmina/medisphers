'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getFancyGreeting } from '@/lib/greetingGenerator';
import { X } from 'lucide-react';

export default function GreetingModal() {
  const [open, setOpen] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(getFancyGreeting());
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-gradient-to-r from-purple-600 to-gray-800 text-white py-10 hover:shadow-[#022bbd] rounded-2xl shadow-2xl border-none">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-center">{greeting}</DialogTitle>
          <DialogDescription className="text-white/90 mt-2 text-base text-center">
            Empowering your health management with modern tools.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <DialogClose asChild>
            <Button variant="secondary" className="bg-white text-sky-700 hover:bg-gray-300">
              Got it
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

