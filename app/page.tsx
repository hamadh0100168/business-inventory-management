import { PackageCheck, ArrowUpRight, ShoppingCart, Warehouse, AlertTriangle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { StatCard } from "@/components/stat-card";
import { dashboardStats, products } from "@/lib/mock-data";

export default function HomePage() {
  const lowStockProducts = products.filter((item) => item.stock <= item.reorderLevel);

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Overview</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Business dashboard</h1>
          </div>
          <button className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
            + Add product
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Inventory status</h2>
                <p className="text-sm text-slate-500">Current stock across your product catalog</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                <PackageCheck className="h-3.5 w-3.5" />
                Healthy stock
              </span>
            </div>

            <div className="space-y-4">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-slate-800">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900">{product.stock}</p>
                    <p className="text-xs text-slate-500">units left</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Alerts</h2>
                <p className="text-sm text-slate-500">Items requiring attention</p>
              </div>
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>

            <div className="space-y-3">
              {lowStockProducts.length > 0 ? (
                lowStockProducts.map((product) => (
                  <div key={product.id} className="rounded-xl bg-amber-50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-800">{product.name}</p>
                      <span className="text-xs font-medium text-amber-700">Low stock</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {product.stock} units remaining. Reorder threshold: {product.reorderLevel}
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
                  No stock alerts. Everything is in good condition.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Recent products</h2>
              <p className="text-sm text-slate-500">Latest inventory updates</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              View all
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="pb-3 pr-4 font-medium">Product</th>
                  <th className="pb-3 pr-4 font-medium">SKU</th>
                  <th className="pb-3 pr-4 font-medium">Stock</th>
                  <th className="pb-3 pr-4 font-medium">Price</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-3 pr-4">
                      <div>
                        <p className="font-medium text-slate-800">{product.name}</p>
                        <p className="text-sm text-slate-500">{product.category}</p>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-sm text-slate-600">{product.sku}</td>
                    <td className="py-3 pr-4 text-sm text-slate-600">{product.stock}</td>
                    <td className="py-3 pr-4 text-sm text-slate-600">${product.price.toFixed(2)}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          product.status === "In Stock"
                            ? "bg-emerald-100 text-emerald-700"
                            : product.status === "Low Stock"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {product.status}
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
