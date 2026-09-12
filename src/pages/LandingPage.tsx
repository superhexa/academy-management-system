import { Link } from 'react-router-dom'

const services = [
  { number: '01', title: 'الحضور والغياب', text: 'رصد يومي دقيق، سجل إلكتروني، وتقارير فورية لأولياء الأمور والإدارة.' },
  { number: '02', title: 'العلامات والتقييم', text: 'متابعة تحصيل الطلبة وفق المواد والفصول والاختبارات المدرسية.' },
  { number: '03', title: 'الحصص والدوام', text: 'جدول حصص واضح للطلبة والمعلمين مع إدارة مرنة للغرف والشُعب.' },
]

const values = ['الانضباط والمسؤولية', 'التميّز الأكاديمي', 'المواطنة والانتماء']

export function LandingPage() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen overflow-hidden bg-[#f8f5ef] font-['IBM_Plex_Sans_Arabic'] text-[#201c1d]">
      <section className="relative border-b border-[#ded7ca] bg-[#4d1321] text-[#fffaf3]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,transparent_45%,#d4a64a_45%,#d4a64a_48%,transparent_48%)] [background-size:42px_42px]" />
        <nav aria-label="التنقل الرئيسي" className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-5 text-sm font-semibold text-[#eadfd4]">
            <a href="#about" className="hidden transition hover:text-[#e4c27a] sm:block">عن المدرسة</a>
            <a href="#services" className="hidden transition hover:text-[#e4c27a] sm:block">الخدمات</a>
            <Link to="/login" className="rounded-full border border-[#e4c27a] px-5 py-2 text-sm font-bold text-[#fffaf3] transition hover:bg-[#e4c27a] hover:text-[#4d1321]">دخول النظام</Link>
          </div>
          <div className="flex items-center gap-3 text-right">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#d4a64a] text-xl font-black text-[#4d1321]">م</div>
            <div>
              <p className="text-xs tracking-[0.22em] text-[#e4c27a]">بوابة المدرسة</p>
              <p className="font-bold">مدرسة الملك حسين بن طلال</p>
            </div>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex rounded-full bg-[#681d2d] px-4 py-2 text-sm font-semibold text-[#f1d38d]">الثانوية الشاملة للبنين · وزارة التربية والتعليم الأردنية</p>
            <h1 className="text-balance text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">نبني المعرفة،<br /><span className="text-[#e4c27a]">ونصنع المستقبل.</span></h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-[#eadfd4]">منصة مدرسية حديثة تجمع الإدارة والتعليم والمتابعة في مكان واحد، لتبقى مدرسة الملك حسين بن طلال مساحة آمنة للعلم والطموح.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/login" className="rounded-xl bg-[#d4a64a] px-7 py-4 font-black text-[#4d1321] shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e4c27a]">الدخول إلى البوابة</Link>
              <a href="#about" className="rounded-xl border border-[#b77880] px-7 py-4 font-bold text-[#fffaf3] transition hover:border-[#e4c27a] hover:text-[#e4c27a]">تعرّف على المدرسة</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] border border-[#e4c27a]/30" />
            <div className="relative rounded-[2rem] border border-[#e4c27a]/40 bg-[#681d2d] p-7 shadow-2xl shadow-black/30">
              <div className="flex items-start justify-between border-b border-[#a95160] pb-6"><span className="text-4xl font-black text-[#e4c27a]">٢٠٢٦</span><span className="rounded-full bg-[#4d1321] px-3 py-1 text-xs text-[#f1d38d]">العام الدراسي</span></div>
              <div className="py-10 text-center"><div className="mx-auto flex size-28 items-center justify-center rounded-full border-2 border-[#e4c27a] text-6xl font-black text-[#e4c27a]">م</div><p className="mt-6 text-xl font-bold">التعليم رسالة وهوية</p><p className="mt-2 text-sm leading-6 text-[#dec7c0]">بوابة رقمية تليق بطلبة الأردن ومعلميها</p></div>
              <div className="grid grid-cols-3 gap-3 border-t border-[#a95160] pt-5 text-center text-xs text-[#eadfd4]"><span>طلبة<br /><b className="text-lg text-[#fffaf3]">تميّز</b></span><span>معلمون<br /><b className="text-lg text-[#fffaf3]">إلهام</b></span><span>مدرسة<br /><b className="text-lg text-[#fffaf3]">انتماء</b></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold tracking-[0.18em] text-[#8b5d29]">مدرستنا</p><h2 id="about-heading" className="mt-3 text-4xl font-black leading-tight text-[#4d1321] sm:text-5xl">بيئة تعليمية<br />تدفعك للأمام</h2></div><p className="max-w-2xl text-lg leading-9 text-[#665d5d]">في مدرسة الملك حسين بن طلال الثانوية الشاملة للبنين نؤمن أن المدرسة ليست مبنى، بل مجتمع يتشارك فيه الطالب والمعلم والأسرة مسؤولية النجاح. نستخدم التقنية لخدمة الإنسان، ونضع الانضباط والفضول والاحترام في قلب التجربة التعليمية.</p></div>
        <div id="services" className="mt-14 grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.number} className="group rounded-2xl border border-[#ded7ca] bg-[#fffdf9] p-7 transition hover:-translate-y-2 hover:border-[#d4a64a] hover:shadow-xl hover:shadow-[#4d1321]/10"><span className="font-mono text-sm font-bold text-[#b77880]">{service.number}</span><h3 className="mt-12 text-2xl font-black text-[#4d1321]">{service.title}</h3><p className="mt-4 leading-7 text-[#716868]">{service.text}</p><div className="mt-8 h-1 w-12 bg-[#d4a64a] transition-all group-hover:w-20" /></article>)}</div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold tracking-[0.18em] text-[#8b5d29]">قيمنا</p><h2 className="mt-3 text-4xl font-black text-[#4d1321]">ننجح معًا،<br />ونترك أثرًا.</h2></div><div className="grid gap-3">{values.map((value, index) => <div key={value} className="flex items-center gap-5 border-b border-[#d4cbbb] py-5"><span className="text-sm font-bold text-[#b77880]">0{index + 1}</span><span className="text-xl font-bold text-[#4d1321]">{value}</span></div>)}</div></div></section>

      <footer className="bg-[#201c1d] px-6 py-10 text-[#eadfd4] lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-[#fffaf3]">مدرسة الملك حسين بن طلال الثانوية الشاملة للبنين</p><p className="mt-2 text-sm text-[#b9aaa5]">بوابة المدرسة الرقمية · المملكة الأردنية الهاشمية</p></div><Link to="/login" className="font-bold text-[#e4c27a] hover:text-[#fffaf3]">دخول النظام ←</Link></div></footer>
    </main>
  )
}
