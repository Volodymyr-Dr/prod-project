import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

export interface NotFoundPageProps {
  className?: string;
}
const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("notFoundPage")}
    </div>
  );
};

export default NotFoundPage;
