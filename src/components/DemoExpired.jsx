import { LogoSVG, BtnRed, BtnIconRed } from './ui'

export default function DemoExpired() {
  const whatsappUrl = "https://wa.me/254743052401?text=Hello%20Benard,%20I%20visited%20the%20Jelani%20Motors%20demo%20and%20noticed%20the%20access%20has%20expired.%20I'd%20like%20to%20discuss%20the%20next%20steps."

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center font-body">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col items-center gap-8">
        {/* Branding */}
        <div className="bg-brand-dark p-4 rounded-2xl">
          <LogoSVG />
        </div>

        {/* Status Badge */}
        <div className="bg-red-50 text-brand-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
          Prototype Access Expired
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-heading font-bold text-slate-900 leading-tight">
            Review Period <br />
            <span className="text-slate-400 font-medium">Completed</span>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Thank you for exploring the Jelani Motors digital experience. The preview period for this prototype has concluded.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-slate-100 rounded-full" />

        {/* Action Call */}
        <div className="space-y-6 w-full">
          <p className="text-sm font-medium text-slate-500">
            For further inquiries or to reactivate access, please contact the lead developer:
          </p>
          <BtnRed href={whatsappUrl} className="w-full justify-center py-4 bg-brand-dark hover:bg-brand-red">
            <span>Contact Benard on WhatsApp</span>
            <BtnIconRed />
          </BtnRed>
        </div>

        <p className="text-[10px] text-slate-300 uppercase tracking-tighter">
          Jelani Motors • Performance & Style
        </p>
      </div>
    </div>
  )
}
