export interface VehiclesData extends Array<VehicleData> {}

export interface VehicleData{
  vehicledata_id: number | string
  vehicledata_vin: string
  vehicledata_odometer: number | string
  vehicledata_tire_pressure: Array<number> | string
  vehicledata_status: string
  vehicledata_battery_status: string
  vehicledata_fuel_level: number | string
  vehicledata_lat: number | string
  vehicledata_long: number | string
}

export interface VehiclesDataAPI {
  vehicledata: VehiclesData;
}
