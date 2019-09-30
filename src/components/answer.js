import React, { useEffect } from "react";

export default props => {
  const [isVisible, setVisible] = React.useState(false);

  const { text, code, asString } = props;

  useEffect(() => {
    return () => setVisible(false);
  }, []);

  // Returned when isVisible is true
  const getAnswer = () => {
    if (!isVisible) {
      return null;
    }

    return (
      <>
        {asString ? (
          <pre className="toggle-answer" onClick={() => setVisible(false)}>
            {code}
          </pre>
        ) : (
          <pre className="toggle-answer" onClick={() => setVisible(false)}>
            {JSON.stringify(code)}
          </pre>
        )}
      </>
    );
  };

  // Common header
  const AnswerHeader = () => (
    <>
      <strong>Answer:</strong>
      <span> {text} </span>
    </>
  );

  if (!isVisible) {
    return (
      <>
        <AnswerHeader />
        <input
          type="button"
          onClick={() => setVisible(true)}
          value="Show Answer"
        />
      </>
    );
  }

  // When answer is visible
  if (!code) {
    return (
      <>
        {AnswerHeader()}
        {props.children}
      </>
    );
  }

  return (
    <>
      {AnswerHeader()}
      {getAnswer()}
      {props.children}
    </>
  );
};
