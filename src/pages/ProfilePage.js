
// src/pages/ProfilePage.js
import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

function ProfilePage() {
    return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Aapka Profile</h1>
        <p className="text-center mt-4">Yeh page jald hi update hoga.</p>
      </main>
      <Footer />
    </div>
  );
}
export default ProfilePage;
