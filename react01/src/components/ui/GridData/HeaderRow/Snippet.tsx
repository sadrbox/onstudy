import React, { useState, useEffect, ReactNode, FC } from 'react';

interface TSnippetProps extends TArgState {
  children: ReactNode
}
type TArgState = {
  arg1: string
  arg2: string
}

const Snippet: FC<TSnippetProps> = ({ children, arg1, arg2 }) => {
  const [argState, setArgState] = useState<TArgState | undefined>(undefined)

  useEffect(() => {
    if (arg1 && arg2) {
      setArgState({ arg1, arg2 })
    }
  }, [])

  return (
    <div>
      {argState && children}
    </div>
  );
};

export default Snippet;