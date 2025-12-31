

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20 -ml-9">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-700">Focus</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">What we offer</h2>
          <p className="mt-4 text-gray-600">Choose your level of access and connection</p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 px-10  md:grid-cols-2 lg:grid-cols-3 ">
          {/* Card 1 */}
          <div className="bg-white/4 shadow-sm rounded-xl border border-gray-300 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold">Insider access</h3>
              <div className="mt-6">
                <div className="text-4xl font-extrabold">$9</div>
                <div className="text-sm text-gray-500 mt-1">per month</div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Exclusive content updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Early event announcements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm">Member-only newsletter</span>
                </li>
              </ul>
            </div>
 
            <button className="mt-6 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">Join now</button>
          </div>


          {/* Card 2 */}
          <div className="bg-white/4 shadow-sm rounded-lg border border-gray-300 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold">Premium circle</h3>
              <div className="mt-4">
                <div className="text-4xl font-extrabold">$29</div>
                <div className="text-sm text-gray-500 mt-1">per month</div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">All Insider benefits included</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Priority booking access</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Exclusive member events</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Direct messaging channel</span></li>
              </ul>
            </div>
 
            <button className="mt-6 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">Join now</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white/4 shadow-sm rounded-lg border border-gray-300 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold">VIP inner circle</h3>
              <div className="mt-4">
                <div className="text-4xl font-extrabold">$99</div>
                <div className="text-sm text-gray-500 mt-1">per month</div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">All Premium benefits included</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Private one-on-one sessions</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Concierge booking service</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Invitation to exclusive retreats</span></li>
                <li className="flex items-start gap-3"><svg className="w-4 h-4 text-black mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-sm">Custom partnership opportunities</span></li>
              </ul>
            </div>
 
            <button className="mt-6 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">Join now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing