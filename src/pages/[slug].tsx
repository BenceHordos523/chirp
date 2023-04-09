import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "bencehordos523",
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>404</div>;

  console.log(data);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>{data.name}</div>
      </main>
    </>
  );
};

export default ProfilePage;
