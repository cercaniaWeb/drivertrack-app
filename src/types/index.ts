// src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'conductor' | 'admin' | 'dueno';
  vehicleId?: string;
  avatar: string;
  phone?: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  year: number;
  status: 'active' | 'maintenance' | 'inactive';
  driver: string;
  driverId: string;
  image: string;
  insuranceCompany: string;
  insurancePolicy: string;
  insurancePhone: string;
  weeklyRent: number;
}

export interface Ticket {
  id: string;
  driverId: string;
  driver: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  status: 'pending' | 'in-progress' | 'resolved';
  date: string;
  ticketId: string;
  updates: {
    date: string;
    status: string;
    message: string;
  }[];
}

export interface Account {
  id: number;
  driverId: number;
  driver: string;
  income: number;
  rent: number;
  expenses: number;
  balance: number;
  previousDebt: number;
  total: number;
  status: 'paid' | 'pending' | 'partial';
  paymentEvidence: File | null;
  week: string;
}

export interface MaintenanceTask {
  id: number;
  vehicleId: number;
  vehicle: string;
  task: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
}

export interface Deduction {
  id: number;
  driverId: number;
  driver: string;
  amount: number;
  reason: string;
  status: 'approved' | 'pending';
  date: string;
  receipt: File | null;
}

export interface Notification {
  id: number;
  userId: number;
  type: 'maintenance' | 'deduction' | 'ticket' | 'account' | 'message';
  message: string;
  date: string;
  read: boolean;
}

export interface Message {
  id: number;
  from: string;
  to: string;
  message: string;
  date: string;
  image: File | null;
}
