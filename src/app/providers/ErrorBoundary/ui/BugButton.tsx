import React, { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

// test error boundary component

const BugButton = () => {
  const [error, setError] = React.useState(false);

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error("I crashed!");
    }
  }, [error]);

  return <Button onClick={onThrowError}>throw Error</Button>;
};

export default BugButton;
