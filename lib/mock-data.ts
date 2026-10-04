import type { DashboardStat, InventoryMovement, Product, Sale, Supplier } from "@/types";
import { BarChart3, Boxes, ShoppingBag, Wallet } from "lucide-react";

export const dashboardStats: DashboardStat[] = [
  { label: "Total products", value: "1,248", change: "+8.2%", positive: true, icon: Boxes },
  { label: "Low stock", value: "24", change: "-3.1%", positive: true, icon: BarChart3 },
  { label: "Sales this month", value: "$86.4k", change: "+12.4%", positive: true, icon: ShoppingBag },
  { label: "Inventory value", value: "$324k", change: "-1.7%", positive: false, icon: Wallet },
];

export const products: Product[] = [
  {
    id: "PRD-1001",
    name: "Premium Laptop 14",
    category: "Electronics",
    sku: "LAP-14-01",
    stock: 28,
    price: 1299,
    costPrice: 980,
    reorderLevel: 15,
    supplier: "NovaTech Supply",
    status: "In Stock",
    lastUpdated: "2026-10-01",
  },
  {
    id: "PRD-1002",
    name: "Office Chair Pro",
    category: "Furniture",
    sku: "FUR-CHAIR-02",
    stock: 12,
    price: 240,
    costPrice: 165,
    reorderLevel: 20,
    supplier: "Urban Works",
    status: "Low Stock",
    lastUpdated: "2026-10-02",
  },
  {
    id: "PRD-1003",
    name: "Wireless Mouse",
    category: "Accessories",
    sku: "ACC-MOUSE-09",
    stock: 44,
    price: 49,
    costPrice: 28,
    reorderLevel: 12,
    supplier: "Byte Parts",
    status: "In Stock",
    lastUpdated: "2026-10-03",
  },
  {
    id: "PRD-1004",
    name: "Business Notebook",
    category: "Stationery",
    sku: "STN-NOTE-11",
    stock: 5,
    price: 18,
    costPrice: 8,
    reorderLevel: 18,
    supplier: "Paperline Co.",
    status: "Low Stock",
    lastUpdated: "2026-10-04",
  },
  {
    id: "PRD-1005",
    name: "USB-C Hub",
    category: "Accessories",
    sku: "ACC-HUB-05",
    stock: 0,
    price: 65,
    costPrice: 32,
    reorderLevel: 10,
    supplier: "Connecto Labs",
    status: "Out of Stock",
    lastUpdated: "2026-10-04",
  },
  {
    id: "PRD-1006",
    name: "Ergonomic Keyboard",
    category: "Electronics",
    sku: "ELE-KB-22",
    stock: 31,
    price: 110,
    costPrice: 72,
    reorderLevel: 15,
    supplier: "NovaTech Supply",
    status: "In Stock",
    lastUpdated: "2026-10-02",
  },
];

export const suppliers: Supplier[] = [
  { id: "SUP-01", name: "NovaTech Supply", contact: "Amanda Ross", email: "sales@novatech.com", phone: "+1 (302) 555-0119", orderLeadTime: "4 days", rating: 4.9 },
  { id: "SUP-02", name: "Urban Works", contact: "Brian Miller", email: "orders@urbanworks.com", phone: "+1 (415) 555-0156", orderLeadTime: "7 days", rating: 4.7 },
  { id: "SUP-03", name: "Paperline Co.", contact: "Melissa James", email: "hello@paperline.com", phone: "+1 (612) 555-0184", orderLeadTime: "3 days", rating: 4.8 },
  { id: "SUP-04", name: "Byte Parts", contact: "Daniel Price", email: "support@byteparts.io", phone: "+1 (310) 555-0132", orderLeadTime: "5 days", rating: 4.6 },
];

export const sales: Sale[] = [
  { id: "INV-1001", customer: "Lumina Studio", product: "Premium Laptop 14", quantity: 4, total: 5196, date: "2026-10-03", status: "Paid" },
  { id: "INV-1002", customer: "Northwind Inc.", product: "Wireless Mouse", quantity: 12, total: 588, date: "2026-10-02", status: "Pending" },
  { id: "INV-1003", customer: "Harbor Logistics", product: "Ergonomic Keyboard", quantity: 8, total: 880, date: "2026-10-01", status: "Paid" },
  { id: "INV-1004", customer: "Aster & Co.", product: "Business Notebook", quantity: 15, total: 270, date: "2026-09-29", status: "Refunded" },
];

export const inventoryMovements: InventoryMovement[] = [
  { id: "MOV-01", product: "Premium Laptop 14", type: "Purchase", quantity: 30, date: "2026-10-02", note: "New batch received from NovaTech Supply" },
  { id: "MOV-02", product: "Office Chair Pro", type: "Sale", quantity: -8, date: "2026-10-01", note: "Sold to Office Max" },
  { id: "MOV-03", product: "USB-C Hub", type: "Adjustment", quantity: -5, date: "2026-09-30", note: "Damaged item written off" },
  { id: "MOV-04", product: "Business Notebook", type: "Purchase", quantity: 40, date: "2026-09-28", note: "Stock replenishment" },
];
