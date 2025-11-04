export const roundUp = (n) => Math.ceil(Number(n?n:0));

export const roundDown = (n) => Math.floor(Number(n?n:0));

export const formatNumber = (n) => Number(n?n:0).toFixed(2);

const  brickPrice = ()=>14;
const  cementPrice = ()=>550;
const  sandPrice = ()=>7;
const  ReinforcementPrice = ()=>7;



export const totalCalculation = (items) => {
  let total = {
    bricks:{
      amount: 0,
      unit: "nos",
      cost:0
    },
    cement:{
      amount: 0,
      unit: "nos",
      cost:0
    },
    sand:{
      amount: 0,
      amount_in_bags:0,
      unit: "nos",
      cost:0
    },
    reinforcement:{
      amount: 0,
      unit: "nos",
      cost:0
    },
    totalCost:()=>{
      return total.bricks.cost + total.cement.cost + total.sand.cost + total.reinforcement.cost;
    }
  }
  for(let i = 0; i < items.length; i++){
    let item = items[i];

    // Bricks Calculations
    total.bricks.amount = parseFloat(total.bricks.amount) + parseFloat(formatNumber(item?.materials?.bricks?.amount));
    total.bricks.cost = roundUp(total.bricks.amount) * brickPrice();

    // Cement Calculations
    total.cement.amount = parseFloat(total.cement.amount) + parseFloat(formatNumber(item?.materials?.cement?.amount));
    total.cement.cost = roundUp(total.cement.amount) * cementPrice();

    // Sand Calculations
    total.sand.amount = parseFloat(total.sand.amount) + parseFloat(formatNumber(item?.materials?.sand?.amount));
    total.sand.cost = roundUp(total.sand.amount) * sandPrice();

    // Reinforcement Calculations
    total.reinforcement.amount = parseFloat(total.reinforcement.amount) + parseFloat(formatNumber(item?.materials?.reinforcement?.amount));
    total.reinforcement.cost = roundUp(total.reinforcement.amount) * ReinforcementPrice();

  }
  return total;
}