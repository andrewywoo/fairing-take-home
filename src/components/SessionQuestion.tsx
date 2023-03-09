export default function SessionQuestion() {
  const handleOnSubmit = (event) => {
    console.log("customerType", event.target.customerType.value);
    console.log("locaiton", event.target.location.value);
    console.log("redshirt", event.target.redShirt.checked);
    console.log("blackjeans", event.target.blackJeans.checked);
    console.log("bluesweater", event.target.blueSweater.checked);
    event.preventDefault();
  };

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <h1>Customer Setup</h1>
      <h2>First time customer setup.</h2>
      <label htmlFor="customerType">Type</label>
      <select id="customerType">
        <option value="new">New</option>
        <option value="returning">Returning</option>
      </select>
      <label htmlFor="location">Location</label>
      <select id="location">
        <option value="someOption">Idaho</option>
        <option value="otherOption">New York</option>
        <option value="otherOption">Wisconsin</option>
      </select>
      <div>Products Purchased</div>
      <input id="redShirt" type="checkbox" value="redShirt" />
      <label htmlFor="redShirt">Red Shirt</label>
      <input id="blackJeans" type="checkbox" value="blackJeans" />
      <label htmlFor="blackJeans">Black Jeans</label>
      <input id="blueSweater" type="checkbox" value="blueSweater" />
      <label htmlFor="blueSweater">Blue Sweater</label>
      <input type="submit" value="Submit" />
    </form>
  );
}
