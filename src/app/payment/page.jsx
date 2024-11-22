const Payment = async ({ searchParams }) => {
  const { size, color } = await searchParams;

  return (
    <main>
      <section className="">
        <article>
          <h2>T-shirt</h2>
          <p>{`Size: ${size}`}</p>
          <p>{`Color: ${color}`}</p>
        </article>
      </section>
    </main>
  );
};

export default Payment;
