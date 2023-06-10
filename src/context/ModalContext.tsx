import { createContext, ReactNode, useState } from "react";

export type ModalContextType = {
  isOpen: boolean;
  isButtonDisabled: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsButtonDisabled: (isButtonDisabled: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  isButtonDisabled: false,
  setIsOpen: () => {},
  setIsButtonDisabled: () => {},
});

type ProviderPropsType = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ProviderPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const contextValue = {
    isOpen,
    isButtonDisabled,
    setIsOpen,
    setIsButtonDisabled,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
