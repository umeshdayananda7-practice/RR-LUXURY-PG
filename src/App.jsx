const pgName = 'RR Luxury Co-Living PG'
const mapsShortUrl = 'https://maps.app.goo.gl/zYki2hndnXgUPcm37'
const fullAddress = '91/2, 1st Cross St, Shetty Layout, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048'
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`
const primaryPhoneDisplay = '+91 91825 06363'
const primaryPhoneTel = 'tel:+919182506363'
const secondaryPhoneDisplay = '+91 91825 06363'
const secondaryPhoneTel = 'tel:+919182506363'
const whatsappUrl = 'https://wa.me/919182506363'

const pricing = [
  { title: '1 Sharing', price: 'Rs 22,000', note: 'Private and premium' },
  { title: '2 Sharing', price: 'Rs 11,000', note: 'Balanced comfort' },
  { title: '3 Sharing', price: 'Rs 8,500', note: 'Most preferred' },
  { title: '4 Sharing', price: 'Rs 7,500', note: 'Value plan' },
]

const amenities = [
  '3-Time Meals',
  '24x7 Wi-Fi',
  'Power Backup',
  'CCTV Security',
  'Washing Machines',
  'Gym',
  'Games',
  'Common Kitchen',
  'Lift',
  'Geyser',
  'RO Water',
]

const weeklyMenu = [
  { day: 'Monday', tiffin: 'Poha, Upma', meals: 'Curry, Rasam', dinner: 'Curry, Fry, Dal', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80' },
  { day: 'Tuesday', tiffin: 'Idly, Sambar', meals: 'Rice Item', dinner: 'Curry, Fry, Dal', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=500&q=80' },
  { day: 'Wednesday', tiffin: 'Puri', meals: 'Sambar', dinner: 'Chicken', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80' },
  { day: 'Thursday', tiffin: 'Plain Dosa', meals: 'Curry, Chutney', dinner: 'Rasam, Special', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80' },
  { day: 'Friday', tiffin: 'Chapati', meals: 'Rice Item', dinner: 'Chole Bhature', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80' },
  { day: 'Saturday', tiffin: 'Paddu, Uttapam', meals: 'Sambar, Chutney', dinner: 'Veg Rice, Parota', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=500&q=80' },
  { day: 'Sunday', tiffin: 'Bonda, Paddu', meals: 'Palak Dal, Fry', dinner: 'Chicken', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80' },
]

const galleryImages = [
  { src: '/gallery/WhatsApp%20Image%202026-02-24%20at%2012.41.09%20PM.jpeg', title: 'Attached Bathroom 1' },
  { src: '/gallery/WhatsApp%20Image%202026-02-24%20at%2012.41.10%20PM.jpeg', title: 'Attached Bathroom 2' },
  { src: '/gallery/WhatsApp%20Image%202026-02-24%20at%2012.41.11%20PM.jpeg', title: 'Twin Sharing Room' },
  { src: '/gallery/WhatsApp%20Image%202026-02-24%20at%2012.41.13%20PM.jpeg', title: 'Room View with Storage' },
  { src: '/gallery/WhatsApp%20Image%202026-02-24%20at%2012.41.19%20PM.jpeg', title: 'Triple Sharing Room' },
]

const amenityGalleryImages = [
  { src: '/gallery/boxing.jpeg', title: 'Boxing and Fitness Zone' },
  { src: '/gallery/cycke.jpeg', title: 'Exercise Cycle' },
  { src: '/gallery/football.jpeg', title: 'Foosball Game Table' },
  { src: '/gallery/table%20tennis.jpeg', title: 'Table Tennis' },
  { src: '/gallery/tredmil.jpeg', title: 'Treadmill and Cardio' },
]

const html = `
  <div class="mobile-cta min-h-screen pb-10">
    <header class="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <img src="/logo.svg" alt="${pgName} logo" class="h-10 w-10 rounded-xl" />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">${pgName}</p>
            <p class="text-sm font-medium text-slate-600">Mahadevapura, Bengaluru</p>
          </div>
        </div>
        <a href="${primaryPhoneTel}" class="hidden rounded-full bg-teal-700 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-800 sm:inline-block">Call Now</a>
      </div>
    </header>

    <main class="mx-auto w-full max-w-7xl space-y-10 px-4 pt-6 sm:space-y-12 sm:px-6 sm:pt-8 lg:px-8">
      <section class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <article class="panel p-5 sm:p-7">
          <p class="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">Newly Opened | Fully Furnished | Near Metro</p>
          <h1 class="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Modern Co-Living for Students and Professionals</h1>
          <p class="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">Safe, clean, and comfortable stay with complete facilities, nutritious meals, and premium room options.</p>
          <div class="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#pricing" class="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800">View Pricing</a>
            <a href="#gallery" class="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50">See Gallery</a>
            <a href="#visit" class="rounded-xl border border-transparent bg-amber-100 px-5 py-3 text-center text-sm font-semibold text-amber-800 hover:bg-amber-200">Book Visit</a>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            ${['CCTV', 'Power Backup', 'Lift', '3-Time Meals'].map((item) => `
              <div class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs font-semibold text-slate-700">${item}</div>
            `).join('')}
          </div>
        </article>

        <aside id="pricing" class="panel overflow-hidden">
          <div class="bg-gradient-to-r from-teal-700 to-cyan-700 px-5 py-4 text-white sm:px-6">
            <p class="text-xs uppercase tracking-[0.16em] text-cyan-100">Room Pricing</p>
            <p class="mt-1 text-3xl font-extrabold">From Rs 7,500/month</p>
          </div>
          <div class="grid gap-3 p-4 sm:p-5">
            ${pricing.map((plan, index) => `
              <div class="hover-lift rounded-xl border ${index === 2 ? 'border-teal-300 bg-teal-50/60' : 'border-slate-200 bg-white'} px-4 py-3">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-sm font-bold text-slate-900">${plan.title}</p>
                  <p class="text-base font-extrabold text-teal-700">${plan.price}</p>
                </div>
                <p class="mt-1 text-xs text-slate-600">${plan.note}</p>
              </div>
            `).join('')}
          </div>
        </aside>
      </section>

      <section id="amenities" class="panel p-5 sm:p-6">
        <div class="flex items-center justify-between gap-3">
          <h2 class="section-title font-extrabold text-slate-900">Facilities</h2>
          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">All Included</span>
        </div>
        <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${amenities.map((item) => `
            <div class="hover-lift rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">${item}</div>
          `).join('')}
        </div>
      </section>

      <section id="menu" class="panel p-5 sm:p-6">
        <div class="flex flex-wrap items-end justify-between gap-2">
          <h2 class="section-title font-extrabold text-slate-900">Weekly Food Menu</h2>
          <p class="text-xs font-medium text-slate-500">Freshly prepared every day</p>
        </div>

        <div class="mt-5 grid gap-4 sm:hidden">
          ${weeklyMenu.map((item) => `
            <article class="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src="${item.image}" alt="${item.day} food" class="h-40 w-full object-cover" loading="lazy" />
              <div class="space-y-1.5 p-4 text-sm">
                <p class="font-extrabold text-slate-900">${item.day}</p>
                <p class="text-slate-600"><span class="font-semibold text-slate-800">Tiffin:</span> ${item.tiffin}</p>
                <p class="text-slate-600"><span class="font-semibold text-slate-800">Meals:</span> ${item.meals}</p>
                <p class="text-slate-600"><span class="font-semibold text-slate-800">Dinner:</span> ${item.dinner}</p>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="mt-5 hidden overflow-x-auto sm:block">
          <table class="min-w-[760px] w-full text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200 text-slate-600">
                <th class="px-3 py-3 font-semibold">Day</th>
                <th class="px-3 py-3 font-semibold">Tiffin</th>
                <th class="px-3 py-3 font-semibold">Meals</th>
                <th class="px-3 py-3 font-semibold">Dinner</th>
                <th class="px-3 py-3 font-semibold">Image</th>
              </tr>
            </thead>
            <tbody>
              ${weeklyMenu.map((item) => `
                <tr class="border-b border-slate-100 align-top">
                  <td class="px-3 py-3 font-bold text-slate-800">${item.day}</td>
                  <td class="px-3 py-3 text-slate-600">${item.tiffin}</td>
                  <td class="px-3 py-3 text-slate-600">${item.meals}</td>
                  <td class="px-3 py-3 text-slate-600">${item.dinner}</td>
                  <td class="px-3 py-3"><img src="${item.image}" alt="${item.day} menu" class="h-14 w-20 rounded-md object-cover" loading="lazy" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <section id="rooms" class="space-y-4">
        <h2 class="section-title font-extrabold text-slate-900">Room Plans</h2>
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          ${pricing.map((plan, index) => `
            <article class="panel hover-lift p-5">
              <p class="text-sm font-semibold text-slate-500">${plan.title}</p>
              <p class="mt-1 text-3xl font-extrabold text-slate-900">${plan.price}</p>
              <p class="mt-2 text-sm text-slate-600">${plan.note}</p>
              <a href="#visit" class="mt-4 inline-block rounded-lg ${index === 3 ? 'bg-amber-500 hover:bg-amber-600' : 'bg-teal-700 hover:bg-teal-800'} px-4 py-2 text-sm font-semibold text-white">Check Availability</a>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="gallery" class="space-y-4">
        <div class="flex flex-wrap items-end justify-between gap-2">
          <h2 class="section-title font-extrabold text-slate-900">Property Gallery</h2>
          <p class="text-xs font-medium text-slate-500">Rooms and bathrooms</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${galleryImages.map((item) => `
            <figure class="panel overflow-hidden hover-lift">
              <img src="${item.src}" alt="${item.title}" class="h-56 w-full object-cover" loading="lazy" />
              <figcaption class="px-4 py-3 text-sm font-semibold text-slate-700">${item.title}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>

      <section class="space-y-4">
        <div class="flex flex-wrap items-end justify-between gap-2">
          <h2 class="section-title font-extrabold text-slate-900">Gym and Games Gallery</h2>
          <p class="text-xs font-medium text-slate-500">Fitness and entertainment spaces</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${amenityGalleryImages.map((item) => `
            <figure class="panel overflow-hidden hover-lift">
              <img src="${item.src}" alt="${item.title}" class="h-56 w-full object-cover" loading="lazy" />
              <figcaption class="px-4 py-3 text-sm font-semibold text-slate-700">${item.title}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>

      <section id="location" class="grid gap-4 md:grid-cols-2">
        <article class="panel p-5 sm:p-6">
          <h2 class="section-title font-extrabold text-slate-900">Location</h2>
          <p class="mt-3 text-sm leading-7 text-slate-600">${fullAddress}</p>
          <a href="${mapsShortUrl}" target="_blank" rel="noreferrer" class="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Open Google Maps</a>
        </article>
        <div class="panel overflow-hidden">
          <iframe title="${pgName} map" src="${mapsEmbedUrl}" class="h-72 w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section id="visit" class="panel overflow-hidden">
        <div class="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-7 text-white sm:px-7">
          <h2 class="section-title font-extrabold">Book a Site Visit</h2>
          <p class="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">Call or WhatsApp us to check room availability and reserve your seat.</p>
          <div class="mt-5 grid gap-3 sm:flex sm:flex-wrap">
            <a href="${primaryPhoneTel}" class="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-slate-900">${primaryPhoneDisplay}</a>
            <a href="${secondaryPhoneTel}" class="rounded-xl border border-white/50 px-5 py-3 text-center text-sm font-bold text-white">${secondaryPhoneDisplay}</a>
            <a href="${whatsappUrl}" class="rounded-xl bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white hover:bg-emerald-600">WhatsApp</a>
          </div>
        </div>
      </section>
    </main>

    <div class="mobile-sticky sm:hidden">
      <div class="glass rounded-2xl border border-white/80 p-2 shadow-xl">
        <div class="grid grid-cols-2 gap-2">
          <a href="${primaryPhoneTel}" class="rounded-xl bg-slate-900 px-3 py-3 text-center text-sm font-bold text-white">Call</a>
          <a href="${whatsappUrl}" class="rounded-xl bg-emerald-500 px-3 py-3 text-center text-sm font-bold text-white">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
`

export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
