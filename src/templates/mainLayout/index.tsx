import { FC, memo } from "react";
import Header from "organisms/header";
import Footer from "organisms/footer";
import "./styles.css";

interface IMainLayout {
  children: JSX.Element | JSX.Element[] | string;
}
const MainLayout: FC<IMainLayout> = ({ children }: IMainLayout) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
