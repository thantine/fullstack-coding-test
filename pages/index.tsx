import Head from "next/head";

import { useRef } from "react";

import { Container, Input, Stack } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";

const Home = () => {
  const dynamicTextRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dynamicTextRef.current.changeValue(e.target.value);
  };

  return (
    <Container className={styles.container} maxW="xl" centerContent>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stack>
          <DynamicText ref={dynamicTextRef} />
          <Input onChange={onChange} />
        </Stack>
      </main>
    </Container>
  );
};

export default Home;
