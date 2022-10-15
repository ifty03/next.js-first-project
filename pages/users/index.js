import Link from "next/link";

function users({ users }) {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>User id:{user.id}</h1>
            <h3>user name:{user.name}</h3>
            <p>Email: {user.email}</p>
            <Link href={`/users/${user.id}`}>
              <a
                style={{
                  padding: "5px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Details
              </a>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return {
    props: {
      users,
    },
  };
}

export default users;
