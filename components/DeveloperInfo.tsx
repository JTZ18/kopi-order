'use client'
import React from 'react'
import profilePicture from "@/app/profile.png";
import kofiLogo from "@/app/kofi.png";
import Image from 'next/image';
import { Donate } from 'react-kofi-overlay'

function DeveloperInfo() {
  return (
    <section id="developer-info" className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 text-center">
      <div className="flex justify-center my-3">
        <Image
          src={profilePicture}
          alt={`profile picture`}
          className="w-50 rounded-full"
          priority={true}
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Built by Jon Taylor</h2>
      <p className="mb-4">If you enjoy this app, consider donating to help keep it running.</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/jontaylorlim/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/JTZ18" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
          GitHub
        </a>
      </div>
      <div>

        <Donate
          username="mrjoozy"
          classNames={{
            donateBtn: 'myDonateButton',
            profileLink: 'myProfileLink'
          }}
          styles={{
            donateBtn: {
              backgroundColor: '#FF5E5B',
            },
          }}
          onToggle={(open) => {
            console.log(`Donate panel ${open ? 'opened' : 'closed'}`)
          }}
        >
          <div className="flex items-center space-x-2">
            <Image
              src={kofiLogo}
              alt="kofi logo"
              className="w-10"
              priority={true}
            />
            <span>Support Me</span>
          </div>
        </Donate>
      </div>
    </section>
  )
}

export default DeveloperInfo