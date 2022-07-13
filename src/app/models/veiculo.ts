export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  vehicle_id: number | string
  vehicle_model: string
  vehicle_total_volume: number
  vehicle_connected: number
  vehicle_software_updates: number
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
