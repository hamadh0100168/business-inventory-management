import { AppShell } from "@/components/app-shell";

export default function ReportsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Reports</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Performance analytics</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Monthly revenue</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$86.4k</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Average order</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$652</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Inventory turnover</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">5.8x</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Top performing categories</h2>
          <div className="space-y-4">
            {[
              { label: "Electronics", value: 82 },
              { label: "Accessories", value: 68 },
              { label: "Furniture", value: 56 },
              { label: "Stationery", value: 41 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm text-slate-600">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand-600" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
