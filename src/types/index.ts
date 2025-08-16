// src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'conductor' | 'admin' | 'dueno';
  vehicleId?: string;
  avatar?: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  year: number;
  status: string;
  driverId: string;
}

export interface Ticket {
  id: string;
  driverId: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  status: 'pending' | 'in-progress' | 'resolved';
  date: string;
}
