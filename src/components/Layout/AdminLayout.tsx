import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, type NavItem } from './Sidebar'
import { TopBar } from './TopBar'

const navItems: NavItem[] = [
  { label: 'لوحة التحكم', to: '/admin', end: true },
  { label: 'الطلبة', to: '/admin/students' },
  { label: 'بطاقات الطلبة', to: '/admin/student-cards' },
  { label: 'المعلمون', to: '/admin/teachers' },
  { label: 'الشعب والمواد', to: '/admin/classes' },
  { label: 'الجدول المدرسي', to: '/admin/timetable' },
  { label: 'الحضور والغياب', to: '/admin/attendance' },
  { label: 'رصد الحضور بالباركود', to: '/admin/scanner' },
  { label: 'التقارير الشهرية', to: '/admin/monthly-reports' },
  { label: 'الخطة الدراسية', to: '/admin/course-breakdown' },
  { label: 'الإعدادات', to: '/admin/settings' },
]

export function AdminLayout() {
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
      <Sidebar title="Admin" items={navItems} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col bg-[#fbfaf7]">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden bg-[#fbfaf7] p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
