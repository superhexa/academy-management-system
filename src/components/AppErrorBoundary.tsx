import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[v0] Application render error', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <main dir="rtl" lang="ar" className="flex min-h-screen items-center justify-center bg-[#f8f5ef] p-6 text-[#201c1d]">
        <section className="w-full max-w-lg rounded-3xl border border-[#ded7ca] bg-[#fffdf9] p-8 text-center shadow-xl">
          <p className="text-sm font-bold text-[#8b5d29]">بوابة المدرسة</p>
          <h1 className="mt-3 text-2xl font-black text-[#4d1321]">حدث خطأ غير متوقع</h1>
          <p className="mt-3 leading-7 text-[#716868]">لم نتمكن من تحميل هذه الصفحة. أعد المحاولة أو ارجع إلى الصفحة الرئيسية.</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-[#4d1321] px-6 py-3 font-bold text-[#fffaf3]">إعادة المحاولة</button>
        </section>
      </main>
    )
  }
}
