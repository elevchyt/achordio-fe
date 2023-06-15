import { createContext, ReactNode, useState } from "react";

export type ModalContextType = {
  isOpen: boolean;
  isButtonDisabled: boolean;
  modalType: string;
  setIsOpen: (isOpen: boolean) => void;
  setIsButtonDisabled: (isButtonDisabled: boolean) => void;
  setModalType: (modalType: string) => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  isButtonDisabled: false,
  modalType: "empty",
  setIsOpen: () => {},
  setIsButtonDisabled: () => {},
  setModalType: () => {},
});

type ProviderPropsType = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ProviderPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("login");

  const contextValue = {
    isOpen,
    isButtonDisabled,
    modalType,
    setIsOpen,
    setIsButtonDisabled,
    setModalType,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
