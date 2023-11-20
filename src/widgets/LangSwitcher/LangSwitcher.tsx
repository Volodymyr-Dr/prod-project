import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonTheme, Button } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t(short ? "languege_short" : "languege")}
    </Button>
  );
};
