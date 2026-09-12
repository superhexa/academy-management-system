import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, type NavItem } from './Sidebar'
import { TopBar } from './TopBar'

const navItems: NavItem[] = [
  { label: 'لوحة التحكم', to: '/teacher', end: true },
  { label: 'طلبتي', to: '/teacher/students' },
  { label: 'الجدول المدرسي', to: '/teacher/timetable' },
  { label: 'الحضور والغياب', to: '/teacher/attendance' },
  { label: 'بنك الأسئلة', to: '/teacher/questions' },
  { label: 'الاختبارات والنتائج', to: '/teacher/exams' },
  { label: 'الخطة الدراسية', to: '/teacher/course-breakdown' },
  { label: 'الإعدادات', to: '/teacher/settings' },
]

export function TeacherLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // The mobile drawer overlays the page — lock background scroll while it's open.
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div dir="rtl" lang="ar" className="flex min-h-dvh bg-cream-50">
      <Sidebar title="Teacher" items={navItems} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden bg-cream-50 p-4 dark:bg-slate-900 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
