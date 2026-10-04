import { AppShell } from "@/components/app-shell";
import { suppliers } from "@/lib/mock-data";

export default function SuppliersPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Suppliers</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Supplier management</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">{supplier.name}</h2>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                  {supplier.rating.toFixed(1)} ★
                </span>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Contact: {supplier.contact}</p>
                <p>Email: {supplier.email}</p>
                <p>Phone: {supplier.phone}</p>
                <p>Lead time: {supplier.orderLeadTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
