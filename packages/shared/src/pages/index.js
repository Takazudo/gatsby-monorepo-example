import * as React from "react";
import Button from "../components/button";
import Box from "../components/box";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>shared!</title>
      <Button href="https://example.com">BOOOOOM</Button>
      <Box>
        <p>The quick brown fox jumps over the lazy dog. </p>
        <p>The quick brown fox jumps over the lazy dog. </p>
      </Box>
    </main>
  );
};

export default IndexPage;
