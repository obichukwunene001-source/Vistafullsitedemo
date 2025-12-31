
const What = () => {
  return (
    <section className="bg-gray-50 py-14 -ml-4">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">What clients say</h2>
          <p className="text-sm text-gray-500 mt-2">Proven results from those who know</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="bg-white/20 border border-gray-300 rounded-xl p-6 shadow-sm">
            <div className="text-black text-sm mb-3">★★★★★</div>
            <blockquote className="text-gray-700 text-sm leading-relaxed">“The professionalism and impact were beyond what we expected. Every detail was handled with precision.”</blockquote>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">SM</div>
              <div>
                <div className="text-sm font-bold text-black-900">Sarah Mitchell</div>
                <div className="text-xs text-gray-900">Event Director, Luxe Events</div>
              </div>
            </div>
          </article>

          <article className="bg-white/20 border border-gray-300 rounded-xl p-6 shadow-sm">
            <div className="text-black text-sm mb-3">★★★★★</div>
            <blockquote className="text-gray-700 text-sm leading-relaxed">“A transformative partnership that elevated our brand in ways we hadn't imagined possible.”</blockquote>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">JC</div>
              <div>
                <div className="text-sm font-bold text-gray-900">James Chen</div>
                <div className="text-xs text-gray-900">CEO, Prestige Marketing</div>
              </div>
            </div>
          </article>

          <article className="bg-white/20 border border-gray-300 rounded-xl p-6 shadow-sm">
            <div className="text-black text-sm mb-3">★★★★★</div>
            <blockquote className="text-gray-700 text-sm leading-relaxed">“Authentic, engaging, and worth every investment. The audience response was electric.”</blockquote>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold">VR</div>
              <div>
                <div className="text-sm font-bold text-gray-900">Victoria Rousseau</div>
                <div className="text-xs text-gray-900">Producer, Global Entertainment</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default What