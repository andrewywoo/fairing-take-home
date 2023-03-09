export default function SessionQuestion({ handleOnSubmit }) {
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
        <option value="idaho">Idaho</option>
        <option value="newYork">New York</option>
        <option value="wisconsin">Wisconsin</option>
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
