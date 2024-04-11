import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import QuestionSelection from "@/Components/QuestionSelection";


export default function Home({ dir }) {
  return (
    <>
      <main>
        <QuestionSelection id="0" description={"test"} />
      </main>
    </>
  );
}
