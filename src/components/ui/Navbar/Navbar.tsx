import Container from "../Container";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <Container>
      <MobileNav />
      <DesktopNav />
    </Container>
  );
};

export default Navbar;
