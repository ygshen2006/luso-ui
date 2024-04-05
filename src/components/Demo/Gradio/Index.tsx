import { useCallback, useEffect, useState } from "react";
import { client } from "@gradio/client";

const GradioTest = () => {
  const [data, setData] = useState<any>();
  const callApi = useCallback(async () => {
    const app = await client("Yuangong/qa_johnshen", {
      hf_token: "hf_hf_iYiKtOgckJYuHtybcNaXjPGrjiaTVNmONc",
    });
    const result = await app.predict("/predict", [
      "How old is Jolly?", // string  in 'question' Textbox component
      "John is a boy at 41 years old, his child Jolly is a girl. And she is 30 years youger that John!!", // string  in 'context' Textbox component
    ]);

    console.log(setData(result));
  }, []);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default GradioTest;
