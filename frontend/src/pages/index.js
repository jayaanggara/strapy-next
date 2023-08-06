import { useEffect } from 'react'

import { Inter } from 'next/font/google'
import { getAllAccount, getSelectedAccount } from '@/api/services';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    // getAllAccount();
    getSelectedAccount('jaya.instagram')
  }, []);

  
  return (
    <main
      className={`flex max-w-2xl mx-auto min-h-screen flex-col items-center p-4 pt-24 ${inter.className}`}
    >
    <div className="flex flex-col items-center gap-2 w-full mb-20">
      <h3 className="text-2xl font-bold"> Name </h3>
      <p className="text-lg">Description</p>
    </div>
    <div className="flex flex-col items-center gap-8 w-full">
      <div
        className="h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-4 rounded-[50px] hover:scale-105 transition-all cursor-pointer"
      >
        <h1>Title</h1>
      </div>
      <div
        className="h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-4 rounded-[50px] hover:scale-105 transition-all cursor-pointer"
      >
        <h1>Title</h1>
      </div>
      <div
        className="h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-4 rounded-[50px] hover:scale-105 transition-all cursor-pointer"
      >
        <h1>Title</h1>
      </div>
      <div
        className="h-full w-full bg-indigo-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-4 rounded-[50px] hover:scale-105 transition-all cursor-pointer"
      >
        <h1>Title</h1>
      </div>
    </div>
    </main>
  )
}
