export interface EventData {
  locationId: number
  day: string
  time: string
  name: string
  description: string
}

export interface EventWithLocation {
  id: number
  locationId: number
  locationName: string
  eventName: string
  day: string
  time: string
  description: string
}

export interface Event extends EventData {
  id: number
}

export interface EventsData {
  locations: []
  days: []
  day: string
}

export interface EventDay {
  value: string
  name: string
  selected: string
}

export interface EventByIdData {
  event: {
    id: number
    locationId: number
    day: string
    time: string
    name: string
    description: string
  }
  locations: []
  days: []
}
