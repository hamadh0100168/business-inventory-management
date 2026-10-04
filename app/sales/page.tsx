import { AppShell } from "@/components/app-shell";
import { sales } from "@/lib/mock-data";

export default function SalesPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Sales</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Recent transactions</h1>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="pb-3 pr-5 font-medium">Invoice</th>
                  <th className="pb-3 pr-5 font-medium">Customer</th>
                  <th className="pb-3 pr-5 font-medium">Product</th>
                  <th className="pb-3 pr-5 font-medium">Quantity</th>
                  <th className="pb-3 pr-5 font-medium">Total</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-5 font-medium text-slate-800">{sale.id}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{sale.customer}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{sale.product}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{sale.quantity}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">${sale.total.toFixed(2)}</td>
                    <td className="py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          sale.status === "Paid"
                            ? "bg-emerald-100 text-emerald-700"
                            : sale.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
