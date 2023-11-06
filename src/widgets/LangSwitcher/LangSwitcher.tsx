import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeButton, Button } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("languege")}
    </Button>
  );
};
