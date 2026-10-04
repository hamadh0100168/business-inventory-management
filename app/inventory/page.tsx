import { AppShell } from "@/components/app-shell";
import { inventoryMovements } from "@/lib/mock-data";

export default function InventoryPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Inventory</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Inventory overview</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Units in stock</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">1,482</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Stock value</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$324k</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">Items to reorder</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">24</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Inventory movements</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="pb-3 pr-5 font-medium">Product</th>
                  <th className="pb-3 pr-5 font-medium">Type</th>
                  <th className="pb-3 pr-5 font-medium">Quantity</th>
                  <th className="pb-3 pr-5 font-medium">Date</th>
                  <th className="pb-3 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {inventoryMovements.map((movement) => (
                  <tr key={movement.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-5 font-medium text-slate-800">{movement.product}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{movement.type}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{movement.quantity}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{movement.date}</td>
                    <td className="py-4 text-sm text-slate-600">{movement.note}</td>
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
