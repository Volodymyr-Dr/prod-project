import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";

export interface PageErrorProps {
  className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("SomethingWentWrong")}</p>
      <Button className={cls.PageError__button} onClick={reloadPage}>
        {t("RefreshPage")}
      </Button>
    </div>
  );
};

export default PageError;
