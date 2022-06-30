export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  vehicle_id: number | string
  vehicle_model: string
  vehicle_total_volume: number | string
  vehicle_connected: number | string
  vehicle_software_updates: number | string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
