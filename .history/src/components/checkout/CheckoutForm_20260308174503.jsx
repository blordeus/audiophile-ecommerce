import CheckoutInput from "./CheckoutInput";
import CheckoutRadio from "./CheckoutRadio";
import CashOnDeliveryNotice from "./CashOnDeliveryNotice";

function CheckoutForm({
  formData,
  errors,
  onChange,
  paymentMethod,
  onPaymentChange,
}) {
  return (
    <section className="rounded-lg bg-white p-6 md:p-8 lg:p-12">
      <h1 className="heading-4 md:text-[32px] md:leading-9 md:tracking-[1.14px]">
        Checkout
      </h1>

      <div className="mt-8">
        <h2 className="subtitle text-[#D87D4A]">Billing Details</h2>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <CheckoutInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={onChange}
            error={errors.name}
            placeholder="Alexei Ward"
          />
          <CheckoutInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            error={errors.email}
            placeholder="alexei@mail.com"
          />
          <CheckoutInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onChange}
            error={errors.phone}
            placeholder="+1 202-555-0136"
            className="md:col-span-1"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="subtitle text-[#D87D4A]">Shipping Info</h2>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <CheckoutInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={onChange}
            error={errors.address}
            placeholder="1137 Williams Avenue"
            className="md:col-span-2"
          />
          <CheckoutInput
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={onChange}
            error={errors.zipCode}
            placeholder="10001"
          />
          <CheckoutInput
            label="City"
            name="city"
            value={formData.city}
            onChange={onChange}
            error={errors.city}
            placeholder="New York"
          />
          <CheckoutInput
            label="Country"
            name="country"
            value={formData.country}
            onChange={onChange}
            error={errors.country}
            placeholder="United States"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="subtitle text-[#D87D4A]">Payment Details</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6">
          <p className="text-[12px] font-bold leading-4 tracking-[-0.21px] text-black">
            Payment Method
          </p>

          <div className="space-y-4">
            <CheckoutRadio
              label="e-Money"
              name="paymentMethod"
              value="e-money"
              checked={paymentMethod === "e-money"}
              onChange={onPaymentChange}
            />
            <CheckoutRadio
              label="Cash on Delivery"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={onPaymentChange}
            />
          </div>

          {paymentMethod === "e-money" ? (
            <>
              <CheckoutInput
                label="e-Money Number"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={onChange}
                error={errors.eMoneyNumber}
                placeholder="238521993"
              />
              <CheckoutInput
                label="e-Money PIN"
                name="eMoneyPin"
                value={formData.eMoneyPin}
                onChange={onChange}
                error={errors.eMoneyPin}
                placeholder="6891"
              />
            </>
          ) : (
            <div className="md:col-span-2">
              <CashOnDeliveryNotice />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;