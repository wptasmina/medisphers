'use client'
function CheckoutForm({ clientSecret, bookingData }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) return;
  
      setLoading(true);
  
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      setLoading(false);
  
      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
  
        // Save booking to MongoDB
        try {
          const res = await fetch("/api/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...bookingData,
              payment: "online", // override to ensure consistent formatting
            }),
          });
  
          if (res.ok) {
            alert("Booking saved successfully!");
          } else {
            alert("Failed to save booking.");
          }
        } catch (err) {
          console.error("Error saving booking:", err);
          alert("Something went wrong while saving booking.");
        }
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 border rounded-md bg-white shadow-sm">
          <CardElement />
        </div>
        <Button type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : `Pay $${bookingData?.fees || 500}`}
        </Button>
      </form>
    );
  }
  