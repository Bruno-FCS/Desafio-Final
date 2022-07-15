export interface Vehicles extends Array<Vehicle> {}

export interface Vehicle{
  vehicle_id: number | string
  vehicle_model: string
  vehicle_total_volume: number
  vehicle_connected: number
  vehicle_software_updates: number
}

export interface VehiclesAPI {
  vehicles: Vehicles;
}
