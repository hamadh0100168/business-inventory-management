import { AppShell } from "@/components/app-shell";
import { products } from "@/lib/mock-data";

export default function ProductsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Products</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Product catalog</h1>
          </div>
          <button className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-700">
            + New product
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="pb-3 pr-5 font-medium">Product</th>
                  <th className="pb-3 pr-5 font-medium">Category</th>
                  <th className="pb-3 pr-5 font-medium">SKU</th>
                  <th className="pb-3 pr-5 font-medium">Stock</th>
                  <th className="pb-3 pr-5 font-medium">Price</th>
                  <th className="pb-3 pr-5 font-medium">Supplier</th>
                  <th className="pb-3 pr-5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-5">
                      <div>
                        <p className="font-semibold text-slate-800">{product.name}</p>
                        <p className="text-sm text-slate-500">{product.id}</p>
                      </div>
                    </td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{product.category}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{product.sku}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{product.stock}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">${product.price.toFixed(2)}</td>
                    <td className="py-4 pr-5 text-sm text-slate-600">{product.supplier}</td>
                    <td className="py-4 pr-5">
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
