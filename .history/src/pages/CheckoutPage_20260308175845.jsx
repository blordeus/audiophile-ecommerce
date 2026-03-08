import { useState } from "react";
import { Navigate } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import PageContainer from "../components/layout/PageContainer";
import BackLink from "../components/common/BackLink";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import OrderConfirmationModal from "../components/checkout/OrderConfirmationModal";
import { useCart } from "../hooks/useCart";
import { validateCheckout } from "../utils/checkout";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eMoneyNumber: "",
  eMoneyPin: "",
};

function CheckoutPage() {
  const { cartItems, productTotal, shipping, vat, grandTotal, clearCart } = useCart();

  const [formData, setFormData] = useState(initialFormData);
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [errors, setErrors] = useState({});
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState(null);

  if (cartItems.length === 0 && !submittedOrder) {
    return <Navigate to="/" replace />;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function handlePaymentChange(event) {
    const { value } = event.target;
    setPaymentMethod(value);

    if (value === "cash") {
      setErrors((prev) => ({
        ...prev,
        eMoneyNumber: "",
        eMoneyPin: "",
      }));
    }
  }

  function handleSubmitOrder() {
    const validationErrors = validateCheckout(formData, paymentMethod);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedOrder({
      items: cartItems.map((item) => ({ ...item })),
      productTotal,
      shipping,
      vat,
      grandTotal,
    });

    setIsConfirmationOpen(true);
  }

  function handleCloseConfirmation() {
    setIsConfirmationOpen(false);
  }

  function handleConfirmOrder() {
    clearCart();
    setFormData(initialFormData);
    setPaymentMethod("e-money");
    setErrors({});
    setSubmittedOrder(null);
  }

  return (
    <SiteLayout>
      <main className="bg-[#F1F1F1] py-4 md:py-8 lg:py-20">
        <PageContainer>
          <BackLink className="mb-6 inline-flex md:mb-10 lg:mb-14" />

          <div className="grid gap-8 lg:grid-cols-[1fr_350px] lg:items-start">
            <CheckoutForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
              paymentMethod={paymentMethod}
              onPaymentChange={handlePaymentChange}
            />

            <CheckoutSummary onSubmitOrder={handleSubmitOrder} />
          </div>
        </PageContainer>

        <OrderConfirmationModal
          isOpen={isConfirmationOpen}
          order={submittedOrder}
          onClose={handleCloseConfirmation}
          onConfirm={handleConfirmOrder}
        />
      </main>
    </SiteLayout>
  );
}

export default CheckoutPage;