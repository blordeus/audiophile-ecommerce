export function validateCheckout(formData, paymentMethod) {
  const errors = {};

  if (!formData.name.trim()) errors.name = "Required";
  if (!formData.email.trim()) {
    errors.email = "Required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Wrong format";
  }

  if (!formData.phone.trim()) errors.phone = "Required";
  if (!formData.address.trim()) errors.address = "Required";
  if (!formData.zipCode.trim()) errors.zipCode = "Required";
  if (!formData.city.trim()) errors.city = "Required";
  if (!formData.country.trim()) errors.country = "Required";

  if (paymentMethod === "e-money") {
    if (!formData.eMoneyNumber.trim()) errors.eMoneyNumber = "Required";
    if (!formData.eMoneyPin.trim()) errors.eMoneyPin = "Required";
  }

  return errors;
}