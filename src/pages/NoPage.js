import { Box, Center, VStack } from "@chakra-ui/react";

export default function NoPage()
{
  return (
    <div class="nopage">
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <a href="/home"><h2>Back to Home Page</h2></a>
    </div>
  );
}