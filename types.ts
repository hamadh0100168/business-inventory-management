export type Product = {
  id: string;
  name: string;
  category: string;
  sku: string;
  stock: number;
  price: number;
  costPrice: number;
  reorderLevel: number;
  supplier: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  lastUpdated: string;
};

export type Supplier = {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  orderLeadTime: string;
  rating: number;
};

export type Sale = {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  date: string;
  status: "Paid" | "Pending" | "Refunded";
};

export type InventoryMovement = {
  id: string;
  product: string;
  type: "Purchase" | "Sale" | "Adjustment";
  quantity: number;
  date: string;
  note: string;
};

export type DashboardStat = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: unknown;
};
