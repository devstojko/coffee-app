const priceFormat = priceTier => {
  let text = "Price range: ";
  switch (priceTier) {
    case 1:
      text += "under $10";
      break;
    case 2:
      text += "between $10 - $20";
      break;
    case 3:
      text += "between $20 - $30";
      break;
    case 4:
      text += "above 30";
      break;
    default:
      text;
  }

  return text;
};

export default priceFormat;
