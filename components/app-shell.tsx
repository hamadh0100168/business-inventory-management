import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Boxes, Building2, ChartColumn, Package2, Settings, ShoppingBag, Warehouse } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Dashboard", icon: BarChart3 },
  { href: "/products", label: "Products", icon: Boxes },
  { href: "/inventory", label: "Inventory", icon: Warehouse },
  { href: "/suppliers", label: "Suppliers", icon: Building2 },
  { href: "/sales", label: "Sales", icon: ShoppingBag },
  { href: "/reports", label: "Reports", icon: ChartColumn },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <aside className="hidden w-72 flex-col border-r border-slate-200 bg-slate-900 p-5 text-slate-100 lg:flex">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <Package2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Business</p>
            <h2 className="text-xl font-bold">InventoryPro</h2>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-brand-600 text-white shadow-soft"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl bg-slate-800 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Today</p>
          <p className="mt-2 text-2xl font-bold">$18,420</p>
          <p className="mt-1 text-sm text-emerald-400">+12.4% vs last week</p>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
