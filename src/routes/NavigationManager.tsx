import { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationManagerProps {
  children: ReactElement;
}

export default function NavigationManager({
  children,
}: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function hostNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener("[host] navigated", hostNavigationHandler);

    return () => {
      window.removeEventListener("[host] navigated", hostNavigationHandler);
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[author] navigated", {
        detail: location.pathname + (location.search ?? ""),
      })
    );
  }, [location]);

  return children;
}
