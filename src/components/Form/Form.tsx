const Form = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Introduce your email"
        required
        autoComplete="off"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Introduce your password"
        required
      />
      <label htmlFor="image">Image</label>
      <input id="image" type="file" placeholder="Introduce an image" required />
      <button>Send</button>
    </form>
  );
};

export default Form;
