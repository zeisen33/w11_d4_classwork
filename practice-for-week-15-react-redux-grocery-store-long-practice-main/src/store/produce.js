import produceData from "../mockData/produce.json";

export default function produceReducer(state = {}, action) {
  Object.freeze(state);
  let nextState = { ...state };
  switch (action.type) {
    case "produce/POPULATE":
      action.produce.forEach((ele) => {
        nextState[ele.id] = ele;
      });
      return nextState;
    default:
      return state;
  }
}

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};
