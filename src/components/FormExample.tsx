export default () => (
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" />
    <br />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" />
    <br />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" />
    <br />
    <br />
    <input type="submit" value="Submit" />
  </form>
);
