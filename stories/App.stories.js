import React from "react";
import { PrifinaProvider, usePrifina } from "@prifina/hooks";

export default { title: "ProviderTest" };

export const providerTest = () => {
  const { currentUser, check } = usePrifina({});
  console.log(currentUser);

  return (
    <div>
      Provider Testing{" "}
      <button
        onClick={() => {
          console.log(check());
        }}
      >
        Test
      </button>
    </div>
  );
};
/*
providerTest.story = {
  name: "Provider Test",
};
*/

providerTest.story = {
  name: "Provider Test",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
