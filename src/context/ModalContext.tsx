import { createContext, ReactNode, useState } from "react";

export type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

type ProviderPropsType = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ProviderPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
