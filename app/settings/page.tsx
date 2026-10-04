import { AppShell } from "@/components/app-shell";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Settings</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Business settings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Store details</h2>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <label className="mb-1 block font-medium text-slate-700">Business name</label>
                <input defaultValue="InventoryPro Solutions" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
              <div>
                <label className="mb-1 block font-medium text-slate-700">Address</label>
                <input defaultValue="245 Market Avenue, New York" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Preferences</h2>
            <div className="space-y-4 text-sm text-slate-600">
              <label className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Low-stock alerts</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand-600" />
              </label>
              <label className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Daily summary emails</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand-600" />
              </label>
              <label className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Auto reorder suggestions</span>
                <input type="checkbox" className="h-4 w-4 accent-brand-600" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
