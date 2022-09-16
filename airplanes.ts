export interface Airplane {
  name: string;
  id: number;
  manufacturer: string;
  capacity: number;
  size: Size;
}

export interface Size {
  length: number;
  wingspan: number;
  height: number;
}

export const airplanesData: Airplane[] = [
  {
    id: 0,
    name: "Airbus A380-800",
    manufacturer: "Airbus",
    capacity: 853,
    size: {
      length: 72.7,
      wingspan: 79.8,
      height: 24.1,
    },
  },
  {
    id: 1,
    name: "Boeing 747-400",
    manufacturer: "Boeing",
    capacity: 660,
    size: {
      length: 70.66,
      wingspan: 64.44,
      height: 19.4,
    },
  },
  {
    id: 2,
    name: "Boeing 747-8",
    manufacturer: "Boeing",
    capacity: 605,
    size: {
      length: 76.3,
      wingspan: 68.4,
      height: 19.4,
    },
  },
  {
    id: 3,
    name: "Boeing 777-300ER",
    manufacturer: "Boeing",
    capacity: 550,
    size: {
      length: 73.9,
      wingspan: 64.75,
      height: 18.5,
    },
  },
  {
    id: 4,
    name: "Airbus A340-600",
    manufacturer: "Airbus",
    capacity: 475,
    size: {
      length: 75.36,
      wingspan: 63.45,
      height: 17.93,
    },
  },
  {
    id: 5,
    name: "Airbus A350-900",
    manufacturer: "Airbus",
    capacity: 440,
    size: {
      length: 66.8,
      wingspan: 64.75,
      height: 17.05,
    },
  },
  {
    id: 6,
    name: "Boeing 777-200LR",
    manufacturer: "Boeing",
    capacity: 440,
    size: {
      length: 63.7,
      wingspan: 64.8,
      height: 18.6,
    },
  },
  {
    id: 7,
    name: "Airbus A340-500",
    manufacturer: "Airbus",
    capacity: 440,
    size: {
      length: 67.93,
      wingspan: 63.45,
      height: 17.53,
    },
  },
  {
    id: 8,
    name: "Airbus A340-300",
    manufacturer: "Airbus",
    capacity: 440,
    size: {
      length: 63.69,
      wingspan: 60.3,
      height: 16.99,
    },
  },
  {
    id: 9,
    name: "Airbus A330-300",
    manufacturer: "Airbus",
    capacity: 440,
    size: {
      length: 63.66,
      wingspan: 60.3,
      height: 16.79,
    },
  },
];
