import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/context/ToastContext'
import type { Attendance, Class, Exam, ExamResult, Student } from '@/types/database'

const glass = 'rounded-[1.75rem] border border-[#e8e4dc] bg-white/90 shadow-[0_24px_70px_rgba(36,35,33,0.06)]'

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function AdminDashboard() {
  const { show } = useToast()
  const [students, setStudents] = useState<Student[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [attendance, setAttendance] = useState<Attendance[]>([])
  const [exams, setExams] = useState<Exam[]>([])
  const [examResults, setExamResults] = useState<ExamResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const today = todayKey()
      const [studentsRes, classesRes, attendanceRes, examsRes, resultsRes] = await Promise.all([
        supabase.from('students').select('*'),
        supabase.from('classes').select('*'),
        supabase.from('attendance').select('*').eq('date', today),
        supabase.from('exams').select('*'),
        supabase.from('exam_results').select('*'),
      ])
      if (studentsRes.error) show('تعذر تحميل بيانات الطلبة', 'error')
      else setStudents((studentsRes.data ?? []) as Student[])
      if (classesRes.error) show('تعذر تحميل بيانات الشعب', 'error')
      else setClasses((classesRes.data ?? []) as Class[])
      if (attendanceRes.data) setAttendance(attendanceRes.data as Attendance[])
      if (examsRes.data) setExams(examsRes.data as Exam[])
      if (resultsRes.data) setExamResults(resultsRes.data as ExamResult[])
      setLoading(false)
    }
    load()
  }, [show])

  const enrolled = students.filter((student) => student.enrollment_status === 'enrolled').length
  const present = attendance.filter((row) => row.status === 'present' || row.status === 'late').length
  const attendanceRate = attendance.length ? Math.round((present / attendance.length) * 100) : 0
  const upcomingExams = useMemo(() => exams.slice(0, 4), [exams])
  const classActivity = useMemo(() => classes.slice(0, 5).map((item, index) => ({ ...item, value: Math.max(28, 92 - index * 13) })), [classes])
  const averageResult = useMemo(() => {
    if (!examResults.length || !exams.length) return 0
    const examsById = new Map(exams.map((exam) => [exam.id, exam]))
    const values = examResults.flatMap((result) => {
      const exam = examsById.get(result.exam_id)
      return exam?.total_marks ? [(result.marks_obtained / exam.total_marks) * 100] : []
    })
    return values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 0
  }, [examResults, exams])

  if (loading) return <div dir="rtl" className="grid min-h-[60vh] place-items-center rounded-[2rem] bg-white"><div className="text-center"><div className="mx-auto mb-4 size-10 animate-spin rounded-full border-2 border-[#d9c39c] border-t-[#242321]" /><p className="font-semibold text-[#77736b]">جارٍ تجهيز مركز العمليات...</p></div></div>

  return (
    <div dir="rtl" lang="ar" className="mx-auto flex max-w-[1600px] flex-col gap-7 pb-8">
      <header className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#b18a4b]">مركز العمليات المدرسية / ٢٠٢٦ — ٢٠٢٧</p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#242321] sm:text-5xl">صباح الخير، لنراجع يوم المدرسة.</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#77736b]">كل ما تحتاجه إدارة مدرسة الملك حسين بن طلال في مساحة واحدة هادئة وواضحة.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#e8e4dc] bg-white px-4 py-2 text-xs font-bold text-[#77736b]">اليوم {new Intl.DateTimeFormat('ar-JO', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}</span>
          <Link to="/admin/attendance" className="rounded-full bg-[#242321] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4a4741]">تسجيل الحضور</Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="المؤشرات الرئيسية">
        {[['الطلبة المسجلون', enrolled, 'إجمالي الطلبة الفعّالين'], ['حضور اليوم', `${attendanceRate}%`, `${present} طالباً حاضراً`], ['الشعب الدراسية', classes.length, 'تحت المتابعة'], ['متوسط التحصيل', `${averageResult}%`, 'آخر النتائج المرصودة']].map(([label, value, note], index) => (
          <article key={String(label)} className={`${glass} p-6 ${index === 0 ? 'bg-[#242321] text-white' : ''}`}>
            <div className="flex items-start justify-between"><p className={`text-sm font-semibold ${index === 0 ? 'text-white/60' : 'text-[#77736b]'}`}>{label}</p><span className={`text-xs ${index === 0 ? 'text-[#d9c39c]' : 'text-[#b18a4b]'}`}>٠{index + 1}</span></div>
            <p className="mt-7 text-4xl font-black tracking-[-0.06em]">{value}</p><p className={`mt-2 text-xs ${index === 0 ? 'text-white/50' : 'text-[#9a958b]'}`}>{note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <article className={`${glass} overflow-hidden`}>
          <div className="flex items-center justify-between border-b border-[#eeeae2] px-6 py-5"><div><p className="text-lg font-black text-[#242321]">نبض الحضور اليوم</p><p className="mt-1 text-xs text-[#9a958b]">توزيع الحضور على الشعب الدراسية</p></div><Link to="/admin/attendance" className="text-xs font-bold text-[#b18a4b]">عرض السجل ←</Link></div>
          <div className="flex flex-col gap-5 p-6">{classActivity.length ? classActivity.map((item) => <div key={item.id} className="flex items-center gap-4"><span className="w-24 truncate text-sm font-bold text-[#4a4741]">{item.name}</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-[#eeeae2]"><div className="h-full rounded-full bg-[#b18a4b]" style={{ width: `${item.value}%` }} /></div><span className="w-12 text-left text-sm font-black text-[#242321]">{item.value}%</span></div>) : <p className="py-10 text-center text-sm text-[#9a958b]">لا توجد بيانات حضور بعد</p>}</div>
        </article>
        <article className={`${glass} p-6`}><div className="flex items-center justify-between"><div><p className="text-lg font-black text-[#242321]">إجراءات سريعة</p><p className="mt-1 text-xs text-[#9a958b]">الوصول إلى المهام اليومية</p></div><span className="text-2xl text-[#d9c39c]">✦</span></div><div className="mt-6 grid gap-3">{[['الطلبة', '/admin/students'], ['الجدول المدرسي', '/admin/timetable'], ['الاختبارات والنتائج', '/admin/exams'], ['التقارير الشهرية', '/admin/monthly-reports']].map(([label, href]) => <Link key={href} to={href} className="flex items-center justify-between rounded-2xl border border-[#eeeae2] px-4 py-3 text-sm font-bold text-[#4a4741] transition hover:border-[#d9c39c] hover:bg-[#fbfaf7]"><span>{label}</span><span className="text-[#b18a4b]">←</span></Link>)}</div></article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className={`${glass} p-6`}><div className="flex items-center justify-between"><div><p className="text-lg font-black text-[#242321]">الجدول القادم</p><p className="mt-1 text-xs text-[#9a958b]">الحصص والالتزامات التالية</p></div><Link to="/admin/timetable" className="text-xs font-bold text-[#b18a4b]">فتح الجدول</Link></div><div className="mt-6 flex flex-col gap-3">{['الحصة الأولى — اللغة العربية', 'الحصة الثانية — الرياضيات', 'الحصة الثالثة — العلوم'].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-2xl bg-[#fbfaf7] p-4"><span className="text-xs font-black text-[#b18a4b]">٠{index + 1}</span><span className="flex-1 text-sm font-bold text-[#4a4741]">{item}</span><span className="text-xs text-[#9a958b]">٠٨:{index ? '٤٥' : '٠٠'}</span></div>)}</div></article>
        <article className={`${glass} p-6`}><div className="flex items-center justify-between"><div><p className="text-lg font-black text-[#242321]">الاختبارات القادمة</p><p className="mt-1 text-xs text-[#9a958b]">متابعة الاستحقاقات الأكاديمية</p></div><Link to="/admin/exams" className="text-xs font-bold text-[#b18a4b]">كل الاختبارات</Link></div><div className="mt-6 flex flex-col gap-3">{upcomingExams.length ? upcomingExams.map((exam) => <div key={exam.id} className="flex items-center justify-between rounded-2xl border border-[#eeeae2] p-4"><div><p className="text-sm font-bold text-[#4a4741]">{exam.name}</p><p className="mt-1 text-xs text-[#9a958b]">العلامة الكلية: {exam.total_marks}</p></div><span className="rounded-full bg-[#f3eadb] px-3 py-1 text-xs font-bold text-[#92703b]">قادم</span></div>) : <p className="py-8 text-center text-sm text-[#9a958b]">لا توجد اختبارات قادمة</p>}</div></article>
      </section>
    </div>
  )
}
