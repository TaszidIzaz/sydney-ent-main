import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Landmark, Clock, Building, Home, Users } from 'lucide-react';
const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection title="History of Neil Cottage" subtitle="A journey through time at 176 Windsor Road, Winston Hills" backgroundImage="/lovable-uploads/a3f206f3-4139-4463-9c1f-13865b260a4b.png" accentPhrase="Since 1792" />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            {/* New Neil Cottage Introduction */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Neil Cottage Heritage</h2>
                  <div className="prose prose-lg">
                    <p>Neil cottage, located at 176 Windsor Rd, has a rich history in the local community. Located on the traditional land of the Dharug people of the Toongagal clan, the cottage now referred to as "Neil Cottage" was originally purchased by Neil in January 1865, and the cottage was constructed since then and was completed by December 1866.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/lovable-uploads/f31cfd31-bb06-4af3-ae61-1457f6561c36.png" alt="Historical map of the area" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                  <img src="/lovable-uploads/7e5af1a0-8233-4744-b5e1-7e3589fe4fd7.png" alt="Baulkham Hills Shire map" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img src="/lovable-uploads/6761349f-b77e-47a7-a4e7-08174fd93e85.png" alt="Moxham's Subdivision advertisement" className="rounded-lg shadow-xl w-full h-[400px] object-cover" />
                </div>
                <div className="space-y-6">
                  <div className="prose prose-lg">
                    <p>Though the cottage now bears his name, he sold it shortly after to John Lye, publican of the White Hart Hotel on Church Street, North Parramatta. The sandstone used to build Neil Cottage was obtained from Toongabbie Creek from Moxhams Quarry and one of the Moxham brothers, William, lived in the house in the late 19th century.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    <div className="prose prose-lg">
                      <p>In the 20th Century, the house was passed through a few different families until finally it was acquired by the LJ Hooker group. The LJ Hooker group was instrumental in the development of Churchill Drive and Winston Hills as a suburb and their main sales office in the area was located at 176 Windsor Rd, in Neil Cottage before being acquired for residential use and as an antique shop in 1984.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img src="/lovable-uploads/cd919186-faae-409e-8553-001993f20cd6.png" alt="Historical sketch of Neil Cottage" className="rounded-lg shadow-xl w-full h-[400px] object-cover" />
                </div>
              </div>
            </div>

            {/* Credits Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Heritage research and consultation by{' '}
                  <a href="https://edwardsheritage.com.au/" target="_blank" rel="noopener noreferrer" className="text-ent-600 hover:text-ent-700 underline">
                    Michael Edwards and Hisashi Nakahara from Edwards Heritage Consultants
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default History;