function singleUser({ user }) {
  return (
    <div style={{ margin: "100px" }}>
      <h2>User Id:{user.id}</h2>
      <h2>{user.name}</h2>
      <h4>User Email: {user.email}</h4>
      <p>City: {user.address.city}</p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { userId } = ctx.query;
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json());

  return {
    props: {
      user,
    },
  };
}

export default singleUser;
