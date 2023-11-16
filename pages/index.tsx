import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Body from "../components/Home/Body";
import Benefits from "../components/Home/Benefits";
import Spline from "@splinetool/react-spline";
import { fetchUsers } from "../utils/fetchUsers";
import { User, UserBody } from "../typings";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
  users: User[];
}
const Home = ({ users }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isNewUser, setIsNewUser] = useState(false);
  const postUser = async () => {
    const userInfo: UserBody = {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      leaderboard: 0,
      focus: 0,
    };
    const result = await fetch(`/api/addUser`, {
      body: JSON.stringify(userInfo),
      method: "POST",
    });

    const json = await result.json();
    return json;
  };

  console.log(users.filter((user) => user.name === session?.user?.name));

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (session) {
        const match = users.find((user) => user.name === session?.user?.name);
        if (!match) {
          setIsNewUser(true);
        }
      }
    }, 5000); // delay of 5 seconds

    return () => clearTimeout(timeout);
  }, [session]);

  useEffect(() => {
    if (isNewUser) {
      const createUser = async () => {
        postUser();
      };
      createUser();
    }
  }, [isNewUser]);

  if (session) {
    router.push("/dashboard");
  } else
    return (
      <>
        <Head>
          <title>OwnBoon</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar />
        <div className="mx-auto my-auto">
          <Hero />
          <Body />
          <Benefits />
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      </>
    );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await fetchUsers();

  return {
    props: {
      users,
    },
  };
};
