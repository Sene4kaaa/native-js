import {CityType, GovernmentBuildingType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, happyStreet: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== happyStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernmentBuildingType>, number: number) => {
    return governmentBuildings.filter(b => b.staffCount > number)
}

