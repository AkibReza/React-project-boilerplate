import React from "react";

console.clear();

const createPolicy = (name, amountTaken) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amountTaken: amountTaken,
    },
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountGiven) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountGiven: amountGiven,
    },
  };
};

const claimsHistory = (oldList = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldList, action.payload];
  }

  return oldList;
};

const accounting = (totalAmount, action) => {
  if (action.type === "CREATE_CLAIM") {
    return totalAmount - action.payload.amountGiven;
  } else if (action.type === "CREATE_POLICY") {
    return totalAmount + action.payload.amountTaken;
  }
  return totalAmount;
};

const policies = (policyList = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...oldList, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return policyList.filter((name) => name !== action.payload.name);
  }
};

console.log(Redux);

export default App;
