import { ReactNode, createContext, useReducer } from "react";
import { CarDataType, carsData } from "../assets/data";

interface CarContextProps {
  children: ReactNode;
}

interface CarState {
  cars: CarDataType[];
}

interface CarAction {
  type: string;
  id: string;
}

const CarList: CarDataType[] = carsData;

const initalCarState: CarState = {
  cars: CarList,
};

const CarReducer = (state: CarState, action: CarAction): CarState => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        cars: state.cars.map((car) => {
          if (car.id === action.id) {
            return { ...car, isBookmarked: !car.isBookmarked };
          }
          return car;
        }),
      };
    default:
      return state;
  }
};

export const CarContext = createContext<{
  state: CarState;
  dispatch: React.Dispatch<CarAction>;
}>({
  state: initalCarState,
  dispatch: () => {},
});

export const CarProvider = ({ children }: CarContextProps) => {
  const [state, dispatch] = useReducer(CarReducer, initalCarState);
  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};
