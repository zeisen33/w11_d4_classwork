import produceData from "../mockData/produce.json";

export default function produceReducer(state = {}, action) {
  Object.freeze(state);
  let nextState = { ...state };
  switch (action.type) {
    default:
      return state;
    case "produce/POPULATE":
      action.produce.forEach((ele) => {
        nextState[ele.id] = ele;
      });
      return nextState;
  }
}

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};
