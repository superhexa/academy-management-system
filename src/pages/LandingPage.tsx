import { Link } from 'react-router-dom'

const highlights = [
  { label: 'الحضور والغياب', text: 'رصد واضح ومتابعة يومية تساعد المدرسة والأسرة على صناعة الانضباط.' },
  { label: 'التحصيل الأكاديمي', text: 'قراءة هادئة للعلامات والنتائج والخطط، من الصف إلى الإدارة.' },
  { label: 'المشهد المدرسي', text: 'حصص، شعب، معلمون وتقارير في تجربة رقمية واحدة متماسكة.' },
]

const principles = ['وضوح في القرار', 'احترام لكل طالب', 'شراكة مع الأسرة']

export function LandingPage() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-[#fbfaf7] text-[#242321]">
      <header className="border-b border-[#e5e1d8] bg-[#fbfaf7]/95 backdrop-blur">
        <nav aria-label="التنقل الرئيسي" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full border border-[#caa96a] bg-white text-lg font-black text-[#242321]">م</span>
            <span><b className="block text-sm">مدرسة الملك حسين بن طلال</b><small className="block text-xs text-[#77736b]">الثانوية الشاملة للبنين</small></span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#68645d] md:flex">
            <a href="#story" className="transition hover:text-[#b18a4b]">عن المدرسة</a>
            <a href="#platform" className="transition hover:text-[#b18a4b]">المنصة</a>
            <a href="#values" className="transition hover:text-[#b18a4b]">قيمنا</a>
          </div>
          <Link to="/login" className="rounded-full bg-[#242321] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#b18a4b]">دخول المنصة</Link>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-[#e5e1d8] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-14 size-80 rounded-full border border-[#d8c29a]/40" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
          <div>
            <p className="mb-7 text-xs font-bold tracking-[0.28em] text-[#b18a4b]">بوابة التعليم المدرسي · ٢٠٢٦ / ٢٠٢٧</p>
            <h1 className="max-w-3xl text-balance text-5xl font-black leading-[1.16] tracking-tight sm:text-7xl">مدرسة تُدار<br /><span className="text-[#b18a4b]">بوضوح.</span> وتتعلم بعمق.</h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-[#68645d]">نحو تجربة مدرسية أكثر هدوءًا، حيث يلتقي الطالب والمعلم والإدارة والأسرة حول صورة واحدة للنجاح.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/login" className="rounded-full bg-[#242321] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b18a4b]">ابدأ من المنصة</Link><a href="#story" className="rounded-full border border-[#d8d3c9] px-7 py-4 font-bold text-[#4c4943] transition hover:border-[#b18a4b]">اكتشف المدرسة</a></div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#d8c29a]/50" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#242321] p-7 text-white shadow-2xl shadow-[#242321]/15 sm:p-10">
              <div className="flex items-start justify-between border-b border-white/15 pb-8"><span className="text-xs tracking-[0.2em] text-[#d8c29a]">الهوية المدرسية</span><span className="text-4xl font-black text-[#d8c29a]">م</span></div>
              <p className="mt-16 text-3xl font-black leading-tight sm:text-4xl">العلم عادة.<br /><span className="text-[#d8c29a]">والتميز أثر.</span></p>
              <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-5 text-xs text-[#c9c5bc]"><span>المدرسة<br /><b className="mt-1 block text-sm text-white">مكان للانتماء</b></span><span className="text-left">الأردن<br /><b className="mt-1 block text-sm text-white">جيل المستقبل</b></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold tracking-[0.22em] text-[#b18a4b]">فلسفتنا</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">نترك مساحة<br />لما هو مهم.</h2></div><div><p className="max-w-2xl text-xl leading-10 text-[#68645d]">في مدرسة الملك حسين بن طلال نرى التقنية وسيلة للوضوح، لا غاية بحد ذاتها. لذلك صُممت البوابة لتمنح كل صاحب دور الأدوات التي يحتاجها، دون ضجيج أو تعقيد.</p><div id="platform" className="mt-14 grid gap-4 md:grid-cols-3">{highlights.map((item, index) => <article key={item.label} className="border-t-2 border-[#d8c29a] pt-5"><span className="font-mono text-xs text-[#b18a4b]">0{index + 1}</span><h3 className="mt-8 text-xl font-black">{item.label}</h3><p className="mt-3 text-sm leading-7 text-[#77736b]">{item.text}</p></article>)}</div></div></div></section>

      <section id="values" className="border-y border-[#e5e1d8] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold tracking-[0.22em] text-[#b18a4b]">قيم نعيشها</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">تعليم يرى<br />الإنسان أولًا.</h2></div><div className="divide-y divide-[#e5e1d8] border-y border-[#e5e1d8]">{principles.map((principle, index) => <div key={principle} className="flex items-center justify-between py-5"><span className="text-sm text-[#b18a4b]">{`٠${index + 1}`}</span><span className="text-xl font-bold">{principle}</span><span className="text-[#b18a4b]">↗</span></div>)}</div></div></section>

      <footer className="bg-[#242321] px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold">مدرسة الملك حسين بن طلال الثانوية الشاملة للبنين</p><p className="mt-2 text-xs text-[#b9b5ac]">بوابة مدرسية معاصرة · المملكة الأردنية الهاشمية</p></div><Link to="/login" className="font-bold text-[#d8c29a] transition hover:text-white">دخول المنصة ←</Link></div></footer>
    </main>
  )
}
