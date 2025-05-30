export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center bg-[#244992] text-white p-10">
        <h1 className="text-3xl font-bold mb-2">Welcome to POINTBLANK ANALYTICS</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Insightful and expert commentary on Economic Policy, Kenya’s Tea Sector, and global market trends — authored by an economist, statistician, and tea industry leader, Paul Machira Muturi.
        </p>
      </section>

      {/* Trending */}
      <div className="bg-[#F5F5F5] py-2 px-4 text-red-600 font-bold">
        🔥 Trending: <span className="text-blue-600">Raila gives govt 5 acres of land for Kisumu affordable housing project</span>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 my-4">
        <button className="border border-blue-500 rounded-full px-4 py-1 text-blue-500">All Posts</button>
        <button className="bg-blue-500 text-white rounded-full px-4 py-1">Economic Policy</button>
        <button className="border border-blue-500 rounded-full px-4 py-1 text-blue-500">Tea Industry</button>
        <button className="border border-blue-500 rounded-full px-4 py-1 text-blue-500">Data Insights</button>
      </div>

      {/* Economic Policy Section */}
      <section className="px-6 mb-10">
        <h2 className="text-red-600 text-xl font-bold mb-2">Economic Policy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PostCard
            image="/budget.jpg"
            title="Budget 2025: Agriculture Allocation Analysis"
            desc="Breaking down the KSh 850B budget allocation to agriculture and its implications for tea farmers."
            date="May 30, 2025"
          />
          <PostCard
            image="/economic2.jpg"
            title="Taxation Reform: A Double-Edged Sword"
            desc="Analyzing how new VAT rules affect micro and small enterprises in rural Kenya."
            date="May 24, 2025"
          />
          <PostCard
            image="/economic3.jpg"
            title="Shilling Watch: Stabilization or Mirage?"
            desc="Has the Central Bank's intervention helped or hurt exporters like tea growers?"
            date="May 17, 2025"
          />
        </div>
      </section>

      {/* Tea Industry Section */}
      <section className="px-6 mb-10">
        <h2 className="text-red-600 text-xl font-bold mb-2">Tea Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PostCard
            image="/tea1.jpg"
            title="Minimum Reserve Price: Has it Worked?"
            desc="Evaluating the impact of the $2.43 floor price at the Mombasa Tea Auction since 2021."
            date="May 22, 2025"
          />
          <PostCard
            image="/tea2.jpg"
            title="Green Leaf Payment Delays and Farmer Unrest"
            desc="Exploring the causes and consequences of delayed tea payments in Nyeri County."
            date="May 18, 2025"
          />
          <PostCard
            image="/tea3.jpg"
            title="Privatization of KTDA: What’s Next?"
            desc="What the move to privatize KTDA factories means for smallholder farmers."
            date="May 10, 2025"
          />
        </div>
      </section>

      {/* Data Insights Section */}
      <section className="px-6 mb-10">
        <h2 className="text-red-600 text-xl font-bold mb-2">Data Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PostCard
            image="/data1.jpg"
            title="Inflation Trends 2021–2025"
            desc="A visual breakdown of Kenya’s inflation trends and their correlation with food prices."
            date="May 26, 2025"
          />
          <PostCard
            image="/data2.jpg"
            title="Tea Exports Dashboard"
            desc="Interactive dashboard showing Kenya's tea export volumes and values over 10 years."
            date="May 14, 2025"
          />
          <PostCard
            image="/data3.jpg"
            title="Unemployment Among Youth in Rural Areas"
            desc="Data-driven look at job creation and gaps in the rural economy for youth."
            date="May 5, 2025"
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-gray-100 py-10 text-center">
        <img src="/paul.jpg" alt="Paul Machira Muturi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-bold">Paul Machira Muturi</h3>
        <p className="text-sm text-gray-700 max-w-xl mx-auto mt-2">
          Economist | Statistician | Tea Farmer | Director, Iria-ini Tea Factory  
        </p>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mt-1">
          Sharing grounded insights that bridge data and field realities in the tea sector and beyond.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#244992] text-white px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">About</h4>
            <p className="text-sm">
              POINTBLANK ANALYTICS is your go-to hub for expert analysis and insights on Kenya’s economy, the tea sector, and global developments.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
            <p className="text-sm mb-2">Stay updated with our latest posts.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email" className="px-2 py-1 rounded text-black" />
              <button type="submit" className="bg-red-500 px-3 py-1 rounded text-white">Subscribe</button>
            </form>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Follow</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
              <a href="#" className="hover:text-gray-300">YouTube</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-300">
          © 2025 POINTBLANK ANALYTICS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function PostCard({ image, title, desc, date }: { image: string; title: string; desc: string; date: string }) {
  return (
    <div className="border rounded shadow-sm p-3 hover:shadow-md transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm mt-1">{desc}</p>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
      <a className="text-red-500 text-sm mt-1 block hover:underline" href="#">Read More →</a>
    </div>
  );
}
